---
name: Lohan Auto Center
description: Landing page de centro automotivo que se lê como um manual de serviço bem-feito, em papel claro, tinta grafite e laranja só onde há ação ou medida.
colors:
  action: "#C24A26"
  action-hover: "#B23F1E"
  orange: "#E0602E"
  amber: "#F28C38"
  peach: "#FDEBDD"
  peach-ink: "#7A2E15"
  ink: "#1C1917"
  ink-2: "#57534E"
  paper: "#FFFFFF"
  paper-warm: "#FAF7F4"
  gray-50: "#F4F4F5"
  line: "#E7E5E4"
  line-strong: "#D6D3D1"
  footer-muted: "#A8A29E"
  footer-rule: "#3A3532"
  ok: "#15803D"
  bad: "#B91C1C"
  wa: "#25D366"
typography:
  display:
    fontFamily: "Archivo, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.125rem, 1.35rem + 3.3vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: "-0.025em"
    fontVariation: "\"wdth\" 116"
  headline:
    fontFamily: "Archivo, Inter, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 1.2rem + 1.8vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    fontVariation: "\"wdth\" 116"
  title:
    fontFamily: "Archivo, Inter, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body-lg:
    fontFamily: "Archivo, Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Archivo, Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo, Inter, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.3
  mono:
    fontFamily: "IBM Plex Mono, ui-monospace, Menlo, Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0em"
    fontFeature: "\"tnum\" 1"
  caption:
    fontFamily: "IBM Plex Mono, ui-monospace, Menlo, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.02em"
rounded:
  photo-chip: "8px"
  icon: "12px"
  field: "14px"
  inset: "16px"
  card: "20px"
  panel: "24px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  2xl: "64px"
  gutter: "20px"
  gutter-md: "32px"
  section-y: "72px"
  section-y-md: "104px"
  section-y-lg: "120px"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "52px"
  button-secondary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-header:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "40px"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.action}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "56px"
  input-field:
    backgroundColor: "{colors.gray-50}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "0 16px"
    height: "52px"
  input-field-focus:
    backgroundColor: "{colors.paper}"
  chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  tag:
    backgroundColor: "{colors.peach}"
    textColor: "{colors.peach-ink}"
    rounded: "{rounded.pill}"
    padding: "6px 10px"
  card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "22px"
  tip:
    backgroundColor: "{colors.peach}"
    textColor: "{colors.peach-ink}"
    rounded: "{rounded.inset}"
    padding: "16px 18px"
  readout-panel:
    backgroundColor: "{colors.gray-50}"
    rounded: "{rounded.panel}"
    padding: "24px"
  readout-wheel:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.inset}"
    padding: "18px"
---

# Design System: Lohan Auto Center

## Overview

**Creative North Star: "O Manual da Oficina"**

A página se comporta como um manual de serviço bem impresso, não como o site escuro de oficina com pneu, chave inglesa e neon. Papel branco e branco quente, tinta grafite, linhas finas de 1px separando tudo. Cada seção é um capítulo numerado na margem; cada foto é uma figura com legenda "Fig. N —"; cada número que importa (nota, medida de pneu, ângulo de alinhamento, horário) aparece em mono tabular. O laranja Lohan só entra onde há ação ou medida.

A densidade é de manual: texto confortável, tabelas e listas pautadas em vez de grades de cartões, e um único componente de conversão (a ficha de orçamento) reaproveitado por todos os botões. A profundidade é quase toda tonal: papel sobre papel quente, hairlines, e sombras raras e difusas só em elementos que flutuam ou que precisam ser encontrados. A única superfície de cor cheia é o bloco final em gradiente laranja; a única superfície escura é o rodapé.

A assinatura do sistema é o painel de leitura 3D: rodas desenhadas em traço, valores em mono que passam de vermelho (fora de especificação) a verde (dentro), sempre acompanhados de rótulo de texto.

