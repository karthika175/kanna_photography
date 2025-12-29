# Extensibility Guide

## How to Add a New Service (No JSX Changes Required)

This project is built with a **config-based, data-driven architecture**. Adding new services requires **ONLY configuration updates** - no new component files needed.

---

## Architecture Overview

```
src/
├── routes.config.js        # Route paths and navigation menu
├── content.config.js       # All page content (text, images, etc.)
├── components/
│   ├── SectionTemplate.jsx # Universal template (reused for ALL pages)
│   └── shared/             # Reusable UI blocks
│       ├── SectionHero.jsx
│       ├── GalleryGrid.jsx
│       ├── Highlights.jsx
│       ├── TestimonialSection.jsx
│       └── CTASection.jsx
```

**Key Principle**: One template component (`SectionTemplate.jsx`) renders ALL service pages using data from `content.config.js`.

---

## Example 1: Adding a New Wedding Type

### Task: Add "Jewish Wedding" photography

**Step 1: Add content** (`src/content.config.js`)

```javascript
export const contentConfig = {
  wedding: {
    christian: { /* ... existing ... */ },
    muslim: { /* ... existing ... */ },
    hindu: { /* ... existing ... */ },
    // ADD THIS:
    jewish: {
      title: "Jewish Wedding Photography",
      subtitle: "Honoring Traditions with Timeless Beauty",
      description: "From the Ketubah signing to the Hora dance, we capture every sacred moment of your Jewish wedding.",
      hero: {
        videoUrl: "/videos/wedding-jewish-hero.mp4",
        videoPoster: "/images/wedding/jewish/hero-poster.jpg",
        ctaText: "Book Your Wedding",
        ctaLink: "#contact"
      },
      highlights: [
        "Chuppah ceremony coverage",
        "Breaking of the glass",
        "Hora & celebration moments",
        "Family portraits"
      ],
      gallery: [
        "/images/wedding/jewish/gallery-1.jpg",
        "/images/wedding/jewish/gallery-2.jpg",
        // ... add your images
      ],
      testimonial: {
        name: "Sarah & David",
        text: "Beautiful photos that honored our traditions perfectly!",
        rating: 5
      }
    }
  },
  // ... rest of config
};
```

**Step 2: Add navigation item** (`src/routes.config.js`)

```javascript
export const navigationConfig = [
  {
    label: 'Wedding',
    type: 'dropdown',
    items: [
      { label: 'Christian Wedding', path: '/wedding/christian' },
      { label: 'Muslim Wedding', path: '/wedding/muslim' },
      { label: 'Hindu Wedding', path: '/wedding/hindu' },
      { label: 'Jewish Wedding', path: '/wedding/jewish' }, // ADD THIS
    ]
  },
  // ... rest of navigation
];
```

**That's it!** The route `/wedding/jewish` now works automatically.

- No new components created
- No JSX changes
- SectionTemplate automatically renders the page

---

## Example 2: Adding a Completely New Service Category

### Task: Add "Corporate Event Photography"

**Step 1: Add content section** (`src/content.config.js`)

```javascript
export const contentConfig = {
  wedding: { /* ... */ },
  baby: { /* ... */ },
  other: { /* ... */ },
  // ADD THIS ENTIRE SECTION:
  corporate: {
    "conference": {
      title: "Conference Photography",
      subtitle: "Professional Event Coverage",
      description: "Comprehensive photography coverage for your corporate conferences and seminars.",
      hero: {
        videoUrl: "/videos/corporate-conference-hero.mp4",
        videoPoster: "/images/corporate/conference/hero-poster.jpg",
        ctaText: "Get a Quote",
        ctaLink: "/#contact"
      },
      highlights: [
        "Keynote speaker coverage",
        "Networking session photos",
        "Branding & signage shots",
        "Team portraits"
      ],
      gallery: [
        "/images/corporate/conference/gallery-1.jpg",
        // ... more images
      ],
      testimonial: {
        name: "Tech Corp Inc.",
        text: "Professional service and excellent quality photos!",
        rating: 5
      }
    },
    "team-building": {
      title: "Team Building Event Photography",
      // ... similar structure
    }
  }
};
```

**Step 2: Add route configuration** (`src/routes.config.js`)

```javascript
export const routeConfig = {
  // ... existing routes ...
  // ADD THIS:
  corporate: {
    basePath: '/corporate',
    section: 'corporate',
    types: getSectionTypes('corporate'), // ['conference', 'team-building']
    component: 'SectionTemplate'
  }
};
```

