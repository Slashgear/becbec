# Déploiement

## Architecture

```
GitHub (Slashgear/becbec)
        │
        │  git push → déclenche automatiquement
        ▼
Cloudflare Pages
  bun install && bun run build
        │
        ▼
  becbec.pages.dev  (preview)
  becbec.fr         (production, une fois le domaine branché)
```

## Déploiement automatique

Chaque `git push` sur la branche `main` déclenche un build et un déploiement automatique sur Cloudflare Pages. Aucune action manuelle nécessaire.

Suivre l'avancement : **dash.cloudflare.com → Workers & Pages → becbec → Deployments**

## Déploiement manuel (sans CI/CD)

```bash
bun install
bun run build
./node_modules/.bin/wrangler pages deploy dist/client --project-name becbec --branch main
```

## Configuration du build (Cloudflare Pages)

| Paramètre | Valeur |
|-----------|--------|
| Build command | `bun install && bun run build` |
| Output directory | `dist/client` |
| Branch de production | `main` |
| Node version | 22 |

## Stack technique

| Outil | Rôle |
|-------|------|
| [Astro](https://astro.build) | Générateur de site statique |
| [Bun](https://bun.sh) | Package manager & runtime |
| [@astrojs/cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/) | Adapter Cloudflare |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | Génération du sitemap |
| [@rollup/plugin-yaml](https://github.com/rollup/plugins/tree/master/packages/yaml) | Import des fichiers YAML |

## Fichiers générés au build

```
dist/client/
├── index.html          ← homepage
├── menu/index.html     ← page menu
├── 404.html            ← page d'erreur
├── sitemap-index.xml   ← sitemap
├── sitemap-0.xml
├── robots.txt
├── _headers            ← headers de sécurité Cloudflare
├── favicon.png
├── favicon.ico
├── photo.jpg
└── _astro/             ← assets avec cache immutable
```
