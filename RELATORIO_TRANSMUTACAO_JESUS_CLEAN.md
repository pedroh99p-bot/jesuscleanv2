# Relatório de transmutação — Jesus Clean

Data da validação: 25/07/2026  
Projeto: Jesus Clean — higienização profissional de estofados no Rio de Janeiro

## 1. Resumo das alterações

A landing page da Alta Con Samurai foi copiada para um projeto Git independente e
transformada para a Jesus Clean. Foram substituídos marca, conteúdo, navegação, oferta,
quiz, integrações, SEO, dados estruturados, política de privacidade e assets. A arquitetura
Next.js, o sistema de idiomas e os padrões de movimento responsivo foram preservados.

A identidade mantém o azul solicitado, agora organizada em tokens de azul-marinho,
azul e ciano. Nenhum número, domínio, endereço, avaliação ou credencial foi inventado.
Os CTAs de WhatsApp ficam desabilitados até a configuração do número oficial.

## 2. Arquivos alterados

- Raiz: `README.md`, `package.json`, `package-lock.json`, `next.config.ts`.
- App: `app/globals.css`, `app/layout.tsx`, `app/page.tsx`,
  `app/privacidade/page.tsx`, `app/robots.ts`, `app/sitemap.ts`.
- Componentes: `AnalyticsProvider.tsx`, `FinalCTA.tsx`, `Footer.tsx`, `Header.tsx`,
  `Hero.tsx`, `IntroVideoSection.tsx`, `LocationSection.tsx`, `MobileMenu.tsx`,
  `PracticalExperienceSection.tsx`, `Preloader.tsx`, `Quiz.tsx`,
  `SocialProofSection.tsx`, `WhatsAppButton.tsx`.
- Dados: `business.ts`, `classProfiles.ts`, `faq.ts`, `links.ts`, `navigation.ts`,
  `quiz.ts`.
- Idiomas: `i18n/dictionaries/pt-BR.ts`, `en.ts`, `es.ts` e `index.ts`.
- Bibliotecas internas: `lib/analytics.ts`, `lib/seo.ts`, `lib/whatsapp.ts`.

## 3. Arquivos criados

- Componentes: `BeforeAfterInfiniteCarousel.tsx`, `InfantSection.tsx`,
  `ProblemSection.tsx`, `ServicesSection.tsx`, `SpecialistSection.tsx`.
- Dados: `data/beforeAfter.ts`, `data/services.ts`.
- Documentação: `ASSETS_PENDENTES.md`, `DADOS_PENDENTES.md`,
  `VALIDACOES_COMERCIAIS.md` e este relatório.
- Estrutura de assets: diretórios `before-after`, `brand`, `final-cta`, `hero`,
  `icons`, `infant`, `location`, `pillars`, `process`, `quiz`, `seo`, `services`,
  `specialist`, `testimonials` e `video`.

## 4. Arquivos removidos no novo projeto

- Componentes legados: `ClassDetails.tsx`, `CommunitySection.tsx`,
  `HowItWorks.tsx`, `ObjectionSection.tsx`, `SocialProofCarousel.tsx`,
  `TrustStrip.tsx`.
- O antigo `AboutSamurai.tsx` foi transformado e renomeado para
  `SpecialistSection.tsx`.
- Dados legados: `benefits.ts`, `classDetails.ts`, `howItWorks.ts`, `metrics.ts`,
  `privacy.ts`, `testimonials.ts`.
- Página estática antiga: `legacy/index.html`.

## 5. Assets baixados

Foram incorporados cinco arquivos oficiais fornecidos e dois pôsteres WebP derivados
dos vídeos, totalizando sete assets locais de mídia. As fontes e validações estão em
`public/assets/ASSET_SOURCES.md`.

## 6. Caminho local de cada asset

| Uso | Caminho |
| --- | --- |
| Vídeo do hero | `public/assets/hero/hero-background.mp4` |
| Pôster do hero | `public/assets/hero/hero-poster.webp` |
| Vídeo introdutório | `public/assets/video/jesus-clean-introduction.mp4` |
| Pôster introdutório | `public/assets/video/jesus-clean-introduction-poster.webp` |
| Arte de pilares | `public/assets/pillars/four-pillars.webp` |
| Logo | `public/assets/brand/jesus-clean-logo.webp` |
| Igor Jesus | `public/assets/specialist/igor-jesus.webp` |

