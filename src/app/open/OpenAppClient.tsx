"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ANDROID_PACKAGE = "com.informatica.app";

function buildIntentUrl(destination: URL, fallbackUrl: string) {
  const scheme = destination.protocol.replace(":", "");
  const pathAndQuery = `${destination.pathname}${destination.search}${destination.hash}`;
  return `intent://${destination.host}${pathAndQuery}#Intent;scheme=${scheme};package=${ANDROID_PACKAGE};S.browser_fallback_url=${encodeURIComponent(
    fallbackUrl
  )};end`;
}

function isAndroid(ua: string) {
  return /Android/i.test(ua);
}

function isIOS(ua: string) {
  return /iPhone|iPad|iPod/i.test(ua);
}

export default function OpenAppClient() {
  const searchParams = useSearchParams();
  const [mounted, setMounted] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const destinationParam = searchParams.get("url") ?? "/";
  const auto = searchParams.get("auto") === "1";

  const playStoreUrl =
    process.env.NEXT_PUBLIC_PLAYSTORE_URL ??
    `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`;
  const appStoreUrl = process.env.NEXT_PUBLIC_APPSTORE_URL ?? "";

  const openApp = React.useCallback(() => {
    setError(null);
    try {
      const destination = new URL(destinationParam, window.location.origin);
      const ua = navigator.userAgent ?? "";

      if (isAndroid(ua)) {
        const intentUrl = buildIntentUrl(destination, playStoreUrl);
        window.location.replace(intentUrl);
        return;
      }

      // iOS / desktop: best effort (Universal Links on iOS; regular navigation elsewhere)
      window.location.href = destination.toString();
    } catch {
      setError("El link no es válido.");
    }
  }, [destinationParam, playStoreUrl]);

  const destinationHref = React.useMemo(() => {
    if (!mounted) return destinationParam;
    try {
      return new URL(destinationParam, window.location.origin).toString();
    } catch {
      return destinationParam;
    }
  }, [destinationParam, mounted]);

  React.useEffect(() => {
    if (!mounted || !auto) return;
    const id = window.setTimeout(() => openApp(), 150);
    return () => window.clearTimeout(id);
  }, [auto, mounted, openApp]);

  const ua = mounted ? navigator.userAgent ?? "" : "";
  const showPlayStore = mounted ? isAndroid(ua) : true;
  const showAppStore = mounted ? isIOS(ua) && Boolean(appStoreUrl) : Boolean(appStoreUrl);

  return (
    <main className="min-h-[70vh] px-6 py-12 flex items-center justify-center">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Abrir en la app</CardTitle>
          <CardDescription>
            Si tienes la app instalada, se abrirá. Si no, podrás instalarla o continuar en la web.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-3">
          <div className="text-sm text-muted-foreground break-all">
            Destino:{" "}
            <a className="underline underline-offset-2" href={destinationHref}>
              {destinationHref}
            </a>
          </div>
          {error ? <div className="text-sm text-red-600">{error}</div> : null}
          {auto ? (
            <div className="text-sm text-muted-foreground">
              Intentando abrir la app… si no pasa nada, usa los botones de abajo.
            </div>
          ) : null}
        </CardContent>

        <CardFooter className="gap-3 flex-wrap">
          <button
            type="button"
            onClick={openApp}
            className="inline-flex items-center justify-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium"
          >
            Abrir la app
          </button>

          {showPlayStore ? (
            <a
              className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium"
              href={playStoreUrl}
              rel="noreferrer"
              target="_blank"
            >
              Instalar (Android)
            </a>
          ) : null}

          {showAppStore ? (
            <a
              className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium"
              href={appStoreUrl}
              rel="noreferrer"
              target="_blank"
            >
              Instalar (iPhone)
            </a>
          ) : null}

          <a
            className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium"
            href={destinationHref}
          >
            Continuar en la web
          </a>
        </CardFooter>
      </Card>
    </main>
  );
}

