# ハル幼稚園 Website Requirements

## Project Overview

- **Site Name**: ハル幼稚園 (Hal Kindergarten)
- **Target Audience**: Parents of young children (0-6 years old)
- **Primary Goal**: Showcase kindergarten features and attract enrollment inquiries
- **Design Style**: Warm, friendly, professional, child-friendly

## Color Scheme

- **Primary Colors**:
  - Light sky blue (representing summer sky and energy)
  - Soft pastels (blue, white)
- **Secondary Colors**:
  - White/cream backgrounds
  - Neutral grays for text
- **Accent**:
  - Warm gold/yellows (representing sunshine and energy)

## Typography

- **Headings**: Rounded, friendly Japanese fonts (e.g., rounded Gothic)
- **Body Text**: Clean, readable sans-serif
- **Size**: Large enough for easy reading on mobile devices

## Homepage Structure (トップページ)

### 1. Hero Section

- **Large banner image**: Children playing happily at kindergarten
- **Headline**:

  ```text
  子どもたちの笑顔があふれる場所
  ハル幼稚園
  ```

- **Subheadline**:

  ```text
  遊びを通して学び、成長する毎日
  ```

- **CTA Buttons**:
  - 「見学予約」(Schedule a Visit)
  - 「資料請求」(Request Information)

### 2. About

- **Title**: ハル幼稚園といえば『SIあそび』
- **Content**:

  ```text
  お子様一人ひとりが、自ら考え、気づき、創意工夫する力、思考する力を養うこと（知能教育）を目的として、別教材を使用しています。お話をよく聞き、集中してお勉強というのがハル幼稚園の最大の特徴です。しからないでほめて、みんなニコニコ。『叱らない教育方法』は、20年以上の研究の成果です。「どろんこ遊び」から「英才教育」までがハル幼稚園の教育方針です。
  ```

  ```text
  SIあそびとは。
  南カリフォルニア大学名誉教授、J・Pギルフォード博士の知能構造（SI）論に基づく、遊びながら知能を高める英才教育で、数や言葉、記憶力、判断力、情緒、あらゆる能力を飛躍的に高めます。
  ```

### 3. Features

- **Title**: 3才から特別講師による指導！

- **Features grid** (Mobile: 2 columns, Desktop: 4 columns):
  1. **絵画造形教育**
  2. **英語教育**
  3. **プール指導**
  4. **体操**
  5. **声楽指導**
  6. **中国語（年長5才のみ）**
  7. **・パソコン使ってのローマ字指導(年長5才のみ)**

- **Note (PS.)**:

  ```text
  ※普通保育の中で行いますので、保育料は別途徴収はいたしません。
  ```

### 3. Facility

- **Title**: 子どもたちにも大人気☆待望の新園舎が完成しました！
- **Content**:
  
  ```text
  新園舎は広くてすてき！！子供達も毎日、きれいな設備で快適に過ごしています。  
  中庭からの明るい陽射し、子供達はちょっとした時間にも、中庭の遊具で上靴のまま遊べるので楽しそうです。
  また、参観や音楽会、おゆうぎ会、展覧会など、幼稚園での行事は人数制限一切なしで行えるようになりました。
  子供達の生き生きと楽しんでいる様子をたくさんの方にご覧いただきたいと思います！！
  ```

### 4. Service

- **Title**: ハル幼稚園のサービス
- **Service Grid** (3 Columns):
  1. **あずかり保育や時間外保育、スポット保育等**
     - **content**: お仕事や家庭の事情等にあわせて、安心してご利用いただけます。（リンクを設置し、「専用ページ」へ移動させて下さい）
  2. **ハル幼稚園は「塾」も開講しています。**
     - **content**: 保育時間終了後から専門の先生による課外保育で子どもたちをもっと輝かせたい（。リンクを設置し、「専用ページ」へ移動させて下さい）
  3. **送迎バスのご案内はこちら！**
     - **content**: 送迎バスは１８＋６コース、停留所は２２０箇所「。自宅のすぐ側まで」を基本に、毎年見直ししています。

