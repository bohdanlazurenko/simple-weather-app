# Simple Weather App

A clean and simple weather application built with Next.js 14, TypeScript, and Tailwind CSS. This app allows users to search for weather information for any city worldwide.

## Features

- Search weather by city name
- Display current temperature and weather conditions
- Show additional weather details (humidity, wind speed, feels like temperature)
- Weather icons from OpenWeatherMap
- Responsive design
- Loading states and error handling

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **OpenWeatherMap API** - Weather data provider

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root directory and add your OpenWeatherMap API key:
   ```
   OPENWEATHER_API_KEY=your_api_key_here
   ```
   To get an API key, sign up at [OpenWeatherMap](https://openweathermap.org/api).

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── weather/     # Weather API route
│   │   └── ping/        # Health check endpoint
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── search-input.tsx # City search component
│   └── weather-display.tsx # Weather display component
├── lib/
│   └── types.ts         # TypeScript type definitions
└── public/              # Static assets
```

## API Endpoints

- `GET /api/weather?city=<city_name>` - Fetch weather data for a specific city
- `GET /api/ping` - Health check endpoint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [OpenWeatherMap API](https://openweathermap.org/api)

## License

This project is open source and available under the [MIT License](LICENSE).