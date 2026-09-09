import { createFileRoute } from "@tanstack/react-router";
import kantoor from "@/assets/kantoor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Boulder | Detachering in Finance & Techniek, Amersfoort" },
      {
        name: "description",
        content:
          "No-nonsense detacheringsbureau in Amersfoort voor finance- en techniekprofessionals. Bekijk actuele vacatures in regio Utrecht en de Randstad.",
      },
      { property: "og:title", content: "Boulder | Detachering in Finance & Techniek" },
      {
        property: "og:description",
        content:
          "No-nonsense detachering voor finance- en techniekprofessionals vanuit Amersfoort. Bekijk onze actuele vacatures.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const liveVacatures = [
  { title: "Projectleider Bouwkunde", meta: "Regio Amersfoort · Engineering", tag: "Tijdelijk", green: true },
  { title: "Senior Business Controller", meta: "Amersfoort · Finance", tag: "Vast", green: false },
  { title: "Werkvoorbereider Installatietechniek", meta: "Regio Utrecht · Engineering", tag: "Detachering", green: true },
  { title: "Financial Controller", meta: "Amersfoort · Finance", tag: "Vast", green: false },
];

const vacatureCards = [
  {
    tag: "Tijdelijk",
    green: true,
    date: "09-09",
    title: "Projectleider Bouwkunde",
    place: "Regio Amersfoort",
    facts: ["Fulltime", "32–40 uur", "Engineering"],
  },
  {
    tag: "Vast",
    green: false,
    date: "04-09",
    title: "Senior Business Controller",
    place: "Amersfoort",
    facts: ["Fulltime", "40 uur", "Finance"],
  },
  {
    tag: "Detachering",
    green: true,
    date: "28-08",
    title: "Werkvoorbereider Installatietechniek",
    place: "Regio Utrecht",
    facts: ["Fulltime", "36–40 uur", "Engineering"],
  },
];

