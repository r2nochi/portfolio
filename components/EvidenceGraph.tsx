"use client";

import { motion, useReducedMotion } from "motion/react";

export default function EvidenceGraph({
  label,
  nodes,
}: {
  label: string;
  nodes: string[];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="evidence-graph" aria-label={label}>
      <svg
        className="graph-lines"
        viewBox="0 0 620 390"
        role="img"
        aria-hidden="true"
      >
        <motion.path
          d="M95 95 C190 30 250 130 310 195 S440 275 525 95"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M95 95 C150 220 230 315 310 195 S450 110 525 300"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
        />
      </svg>

      {nodes.map((node, index) => (
        <motion.div
          className={`graph-node graph-node-${index + 1}`}
          key={node}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 + index * 0.12, duration: 0.45 }}
          // El hover NECESITA su propia transicion. Sin ella hereda la de
          // entrada —incluido el `delay`— y pasar el cursor sobre el cuarto
          // nodo esperaba 0.73 s antes de reaccionar: se sentia roto.
          // Un muelle corto responde en el mismo frame.
          whileHover={
            reduceMotion
              ? undefined
              : {
                  scale: 1.05,
                  y: -4,
                  transition: { type: "spring", stiffness: 460, damping: 24 },
                }
          }
        >
          <span className="node-index mono">0{index + 1}</span>
          <strong>{node}</strong>
          <span className="node-pulse" aria-hidden="true" />
        </motion.div>
      ))}

      <div className="graph-core">
        <span className="mono">ORCHESTRATOR</span>
        <strong>DN</strong>
      </div>
      <p className="graph-caption mono">TRACE_ID: PORTFOLIO_2026</p>
    </div>
  );
}
