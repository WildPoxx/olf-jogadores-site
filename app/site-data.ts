export type Colony = {
  name: string;
  region: string;
  function: string;
  tension: string;
  summary: string;
  atmosphere: string;
};

export type Faction = {
  name: string;
  sphere: string;
  summary: string;
};

export type Strain = {
  name: string;
  color: string;
  principle: string;
  summary: string;
  risk: string;
};

export type DownloadItem = {
  name: string;
  format: string;
  href: string;
  summary: string;
};

export const spotlightItems = [
  {
    title: "Rust Hollow",
    eyebrow: "Ponto de partida",
    summary:
      "Cidade de prospecção, currais de Bondaks e acordos improvisados na beira do deserto. É o melhor lugar para entender a vida comum na fronteira.",
    image: "/media/dust-runner-final.png",
    href: "#faccoes",
    cta: "Ver facções de fronteira",
  },
  {
    title: "Mar de Areia",
    eyebrow: "Rotas e contratos",
    summary:
      "O Conclave move comércio, risco e violência privada. Tudo passa por mapas, dívida, escolta e arbitragem.",
    image: "/media/outposter-001.png",
    href: "#atlas",
    cta: "Explorar colônias",
  },
  {
    title: "Ordem Asimoviana",
    eyebrow: "Leitura pública",
    summary:
      "Material de jogador sobre tecnomancia, protocolos e a estética estranha de uma magia que passa por máquina, corpo e custo.",
    image: "/media/helena-brimstone-iii.png",
    href: "/downloads/ordem-asimoviana-suplemento-jogadores.pdf",
    cta: "Abrir suplemento",
  },
] as const;

export const colonies: Colony[] = [
  {
    name: "Sunirae",
    region: "Centro político de Tanelohr",
    function: "Governo central, administração, memória da Queda e poder militar.",
    tension:
      "Sunirae governa o planeta, mas depende de facções que se vigiam em silêncio.",
    summary:
      "Uma cidade imensa instalada dentro de uma estrutura antiga, onde Conselho dos Cinco, LMT, corporações e expedicionários mantêm um equilíbrio frágil.",
    atmosphere:
      "Corredores antigos, metal vivo, propaganda, bairros sobrepostos e a sensação constante de colapso adiado.",
  },
  {
    name: "Conclave do Mar de Areia",
    region: "Deserto de rotas móveis e plataformas suspensas",
    function: "Comércio, arbitragem, transporte, seguros e mercado de risco.",
    tension:
      "Todo mundo precisa do Conclave, mas ninguém consegue dominá-lo por completo.",
    summary:
      "Uma república mercantil dispersa, formada por plataformas, embarcações, entrepostos e mercados de fronteira ligados pela Guilda de Ferro.",
    atmosphere:
      "Capitães armados, velas de areia, destroços raros, dívidas longas e acordos feitos sob tempestade.",
  },
  {
    name: "Veyridia",
    region: "Cordilheira de Yarallon",
    function:
      "Refino energético, adaptação extrema e controle das rotas de montanha.",
    tension:
      "Veyridia sustenta o fluxo de energia do mundo, mas depende de um ambiente que não pode ser domesticado.",
    summary:
      "Uma cidade vertical cravada na montanha, cercada por nuvens tóxicas e incêndios atmosféricos, onde a sobrevivência exige tecnologia, disciplina e leitura ambiental.",
    atmosphere:
      "Cabos sobre abismos, patrulhas dos Sky Rangers, oficinas de altitude e um céu sempre pronto para punir erro humano.",
  },
  {
    name: "Krom'Vathra",
    region: "Paredões e abismos krohminitas",
    function:
      "Produção alimentar, medicina fúngica, bioengenharia e poder krohminita organizado.",
    tension:
      "A colônia alimenta o planeta inteiro e transforma essa dependência em influência política.",
    summary:
      "Uma cidade-abismo cultivada como organismo vivo, onde fazendas de Khromicélio, castas funcionais e bestas de guerra sustentam um projeto civilizacional próprio.",
    atmosphere:
      "Fungos luminosos, nobres cultivadores, clero de esporos e a sensação de que a arquitetura está crescendo enquanto você olha.",
  },
  {
    name: "Nexo Umbra",
    region: "Interseção do Véu Rasgado",
    function:
      "Pesquisa extrema, contenção de anomalias e exploração do impossível.",
    tension:
      "Cyberdome quer controlar o fenômeno; Expedicionários querem compreendê-lo; o próprio Nexo talvez já esteja mudando ambos.",
    summary:
      "Uma colônia de pesquisa que existe para permanecer diante do que não deveria ser compreendido com segurança.",
    atmosphere:
      "Laboratórios isoláveis, mapas que falham, memórias conflitantes e janelas voltadas para um espaço que parece observar de volta.",
  },
];

