import { workEntry } from "~/content/work";
import { FleetLifecycleDiagram } from "~/diagrams/fleet-lifecycle";
import { CaseStudy, Field, Fields } from "~/primoridals/case-study";
import { CodeArtifact } from "~/primoridals/code-artifact";

const entry = workEntry("fleet");

/**
 * Illustrative, not lifted from the client codebase — table and column names
 * are invented (handoff §13.2). The 1093 workaround is the real content.
 */
const dedupQuery = `DELETE FROM asset_usage
WHERE id IN (
  -- The derived table is the workaround: it materializes the ranked set
  -- under a different identity, so the DELETE is no longer reading the
  -- table it is writing to.
  SELECT id FROM (
    SELECT
      id,
      ROW_NUMBER() OVER (
        PARTITION BY asset_id, recorded_on
        ORDER BY updated_at DESC, filled_fields DESC, id ASC
      ) AS rn
    FROM asset_usage
  ) AS ranked
  WHERE ranked.rn > 1
);`;

export default function Fleet() {
  return (
    <CaseStudy
      entry={entry}
      diagram={<FleetLifecycleDiagram />}
      diagramCaption="Select a state to see the rules governing what it can move to."
    >
      <Fields>
        <Field label="Problem">
          A rental network's vehicles move through a long lifecycle, and every
          stage has rules. A vehicle on a ride can't be prepped. A quarantined
          asset needs different permissions. Usage metrics feed maintenance
          decisions, so if they're wrong the wrong vehicles get serviced.
        </Field>
        <Field label="Constraint">
          Live fleet data with years of accumulated inconsistency — metric
          columns added and abandoned, usage history rows that didn't reflect
          actual assignments. Telematics devices arrive with duplicate IMEIs. A
          third-party warranty API returns nulls where the schema promised
          values. Operations staff need bulk editing across hundreds of vehicles
          without losing the audit trail.
        </Field>
        <Field label="Approach">
          Led a system-wide overhaul of how vehicle metrics are recorded,
          including backfilling usage readings and engine hours into the
          assignment tables reporting depends on, and dropping metric columns
          that had gone unused. Enforced lifecycle rules in the model rather
          than the UI. Built bulk edit for registration, title status, and
          inspection overrides, with change-log entries so bulk operations stay
          auditable. Improved the vehicle enrollment wizard and added
          drag-and-drop ordering for asset families.
        </Field>
        <Field label="Result">
          Fleet metrics that maintenance decisions can be trusted against,
          lifecycle rules enforced in one place, and bulk operations that leave
          an audit trail.
        </Field>
      </Fields>

      <CodeArtifact
        code={dedupQuery}
        caption="MySQL won't let you reference the target table in a subquery of a DELETE. This is the way around it."
      />
    </CaseStudy>
  );
}
