# Fontes dos assets — Jesus Clean

Todos os arquivos abaixo foram baixados em 25/07/2026, responderam com HTTP 200, MIME compatível e foram validados localmente.

| Uso | Arquivo local | Fonte | Validação |
| --- | --- | --- | --- |
| Vídeo de fundo do hero | `/assets/hero/hero-background.mp4` | `https://res.cloudinary.com/dhbrxzt5a/video/upload/v1785024188/85317d81391a5ff5282d88e1940a7c6a_540w_ia0iyx.mp4` | MP4/H.264, 540×960, 10,38 s; áudio removido e `faststart` aplicado; 1.668.990 bytes |
| Poster do hero | `/assets/hero/hero-poster.webp` | Quadro extraído localmente do vídeo do hero, em 00:00:01 | WebP, 540×960; 83.522 bytes |
| Vídeo introdutório | `/assets/video/jesus-clean-introduction.mp4` | `https://res.cloudinary.com/dhbrxzt5a/video/upload/v1785023714/Voc%C3%AA_teria_coragem_de_sentar_nesse_sof%C3%A1_sem_saber_o_que_est%C3%A1_escondido_nele%C3%81caros_poeira_suor_ivdlbj.mp4` | MP4/H.264, 720×1280, 41,54 s; `faststart` aplicado; 7.613.623 bytes |
| Poster do vídeo introdutório | `/assets/video/jesus-clean-introduction-poster.webp` | Quadro extraído localmente do vídeo introdutório, em 00:00:19 | WebP, 720×1280; 45.636 bytes |
| Quatro pilares | `/assets/pillars/four-pillars.webp` | `https://res.cloudinary.com/dhbrxzt5a/image/upload/v1785026666/c53bb315-2704-4eeb-8baa-d8efc5c85782_ve0531.webp` | WebP, 1672×941, RGB; 146.904 bytes |
| Logo | `/assets/brand/jesus-clean-logo.webp` | `https://res.cloudinary.com/dhbrxzt5a/image/upload/v1785020052/1212bd68-3999-4ee5-b9ad-63e167c6cf13_1_o9v4lj.webp` | WebP, 1080×1080, RGBA; 157.208 bytes |
| Igor Jesus | `/assets/specialist/igor-jesus.webp` | `https://res.cloudinary.com/dhbrxzt5a/image/upload/v1785026817/9023f2f6-fed8-4abf-88df-be9d6e74f7a4_qv5srp.webp` | WebP, 1122×1402, RGB; 136.408 bytes |
| Preview para WhatsApp e redes sociais | `/assets/seo/whatsapp-share.webp` | `https://res.cloudinary.com/dhbrxzt5a/image/upload/v1785030927/df70ace0-167a-43cf-b250-995b40858469_w8wvwv.webp` | WebP, 1731×909, RGB; 154.032 bytes |
| Favicon | `/assets/seo/favicon.webp` | `https://res.cloudinary.com/dhbrxzt5a/image/upload/v1785031026/7682bd58-28c1-4e58-bb45-a5ec6fe7e3b0_1_dbtjc4.webp` | WebP, 1080×1080, RGBA; 127.504 bytes |
| Ícone do WhatsApp | `/assets/icons/whatsapp-logo.webp` | `https://res.cloudinary.com/dhbrxzt5a/image/upload/v1784740034/whatsapp-logo-png_iyyy0e.webp` | WebP, 4096×4070, RGBA; 124.334 bytes |

## Observações

- Os vídeos foram remuxados sem recompressão para preservar a qualidade.
- O vídeo do hero é sempre reproduzido sem som; por isso sua faixa de áudio foi removida.
- A logo tem tela quadrada e transparência, mas a assinatura completa é horizontal na metade inferior. Deve ser exibida com `object-fit: contain`, sem máscara circular.
- A arte horizontal de quatro pilares é exibida integralmente, acompanhada por pilares
  apresentados também como HTML acessível.
- A arte de compartilhamento contém afirmações comerciais incorporadas; a comprovação
  dessas afirmações continua registrada em `VALIDACOES_COMERCIAIS.md`.
