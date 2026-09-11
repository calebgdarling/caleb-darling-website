/**
 * Small by design. The point is that "the price" is an accumulation of six
 * things, and that the dispute path comes back off the end of it.
 */
const STEPS = [
  "Quote",
  "Promotions",
  "Add-ons",
  "Insurance",
  "Fees",
  "Payment",
];

export function PaymentsDiagram() {
  const w = 96;
  const gap = 12;
  const x = (i: number) => 8 + i * (w + gap);

  return (
    <svg
      className="diagram"
      viewBox="0 0 660 168"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A booking's money path: quote, promotions, add-ons, insurance, fees, then payment. A dispute branches back off the payment step and requires assembling evidence under card network deadlines."
    >
      <defs>
        <marker
          id="pay-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 z" fill="var(--gray-a9)" />
        </marker>
      </defs>

      <g
        fontFamily="var(--default-font-family)"
        fill="var(--gray-12)"
        fontSize="11"
      >
        <text x="8" y="14" fontSize="10" fill="var(--gray-11)">
          WHAT LANDS ON ONE ORDER
        </text>

        {STEPS.map((label, i) => (
          <g key={label}>
            <rect
              x={x(i)}
              y="28"
              width={w}
              height="42"
              rx="6"
              fill={
                i === STEPS.length - 1 ? "var(--accent-3)" : "var(--gray-3)"
              }
              stroke={
                i === STEPS.length - 1 ? "var(--accent-a7)" : "var(--gray-a7)"
              }
            />
            <text x={x(i) + w / 2} y="54" textAnchor="middle">
              {label}
            </text>
            {i < STEPS.length - 1 ? (
              <path
                d={`M${x(i) + w} 49 L${x(i + 1)} 49`}
                stroke="var(--gray-a9)"
                strokeWidth="1.5"
                fill="none"
                markerEnd="url(#pay-arrow)"
              />
            ) : null}
          </g>
        ))}

        {/* Dispute branch */}
        <path
          d={`M${x(5) + w / 2} 70 L${x(5) + w / 2} 104 L${x(1) + w / 2} 104 L${x(1) + w / 2} 118`}
          stroke="var(--red-a8)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
          markerEnd="url(#pay-arrow)"
        />
        <rect
          x={x(1) - 24}
          y="118"
          width={w + 48}
          height="42"
          rx="6"
          fill="var(--red-3)"
          stroke="var(--red-a7)"
        />
        <text x={x(1) + w / 2} y="138" textAnchor="middle">
          Dispute
        </text>
        <text
          x={x(1) + w / 2}
          y="152"
          textAnchor="middle"
          fontSize="10"
          fill="var(--gray-11)"
        >
          evidence, on a deadline
        </text>
      </g>
    </svg>
  );
}
