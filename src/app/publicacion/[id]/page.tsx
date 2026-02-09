import type { Metadata } from "next";
import * as React from "react";

import OpenAppClient from "@/app/open/OpenAppClient";

type PageProps = {
  params: Promise<{ id: string }>;
};

export const metadata: Metadata = {
  title: "Abrir publicación en la app",
  robots: { index: false, follow: false },
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return (
    <React.Suspense fallback={null}>
      <OpenAppClient defaultUrl={`/publicacion/${id}`} defaultAuto />
    </React.Suspense>
  );
}

