import type { Metadata } from "next";
import * as React from "react";

import OpenAppClient from "./OpenAppClient";

export const metadata: Metadata = {
  title: "Abrir en la app",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <React.Suspense fallback={null}>
      <OpenAppClient />
    </React.Suspense>
  );
}
