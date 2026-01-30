# Gmail UI Part 2 - Reading & Composing Emails

A pixel-perfect recreation of Gmail's email reading and composition interface, built from Figma designs using React and Tailwind CSS v4.

## Overview

This project implements Gmail's Part 2 interface focusing on:
- Reading individual emails (single and multiple recipients)
- Subscription/promotional email views
- Email composition dialog (expanded and minimized states)
- Full Gmail UI layout with sidebar, header, and right panel

## Features

- **Email Reading View**: Displays email content with sender info, timestamps, and action buttons
- **Multiple Recipient Support**: Shows "Reply all" button for emails with multiple recipients
- **Subscription Emails**: Special layout for promotional/subscription emails
- **Compose Dialog**: Full-featured email composition with minimize/maximize functionality
- **Quick Reply Suggestions**: Smart reply buttons for common responses
- **Browser Chrome**: Authentic browser window appearance
- **Responsive Layout**: Faithful to Gmail's desktop interface

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling with design tokens
- **TypeScript** - Type safety
- **Google Material Icons** - Icon system

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## URL Parameters

The application supports URL parameters to show different states:

- `?compose=new` - Show compose dialog
- `?compose=minimized` - Show minimized compose dialog
- `?recipients=multiple` - Show multiple recipients view
- `?type=subscription` - Show subscription email view

### Examples

- Single email: `/`
- With compose dialog: `/?compose=new`
- Multiple recipients: `/?recipients=multiple`
- Subscription email: `/?type=subscription`
- Multiple recipients with compose: `/?recipients=multiple&compose=new`

## Design Source

Original Figma design: [Gmail UI Part 2: Reading & Composing Emails](https://www.figma.com/design/yIF0C1zRaEne4emCbwJqSH/Gmail-UI-Part-2--Reading---Composing-Emails--Community-)

## License

MIT