**Step 3: Add navigation** (`src/routes.config.js`)

```javascript
export const navigationConfig = [
  // ... existing items ...
  // ADD THIS:
  {
    label: 'Corporate',
    type: 'dropdown',
    items: [
      { label: 'Conference', path: '/corporate/conference' },
      { label: 'Team Building', path: '/corporate/team-building' }
    ]
  }
];
```

**Step 4: Add route to App.jsx** (`src/App.jsx`)

```javascript
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/wedding/:type" element={<SectionTemplate section="wedding" />} />
  <Route path="/baby/:type" element={<SectionTemplate section="baby" />} />
  <Route path="/services/:type" element={<SectionTemplate section="other" />} />
  {/* ADD THIS: */}
  <Route path="/corporate/:type" element={<SectionTemplate section="corporate" />} />
</Routes>
```

**Done!** You now have:
- `/corporate/conference`
- `/corporate/team-building`

All rendered using the same `SectionTemplate` component.

---

## Example 3: Adding to "Other Services"

### Task: Add "Engagement Photography"

This is even simpler - the route structure already exists!

**Step 1: Add content** (`src/content.config.js`)

```javascript
export const contentConfig = {
  // ... wedding, baby ...
  other: {
    "house-warming": { /* ... existing ... */ },
    "puberty": { /* ... existing ... */ },
    // ADD THIS:
    "engagement": {
      title: "Engagement Photography",
      subtitle: "Celebrate Your Love Story",
      description: "Beautiful engagement photos at your favorite locations.",
      hero: {
        videoUrl: "/videos/engagement-hero.mp4",
        videoPoster: "/images/other/engagement/hero-poster.jpg",
        ctaText: "Book Your Session",
        ctaLink: "#contact"
      },
      highlights: [
        "Outdoor & studio options",
        "Multiple outfit changes",
        "Couple posing guidance",
        "Same-day preview"
      ],
      gallery: [
        "/images/other/engagement/gallery-1.jpg",
        // ... more images
      ],
      testimonial: {
        name: "Alex & Jordan",
        text: "Our engagement photos turned out amazing!",
        rating: 5
      }
    }
  }
};
```

**Step 2: Add navigation** (`src/routes.config.js`)

```javascript
{
  label: 'Other Services',
  type: 'dropdown',
  items: [
    { label: 'House Warming', path: '/services/house-warming' },
    { label: 'Puberty Ceremony', path: '/services/puberty' },
    { label: 'Engagement', path: '/services/engagement' }, // ADD THIS
  ]
}
```

**Done!** Route `/services/engagement` now works.

---

## Benefits of This Architecture

✅ **No Page Duplication** - One template for all pages
✅ **No New Components** - Extend via configuration only
✅ **Type Safety** - Content structure is consistent
✅ **Easy Maintenance** - Update content without touching code
✅ **Scalable** - Add 100 services without adding 100 components

---

## File Checklist: Adding a Service

| File | Required Change |
|------|----------------|
| `content.config.js` | ✅ Add content object |
| `routes.config.js` | ✅ Add navigation item (and route config for new sections) |
| `App.jsx` | ✅ Only if adding a NEW section category |
| **Components** | ❌ NEVER modify |

---

## Testing Your New Service

1. **Add your content and navigation config**
2. **Run the dev server:**
   ```bash
   npm run dev
   ```
3. **Navigate to your new route:**
   - Wedding types: `/wedding/{type}`
   - Baby types: `/baby/{type}`
   - Other services: `/services/{type}`
   - Corporate (if added): `/corporate/{type}`

4. **Verify:**
   - Hero section displays correctly
   - Highlights render
   - Gallery images load
   - Testimonial appears
   - CTA button works

---

## Common Issues

**Q: My route shows a blank page**
A: Check that the content key matches the URL parameter exactly (e.g., `jewish` not `Jewish`)

**Q: Navigation dropdown doesn't show my new item**
A: Ensure you added it to `navigationConfig` in `routes.config.js`

**Q: Images not loading**
A: Verify image paths in `content.config.js` match your actual image locations

---

## Next Steps

Want to customize the layout?
- Edit shared components in `src/components/shared/`
- Changes apply to ALL pages automatically
- Example: Update `SectionHero.jsx` → all hero sections update

Want different layouts per section?
- Pass layout variant via config
- Add conditional rendering in `SectionTemplate.jsx`
- Still no new page components needed!

---

**Questions?** Review the existing services in `content.config.js` for more examples.
