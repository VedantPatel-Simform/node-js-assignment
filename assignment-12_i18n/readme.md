# Node.js i18n Demo

A simple Node.js + Express app demonstrating internationalization (i18n) support for English and Hindi using the `i18n` package.

## Installation

```bash
npm install
```

## Run the App

```bash
node index.js
```

Server will start at: `http://localhost:3000`

## Usage

Use the `lang` query parameter to switch languages:

- English: `http://localhost:3000/?lang=en`
- Hindi: `http://localhost:3000/?lang=hi`

## Project Structure

```
.
├── index.js
└── locales/
    ├── en.json
    └── hi.json
```

## Translation Example

**locales/en.json**

```json
{
  "greeting": "Hello, world!",
  "welcome": "Welcome to our website."
}
```

**locales/hi.json**

```json
{
  "greeting": "नमस्ते दुनिया!",
  "welcome": "हमारी वेबसाइट पर आपका स्वागत है।"
}
```
