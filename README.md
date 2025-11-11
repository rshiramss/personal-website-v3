# Personal Website v3

A minimalist personal portfolio website with a Fear of God-inspired aesthetic.

## Project Structure

```
personal-website-v3/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # Custom CSS styles
├── js/
│   ├── tailwind-config.js # Tailwind CSS configuration
│   └── navigation.js      # Navigation and routing logic
└── sections/
    ├── about.html         # About section content
    ├── projects.html      # Projects listing
    ├── work.html          # Work experience
    ├── writing.html       # Writing section
    ├── gradient-doc.html  # Gradient project documentation
    ├── cineflow-doc.html  # Cineflow project documentation
    └── reddit-doc.html    # Reddit analysis project documentation
```

## File Organization

### HTML
- **index.html** - Main entry point containing all sections and structure

### CSS
- **css/styles.css** - Custom styles including font smoothing and section visibility

### JavaScript
- **js/tailwind-config.js** - Tailwind CSS theme configuration with custom colors
- **js/navigation.js** - Handles SPA-style navigation between sections

### Sections (Reference Files)
The `sections/` folder contains modular HTML files for each page section. These are kept separate for easier maintenance and can be used if you want to load content dynamically in the future.

## Features

- Single-page application navigation
- Minimalist, neutral color palette
- Responsive design (mobile, tablet, desktop)
- Project documentation pages
- Smooth transitions between sections

## Color Palette

- **Base**: `#f5f0ed` - Light warm beige background
- **Content**: `#333333` - Soft black text
- **Subtle**: `#a0a0a0` - Muted gray for secondary text
- **Accent**: `#b5927c` - Soft terracotta/tan accent
- **Accent Hover**: `#9e7a67` - Darker accent for hover states

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- Tailwind CSS (CDN)
- Google Fonts (Inter)

## Usage

Simply open `index.html` in a web browser. No build process or server required.

## Navigation

The site uses hash-based routing:
- `#about` - About section
- `#projects` - Projects listing
- `#work` - Work experience
- `#writing` - Writing section
- `#gradient-doc` - Gradient project details
- `#cineflow-doc` - Cineflow project details
- `#reddit-doc` - Reddit analysis project details

## Customization

To customize the theme:
1. Edit colors in `js/tailwind-config.js`
2. Modify styles in `css/styles.css`
3. Update content sections in `index.html`