## 7. Peso de cada asset

| Asset | Peso |
| --- | ---: |
| `hero-background.mp4` | 1.668.990 bytes |
| `hero-poster.webp` | 83.522 bytes |
| `jesus-clean-introduction.mp4` | 7.613.623 bytes |
| `jesus-clean-introduction-poster.webp` | 45.636 bytes |
| `four-pillars.webp` | 146.904 bytes |
| `jesus-clean-logo.webp` | 157.208 bytes |
| `igor-jesus.webp` | 136.408 bytes |

## 8. Otimizações realizadas

- Vídeos servidos localmente, sem dependência ativa da Cloudinary.
- MP4s preparados com `faststart`; áudio removido do vídeo mudo do hero.
- Pôsteres WebP gerados a partir dos próprios vídeos.
- Imagens mantidas em WebP e renderizadas com dimensões e proporções explícitas.
- Tokens de cor corrigidos, incluindo `--cyan-500`, `--cyan-600` e `--cyan-700`.
- Regras para `prefers-reduced-motion`, foco visível, contraste e navegação responsiva.
- Conteúdo duplicado do carrossel marcado como decorativo para leitores de tela.
- Next.js atualizado para `16.2.12`; `postcss` e `sharp` fixados por overrides seguros.
- Auditoria de dependências concluída com zero vulnerabilidades.

## 9. Seções adaptadas

Foram adaptadas doze seções principais: Hero, vídeo introdutório, problemas/soluções,
quiz, especialista, pilares, serviços, infantil, como funciona, FAQ, atendimento/localização
e CTA final. Header, menu mobile, três rollers editoriais, footer, preloader e CTA flutuante
também foram reescritos para a nova marca.

## 10. Nova seção criada

Foi criado o componente `BeforeAfterInfiniteCarousel`, com trilha infinita, cópia
decorativa inacessível, imagens lazy, ausência de arraste e fallback estático para
`prefers-reduced-motion`. Como não existem ao menos duas fotos reais e autorizadas,
`data/beforeAfter.ts` permanece vazio e a seção retorna `null`, sem placeholders nem
espaço em branco.

## 11. Alterações no quiz

- Fluxo preservado com cinco perguntas: peça, quantidade, problema, região e prazo.
- Progresso, autoavanço, voltar, resultado, reiniciar e gerenciamento de foco preservados.
- O resultado é tratado como pré-orçamento, sem cálculo automático de preço.
- O resumo prepara peça, quantidade, problema, região, prazo, origem, seção, `cta_id`,
  UTMs disponíveis e solicitação de fotos.
- Fluxo completo, voltar e refazer foram exercitados no navegador.

## 12. Alterações no WhatsApp

- Configuração centralizada em `data/business.ts` e geração de mensagem em
  `lib/whatsapp.ts`.
- O número antigo foi removido.
- O número oficial deve ser informado em `NEXT_PUBLIC_WHATSAPP_NUMBER`.
- Sem a variável, todos os 27 CTAs encontrados ficam desabilitados e nenhum link
  `wa.me` é emitido.
- Textos visíveis, `aria-label`, mensagem e eventos estão separados.

## 13. Alterações de SEO

- Título e descrição atualizados para higienização de estofados no Rio de Janeiro.
- Canonical, Open Graph, Twitter Card, favicon, robots, sitemap e alt texts atualizados.
- JSON-LD usa `LocalBusiness` + `ProfessionalService`, `Service`, `Person` e `FAQPage`.
- FAQ visual e estruturado compartilham a mesma fonte com dez perguntas.
- Não foram inventados CNPJ, endereço, telefone, horário, nota, preço ou coordenadas.
- Enquanto `NEXT_PUBLIC_SITE_URL` estiver ausente, robots usa `noindex`/`disallow` e
  o sitemap fica sem URLs publicáveis.

## 14. Alterações de analytics

- Namespaces e eventos antigos foram substituídos por `jesusclean_*` e `jesusclean:*`.
- IDs de GTM, GA4 e Meta Pixel são somente variáveis de ambiente.
- Sem consentimento: nenhum script externo e nenhum evento de rastreamento.
- Com consentimento e sem IDs reais: nenhum script externo é carregado, como esperado.
- Preferências de cookies, recusa e consentimento personalizado foram testados.

