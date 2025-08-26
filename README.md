# Razorpay Affiliate Dashboard

A modern, responsive affiliate dashboard built with Next.js and Tailwind CSS, replicating the Razorpay affiliate interface with real-time earnings tracking, performance analytics, and ranking systems.

![Razorpay Dashboard](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dashboard-briRzOC9eeRvMzKd8vPdnXsYLYMg3D.png)

## Features

- **📊 Earnings Analytics**: Track all-time earnings, paid amounts, and recent performance
- **📈 Interactive Charts**: Visual representation of earnings trends and performance metrics
- **🏆 Ranking System**: Real-time affiliate rankings with leaderboard
- **⏰ Countdown Timer**: Next level progression tracking
- **📱 Responsive Design**: Optimized for desktop and mobile devices
- **🎨 Dark Theme**: Modern dark UI with custom color scheme
- **📅 Calendar Integration**: Date selection and filtering capabilities

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd razorpay-dashboard
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main dashboard page
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── sidebar.tsx         # Navigation sidebar
│   ├── dashboard-content.tsx # Main dashboard content
│   ├── earnings-insights.tsx # Earnings metrics cards
│   ├── earning-level.tsx   # Weekly earning chart
│   ├── your-rank.tsx       # Ranking and leaderboard
│   └── total-earning.tsx   # Revenue trend chart
├── lib/
│   └── utils.ts            # Utility functions
└── public/
    └── images/             # Static assets and avatars
\`\`\`

## Key Components

### Dashboard Layout
- **Sidebar**: Navigation menu with affiliate tools and settings
- **Main Content**: Earnings insights, charts, and performance metrics
- **Header**: User greeting, countdown timer, and profile menu

### Data Visualization
- **Earnings Cards**: All-time, paid, 30-day, and 7-day metrics
- **Bar Chart**: Weekly earning levels with interactive tooltips
- **Line Chart**: Monthly revenue trends with area fill
- **Ranking Table**: Top affiliates leaderboard

## Customization

### Colors
The dashboard uses a custom dark theme with specific color codes:
- Background: `#171821`
- Card Background: `#21222D`
- Primary Accent: Teal/Mint green gradients

### Fonts
- **Primary**: Geist Sans for UI elements
- **Monospace**: Geist Mono for data display

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket
2. Visit [vercel.com](https://vercel.com) and import your repository
3. Vercel will automatically detect Next.js and deploy your app
4. Your dashboard will be live with automatic deployments on every push

### Alternative Deployment Options

- **Netlify**: Connect your Git repository for automatic deployments
- **Railway**: Simple deployment with Git integration
- **DigitalOcean App Platform**: Scalable hosting solution

## Performance Features

- **Server-Side Rendering**: Fast initial page loads
- **Static Generation**: Optimized build output
- **Image Optimization**: Automatic image compression and lazy loading
- **Code Splitting**: Efficient bundle loading
- **Responsive Design**: Mobile-first approach

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspired by Razorpay's affiliate dashboard
- Built with [shadcn/ui](https://ui.shadcn.com/) components
- Charts powered by [Recharts](https://recharts.org/)
- Icons from [Lucide](https://lucide.dev/)

---

**Note**: This is a UI recreation for educational purposes. It is not affiliated with or endorsed by Razorpay.
