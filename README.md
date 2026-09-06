# A2 ETOILE SERVICE

Site institutionnel et commercial premium construit avec Next.js, TypeScript, Tailwind CSS et Supabase.

## Demarrage

1. Installer les dependances:
   npm install
2. Copier le fichier d'environnement:
   Windows PowerShell: Copy-Item .env.local.example .env.local
3. Renseigner les variables Supabase dans .env.local:
   - NEXT_PUBLIC_SUPABASE_URL (format: https://<project-ref>.supabase.co)
   - NEXT_PUBLIC_SUPABASE_ANON_KEY (publishable / anon key)
   - SUPABASE_SERVICE_ROLE_KEY ou SUPABASE_SECRET_KEY (cle serveur uniquement)
4. Lancer le serveur:
   npm run dev

## Scripts

- npm run dev
- npm run build
- npm run start
- npm run lint
- npm run typecheck

## Deploiement Vercel

1. Verifier localement avant push:
   - npm run typecheck
   - npm run lint
   - npm run build
2. Dans Vercel, definir les variables d'environnement pour Preview et Production:
   - NEXT_PUBLIC_SITE_URL (URL finale du site)
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - SUPABASE_SERVICE_ROLE_KEY (ou SUPABASE_SECRET_KEY)
   - SUPABASE_ALLOWED_REDIRECT_ORIGINS (optionnel, liste d'origines separees par des virgules)
3. Deployer:
   - via Git (recommande) en connectant le repository a Vercel
   - ou via CLI: npx vercel --prod

Important: ne jamais exposer SUPABASE_SERVICE_ROLE_KEY / SUPABASE_SECRET_KEY dans le client.

## Configuration Supabase Auth (obligatoire)

Dans Supabase > Authentication > URL Configuration:

- Site URL:
   - https://a2-etoile-service.vercel.app
- Redirect URLs:
  - http://localhost:3000/auth/callback
   - https://a2-etoile-service.vercel.app/auth/callback
   - https://a2-etoile-service-lune221s-projects.vercel.app/auth/callback
   - https://a2-etoile-service-git-main-lune221s-projects.vercel.app/auth/callback

Si vous utilisez des URLs de preview Vercel pour tester la connexion, ajoutez aussi ces URLs de preview dans Redirect URLs.

## Securite formulaire devis

- Honeypot invisible cote client pour filtrer les bots basiques
- Verification de delai minimum de saisie cote API
- Limitation simple du nombre de requetes par IP

## Schema Supabase recommande

Table: quote_requests

- id uuid primary key default gen_random_uuid()
- created_at timestamptz not null default now()
- full_name text not null
- phone text not null
- email text not null
- service_type text not null
- location text not null
- need_description text not null
- message text null
- status text not null default 'new'

Un script SQL pret a executer est disponible dans supabase/schema.sql.
