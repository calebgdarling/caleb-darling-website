/**
 * Stage flow left to right, with the two external systems hanging off the
 * stages they attach to. Almost pure architecture — prose serves it worst
 * (handoff §13.3), so the drawing carries it.
 */
const STAGES = [
  "Draft",
  "Out for signature",
  "Signed",
  "Active",
  "Submitted to ERP",
];

export function VehicleOrdersDiagram() {
  const w = 118;
  const gap = 16;
  const x = (i: number) => 8 + i * (w + gap);

  return (
    <svg
      className="diagram"
      viewBox="0 0 660 210"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Order stages left to right: draft, out for signature, signed, active, submitted to ERP. Dropbox Sign attaches to the signature stage. MAPICS and AS400 attach to the final stage. ERP records can only be created once an order reaches signed or active."
    >
      <defs>
        <marker
          id="vo-arrow"
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
        fontSize="12"
      >
        <text x="8" y="14" fontSize="10" fill="var(--gray-11)">
          ORDER STAGE
        </text>

        {STAGES.map((label, i) => {
          const gated = i >= 2;
          return (
            <g key={label}>
              <rect
                x={x(i)}
                y="30"
                width={w}
                height="52"
                rx="6"
                fill={gated ? "var(--accent-3)" : "var(--gray-3)"}
                stroke={gated ? "var(--accent-a7)" : "var(--gray-a7)"}
              />
              <text x={x(i) + w / 2} y="54" textAnchor="middle" fontSize="11">
                {label.split(" ").slice(0, 2).join(" ")}
              </text>
              {label.split(" ").length > 2 ? (
                <text x={x(i) + w / 2} y="69" textAnchor="middle" fontSize="11">
                  {label.split(" ").slice(2).join(" ")}
                </text>
              ) : null}
              {i < STAGES.length - 1 ? (
                <path
                  d={`M${x(i) + w} 56 L${x(i + 1)} 56`}
                  stroke="var(--gray-a9)"
                  strokeWidth="1.5"
                  fill="none"
                  markerEnd="url(#vo-arrow)"
                />
              ) : null}
            </g>
          );
        })}

        {/* ERP creation gate */}
        <path
          d={`M${x(2) - gap / 2} 24 L${x(2) - gap / 2} 96`}
          stroke="var(--accent-a8)"
          strokeWidth="1.5"
          strokeDasharray="5 4"
        />
        <text
          x={x(2) - gap / 2 + 6}
          y="108"
          fontSize="10"
          fill="var(--accent-11)"
        >
          ERP records can only be created past this line
        </text>

        {/* External systems */}
        <path
          d={`M${x(1) + w / 2} 82 L${x(1) + w / 2} 148`}
          stroke="var(--gray-a9)"
          strokeWidth="1.5"
          fill="none"
          markerEnd="url(#vo-arrow)"
        />
        <rect
          x={x(1) - 12}
          y="148"
          width={w + 24}
          height="44"
          rx="6"
          fill="var(--gray-2)"
          stroke="var(--gray-a7)"
        />
        <text x={x(1) + w / 2} y="168" textAnchor="middle" fontSize="11">
          Dropbox Sign
        </text>
        <text
          x={x(1) + w / 2}
          y="182"
          textAnchor="middle"
          fontSize="10"
          fill="var(--gray-11)"
        >
          e-signature
        </text>

        <path
          d={`M${x(4) + w / 2} 82 L${x(4) + w / 2} 148`}
          stroke="var(--gray-a9)"
          strokeWidth="1.5"
          fill="none"
          markerEnd="url(#vo-arrow)"
        />
        <rect
          x={x(4) - 12}
          y="148"
          width={w + 24}
          height="44"
          rx="6"
          fill="var(--gray-2)"
          stroke="var(--gray-a7)"
        />
        <text x={x(4) + w / 2} y="168" textAnchor="middle" fontSize="11">
          MAPICS / AS400
        </text>
        <text
          x={x(4) + w / 2}
          y="182"
          textAnchor="middle"
          fontSize="10"
          fill="var(--gray-11)"
        >
          mainframe ERP
        </text>
      </g>
    </svg>
  );
}
