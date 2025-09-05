# Olym3 Scan Hero Section

Một Hero Section hiện đại cho Olym3 Scan được xây dựng bằng Next.js, Tailwind CSS và DaisyUI.

## 🚀 Tính năng

- **Gradient Background**: Tông màu tối với gradient từ xám đen đến xanh cyan
- **Typography**: Tiêu đề lớn, in đậm với gradient text effect
- **Responsive Design**: Tối ưu cho cả mobile và desktop
- **Animations**: Fade-in, slide-up, hover effects và floating animations
- **CTA Buttons**: Primary và outline buttons với hover effects
- **Glass Morphism**: Hiệu ứng kính mờ cho các elements
- **Custom Theme**: DaisyUI theme tùy chỉnh cho Olym3 Scan

## 🛠️ Cài đặt và Chạy

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Start production server
npm start
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## 🎨 Tùy chỉnh

### 1. Màu sắc (Color Customization)

Trong `tailwind.config.js`, bạn có thể thay đổi màu sắc:

```javascript
colors: {
  'olym3-primary': '#00D4FF',    // Màu cyan chính
  'olym3-secondary': '#0066CC',  // Màu xanh dương
  'olym3-dark': '#0A0A0A',       // Màu đen chính
  'olym3-gray': '#1A1A1A',       // Màu xám đậm
}
```

### 2. Typography

Thay đổi font trong `tailwind.config.js`:

```javascript
fontFamily: {
  'sans': ['Inter', 'system-ui', 'sans-serif'], // Hoặc font khác
}
```

### 3. Animations

Thêm animation mới trong `tailwind.config.js`:

```javascript
animation: {
  'fade-in': 'fadeIn 0.8s ease-in-out',
  'slide-up': 'slideUp 0.8s ease-out',
  'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  'your-custom': 'yourCustom 1s ease-in-out', // Animation tùy chỉnh
}
```

### 4. Hero Content

Trong `components/Hero.jsx`, bạn có thể tùy chỉnh:

- **Tiêu đề chính**: Thay đổi text trong thẻ `<h1>`
- **Mô tả**: Thay đổi text trong thẻ `<p>`
- **CTA Buttons**: Thay đổi text và href của buttons
- **Stats**: Thay đổi số liệu trong phần stats

### 5. Background Effects

Tùy chỉnh background elements:

```jsx
{/* Thay đổi màu sắc và kích thước của các blob */}
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
```

### 6. Responsive Breakpoints

Điều chỉnh responsive design:

```jsx
{/* Thay đổi text size cho các breakpoint */}
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
```

## 🎯 Gợi ý Tối ưu

### Performance
- Sử dụng `next/image` cho images
- Lazy load các components không cần thiết
- Optimize animations với `will-change` CSS property

### SEO
- Thêm structured data
- Optimize meta tags trong `app/layout.js`
- Sử dụng semantic HTML

### Accessibility
- Thêm `alt` text cho images
- Sử dụng proper heading hierarchy
- Đảm bảo color contrast ratio

### Analytics
- Tích hợp Google Analytics
- Thêm event tracking cho CTA buttons
- Monitor Core Web Vitals

## 📱 Responsive Design

Hero section được tối ưu cho:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🔧 Cấu trúc Files

```
├── app/
│   ├── globals.css          # Global styles và custom CSS
│   ├── layout.js            # Root layout với metadata
│   └── page.js              # Home page
├── components/
│   └── Hero.jsx             # Hero section component
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## 🎨 Design System

### Colors
- **Primary**: #00D4FF (Cyan)
- **Secondary**: #0066CC (Blue)
- **Dark**: #0A0A0A (Black)
- **Gray**: #1A1A1A (Dark Gray)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Spacing
- Sử dụng Tailwind spacing scale
- Consistent padding/margin cho components

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Netlify
```bash
npm run build
# Deploy to Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📄 License

MIT License - Xem file LICENSE để biết thêm chi tiết.

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Push to branch
5. Tạo Pull Request

## 📞 Support

Nếu bạn cần hỗ trợ, vui lòng tạo issue hoặc liên hệ team Olym3 Scan.
