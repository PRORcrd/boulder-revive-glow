import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MapPin, Clock, Euro, ArrowLeft, ArrowUpRight } from "lucide-react";
import logoAsset from "@/assets/logo-boulder.svg.asset.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const logo = logoAsset.url;

type Vacature = {
  title: string;
  place: string;
  tag: string;
  green: boolean;
  date: string;
  intro: string;
  facts: { icon: "place" | "hours" | "salary"; label: string }[];
  sections: { heading: string; body: string[] }[];
};

const vacatures: Record<string, Vacature> = {
  "projectleider-bouwkunde": {
    title: "Projectleider Bouwkunde",
    place: "Regio Amersfoort",
    tag: "Tijdelijk",
    green: true,
    date: "09-09-2026",
    intro:
      "Voor een innovatieve opdrachtgever in de energietransitie zoeken wij een Projectleider Bouwkunde. Jij stuurt het projectteam aan en bewaakt scope, budget en planning rond prefab beton- en behuizingsoplossingen.",
    facts: [
      { icon: "place", label: "Regio Amersfoort" },
      { icon: "hours", label: "Fulltime · 32–40 uur" },
      { icon: "salary", label: "Salaris tot € 6.000" },
    ],
    sections: [
      {
        heading: "Wat ga je doen?",
        body: [
          "Als Projectleider Bouwkunde stuur je het projectteam aan en bewaak je de scope, het budget, de planning en de kwaliteit van bouwkundige projecten van A tot Z.",
          "Je houdt grip op kosten, marges en risico's en stemt af met alle stakeholders, van opdrachtgever tot uitvoering. Het gaat om prefab beton- en behuizingsoplossingen die een belangrijke rol spelen in de energietransitie.",
          "Je bent het aanspreekpunt voor de klant en zorgt dat projecten op tijd en binnen budget worden opgeleverd.",
        ],
      },
      {
        heading: "Wat breng je mee?",
        body: [
          "Een afgeronde HBO-opleiding in een bouwkundige richting, bijvoorbeeld Bouwkunde of Bouwtechnische Bedrijfskunde.",
          "Ruime ervaring als projectleider in de bouw, bij voorkeur met prefab beton of utiliteitsbouw.",
          "Sterke communicatieve vaardigheden en een ondernemende, no-nonsense werkhouding.",
        ],
      },
      {
        heading: "Wat bieden wij?",
        body: [
          "Een salaris tot € 6.000 bruto per maand, afhankelijk van kennis en ervaring.",
          "De zekerheid van Boulder: uitstekende secundaire voorwaarden, een goed pensioenplan en een leaseauto die je ook privé mag gebruiken.",
          "Coaching, training en opleidingen die je zelf kiest, en actief kennis delen tijdens Boulder Events.",
        ],
      },
      {
        heading: "Over de opdrachtgever",
        body: [
          "Je komt te werken bij een innovatieve organisatie die bijdraagt aan de energietransitie met slimme prefab beton- en behuizingsoplossingen.",
          "Via Boulder werk je vanuit een sterk regionaal netwerk in Amersfoort en regio Utrecht, met korte lijnen en persoonlijke begeleiding.",
        ],
      },
    ],
  },
  "senior-business-controller": {
    title: "Senior Business Controller",
    place: "EDSN · Amersfoort",
    tag: "Vast",
    green: false,
    date: "04-09-2026",
    intro:
      "Ben jij de stevige business partner die energie krijgt van scherpe analyses en strategische impact? Voor EDSN in Amersfoort zoeken wij een Senior Business Controller.",
    facts: [
      { icon: "place", label: "Amersfoort" },
      { icon: "hours", label: "Fulltime" },
      { icon: "salary", label: "Finance · Business partnering" },
    ],
    sections: [
      {
        heading: "Wat ga je doen?",
        body: [
          "Als Senior Business Controller ben je de financiële sparringpartner van het management. Je vertaalt cijfers naar inzichten en advies waar de organisatie echt iets mee kan.",
          "Je stuurt op prestaties, bewaakt budgetten en prognoses en draagt bij aan strategische besluitvorming binnen een organisatie in het hart van de energiesector.",
        ],
      },
      {
        heading: "Wat breng je mee?",
        body: [
          "Een afgeronde HBO- of WO-opleiding in een financiële richting.",
          "Ruime ervaring als (business) controller, bij voorkeur in een complexe organisatie.",
          "Sterke analytische vaardigheden en het lef om advies te geven, ook als het spannend wordt.",
        ],
      },
      {
        heading: "Wat bieden wij?",
        body: [
          "Een uitstekend basissalaris met bonusmogelijkheden en mooie secundaire voorwaarden, waaronder een goed pensioenplan.",
          "Ruimte voor ontwikkeling via coaching, training en opleidingen die je zelf kiest.",
          "Een jonge, ondernemende club om je heen: de zekerheid en het netwerk van Boulder.",
        ],
      },
      {
        heading: "Over de opdrachtgever",
        body: [
          "EDSN is de centrale schakel in de Nederlandse energiemarkt en zorgt voor betrouwbare energiedata en -processen.",
          "Een maatschappelijk relevante werkomgeving in Amersfoort waar jouw financiële scherpte direct impact heeft.",
        ],
      },
    ],
  },
  "werkvoorbereider-installatietechniek": {
    title: "Werkvoorbereider Installatietechniek",
    place: "Regio Amsterdam",
    tag: "Tijdelijk",
    green: true,
    date: "02-09-2026",
    intro:
      "Jij bent de organisatorische motor achter de meest strak gestroomlijnde en duurzame installatieprojecten. Voor een opdrachtgever in regio Amsterdam zoeken wij een Werkvoorbereider Installatietechniek.",
    facts: [
      { icon: "place", label: "Regio Amsterdam" },
      { icon: "hours", label: "Fulltime · 32–40 uur" },
      { icon: "salary", label: "Engineering" },
    ],
    sections: [
      {
        heading: "Wat ga je doen?",
        body: [
          "Als Werkvoorbereider Installatietechniek zorg je dat installatieprojecten van werktuigbouwkundige en elektrotechnische installaties soepel verlopen.",
          "Je maakt werkvoorbereidingen, bestelt materieel en materiaal, plant de uitvoering en stemt af met uitvoerders, monteurs en leveranciers.",
        ],
      },
      {
        heading: "Wat breng je mee?",
        body: [
          "Een afgeronde MBO- of HBO-opleiding in de installatietechniek of een vergelijkbare technische richting.",
          "Ervaring met werkvoorbereiding in de installatietechniek.",
          "Een organisatietalent dat overzicht houdt, ook als meerdere projecten tegelijk lopen.",
        ],
      },
      {
        heading: "Wat bieden wij?",
        body: [
          "Een uitstekend salaris met mooie secundaire voorwaarden en een goed pensioenplan.",
          "Een leaseauto die je ook privé mag gebruiken.",
          "Coaching en opleidingen die je zelf kiest, en een sterk regionaal netwerk via Boulder.",
        ],
      },
      {
        heading: "Over de opdrachtgever",
        body: [
          "Een vooruitstrevende installateur in regio Amsterdam die werkt aan duurzame en toekomstbestendige installaties.",
          "Via Boulder stap je in met de zekerheid van goede voorwaarden en persoonlijke begeleiding.",
        ],
      },
    ],
  },
  "projectleider-werktuigbouwkunde": {
    title: "Projectleider Werktuigbouwkunde",
    place: "Rotterdam",
    tag: "Tijdelijk",
    green: true,
    date: "02-09-2026",
    intro:
      "Voor een technische opdrachtgever in Rotterdam zoeken wij een Projectleider Werktuigbouwkunde. Jij leidt werktuigbouwkundige projecten van ontwerp tot oplevering en houdt overzicht over planning, budget en kwaliteit.",
    facts: [
      { icon: "place", label: "Rotterdam" },
      { icon: "hours", label: "Fulltime" },
      { icon: "salary", label: "Engineering · Projectleiding" },
    ],
    sections: [
      {
        heading: "Wat ga je doen?",
        body: [
          "Als Projectleider Werktuigbouwkunde stuur je projecten aan in de werktuigbouwkundige installatietechniek, van eerste opzet tot oplevering.",
          "Je bewaakt planning, budget en kwaliteit, stuurt engineers en werkvoorbereiders aan en bent het aanspreekpunt voor de opdrachtgever.",
          "Je signaleert risico's en afwijkingen vroegtijdig en stuurt bij waar nodig.",
        ],
      },
      {
        heading: "Wat breng je mee?",
        body: [
          "Een afgeronde HBO-opleiding Werktuigbouwkunde of een vergelijkbare technische richting.",
          "Aantoonbare ervaring met het leiden van technische projecten, bij voorkeur in de installatietechniek of industrie.",
          "Een ondernemende houding, sterke communicatie en natuurlijk leiderschap.",
        ],
      },
      {
        heading: "Wat bieden wij?",
        body: [
          "Een uitstekend salaris met mooie secundaire voorwaarden en een goed pensioenplan.",
          "Een leaseauto die je ook privé mag gebruiken.",
          "Coaching, training en opleidingen die je zelf kiest, plus actief kennis delen tijdens Boulder Events.",
        ],
      },
      {
        heading: "Over de opdrachtgever",
        body: [
          "Een gerenommeerde technische dienstverlener in de regio Rotterdam met projecten in de industrie en utiliteit.",
          "Via Boulder werk je vanuit een sterk netwerk met korte lijnen en persoonlijke begeleiding.",
        ],
      },
    ],
  },
  "teamleider-finance": {
    title: "Teamleider Finance",
    place: "Zwolle",
    tag: "Vast",
    green: false,
    date: "01-09-2026",
    intro:
      "Voor een organisatie in Zwolle zoeken wij een Teamleider Finance. Jij geeft leiding aan het financiële team en zorgt dat de financiële processen strak, betrouwbaar en toekomstbestendig zijn ingericht.",
    facts: [
      { icon: "place", label: "Zwolle" },
      { icon: "hours", label: "Fulltime" },
      { icon: "salary", label: "Finance · Leidinggeven" },
    ],
    sections: [
      {
        heading: "Wat ga je doen?",
        body: [
          "Als Teamleider Finance geef je leiding aan een team van financieel medewerkers en zorg je voor een betrouwbare administratie, rapportage en planning & control-cyclus.",
          "Je verbetert processen, coacht je teamleden in hun ontwikkeling en schakelt met het management over cijfers en kansen.",
        ],
      },
      {
        heading: "Wat breng je mee?",
        body: [
          "Een afgeronde HBO-opleiding in een financiële richting.",
          "Ervaring met het aansturen van een financieel team.",
          "Een stevige persoonlijkheid die structuur brengt en mensen in beweging krijgt.",
        ],
      },
      {
        heading: "Wat bieden wij?",
        body: [
          "Een uitstekend basissalaris met bonusmogelijkheden en mooie secundaire voorwaarden, waaronder een goed pensioenplan.",
          "Ruimte voor ontwikkeling via coaching en opleidingen die je zelf kiest.",
          "Een vast dienstverband via Boulder en de ondersteuning van een jonge, ondernemende club.",
        ],
      },
      {
        heading: "Over de opdrachtgever",
        body: [
          "Een groeiende organisatie in Zwolle waar financiële precisie écht verschil maakt.",
          "Via Boulder stap je in met zekerheid, goede voorwaarden en een sterk regionaal netwerk.",
        ],
      },
    ],
  },
};