const redenen = [
  {
    n: "01",
    title: "Uitstekend basissalaris",
    text: "Met bonusmogelijkheden en mooie secundaire voorwaarden, waaronder een goed pensioenplan.",
  },
  {
    n: "02",
    title: "Legaal jobhoppen",
    text: "Wisselen van opdracht vanuit de zekerheid van een vast dienstverband bij Boulder.",
  },
  {
    n: "03",
    title: "Coaching en opleiding",
    text: "Werken aan je eigen ontwikkeling via coaching, training en opleidingen die je kiest.",
  },
  {
    n: "04",
    title: "Leaseauto en events",
    text: "Een leaseauto die je privé mag gebruiken, en kennis delen tijdens Boulder Events.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-surface font-body text-navy antialiased selection:bg-boulder/30">
      <header className="sticky top-0 z-20 border-b border-navy/10 bg-surface/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-boulder">
              <span className="font-display text-sm text-navy">B</span>
            </div>
            <span className="font-display text-lg tracking-tight">Boulder</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-navy/70 md:flex">
            <a className="hover:text-navy" href="#vacatures">Vacatures</a>
            <a className="hover:text-navy" href="#specialismen">Engineering</a>
            <a className="hover:text-navy" href="#specialismen">Finance</a>
            <a className="hover:text-navy" href="#over">Over ons</a>
          </nav>
          <a
            href="tel:+31623879347"
            className="rounded-full bg-boulder px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-boulder/90"
          >
            Contact
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-14 pb-16">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-boulder">
              Detachering · Amersfoort
            </p>
            <h1 className="mb-6 font-display text-5xl leading-[0.95] tracking-tight">
              No-nonsense
              <br />
              detachering in
              <br />
              Finance &amp;
              <br />
              <span className="text-boulder">Techniek.</span>
            </h1>
            <p className="mb-8 max-w-sm text-lg leading-relaxed text-navy/70">
              Boulder bemiddelt technici en financials in Amersfoort, regio Utrecht en de Randstad.
              Ondernemend, mensgericht en zonder omhaal.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#vacatures"
                className="rounded-full bg-navy px-6 py-3.5 font-semibold text-surface transition hover:bg-navy2"
              >
                Bekijk vacatures
              </a>
              <a
                href="#waarom"
                className="rounded-full border border-navy/20 px-6 py-3.5 font-semibold transition hover:border-navy/40"
              >
                Werken bij Boulder
              </a>
            </div>
            <div className="mt-10 flex gap-8 border-t border-navy/10 pt-8">
              <div>
                <p className="font-display text-3xl">2</p>
                <p className="text-sm text-navy/60">specialismen</p>
              </div>
              <div>
                <p className="font-display text-3xl">5,0</p>
                <p className="text-sm text-navy/60">Google-score</p>
              </div>
              <div>
                <p className="font-display text-3xl">15</p>
                <p className="text-sm text-navy/60">recensies</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-navy/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-boulder" />
                  <span className="text-sm font-semibold">Actuele vacatures</span>
                </div>
                <span className="text-xs font-medium text-navy/50">4 openstaand</span>
              </div>
              <ul className="divide-y divide-navy/5">
                {liveVacatures.map((v) => (
                  <li key={v.title} className="flex items-center gap-4 px-5 py-4 transition hover:bg-surface">
                    <span className={`h-10 w-px shrink-0 ${v.green ? "bg-boulder" : "bg-navy2"}`} />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold">{v.title}</p>
                      <p className="text-sm text-navy/55">{v.meta}</p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
                        v.green ? "bg-boulder/15 text-boulder" : "bg-navy/10 text-navy2"
                      }`}
                    >
                      {v.tag}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#vacatures"
                className="block bg-surface px-5 py-4 text-center text-sm font-semibold text-boulder transition hover:bg-boulder/10"
              >
                Bekijk alle vacatures →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="specialismen" className="bg-navy text-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-display text-3xl tracking-tight">Onze specialismen</h2>
            <span className="hidden text-sm font-medium text-surface/40 sm:block">Engineering &amp; Finance</span>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-surface/10 bg-navy2 p-8 transition hover:border-boulder/60">
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-boulder">
                Engineering
              </span>
              <h3 className="mb-3 font-display text-2xl">Techniek van de werkvloer</h3>
              <p className="mb-6 leading-relaxed text-surface/60">
                MBO- en HBO-technici met specialisme elektro- en werktuigbouwkundige installatietechniek.
                Van werkvoorbereiding tot projectleiding.
              </p>
              <div className="mb-7 flex flex-wrap gap-2">
                <span className="rounded-full bg-surface/10 px-3 py-1.5 text-xs">Installatietechniek</span>
                <span className="rounded-full bg-surface/10 px-3 py-1.5 text-xs">Elektrotechniek</span>
                <span className="rounded-full bg-surface/10 px-3 py-1.5 text-xs">Bouwkunde</span>
              </div>
              <a href="#vacatures" className="text-sm font-semibold text-boulder">
                Ontdek Engineering →
              </a>
            </div>
            <div className="rounded-2xl border border-surface/10 bg-navy2 p-8 transition hover:border-boulder/60">
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-boulder">
                Finance
              </span>
              <h3 className="mb-3 font-display text-2xl">Financiële precisie</h3>
              <p className="mb-6 leading-relaxed text-surface/60">
                HBO- en WO-professionals in financiële functies: van medewerker grootboek en reporting tot
                business, project- en financial controller.
              </p>
              <div className="mb-7 flex flex-wrap gap-2">
                <span className="rounded-full bg-surface/10 px-3 py-1.5 text-xs">Controlling</span>
                <span className="rounded-full bg-surface/10 px-3 py-1.5 text-xs">Accountancy</span>
                <span className="rounded-full bg-surface/10 px-3 py-1.5 text-xs">Interim finance</span>
              </div>
              <a href="#vacatures" className="text-sm font-semibold text-boulder">
                Ontdek Finance →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="vacatures" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl tracking-tight">Vacatures</h2>
          <a href="#vacatures" className="text-sm font-semibold text-boulder">
            Alles bekijken →
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {vacatureCards.map((v) => (
            <article
              key={v.title}
              className="rounded-2xl border border-navy/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between">
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    v.green ? "bg-boulder/15 text-boulder" : "bg-navy/10 text-navy2"
                  }`}
                >
                  {v.tag}
                </span>
                <span className="text-xs text-navy/45">{v.date}</span>
              </div>
              <h3 className="mb-1 text-lg font-semibold">{v.title}</h3>
              <p className="mb-5 text-sm text-navy/55">{v.place}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-navy/60">
                {v.facts.map((f, i) => (
                  <span key={f} className="flex gap-4">
                    {i > 0 && <span className="text-navy/30">·</span>}
                    {f}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="waarom" className="border-y border-navy/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-boulder">
            Daarom werken bij Boulder
          </p>
          <h2 className="mb-10 max-w-lg font-display text-3xl tracking-tight">
            Een jonge, mensgerichte en ondernemende club.
          </h2>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
            {redenen.map((r) => (
              <div key={r.n} className="bg-surface p-6">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-boulder/15 font-display text-boulder">
                  {r.n}
                </div>
                <h3 className="mb-1.5 font-semibold">{r.title}</h3>
                <p className="text-sm leading-relaxed text-navy/60">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div className="flex items-center gap-3">
            <h2 className="font-display text-3xl tracking-tight">Onze beoordelingen</h2>
            <span className="flex items-center gap-1.5 rounded-full border border-navy/10 bg-white px-3 py-1.5 text-sm font-semibold">
              <span className="text-boulder">★</span> 5,0
              <span className="font-normal text-navy/40">· 15 recensies</span>
            </span>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <figure className="rounded-2xl border border-navy/10 bg-white p-6">
            <div className="mb-3 text-sm text-boulder">★★★★★</div>
            <blockquote className="mb-4 leading-relaxed text-navy/80">
              „Korte lijnen en heldere afspraken. Binnen twee weken zat ik op een opdracht die echt past."
            </blockquote>
            <figcaption className="text-sm font-semibold">
              Marjolijn <span className="font-normal text-navy/45">· Finance</span>
            </figcaption>
          </figure>
          <figure className="rounded-2xl border border-navy/10 bg-white p-6">
            <div className="mb-3 text-sm text-boulder">★★★★★</div>
            <blockquote className="mb-4 leading-relaxed text-navy/80">
              „Ze snappen de techniek. Geen standaardpraatje, maar een gesprek over het werk zelf."
            </blockquote>
            <figcaption className="text-sm font-semibold">
              Thijs <span className="font-normal text-navy/45">· Installatietechniek</span>
            </figcaption>
          </figure>
          <figure className="rounded-2xl border border-navy/10 bg-white p-6">
            <div className="mb-3 text-sm text-boulder">★★★★★</div>
            <blockquote className="mb-4 leading-relaxed text-navy/80">
              „Goede voorwaarden en een vast aanspreekpunt dat je echt kent."
            </blockquote>
            <figcaption className="text-sm font-semibold">
              Sanne <span className="font-normal text-navy/45">· Business Controller</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="over" className="bg-navy text-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-boulder">Over Boulder</p>
              <h2 className="mb-6 font-display text-4xl leading-[1.02] tracking-tight">
                Uit Amersfoort.
                <br />
                Sterk in Finance &amp; Techniek.
              </h2>
              <p className="mb-4 max-w-xl text-lg leading-relaxed text-surface/70">
                Boulder is een ondernemend en no-nonsense detacheringsbureau in Amersfoort, actief in regio
                Utrecht en de Randstad. We adviseren en bemiddelen technici en financials, en bouwen aan een
                sterk netwerk waarin kennis actief wordt gedeeld.
              </p>
              <a href="#" className="mt-2 inline-block font-semibold text-boulder">
                Lees ons verhaal →
              </a>
            </div>
            <div className="lg:col-span-5">
              <img
                src={kantoor}
                alt="Boulder-collega's in overleg op het kantoor in Amersfoort"
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-square w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-surface/10"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-navy text-surface">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="mb-4 flex items-center gap-2.5">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-boulder">
                  <span className="font-display text-sm text-navy">B</span>
                </div>
                <span className="font-display text-lg">Boulder</span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-surface/60">
                Detachering voor finance- en techniekprofessionals. Amersfoort, regio Utrecht en de Randstad.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Bureau</h4>
              <ul className="space-y-2.5 text-sm text-surface/60">
                <li><a href="#vacatures" className="hover:text-boulder">Vacatures</a></li>
                <li><a href="#specialismen" className="hover:text-boulder">Engineering</a></li>
                <li><a href="#specialismen" className="hover:text-boulder">Finance</a></li>
                <li><a href="#over" className="hover:text-boulder">Over ons</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Contact</h4>
              <ul className="space-y-2.5 text-sm text-surface/60">
                <li><a href="tel:+31623879347" className="hover:text-boulder">06 23 87 93 47</a></li>
                <li>Amersfoort</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-surface/10 pt-6 text-xs text-surface/40 sm:flex-row">
            <span>© 2026 Boulder Detachering</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-surface/70">Privacy</a>
              <a href="#" className="hover:text-surface/70">Algemene voorwaarden</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
