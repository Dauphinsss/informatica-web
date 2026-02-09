import Link from "next/link";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.informatica.app&pcampaignid=web_share";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] px-6 py-12 flex items-center justify-center">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Página no encontrada</CardTitle>
          <CardDescription>
            El enlace puede estar mal escrito o la página ya no existe. Si venías desde el celular, puedes abrirlo en la
            app.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-2">
          <div className="text-sm text-muted-foreground">
            Si no tienes la app instalada, puedes instalarla desde Play Store.
          </div>
        </CardContent>

        <CardFooter className="gap-3 flex-wrap">
          <a
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            href={PLAY_STORE_URL}
            rel="noreferrer"
            target="_blank"
          >
            Instalar app (Android)
          </a>
          <Link
            className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            href="/"
          >
            Ir al inicio
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-md border border-border bg-secondary text-secondary-foreground px-4 py-2 text-sm font-medium hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            href="/open?url=/&auto=1"
          >
            Abrir la app
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}

