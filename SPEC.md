# UIStudio — Specification

> **Spec Kit: graphify + ponytail development approach**

## 1. Concept & Vision

UIStudio is a React component library built with TypeScript and TailwindCSS. Provides a curated set of accessible, composable UI primitives: Button, Input, Card, Modal, Badge, Avatar, Select, Checkbox, Toggle. Each component is fully typed, themeable via CSS variables, and exportable as both React components and a design token system.

## 2. Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     UISTUDIO ARCHITECTURE                        │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                    Component Layer                        │  │
│  │  Button │ Input │ Card │ Modal │ Badge │ Avatar │ Select │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌─────────────────────┐   ┌──────────────────────┐          │
│  │   Design Tokens     │   │    Hooks / Utils      │          │
│  │  (CSS vars + Tailwind)│   │ useMediaQuery, cn() │          │
│  └─────────────────────┘   └──────────────────────┘          │
│                                                                  │
│  Export: index.ts ──▶ Button, Input, Card, Modal, Badge...     │
└─────────────────────────────────────────────────────────────────┘
```

## 3. Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18, Vite 5 |
| Language | TypeScript 5 |
| Styling | TailwindCSS 3 |
| Icons | Lucide React |
| Build | Vite lib mode |

## 4. Ponytail — Task Breakdown

### Phase 1: Setup
1. `package.json`, `tsconfig.json`, `vite.config.ts`, `index.html`

### Phase 2: Core
2. `src/types.ts` — ComponentProps, Variant, Size, Theme interfaces
3. `src/utils/cn.ts` — classnames merge utility (clsx + tailwind-merge)
4. `src/hooks/useMediaQuery.ts` — responsive hook

### Phase 3: Components
5. `src/components/Button.tsx` — variants: primary, secondary, outline, ghost, destructive; sizes: sm, md, lg
6. `src/components/Input.tsx` — text input with label + error state
7. `src/components/Select.tsx` — styled select dropdown
8. `src/components/Card.tsx` — Card, CardHeader, CardContent, CardFooter
9. `src/components/Modal.tsx` — accessible dialog with backdrop
10. `src/components/Badge.tsx` — status/category badge
11. `src/components/Avatar.tsx` — image + fallback initials
12. `src/components/Checkbox.tsx` — styled checkbox
13. `src/components/Toggle.tsx` — on/off toggle switch
14. `src/components/Spinner.tsx` — loading indicator

### Phase 4: Export
15. `src/index.ts` — barrel export all components
16. `README.md` — usage examples + props table

### Phase 5: Deploy
17. `vercel.json`, `fly.toml`, `railway.json`, `render.yaml`

## 5. Milestones

- [x] Phase 1-2: Setup + core utilities (this build)
- [ ] Phase 3: All components
- [ ] Phase 4: Export + docs
- [ ] Phase 5: Deployment