export const factions: Faction[] = [
  {
    name: "Companhia Bask-Callico",
    sphere: "Rust Hollow e prospecção",
    summary:
      "Estrutura comunitária que organiza rastreio, currais, oficinas e expedições, transformando achados individuais em estabilidade coletiva.",
  },
  {
    name: "Guilda de Ferro",
    sphere: "Conclave e comércio",
    summary:
      "Principal autoridade mercantil do Mar de Areia. Governa por contrato, seguro, arbitragem e capacidade de cobrança.",
  },
  {
    name: "Expedicionários",
    sphere: "Rotas, ruínas e arquivos",
    summary:
      "Irmandade que controla mapas, diários de campo, passagens seguras e o conhecimento confiável sobre um planeta que muda sem aviso.",
  },
  {
    name: "Stargazers",
    sphere: "Rust Hollow e segredos expedicionários",
    summary:
      "Círculo ligado à linhagem Kamen, leal, competente e disposto a atravessar limites perigosos para seguir pistas que a Alta Cátedra preferiria enterrar.",
  },
  {
    name: "LMT / Cepadores",
    sphere: "Energia e refino",
    summary:
      "Liga dos Mineradores de Teleritha. Controla o processo que torna a tecnologia colonial possível em escala.",
  },
  {
    name: "Cyberdome",
    sphere: "Pesquisa corporativa",
    summary:
      "Consórcio tecnocrático de Sunirae que oferece sensores, laboratórios e financiamento em troca de acesso, dados e dependência.",
  },
  {
    name: "Technoyakuza",
    sphere: "Crime corporativo",
    summary:
      "Poder clandestino por trás do Cyberdome. Prefere infiltração, dívida tecnológica e captura limpa do futuro.",
  },
  {
    name: "Sentinelas",
    sphere: "Ordem de Sunirae",
    summary:
      "Exército, polícia pesada e aparato de sobrevivência colonial. Protegem a cidade e impõem sua paz ao mesmo tempo.",
  },
  {
    name: "Sky Rangers",
    sphere: "Lei de altitude",
    summary:
      "Força de resgate, patrulha e execução de Veyridia. Onde a lei precisa atravessar abismos, são eles que chegam primeiro.",
  },
  {
    name: "Magistrados de Fogo",
    sphere: "Mandados e pacto",
    summary:
      "Ordem jurídico-executiva itinerante que investiga, julga e executa sentenças onde nenhuma fronteira consegue segurar o conflito sozinha.",
  },
  {
    name: "Top Hat Agency",
    sphere: "Mandados privados",
    summary:
      "Agência transcolonial de investigação e captura. Antes do tiro, vem notificação; antes do sangue, vem papel.",
  },
  {
    name: "Vathrimitas",
    sphere: "Krom'Vathra",
    summary:
      "Krohminitas de Krom'Vathra. Alimentam o mundo e enxergam a própria colônia como embrião de uma nova civilização.",
  },
  {
    name: "Culto dos Deuses Mortos",
    sphere: "Ruínas e ocultismo",
    summary:
      "Rede religiosa que interpreta arkannones, fendas e Teleritha como restos ativos de entidades antigas.",
  },
  {
    name: "Hell Raiders",
    sphere: "Tumbas e incursões",
    summary:
      "Dissidentes expedicionários, profissionais em saquear ruínas, escapar vivos e deixar para trás problemas maiores do que os que encontraram.",
  },
];

