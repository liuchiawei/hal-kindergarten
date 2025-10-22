# ハル幼稚園 Website Requirements

## Project Overview
- **Site Name**: ハル幼稚園 (Hal Kindergarten)
- **Target Audience**: Parents of young children (0-6 years old)
- **Primary Goal**: Showcase kindergarten features and attract enrollment inquiries
- **Design Style**: Warm, friendly, professional, child-friendly

## Color Scheme
- **Primary Colors**:
  - Warm yellows/oranges (representing sunshine and energy)
  - Soft pastels (pink, blue, green)
- **Secondary Colors**:
  - White/cream backgrounds
  - Neutral grays for text
- **Accent**: Bright colors for CTAs and highlights

## Typography
- **Headings**: Rounded, friendly Japanese fonts (e.g., rounded Gothic)
- **Body Text**: Clean, readable sans-serif
- **Size**: Large enough for easy reading on mobile devices

## Page Structure

### 1. Homepage (トップページ)

#### Hero Section
- **Large banner image**: Children playing happily at kindergarten
- **Headline**:
  ```
  子どもたちの笑顔があふれる場所
  ハル幼稚園
  ```
- **Subheadline**:
  ```
  遊びを通して学び、成長する毎日
  ```
- **CTA Buttons**:
  - 「見学予約」(Schedule a Visit)
  - 「資料請求」(Request Information)

#### About Section
- **Title**: 「ハル幼稚園について」
- **Content**:
  ```
  私たちハル幼稚園は、子どもたち一人ひとりの個性を大切にし、
  遊びを通じて豊かな心と健やかな体を育む教育を実践しています。
  経験豊富な先生たちと、広々とした園庭で、お子様の成長を
  全力でサポートします。
  ```
- **Features grid** (3 columns):
  1. **少人数制クラス**
     - Icon: Group of children
     - Text: 「一人ひとりに寄り添う丁寧な保育」
  2. **充実した設備**
     - Icon: Building/playground
     - Text: 「安全で広々とした園庭と教室」
  3. **経験豊富な教員**
     - Icon: Teacher
     - Text: 「資格を持ったプロの先生たち」

#### Programs Section
- **Title**: 「教育プログラム」
- **Program cards** (4 items with images):
  1. **自然体験活動**
     - Description: 「季節ごとの自然観察や野菜の栽培を通じて、生命の大切さを学びます」
  2. **音楽とリズム**
     - Description: 「歌やダンス、楽器演奏で表現力と感性を育てます」
  3. **創作活動**
     - Description: 「絵画や工作で創造力と手先の器用さを養います」
  4. **運動プログラム**
     - Description: 「体操や外遊びで健康な体づくりをサポートします」

#### Daily Schedule Section
- **Title**: 「一日の流れ」
- **Timeline format**:
  ```
  9:00  - 登園・自由遊び
  10:00 - 朝の会
  10:30 - 設定保育（活動）
  12:00 - 昼食
  13:00 - 自由遊び
  14:00 - 帰りの会
  14:30 - 降園
  ```

#### Testimonials Section
- **Title**: 「保護者の声」
- **3 testimonial cards** with:
  - Parent photo (or avatar)
  - Quote text (150-200 characters)
  - Parent name (e.g., 「年中組 保護者様」)

#### News/Blog Section
- **Title**: 「お知らせ・ブログ」
- **Latest 3-4 posts** with:
  - Date
  - Thumbnail image
  - Title
  - Brief excerpt
- **"View All" button**: 「もっと見る」

#### Contact CTA Section
- **Background**: Colorful, engaging
- **Text**:
  ```
  見学・入園のご相談はお気軽に
  ```
- **Buttons**:
  - 「見学予約」
  - 「お問い合わせ」
- **Contact info**: Phone number, business hours

### 2. About Page (園について)

#### Sections:
1. **Our Philosophy** (教育理念)
   - Full description of educational approach
   - Values and mission statement

2. **Facilities** (施設紹介)
   - Photo gallery of:
     - Classrooms (教室)
     - Playground (園庭)
     - Gymnasium (体育館)
     - Library corner (図書コーナー)
   - Each with description

3. **Staff Introduction** (先生紹介)
   - Director message
   - Teacher profiles (photos + brief intro)

4. **Access** (アクセス)
   - Embedded Google Map
   - Address: 「〒XXX-XXXX 東京都○○区○○ X-X-X」
   - Transportation info
   - Parking availability