**Key Characteristics:**
- Capítulos numerados em mono na margem, com traço laranja de 1px.
- Figuras com legenda mono "Fig. N —" sob a foto.
- Medidas, notas e números sempre em IBM Plex Mono 500, tabular.
- Títulos em Archivo extra-negrito e expandido (largura 116).
- Laranja apenas em ação, medida e ícone; grafite para todo o resto.
- Linhas finas (#E7E5E4 / #D6D3D1) como principal recurso de estrutura.
- Cantos generosos (20px) em cartões e fotos; pílulas em botões, chips e tags.

## Colors

Paleta de papel e tinta com um único acento quente, usado com parcimônia.

### Primary
- **Laranja Ação** (action): fundo do botão principal (texto branco com contraste 4,9:1), números de capítulo, numeração de campos, ênfase no H1, texto da medida do pneu. É a cor de "faça isto" e de "isto é uma medida".
- **Laranja Ação Profundo** (action-hover): hover e estado ocupado do botão principal.
- **Laranja Lohan** (orange): ícones, traço dos capítulos, sublinhado de links, anel de foco, borda dos números de etapa, estrelas. Não é usado como cor de texto corrido.

### Secondary
- **Pêssego** (peach) com **Tinta Ferrugem** (peach-ink): pílula de avaliação, tags de "provável serviço", caixa de dica, contexto do orçamento, avatar das avaliações, destaque da etapa-chave, seleção de texto. É o laranja em voz baixa, sempre o par peach + peach-ink.
- **Âmbar** (amber): ícones e hover de links sobre o rodapé grafite, e a ponta clara do gradiente final.

### Tertiary
- **Verde Leitura** (ok) e **Vermelho Leitura** (bad): reservados a estado. Valores do painel 3D (antes/depois), ponto de status aberto, erros de formulário, vantagem do pneu. Escolhidos para serem legíveis sobre fundo claro.
- **Verde WhatsApp** (wa): exclusivamente a barra fixa (mobile) e o botão flutuante (desktop) do WhatsApp, com texto grafite.

### Neutral
- **Grafite** (ink): todo o texto principal, botão do cabeçalho, chip selecionado, botão secundário em hover, fundo do rodapé.
- **Grafite Médio** (ink-2): texto de apoio, leads, legendas, cabeçalhos de tabela.
- **Papel** (paper): fundo padrão e de cartões.
- **Papel Quente** (paper-warm): hero, seções alternadas, hover de linhas, linha de "hoje" na tabela de horários.
- **Cinza Campo** (gray-50): fundo dos campos de formulário, do painel 3D e do mapa.
- **Linha** (line) e **Linha Forte** (line-strong): hairlines de 1px; a forte separa blocos maiores (FAQ, "também fazemos", eixos do painel).
- **Rodapé Apagado** (footer-muted) e **Régua do Rodapé** (footer-rule): texto secundário e divisória sobre o rodapé grafite.

### Named Rules
**The Ação-ou-Medida Rule.** Laranja aparece só onde há algo a fazer ou algo medido (botão, número, ícone, sublinhado). Superfícies grandes nunca são laranja, exceto o bloco final.

**The Vermelho-Vira-Verde Rule.** Vermelho e verde são estado, não decoração. Sempre aparecem com rótulo em texto (status, legenda "Fora/Dentro da especificação"), nunca como única pista.

**The Um-Gradiente Rule.** O gradiente laranja (135°, action → orange → amber) existe uma única vez por página: o CTA final de cor cheia.

## Typography

**Display Font:** Archivo, eixo de largura em 116 (com Inter, system-ui)
**Body Font:** Archivo, largura normal (com Inter, system-ui)
**Label/Mono Font:** IBM Plex Mono 500 (com ui-monospace, Menlo)

**Character:** Um grotesco largo e pesado nos títulos dá o peso de capa de manual; o Plex Mono traz a voz do instrumento de medição. O corpo fica em Archivo normal, claro e direto.

### Hierarchy
- **Display** (800, clamp 34–60px, 1.06, expandido): só o H1 do hero. A palavra-chave vai em `em` na cor de ação, sem itálico. A variante de fechamento (CTA final) vai até 56px com o mesmo tratamento; a nota 4,9 chega a 64–80px.
- **Headline** (800, clamp 26–40px, 1.1, expandido): títulos de capítulo (H2), com `text-wrap: balance`.
- **Title** (700, 20px, 1.2): títulos de cartão e bloco; no cartão de destaque sobe para 26px e ganha a largura expandida. Títulos de sintoma, etapa e FAQ ficam entre 17 e 18px em 600–700.
- **Body** (400, 16px, 1.55): texto corrido; leads e subtítulos a 17–18px em grafite médio, limitados a ~60ch.
- **Label** (600, 15px): rótulos de campo, chips, botões, navegação (500).
- **Mono** (500, tabular): números de capítulo (13–14px), numeração de campo "01–05" (12px), medidas e notas, legendas de figura (12px, +0.02em), rótulos de tabela e eixo em caixa alta (11–12px, +0.06–0.08em).

### Named Rules
**The Número-em-Mono Rule.** Todo número que o cliente pode conferir (nota, medida, ângulo, horário, numeração) vai em IBM Plex Mono 500 tabular. Texto em prosa nunca vai em mono.

**The Largura-É-Título Rule.** A largura expandida (wdth 116) é exclusiva de títulos display, headline, nota e nomes de marca; o corpo nunca é expandido.

## Layout

Mobile primeiro, contêiner de 1200px com gutter de 20px (32px a partir de 768px). Seções com respiro vertical de 72px, 104px (≥768px) e 120px (≥1024px), alternando papel e papel quente.

O cabeçalho de seção é uma grade de duas colunas: número do capítulo na margem e título + lead ao lado. No desktop a margem tem 96px fixos e o traço do capítulo cresce de 20px para 40px; blocos secundários ("também fazemos", CTA final) se alinham a essa mesma margem de 96px. O hero no desktop usa 12 colunas: 7 para texto e ficha de orçamento, 5 para a foto vertical, com selos em faixa inteira abaixo.

Conteúdo em lista prefere linhas pautadas a cartões: sintomas viram tabela de diagnóstico a partir de 900px (Sintoma | Provável serviço | ação), FAQ e horários são listas com hairline. Listas horizontais no mobile (chips, marcas, avaliações) rolam com snap e sangram até a borda; a partir de 640–900px elas quebram em linha ou viram grade. Pontos de quebra observados: 480, 560, 640, 768, 900, 1024, 1280px.

Ritmo de espaçamento recorrente: 8 / 12 / 16 / 24 / 40 / 64px; 40px entre cabeçalho e conteúdo (56px no desktop), 64px entre colunas das grades de duas metades.

## Elevation & Depth

Sistema plano por padrão, com profundidade tonal (papel sobre papel quente, cinza de campo sob cartões brancos) e hairlines. Sombras são raras, difusas, tingidas de grafite, e só aparecem em três casos: a ficha de orçamento (para ser encontrada), a avaliação central no desktop (destaque) e os elementos fixos do WhatsApp (flutuam sobre o conteúdo). O cabeçalho fixo usa vidro claro (branco 86% com desfoque de 12px) e ganha uma hairline ao rolar.

### Shadow Vocabulary
- **Ficha** (`box-shadow: 0 1px 2px rgba(28,25,23,.04), 0 12px 32px -12px rgba(28,25,23,.10)`): só a ficha de orçamento. Ao ser chamada por um botão, pulsa um anel laranja que se dissipa em 1,2s.
- **Destaque** (`box-shadow: 0 18px 40px -24px rgba(28,25,23,.3)`): a avaliação central no desktop.
- **Flutuante** (`box-shadow: 0 10px 24px -8px rgba(28,25,23,.35)`): botão flutuante do WhatsApp; a barra mobile usa a versão invertida para cima.
- **Halo de foco** (`box-shadow: 0 0 0 4px rgba(224,96,46,.14)`): campo em foco; o ponto de status usa o mesmo halo de 4px na sua cor.

### Named Rules
**The Papel-Não-Flutua Rule.** Cartões, painéis e fotos ficam planos com borda de 1px. Sombra é reservada ao que precisa ser achado ou ao que flutua sobre a página.

## Shapes

Cantos generosos e amigáveis sobre uma estrutura de linhas retas. Cartões, fotos, mapa e ficha usam 20px; o painel 3D e a foto do hero, 24px; elementos internos (rodas do painel, dica, destaque de etapa) 16px; campos 14px; ícones de sintoma 12px; o chip sobre foto 8px. Tudo o que é clicável e compacto (botões, chips, tags, alternador do painel, pílula de avaliação) é pílula completa. Números de etapa e avatares são círculos de 44px. Bordas são de 1px para estrutura e 1,5px para elementos interativos (botão secundário, chips, campos, números de etapa). O CTA final carrega o traço do carro da logo: um arco de 2px em branco translúcido saindo pelo canto.

## Components

### Buttons
Pílulas firmes e diretas, sem sombra.
- **Shape:** pílula completa (999px), altura mínima de 52px (56px quando ocupa a largura toda).
- **Primary:** laranja de ação com texto branco 600, ícone do WhatsApp à esquerda; é o único botão que envia.
- **Hover / Focus:** escurece para action-hover; o ícone desliza 2px; ao pressionar, escala 0.98; foco com contorno laranja de 3px e afastamento de 2px.
- **Secondary:** contorno grafite de 1,5px em fundo transparente; no hover inverte para grafite cheio com texto branco.
- **Header:** pílula grafite compacta (40px) no cabeçalho.
- **Light:** branco com texto de ação, só sobre o bloco em gradiente.
- **Link com seta:** texto grafite 600 sublinhado em laranja (1,5px, afastado 5px); a seta anda 3px no hover. É o CTA terciário dentro de cartões e rodapés de seção.

### Chips
- **Style:** pílula branca de 44px com borda line de 1,5px, texto 500.
- **State:** selecionado inverte para grafite cheio com texto branco; hover reforça a borda para line-strong. No mobile rolam em linha única com máscara de fade nas bordas.

### Tags
- **Style:** pílula pêssego com texto ferrugem 600 (13px). Marca o "provável serviço" na tabela de sintomas; a etiqueta "hoje" nos horários é a variante mono de 6px de raio.

### Cards / Containers
- **Corner Style:** 20px.
- **Background:** papel branco sobre seção branca ou quente.
- **Shadow Strategy:** plano (ver Elevation & Depth).
- **Border:** 1px line.
- **Internal Padding:** 22px (32px no cartão de destaque). Fotos entram sangradas no topo do cartão, com legenda de figura abaixo.

### Inputs / Fields
- **Style:** fundo cinza campo, sem borda visível (1,5px transparente), 14px de raio, 52px de altura. Rótulo 600 acima, precedido do número do campo em mono laranja ("01", "02"...).
- **Focus:** fundo vira branco, borda laranja e halo laranja de 4px; hover mostra a borda line-strong.
- **Error / Disabled:** borda e texto vermelho leitura, fundo rosado claro, mensagem com ícone explicando o que falta em linguagem de conversa.

### Navigation
- **Style:** cabeçalho fixo de vidro claro, 56px no mobile e 72px no desktop, logo à esquerda e pílula grafite "Orçamento" à direita. Links só no desktop (15px, 500, grafite médio); hover escurece para grafite e mostra um sublinhado laranja de 1,5px. No mobile a navegação dá lugar à barra verde do WhatsApp, que sobe da base após a rolagem.

### Capítulo e Figura
O par que define o mundo. O capítulo é um número de dois dígitos em mono na cor de ação, seguido de um traço laranja de 1px, posto na margem à esquerda do título. A figura é uma foto com canto de 20–24px e legenda mono de 12px em grafite médio no formato "Fig. N — descrição". Um chip mono em caixa alta sobre fundo grafite 78% pode anotar a foto principal.

### Dica do Mecânico
Caixa pêssego com texto ferrugem, ícone à esquerda, 16px de raio, largura máxima de 760px. Uma por capítulo no máximo, para observações práticas.

### Painel de Leitura 3D (assinatura)
Painel cinza campo de 24px de raio com alternador em pílula "Antes / Depois" (pressionado = grafite cheio). Quatro rodas em cartões brancos de 16px, agrupadas por eixo com rótulo mono e régua line-strong. Cada roda tem um desenho em traço que gira (até 9°) no estado "antes" e se endireita em 1,1s com a curva de saída, enquanto os valores em mono (17px, 22px no desktop) passam de vermelho para verde. Legenda com pontos coloridos e nota de que os valores são ilustrativos.

## Do's and Don'ts

### Do:
- **Do** abrir cada seção com o número do capítulo em mono na margem e o traço laranja, com apenas o numeral (sem palavras).
- **Do** legendar toda foto real com "Fig. N —" em mono 12px abaixo da imagem.
- **Do** colocar todo número conferível (nota, medida, ângulo, horário) em IBM Plex Mono 500 tabular.
- **Do** usar laranja de ação (#C24A26) para texto e fundos de botão, e o laranja Lohan (#E0602E) só para ícones, traços e foco.
- **Do** separar conteúdo com hairlines de 1px antes de recorrer a cartões; quando houver cartão, borda de 1px e 20px de raio, sem sombra.
- **Do** manter os títulos em Archivo 800 expandido (wdth 116) com `text-wrap: balance`.
- **Do** parear vermelho e verde de estado com um rótulo de texto.
- **Do** entrar com movimento curto (12px, 0,5–0,7s, cubic-bezier(.16,1,.3,1)) e desligá-lo sob `prefers-reduced-motion`.

### Don't:
- **Don't** pintar superfícies grandes de laranja ou usar o gradiente fora do bloco final de CTA.
- **Don't** usar fundo escuro fora do rodapé; o mundo é papel claro.
- **Don't** usar o verde do WhatsApp em nada além da barra fixa e do botão flutuante.
- **Don't** colocar texto em prosa em mono, nem aplicar a largura expandida ao corpo.
- **Don't** adicionar sombra a cartões, fotos ou painéis que não flutuam.
- **Don't** usar vermelho/verde como decoração ou como única pista de estado.
