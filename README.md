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

### Agenda (événements & actualités au bar)

L'agenda s'affiche en **petite carte dans la première colonne** de la page d'accueil (sous le texte de présentation), avec une **liste à puces** des prochaines soirées et actualités du bar (blind test, anniversaire, concours, etc.). Maximum **3 événements** affichés. Chaque puce affiche, dans l'ordre : la **date**, le **titre**, puis une courte **description**.

**Afficher / masquer la carte :**

```yaml
agenda:
  active: true   # false pour cacher toute la carte agenda
```

**Ajouter un événement :** chaque ligne `-` sous `events:` est un événement.

```yaml
agenda:
  active: true
  events:
    - title: "Les 2 ans du Becbec"
      date: "Samedi 3 octobre 2026"
      note: "Concours de pétanque, musique et animation toute la journée."
```

Les champs :
- `title` — le nom de l'événement (obligatoire)
- `date` — le jour de l'événement (obligatoire). **Texte libre** : « Samedi 3 octobre 2026 », « Vendredi 25 septembre », etc. Pas de format strict à respecter.
- `time` — l'heure (optionnel). Ex. « 20h », « Toute la journée ». Retiré si absent.
- `note` — une courte description (optionnel, retiré si absent)

> Pour rappel, les mêmes règles YAML s'appliquent qu'ailleurs dans ce fichier : textes entre guillemets, indentation à respecter (2 espaces), ligne commençant par `#` = commentaire.

**Combien d'événements afficher :**
- **0 événement** (ou `active: false`) → la carte agenda ne s'affiche pas du tout
- **1 à 3 événements** → ils s'affichent en liste à puces dans la carte
- **4 événements et plus** → seuls les **3 premiers** sont affichés

> Les visiteurs s'inscrivent simplement en appelant le bar : le numéro est visible dans l'en-tête et le pied de page. Aucun système d'inscription en ligne n'est nécessaire.

---

## Stack technique

- [Astro 7](https://astro.build) — génération statique
- [GitHub Pages](https://pages.github.com) — hébergement sur `www.becbec.fr`
- Bun — package manager

## Développement local

```bash
bun install
bun run dev      # http://localhost:4321 (hot reload)
bun run build    # génère dist/
```

---

## DNS — faire fonctionner `becbec.fr` en plus de `www.becbec.fr`

Aujourd'hui seul `www.becbec.fr` fonctionne (domaine canonique configuré dans les réglages GitHub Pages, certificat HTTPS approuvé). `becbec.fr` sans le www n'a aucun enregistrement DNS et ne résout pas.

Pour activer les deux, ajouter chez le registrar/DNS de `becbec.fr` des enregistrements A pour l'apex, pointant vers les IP de GitHub Pages :

```
becbec.fr.   A   185.199.108.153
becbec.fr.   A   185.199.109.153
becbec.fr.   A   185.199.110.153
becbec.fr.   A   185.199.111.153
```

Optionnel (IPv6) :

```
becbec.fr.   AAAA   2606:50c0:8000::153
becbec.fr.   AAAA   2606:50c0:8001::153
becbec.fr.   AAAA   2606:50c0:8002::153
becbec.fr.   AAAA   2606:50c0:8003::153
```

Comme `www.becbec.fr` reste le domaine canonique côté GitHub Pages, une fois ces enregistrements propagés, GitHub redirige automatiquement `becbec.fr` → `www.becbec.fr` (301) — rien à faire côté code.
