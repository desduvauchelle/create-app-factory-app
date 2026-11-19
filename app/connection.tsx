"use client";

import { FactoryProvider, useFactoryAuth } from "@app-factory/sdk/react";

function Session() {
  const { isLoading, isAuthenticated } = useFactoryAuth();
  return <p role="status">{isLoading ? "Checking session…" : isAuthenticated ? "Signed in" : "Signed out"}</p>;
}

export function Connection({ url }: { url: string }) {
  return <FactoryProvider url={url}><Session /></FactoryProvider>;
}
