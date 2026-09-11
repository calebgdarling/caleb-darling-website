import { Box, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import { Label } from "~/primoridals/prose";

/**
 * The interactive piece (handoff §11), doubling as this case study's diagram
 * (§6.2). Click a state to see the rules governing what it can move to.
 *
 * TODO(caleb): the transition rules below are inferred from the PR titles and
 * the handoff, not read out of the codebase (§13.1). Correct any that are
 * wrong — they are the most specific claims on the site.
 */
type StateId =
  | "enrolled"
  | "available"
  | "prepped"
  | "onRide"
  | "service"
  | "quarantine"
  | "endOfLife";

type VehicleState = {
  label: string;
  x: number;
  y: number;
  w: number;
  transitions: { to: StateId; rule: string }[];
};

const W = 140;
const H = 48;
const ROW1 = 44;
const ROW2 = 170;

const STATES: Record<StateId, VehicleState> = {
  enrolled: {
    label: "Enrolled",
    x: 8,
    y: ROW1,
    w: W,
    transitions: [
      {
        to: "available",
        rule: "Enrollment completes once registration, title status, and the initial inspection are recorded.",
      },
    ],
  },
  available: {
    label: "Available",
    x: 180,
    y: ROW1,
    w: W,
    transitions: [
      {
        to: "prepped",
        rule: "Prep can only start while the vehicle is off ride.",
      },
      {
        to: "quarantine",
        rule: "Quarantine is permission-gated. A quarantined asset can't be booked or prepped.",
      },
    ],
  },
  prepped: {
    label: "Prepped",
    x: 352,
    y: ROW1,
    w: W,
    transitions: [{ to: "onRide", rule: "Assigned to a reservation." }],
  },
  onRide: {
    label: "On ride",
    x: 512,
    y: ROW1,
    w: W,
    transitions: [
      {
        to: "available",
        rule: "Return recorded. Mileage and engine hours are written to the assignment record.",
      },
      {
        to: "service",
        rule: "Usage thresholds or a reported fault route the vehicle to service instead of back to the pool.",
      },
    ],
  },
  service: {
    label: "Service",
    x: 352,
    y: ROW2,
    w: W,
    transitions: [
      { to: "available", rule: "Service closed out and readings updated." },
      { to: "endOfLife", rule: "Retired rather than repaired." },
    ],
  },
  quarantine: {
    label: "Quarantine",
    x: 8,
    y: ROW2,
    w: W,
    transitions: [
      {
        to: "available",
        rule: "Released back to the pool once the hold is cleared.",
      },
      { to: "endOfLife", rule: "Retired out of quarantine." },
    ],
  },
  endOfLife: {
    label: "End of life",
    x: 512,
    y: ROW2,
    w: W,
    transitions: [],
  },
};

const ORDER: StateId[] = [
  "enrolled",
  "available",
  "prepped",
  "onRide",
  "service",
  "quarantine",
  "endOfLife",
];

/** Edges, drawn separately from the rule text so the picture stays readable. */
const EDGES: { from: StateId; to: StateId; d: string; both?: boolean }[] = [
  { from: "enrolled", to: "available", d: "M148 68 L180 68" },
  { from: "available", to: "prepped", d: "M320 68 L352 68" },
  { from: "prepped", to: "onRide", d: "M492 68 L512 68" },
  { from: "onRide", to: "available", d: "M582 44 L582 18 L250 18 L250 44" },
  { from: "onRide", to: "service", d: "M582 92 L582 128 L422 128 L422 170" },
  { from: "service", to: "available", d: "M352 194 L250 194 L250 92" },
  {
    from: "available",
    to: "quarantine",
    d: "M215 92 L215 140 L78 140 L78 170",
    both: true,
  },
  { from: "service", to: "endOfLife", d: "M492 194 L512 194" },
  {
    from: "quarantine",
    to: "endOfLife",
    d: "M78 218 L78 244 L582 244 L582 218",
  },
];

export function FleetLifecycleDiagram() {
  const [selected, setSelected] = useState<StateId>("onRide");
  const active = STATES[selected];

  const isLit = (e: (typeof EDGES)[number]) =>
    e.from === selected || (e.both && e.to === selected);

  return (
    <Flex direction="column" gap="4">
      <svg
        className="diagram"
        viewBox="0 0 660 286"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Vehicle lifecycle state machine: enrolled, available, prepped, on ride, service, quarantine, and end of life. Select a state to read the rules governing what it can move to."
      >
        <defs>
          <marker
            id="fl-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill="var(--gray-a9)" />
          </marker>
          <marker
            id="fl-arrow-lit"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill="var(--accent-10)" />
          </marker>
        </defs>

        <g fontFamily="var(--default-font-family)" fontSize="12">
          {EDGES.map((e) => {
            const lit = isLit(e);
            return (
              <path
                key={`${e.from}-${e.to}`}
                d={e.d}
                fill="none"
                strokeWidth={lit ? 2 : 1.5}
                stroke={lit ? "var(--accent-10)" : "var(--gray-a8)"}
                markerEnd={`url(#fl-arrow${lit ? "-lit" : ""})`}
                markerStart={
                  e.both ? `url(#fl-arrow${lit ? "-lit" : ""})` : undefined
                }
              />
            );
          })}

          {ORDER.map((id) => {
            const s = STATES[id];
            const on = id === selected;
            return (
              <g
                key={id}
                className="state-node"
                role="button"
                tabIndex={0}
                aria-pressed={on}
                aria-label={`${s.label} state`}
                onClick={() => setSelected(id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelected(id);
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                <rect
                  x={s.x}
                  y={s.y}
                  width={s.w}
                  height={H}
                  rx="6"
                  fill={on ? "var(--accent-4)" : "var(--gray-3)"}
                  stroke={on ? "var(--accent-9)" : "var(--gray-a7)"}
                  strokeWidth={on ? 2 : 1}
                />
                <text
                  x={s.x + s.w / 2}
                  y={s.y + H / 2 + 4}
                  textAnchor="middle"
                  fill="var(--gray-12)"
                >
                  {s.label}
                </text>
              </g>
            );
          })}

          <text x="8" y="276" fontSize="10" fill="var(--gray-11)">
            METRICS ACCUMULATE THROUGHOUT — MILEAGE · ENGINE HOURS · WEAR
          </text>
        </g>
      </svg>

      <Box
        p="4"
        style={{
          background: "var(--gray-2)",
          border: "1px solid var(--gray-a5)",
          borderRadius: "var(--radius-3)",
        }}
      >
        <Label>From {active.label.toLowerCase()}</Label>
        <Flex direction="column" gap="2" mt="2">
          {active.transitions.length === 0 ? (
            <Text size="2" color="gray">
              Terminal state. History is retained for reporting.
            </Text>
          ) : (
            active.transitions.map((t) => (
              <Flex key={t.to} gap="3" align="baseline" wrap="wrap">
                <Text size="2" weight="medium" style={{ minWidth: "7rem" }}>
                  → {STATES[t.to].label}
                </Text>
                <Text
                  size="2"
                  color="gray"
                  style={{ flex: 1, minWidth: "14rem" }}
                >
                  {t.rule}
                </Text>
              </Flex>
            ))
          )}
        </Flex>
      </Box>
    </Flex>
  );
}