export const primordialStrains: Strain[] = [
  {
    name: "Mágyon",
    color: "Escarlate",
    principle: "Impulso, ignição e aceleração",
    summary:
      "Cepa do movimento violento, da descarga energética e da sobrecarga que faz sistemas entrarem em ação.",
    risk: "Explosão, superaquecimento e colapso energético.",
  },
  {
    name: "Dhuron",
    color: "Dourado ocre",
    principle: "Estrutura, coesão e permanência",
    summary:
      "Mantém forma, peso e contenção. É a base de blindagens, fundações e tudo que precisa continuar inteiro sob pressão.",
    risk: "Rigidez, aprisionamento e cristalização excessiva.",
  },
  {
    name: "Osmérion",
    color: "Branco iridescente",
    principle: "Interface, emulsão e compatibilidade",
    summary:
      "A cepa que conecta sistemas, tecidos e máquinas que normalmente não falariam entre si.",
    risk: "Contaminação sistêmica, fusão indevida e perda de fronteiras.",
  },
  {
    name: "Veyra",
    color: "Prateado metálico",
    principle: "Vibração, ressonância e propagação",
    summary:
      "Sustenta sinais, ondas, comunicação, levitação e tudo que depende de informação em movimento.",
    risk: "Cacofonia, ruptura por ressonância e perda de coerência.",
  },
  {
    name: "Aethera",
    color: "Púrpura profundo",
    principle: "Espaço-tempo, limiar e não-localidade",
    summary:
      "A exceção do sistema: rara, perigosa e ligada aos maiores mistérios de Tanelohr e da Lost Colony.",
    risk: "Paradoxo, deslocamento temporal e ruptura de continuidade.",
  },
];

export const derivedStrains: Strain[] = [
  {
    name: "Kinethea",
    color: "Escarlate-prateado",
    principle: "Movimento energético",
    summary:
      "Converte energia em vetor. Alimenta propulsão, impacto controlado e deslocamentos que parecem começar antes do corpo.",
    risk: "Ruptura vetorial e dano por impacto interno.",
  },
  {
    name: "Quantara",
    color: "Plasma branco-escarlate",
    principle: "Adaptação energética",
    summary:
      "Energia que se molda ao receptor. Serve para amplificação, reparo de emergência e sistemas adaptativos.",
    risk: "Sobrecarga adaptativa e febre energética.",
  },
  {
    name: "Stravon",
    color: "Dourado-prateado",
    principle: "Elasticidade estrutural",
    summary:
      "Matéria que absorve impacto e redistribui força sem se romper com facilidade.",
    risk: "Rigidez progressiva e reverberação traumática.",
  },
  {
    name: "Axyron",
    color: "Dourado-branco",
    principle: "Coesão responsiva",
    summary:
      "Estrutura que responde ao toque, ao comando e à vontade materializada em forma.",
    risk: "Aprisionamento em matéria responsiva e eco de comando.",
  },
  {
    name: "Nexyra",
    color: "Branco-prateado",
    principle: "Sincronização e rede",
    summary:
      "Vibração que conecta percepção, telemetria, emoção e coordenação coletiva.",
    risk: "Interferência mental, diluição de identidade e invasão cognitiva.",
  },
];

export const downloads: DownloadItem[] = [
  {
    name: "Ordem Asimoviana - Suplemento de Jogadores",
    format: "PDF",
    href: "/downloads/ordem-asimoviana-suplemento-jogadores.pdf",
    summary:
      "Material público para jogadores sobre estética, linguagem e presença dos tecnomantes asimovianos no cenário.",
  },
  {
    name: "Kaelen's NexSight Goggles - Handout",
    format: "PDF",
    href: "/downloads/kaelens-nexsight-goggles-player-handout.pdf",
    summary:
      "Handout pronto para mesa com foco no item, sua leitura diegética e apresentação visual para o grupo.",
  },
];
