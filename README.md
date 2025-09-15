# PicPark Website

Full-stack SvelteKit app for PicPark - Smart Parking Sign Detection.

## Features

- 🏠 Static pages (landing, privacy, support)
- 🔌 API endpoints for parking sign analysis
- 📱 Mobile-friendly responsive design
- 🗄️ SQLite database for logging
- 🚀 Ready for Raspberry Pi deployment

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## API Endpoints

- `GET /api/hello` - Health check
- `POST /api/parking` - Analyze parking sign
- `GET /api/parking` - Get usage stats

## Deployment on Raspberry Pi

1. Build the app: `npm run build`
2. Copy `build/` folder to Pi
3. Install dependencies: `npm ci --production`
4. Start with PM2: `pm2 start build/index.js --name picpark`
5. Configure Nginx reverse proxy to port 3000

## Database

Uses SQLite for lightweight logging. Database file created automatically on first run.