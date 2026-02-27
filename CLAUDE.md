# Claude Code Context

## Git Conventions

- Prefix all commits made by Claude with `@claude:` at the beginning of the commit message

## Project Structure

```
www.hamsternik.com/
├── src/                    # Astro website source
│   ├── components/         # Astro/React components
│   ├── content/blog/       # Blog posts (markdown)
│   ├── layouts/            # Page layouts
│   ├── pages/              # Route pages
│   └── styles/             # CSS/Tailwind styles
├── public/                 # Static assets
│   ├── fonts/
│   └── nkhomitsevych.resume.pdf  # Built resume (from cv/)
├── cv/                     # LaTeX resume source
│   ├── main.ios.tex        # iOS-focused resume
│   ├── main.fs.tex         # Full-stack resume
│   ├── build/              # LaTeX build output
│   └── Makefile            # Build automation
├── dist/                   # Astro build output
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── tsconfig.json
```

### Tech Stack (Website)

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Content**: Markdown blog posts
- **Resume**: LaTeX → PDF

---

## CV / Resume

### File Structure

| File | Purpose |
|------|---------|
| `cv/main.ios.tex` | iOS/Mobile-focused resume |
| `cv/main.fs.tex` | Full-stack/Web-focused resume |

### Build Commands

```bash
cd cv
make build-ios    # Build iOS resume
make build-fs     # Build full-stack resume
make clean        # Clean build artifacts
make install      # Install LaTeX dependencies
```

Output PDF: `public/nkhomitsevych.resume.pdf`

### Which Resume to Use

**Use `main.ios.tex`** when:
- Job title contains: iOS, Mobile, Swift, Apple platforms
- Primary tech stack: Swift, Objective-C, UIKit, SwiftUI, native mobile

**Use `main.fs.tex`** when:
- Job title contains: Full-stack, Frontend, React, Web, Node
- Primary tech stack: React, React Native, Next.js, TypeScript, Node.js, PostgreSQL
- Cross-platform mobile roles (React Native)

### Tech Stack (Current)

**iOS resume highlights:**
- Swift, Objective-C, SwiftUI, UIKit
- RxSwift, Swift Concurrency, Redux
- MVVM, VIPER, Coordinator patterns

**Full-stack resume highlights:**
- React, React Native, Next.js, Node.js
- JavaScript, TypeScript, PostgreSQL
- Supabase, Prisma ORM, WebSockets, Jest

### Key Experience Themes

- **Healthcare/FDA**: CyberVision/Nuvo - FDA-cleared medical devices, safety-critical systems
- **Fintech Payments**: Wurthy - B2B/B2C payment flows, MRR tracking
- **Team Leadership**: Life360 - led cross-functional team of 4 engineers
- **Architecture**: Redux, VIPER, MVVM+Coordinator patterns

### ATS Keywords to Include (by role type)

**React Native / Mobile Web roles:**
- React Native, JavaScript, TypeScript, WebSockets
- REST API design, real-time communication
- Mobile + web experience

**iOS Native roles:**
- Swift, SwiftUI, UIKit, Objective-C
- Core Data, Swift Concurrency, XCTest
- App Store, TestFlight

**Full-stack Web roles:**
- React, Next.js, Node.js, PostgreSQL
- REST API, TypeScript, Jest
- Supabase, Prisma, serverless
