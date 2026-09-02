import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async redirects() {
    // Evolve was retired; its role moved to the agent's own memory (Arcana / memory slots).
    return [{ source: "/docs/evolve", destination: "/docs/memory", permanent: true }];
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
