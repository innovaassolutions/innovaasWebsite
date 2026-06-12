import type { Metadata } from "next";
import PartnerPage, { PartnerData } from "@/components/system/PartnerPage";

export const metadata: Metadata = {
  title: "Tulip Interfaces — Distribution & Implementation",
  description:
    "Innovaas distributes and implements Tulip Interfaces, the no-code frontline operations platform, across Southeast Asia — from first app to plant-wide composable MES rollouts.",
  alternates: { canonical: "/distribution/tulip" },
};

const data: PartnerData = {
  code: "TULIP",
  name: "Tulip",
  category: "Frontline Operations Platform · Composable MES",
  logo: "/partners/Tulip/Tulip White Logo.png",
  tagline: "The shop floor,",
  taglineAccent: "finally programmable.",
  intro:
    "Tulip Interfaces is the leading frontline operations platform — a no-code, cloud-native environment where manufacturers build the apps their operators actually need: digital work instructions, quality checks, machine monitoring, and full composable MES. Born out of MIT, trusted by global manufacturers from medical devices to electronics.",
  facts: [
    { k: "CATEGORY", v: "Frontline Ops / MES" },
    { k: "MODEL", v: "No-code, cloud-native" },
    { k: "ORIGIN", v: "MIT spinout, USA" },
    { k: "INNOVAAS ROLE", v: "Distribution + delivery" },
  ],
  capabilities: [
    {
      t: "No-code app building",
      b: "Process engineers — not software teams — compose operator apps for work instructions, checklists, audits, and quality workflows in days.",
    },
    {
      t: "Edge connectivity",
      b: "Connect machines, sensors, scales, scanners, and PLCs through Tulip's edge devices and drivers, bringing live equipment data into every app.",
    },
    {
      t: "Composable MES",
      b: "Production tracking, genealogy, e-batch records, and dispatching assembled from composable building blocks instead of a monolithic MES contract.",
    },
    {
      t: "Quality & compliance",
      b: "In-line quality capture, defect tracking, and GxP-ready features for regulated environments — audit trails and validation support included.",
    },
    {
      t: "Operator analytics",
      b: "Real-time dashboards on throughput, OEE, and quality from the data your apps already capture. No separate BI project required.",
    },
    {
      t: "Open ecosystem",
      b: "REST and connector integrations to ERP, PLM, and data platforms — Tulip plays well with the rest of your stack, including UMH and Litmus.",
    },
  ],
  weDeliver: [
    {
      t: "Licensing & supply",
      b: "Regional contracting through our Singapore entity — clean commercial terms, local invoicing, and procurement support.",
    },
    {
      t: "Implementation",
      b: "App development, edge rollout, equipment connectivity, and integration with your ERP and data infrastructure — delivered by our engineers.",
    },
    {
      t: "Enablement & support",
      b: "Operator and engineer training, governance models for citizen development, and regional support after go-live.",
    },
  ],
  externalUrl: "https://tulip.co",
  externalLabel: "tulip.co",
};

export default function TulipPage() {
  return <PartnerPage data={data} />;
}
