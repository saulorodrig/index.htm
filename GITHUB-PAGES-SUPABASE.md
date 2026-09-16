# KAS no GitHub Pages com Supabase

## Supabase

No Supabase, mantenha **Authentication → Providers → Email** ativo. Para exigir confirmação antes do primeiro acesso, mantenha **Confirm email** ativado. Em **Authentication → URL Configuration**, adicione a URL do GitHub Pages:

`https://saulorodrig.github.io/Index.htm/`

Em **Table Editor**, crie `profiles` com:

- `id`: `uuid`, Primary Key, não nulo;
- `name`: `text`, não nulo;
- `email`: `text`, não nulo;
- `created_at`: `timestamptz`, default `now()`.

Ative RLS e crie políticas para usuários autenticados lerem, inserirem e atualizarem apenas o próprio registro, usando `auth.uid() = id`.

## GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` publica somente o frontend. Em **Settings → Pages**, escolha **GitHub Actions** como fonte.

Em **Settings → Secrets and variables → Actions → Variables**, opcionalmente crie:

- `VITE_SUPABASE_URL`: URL do projeto;
- `VITE_SUPABASE_PUBLISHABLE_KEY`: Publishable key.

O código contém os valores públicos atuais como fallback. A chave Publishable/anon pode aparecer no frontend; nunca publique uma chave `secret` ou `service_role`.

O endereço esperado é:

`https://saulorodrig.github.io/Index.htm/`

O cadastro, confirmação de e-mail, login, perfil e logout usam diretamente o Supabase. O backend Node incluído continua disponível para hospedagem fullstack, mas não é necessário para este fluxo de autenticação no GitHub Pages.
