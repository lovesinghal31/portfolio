import type { NowItem } from "@/types"

export const nowItems: NowItem[] = [
  {
    category: "Building",
    items: [
      { title: "CodePilot v2", detail: "Rewriting the analysis pipeline for better accuracy" },
      { title: "This portfolio", detail: "Handcrafting every interaction and animation" },
    ],
  },
  {
    category: "Learning",
    items: [
      { title: "Distributed Systems", detail: "Consensus algorithms, CAP theorem in practice" },
      { title: "Kubernetes", detail: "Container orchestration and service mesh patterns" },
      { title: "PostgreSQL Internals", detail: "Query planning, indexing strategies, MVCC" },
    ],
  },
  {
    category: "Reading",
    items: [
      { title: "Designing Data-Intensive Applications", detail: "Martin Kleppmann" },
      { title: "System Design Interview Vol. 2", detail: "Alex Xu" },
    ],
  },
  {
    category: "Current Stack",
    items: [
      { title: "TypeScript everywhere" },
      { title: "Next.js + NestJS" },
      { title: "PostgreSQL + Redis" },
      { title: "Docker + GitHub Actions" },
    ],
  },
  {
    category: "Goals",
    items: [
      { title: "Land a backend engineering internship" },
      { title: "Contribute to an open-source developer tool" },
      { title: "Reach 300 LeetCode problems" },
      { title: "Build and deploy a system handling 10K concurrent users" },
    ],
  },
]
