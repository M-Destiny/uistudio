# UIStudio

> React component library with TypeScript + TailwindCSS. Accessible, composable UI primitives.

## Components

| Component | Description | Variants | Sizes |
|-----------|-------------|----------|-------|
| `Button` | Primary action button | primary, secondary, outline, ghost, destructive | sm, md, lg |
| `Input` | Text input with label + error state | — | — |
| `Select` | Styled select dropdown | — | — |
| `Checkbox` | Styled checkbox with label | — | — |
| `Toggle` | On/off toggle switch | — | — |
| `Card` | Card with Header, Content, Footer | — | — |
| `Modal` | Accessible dialog with backdrop | — | — |
| `Badge` | Status/category badge | default, blue, green, red, yellow | — |
| `Avatar` | Image with fallback initials | — | sm, md, lg |
| `Spinner` | Loading indicator | — | sm, md, lg |

## Utilities

| Export | Description |
|--------|-------------|
| `cn` | Classnames merge utility (clsx + tailwind-merge) |
| `useMediaQuery` | Responsive media query hook |

## Quick Start

```bash
npm install
npm run dev
```

## Installation

```bash
npm install uistudio
```

## Usage

```tsx
import { Button, Input, Card, CardHeader, CardContent, Modal, Badge, Avatar, Spinner, Toggle, Select, Checkbox, cn, useMediaQuery } from 'uistudio';

// Button with variants and sizes
<Button variant="primary" size="md">Click me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button disabled>Disabled</Button>

// Input with label and error
<Input label="Email" placeholder="you@example.com" />
<Input label="Password" type="password" error="Invalid password" />

// Select with label and error
<Select label="Country" error="Required">
  <option value="">Select...</option>
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
</Select>

// Checkbox
<Checkbox label="I agree to terms" />
<Checkbox label="Subscribe" defaultChecked />

// Toggle switch
<Toggle label="Enable notifications" />
<Toggle label="Dark mode" defaultChecked />
<Toggle disabled>Disabled</Toggle>

// Card components
<Card>
  <CardHeader>Card Title</CardHeader>
  <CardContent>Card content goes here</CardContent>
  <CardFooter>Footer actions</CardFooter>
</Card>

// Modal dialog
<Modal open={isOpen} onClose={() => setIsOpen(false)} title="Confirm">
  <p>Are you sure?</p>
  <Button onClick={() => setIsOpen(false)}>Confirm</Button>
</Modal>

// Badge variants
<Badge variant="default">Default</Badge>
<Badge variant="blue">Info</Badge>
<Badge variant="green">Success</Badge>
<Badge variant="red">Error</Badge>
<Badge variant="yellow">Warning</Badge>

// Avatar with fallback initials
<Avatar name="John Doe" />
<Avatar name="Jane Smith" size="lg" />
<Avatar src="/avatar.png" name="User" />

// Spinner
<Spinner size="md" />
<Spinner size="lg" />

// Utility: cn() for conditional classnames
<div className={cn('base-class', condition && 'conditional-class')} />

// Utility: useMediaQuery for responsive logic
const isMobile = useMediaQuery('(max-width: 768px)');
```

## Props Reference

### Button
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'destructive'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `disabled` | `boolean` | `false` | Disable interaction |
| `className` | `string` | — | Additional classes |
| `children` | `React.ReactNode` | — | Button content |
| `onClick` | `() => void` | — | Click handler |

### Input
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Label text |
| `error` | `string` | — | Error message |
| `className` | `string` | — | Additional classes |
| `...props` | `InputHTMLAttributes` | — | Native input props |

### Select
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Label text |
| `error` | `string` | — | Error message |
| `className` | `string` | — | Additional classes |
| `children` | `React.ReactNode` | — | Option elements |
| `...props` | `SelectHTMLAttributes` | — | Native select props |

### Checkbox
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Label text |
| `className` | `string` | — | Additional classes |
| `...props` | `InputHTMLAttributes` | — | Native checkbox props |

### Toggle
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Label text (or use children) |
| `children` | `React.ReactNode` | — | Alternative to label |
| `checked` | `boolean` | `false` | Controlled checked state |
| `defaultChecked` | `boolean` | `false` | Uncontrolled initial state |
| `disabled` | `boolean` | `false` | Disable interaction |
| `onChange` | `(e: ChangeEvent) => void` | — | Change handler |
| `className` | `string` | — | Additional classes |

### Card / CardHeader / CardContent / CardFooter
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Additional classes |
| `children` | `React.ReactNode` | — | Content |

### Modal
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | — | Visibility |
| `onClose` | `() => void` | — | Close handler |
| `title` | `string` | — | Modal title |
| `children` | `React.ReactNode` | — | Modal content |
| `className` | `string` | — | Additional classes |

### Badge
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'blue' \| 'green' \| 'red' \| 'yellow'` | `'default'` | Color variant |
| `className` | `string` | — | Additional classes |
| `children` | `React.ReactNode` | — | Badge content |

### Avatar
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | — | Image URL |
| `name` | `string` | — | Fallback name for initials |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Avatar size |
| `className` | `string` | — | Additional classes |

### Spinner
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Spinner size |
| `className` | `string` | — | Additional classes |

## Scripts

```bash
npm run dev        # Start dev server
npm run build      # Build for production (tsc + vite)
npm run preview    # Preview production build
npm run test       # Run tests (vitest)
npm run test:watch # Run tests in watch mode
```

## Tech Stack

- **Framework**: React 18, Vite 5
- **Language**: TypeScript 5
- **Styling**: TailwindCSS 3
- **Icons**: Lucide React
- **Build**: Vite lib mode
- **Testing**: Vitest + React Testing Library

## License

MIT