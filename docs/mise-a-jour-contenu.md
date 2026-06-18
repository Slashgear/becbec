# Mettre à jour le contenu du site

Tout le contenu du site est dans un fichier texte simple.
Pas besoin de toucher au code — seul ce fichier est à modifier.

| Fichier | Contenu |
|---------|---------|
| `src/data/site.yaml` | Horaires, adresse, téléphone, email, photo, Instagram |

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

## Modifier le texte "Groupe & privatisation"

Dans `src/data/site.yaml` :

```yaml
groupe:
  label: "Groupe & privatisation"
  description: "De 10 à 50 personnes..."
```

---

## Afficher une bannière d'information

Pour annoncer une fermeture exceptionnelle, une privatisation, un événement ponctuel…

Dans `src/data/site.yaml`, décommenter et remplir la section `banner` (elle est déjà présente en haut du fichier) :

```yaml
banner:
  message: "Fermeture exceptionnelle le 25 juin — à bientôt !"
```

**Options disponibles :**

| Champ | Valeur | Description |
|-------|--------|-------------|
| `message` | texte | *(obligatoire)* Le message affiché |
| `type` | `info` ou `alert` | `info` = bandeau discret (défaut) · `alert` = rouge vif, plus urgent |
| `link` | URL | Rend le message cliquable (ex. un lien de réservation) |

**Exemples :**

```yaml
# Fermeture simple
banner:
  message: "Fermé du 14 au 21 juillet — bonnes vacances !"

# Privatisation, ton urgent, avec lien email
banner:
  message: "Soirée privée ce soir — nous rouvrons demain à 8h."
  type: alert
  link: "mailto:becbeclyon@gmail.com"
```

Pour **désactiver** la bannière : re-commenter ou supprimer la section `banner` dans le fichier.

> Les visiteurs peuvent fermer la bannière avec le bouton ✕. Elle ne réapparaît pas tant que le texte n'a pas changé.
