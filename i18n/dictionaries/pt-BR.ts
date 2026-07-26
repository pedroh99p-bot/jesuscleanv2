import { faqItems } from "@/data/faq";

export const ptBR = {
  common: {
    brand: "Jesus Clean",
    brandShort: "Jesus Clean",
    brandSuffix: "Higienização de estofados",
    instructor: "Igor Jesus",
    beach: "Rio de Janeiro",
    neighborhood: "Atendimento em domicílio",
    reference: "Bairros sujeitos à confirmação",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    google: "Google",
    notInformed: "Não informado",
    production: "Produzido por MONTANA",
  },
  languages: {
    label: "Selecionar idioma",
    serviceLabel: "Idioma",
    options: {
      "pt-BR": "Português do Brasil",
      en: "Inglês",
      es: "Espanhol",
    },
  },
  topbar: {
    ariaLabel: "Informações rápidas",
    items: [
      "Atendimento no Rio de Janeiro",
      "Higienização de estofados",
      "Atendimento em domicílio",
      "Pré-orçamento por fotos",
      "Cuidado com cada tecido",
    ],
  },
  preloader: {
    text: "Preparando uma experiência mais limpa...",
  },
  navigation: {
    home: "Início",
    solutions: "Soluções",
    specialist: "Quem somos",
    services: "Serviços",
    infant: "Infantil",
    quiz: "Orçamento",
    serviceArea: "Atendimento",
  },
  header: {
    navAria: "Navegação principal",
    mobileNavAria: "Menu mobile",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    headerWhatsApp: "Pedir orçamento",
    mobileWhatsApp: "Atendimento no WhatsApp",
    whatsappMessage:
      "Olá, Jesus Clean! Quero enviar fotos e solicitar um pré-orçamento.",
  },
  hero: {
    eyebrow: "Atendimento exclusivo no Rio de Janeiro",
    title: "Seu sofá limpo, cheiroso e renovado",
    titleHighlight: "sem sair de casa.",
    body:
      "Higienização profissional de estofados no Rio de Janeiro com atendimento agendado, cuidado com o tecido e resultado visível.",
    primaryCta: "Atendimento no WhatsApp",
    secondaryCta: "Fazer pré-orçamento",
    chipsAria: "Principais soluções",
    benefits: [
      "Higienização de estofados",
      "Sofás e colchões",
      "Poltronas e tapetes",
      "Diversas regiões do RJ",
    ],
    whatsappMessage:
      "Olá, Jesus Clean! Quero avaliar meu estofado. Vou enviar fotos e minha região.",
  },
  introVideo: {
    eyebrow: "O que está escondido no seu estofado?",
    title: "Seu estofado pode estar mais sujo do que parece",
    body:
      "A limpeza comum nem sempre alcança a sujeira, os odores e os resíduos acumulados profundamente no tecido.",
    cta: "Quero avaliar meu estofado",
    controls: "Controles do vídeo",
    pause: "Pausar vídeo",
    play: "Reproduzir vídeo",
    unmute: "Ativar som",
    mute: "Desativar som",
    note: "Veja parte do processo e o resultado em um atendimento real da marca.",
    whatsappMessage:
      "Olá, Jesus Clean! Vi o vídeo e quero avaliar meu estofado. Vou enviar fotos.",
  },
  rollers: {
    one: {
      items: [
        "Higienização profissional",
        "Sofás",
        "Colchões",
        "Poltronas",
        "Tapetes",
        "Atendimento em domicílio",
        "Orçamento pelo WhatsApp",
      ],
      label:
        "Higienização profissional, sofás, colchões, poltronas, tapetes, atendimento em domicílio e orçamento pelo WhatsApp",
    },
    two: {
      items: [
        "Limpeza profunda",
        "Redução de odores",
        "Estofado renovado",
        "Cuidado com o tecido",
        "Atendimento agendado",
        "Resultado visível",
      ],
      label:
        "Limpeza profunda, redução de odores, estofado renovado, cuidado com o tecido, atendimento agendado e resultado visível",
    },
    three: {
      items: [
        "Sofá mais limpo",
        "Casa mais confortável",
        "Higienização profissional",
        "Atendimento no RJ",
        "Peça seu orçamento",
      ],
      label:
        "Sofá mais limpo, casa mais confortável, higienização profissional, atendimento no Rio de Janeiro e peça seu orçamento",
    },
  },
  quiz: {
    eyebrow: "Pré-orçamento online",
    title: "Conte o que você precisa higienizar.",
    description:
      "Responda cinco perguntas rápidas. No final, a mensagem fica pronta para você acrescentar fotos e solicitar a avaliação.",
    cover: {
      eyebrow: "Avaliação inicial",
      title: "Prepare seu pedido de pré-orçamento.",
      text:
        "Informe a peça, a quantidade, o principal problema, a região e o prazo desejado.",
      factsAria: "Resumo do pré-orçamento",
      facts: [
        "5 perguntas rápidas",
        "Sem cálculo automático de preço",
        "Resumo pronto para o atendimento",
      ],
      startButton: "Começar agora",
      progress: "perguntas para concluir",
    },
    startTitle: "Comece pelas informações da peça.",
    startText:
      "As respostas facilitam a avaliação, mas não substituem a análise das fotos e do tecido.",
    startButton: "Começar pré-orçamento",
    resultLabel: "Resumo concluído",
    send: "Enviar dados pelo WhatsApp",
    back: "Voltar",
    restart: "Refazer",
    questionProgress: "Pergunta {current} de {total}",
    progressLabel: "Progresso {progress}%",
    hint: "Escolha uma resposta para avançar",
    advancing: "Avançando...",
    autoAdvance: "Avanço automático",
    notInformed: "Não informado",
    questions: [
      {
        id: "item_type",
        question: "O que você quer higienizar?",
        options: [
          { id: "sofa", label: "Sofá" },
          { id: "mattress", label: "Colchão" },
          { id: "chairs", label: "Poltronas ou cadeiras" },
          { id: "rug", label: "Tapete" },
          { id: "car_seat", label: "Banco automotivo" },
          { id: "multiple", label: "Mais de uma peça" },
        ],
      },
      {
        id: "quantity",
        question: "Quantas peças você deseja higienizar?",
        options: [
          { id: "one", label: "1 peça" },
          { id: "two", label: "2 peças" },
          { id: "three_four", label: "3 ou 4 peças" },
          { id: "five_plus", label: "5 ou mais peças" },
        ],
      },
      {
        id: "main_problem",
        question: "Qual é o principal problema?",
        options: [
          { id: "odor", label: "Mau cheiro" },
          { id: "stains", label: "Manchas aparentes" },
          { id: "deep_dirt", label: "Sujeira acumulada" },
          { id: "maintenance", label: "Higienização preventiva" },
        ],
      },
      {
        id: "region",
        question: "Em qual região será o atendimento?",
        options: [
          { id: "south", label: "Zona Sul" },
          { id: "north", label: "Zona Norte" },
          { id: "west", label: "Zona Oeste, Barra ou Recreio" },
          { id: "center", label: "Centro, Tijuca ou Méier" },
          { id: "other", label: "Baixada ou outra região" },
        ],
      },
      {
        id: "timing",
        question: "Para quando você precisa do atendimento?",
        options: [
          { id: "asap", label: "O quanto antes" },
          { id: "this_week", label: "Ainda esta semana" },
          { id: "next_week", label: "Na próxima semana" },
          { id: "researching", label: "Estou pesquisando" },
        ],
      },
    ],
    labels: {
      item_type: "Tipo de peça",
      quantity: "Quantidade",
      main_problem: "Problema principal",
      region: "Região",
      timing: "Prazo desejado",
    },
    results: {
      ready: {
        title: "Seu pré-orçamento está quase pronto",
        text:
          "Envie este resumo e acrescente algumas fotos para a Jesus Clean avaliar sua peça.",
        recommendedProfile: "Pré-orçamento por fotos",
      },
    },
    whatsappIntro: "Olá, Jesus Clean! Fiz o pré-orçamento inicial pelo site.",
    whatsappOutro:
      "Vou anexar fotos das peças para vocês avaliarem. Sei que o valor final depende da análise.",
  },
  problems: {
    eyebrow: "Soluções para o dia a dia",
    title: "Quando a limpeza comum não é suficiente.",
    text:
      "A avaliação considera o tecido, o tempo e o tipo de sujeira antes de indicar o procedimento.",
    items: [
      {
        title: "Mau cheiro no sofá",
        text:
          "Higienização profunda para ajudar a reduzir odores e deixar o ambiente mais agradável.",
        cta: "Resolver no WhatsApp",
        message:
          "Olá, Jesus Clean! Meu sofá está com mau cheiro e quero enviar fotos para avaliação.",
      },
      {
        title: "Manchas aparentes",
        text:
          "Avaliação do tecido e limpeza técnica para melhorar o aspecto do estofado.",
        cta: "Avaliar minha peça",
        message:
          "Olá, Jesus Clean! Minha peça tem manchas aparentes e quero enviar fotos para avaliação.",
      },
      {
        title: "Sujeira acumulada",
        text:
          "Processo focado em deixar o estofado mais limpo e confortável para a família.",
        cta: "Quero higienizar",
        message:
          "Olá, Jesus Clean! Quero avaliar uma peça com sujeira acumulada.",
      },
      {
        title: "Aparência envelhecida",
        text:
          "Limpeza especializada para renovar o visual e melhorar a aparência da peça.",
        cta: "Pedir orçamento",
        message:
          "Olá, Jesus Clean! Quero avaliar uma peça com aparência envelhecida.",
      },
    ],
    disclaimer:
      "O resultado varia conforme tecido, tempo, origem e tipo de sujeira. Não há promessa de remoção total.",
  },
  services: {
    eyebrow: "Serviços",
    title: "Soluções para diferentes peças e ambientes.",
    text:
      "Sem fotos específicas publicadas, os cards usam ícones e informação objetiva — nunca imagens genéricas.",
    cards: [
      {
        id: "sofas",
        title: "Higienização de sofás",
        description: "Avaliação do tecido e limpeza técnica realizada no local.",
        benefit: "Ajuda a reduzir sujeiras e odores e melhora o aspecto.",
        cta: "Avaliar meu sofá",
        message:
          "Olá, Jesus Clean! Quero avaliar um sofá. Vou enviar fotos, quantidade de lugares e minha região.",
      },
      {
        id: "colchoes",
        title: "Higienização de colchões",
        description: "Processo direcionado ao tecido e às condições da peça.",
        benefit: "Contribui para uma superfície mais limpa e confortável.",
        cta: "Avaliar meu colchão",
        message:
          "Olá, Jesus Clean! Quero avaliar um colchão. Vou enviar fotos, tamanho e minha região.",
      },
      {
        id: "poltronas-cadeiras",
        title: "Poltronas e cadeiras",
        description: "Atendimento para peças avulsas ou conjuntos.",
        benefit: "Cuidado com detalhes, costuras e áreas de maior uso.",
        cta: "Avaliar minhas peças",
        message:
          "Olá, Jesus Clean! Quero avaliar poltronas ou cadeiras. Vou enviar fotos e quantidades.",
      },
      {
        id: "tapetes",
        title: "Tapetes",
        description: "Avaliação prévia do material, tamanho e estado atual.",
        benefit: "Limpeza orientada ao tipo de fibra e ao uso do ambiente.",
        cta: "Avaliar meu tapete",
        message:
          "Olá, Jesus Clean! Quero avaliar um tapete. Vou enviar fotos e medidas aproximadas.",
      },
      {
        id: "automotivos",
        title: "Bancos automotivos",
        description: "Higienização de bancos e superfícies estofadas do veículo.",
        benefit: "Ajuda a renovar o interior e reduzir resíduos acumulados.",
        cta: "Avaliar meu veículo",
        message:
          "Olá, Jesus Clean! Quero avaliar bancos automotivos. Vou enviar fotos e o modelo do veículo.",
      },
      {
        id: "multiplas-pecas",
        title: "Mais de uma peça",
        description: "Avaliação conjunta para diferentes tipos de estofado.",
        benefit: "Organiza o atendimento conforme a combinação de peças.",
        cta: "Avaliar um conjunto",
        message:
          "Olá, Jesus Clean! Quero avaliar mais de uma peça. Vou enviar fotos e quantidades.",
      },
      {
        id: "residencial-comercial",
        title: "Residencial e comercial",
        description: "Atendimento agendado em casas, empresas e condomínios.",
        benefit: "Escopo e acesso ao local alinhados antes do agendamento.",
        cta: "Consultar atendimento",
        message:
          "Olá, Jesus Clean! Quero consultar um atendimento residencial ou comercial.",
      },
    ],
  },
  infant: {
    eyebrow: "Cuidado para a rotina da família",
    title: "Higienização especial para itens de bebê e criança",
    text:
      "Carrinhos, bebê conforto, cadeirinhas, colchões infantis, tapetes e outros estofados acumulam resíduos e odores no dia a dia. A avaliação considera cada tecido e tipo de item.",
    benefits: [
      "Cuidado com os tecidos",
      "Mais conforto para a rotina",
      "Atendimento em domicílio",
    ],
    items: [
      "Carrinho de bebê",
      "Bebê conforto",
      "Cadeirinha infantil",
      "Colchão infantil",
      "Tapetes de quarto infantil",
      "Estofados usados por crianças",
    ],
    cta: "Quero higienizar itens infantis",
    whatsappMessage:
      "Olá, Jesus Clean! Quero avaliar itens infantis. Vou enviar fotos, quantidades e minha região.",
  },
  beforeAfter: {
    eyebrow: "Antes e depois",
    title: "Resultados que você consegue ver",
    text: "Acompanhe algumas transformações realizadas pela Jesus Clean.",
    ariaLabel: "Resultados reais de higienização",
  },
  specialist: {
    eyebrow: "Quem somos",
    title: "Cuidado profissional, do primeiro contato ao resultado.",
    body:
      "A Jesus Clean nasceu para entregar higienização profissional com cuidado, confiança e resultado visível. Igor Jesus lidera os atendimentos com atenção aos detalhes e compromisso com cada cliente.",
    imageAlt: "Igor Jesus, fundador da Jesus Clean, usando uniforme azul da marca",
    captionName: "Igor Jesus",
    captionText: "Fundador da Jesus Clean",
    locationBadge: "Atendimento no Rio de Janeiro",
    metricsAria: "Indicadores comerciais sujeitos a comprovação",
    metrics: [
      { value: 900, prefix: "+", suffix: "", label: "Clientes atendidos" },
      { value: 100, prefix: "", suffix: "%", label: "Atendimento no RJ" },
      { value: 5, prefix: "", suffix: "★", label: "Qualidade profissional" },
    ],
    features: [
      {
        title: "Cuidado com o tecido",
        text: "Cada peça é avaliada antes da definição do procedimento.",
      },
      {
        title: "Atendimento próximo",
        text: "Orientação clara para o preparo, a execução e a secagem.",
      },
    ],
    cta: "Falar com Igor no WhatsApp",
    instagramCta: "Instagram",
    whatsappMessage:
      "Olá, Igor! Conheci a Jesus Clean pelo site e quero avaliar meu estofado.",
  },
  community: {
    eyebrow: "Por que escolher a Jesus Clean",
    title: "Quatro pilares em cada atendimento.",
    body:
      "Uma experiência organizada, com avaliação da peça, cuidado na execução e orientação próxima.",
    imageAlt:
      "Igor Jesus usando uniforme azul em ambiente residencial preparado para atendimento",
    testimonialsTitle: "Pilares do atendimento",
    noTestimonials: "Nenhuma avaliação autorizada publicada.",
    pillars: [
      {
        title: "Atendimento em domicílio",
        text: "A Jesus Clean vai até sua casa ou empresa com horário agendado.",
      },
      {
        title: "Cuidado específico",
        text: "O tecido, o tamanho e o estado da peça entram na avaliação inicial.",
      },
      {
        title: "Processo profissional",
        text: "A execução é organizada para higienizar a peça no próprio local.",
      },
      {
        title: "Resultado visível",
        text: "Acompanhamento próximo e orientação para a etapa de secagem.",
      },
    ],
    cta: "Quero avaliar minha peça",
    whatsappMessage:
      "Olá, Jesus Clean! Quero avaliar uma peça e entender o processo de higienização.",
  },
  testimonials: {
    carouselAria: "Avaliações autorizadas",
    googleReview: "Avaliação no Google",
    starsLabel: "{rating} de 5 estrelas",
    previous: "Avaliação anterior",
    next: "Próxima avaliação",
    dots: "Indicadores das avaliações",
    dot: "Ir para avaliação {index}",
  },
  practical: {
    eyebrow: "Como funciona",
    title: "Como funciona o atendimento",
    body:
      "Solicite sua avaliação e receba orientação para agendar a higienização.",
    stepsAria: "Etapas do atendimento",
    steps: [
      {
        number: "01",
        title: "Envie fotos pelo WhatsApp",
        text:
          "Mostre o estofado, a quantidade de peças e os principais pontos que deseja higienizar.",
      },
      {
        number: "02",
        title: "Receba a avaliação",
        text:
          "A equipe analisa o tipo de peça, tecido, tamanho, estado atual e localização.",
      },
      {
        number: "03",
        title: "Agende o atendimento",
        text:
          "Escolha uma data disponível para receber a Jesus Clean em sua casa ou empresa.",
      },
      {
        number: "04",
        title: "Receba a higienização",
        text:
          "O serviço é realizado no local e você recebe as orientações necessárias para a secagem.",
      },
    ],
    firstClass: {
      eyebrow: "Avaliação inicial",
      title: "Fotos e contexto ajudam a orientar o atendimento.",
      text:
        "O pré-orçamento considera a peça, o tecido, o tamanho, o estado atual e a região. O valor não é calculado automaticamente.",
    },
    facts: [
      { label: "Contato", value: "Pré-orçamento por fotos" },
      { label: "Área", value: "Diversas regiões do RJ" },
      { label: "Peças", value: "Residenciais e comerciais" },
      { label: "Agenda", value: "Disponibilidade confirmada" },
      { label: "Execução", value: "Atendimento no local" },
    ],
    checklistTitle: "O que enviar",
    checklist: [
      "Fotos gerais e dos principais pontos",
      "Quantidade e tipo de peças",
      "Bairro do atendimento",
      "Prazo desejado",
    ],
    primaryCta: "Solicitar avaliação",
    secondaryCta: "Refazer pré-orçamento",
    whatsappMessage:
      "Olá, Jesus Clean! Quero enviar os dados e fotos para uma avaliação inicial.",
  },
  classProfiles: {
    heading: "Pedidos mais comuns",
    ariaLabel: "Carrossel de serviços em destaque",
    previous: "Serviço anterior",
    next: "Próximo serviço",
    dots: "Indicadores dos serviços",
    dot: "Ir para serviço {index}",
    progress: "Serviço {current} de {total}",
    audienceLabel: "Indicado para",
    profiles: {
      sofa: {
        title: "Higienização de sofás",
        description:
          "Avaliação do tecido e limpeza profissional realizada em domicílio.",
        audience: "Sofás com sujeira acumulada, odores ou aparência desgastada.",
        cta: "Avaliar meu sofá",
        whatsappMessage:
          "Olá, Jesus Clean! Quero avaliar meu sofá e vou enviar fotos.",
      },
      mattress: {
        title: "Higienização de colchões",
        description:
          "Procedimento orientado ao material, tamanho e estado da peça.",
        audience: "Colchões que precisam de limpeza profunda ou manutenção.",
        cta: "Avaliar meu colchão",
        whatsappMessage:
          "Olá, Jesus Clean! Quero avaliar meu colchão e vou enviar fotos.",
      },
      combo: {
        title: "Mais de uma peça",
        description:
          "Organize a avaliação de sofás, cadeiras, poltronas ou outros estofados.",
        audience: "Residências, empresas e condomínios com múltiplos itens.",
        cta: "Avaliar várias peças",
        whatsappMessage:
          "Olá, Jesus Clean! Quero avaliar mais de uma peça e vou enviar fotos e quantidades.",
      },
    },
  },
  location: {
    eyebrow: "Área de atendimento",
    title: "Atendimento em diversas regiões do Rio de Janeiro",
    body:
      "A Jesus Clean vai até você com atendimento agendado para residências, empresas e condomínios.",
    meetingLabel: "Modalidade",
    meetingPoint: "Atendimento em domicílio",
    neighborhoodAndCity: "Rio de Janeiro, RJ",
    exactNote: "Bairro e disponibilidade confirmados antes do agendamento.",
    route: "Enviar localização",
    cta: "Consultar meu bairro",
    mapTitle: "Representação da área de atendimento",
    mapPendingTitle: "Atendimento móvel no Rio de Janeiro",
    mapPendingText:
      "Não exibimos endereço ou mapa fixo. Consulte sua região para confirmar disponibilidade.",
    regionsLabel: "Regiões consultadas",
    regions: [
      "Zona Sul",
      "Zona Norte",
      "Zona Oeste",
      "Centro",
      "Barra e Recreio",
      "Tijuca e Méier",
      "Baixada e entorno sob consulta",
    ],
    whatsappMessage:
      "Olá, Jesus Clean! Quero confirmar se vocês atendem meu bairro. Minha localização é:",
  },
  faq: {
    eyebrow: "Dúvidas frequentes",
    title: "Informação clara antes do atendimento.",
    text:
      "Prazos, resultados e disponibilidade dependem da avaliação de cada peça.",
    cta: "Tirar dúvida no WhatsApp",
    whatsappMessage:
      "Olá, Jesus Clean! Li as dúvidas frequentes e gostaria de uma orientação.",
    items: faqItems,
  },
  finalCta: {
    eyebrow: "Pré-orçamento por fotos",
    title: "Seu estofado pode parecer novo de novo",
    text:
      "Envie uma foto e receba orientação para higienizar seu sofá, colchão, tapete ou outro estofado.",
    primary: "Solicitar orçamento no WhatsApp",
    secondary: "Fazer pré-orçamento",
    visualTop: "Atendimento agendado",
    visualStrong: "Cuidado em cada detalhe",
    whatsappMessage:
      "Olá, Jesus Clean! Quero enviar fotos e solicitar um pré-orçamento.",
  },
  footer: {
    description:
      "Higienização profissional de estofados residenciais e comerciais no Rio de Janeiro.",
    whatsappMessage:
      "Olá, Jesus Clean! Vim pelo site e gostaria de solicitar uma avaliação.",
    navigationTitle: "Navegação",
    infoTitle: "Atendimento",
    serviceLanguages: "Rio de Janeiro • sob consulta",
    rights: "Todos os direitos reservados.",
    privacy: "Política de privacidade",
    cookiePreferences: "Preferências de cookies",
  },
  floating: {
    ariaLabel: "Chamar a Jesus Clean no WhatsApp",
    message:
      "Olá, Jesus Clean! Quero enviar fotos e solicitar um pré-orçamento.",
  },
  assistant: {
    landmarkLabel: "Assistente de agendamento Jesus Clean",
    launcherTitle: "Assistente virtual",
    launcherSubtitle: "Jesus Clean orienta você",
    directWhatsapp: "Agendamento direto",
    directWhatsappAria: "Agendamento direto pelo WhatsApp",
    directWhatsappMessage:
      "Olá, Jesus Clean! Quero consultar a disponibilidade e agendar uma higienização.",
    open: "Abrir assistente de agendamento",
    close: "Fechar assistente de agendamento",
    title: "Jesus Clean responde",
    subtitle: "Assistente de agendamento",
    notice: "Orientação simples para organizar seu pedido.",
    greeting:
      "Olá! 👋 Vou preparar seu pedido em 5 passos rápidos. No final, você envia tudo organizado pelo WhatsApp.",
    step: "ETAPA {current} DE {total}",
    helper: "Toque em uma opção para continuar.",
    back: "Voltar",
    restart: "Refazer",
    resultEyebrow: "TUDO CERTO",
    resultTitle: "Seu pedido está organizado!",
    resultText:
      "Confira o resumo e envie pelo WhatsApp. Depois, é só acrescentar as fotos das peças.",
    send: "AGENDAR PELO WHATSAPP",
    whatsappIntro:
      "👋 *OLÁ, JESUS CLEAN!* Quero solicitar um agendamento de higienização.",
    whatsappOutro:
      "Vou anexar fotos das peças para a avaliação e aguardo a confirmação da disponibilidade.",
  },
  consent: {
    eyebrow: "Privacidade",
    title: "Você controla os cookies.",
    text:
      "Usamos cookies essenciais para o site funcionar. Analytics e marketing só são ativados com sua permissão.",
    privacyLink: "Ver política de privacidade",
    optionsAria: "Preferências de cookies",
    essentialTitle: "Essenciais",
    essentialText: "Necessários para navegação e segurança.",
    analyticsTitle: "Analytics",
    analyticsText: "Ajuda a entender seções, CTAs e origem de campanha.",
    marketingTitle: "Marketing",
    marketingText: "Permite pixels de mídia quando houver ID real.",
    reject: "Recusar",
    customize: "Personalizar",
    save: "Salvar preferências",
    accept: "Aceitar",
  },
  privacy: {
    metadataTitle: "Política de privacidade",
    back: "Voltar para a landing page",
    eyebrow: "Privacidade",
    title: "Política de privacidade inicial",
    intro:
      "Esta página descreve a estrutura de privacidade do site Jesus Clean. A validação jurídica final depende do nome jurídico, CNPJ, e-mail de privacidade e prazos formais ainda pendentes.",
    sections: [
      {
        title: "Dados que você informa",
        text:
          "Ao usar o quiz ou iniciar uma conversa, você pode informar tipo de peça, quantidade, problema, região, prazo e dados enviados diretamente pelo WhatsApp.",
      },
      {
        title: "Dados técnicos",
        text:
          "Com seu consentimento, o site pode registrar eventos de navegação e origem de campanha para entender quais seções ajudam no contato.",
      },
      {
        title: "Cookies e consentimento",
        text:
          "Cookies essenciais mantêm o funcionamento básico. Analytics e marketing só são ativados depois da sua escolha.",
      },
      {
        title: "Compartilhamento",
        text:
          "Google Analytics, Google Tag Manager ou Meta Pixel só são carregados quando houver IDs reais configurados e consentimento compatível.",
      },
      {
        title: "Pontos pendentes",
        text:
          "Nome jurídico, CNPJ, e-mail de privacidade, base legal e prazos de retenção precisam de validação pelo responsável da marca.",
      },
    ],
  },
  whatsapp: {
    defaultMessage:
      "Olá, Jesus Clean! Gostaria de enviar fotos e solicitar um pré-orçamento.",
    quizAnswersTitle: "Respostas do pré-orçamento:",
    campaignTitle: "Origem da campanha:",
    origin: "Origem do clique",
    section: "Seção",
    cta: "CTA",
  },
} as const;
