import type { Metadata } from "next";
import PartnerPage, { PartnerData } from "@/components/system/PartnerPage";

export const metadata: Metadata = {
  title: "United Manufacturing Hub — Distribution & Implementation",
  description:
    "Innovaas architects and deploys the United Manufacturing Hub — the open-source Unified Namespace platform for industrial IoT — across Southeast Asia.",
  alternates: { canonical: "/distribution/umh" },
};

const data: PartnerData = {
  code: "UMH",
  name: "United Manufacturing Hub",
  category: "Open-Source IIoT Infrastructure · Unified Namespace",
  logo: "/partners/UnitedManufacturingHub/UMH_WhiteTransparent.png",
  tagline: "One namespace for",
  taglineAccent: "every machine you own.",
  intro:
    "The United Manufacturing Hub is the open-source standard for industrial data infrastructure. It implements a Unified Namespace — a single, structured, real-time layer where every machine, sensor, and system publishes its data — built on proven open technologies like MQTT and Kafka, deployed on Kubernetes, and managed through a modern console.",
  facts: [
    { k: "CATEGORY", v: "IIoT Data Infrastructure" },
    { k: "MODEL", v: "Open source + managed" },
    { k: "ARCHITECTURE", v: "UNS / MQTT / Kafka" },
    { k: "INNOVAAS ROLE", v: "Architecture + deployment" },
  ],
  capabilities: [
    {
      t: "Unified Namespace",
      b: "An ISA-95-aligned, event-driven data layer where all factory data lives in one place, in one structure, in real time — the foundation for everything else.",
    },
    {
      t: "Open-source core",
      b: "No black boxes and no per-tag pricing. The stack is auditable, extensible, and backed by an active engineering community.",
    },
    {
      t: "Protocol connectivity",
      b: "Connect OPC UA, Modbus, Siemens S7, MQTT, and REST sources; normalize everything into structured topics your systems can trust.",
    },
    {
      t: "Management console",
      b: "Provision data streams, devices, and applications through a cloud console rather than hand-edited configs — infrastructure your team can actually operate.",
    },
    {
      t: "Kubernetes-native",
      b: "Runs on standard cloud or on-prem Kubernetes with Helm-based deployment, giving IT a platform it already knows how to govern.",
    },
    {
      t: "Analytics-ready",
      b: "Historian, time-series storage, and clean interfaces to Grafana, ML pipelines, and MES — the data arrives ready to use, not ready to clean.",
    },
  ],
  weDeliver: [
    {
      t: "Architecture",
      b: "UNS design, topic hierarchy, and integration strategy mapped to your plants — we architected our own NovaPredict platform on this exact stack.",
    },
    {
      t: "Deployment",
      b: "Edge-to-cloud rollout, protocol integration, Kubernetes operations, and migration from legacy historians and point-to-point integrations.",
    },
    {
      t: "Operation & growth",
      b: "Managed operation if you want it, enablement if you'd rather own it — plus the analytics and ML layers that make the namespace pay.",
    },
  ],
  externalUrl: "https://www.umh.app",
  externalLabel: "umh.app",
};

export default function UMHPage() {
  return <PartnerPage data={data} />;
}
