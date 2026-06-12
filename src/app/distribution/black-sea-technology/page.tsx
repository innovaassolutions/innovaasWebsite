import type { Metadata } from "next";
import PartnerPage, { PartnerData } from "@/components/system/PartnerPage";

export const metadata: Metadata = {
  title: "Black Sea Technology — Distribution & Implementation",
  description:
    "Innovaas represents Black Sea Technology across Southeast Asia — 1.6T and 800G optical transceivers, high-speed copper, and fiber for AI clusters, hyperscale, and cloud data centers.",
  alternates: { canonical: "/distribution/black-sea-technology" },
};

const data: PartnerData = {
  code: "BST",
  name: "Black Sea Technology",
  category: "Data Center Connectivity · AI / HPC / Cloud",
  logo: "/blackseatech/bst-icon.png",
  tagline: "Bandwidth for the",
  taglineAccent: "AI generation.",
  intro:
    "Black Sea Technology builds the connectivity layer of modern compute: 1.6T and 800G optical transceivers, high-speed direct-attach and active copper, and fiber solutions engineered for hyperscale data centers, supercomputing, and AI clusters. Singapore-based, ISO 9001 certified, with 24/7 global technical support.",
  facts: [
    { k: "MAX THROUGHPUT", v: "1.6T per port" },
    { k: "PORTFOLIO", v: "40+ SKUs, 6 categories" },
    { k: "QUALITY", v: "ISO 9001 · RoHS 2.0" },
    { k: "SUPPORT", v: "7×24 technical" },
  ],
  capabilities: [
    {
      t: "1.6T & 800G optics",
      b: "OSFP and QSFP form factors with single-mode and multimode reach options for spine, leaf, and data center interconnect.",
    },
    {
      t: "DAC / ACC / AEC copper",
      b: "Direct-attach, active copper, and active electrical cables for short-reach, high-density AI and HPC cluster fabrics.",
    },
    {
      t: "AOC & fiber",
      b: "Active optical cables, MPO and LC patch cords, and custom assemblies for high-density structured deployments.",
    },
    {
      t: "Lossless network design",
      b: "Reference architectures for 800G RoCE lossless fabrics — the networking foundation AI training workloads demand.",
    },
    {
      t: "DCI solutions",
      b: "High-density data center interconnect optics and architectures for multi-site and metro deployments.",
    },
    {
      t: "Custom optoelectronics",
      b: "Bespoke optical and electrical assemblies engineered to spec when standard SKUs don't fit the topology.",
    },
  ],
  weDeliver: [
    {
      t: "Regional supply",
      b: "Qualification, procurement, and logistics across Southeast Asia through our Singapore entity — structured for programs from pilot lots to nine-figure supply agreements.",
    },
    {
      t: "Network architecture",
      b: "Topology review and optics selection with the vendor's engineering — spec the right modules, reaches, and cable plant the first time.",
    },
    {
      t: "Deployment support",
      b: "Compatibility validation, rollout coordination, and an accountable regional escalation path backed by BST's 24/7 support.",
    },
  ],
  externalUrl: "https://blacksea.sg",
  externalLabel: "blacksea.sg",
};

export default function BlackSeaTechnologyPage() {
  return <PartnerPage data={data} />;
}
