# Multi-Step Form

A Next.js + React + Tailwind application that provides drag-and-drop multi-step form experience with extendable steps and a flexible context menu.

## Key Features

- **Interactive Stepper**: Displays a sequence of steps (Info, Details, Other, Ending, plus dynamically added pages).
- **Drag-and-Drop Reordering**: Reorder steps using `@dnd-kit` for seamless drag-and-drop support.
- **Dynamic Page Management**:

  - Add new steps between existing ones via a hover-triggered “+” handle.
  - Rename, duplicate, or delete steps through a right-click context menu.

- **Responsive Design**:

  - Vertical layout on mobile, horizontal on larger screens.

- **Content Rendering**:

  - Built-in components (`InfoStep`, `DetailsPage`, etc.) for known steps.
  - Fallback render for custom pages with simple paragraph content.

- **Next Button Navigation**: Advance through steps with a bottom-positioned Next/Done button.

## Getting Started

### Prerequisites

- Node.js v16+ and npm

### Installation

```bash
git clone https://github.com/kevinmuchene/filloutform
cd fillout-assessment
npm install
```

### Running Locally

```bash
npm run dev
# Open http://localhost:3000 in your browser

npm test
```

### Customization

Step Limit: Maximum of 7 steps; you can adjust MAX_STEPS in MultiStepForm page.
