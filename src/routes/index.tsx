import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo-boulder.svg.asset.json";
import teamAsset from "@/assets/boulder-team.jpg.asset.json";
import engineeringAsset from "@/assets/boulder-engineering.jpg.asset.json";
import financeAsset from "@/assets/boulder-finance.jpg.asset.json";
import collaborationAsset from "@/assets/boulder-collaboration.jpg.asset.json";
import ulcAsset from "@/assets/client-ulc.png.asset.json";
import vbhAsset from "@/assets/client-vbh.png.asset.json";
import prorailAsset from "@/assets/client-prorail.png.asset.json";
import verderAsset from "@/assets/client-verder.jpg.asset.json";
import arcadisAsset from "@/assets/client-arcadis.png.asset.json";
import lelyAsset from "@/assets/client-lely.png.asset.json";
import enecoAsset from "@/assets/client-eneco.png.asset.json";
import heijmansAsset from "@/assets/client-heijmans.png.asset.json";
import issAsset from "@/assets/client-iss.png.asset.json";
import kantersAsset from "@/assets/client-kanters.png.asset.json";
import capgeminiAsset from "@/assets/client-capgemini.png.asset.json";
import fmeAsset from "@/assets/client-fme.png.asset.json";

const logo = logoAsset.url;
const teamPhoto = teamAsset.url;
const engineeringPhoto = engineeringAsset.url;
const financePhoto = financeAsset.url;
const collaborationPhoto = collaborationAsset.url;

const clients = [
  { name: "ULC", logo: ulcAsset.url },
  { name: "VBH", logo: vbhAsset.url },
  { name: "ProRail", logo: prorailAsset.url },
  { name: "Verder", logo: verderAsset.url },
  { name: "Arcadis", logo: arcadisAsset.url },
  { name: "Lely", logo: lelyAsset.url },
  { name: "Eneco eMobility", logo: enecoAsset.url },
  { name: "Heijmans", logo: heijmansAsset.url },
  { name: "ISS Facility Services", logo: issAsset.url },
  { name: "Kanters", logo: kantersAsset.url },
  { name: "Capgemini", logo: capgeminiAsset.url },
  { name: "FME", logo: fmeAsset.url },
];

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
  { title: "Projectleider Bouwkunde", meta: "Regio Amersfoort · Engineering", tag: "Tijdelijk", green: true, slug: "projectleider-bouwkunde" },
  { title: "Senior Business Controller bij EDSN", meta: "Amersfoort · Finance", tag: "Vast", green: false, slug: "senior-business-controller" },
  { title: "Projectleider Werktuigbouwkunde", meta: "Rotterdam · Engineering", tag: "Tijdelijk", green: true, slug: "projectleider-werktuigbouwkunde" },
  { title: "Teamleider Finance", meta: "Zwolle · Finance", tag: "Vast", green: false, slug: "teamleider-finance" },
];

