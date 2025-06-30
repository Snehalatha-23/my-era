# 🖼️ Sticker Canvas Studio

An interactive, creative, and beautifully crafted canvas app built using **React**, **TypeScript**, and **react-konva** for the **MyEra Frontend Internship mini-task**. Place, move, delete, and export vibrant emoji stickers with pixel-perfect precision on a dynamic 2D canvas.

> 🔥 Designed & Developed with ❤️ by **Sneha Latha Medasari**

🌐 **Live Demo**: [my-era.vercel.app](https://my-era.vercel.app)

---

## 🎨 Features

### 🔧 Core Functionality
- **Interactive Canvas** – 600×400 pixel sticker-friendly zone
- **Emoji Sticker Palette** – Add stars, smiles, and confetti (⭐ 😃 🎉)
- **Drag & Drop** – Move stickers around with smooth interactions
- **Export as PNG** – Download your masterpiece with one click

### 🎁 Bonus Capabilities
- ✨ **Double-Click to Delete** – Clean up your canvas instantly
- 🧲 **Snap to 40px Grid** – Achieve pixel-perfect alignment
- 🧰 **Canvas Controls** – Clear all stickers with a confirmation prompt
- 📏 **Optional Grid Overlay** – Visual snapping guide for pros

---

## 🧰 Tech Stack

| Layer         | Tools Used                                   |
|---------------|-----------------------------------------------|
| Framework     | React (with Vite)                             |
| Drawing       | Konva & react-konva                           |
| Styling       | Tailwind CSS                                  |
| Icons         | Lucide React                                  |
| Language      | TypeScript                                     |
| Deployment    | Vercel                                         |

---

## 🚀 How to Run Locally

### ⚙️ Prerequisites:
- Node.js ≥ 14.x
- npm or yarn

### 🛠️ Steps:
```bash
git clone https://github.com/Snehalatha-23/my-era.git
cd my-era
npm install
npm run dev
Open your browser: http://localhost:5173

💡 Usage Guide
➕ Add a Sticker: Click any emoji from the sidebar

🎯 Move It: Drag to desired location on the canvas

❌ Remove It: Double-click the sticker to delete

🧲 Snap It: Align to grid for precision

💾 Download Art: Hit "Download PNG" to save your layout

🧹 Clear Canvas: Reset everything with one tap

🧱 Project Structure
perl
Copy
Edit
my-era/
├── src/
│   ├── components/
│   │   ├── Canvas.tsx          # Konva stage and logic
│   │   ├── StickerButton.tsx   # Buttons to add emoji
│   │   └── StickerItem.tsx     # Individual sticker logic
│   ├── App.tsx                 # State management & layout
│   ├── main.tsx                # Entry point
│   └── index.css               # Tailwind styles
├── public/
│   └── assets/                 # Optional sticker PNGs
├── package.json
└── README.md
🎨 Design Aesthetics
🎨 Gradient backgrounds for a modern look

📐 Grid overlay to guide precision

🧠 Intuitive UX with hover/click feedback

🪄 Micro-animations for interactivity

💎 Clean shadows & rounded corners

📦 Development Scripts
bash
Copy
Edit
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production locally
npm run lint     # Lint your code
📸 Demo Gallery
(Add screenshots or Loom video link here)

👩‍💻 Creator
Sneha Latha Medasari
📧 medasarisneha@gmail.com
🌐 Portfolio
🔗 GitHub
🔗 LinkedIn

📄 License
This project is developed as part of the MyEra Frontend Internship mini-task and is shared for evaluation, learning, and creativity purposes.

✨ Inspiration
Thanks to the Konva and React ecosystems for enabling such magical web canvas interactions.
Inspired by the joy of digital expression and precision design.
