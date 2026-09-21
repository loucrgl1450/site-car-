# Speed & Clean

Site vitrine de **Speed & Clean**, préparateur esthétique automobile à Mouilleron-le-Captif (Vendée) : nettoyage intérieur/extérieur, déstickage, lustrage, rénovation d'optiques et detailing premium.

## Stack technique

| Outil | Version | Rôle |
| --- | --- | --- |
| [Next.js](https://nextjs.org/) | 14 | Framework, App Router, export statique |
| [React](https://react.dev/) | 18 | Bibliothèque UI |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Typage statique |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Styles utilitaires |
| [Framer Motion](https://www.framer.com/motion/) | 11 | Animations |

## Prérequis

Node.js 20 ou supérieur (c'est la version utilisée par le workflow de déploiement).

## Démarrage

```bash
npm install
npm run dev
```

Le site est alors accessible sur **http://localhost:3000/site-car-/**.

Attention au suffixe `/site-car-/` : le projet définit un `basePath` dans `next.config.mjs` pour être servi depuis un sous-répertoire sur GitHub Pages, et ce préfixe s'applique aussi en développement.

## Build

```bash
npm run build
```

La configuration utilise `output: 'export'`, donc le build produit un site statique dans le dossier `out/`. Il n'y a pas de serveur Node à lancer en production : les fichiers de `out/` se servent tels quels.

## Déploiement

Le déploiement est automatique : chaque push sur `main` déclenche le workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml), qui build le projet et publie `out/` sur GitHub Pages. Il peut aussi être lancé manuellement depuis l'onglet Actions (`workflow_dispatch`).

## Structure du projet

```
app/
  layout.tsx        Layout racine : métadonnées SEO, données structurées JSON-LD, Navbar et Footer
  page.tsx          Page d'accueil, assemble les sections dans l'ordre d'affichage
  globals.css       Styles globaux et directives Tailwind
  icon.svg          Favicon
components/
  Navbar.tsx        Navigation principale
  Hero.tsx          Bannière d'accueil
  About.tsx         Présentation de l'activité
  ServicesGrid.tsx  Grille des prestations
  OptionsGrid.tsx   Options complémentaires
  Booking.tsx       Section de prise de rendez-vous
  BookingCalendar.tsx, BookingCard.tsx
  BeforeAfterSlider.tsx  Comparateur avant/après
  MapSection.tsx    Localisation
  Footer.tsx        Pied de page
  Logo.tsx, Reveal.tsx   Composants utilitaires
public/
  logo-speed-clean.svg, robots.txt, sitemap.xml
```

## Contact

Les coordonnées affichées sur le site sont centralisées dans les données JSON-LD de [`app/layout.tsx`](app/layout.tsx).
