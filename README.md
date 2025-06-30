# Sticker Canvas Studio

A beautiful, interactive sticker canvas application built with React and react-konva for the MyEra Frontend Internship mini-task.

## 🎨 Features

### Core Functionality
- **Interactive Canvas**: 600×400 pixel canvas for sticker placement
- **Sticker Library**: Three emoji stickers (😀, 🎉, ⭐) with one-click addition
- **Drag & Drop**: Smooth dragging of stickers within canvas boundaries
- **PNG Export**: High-quality download of your canvas creation

### Bonus Features
- **Double-Click Deletion**: Remove stickers with a double-click
- **Grid Snapping**: 40px grid alignment for precise positioning
- **Grid Overlay**: Toggle grid visibility for better alignment
- **Canvas Tools**: Clear all stickers with confirmation

### Design Highlights
- Modern gradient background and card-based layout
- Smooth hover animations and micro-interactions
- Responsive design that works on all screen sizes
- Professional typography and color system
- Shadow effects and rounded corners for depth

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd myera-sticker-canvas
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Built With

- **React 18** - UI framework with hooks and functional components
- **react-konva** - React wrapper for Konva 2D canvas library
- **Konva** - High-performance 2D canvas library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **TypeScript** - Type safety and better developer experience
- **Lucide React** - Beautiful, customizable icons

## 📱 How to Use

1. **Add Stickers**: Click any sticker button in the sidebar to add it to the canvas
2. **Move Stickers**: Drag stickers around the canvas to position them
3. **Delete Stickers**: Double-click any sticker to remove it
4. **Grid Alignment**: Toggle the grid to see alignment guides
5. **Download**: Click "Download PNG" to save your creation
6. **Clear Canvas**: Use "Clear Canvas" to start over

## 🎯 Technical Implementation

### State Management
- Uses React's `useState` for managing sticker array
- Each sticker has unique ID, emoji, position (x, y), and scale properties
- Grid snapping rounds positions to nearest 40px intervals

### Canvas Rendering
- Konva Stage component creates the main canvas area
- Layer component organizes stickers and grid elements
- Text components render emoji stickers with shadows and hover effects

### User Interactions
- Click handlers for adding stickers
- Drag event handlers with boundary constraints
- Double-click handlers for deletion with immediate feedback
- Hover states and cursor changes for better UX

### Export Functionality
- Uses Konva's `toDataURL()` method for high-quality PNG export
- Creates temporary download link with timestamp filename
- 2x pixel ratio for crisp, high-resolution output

## 📁 Project Structure

```
src/
├── components/
│   ├── Canvas.tsx          # Main canvas component with Konva Stage
│   ├── StickerItem.tsx     # Individual sticker rendering and interactions
│   └── StickerButton.tsx   # Sticker selection buttons with animations
├── App.tsx                 # Main application component and state management
├── main.tsx               # React DOM rendering entry point
└── index.css              # Tailwind CSS imports and global styles
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6) for interactive elements
- **Secondary**: Purple (#8B5CF6) for accents
- **Success**: Green (#10B981) for positive actions
- **Error**: Red (#EF4444) for destructive actions
- **Neutral**: Grays for text and backgrounds

### Typography
- Modern system font stack for optimal readability
- Clear hierarchy with appropriate font weights
- Consistent spacing and line heights

### Animations
- Smooth 200ms transitions for all interactive elements
- Scale transforms on button press for tactile feedback
- Hover effects with color and transform changes

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📈 Performance Considerations

- Efficient re-rendering with proper React key props
- Konva's optimized canvas rendering for smooth interactions
- Minimal state updates during drag operations
- Lazy loading of canvas elements

## 🎭 Demo

The application demonstrates:
- Intuitive sticker placement and arrangement
- Smooth drag interactions with visual feedback
- Professional UI design with attention to detail
- Export functionality for sharing creations

## 📄 License

This project is created for the MyEra Frontend Internship evaluation.

## 👨‍💻 Author

Created with ❤️ for the MyEra Frontend Internship mini-task.