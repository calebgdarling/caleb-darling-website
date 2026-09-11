import { Code } from "@radix-ui/themes";
import { workEntry } from "~/content/work";
import { WaiversDiagram } from "~/diagrams/waivers";
import { CaseStudy, Field, Fields } from "~/primoridals/case-study";

const entry = workEntry("waivers");

export default function Waivers() {
  return (
    <CaseStudy
      entry={entry}
      diagram={<WaiversDiagram />}
      diagramCaption="Three ways to sign, one record to audit."
    >
      <Fields>
        <Field label="Problem">
          Every rider on a powersports rental has to sign a liability waiver
          before riding. Signatures arrive from three different places — a
          customer signing at home, a walk-up rider on a kiosk at the outfitter,
          and staff completing check-in — and they have to produce one
          consistent, auditable record.
        </Field>
        <Field label="Constraint">
          The waivers are legal instruments; wording changes need care and the
          flow can't be shortened past what's required. Riders bring guests and
          minors who aren't the booking customer. Waivers exist in multiple
          languages, and a naive join across language variants produces
          duplicate records. Legacy waivers predating the current model still
          have to load.
        </Field>
        <Field label="Approach">
          Built and iterated the waiver flow across all three surfaces — step
          navigation, question validation, per-outfitter custom questions with
          template overrides, a 500-character answer limit, first-time-rider
          detection, and a kiosk timeout for unattended tablets. Designed a
          dedicated <Code size="2">customerWaiverAdditionalParticipants</Code>{" "}
          table so guests and minors are real records rather than free text, and
          wrote the backfill commands to migrate existing riders into it. Added
          the language join that resolved duplicate waiver rows. Shipped
          reservation-creation-on-waiver-submit, which lets a walk-up rider's
          signature generate the booking instead of requiring staff to key it in
          first.
        </Field>
        <Field label="Result">
          One auditable waiver record per rider regardless of where it was
          signed, with guests and minors modeled as first-class rows and legacy
          records still readable.
        </Field>
      </Fields>
    </CaseStudy>
  );
}
