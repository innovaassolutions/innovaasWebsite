import type { Metadata } from "next";
import PartnerPage, { PartnerData } from "@/components/system/PartnerPage";

export const metadata: Metadata = {
  title: "Litmus — Distribution & Implementation",
  description:
    "Innovaas delivers Litmus industrial edge deployments across Southeast Asia — out-of-the-box machine connectivity, edge analytics, and Industry 4.0 data infrastructure.",
  alternates: { canonical: "/distribution/litmus" },
};

const data: PartnerData = {
  code: "LITMUS",
  name: "Litmus",
  category: "Industrial Edge Data Platform",
  logo: "/partners/Litmus/Litmus White Logo.webp",
  tagline: "Industrial data,",
  taglineAccent: "unlocked at the edge.",
  intro:
    "Litmus is an industrial edge platform built on a simple conviction: getting data out of machines should not be a multi-year project. Litmus Edge connects to virtually any industrial asset out of the box, normalizes the data, analyzes it at the edge, and feeds every system that needs it — making Industry 4.0 attainable instead of aspirational.",
  facts: [
    { k: "CATEGORY", v: "Industrial Edge / DataOps" },
    { k: "MODEL", v: "Edge platform + cloud mgmt" },
    { k: "CONNECTIVITY", v: "Hundreds of drivers" },
    { k: "INNOVAAS ROLE", v: "Distribution + delivery" },
  ],
  capabilities: [
    {
      t: "Universal connectivity",
      b: "A deep library of pre-built drivers for PLCs, CNCs, robots, and sensors — connect brownfield and greenfield assets in hours, not months.",
    },
    {
      t: "Edge processing",
      b: "Normalize, filter, and compute at the source. Send systems the data they need instead of paying to move and store everything raw.",
    },
    {
      t: "Built-in analytics",
      b: "KPIs, OEE, and condition dashboards configured at the edge, close to the machines — visibility from day one of deployment.",
    },
    {
      t: "Edge ML",
      b: "Deploy and run machine-learning models directly at the edge for anomaly detection and predictive use cases on live machine data.",
    },
    {
      t: "Any destination",
      b: "Native integrations to MQTT brokers, Kafka, historians, cloud platforms, and data lakes — including Unified Namespace architectures.",
    },
    {
      t: "Fleet management",
      b: "Centrally manage, update, and monitor distributed edge deployments across lines, plants, and regions from a single pane.",
    },
  ],
  weDeliver: [
    {
      t: "Connectivity audit",
      b: "Asset inventory, protocol assessment, and a deployment plan that sequences quick wins ahead of deep integration.",
    },
    {
      t: "Edge rollout",
      b: "Installation, driver configuration, data modeling, and integration with your historian, UNS, or cloud — executed by our engineers.",
    },
    {
      t: "Value layer",
      b: "Dashboards, OEE, predictive models, and integration into MES and analytics — the part that turns connectivity into ROI.",
    },
  ],
  externalUrl: "https://litmus.io",
  externalLabel: "litmus.io",
};

export default function LitmusPage() {
  return <PartnerPage data={data} />;
}
