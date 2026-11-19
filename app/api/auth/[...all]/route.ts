import { createFactoryServer } from "@app-factory/sdk/next";
import type { NextRequest } from "next/server";

function auth(request: NextRequest) {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
  const convexSiteUrl = process.env.NEXT_PUBLIC_CONVEX_SITE_URL;
  if (!convexUrl || !convexSiteUrl) {
    return Response.json({ error: "Configure both Convex URLs to enable authentication." }, { status: 503 });
  }
  const { handler } = createFactoryServer({ convexUrl, convexSiteUrl });
  return request.method === "GET" ? handler.GET(request) : handler.POST(request);
}

export { auth as GET, auth as POST };