### 5. News

- **Title**: 「お知らせ・ブログ」
- **Latest 3-4 posts** with:
  - Date
  - Thumbnail image
  - Title
  - Brief excerpt
- **Content**:
  - 2024-07-07 　入園説明会～新宿コクーンタワー～
  - 2024-07-01 　親子との教室参加者募集
  - 2024-06-25 　親と子の絵画教室　参加者募集
  - 2024-06-05 　幼年消防クラブ　発会式
- **"View All" button**: 「もっと見る」

### 6. Footer (Contact CTA)

- **Background**: Colorful, engaging
- **Title**: お問合せ・資料請求
- **Content**:

  ```text
  パンフレットご希望の方は郵送させていただきます
  ```

  ```text
  ＜お電話にてご請求の方＞　TEL：03-3344-1010　（〒160-0023 東京都新宿区西新宿1-7-3）
  ＜ホームページでご請求＞　こちらのページからお申し込みください。（←「サブコンテンツ」の「資料請求ページ」へリンク）
  ハル幼稚園　☎03-3344-1010
  ```

- **Buttons**:
  - 「お問い合わせ」
    - Button Title: お問い合わせ
    - Tool Tip: お電話にてご請求の方
  - 「資料請求」
    - Button Title: 資料請求
    - Tool Tip: ホームページでご請求
  
- **Contact info**: TEL：03-3344-1010　（〒160-0023 東京都新宿区西新宿1-7-3）

## Technical Requirements

### Responsive Design

- **Mobile-first approach**
- **Touch-friendly** buttons and navigation on mobile
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### Performance

- **Page load time**: < 3 seconds
- **Image optimization**: WebP format with fallbacks
- **Lazy loading**: For images below the fold
- **Minified CSS/JS**

### SEO

- **Meta tags**: Proper title, description for each page
- **Structured data**: Organization schema markup
- **Alt text**: For all images
- **Semantic HTML**: Proper heading hierarchy
- **Sitemap**: XML sitemap for search engines

### Accessibility

- **WCAG 2.1 AA compliance**
- **Keyboard navigation** support
- **Screen reader friendly**
- **Sufficient color contrast**
- **Focus indicators** on interactive elements

### Browser Support

- **Modern browsers**: Last 2 versions of Chrome, Firefox, Safari, Edge
- **Mobile browsers**: iOS Safari, Chrome Mobile

### Functionality

- **Contact form**:
  - Email notification to admin
  - Confirmation email to user
  - Form validation (client and server-side)
- **Social media sharing** buttons on blog posts
- **Smooth scrolling** for anchor links

## Design Elements

### Components

1. **Navigation**:

   - Logo on left
   - Menu items: ホーム / 園について / 教育内容 / 入園案内 / お知らせ / お問い合わせ
   - Mobile: Hamburger menu
   - Sticky header on scroll

2. **Footer**:

   - Logo and brief description
   - Quick links
   - Contact information
   - Social media icons
   - Copyright notice

3. **Buttons**:

   - **Primary CTA**: Bold, rounded corners, with hover effects
   - **Secondary**: Outlined style
   - **Icon buttons**: For social sharing

4. **Cards**:

   - Rounded corners
   - Subtle shadows
   - Hover effects (lift/scale)

5. **Images**:
   - Rounded corners throughout
   - Consistent aspect ratios
   - Overlay text where appropriate

### Animations

- **Subtle entrance animations**: Fade-in, slide-up on scroll
- **Hover effects**: Scale, color changes
- **Smooth spring transitions**: transition={{ type: "spring", stiffness: 100 }}
- **Loading states**: Skeleton screens or spinners

## Content Guidelines

### Tone of Voice

- **Warm and welcoming**
- **Professional but approachable**
- **Parent-focused**: Address parent concerns and interests
- **Positive and encouraging**

### Content Length

- **Headlines**: 10-15 characters (Japanese)
- **Descriptions**: 50-100 characters
- **Body paragraphs**: 100-200 characters
- **Keep it scannable**: Use bullet points and short paragraphs
