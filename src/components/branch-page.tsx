import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock3,
  MapPin,
  Wrench,
} from "lucide-react";
import logoAsset from "@/assets/logo-boulder.svg.asset.json";
import { Button } from "@/components/ui/button";

type BranchVacancy = {
  slug: string;
  title: string;
  place: string;
  hours: string;
  tag: string;
  description: string;
};

type BranchPageProps = {
  branch: "Engineering" | "Finance";
  title: string;
  accent: string;
  intro: string;
  image: string;
  imageAlt: string;
  disciplines: string[];
  vacancies: BranchVacancy[];
  contactName: string;
};

const logo = logoAsset.url;

export function BranchPage({
  branch,
  title,
  accent,
  intro,
  image,
  imageAlt,
  disciplines,
  vacancies,
  contactName,
}: BranchPageProps) {
  const BranchIcon = branch === "Engineering" ? Wrench : BriefcaseBusiness;

  return (
    <div className="min-h-screen overflow-x-hidden bg-surface font-body text-navy antialiased selection:bg-boulder/30">
      <header className="sticky top-0 z-30 border-b border-navy/10 bg-surface/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link to="/" aria-label="Boulder homepage">
            <img src={logo} alt="Boulder Detachering" className="h-9 w-auto" />
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-navy/65 md:flex">
            <Link to="/" className="transition hover:text-navy">Home</Link>
            <Link to="/branche/engineering" className="transition hover:text-navy">Engineering</Link>
            <Link to="/branche/finance" className="transition hover:text-navy">Finance</Link>
            <Link to="/over-boulder" className="transition hover:text-navy">Over ons</Link>
            <a href="#vacatures" className="transition hover:text-navy">Vacatures</a>
          </nav>
          <Button asChild className="h-auto rounded-full bg-boulder px-5 py-2.5 font-semibold text-navy shadow-none hover:bg-boulder/90">
            <a href="https://boulder.nl/contact/">Contact</a>
          </Button>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 pt-10 pb-16 sm:pt-14">
          <div className="relative flex min-h-[530px] items-end overflow-hidden rounded-2xl p-6 sm:p-10 lg:p-14">
            <img
              src={image}
              alt={imageAlt}
              width={2000}
              height={1334}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/15" />
            <div className="relative max-w-2xl text-surface">
              <span className="mb-6 inline-flex items-center gap-2 rounded-md border border-boulder/40 bg-boulder/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-boulder backdrop-blur-sm">
                <BranchIcon className="h-4 w-4" /> Vakgebied {branch}
              </span>
              <h1 className="mb-6 font-display text-4xl leading-none sm:text-6xl lg:text-7xl">
                {title} <span className="text-boulder">{accent}</span>
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-surface/75 sm:text-xl">{intro}</p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="h-auto rounded-md bg-boulder px-7 py-3.5 font-semibold text-navy shadow-none hover:bg-boulder/90">
                  <a href="#vacatures">Bekijk vacatures <ArrowRight /></a>
                </Button>
                <Button asChild variant="outline" className="h-auto rounded-md border-surface/25 bg-surface/5 px-7 py-3.5 font-semibold text-surface shadow-none hover:bg-surface/10 hover:text-surface">
                  <a href="https://boulder.nl/contact/">Persoonlijk kennismaken</a>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid border-x border-b border-navy/10 bg-white sm:grid-cols-3">
            <div className="border-b border-navy/10 p-6 sm:border-r sm:border-b-0">
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-navy/40">Niveau</p>
              <p className="font-semibold">MBO, HBO &amp; WO</p>
            </div>
            <div className="border-b border-navy/10 p-6 sm:border-r sm:border-b-0">
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-navy/40">Werkvorm</p>
              <p className="font-semibold">Vast &amp; interim</p>
            </div>
            <div className="p-6">
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-navy/40">Regio</p>
              <p className="font-semibold">Midden-Nederland &amp; Randstad</p>
            </div>
          </div>
        </section>

        <section className="border-y border-navy/10 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-boulder">Jouw vak, onze aandacht</p>
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">Werk dat bij je past én je verder brengt.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {disciplines.map((discipline) => (
                <div key={discipline} className="flex items-center gap-3 border-b border-navy/10 py-3 text-navy/75">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-boulder" />
                  <span className="font-medium">{discipline}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="vacatures" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-20">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-boulder">Nieuw werk voor jou</p>
              <h2 className="font-display text-3xl sm:text-4xl">Vacatures in {branch}</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-navy/55">
              Geen eindeloos zoeken. Bekijk rollen waar jouw ervaring en ambities echt tot hun recht komen.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {vacancies.map((vacancy) => (
              <Link
                key={vacancy.slug}
                to="/vacature/$slug"
                params={{ slug: vacancy.slug }}
                className="group flex min-h-[330px] flex-col border border-navy/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-boulder/60 hover:shadow-lg"
              >
                <div className="mb-7 flex items-start justify-between gap-4">
                  <span className="rounded-md bg-boulder/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
                    {vacancy.tag}
                  </span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-surface text-navy transition group-hover:bg-boulder">
                    <BranchIcon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mb-4 font-display text-xl leading-tight transition group-hover:text-navy2">{vacancy.title}</h3>
                <div className="mb-5 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-navy/55">
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-boulder" />{vacancy.place}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock3 className="h-4 w-4 text-boulder" />{vacancy.hours}</span>
                </div>
                <p className="mb-7 text-sm leading-relaxed text-navy/65">{vacancy.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 border-t border-navy/10 pt-5 font-semibold">
                  Bekijk vacature <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-navy text-surface">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-boulder">Liever eerst sparren?</p>
              <h2 className="mb-3 font-display text-3xl sm:text-4xl">Ontdek welke stap bij jou past.</h2>
              <p className="max-w-2xl leading-relaxed text-surface/65">
                {contactName} denkt persoonlijk met je mee over je ervaring, ambities en een passende opdracht binnen {branch}.
              </p>
            </div>
            <Button asChild className="h-auto w-fit rounded-md bg-boulder px-7 py-3.5 font-semibold text-navy shadow-none hover:bg-boulder/90">
              <a href="https://boulder.nl/contact/">Plan een kennismaking <ArrowRight /></a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-surface/10 bg-navy text-surface">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-6 py-10 text-sm sm:flex-row sm:items-end">
          <div>
            <Link to="/" className="mb-4 inline-block rounded-md bg-surface p-2">
              <img src={logo} alt="Boulder Detachering" className="h-9 w-auto" />
            </Link>
            <p className="text-surface/55">Wiekenweg 34H · 3815 KL Amersfoort</p>
          </div>
          <div className="flex flex-wrap gap-6 text-surface/60">
            <a href="tel:+31623879347" className="hover:text-boulder">06 23 87 93 47</a>
            <a href="mailto:d.van.beek@boulder.nl" className="hover:text-boulder">d.van.beek@boulder.nl</a>
            <a href="https://boulder.nl/privacyverklaring/" className="hover:text-boulder">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}