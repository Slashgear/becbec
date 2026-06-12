# Mettre à jour le contenu du site

Tout le contenu du site est dans deux fichiers texte simples.
Pas besoin de toucher au code — seuls ces fichiers sont à modifier.

| Fichier | Contenu |
|---------|---------|
| `src/data/site.yaml` | Horaires, adresse, téléphone, email, photo, Instagram |
| `src/data/menu.yaml` | La carte complète (catégories et plats) |

Une fois modifié et sauvegardé sur GitHub, **le site se met à jour automatiquement en 1 à 2 minutes**.

---

## Comment modifier un fichier sur GitHub

1. Aller sur **github.com/Slashgear/becbec**
2. Cliquer sur le fichier à modifier (ex. `src/data/site.yaml`)
3. Cliquer sur l'icône **crayon** ✏️ en haut à droite du fichier
4. Faire les modifications
5. En bas de page, cliquer **"Commit changes"** puis **"Commit changes"** (bouton vert)

Le site se redéploie automatiquement.

---

## Modifier les horaires

Dans `src/data/site.yaml`, repérer la section `hours` :

```yaml
hours:
  - days: "Mardi"
    open: "8h – 17h30"       ← texte affiché sur le site
    schema_day: "Tuesday"
    schema_opens: "08:00"    ← format HH:MM pour Google
    schema_closes: "17:30"   ← format HH:MM pour Google
```

Modifier `open` pour l'affichage, et `schema_opens`/`schema_closes` pour Google Maps.

Pour indiquer un jour fermé, mettre `open: "Fermé"` et ne pas mettre de `schema_day`.

---

## Modifier l'adresse, le téléphone, l'email

Dans `src/data/site.yaml` :

```yaml
email: "becbeclyon@gmail.com"      ← lien "Nous contacter"
phone: "0659462947"                ← utilisé pour les liens tel:
phone_display: "06 59 46 29 47"    ← texte affiché

address:
  street: "232 rue Paul Bert"
  arrondissement: "03"
  maps_url: "https://maps.google.com/?q=..."   ← lien Google Maps
```

---

## Changer la photo d'accueil

1. Aller dans le dossier `public/` sur GitHub
2. Cliquer **"Add file" → "Upload files"**
3. Déposer la nouvelle photo (JPG ou PNG recommandé)
4. Valider l'upload (**Commit changes**)
5. Dans `src/data/site.yaml`, mettre à jour :

```yaml
photo: "/nom-de-la-photo.jpg"
photo_alt: "Description de la photo pour l'accessibilité"
```

---

## Modifier la description du bistrot

Dans `src/data/site.yaml` :

```yaml
description: >
  Le coin de table qui accueille votre café du matin...
```

Le `>` signifie que le texte continue sur les lignes suivantes. Garder le même style de retrait (2 espaces).

---

## Modifier le compte Instagram

Dans `src/data/site.yaml` :

```yaml
social:
  instagram: "becbec.lyon"    ← juste le nom du compte, sans @
```

Pour masquer le lien Instagram, vider la valeur :
```yaml
  instagram: ""
```

---

## Modifier la carte (menu)

Dans `src/data/menu.yaml`, chaque catégorie ressemble à ceci :

```yaml
- name: "Petite faim"           ← nom de la catégorie
  available: "Toute la journée" ← horaire de disponibilité
  items:
    - name: "Tartine du moment"
      description: "Pain de campagne, garniture du jour"
      price: "6€"
    - name: "Soupe du jour"
      description: "Selon arrivage, pain maison"
      price: "7€"
```

**Ajouter un plat** : copier un bloc `- name: ...` et l'ajouter à la suite dans la bonne catégorie.

**Supprimer un plat** : effacer les 4 lignes du bloc (`- name`, `description`, `price`).

**Changer un prix** : modifier uniquement la ligne `price:`.

> ⚠️ Respecter l'indentation (espaces) — YAML est sensible à l'alignement.

---

## Modifier le texte "Groupe & privatisation"

Dans `src/data/site.yaml` :

```yaml
groupe:
  label: "Groupe & privatisation"
  description: "De 10 à 50 personnes..."
```
