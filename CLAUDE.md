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

- **Primary Colors**: Light sky blue (representing summer sky and energy), soft pastels (blue, white)
- **Secondary Colors**: White/cream backgrounds, neutral grays for text
- **Accent Colors**: Warm gold/yellows (representing sunshine and energy)

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
- Smooth spring transitions: transition={{ type: "spring", stiffness: 100 }}
- Loading states: Skeleton screens or spinners

## Site Structure & Pages

### 1. Homepage (トップページ) - `/`

Sections to implement:

- **Hero Section**: Large banner, headline「子どもたちの笑顔があふれる場所 ハル幼稚園」, subheadline「遊びを通して学び、成長する毎日」, CTA buttons「見学予約」「資料請求」

- **About Section**: Title「ハル幼稚園といえば『SIあそび』」
  - Content: お子様一人ひとりが、自ら考え、気づき、創意工夫する力、思考する力を養うこと（知能教育）を目的として、別教材を使用しています。お話をよく聞き、集中してお勉強というのがハル幼稚園の最大の特徴です。しからないでほめて、みんなニコニコ。『叱らない教育方法』は、20年以上の研究の成果です。「どろんこ遊び」から「英才教育」までがハル幼稚園の教育方針です。
  - SIあそび説明: 南カリフォルニア大学名誉教授、J・Pギルフォード博士の知能構造（SI）論に基づく、遊びながら知能を高める英才教育で、数や言葉、記憶力、判断力、情緒、あらゆる能力を飛躍的に高めます。

- **Features Section**: Title「3才から特別講師による指導！」
  - Grid layout (Mobile: 2 columns, Desktop: 4 columns):
    1. 絵画造形教育
    2. 英語教育
    3. プール指導
    4. 体操
    5. 声楽指導
    6. 中国語（年長5才のみ）
    7. パソコン使ってのローマ字指導(年長5才のみ)
  - Note: ※普通保育の中で行いますので、保育料は別途徴収はいたしません。

- **Facility Section**: Title「子どもたちにも大人気☆待望の新園舎が完成しました！」
  - Content: 新園舎は広くてすてき！！子供達も毎日、きれいな設備で快適に過ごしています。中庭からの明るい陽射し、子供達はちょっとした時間にも、中庭の遊具で上靴のまま遊べるので楽しそうです。また、参観や音楽会、おゆうぎ会、展覧会など、幼稚園での行事は人数制限一切なしで行えるようになりました。子供達の生き生きと楽しんでいる様子をたくさんの方にご覧いただきたいと思います！！

- **Service Section**: Title「ハル幼稚園のサービス」
  - 3 Service Cards:
    1. あずかり保育や時間外保育、スポット保育等 - お仕事や家庭の事情等にあわせて、安心してご利用いただけます。
    2. ハル幼稚園は「塾」も開講しています。- 保育時間終了後から専門の先生による課外保育で子どもたちをもっと輝かせたい
    3. 送迎バスのご案内はこちら！- 送迎バスは１８＋６コース、停留所は２２０箇所「。自宅のすぐ側まで」を基本に、毎年見直ししています。

- **News Section**: Title「お知らせ・ブログ」
  - Latest 4 posts with date, thumbnail, title, excerpt:
    1. 2024-07-07 入園説明会～新宿コクーンタワー～
    2. 2024-07-01 親子との教室参加者募集
    3. 2024-06-25 親と子の絵画教室　参加者募集
    4. 2024-06-05 幼年消防クラブ　発会式
  - "View All" button:「もっと見る」

- **Footer (Contact CTA)**: Title「お問合せ・資料請求」
  - Content: パンフレットご希望の方は郵送させていただきます
  - Contact info: TEL：03-3344-1010　（〒160-0023 東京都新宿区西新宿1-7-3）
  - Buttons:
    - 「お問い合わせ」(Tool Tip: お電話にてご請求の方)
    - 「資料請求」(Tool Tip: ホームページでご請求)

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
- Contact info: TEL, 受付時間：平日 9:00〜17:00, <info@hal-kindergarten.jp>
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
