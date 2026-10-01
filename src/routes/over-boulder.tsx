import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo-boulder.svg.asset.json";
import teamAsset from "@/assets/boulder-team.jpg.asset.json";
import collaborationAsset from "@/assets/boulder-collaboration.jpg.asset.json";
import engineeringAsset from "@/assets/boulder-engineering.jpg.asset.json";
import financeAsset from "@/assets/boulder-finance.jpg.asset.json";

export const Route = createFileRoute("/over-boulder")({
  head: () => ({
    meta: [
      { title: "Over Boulder | Detacheringsbureau Finance & Techniek, Amersfoort" },
      {
        name: "description",
        content:
          "Boulder is een ondernemend en no-nonsense detacheringsbureau in Amersfoort. Leer ons team kennen en ontdek hoe wij werken in Finance & Techniek.",
      },
      { property: "og:title", content: "Over Boulder | Detacheringsbureau Amersfoort" },
      {
        property: "og:description",
        content:
          "Ondernemend, mensgericht en no-nonsense: zo werken wij aan de match tussen technici, financials en opdrachtgevers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OverBoulderPage,
});

const logo = logoAsset.url;
const teamPhoto = teamAsset.url;
const collaborationPhoto = collaborationAsset.url;
const engineeringPhoto = engineeringAsset.url;
const financePhoto = financeAsset.url;

const waarden = [
  {
    title: "No-nonsense",
    text: "Duidelijke taal, korte lijnen en afspraken die we nakomen. Geen verkooppraatjes, wel een eerlijk antwoord.",
  },
  {
    title: "Mensgericht",
    text: "We kennen onze professionals bij naam. Persoonlijke interesse en oprecht meedenken staan voorop.",
  },
  {
    title: "Ondernemend",
    text: "We bewegen mee met de markt en denken actief met opdrachtgevers en professionals mee aan de volgende stap.",
  },
];

const redenen = [
  { n: "01", title: "Uitstekend basissalaris", text: "Met bonusmogelijkheden en mooie secundaire voorwaarden, waaronder een goed pensioenplan." },
  { n: "02", title: "Legaal jobhoppen", text: "Wisselen van opdracht vanuit de zekerheid van een vast dienstverband bij Boulder." },
  { n: "03", title: "Coaching en opleiding", text: "Werken aan je eigen ontwikkeling via coaching, training en opleidingen die je kiest." },
  { n: "04", title: "Jonge, ondernemende club", text: "Werken bij een jonge, mensgerichte en ondernemende club met korte lijnen." },
  { n: "05", title: "Goede voorwaarden", text: "Mooie secundaire arbeidsvoorwaarden, waaronder een goed pensioenplan." },
  { n: "06", title: "Leaseauto", text: "Een leaseauto die je ook privé mag gebruiken." },
  { n: "07", title: "Kennis delen", text: "Actief kennis delen en opdoen, online en tijdens Boulder Events." },
  { n: "08", title: "Sterk regionaal netwerk", text: "Een sterk netwerk met vacatures in Amersfoort en regio Utrecht." },
];

const reviews = [
  {
    quote:
      "Wat echt heel fijn is aan Boulder is dat er met je mee gedacht wordt. Er wordt goed doorgevraagd en de tijd genomen om tot de kern te komen waar de behoefte van de opdrachtgever echt ligt. En dan nog als kers op de taart persoonlijke interesse!",
    name: "Marjolijn Blom",
    date: "29/01/2024",
  },
  {
    quote:
      "Ik heb de afgelopen tijd een aantal opdrachten gedaan via Boulder Detachering en ben erg te spreken over de samenwerking. Onderling prettig en duidelijk contact en ze hebben een goed oog voor het vinden van een match!",
    name: "Robin de Pender",
    date: "10/01/2024",
  },
  {
    quote:
      "Fijn bedrijf om mee samen te werken. Werk is op maat en past bij de kennis en kunde van ons bedrijf. Communicatie en afstemming altijd belangrijk voor een langdurige samenwerking.",
    name: "Alen Halilovic",
    date: "10/12/2023",
  },
];

function OverBoulderPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-surface font-body text-navy antialiased selection:bg-boulder/30">
      <header className="sticky top-0 z-20 border-b border-navy/10 bg-surface/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link to="/" aria-label="Boulder homepage">
            <img src={logo} alt="Boulder Detachering" className="h-9 w-auto" />
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-navy/70 md:flex">
            <Link to="/" className="hover:text-navy">Home</Link>
            <Link to="/branche/engineering">Engineering</Link>
            <Link to="/branche/finance">Finance</Link>
            <Link to="/over-boulder" className="font-semibold text-navy">
              Over ons
            </Link>
          </nav>
          <a
            href="https://boulder.nl/contact/"
            className="rounded-full bg-boulder px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-boulder/90"
          >
            Contact
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-10 pb-16 sm:pt-14">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={teamPhoto}
              alt="Het team van Boulder Detachering"
              width={2000}
              height={1059}
              className="h-[360px] w-full object-cover object-center sm:h-[440px] lg:h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-navy/10" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-boulder">
                Over Boulder
              </p>
              <h1 className="max-w-2xl font-display text-4xl leading-[1] tracking-tight text-surface sm:text-6xl sm:leading-[0.95]">
                Uit Amersfoort.
                <br />
                <span className="text-boulder">Sterk in Finance & Techniek.</span>
              </h1>
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="mb-6 text-xl leading-relaxed text-navy/80">
                Boulder is een ondernemend en no-nonsense detacheringsbureau in Amersfoort, actief in
                regio Utrecht en de Randstad.
              </p>
              <p className="mb-4 max-w-xl leading-relaxed text-navy/65">
                We adviseren en bemiddelen technici en financials — van werkvoorbereider installatietechniek
                tot project controller. Daarbij bouwen we aan een sterk netwerk waarin kennis actief wordt
                gedeeld, online en tijdens onze Boulder Events.
              </p>
              <p className="max-w-xl leading-relaxed text-navy/65">
                Onze aanpak is persoonlijk en zonder omhaal: we vragen goed door, nemen de tijd om de kern
                van de vraag te vinden en zoeken dan de match die écht past — bij professional én
                opdrachtgever.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-3 gap-6 rounded-2xl border border-navy/10 bg-white p-7">
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
              <div className="mt-5 rounded-2xl border border-navy/10 bg-white p-7 text-sm leading-relaxed text-navy/65">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-navy/40">
                  Bezoek ons
                </p>
                <p className="font-semibold text-navy">Boulder Detachering</p>
                <p>Wiekenweg 34H</p>
                <p>3815 KL Amersfoort</p>
                <p className="mt-3">
                  <a href="tel:+31623879347" className="font-semibold text-navy hover:text-boulder">
                    06 23 87 93 47
                  </a>
                  <br />
                  <a href="mailto:d.van.beek@boulder.nl" className="font-semibold text-navy hover:text-boulder">
                    d.van.beek@boulder.nl
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Waarden */}
        <section className="border-y border-navy/10 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="mb-10 grid items-end gap-8 lg:grid-cols-[1fr_1.15fr]">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-boulder">
                  Zo werken wij
                </p>
                <h2 className="max-w-lg font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                  Drie waarden die je in elk gesprek terugziet.
                </h2>
              </div>
              <img
                src={collaborationPhoto}
                alt="Boulder-professional in gesprek met een collega"
                width={2000}
                height={890}
                loading="lazy"
                className="aspect-[16/7] w-full rounded-2xl object-cover"
              />
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {waarden.map((w, i) => (
                <div key={w.title} className="rounded-2xl border border-navy/10 bg-surface p-7">
                  <p className="mb-4 font-display text-sm text-boulder">0{i + 1}</p>
                  <h3 className="mb-2 font-display text-xl">{w.title}</h3>
                  <p className="text-sm leading-relaxed text-navy/65">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialismen */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-display text-3xl tracking-tight">Onze specialismen</h2>
            <span className="hidden text-sm font-medium text-navy/45 sm:block">Engineering & Finance</span>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <Link
              to="/branche/engineering"
              className="group overflow-hidden rounded-2xl border border-navy/10 bg-white transition hover:-translate-y-0.5 hover:border-boulder/60 hover:shadow-md"
            >
              <img
                src={engineeringPhoto}
                alt="Boulder-professional in de techniek"
                width={2000}
                height={1334}
                loading="lazy"
                className="aspect-[16/7] w-full object-cover"
              />
              <div className="p-7">
                <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-boulder">
                  Engineering
                </span>
                <h3 className="mb-2 font-display text-2xl">Techniek van de werkvloer</h3>
                <p className="text-sm leading-relaxed text-navy/65">
                  MBO- en HBO-technici in elektro- en werktuigbouwkundige installatietechniek, van
                  werkvoorbereiding tot projectleiding.
                </p>
                <span className="mt-5 inline-block text-sm font-semibold text-boulder">
                  Ontdek Engineering →
                </span>
              </div>
            </Link>
            <Link
              to="/branche/finance"
              className="group overflow-hidden rounded-2xl border border-navy/10 bg-white transition hover:-translate-y-0.5 hover:border-boulder/60 hover:shadow-md"
            >
              <img
                src={financePhoto}
                alt="Financeprofessionals in overleg"
                width={2000}
                height={1334}
                loading="lazy"
                className="aspect-[16/7] w-full object-cover"
              />
              <div className="p-7">
                <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-boulder">
                  Finance
                </span>
                <h3 className="mb-2 font-display text-2xl">Financiële precisie</h3>
                <p className="text-sm leading-relaxed text-navy/65">
                  HBO- en WO-professionals in financiële functies: van medewerker grootboek en reporting
                  tot business, project- en financial controller.
                </p>
                <span className="mt-5 inline-block text-sm font-semibold text-boulder">
                  Ontdek Finance →
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Redenen */}
        <section className="bg-navy text-surface">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-boulder">
              Werken bij Boulder
            </p>
            <h2 className="mb-10 max-w-xl font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              Acht redenen om bij Boulder te werken.
            </h2>
            <div className="grid gap-px overflow-hidden rounded-2xl bg-surface/10 sm:grid-cols-2 lg:grid-cols-4">
              {redenen.map((r) => (
                <div key={r.n} className="bg-navy2 p-6">
                  <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-boulder/15 font-display text-boulder">
                    {r.n}
                  </div>
                  <h3 className="mb-1.5 font-semibold">{r.title}</h3>
                  <p className="text-sm leading-relaxed text-surface/60">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <h2 className="font-display text-3xl tracking-tight">Wat anderen over ons zeggen</h2>
            <span className="flex items-center gap-1.5 rounded-full border border-navy/10 bg-white px-3 py-1.5 text-sm font-semibold">
              <span className="text-boulder">★</span> 5,0
              <span className="font-normal text-navy/40">· 15 recensies</span>
            </span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-2xl border border-navy/10 bg-white p-6">
                <div className="mb-3 text-sm text-boulder">★★★★★</div>
                <blockquote className="mb-4 leading-relaxed text-navy/80">“{r.quote}”</blockquote>
                <figcaption className="text-sm font-semibold">
                  {r.name} <span className="font-normal text-navy/45">· {r.date}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy text-surface">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-boulder">
                Kennismaken?
              </p>
              <h2 className="mb-3 font-display text-3xl sm:text-4xl">
                Kom eens langs in Amersfoort.
              </h2>
              <p className="max-w-2xl leading-relaxed text-surface/65">
                Bel, mail of loop binnen op de Wiekenweg 34H. We denken persoonlijk met je mee over je
                volgende stap in Finance of Techniek.
              </p>
            </div>
            <a
              href="https://boulder.nl/contact/"
              className="w-fit rounded-full bg-boulder px-7 py-3.5 font-semibold text-navy transition hover:bg-boulder/90"
            >
              Neem contact op →
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-navy text-surface">
        <div className="mx-auto max-w-6xl px-6 pb-6">
          <div className="border-t border-surface/10 pt-8 text-xs text-surface/40">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <span>© 2026 Boulder Detachering</span>
              <div className="flex gap-6">
                <a href="https://boulder.nl/privacyverklaring/" className="hover:text-surface/70">Privacy</a>
                <a href="https://www.linkedin.com/company/boulderdetacheringb.v./" className="hover:text-surface/70">LinkedIn</a>
                <a href="https://www.instagram.com/boulderdetachering/" className="hover:text-surface/70">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
