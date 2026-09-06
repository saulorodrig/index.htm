# KAS — versão HTML para GitHub Pages

Build estático da interface KAS, pronto para publicação no GitHub Pages. A navegação usa hash routing (`#/`), por isso também funciona abrindo `index.html` diretamente no computador.

## Publicar

1. Crie um repositório no GitHub.
2. Envie todos os arquivos desta pasta para a branch `main`.
3. Abra **Settings → Pages**.
4. Selecione **Deploy from a branch**, branch `main` e pasta `/ (root)`.
5. Salve e aguarde a URL do site.

O arquivo `.nojekyll` evita o processamento por Jekyll e os assets usam caminhos relativos.

## Limitação

O GitHub Pages hospeda somente arquivos estáticos. Funções que dependem de banco de dados, autenticação, Stripe ou API tRPC precisam de um backend hospedado separadamente.
