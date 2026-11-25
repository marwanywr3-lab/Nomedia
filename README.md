# نوميديا (NoMedia) — PWA

تطبيق ويب تقدمي (PWA) أحادي الصفحة لتحدي 7 أيام بدون سوشال ميديا (25 نوفمبر – 1 ديسمبر 2026)، مبني بـ React وVite وTailwind CSS وLucide Icons، ومهيأ بالكامل للنشر على GitHub Pages.

## التشغيل محلياً
```bash
npm install
npm run dev
```

## النشر على GitHub Pages
1. ارفع ملفات المشروع إلى مستودع GitHub (فرع `main`).
2. من إعدادات المستودع: **Settings → Pages → Build and deployment → Source** اختر **GitHub Actions**.
3. عند أي Push على `main` سيقوم ملف `.github/workflows/deploy.yml` تلقائياً ببناء المشروع (`npm run build`) ونشر مجلد `dist/` باستخدام `base: './'`.
4. للتثبيت كتطبيق (PWA) على الجوال: افتح رابط الموقع في Chrome أو Safari واضغط زر **تثبيت التطبيق** في الشريط العلوي (أو Add to Home Screen).
