# Landing page — Lohan Auto Center

Página única em HTML, CSS e JavaScript puro, sem framework. Abra `index.html` no navegador para ver.

## Estrutura

```
index.html        conteúdo da página (seções comentadas: HERO, SINTOMAS, SERVIÇOS…)
css/styles.css    estilos, organizados por seção (índice no topo do arquivo)
js/main.js        formulário → WhatsApp, status aberto/fechado, painel 3D, mapa, FAQ
img/              fotos reais (WebP comprimido) e logo
```

## Edições mais comuns

| O que mudar | Onde |
|---|---|
| Número do WhatsApp e horário de funcionamento | `js/main.js`, bloco `CONFIG` no topo |
| Endereço do mapa | `index.html`, `<iframe>` da seção 08 |
| Textos | direto no `index.html` |
| Cores, fontes, raio dos cantos | `css/styles.css`, bloco `:root` (Tokens) |
| Marcas de pneus | `index.html`, lista `.brands` na seção 05 |
| Perguntas do FAQ | `index.html`, seção 09 (cada pergunta é um `<details>`) |
| Valores do painel 3D | `index.html`, atributos `data-a` (antes) e `data-d` (depois) |
| Dados para o Google (endereço, nota, horário) | `index.html`, bloco `application/ld+json` no `<head>` |

Se mudar o telefone, troque também os links `tel:` e o texto no rodapé.

## Como o WhatsApp funciona

Todo botão leva para o mesmo formulário do topo. Se a pessoa já preencheu nome e carro, o botão abre o WhatsApp direto com a mensagem pronta (ex.: "Olá, Lohan! Sou Ana, tenho um Onix 2019 e sou de Jundiaí. Meu carro está puxando para um lado. Podem avaliar?"). O botão de pneus sempre passa pelo formulário, para a pessoa informar a medida.

## Medição

A página envia os eventos `whatsapp_click` (com `secao`), `form_submit`, `rota_click` e `ligar_click` para o `dataLayer`. Basta instalar o Google Tag Manager ou o GA4 no `<head>` para começar a receber.

## Antes de publicar

- Trocar `https://www.lohanautocenter.com.br/` (tag `canonical` no `<head>`) pelo domínio real e usar o endereço completo da imagem em `og:image`.
- Confirmar com a oficina: marcas de pneus, tempo do alinhamento no FAQ e se o relatório do alinhamento 3D é entregue ao cliente.
- Os valores do painel 3D são ilustrativos (está escrito na legenda). Se tiver uma foto da tela real do alinhador, ela pode entrar ali.
- Fotos maiores (≥ 1200 px) melhoram o hero e a fachada. As atuais têm no máximo 680 px.
