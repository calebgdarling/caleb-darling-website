/**
 * Three intake surfaces converging on one waiver record, which then branches
 * to riders, additional participants, and the reservation. The convergence is
 * the whole point of the case study, so the drawing leads with it.
 */
export function WaiversDiagram() {
  return (
    <svg
      className="diagram"
      viewBox="0 0 660 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Three intake surfaces — customer web before booking, an on-site kiosk, and staff check-in — all produce one waiver record, which branches to rider records, additional participants such as guests and minors, and reservation creation."
    >
      <defs>
        <marker
          id="wv-arrow"
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
          INTAKE SURFACES
        </text>

        <rect
          x="8"
          y="26"
          width="152"
          height="48"
          rx="6"
          fill="var(--accent-3)"
          stroke="var(--accent-a7)"
        />
        <text x="84" y="47" textAnchor="middle">
          Customer web
        </text>
        <text
          x="84"
          y="63"
          textAnchor="middle"
          fontSize="10"
          fill="var(--gray-11)"
        >
          before booking
        </text>

        <rect
          x="8"
          y="102"
          width="152"
          height="48"
          rx="6"
          fill="var(--accent-3)"
          stroke="var(--accent-a7)"
        />
        <text x="84" y="123" textAnchor="middle">
          On-site kiosk
        </text>
        <text
          x="84"
          y="139"
          textAnchor="middle"
          fontSize="10"
          fill="var(--gray-11)"
        >
          walk-up rider
        </text>

        <rect
          x="8"
          y="178"
          width="152"
          height="48"
          rx="6"
          fill="var(--accent-3)"
          stroke="var(--accent-a7)"
        />
        <text x="84" y="199" textAnchor="middle">
          Staff check-in
        </text>
        <text
          x="84"
          y="215"
          textAnchor="middle"
          fontSize="10"
          fill="var(--gray-11)"
        >
          outfitter side
        </text>

        {/* Converge */}
        <g
          stroke="var(--gray-a9)"
          strokeWidth="1.5"
          fill="none"
          markerEnd="url(#wv-arrow)"
        >
          <path d="M160 50 L212 50 L212 126 L252 126" />
          <path d="M160 126 L252 126" />
          <path d="M160 202 L212 202 L212 126 L252 126" />
        </g>

        <rect
          x="252"
          y="96"
          width="146"
          height="60"
          rx="6"
          fill="var(--gray-3)"
          stroke="var(--gray-a7)"
        />
        <text x="325" y="121" textAnchor="middle">
          One waiver
        </text>
        <text x="325" y="139" textAnchor="middle">
          record
        </text>

        {/* Branch */}
        <g
          stroke="var(--gray-a9)"
          strokeWidth="1.5"
          fill="none"
          markerEnd="url(#wv-arrow)"
        >
          <path d="M398 126 L438 126 L438 50 L490 50" />
          <path d="M438 126 L490 126" />
          <path d="M438 126 L438 202 L490 202" />
        </g>

        <rect
          x="490"
          y="26"
          width="162"
          height="48"
          rx="6"
          fill="var(--gray-2)"
          stroke="var(--gray-a7)"
        />
        <text x="571" y="55" textAnchor="middle">
          Rider records
        </text>

        <rect
          x="490"
          y="102"
          width="162"
          height="48"
          rx="6"
          fill="var(--gray-2)"
          stroke="var(--gray-a7)"
        />
        <text x="571" y="123" textAnchor="middle">
          Additional
        </text>
        <text x="571" y="139" textAnchor="middle">
          participants
        </text>

        <rect
          x="490"
          y="178"
          width="162"
          height="48"
          rx="6"
          fill="var(--gray-2)"
          stroke="var(--gray-a7)"
        />
        <text x="571" y="207" textAnchor="middle">
          Reservation
        </text>
      </g>
    </svg>
  );
}
