# Cartographer

Multi-page narrative world-building site built from the [Cartographer Project](https://www.figma.com/design/vXAYsWCBtxXHGVezHG1EUX/Cartographer-Project) Figma designs.

## Pages

| Page | Route | Figma Frame |
|------|-------|-------------|
| Welcome | `/` | Cartographer Welcome Screen |
| World Creation | `/world-creation.html` | World Wide Screen |
| World Graph | `/world-graph.html` | Interactive entity graph |
| Entity Editor | `/entity-editor.html` | Entity Editor Screen |
| Timeline | `/timeline.html` | Narrative Timeline |
| Discovery | `/discovery.html` | Search & Discovery |
| Export | `/export.html` | Writer's Bible export |
| Analytics | `/analytics.html` | World analytics |
| Lore | `/lore.html` | Lore entry detail |
| Settings | `/settings.html` | App settings |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Use the floating page nav (bottom-right) to jump between screens.

## Design tokens

Colors, typography, and spacing match Figma globals: PT Serif, Inter, DM Sans, Playfair Display; palette includes Green Kelp `#1A2E1A`, Everglade `#1E4D2B`, Laser gold `#C9A86A`, and Spring Wood `#FAF9F6`.

Assets exported from Figma live in `public/images/`.
