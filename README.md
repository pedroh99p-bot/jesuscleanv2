# Jesus Clean

Landing page de conversão para a Jesus Clean, especializada em higienização profissional de estofados no Rio de Janeiro. O projeto preserva a base Next.js, TypeScript, responsividade, internacionalização, consentimento, analytics condicional, vídeos e fluxo de pré-orçamento da landing original, mas usa identidade, conteúdo, dados e assets próprios.

## Stack

- Next.js com App Router
- React e TypeScript
- CSS global com tokens de design
- Lucide React
- npm

## Desenvolvimento

```bash
npm ci
npm run dev
```

Validações:

```bash
npm run typecheck
npm run build
```

## Configuração antes de publicar

O número oficial do WhatsApp e o domínio público já estão definidos no projeto. Use um `.env.local` apenas para as integrações opcionais:

```bash
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/perfil-oficial/
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_META_PIXEL_ID=
```

Todos os CTAs abrem diretamente a conversa com o número oficial `5521980325724`, levando a mensagem correspondente já formatada. O domínio oficial é `https://www.jesuscleanhigienizacao.com.br`.

## Publicação

O projeto gera uma exportação estática do Next.js e publica automaticamente no GitHub Pages pelo workflow `.github/workflows/deploy-pages.yml` a cada push na `main`.

## Fontes centrais

- `data/business.ts`: negócio, regiões, assets, campanhas e integrações.
- `data/faq.ts`: FAQ exibido em PT-BR e usado no JSON-LD.
- `data/quiz.ts`: tipos e montagem do resumo do pré-orçamento.
- `data/services.ts`: catálogo técnico e ícones de serviços.
- `data/beforeAfter.ts`: fotos autorizadas do carrossel.
- `i18n/dictionaries/`: cópia em PT-BR, inglês e espanhol.

## Assets

As mídias ativas estão em `public/assets`. Fontes, dimensões, duração e otimizações estão documentadas em `public/assets/ASSET_SOURCES.md`.

## Pendências

Consulte:

- `DADOS_PENDENTES.md`
- `ASSETS_PENDENTES.md`
- `VALIDACOES_COMERCIAIS.md`

Nenhum telefone, endereço, avaliação, preço ou dado jurídico foi inventado.