## 15. Referências antigas ainda encontradas

Nenhuma referência de runtime ou SEO à Alta Con Samurai, Samurai, Posto 12 ou Praia do
Pontal foi encontrada pela busca case-insensitive. URLs antigas da Cloudinary aparecem
somente no documento `public/assets/ASSET_SOURCES.md` como registro das fontes, nunca
como asset ativo.

## 16. Testes executados

- `npm run typecheck`.
- `npm run build`.
- `npm audit --audit-level=high`.
- `git diff --check`.
- Busca completa por referências à marca antiga.
- Matriz responsiva em 360×800, 390×844, 430×932, 768×1024, 1024×768,
  1365×768 e 1440×900.
- Navegação desktop e mobile, menu, Escape, âncoras e overflow horizontal.
- Hero, preloader, vídeo introdutório, play, pause, áudio e pausa fora da viewport.
- Quiz completo, voltar e reiniciar.
- Português, inglês e espanhol.
- Dez FAQs visíveis e dez entidades estruturadas.
- Consentimento de cookies e política de privacidade.
- Respostas HTTP de robots, sitemap, privacidade, vídeos e pôsteres.
- Carregamento e dimensões naturais de todas as imagens renderizadas.
- Inspeção de erros e avisos no console.

## 17. Resultado de typecheck

Passou: `tsc --noEmit`, sem erros.

## 18. Resultado de build

Passou em Next.js 16.2.12. Foram pré-renderizadas as rotas `/`, `/privacidade`,
`/robots.txt` e `/sitemap.xml`, além da página padrão de não encontrado.

## 19. Resultado dos testes responsivos

Todas as sete resoluções testadas ficaram sem overflow horizontal e sem âncoras inválidas.
O menu mobile é usado até 1024 px; a navegação desktop foi validada em 1365 px e 1440 px.
O conteúdo principal e os CTAs do hero ficaram visíveis no primeiro viewport de desktop.
Logo, foto de Igor e mídias mantiveram suas proporções.

O modo reduzido foi validado pela presença das regras de CSS e pelo caminho estático dos
componentes. O carrossel de antes/depois não pôde ser exercitado visualmente porque a
ausência deliberada de fotos reais impede sua renderização.

## 20. Dados ainda pendentes

- Número oficial de WhatsApp.
- Domínio oficial.
- URL final e autorizada do Instagram.
- E-mail de contato e privacidade.
- IDs reais de GTM, GA4 e Meta Pixel.
- Endereço público ou decisão de não exibi-lo; horários de atendimento.
- Dados comerciais e jurídicos descritos em `DADOS_PENDENTES.md`.

## 21. Assets ainda pendentes

- Ao menos duas fotos reais e autorizadas de antes e depois.
- Open Graph e favicon definitivos.
- Fotos específicas de serviços e da seção infantil.
- Avaliações/depoimentos autorizados.
- Fundo fotográfico específico para o CTA final.

A lista completa está em `ASSETS_PENDENTES.md`.

## 22. Validações comerciais pendentes

Precisam de evidência antes da publicação: mais de 900 clientes, cinco estrelas,
abrangência declarada, prazos de execução e secagem, remoção de manchas, redução de
odores, compatibilidade com crianças/animais, garantias, urgência e depoimentos.
Os valores estão centralizados e a urgência inicia desativada. Detalhes:
`VALIDACOES_COMERCIAIS.md`.

## 23. Estado final do Git

- O projeto original permaneceu intocado e limpo.
- O novo projeto usa um repositório Git independente na branch `main`.
- Histórico organizado em commits de inicialização, assets, dados, fluxo comercial,
  conteúdo/layout, SEO e documentação.
- A verificação final foi executada sobre o commit técnico `667d36a`.

## 24. URL do novo repositório

`https://github.com/pedroh99p-bot/jesuscleanv2`

## 25. Commit final

O commit técnico validado é `667d36a`. O SHA do commit que inclui este próprio relatório
não pode ser autorreferenciado sem alterar o próprio SHA; ele é informado no handoff
final e corresponde ao topo da branch `main` enviada ao GitHub.

## 26. URL de deploy

Não existe deploy nesta entrega. O pedido autorizou o envio ao GitHub, e a publicação
deve aguardar ao menos o número oficial de WhatsApp e o domínio oficial.
