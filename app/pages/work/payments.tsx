import { workEntry } from "~/content/work";
import { PaymentsDiagram } from "~/diagrams/payments";
import { CaseStudy, Field, Fields } from "~/primoridals/case-study";

const entry = workEntry("payments");

export default function Payments() {
  return (
    <CaseStudy
      entry={entry}
      diagram={<PaymentsDiagram />}
      diagramCaption="Money on a booking is never one number."
    >
      <Fields>
        <Field label="Problem">
          Money on a booking is never one number. Promotions, add-ons, rental
          equipment, ride insurance, weather guarantees, gift cards, and credits
          all land on the same order, and each has its own rules. When a
          customer disputes a charge, the outfitter has to assemble evidence
          under card network deadlines.
        </Field>
        <Field label="Constraint">
          Card network rules dictate parts of the dispute flow, so the UI can't
          be simplified past what compliance demands. Payment processor
          onboarding is asynchronous and can fail silently. Outfitters build
          dispute submissions over multiple sittings, so partial work has to
          survive. Rounding on fee display is not a cosmetic concern when the
          number is a charge.
        </Field>
        <Field label="Approach">
          Overhauled the disputes UI with bulk evidence upload and fixed draft
          persistence so a submission assembled in one sitting saves the same
          way one built across several does. Added evidence removal, walk-up
          customer identification, and order context in dispute views. Hardened
          Stripe Connect onboarding — the missing-job database timeout, the
          missing onboarding email, file upload error handling. Built gift card
          issuance and PDF delivery, promotion conditions and type casting, ride
          insurance selection with reset-on-driver-change, and outstanding
          balance alerts converted from per-event emails to a daily summary.
        </Field>
        <Field label="Result">
          Dispute submissions survive being built over days, evidence uploads in
          bulk, and the money edges — promotions, insurance, gift cards, fees —
          behave predictably enough that support stops fielding them.
        </Field>
      </Fields>
    </CaseStudy>
  );
}
