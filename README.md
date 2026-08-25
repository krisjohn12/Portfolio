# Portfolio — Alex Rivera

A static personal portfolio site built with plain **HTML, CSS, and JavaScript**.
The design uses a code-editor / IDE motif — the nav is styled as file tabs
(`hero.js`, `tools.css`, `projects.html`, `contact.php`) that match the section
each one links to.

## Tech stack
- HTML5
- CSS3 (no framework, custom properties for theming)
- Vanilla JavaScript (no libraries)

## Sections
- **Hero** — intro with a typing-effect role line
- **Tools** — HTML, CSS, JavaScript, PHP shown as skill cards
- **Projects** — two placeholder project cards, ready to be filled in
- **Contact** — a terminal-styled contact form plus direct links

## File structure
```
portfolio/
├── index.html      # all page markup/content
├── css/
│   └── style.css   # design tokens + all styling
├── js/
│   └── script.js   # typing effect, active-tab highlight, form handling
└── README.md
```

## Running it locally
No build step needed — open `index.html` directly in a browser, or serve the
folder with any static server, e.g.:
```
npx serve .
```

## Customizing
- Swap the placeholder name, role text, and links in `index.html`.
- Fill in `project-01.md` / `project-02.md` cards under `#projects` with real
  project titles, descriptions, stacks, and links once you have work to show.
- Update the email/GitHub/LinkedIn links in the `#contact` section.
- The contact form currently only shows a front-end confirmation message —
  connect it to a real `contact.php` endpoint (or any backend) to actually
  send messages.
