# SERIAL TRACE — Gemini Backend Integration

## التشغيل

1. انسخ `.env.example` إلى `.env`.
2. ضع مفتاح Gemini في `GEMINI_API_KEY`.
3. افتح Terminal داخل هذا المجلد.
4. نفّذ:

```powershell
npm.cmd install
```

5. شغّل:

```powershell
node server.js
```

6. افتح:

http://localhost:3000

## ما تم تغييره

- تم نقل القضايا الـ60 إلى `data/cases.json` على السيرفر.
- `solution` و`requiredEvidence` و`explanation` لا تُرسل إلى المتصفح.
- مساعد التحقيق يتصل بـ Gemini عبر `/api/assistant`.
- استجواب المشتبهين يتصل بـ Gemini عبر `/api/interrogate`.
- الاتهام النهائي يتم التحقق منه على السيرفر عبر `/api/accuse`.
- Google Search مفعّل لمساعد التحقيق للمعلومات الخارجية عند الحاجة.
- `index.html` يستخدم نفس واجهة اللعبة الحالية بدل إنشاء واجهة جديدة.
