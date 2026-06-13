# Auth UI 🌌

A sleek, animated login and signup interface built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies, just clean front-end code.

## ✨ Features

- 🔐 Login form with email & password fields
- 📝 Signup form with name, email, password, and confirm password
- 🔗 Seamless navigation between Login and Sign Up pages
- ⚠️ Real-time form validation with inline error messages
- 🔄 Live password strength meter
- 🎨 Animated gradient background with floating blobs
- 💎 Glassmorphism-style cards
- ✨ Smooth transitions, ripple button effects, and toast notifications
- 📱 Fully responsive design

## 📂 File Structure

```
├── login.html      # Login page
├── signup.html     # Sign up page
├── style.css       # Shared styles, theme, and animations
└── script.js       # Form validation and interactive behavior
```

## 🚀 Getting Started

No installation or build steps required.

1. Clone or download this repository
2. Open `login.html` in your browser
3. Navigate to `signup.html` using the link on the page

```bash
git clone https://github.com/your-username/aurora-auth-ui.git
cd aurora-auth-ui
open login.html
```

## 🛠️ Tech Stack

- HTML5
- CSS3 (custom properties, animations, glassmorphism)
- Vanilla JavaScript (ES6+)

## 📋 Validation Rules

| Field | Rule |
|---|---|
| Email | Required, valid email format |
| Login Password | Required, min 6 characters |
| Signup Password | Required, min 8 characters |
| Confirm Password | Must match password |
| Full Name | Required, min 2 characters |
| Terms Checkbox | Must be checked |

## 🎨 Customization

Colors, gradients, and animation timings are defined as CSS custom properties at the top of `style.css` — tweak `:root` variables to create your own theme.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
