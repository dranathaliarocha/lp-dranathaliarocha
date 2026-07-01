# Landing Page — Dra. Nathália Rocha

Site estático (HTML + CSS + JS puro, sem build), pronto para GitHub Pages.

## Estrutura
- `index.html` — página única com todas as seções
- `css/style.css` — estilos (paleta, layout, responsivo)
- `js/main.js` — menu mobile, accordion FAQ, carrossel, botão WhatsApp flutuante
- `img/` — imagens já otimizadas (compressão + redimensionamento)
- `fonts/dancing-script/` — fonte Dancing Script self-hosted

## Placeholders pendentes (buscar com Ctrl+F no `index.html`)
- `[ EMAIL — aguardando criação ]` — trocar pelo e-mail oficial da clínica assim que for criado (aparece 2x: seção de contato e link `mailto:`)
- `[ HORÁRIO DE ATENDIMENTO — a confirmar ]` — preencher com o horário real
- `contato@example.com` no `href="mailto:..."` — trocar pelo e-mail real
- `https://example.com` no schema JSON-LD (`<head>`) — trocar pela URL final do site publicado

## Como testar localmente
Basta abrir `index.html` direto no navegador, ou rodar um servidor local simples:
```
npx serve .
```

## Deploy no GitHub Pages
1. Criar um repositório novo no GitHub (ex: `dra-nathalia-rocha-lp`)
2. Inicializar git dentro desta pasta `website/` e fazer o primeiro commit
3. Push para o repositório (branch `main`)
4. Nas configurações do repositório → Pages → Source: branch `main`, pasta `/ (root)`
5. O site fica disponível em `https://<usuario>.github.io/<repositorio>/`
6. Se houver domínio próprio, configurar CNAME nas configurações do Pages

## Conteúdo que ainda precisa ser adicionado
- Mais fotos de antes/depois tratadas (colocar em `../03-materiais-pacientes/antes-depois-tratadas/` e depois otimizar/copiar para `img/depoimentos/`)
- Mais depoimentos de pacientes (substituir o card `[ DEPOIMENTO A FORNECER ]` na seção de Resultados)
- Estratégia de atração definitiva para o texto de apoio do CTA final (atualmente usa uma sugestão provisória)
