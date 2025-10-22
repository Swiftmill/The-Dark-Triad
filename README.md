# THE DARK TRIAD

Projet front-end complet (Vite + React + TypeScript + Tailwind + Framer Motion) reproduisant l'ambiance du site de référence tout en conservant une identité propre.

## Démarrage

```bash
npm install
npm run dev
```

Autres scripts disponibles :

- `npm run build` — build de production (avec vérification TypeScript préalable)
- `npm run preview` — aperçu local du build
- `npm run lint` — analyse ESLint
- `npm run typecheck` — vérification stricte TypeScript

## Arborescence clés

```
public/
  favicon.svg
  assets/
    video/hero.mp4          # vidéo de fond (fichier vide par défaut)
    img/                    # déposez ici vos images et visuels
src/
  components/               # composants UI (HeroVideo, GlyphButton, NavBar, etc.)
  sections/                 # sections ancrées (Intro, Library, Board, Tributes, Contact)
  data/                     # données JSON/TS pour glyphes, tribunes, etc.
  styles/globals.css        # Tailwind + styles globaux (scanlines, halo, curseur)
```

## Ajouter vos médias

- Remplacez `public/assets/video/hero.mp4` par votre vidéo hero (même nom).
- Ajoutez vos images dans `public/assets/img/` en conservant les noms utilisés ou en ajustant les chemins dans les données (`src/data/tributes.ts`, `src/sections/Intro.tsx`).
- Aucun média généré n'est inclus : à vous de fournir les assets finaux.

## Modifier les glyphes

Les glyphes sont définis dans `src/data/glyphs.json`.

Chaque entrée contient :

```json
{
  "id": "intro",
  "real": "ENTER TEMPLE",
  "glyphs": ["ꖦꗃꕥ", "ᚷᛃᛞ", "𐌂𐌂𐌂"]
}
```

- `id` doit correspondre à l'ancre de section (`#intro`, `#library`, etc.).
- `real` est le libellé affiché au survol / focus.
- `glyphs` est un tableau de glyphes qui défilent toutes les secondes. Ajoutez/retirez librement des glyphes.

## Ajuster effets et couleurs

- Halo, glow, scanlines, grain et curseur sont configurés dans `src/styles/globals.css`.
- Le dégradé or est défini dans `tailwind.config.cjs` (`colors.gold` + `backgroundImage.triad-gradient`).
- Vitesse du cycle glyphique : modifiez l'intervalle dans `src/hooks/useGlyphCycle.ts` (actuellement 1000 ms).

## Accessibilité et performances

- Les boutons glyphes possèdent un `aria-label` descriptif et répondent au focus clavier.
- `prefers-reduced-motion` est respecté (cycle stoppé si l'utilisateur le demande).
- La vidéo est en `preload="metadata"` et un fallback image est prévu si le fichier est manquant.

## Personnalisation

- Navigation : liens et libellés dans `src/components/NavBar.tsx`.
- Contenu des sections : modifiez les fichiers `src/sections/*.tsx` et les jeux de données associés dans `src/data/`.
- Effets Framer Motion : ajustez les variantes dans chaque composant (`Intro`, `Reveal`, `HeroVideo`, etc.).

## Déploiement

Le projet est prêt pour un déploiement statique :

```bash
npm run build
npm run preview
```

Le dossier `dist/` généré peut être servi par n'importe quel hébergeur statique.
