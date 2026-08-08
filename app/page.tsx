"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  colonies,
  derivedStrains,
  downloads,
  factions,
  primordialStrains,
  spotlightItems,
} from "./site-data";

type SearchFilter = "all" | "colonies" | "factions" | "teleritha" | "downloads";

const filters: { label: string; value: SearchFilter }[] = [
  { label: "Tudo", value: "all" },
  { label: "Colônias", value: "colonies" },
  { label: "Facções", value: "factions" },
  { label: "Teleritha", value: "teleritha" },
  { label: "Downloads", value: "downloads" },
];

const quickFacts = [
  { label: "Colônias públicas", value: "5" },
  { label: "Facções de referência", value: "14" },
  { label: "Cepas mapeadas", value: "10" },
];

export default function Home() {
  const [filter, setFilter] = useState<SearchFilter>("all");
  const [query, setQuery] = useState("");

  const searchEntries = useMemo(
    () => [
      ...colonies.map((colony) => ({
        category: "colonies" as const,
        categoryLabel: "Colônia",
        title: colony.name,
        description: `${colony.summary} ${colony.tension}`,
        href: "#atlas",
      })),
      ...factions.map((faction) => ({
        category: "factions" as const,
        categoryLabel: "Facção",
        title: faction.name,
        description: `${faction.summary} ${faction.sphere}`,
        href: "#faccoes",
      })),
      ...primordialStrains.map((strain) => ({
        category: "teleritha" as const,
        categoryLabel: "Cepa primordial",
        title: strain.name,
        description: `${strain.summary} ${strain.risk}`,
        href: "#teleritha",
      })),
      ...derivedStrains.map((strain) => ({
        category: "teleritha" as const,
        categoryLabel: "Cepa derivada",
        title: strain.name,
        description: `${strain.summary} ${strain.risk}`,
        href: "#teleritha",
      })),
      ...downloads.map((item) => ({
        category: "downloads" as const,
        categoryLabel: item.format,
        title: item.name,
        description: item.summary,
        href: item.href,
      })),
    ],
    [],
  );

  const filteredResults = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return searchEntries
      .filter((entry) => filter === "all" || entry.category === filter)
      .filter((entry) => {
        if (!normalizedQuery) return true;

        return `${entry.title} ${entry.description} ${entry.categoryLabel}`
          .toLowerCase()
          .includes(normalizedQuery);
      })
      .slice(0, 8);
  }, [filter, query, searchEntries]);

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <header className="relative min-h-[88vh] overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/media/outposter-001.png')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,11,14,0.2),rgba(9,11,14,0.86)_52%,rgba(9,11,14,0.96))]" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col px-6 pb-10 pt-6 sm:px-8 lg:px-12">
          <nav className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/media/icon-outargo2.png"
                alt="Símbolo de OLF"
                width={40}
                height={40}
                className="rounded-md border border-white/20 bg-black/35 object-cover"
              />
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--sand-300)]">
                  Compêndio dos Jogadores
                </p>
                <p className="text-sm text-white/72">OutsiderS - Lost Frontier</p>
              </div>
            </div>
            <div className="hidden items-center gap-2 text-sm text-white/72 md:flex">
              <Link className="rounded-md px-3 py-2 hover:bg-white/8" href="#consulta">
                Consulta
              </Link>
              <Link className="rounded-md px-3 py-2 hover:bg-white/8" href="#atlas">
                Atlas
              </Link>
              <Link className="rounded-md px-3 py-2 hover:bg-white/8" href="#faccoes">
                Facções
              </Link>
              <Link className="rounded-md px-3 py-2 hover:bg-white/8" href="#teleritha">
                Teleritha
              </Link>
              <Link className="rounded-md px-3 py-2 hover:bg-white/8" href="#downloads">
                Downloads
              </Link>
            </div>
          </nav>

          <div className="mt-auto grid gap-10 pt-24 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-end">
            <section className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--copper-300)]">
                Portal público de cenário
              </p>
              <h1 className="mt-4 max-w-4xl text-5xl font-semibold text-white sm:text-6xl lg:text-7xl">
                Lost Frontier para mesa, consulta e viagem entre sessões.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
                Um ponto de acesso online para os jogadores revisarem colônias,
                facções, Teleritha e handouts sem precisar garimpar o material
                bruto do projeto.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#consulta"
                  className="rounded-md bg-[var(--copper-400)] px-5 py-3 text-sm font-medium text-[var(--ink-950)] transition hover:bg-[var(--copper-300)]"
                >
                  Abrir consulta rápida
                </Link>
                <Link
                  href="#downloads"
                  className="rounded-md border border-white/18 bg-black/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/8"
                >
                  Ver PDFs e handouts
                </Link>
              </div>
            </section>

            <section className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="bg-black/28 px-5 py-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/48">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-white">{fact.value}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </header>

      <div className="sticky top-0 z-20 border-b border-white/8 bg-[rgba(12,14,17,0.84)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 overflow-x-auto px-6 py-3 text-sm text-white/68 sm:px-8 lg:px-12">
          <p className="whitespace-nowrap">Acesso rápido para jogadores</p>
          <div className="flex items-center gap-2">
            <Link className="rounded-md px-3 py-2 hover:bg-white/8" href="#atlas">
              Cinco colônias
            </Link>
            <Link className="rounded-md px-3 py-2 hover:bg-white/8" href="#faccoes">
              Núcleo político
            </Link>
            <Link className="rounded-md px-3 py-2 hover:bg-white/8" href="#downloads">
              Material de mesa
            </Link>
          </div>
        </div>
      </div>

      <section id="consulta" className="border-b border-white/8 bg-[var(--ink-950)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:px-12">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--copper-300)]">
              Consulta rápida
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Encontre nomes, facções, cepas e handouts em segundos.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/66">
              A proposta aqui é simples: o jogador entra, procura um termo e já
              cai no bloco certo do cenário.
            </p>

            <div className="mt-8 space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm text-white/72">Buscar</span>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Ex.: Veyridia, LMT, Aethera, handout"
                  className="w-full rounded-lg border border-white/12 bg-white/6 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-white/32 focus:border-[var(--teal-400)]"
                />
              </label>

              <div className="flex flex-wrap gap-2">
                {filters.map((item) => {
                  const active = filter === item.value;

                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setFilter(item.value)}
                      className={`rounded-md px-3 py-2 text-sm transition ${
                        active
                          ? "bg-[var(--teal-400)] text-[var(--ink-950)]"
                          : "border border-white/12 bg-white/4 text-white/72 hover:bg-white/8"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            {filteredResults.map((entry) => (
              <Link
                key={`${entry.category}-${entry.title}`}
                href={entry.href}
                className="rounded-lg border border-white/10 bg-white/4 p-5 transition hover:border-[var(--copper-400)] hover:bg-white/6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--sand-300)]">
                  {entry.categoryLabel}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">{entry.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/64">
                  {entry.description}
                </p>
              </Link>
            ))}

            {filteredResults.length === 0 ? (
              <div className="rounded-lg border border-dashed border-white/14 bg-white/3 p-5 text-sm text-white/56">
                Nenhum resultado encontrado. Tente outro nome, facção ou termo
                de Teleritha.
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 bg-[var(--sand-950)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--copper-300)]">
              Agora no radar
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Três portas de entrada para o cenário.
            </h2>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {spotlightItems.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-lg border border-white/8 bg-[var(--panel)]"
              >
                <div className="relative h-52">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(10,12,16,0.86))]" />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--sand-300)]">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/66">{item.summary}</p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex rounded-md border border-white/12 px-3 py-2 text-sm text-white/78 transition hover:bg-white/8"
                  >
                    {item.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="atlas" className="border-b border-white/8 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--copper-300)]">
              Atlas de Tanelohr
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              As cinco colônias públicas que moldam o tom da campanha.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/66">
              Cada colônia foi resumida para leitura de mesa: função no mundo,
              tensão central e a imagem que ajuda o jogador a imaginar o lugar.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {colonies.map((colony) => (
              <article
                key={colony.name}
                className="rounded-lg border border-white/10 bg-[var(--panel)] p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--sand-300)]">
                      {colony.region}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {colony.name}
                    </h3>
                  </div>
                  <span className="rounded-md border border-[var(--rust-500)]/50 bg-[var(--rust-500)]/12 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--copper-300)]">
                    Colônia
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/68">
                  {colony.summary}
                </p>
                <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-white/40">
                      Função no mundo
                    </dt>
                    <dd className="mt-2 text-sm leading-7 text-white/72">
                      {colony.function}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-white/40">
                      Tensão central
                    </dt>
                    <dd className="mt-2 text-sm leading-7 text-white/72">
                      {colony.tension}
                    </dd>
                  </div>
                </dl>
                <p className="mt-5 border-t border-white/8 pt-5 text-sm leading-7 text-[var(--sand-200)]">
                  {colony.atmosphere}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faccoes" className="border-b border-white/8 bg-[var(--ink-950)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[minmax(320px,0.7fr)_minmax(0,1.3fr)] lg:px-12">
          <div>
            <div className="overflow-hidden rounded-lg border border-white/10 bg-[var(--panel)]">
              <div className="relative h-[420px]">
                <Image
                  src="/media/helena-brimstone-iii.png"
                  alt="Helena Brimstone III"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 32vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(10,12,16,0.86))]" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--copper-300)]">
                  Facções em jogo
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-white">
                  Política, contrato, culto, resgate e captura.
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/66">
                  Em OLF, quase toda viagem vira escolha de alinhamento. Saber
                  quem quer o quê ajuda o grupo a negociar, desconfiar e apostar
                  no aliado certo.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {factions.map((faction) => (
              <article
                key={faction.name}
                className="rounded-lg border border-white/10 bg-white/4 p-5"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--sand-300)]">
                  {faction.sphere}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {faction.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/64">
                  {faction.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="teleritha" className="border-b border-white/8 bg-[var(--sand-950)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--copper-300)]">
                Guia de Teleritha
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                A matéria que move tecnologia, “magia” e conflito em Tanelohr.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/66">
                Este resumo foi pensado para jogador: o que cada cepa faz, qual
                sensação ela passa em cena e que tipo de risco acompanha seu uso.
              </p>
            </div>

            <div className="overflow-hidden rounded-lg border border-white/10 bg-[var(--panel)]">
              <div className="relative h-64">
                <Image
                  src="/media/nexsight-goggles.png"
                  alt="NexSight Goggles"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 28vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(10,12,16,0.92))]" />
              </div>
              <div className="p-5">
                <p className="text-sm leading-7 text-white/66">
                  Toda manipulação de Teleritha cobra custo. Quanto mais
                  impressionante o efeito, maior o resíduo, a instabilidade ou o
                  desgaste de quem tentou forçar o sistema.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-white">Cepas primordiais</h3>
              <div className="mt-5 grid gap-4">
                {primordialStrains.map((strain) => (
                  <article
                    key={strain.name}
                    className="rounded-lg border border-white/10 bg-[var(--panel)] p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="h-3 w-3 rounded-full"
                        style={{
                          backgroundColor:
                            strain.name === "Mágyon"
                              ? "#d15c3b"
                              : strain.name === "Dhuron"
                                ? "#b88a44"
                                : strain.name === "Osmérion"
                                  ? "#f4efe1"
                                  : strain.name === "Veyra"
                                    ? "#97b7c4"
                                    : "#6e5aa7",
                        }}
                      />
                      <p className="text-lg font-semibold text-white">{strain.name}</p>
                    </div>
                    <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[var(--sand-300)]">
                      {strain.color} · {strain.principle}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/64">
                      {strain.summary}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[var(--copper-300)]">
                      {strain.risk}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white">Cepas derivadas</h3>
              <div className="mt-5 grid gap-4">
                {derivedStrains.map((strain) => (
                  <article
                    key={strain.name}
                    className="rounded-lg border border-white/10 bg-white/4 p-5"
                  >
                    <p className="text-lg font-semibold text-white">{strain.name}</p>
                    <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[var(--sand-300)]">
                      {strain.color} · {strain.principle}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/64">
                      {strain.summary}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[var(--teal-300)]">
                      {strain.risk}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="downloads" className="bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--copper-300)]">
              Downloads e handouts
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Materiais prontos para compartilhar com o grupo.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/66">
              PDFs públicos já entram aqui com link direto, sem depender de
              Foundry ou de pasta interna do projeto.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {downloads.map((item) => (
              <article
                key={item.name}
                className="rounded-lg border border-white/10 bg-[var(--panel)] p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-md border border-white/10 bg-white/4 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--sand-300)]">
                    {item.format}
                  </span>
                  <Link
                    href={item.href}
                    target="_blank"
                    className="rounded-md bg-[var(--teal-400)] px-3 py-2 text-sm font-medium text-[var(--ink-950)] transition hover:bg-[var(--teal-300)]"
                  >
                    Abrir arquivo
                  </Link>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{item.name}</h3>
                <p className="mt-3 text-sm leading-7 text-white/64">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
