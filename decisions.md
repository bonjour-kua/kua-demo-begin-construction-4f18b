# decisions.md — BEGIN Construction

## Identité du projet
**Phrase d'identité** : BEGIN Construction est l'entrepreneur général de confiance à Gatineau — de la fondation aux finitions, un seul interlocuteur, zéro compromis sur la qualité.
**Vibe** : Industriel, direct, sans fioriture — comme un chantier bien géré : chaque élément à sa place, aucun gaspillage de temps ni d'espace.
**Charge émotionnelle** : Les propriétaires confient leur projet de vie à un entrepreneur. Cette page doit inspirer confiance immédiate — solidité, expérience, résultats concrets.

## Palette retenue
- Principal foncé (fond hero, footer, CTAs dark) : `#3c3c3c` (dominant[2])
- Accent sur fond foncé : `#cfcfcf` (accent_on_dark) — pour eyebrows, liens, highlights
- Fond neutre sombre header sticky : `#1B1B1B` (noir profond universel)
- Texte body sur fond clair : `#1B1B1B`
- Texte body sur fond foncé : `#FFFFFF`
- Accent sur fond clair : `#737373` (accent_on_light)
- Surface card légère : `#f5f5f5` (proche de dominant[0] #cfcfcf, plus léger)

## Typographie retenue
- Display / Hero : Bebas Neue (ultra-bold, condensed, all-caps) — registre industriel
- Body : IBM Plex Sans — lisible, technique, sans-bullshit
- Eyebrows / mono labels : IBM Plex Mono — cohérent avec le skill Editorial Brutalist
Paire via Google Fonts.

## Direction design : Editorial Brutalist
- Zéro border-radius
- Zéro shadows
- Sections alternées dark/light
- Titres en majuscules avec tracking serré
- Accent #cfcfcf utilisé parcimonieusement (max 5-7 occurrences)

---
## 2026-01-01 00:00 · "palette pick"
**Décision** : Utiliser #3c3c3c comme accent/fond principal et #1B1B1B comme fond foncé.
**Pourquoi** : dominant[2] #3c3c3c est la couleur la plus foncée et la plus saturée de la palette — convient pour les CTAs et alternances foncées sans inventer de couleur.
**Trade-off accepté** : Site essentiellement monochrome — compensé par une typographie forte et la richesse photographique.

---
## 2026-01-01 00:01 · "section order"
**Décision** : Ordre Header → Hero → About → Services → Gallery → Testimonials → FAQ → Contact → Footer.
**Pourquoi** : Séquence classique PME construction — crédibilité immédiate (Hero) → qui nous sommes → ce qu'on fait → preuves visuelles → avis clients → questions → contact.
**Trade-off accepté** : Pas de landing page « surprise » — priorité à la conversion directe.

---
## Photos utilisées
- fb-photo-2.jpg → Hero (raison: chantier actif + équipe en uniforme devant camion brandé)
- pack-hero-1.webp → Hero secondary / About (curatée, haute qualité)
- fb-photo-4.jpg → Gallery / Services (salle de bain rénovée)
- fb-photo-6.jpg → Gallery (extérieur résidentiel + piscine + terrasse)
- fb-photo-7.jpg → Gallery (aménagement extérieur: gravier, muret, terrasse)
- fb-photo-8.jpg → Gallery (maison + piscine + clôture, vue surélevée)
- pack-gallery-1 à 12.webp → Gallery (12 photos réparties dans la grille gallery)

---
## Final check
RUN_HASH: 157cd29b1b4348026ff4ace2dad1ceb58fb9b173
GIT_REV : aaa243ef539b0da57fe1fc50f619cf6405a86cd6
Result: 🟡 GATES PASS avec 2 warning(s)
- WARN gate 7: Noms clients fictifs dans Testimonials (lead.json ne fournit pas de reviews réels)
- WARN gate 8: 23 placements photos / 27+ cible agency-grade
