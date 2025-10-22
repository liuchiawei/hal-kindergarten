# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 project for ハル幼稚園 (Hal Kindergarten), a kindergarten website built with:
- **Next.js 15.5.6** with App Router and Turbopack
- **React 19.1.0**
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** for styling
- **shadcn/ui** components (New York style variant)
- **Motion** (v12) for animations
- **pnpm** as the package manager

The site uses Japanese language (lang="ja") and is deployed on Vercel.

### Target Audience & Goals
- **Target Audience**: Parents of young children (0-6 years old)
- **Primary Goal**: Showcase kindergarten features and attract enrollment inquiries
- **Design Style**: Warm, friendly, professional, child-friendly

## Development Commands

```bash
# Start development server with Turbopack
pnpm dev

# Build for production with Turbopack
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

## Project Structure

- **App Router**: Pages are in [src/app/](src/app/)
  - [src/app/layout.tsx](src/app/layout.tsx) - Root layout with Geist fonts
  - [src/app/page.tsx](src/app/page.tsx) - Homepage
  - [src/app/globals.css](src/app/globals.css) - Global Tailwind styles

- **Components**: shadcn/ui components in [src/components/ui/](src/components/ui/)
  - Includes: button, sheet, input, separator, tooltip, skeleton, sidebar
  - All styled with Tailwind CSS variables and CVA

- **Utilities**: [src/lib/utils.ts](src/lib/utils.ts) - cn() helper for className merging

- **Hooks**: Custom hooks in [src/hooks/](src/hooks/)
  - [src/hooks/use-mobile.ts](src/hooks/use-mobile.ts) - Mobile detection hook

## Import Aliases

```typescript
"@/*" → "./src/*"           // Configured in tsconfig.json
"@/components" → components // shadcn alias
"@/ui" → components/ui      // shadcn alias
"@/lib" → lib               // shadcn alias
"@/hooks" → hooks           // shadcn alias
```

## shadcn/ui Configuration

- **Style**: new-york
- **Base color**: neutral
- **Icon library**: lucide-react
- **RSC**: Enabled (React Server Components)
- **CSS Variables**: Enabled

Add new components using: `pnpm dlx shadcn@latest add [component-name]`

## Key Technologies

- **Turbopack**: Used for both dev and build (--turbopack flag)
- **Tailwind CSS v4**: Uses @tailwindcss/postcss and modern config
- **Motion**: Modern animation library (replaces framer-motion)
- **Geist Font**: Auto-optimized via next/font/google

## Design System

### Color Scheme
- **Primary Colors**: Warm yellows/oranges (sunshine and energy), soft pastels (pink, blue, green)
- **Secondary Colors**: White/cream backgrounds, neutral grays for text
- **Accent Colors**: Bright colors for CTAs and highlights

### Typography
- **Headings**: Rounded, friendly Japanese fonts (e.g., rounded Gothic)
- **Body Text**: Clean, readable sans-serif
- **Size**: Large enough for easy reading on mobile devices

### Component Guidelines
1. **Buttons**:
   - Primary CTA: Bold, rounded corners, hover effects
   - Secondary: Outlined style
   - Icon buttons for social sharing

2. **Cards**:
   - Rounded corners
   - Subtle shadows
   - Hover effects (lift/scale)

3. **Images**:
   - Rounded corners throughout
   - Consistent aspect ratios
   - Overlay text where appropriate

### Animations
- Subtle entrance animations: Fade-in, slide-up on scroll
- Hover effects: Scale, color changes
- Smooth transitions: 0.3s ease
- Loading states: Skeleton screens or spinners

## Site Structure & Pages

### 1. Homepage (トップページ) - `/`
Sections to implement:
- **Hero Section**: Large banner, headline「子どもたちの笑顔があふれる場所 ハル幼稚園」, subheadline「遊びを通して学び、成長する毎日」, CTA buttons「見学予約」「資料請求」
- **About Section**: Title「ハル幼稚園について」, features grid (3 columns):
  - 少人数制クラス「一人ひとりに寄り添う丁寧な保育」
  - 充実した設備「安全で広々とした園庭と教室」
  - 経験豊富な教員「資格を持ったプロの先生たち」
- **Programs Section**: Title「教育プログラム」, 4 program cards (自然体験活動, 音楽とリズム, 創作活動, 運動プログラム)
- **Daily Schedule**: Title「一日の流れ」, timeline format (9:00-14:30)
- **Testimonials**: Title「保護者の声」, 3 testimonial cards
- **News/Blog**: Title「お知らせ・ブログ」, latest 3-4 posts with「もっと見る」button
- **Contact CTA**: Text「見学・入園のご相談はお気軽に」, buttons「見学予約」「お問い合わせ」

### 2. About Page (園について) - `/about`
Sections:
- Our Philosophy (教育理念)
- Facilities (施設紹介): Classrooms, Playground, Gymnasium, Library corner
- Staff Introduction (先生紹介): Director message, teacher profiles
- Access (アクセス): Google Map, address, transportation info

### 3. Programs Page (教育内容) - `/programs`
Sections:
- Age-based curriculum (年齢別カリキュラム): 3, 4, 5-year-olds
- Special activities (特別活動)
- Annual events (年間行事)

### 4. Admissions Page (入園案内) - `/admissions`
Sections:
- Enrollment Process (入園の流れ)
- Requirements (入園資格)
- Fees (費用について): Table format
- Schedule Tour CTA「見学予約はこちら」

### 5. News/Blog Page (お知らせ) - `/news`
Features:
- Category filtering: お知らせ, 行事, 日常
- Post list with date, thumbnail, title, excerpt
- Pagination or infinite scroll

### 6. Contact Page (お問い合わせ) - `/contact`
Elements:
- Contact form: お名前, メールアドレス, 電話番号, お問い合わせ種別, メッセージ
- Submit button:「送信する」
- Contact info: TEL, 受付時間：平日 9:00〜17:00, info@hal-kindergarten.jp
- Google Maps embed

### Navigation Menu Items
ホーム / 園について / 教育内容 / 入園案内 / お知らせ / お問い合わせ

## Technical Requirements

### Responsive Design
- **Mobile-first approach**
- **Breakpoints**: Mobile < 768px, Tablet 768-1024px, Desktop > 1024px
- **Touch-friendly** buttons and navigation on mobile

### Performance
- Page load time: < 3 seconds
- Image optimization: WebP format with fallbacks
- Lazy loading for below-the-fold images
- Minified CSS/JS

### SEO
- Meta tags: Proper title, description for each page
- Structured data: Organization schema markup
- Alt text for all images
- Semantic HTML with proper heading hierarchy
- XML sitemap

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader friendly
- Sufficient color contrast
- Focus indicators on interactive elements

### Browser Support
- Modern browsers: Last 2 versions of Chrome, Firefox, Safari, Edge
- Mobile browsers: iOS Safari, Chrome Mobile

### Functionality
- Contact form with email notifications and validation
- Google Maps integration
- Social media sharing buttons on blog posts
- Smooth scrolling for anchor links

## Content Guidelines

### Photography Style
- Bright, natural, candid shots of children
- High-resolution, professional photography
- Privacy: Obtain parent consent for child photos

### Tone of Voice
- Warm and welcoming
- Professional but approachable
- Parent-focused
- Positive and encouraging

### Content Length
- Headlines: 10-15 characters (Japanese)
- Descriptions: 50-100 characters
- Body paragraphs: 100-200 characters
- Keep it scannable: Use bullet points and short paragraphs
