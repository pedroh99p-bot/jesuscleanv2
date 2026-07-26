# Dados pendentes

## Bloqueadores de publicação

- **Número oficial de WhatsApp:** recomendado em `NEXT_PUBLIC_WHATSAPP_NUMBER`, com `55 + DDD + número`. Sem ele, os CTAs continuam funcionando pelo compartilhamento do WhatsApp, mas o visitante precisa escolher o contato; com o número, a conversa abre diretamente para a Jesus Clean.
- **Domínio oficial:** obrigatório em `NEXT_PUBLIC_SITE_URL`. Sem ele, canonical e sitemap não devem ser publicados e o `robots` bloqueia indexação.

## Integrações e contato

- Link final e autorizado do Instagram `@jesus.clean` (`NEXT_PUBLIC_INSTAGRAM_URL`).
- E-mail oficial de contato e privacidade.
- IDs reais de Google Tag Manager, GA4 e Meta Pixel.
- Endereço público, ou decisão formal de não exibir endereço.
- Horários de atendimento.

## Dados comerciais

- Formas de pagamento.
- Política de reagendamento e cancelamento.
- Regras de deslocamento e regiões com taxa adicional, se houver.
- Critérios para atendimento comercial e em condomínios.

## Dados jurídicos

- Razão social.
- CNPJ, quando aplicável.
- Responsável pelo tratamento de dados.
- Base legal e prazos de retenção.
- Canal para solicitações de titulares.

O arquivo `.env` não é versionado. As variáveis esperadas estão descritas no `README.md`.
