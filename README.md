# Mahadaan Website

A responsive HTML/CSS/JavaScript wireframe for the **Mahadaan** initiative of **Antaryog Foundation**. Mahadaan represents a sacred campaign for spiritual giving and community transformation.

## Overview

**Mahadaan** (महादान) means "The Great Gift" — a selfless act of giving for the welfare of society. This website serves as a comprehensive platform to educate about the initiative, showcase donation opportunities, and demonstrate the impact of spiritual giving under the guidance of a Jivit Guru (enlightened spiritual master).

The site features:
- **Hero section** with campaign messaging
- **Mission overview** explaining the concept of Mahadaan
- **Impact statistics** showing reach and community benefit
- **How It Works** - a 3-step giving process
- **Programs** - 6+ donation categories for different causes
- **Testimonials** - stories of transformation and impact
- **Call-to-action** encouraging participation
- **Responsive design** for mobile, tablet, and desktop

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with v7 theme palette
- **JavaScript** - Smooth scroll, mobile nav, stats animation
- **Tailwind CSS** - Via CDN for utility classes
- **Google Fonts** - Lora (serif), Inter (sans), Cormorant Garamond (elegant)

### Color Palette (v7 Theme)

| Element | Color | Use |
|---------|-------|-----|
| Primary | `#B87333` | Copper - headings, buttons, accents |
| Secondary | `#E8B84B` | Gold - highlights, dividers |
| Accent | `#5C3010` | Dark brown - text, hover states |
| Background | `#F9F6F0` | Warm off-white - page background |
| Section Alt | `#FDFBF8` | Near-white - alternate sections |

### Typography

- **Headings:** Lora (serif), 700 weight, tight letter-spacing
- **Body/UI:** Inter (sans-serif), 400-600 weights
- **Elegant taglines:** Cormorant Garamond (serif italic)

## Project Structure

```
mahadaanwebsite/
├── index.html                          # Main wireframe page (9 sections)
├── README.md                           # This file
├── css/
│   ├── styles.css                      # Custom styles, component patterns
│   └── wireframe.css                   # Layout classes, responsive grid
├── js/
│   ├── tailwind-config.js              # Tailwind theme configuration
│   └── main.js                         # Interactive features (nav, scroll, stats)
└── docs/
    ├── antaryog-mahadaan-project.md    # Complete project documentation
    └── google-eeat-guidelines.md       # Google search quality EEAT guide
```

## Page Structure

### 1. Navigation Bar
- Sticky positioning with drop shadow on scroll
- Antaryog Foundation logo and "Mahadaan" branding
- Navigation links: About, Impact, How It Works, Programs, Donate
- Mobile hamburger menu toggle (<768px)

### 2. Hero Section
- Full-viewport height
- Tagline: "A Sacred Initiative"
- Main heading: "Mahadaan: The Gift of Transformation"
- Subtitle explaining the initiative
- Two CTAs: "Donate Now" and "Learn More"

### 3. About (Mission Overview)
- Two-column layout: text + highlight card
- Explains Mahadaan concept and spiritual significance
- Lists key benefits: teacher training, retreats, accessibility, research
- Responsive to single column on mobile

### 4. Impact Statistics
- 4-column grid showing key metrics
- Animated counters that increment on scroll into view
- Metrics: Lives Touched, Programs Supported, Years of Service, Volunteers
- Responsive: 2 columns at 768px, 1 column at 480px

### 5. How It Works
- 3-step process with numbered cards
- Steps: Choose a Program, Give Generously, Transform Lives
- Card design with copper accent border
- Clear call-to-action language

### 6. Programs Supported
- 6-card grid showcasing donation categories
- Programs: Yoga Teacher Training, Wellness Retreats, Community Access, Research, Mentorship, Online Learning
- Hover animation (scale up, shadow increase)
- Responsive grid

### 7. Testimonials
- 3-column dashed-border cards
- Real stories of transformation
- Author attribution for each story
- Responsive to single column on mobile

### 8. Final CTA
- Dark brown gradient background
- Strong call-to-action: "Begin Your Mahadaan Today"
- Donation button in secondary gold color

