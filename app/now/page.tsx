import type { Metadata } from "next"
import { constructMetadata } from "@/lib/metadata"
import { NowPage } from "./now-page"

export const metadata: Metadata = constructMetadata({
  title: "Now — Love Singhal",
  description:
    "What I am currently building, learning, reading, and working towards.",
})

export default function Page() {
  return <NowPage />
}
