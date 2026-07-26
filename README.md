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

## Configuração obrigatória antes de publicar

Crie um `.env.local` apenas no ambiente de desenvolvimento ou configure as variáveis na plataforma:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=5521999999999
NEXT_PUBLIC_SITE_URL=https://dominio-oficial.com.br
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/perfil-oficial/
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_META_PIXEL_ID=
```

O número deve incluir `55`, DDD e telefone, somente com dígitos. Enquanto ele estiver ausente, os CTAs de WhatsApp permanecem desabilitados. Enquanto o domínio estiver ausente, o site usa `localhost` apenas para build e publica `robots` com bloqueio de indexação.

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