### 3. Programs Page (教育内容)

#### Detailed program descriptions:
- **Age-based curriculum** (年齢別カリキュラム)
  - 3-year-olds
  - 4-year-olds
  - 5-year-olds
- **Special activities** (特別活動)
- **Annual events** (年間行事)
  - Monthly calendar view or timeline

### 4. Admissions Page (入園案内)

#### Content:
1. **Enrollment Process** (入園の流れ)
   - Step-by-step guide with timeline

2. **Requirements** (入園資格)
   - Age requirements
   - Documents needed

3. **Fees** (費用について)
   - Entrance fee (入園料)
   - Monthly tuition (月謝)
   - Other fees (その他費用)
   - Table format for clarity

4. **Schedule Tour CTA**
   - 「見学予約はこちら」button

### 5. News/Blog Page (お知らせ)

#### Features:
- **Category filtering**:
  - お知らせ (News)
  - 行事 (Events)
  - 日常 (Daily Life)
- **Post list** with:
  - Date
  - Category tag
  - Featured image
  - Title
  - Excerpt
- **Pagination** or infinite scroll
- **Individual post template**:
  - Hero image
  - Title and date
  - Full content
  - Related posts

### 6. Contact Page (お問い合わせ)

#### Elements:
1. **Contact Form**:
   - Fields:
     - お名前 (Name) *required*
     - メールアドレス (Email) *required*
     - 電話番号 (Phone)
     - お問い合わせ種別 (Inquiry Type) - dropdown
     - メッセージ (Message) *required*
   - Submit button: 「送信する」
   - Privacy policy checkbox

2. **Contact Information**:
   - Phone: 「TEL: XXX-XXXX-XXXX」
   - Hours: 「受付時間：平日 9:00〜17:00」
   - Email: 「info@hal-kindergarten.jp」

3. **Map**: Embedded Google Maps

## Technical Requirements

### Responsive Design
- **Mobile-first approach**
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Touch-friendly** buttons and navigation on mobile

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
- **Google Maps integration**
- **Social media sharing** buttons on blog posts
- **Smooth scrolling** for anchor links

### CMS Requirements
- **Easy content editing** for non-technical staff
- **Blog post management**:
  - WYSIWYG editor
  - Category management
  - Featured image upload
- **Photo gallery** management
- **Form submission** tracking

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
- **Smooth transitions**: 0.3s ease
- **Loading states**: Skeleton screens or spinners

### Icons
- **Consistent icon set** (e.g., Material Icons, Font Awesome)
- **Used for**:
  - Features
  - Contact methods
  - Social media
  - Navigation icons

## Content Guidelines

### Photography
- **Style**: Bright, natural, candid shots of children
- **Subjects**:
  - Children playing and learning
  - Teachers interacting with students
  - Facilities and outdoor spaces
  - Seasonal activities
- **Quality**: High-resolution, professional photography
- **Privacy**: Obtain parent consent for child photos

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

## Additional Features (Optional)

### Nice-to-Have
1. **Virtual tour**: 360° photos or video walkthrough
2. **Online application**: Digital enrollment forms
3. **Parent portal**: Login area for current parents
4. **Event calendar**: Interactive calendar with upcoming events
5. **Multi-language support**: English version for international families
6. **Newsletter signup**: Email subscription form
7. **FAQ section**: Common questions and answers
8. **Video content**: Day-in-the-life videos, teacher messages

## Deliverables

1. **Fully responsive website** (mobile, tablet, desktop)
2. **CMS setup** with documentation
3. **Contact form** with email integration
4. **Google Analytics** integration
5. **Source files** and documentation
6. **Browser testing** report
7. **Performance optimization** report
8. **Training session** for content management

## Timeline Expectations
- **Design phase**: 2-3 weeks
- **Development phase**: 4-6 weeks
- **Content population**: 1-2 weeks
- **Testing and revisions**: 1-2 weeks
- **Total**: 8-13 weeks

## Success Metrics
- **Increased inquiries**: 30% increase in contact form submissions
- **Lower bounce rate**: < 40% on homepage
- **Mobile traffic**: > 60% of visitors on mobile devices
- **Page speed**: Score > 85 on Google PageSpeed Insights
- **Accessibility**: WCAG 2.1 AA compliance verified
