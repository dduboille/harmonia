"use client";

import dynamic from "next/dynamic";

const VexFlowScore = dynamic(() => import("@/components/VexFlowScore"), { ssr: false });

export const GrandStaffSATB = dynamic(
  () => import("@/components/VexFlowScore").then((m) => m.GrandStaffSATB),
  { ssr: false }
);

export default VexFlowScore;
