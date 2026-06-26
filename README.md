# becbec.fr

Site du bistrot Becbec — Lyon 03.

---

## Mettre à jour le contenu

Tout le contenu du site est dans un seul fichier : **`src/data/site.yaml`**

Pas besoin de toucher au code. Il suffit d'éditer ce fichier, de sauvegarder, et le site se met à jour automatiquement dans la minute.

### Comment éditer le fichier

**Option 1 — Directement sur GitHub (recommandé, aucun outil à installer)**

1. Ouvrir [`src/data/site.yaml`](src/data/site.yaml) sur GitHub
2. Cliquer sur l'icône crayon ✏️ en haut à droite du fichier
3. Faire les modifications
4. Cliquer sur **"Commit changes"** en bas de page

Le site se redéploie automatiquement en ~1 minute.

**Option 2 — En local**

```bash
bun install
bun run dev   # http://localhost:4321
```

---

### Règles de base du format YAML

Le fichier utilise le format YAML. Voici ce qu'il faut savoir :

- Les **textes** s'écrivent entre guillemets : `"Mon texte"`
- Les **valeurs oui/non** s'écrivent `true` ou `false`
- **L'indentation compte** : ne pas décaler les lignes au hasard
- Une ligne commençant par `#` est un commentaire, elle est ignorée

---

### Bannière d'information

La bannière s'affiche en modale au-dessus du site. Elle est utile pour annoncer une fermeture, un événement, etc.

**Activer / désactiver :**

```yaml
banner:
  active: true   # mettre false pour masquer
  message: "Fermeture exceptionnelle mercredi 2 juillet — à bientôt !"
```

**Avec une description longue :**

```yaml
banner:
  active: true
  message: "Fermeture exceptionnelle le 25 juin"
  description: "Le bistrot sera fermé toute la journée du mercredi 25 juin. Nous reprenons le jeudi 26 à 8h comme d'habitude. Merci pour votre compréhension !"
  type: alert
```

**Avec un lien cliquable (ex. réservation) :**

```yaml
banner:
  active: true
  message: "Soirée privatisée vendredi — réservez votre table !"
  link: "mailto:becbeclyon@gmail.com"
  type: info
```

**Rouge vif (`alert`) vs fond clair (`info`) :**

```yaml
# Rouge vif — urgence, fermeture
banner:
  active: true
  message: "Fermé ce week-end"
  type: alert

# Fond clair — événement, info douce
banner:
  active: true
  message: "Brunch spécial samedi 12 juillet"
  type: info
```

Les visiteurs peuvent fermer la modale (bouton ✕, touche Échap, ou clic en dehors). Elle ne réapparaît pas jusqu'au prochain changement de message.

---

### Horaires d'ouverture

Chaque jour est une entrée dans la liste `hours`. Il y a deux parties à modifier :

- `open` — le texte affiché sur le site
- `schema_opens` / `schema_closes` — les heures en format 24h pour Google et Maps

**Exemple — changer l'heure de fermeture du vendredi :**

Avant :
```yaml
  - days: "Vendredi"
    open: "8h – 23h"
    schema_day: "Friday"
    schema_opens: "08:00"
    schema_closes: "23:00"
```

Après (fermeture à minuit) :
```yaml
  - days: "Vendredi"
    open: "8h – minuit"
    schema_day: "Friday"
    schema_opens: "08:00"
    schema_closes: "00:00"
```

**Exemple — marquer un jour comme fermé :**

```yaml
  - days: "Lundi"
    open: "Fermé"
```

> Quand `open` vaut `"Fermé"`, inutile de mettre `schema_opens` et `schema_closes`.

**Jours de la semaine en anglais** (pour `schema_day`) :
`Monday` `Tuesday` `Wednesday` `Thursday` `Friday` `Saturday` `Sunday`

---

### Adresse

```yaml
address:
  street: "232 rue Paul Bert"
  city: "Lyon"
  arrondissement: "03"
  maps_url: "https://maps.google.com/?q=Becbec+Paul+Bert+Lyon+3"
```

Pour mettre à jour le lien Google Maps, chercher l'adresse sur [maps.google.com](https://maps.google.com), cliquer sur **Partager → Copier le lien**, et coller l'URL dans `maps_url`.

---

### Téléphone

```yaml
phone: "0659462947"           # utilisé pour le lien tel:
phone_display: "06 59 46 29 47"  # texte affiché sur le site
```

Les deux champs doivent rester cohérents. `phone` est le numéro brut (sans espaces), `phone_display` est la version lisible.

---

### Email

```yaml
email: "becbeclyon@gmail.com"
```

---

### Description

```yaml
description: >
  Le coin de table qui accueille votre café du matin, votre repas entre collègues
  ou votre bière fraîche en fin de journée. Une cuisine simple, faite maison,
  avec des produits frais et locaux. Nous suivons les saisons.
```

Le `>` après `description:` signifie que le texte peut s'étaler sur plusieurs lignes. Chaque ligne doit rester indentée de 2 espaces.

---

### Photo principale

1. Déposer la nouvelle photo dans le dossier `public/` (ex. `public/nouvelle-photo.jpg`)
2. Mettre à jour dans `site.yaml` :

```yaml
photo: "/nouvelle-photo.jpg"
photo_alt: "Description de la photo pour les lecteurs d'écran"
```

Formats supportés : `.jpg`, `.png`, `.webp`

---

### Instagram

```yaml
social:
  instagram: "becbec.lyon"   # juste le nom du compte, sans @
```

---

### Section groupe & privatisation

```yaml
groupe:
  label: "Groupe & privatisation"
  description: "De 10 à 50 personnes, nous accueillons tous vos événements. Réservation de salle entière ou partielle, menu traiteur sur-mesure, carte de bar adaptée."
```

---

## Stack technique

- [Astro 7](https://astro.build) — génération statique
- [GitHub Pages](https://pages.github.com) — hébergement sur `becbec.slashgear.dev`
- Bun — package manager

## Développement local

```bash
bun install
bun run dev      # http://localhost:4321 (hot reload)
bun run build    # génère dist/
```
