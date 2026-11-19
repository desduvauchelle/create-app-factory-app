import { Connection } from "./connection";

export default function Home() {
  const url = process.env.NEXT_PUBLIC_CONVEX_URL;
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">App Factory starter</h1>
      <section className="mt-10 rounded-xl border border-stone-200 bg-white p-6">
        <h2 className="mb-2 font-semibold">App Factory session</h2>
        {url && process.env.NEXT_PUBLIC_CONVEX_SITE_URL ? <Connection url={url} /> :
          <p>Set both Convex URLs in <code>.env.local</code> to check your session.</p>}
      </section>
    </main>
  );
}