const vacatureCards = [
  {
    tag: "Tijdelijk",
    green: true,
    date: "09-09",
    slug: "projectleider-bouwkunde",
    title: "Projectleider Bouwkunde",
    place: "Regio Amersfoort",
    desc: "Jij stuurt het projectteam aan en bewaakt budgetten om bouwkundige betonstations van A tot Z op tijd op te leveren.",
    facts: ["Fulltime", "32–40 uur", "Salaris tot € 6.000"],
  },
  {
    tag: "Vast",
    green: false,
    date: "04-09",
    slug: "senior-business-controller",
    title: "Senior Business Controller",
    place: "EDSN · Amersfoort",
    desc: "Ben jij de stevige business partner die energie krijgt van scherpe analyses en strategische impact?",
    facts: ["Fulltime", "Finance", "Business partnering"],
  },
  {
    tag: "Tijdelijk",
    green: true,
    date: "02-09",
    slug: "werkvoorbereider-installatietechniek",
    title: "Werkvoorbereider Installatietechniek",
    place: "Regio Amsterdam",
    desc: "Jij bent de organisatorische motor achter de meest strak gestroomlijnde en duurzame installatieprojecten.",
    facts: ["Fulltime", "32–40 uur", "Engineering"],
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
    title: "Jonge, ondernemende club",
    text: "Werken bij een jonge, mensgerichte en ondernemende club met korte lijnen.",
  },
  {
    n: "05",
    title: "Goede voorwaarden",
    text: "Mooie secundaire arbeidsvoorwaarden, waaronder een goed pensioenplan.",
  },
  {
    n: "06",
    title: "Leaseauto",
    text: "Een leaseauto die je ook privé mag gebruiken.",
  },
  {
    n: "07",
    title: "Kennis delen",
    text: "Actief kennis delen en opdoen, online en tijdens Boulder Events.",
  },
  {
    n: "08",
    title: "Sterk regionaal netwerk",
    text: "Een sterk netwerk met vacatures in Amersfoort en regio Utrecht.",
  },
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-surface font-body text-navy antialiased selection:bg-boulder/30">
      <header className="sticky top-0 z-20 border-b border-navy/10 bg-surface/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="https://boulder.nl/" aria-label="Boulder homepage">
            <img src={logo} alt="Boulder Detachering" className="h-9 w-auto" />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-navy/70 md:flex">
            <a className="hover:text-navy" href="https://boulder.nl/vacatures/">Vacatures</a>
            <a className="hover:text-navy" href="https://boulder.nl/branche/engineering/">Engineering</a>
            <a className="hover:text-navy" href="https://boulder.nl/branche/finance/">Finance</a>
            <a className="hover:text-navy" href="https://boulder.nl/over-boulder/">Over ons</a>
          </nav>
          <a
            href="https://boulder.nl/contact/"
            className="rounded-full bg-boulder px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-boulder/90"
          >
            Contact
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-14 pb-16">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={teamPhoto}
            alt="Het team van Boulder Detachering"
            width={2000}
            height={1059}
            className="h-[420px] w-full object-cover object-center sm:h-[480px] lg:h-[540px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/45 to-navy/10" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-boulder">
              Detachering · Amersfoort
            </p>
            <h1 className="max-w-2xl font-display text-3xl leading-[0.95] tracking-tight text-surface sm:text-5xl">
              No-nonsense
              <br />
              Detacheringsbureau
              <br />
              <span className="text-boulder">Finance &amp; Techniek.</span>
            </h1>
          </div>
        </div>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="mb-8 max-w-sm text-lg leading-relaxed text-navy/70">
                Boulder bemiddelt technici en financials in Amersfoort, regio Utrecht en de Randstad.
                Ondernemend, mensgericht en zonder omhaal.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://boulder.nl/vacatures/"
                  className="rounded-full bg-navy px-6 py-3.5 font-semibold text-surface transition hover:bg-navy2"
                >
                  Bekijk vacatures
                </a>
                <a
                  href="https://boulder.nl/werken-bij-boulder/"
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
                  <li key={v.title}>
                    <Link
                      to="/vacature/$slug"
                      params={{ slug: v.slug }}
                      className="flex items-center gap-4 px-5 py-4 transition hover:bg-surface"
                    >
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
                    </Link>
                  </li>
                ))}
              </ul>
              <a
                href="https://boulder.nl/vacatures/"
                className="block bg-surface px-5 py-4 text-center text-sm font-semibold text-boulder transition hover:bg-boulder/10"
              >
                Bekijk alle vacatures →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="clients-heading" className="overflow-hidden border-y border-navy/10 bg-white py-9">
        <div className="mx-auto mb-6 max-w-6xl px-6">
          <p id="clients-heading" className="text-center text-xs font-semibold uppercase tracking-widest text-navy/45">
            Organisaties waar onze professionals werken
          </p>
        </div>
        <div className="client-marquee overflow-hidden" aria-label="Opdrachtgevers van Boulder">
          <div className="client-marquee-track flex w-max items-center">
            {[0, 1].map((set) => (
              <div key={set} className="flex shrink-0 items-center" aria-hidden={set === 1}>
                {clients.map((client) => (
                  <div key={`${set}-${client.name}`} className="mx-4 flex h-20 w-40 shrink-0 items-center justify-center px-5 sm:mx-7 sm:w-44">
                    <img
                      src={client.logo}
                      alt={set === 0 ? client.name : ""}
                      className="max-h-14 max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
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
            <div className="overflow-hidden rounded-2xl border border-surface/10 bg-navy2 transition hover:border-boulder/60">
              <img src={engineeringPhoto} alt="Boulder-professional in de techniek" width={2000} height={1334} loading="lazy" className="aspect-[16/7] w-full object-cover" />
              <div className="p-8">
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
               <a href="https://boulder.nl/branche/engineering/" className="text-sm font-semibold text-boulder">
                Ontdek Engineering →
              </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-surface/10 bg-navy2 transition hover:border-boulder/60">
              <img src={financePhoto} alt="Financeprofessionals in overleg" width={2000} height={1334} loading="lazy" className="aspect-[16/7] w-full object-cover" />
              <div className="p-8">
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
               <a href="https://boulder.nl/branche/finance/" className="text-sm font-semibold text-boulder">
                Ontdek Finance →
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vacatures" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl tracking-tight">Vacatures</h2>
          <a href="https://boulder.nl/vacatures/" className="text-sm font-semibold text-boulder">
            Alles bekijken →
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {vacatureCards.map((v) => (
            <Link
              key={v.title}
              to="/vacature/$slug"
              params={{ slug: v.slug }}
              className="rounded-2xl border border-navy/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-boulder/50 hover:shadow-md"
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
              <p className="mb-5 text-sm leading-relaxed text-navy/70">{v.desc}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-navy/60">
                {v.facts.map((f, i) => (
                  <span key={f} className="flex gap-4">
                    {i > 0 && <span className="text-navy/30">·</span>}
                    {f}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="waarom" className="border-y border-navy/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 grid items-end gap-8 lg:grid-cols-[1fr_1.15fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-boulder">
                Daarom werken bij Boulder
              </p>
              <h2 className="max-w-lg font-display text-3xl tracking-tight">
                Een jonge, mensgerichte en ondernemende club.
              </h2>
            </div>
            <img
              src={collaborationPhoto}
              alt="Boulder-professional aan het werk"
              width={2000}
              height={890}
              loading="lazy"
              className="aspect-[16/7] w-full rounded-2xl object-cover"
            />
          </div>
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
              “Wat echt heel fijn is aan Boulder is dat er met je mee gedacht wordt. Als je contactpersoon zelf niet de expertise heeft die nodig is, wordt er snel en goed meegedacht. Er wordt goed doorgevraagd en de tijd genomen om tot de kern te komen waar de behoefte van de opdrachtgever echt ligt. En dan nog als kers op de taart persoonlijke interesse! Kortom, echt een goede partij om mee samen te werken.”
            </blockquote>
            <figcaption className="text-sm font-semibold">
              Marjolijn Blom <span className="font-normal text-navy/45">· 29/01/2024</span>
            </figcaption>
          </figure>
          <figure className="rounded-2xl border border-navy/10 bg-white p-6">
            <div className="mb-3 text-sm text-boulder">★★★★★</div>
            <blockquote className="mb-4 leading-relaxed text-navy/80">
              “Ik heb de afgelopen tijd een aantal opdrachten gedaan via Boulder Detachering en ben erg te spreken over de samenwerking. Onderling prettig en duidelijk contact en ze hebben een goed oog voor het vinden van een match!”
            </blockquote>
            <figcaption className="text-sm font-semibold">
              Robin de Pender <span className="font-normal text-navy/45">· 10/01/2024</span>
            </figcaption>
          </figure>
          <figure className="rounded-2xl border border-navy/10 bg-white p-6">
            <div className="mb-3 text-sm text-boulder">★★★★★</div>
            <blockquote className="mb-4 leading-relaxed text-navy/80">
              “Fijn bedrijf om mee samen te werken. Werk is op maat en past bij de kennis en kunde van ons bedrijf. Communicatie en afstemming altijd belangrijk voor een langdurige samenwerking.”
            </blockquote>
            <figcaption className="text-sm font-semibold">
              Alen Halilovic <span className="font-normal text-navy/45">· 10/12/2023</span>
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
              <a href="https://boulder.nl/over-boulder/" className="mt-2 inline-block font-semibold text-boulder">
                Lees ons verhaal →
              </a>
            </div>
            <div className="lg:col-span-5">
              <img
                src={engineeringPhoto}
                alt="Boulder-collega's in overleg op het kantoor in Amersfoort"
                width={2000}
                height={1334}
                loading="lazy"
                className="aspect-[3/2] w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-surface/10"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-navy text-surface">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <a href="https://boulder.nl/" aria-label="Boulder homepage" className="mb-4 inline-block rounded bg-surface p-2">
                <img src={logo} alt="Boulder Detachering" className="h-10 w-auto" />
              </a>
              <p className="max-w-xs text-sm leading-relaxed text-surface/60">
                Detachering voor finance- en techniekprofessionals. Amersfoort, regio Utrecht en de Randstad.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Bureau</h4>
              <ul className="space-y-2.5 text-sm text-surface/60">
                <li><a href="https://boulder.nl/vacatures/" className="hover:text-boulder">Vacatures</a></li>
                <li><a href="https://boulder.nl/branche/engineering/" className="hover:text-boulder">Engineering</a></li>
                <li><a href="https://boulder.nl/branche/finance/" className="hover:text-boulder">Finance</a></li>
                <li><a href="https://boulder.nl/over-boulder/" className="hover:text-boulder">Over ons</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Contact</h4>
              <ul className="space-y-2.5 text-sm text-surface/60">
                <li><a href="tel:+31623879347" className="hover:text-boulder">06 23 87 93 47</a></li>
                <li><a href="mailto:d.van.beek@boulder.nl" className="hover:text-boulder">d.van.beek@boulder.nl</a></li>
                <li>Wiekenweg 34H<br />3815 KL Amersfoort</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-surface/10 pt-6 text-xs text-surface/40 sm:flex-row">
            <span>© 2026 Boulder Detachering</span>
            <div className="flex gap-6">
              <a href="https://boulder.nl/privacyverklaring/" className="hover:text-surface/70">Privacy</a>
              <a href="https://www.linkedin.com/company/boulderdetacheringb.v./" className="hover:text-surface/70">LinkedIn</a>
              <a href="https://www.instagram.com/boulderdetachering/" className="hover:text-surface/70">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
