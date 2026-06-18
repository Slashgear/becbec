# becbec.fr

Site du bistrot Becbec — Lyon 03.

## Stack

- [Astro](https://astro.build) — static site generation
- [Cloudflare Pages](https://pages.cloudflare.com) — hébergement
- Bun — package manager

## Contenu éditable

Tout le contenu est dans `src/data/` — pas besoin de toucher au code.

| Fichier | Contenu |
|---------|---------|
| `src/data/site.yaml` | Nom, description, horaires, adresse, téléphone, email, photo |
| `src/data/menu.yaml` | Carte complète par catégorie |

### Changer la photo d'accueil

1. Déposer l'image dans `public/` (ex. `public/photo.jpg`)
2. Dans `src/data/site.yaml`, mettre à jour `photo: /photo.jpg`

### Changer les horaires

Dans `src/data/site.yaml`, modifier les champs `open`, `schema_opens` et `schema_closes` de chaque jour.  
Ces valeurs sont utilisées à la fois pour l'affichage et pour le JSON-LD (Google, Maps, agents IA).

## Documentation

- [Mettre à jour le contenu](docs/mise-a-jour-contenu.md) — horaires, menu, photo, bannière, etc.
- [Déploiement](docs/deploiement.md) — architecture, Cloudflare Pages, CI/CD

## Développement

```bash
bun install
bun run dev
```

## Déploiement

```bash
bun run build   # génère dist/
```

Connecter le repo à Cloudflare Pages :
- Build command : `bun run build`
- Output directory : `dist`