### 9. Footer
- Dark brown background
- Navigation links
- Contact and social references
- Copyright notice

## How to Use

### Local Development
No build step required — simply open `index.html` in your browser:

```bash
# Option 1: Direct file open
open index.html

# Option 2: Using a local server (Python)
python -m http.server 8000
# Then visit: http://localhost:8000

# Option 3: Using Node http-server
npx http-server
```

### Live Testing
- Test on desktop (1920px), tablet (768px), and mobile (375px)
- Verify sticky navbar behavior
- Check mobile hamburger toggle
- Confirm stats counter animation on scroll
- Test all smooth scroll links

## Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Flexible grid layouts using CSS Grid
- Touch-friendly navigation on mobile

### Accessibility
- Semantic HTML5 markup
- ARIA labels on interactive elements
- Color contrast meets WCAG standards
- Keyboard navigation support

### Performance
- Minimal JavaScript for fast load times
- CSS animations instead of JS where possible
- Optimized font loading via Google Fonts CDN
- No image dependencies (uses color and typography)

### SEO & EEAT
See `docs/google-eeat-guidelines.md` for comprehensive guidance on:
- **Experience:** Author bios and transformation stories
- **Expertise:** Program details with learning outcomes
- **Authoritativeness:** Third-party endorsements and partnerships
- **Trustworthiness:** Transparent mission, clear CTAs, no manipulation

## Documentation

### Donation Categories
The site supports 10 donation pathways aligned with traditional giving practices:
1. Gurukul Branch (building spiritual centers)
2. Annadan (food offering)
3. Yadnya & Pooja (ritual support)
4. Bhumi Daan (land donation)
5. Science of Healing
6. Labour Daan (service/volunteer work)
7. Support for Handicapped individuals
8. Children's education and welfare
9. Support for women (all ages)
10. Support for Sanyasi (renunciates)

Full details in `docs/antaryog-mahadaan-project.md`

### Google EEAT Guidelines
Complete reference document for search quality and trustworthiness:
- What EEAT means and why it matters
- Practical implementation checklist for Mahadaan site
- Best practices for building authority and trust
- YMYL (Your Money Your Life) considerations

See `docs/google-eeat-guidelines.md`

## Customization

### Colors
Update CSS variables in `css/wireframe.css` and `css/styles.css`:
```css
:root {
    --primary: #B87333;
    --secondary: #E8B84B;
    --accent: #5C3010;
    --background: #F9F6F0;
    --section-alt: #FDFBF8;
    --text: #5C3010;
    --text-secondary: #7A6858;
}
```

### Fonts
Change in `<head>` Google Fonts link and `js/tailwind-config.js`:
```js
fontFamily: {
    'serif': ['Lora', 'Georgia', 'serif'],
    'sans': ['Inter', 'system-ui', 'sans-serif'],
}
```

### Content
Edit section text directly in `index.html`. All content is inline for easy modification.

### Icons
Currently using Unicode characters (☰, ✕, 1-5) for visual elements. Replace with SVG icons as needed.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)
- IE11 not supported (uses CSS Grid, modern JavaScript)

## Theme Attribution

This website uses the **v7 theme** adapted from the Antar Yog Foundation's primary website (`/home/ameya/repo/aywebtest/frontend/`):
- Color palette design
- Typography system
- Component patterns
- Responsive breakpoints

## Future Enhancements

Potential additions for production:
- Form integration for donations
- Backend payment processing
- Blog/news section
- Video testimonials
- Interactive program selector
- Newsletter signup
- Analytics integration
- Social media feeds

## Contributing

This is a project mockup. To contribute:
1. Follow the existing component patterns
2. Maintain color palette and typography consistency
3. Test responsive design at all breakpoints
4. Keep HTML semantic and accessible
5. Document any CSS custom properties

## License

This project is for Antaryog Foundation. Contact for usage rights.

## Contact

**Antaryog Foundation**
- Mahadaan Initiative
- Email: contact@antaryog.org
- [Add social media links]

---

*Last Updated: May 13, 2026*
*Created as a wireframe mockup for the Mahadaan campaign*