export const Route = createFileRoute("/vacature/$slug")({
  loader: ({ params }) => {
    const vacature = vacatures[params.slug];
    if (!vacature) throw notFound();
    return vacature;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Vacature"} | Boulder Detachering` },
      {
        name: "description",
        content: loaderData?.intro ?? "Vacature bij Boulder Detachering.",
      },
      { property: "og:title", content: `${loaderData?.title ?? "Vacature"} | Boulder` },
      { property: "og:description", content: loaderData?.intro ?? "" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: VacaturePage,
});

const factIcons = {
  place: MapPin,
  hours: Clock,
  salary: Euro,
} as const;

function VacaturePage() {
  const vacature = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-surface font-body text-navy antialiased selection:bg-boulder/30">
      <header className="sticky top-0 z-20 border-b border-navy/10 bg-surface/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link to="/" aria-label="Boulder homepage">
            <img src={logo} alt="Boulder Detachering" className="h-9 w-auto" />
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-navy/70 md:flex">
            <Link to="/" className="hover:text-navy">Home</Link>
            <Link to="/branche/engineering" className="hover:text-navy">Engineering</Link>
            <Link to="/branche/finance" className="hover:text-navy">Finance</Link>
            <Link to="/over-boulder" className="hover:text-navy">Over ons</Link>
          </nav>
          <a
            href="https://boulder.nl/contact/"
            className="rounded-full bg-boulder px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-boulder/90"
          >
            Contact
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-14">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-navy/60 transition hover:text-navy"
        >
          <ArrowLeft className="h-4 w-4" /> Terug naar overzicht
        </Link>

        <div className="mb-4 flex items-center gap-3">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              vacature.green ? "bg-boulder/15 text-boulder" : "bg-navy/10 text-navy2"
            }`}
          >
            {vacature.tag}
          </span>
          <span className="text-xs text-navy/45">Geplaatst {vacature.date}</span>
        </div>

        <h1 className="mb-3 font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl">
          {vacature.title}
        </h1>
        <p className="mb-8 text-lg text-navy/55">{vacature.place}</p>

        <div className="mb-8 flex flex-wrap gap-3">
          {vacature.facts.map((f) => {
            const Icon = factIcons[f.icon];
            return (
              <span
                key={f.label}
                className="flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 text-sm font-medium text-navy/75"
              >
                <Icon className="h-4 w-4 text-boulder" />
                {f.label}
              </span>
            );
          })}
        </div>

        <p className="mb-10 text-lg leading-relaxed text-navy/75">{vacature.intro}</p>

        <div className="rounded-2xl border border-navy/10 bg-white px-6">
          <Accordion type="single" collapsible defaultValue="item-0">
            {vacature.sections.map((s, i) => (
              <AccordionItem key={s.heading} value={`item-${i}`} className="border-navy/10">
                <AccordionTrigger className="py-5 text-left font-semibold hover:text-boulder hover:no-underline">
                  {s.heading}
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pb-6 leading-relaxed text-navy/70">
                  {s.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 rounded-2xl bg-navy p-8 text-surface sm:p-10">
          <h2 className="mb-3 font-display text-2xl tracking-tight">Interesse?</h2>
          <p className="mb-6 max-w-md leading-relaxed text-surface/65">
            Reageer direct of neem contact op met Boulder. Bel{" "}
            <a href="tel:+31623879347" className="font-semibold text-boulder">
              06 23 87 93 47
            </a>{" "}
            of mail{" "}
            <a href="mailto:d.van.beek@boulder.nl" className="font-semibold text-boulder">
              d.van.beek@boulder.nl
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://boulder.nl/contact/"
              className="rounded-full bg-boulder px-6 py-3.5 font-semibold text-navy transition hover:bg-boulder/90"
            >
              Solliciteer direct
            </a>
            <a
              href="https://boulder.nl/vacatures/"
              className="inline-flex items-center gap-1.5 rounded-full border border-surface/25 px-6 py-3.5 font-semibold transition hover:border-surface/50"
            >
              Alle vacatures <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-navy/10 bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-navy/45 sm:flex-row">
          <span>© 2026 Boulder Detachering · Wiekenweg 34H, 3815 KL Amersfoort</span>
          <div className="flex gap-6">
            <a href="https://boulder.nl/privacyverklaring/" className="hover:text-navy/70">Privacy</a>
            <a href="https://www.linkedin.com/company/boulderdetacheringb.v./" className="hover:text-navy/70">LinkedIn</a>
            <a href="https://www.instagram.com/boulderdetachering/" className="hover:text-navy/70">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
