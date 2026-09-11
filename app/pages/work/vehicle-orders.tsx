import { workEntry } from "~/content/work";
import { VehicleOrdersDiagram } from "~/diagrams/vehicle-orders";
import { Aside, CaseStudy, Field, Fields } from "~/primoridals/case-study";

const entry = workEntry("vehicle-orders");

export default function VehicleOrders() {
  return (
    <CaseStudy
      entry={entry}
      diagram={<VehicleOrdersDiagram />}
      diagramCaption="Two external systems, attached at the stages that need them."
    >
      <Fields>
        <Field label="Problem">
          Beyond renting vehicles, outfitters buy them. That's a stage-gated
          procurement flow with legal signatures, inspection requirements, and a
          handoff into a mainframe ERP that predates everything else in the
          stack.
        </Field>
        <Field label="Constraint">
          Stage transitions have hard rules — ERP records can only be created
          once an order reaches signed or active, and an order can only return
          to draft under specific conditions. E-signature is a third party with
          its own failure modes, including orders that end up with no signature
          request row at all. The ERP is owned by another team on another
          platform with its own release cadence and credential process, making
          part of the critical path non-technical.
        </Field>
        <Field label="Approach">
          Built and refined the order lifecycle: stage-gated ERP record
          creation, recovery paths for orders orphaned by e-signature failures,
          customization justification validation, delivery date visibility, and
          order number constraints. Handled ERP-side details like shipping
          address overrides and model selection. Framed out a dedicated
          order-management API service to own the integration boundary rather
          than scattering it through the app.
        </Field>
        <Field label="Result">
          Orders move through signature and into the ERP with stage rules
          enforced in one place, and e-signature failures are recoverable
          instead of terminal.
        </Field>
      </Fields>

      <Aside>
        The ERP integration is deliberately a separate service boundary. That's
        more moving parts than calling it inline — worth it because the ERP's
        release cadence isn't ours.
      </Aside>
    </CaseStudy>
  );
}
