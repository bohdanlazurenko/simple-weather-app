import { WeatherData } from '@/lib/types'

interface WeatherDisplayProps {
  data: WeatherData
}

export default function WeatherDisplay({ data }: WeatherDisplayProps) {
  const iconUrl = `https://openweathermap.org/img/wn/${data.icon}@4x.png`

  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          {data.city}, {data.country}
        </h2>
        <p className="text-gray-600 capitalize">{data.description}</p>
      </div>

      <div className="flex items-center justify-center mb-8">
        <img
          src={iconUrl}
          alt={data.description}
          className="w-32 h-32"
        />
        <div className="ml-6">
          <p className="text-6xl font-bold text-gray-800">{data.temperature}°C</p>
          <p className="text-gray-600">Feels like {data.feelsLike}°C</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-gray-600 text-sm">Humidity</p>
          <p className="text-2xl font-semibold text-blue-600">{data.humidity}%</p>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-gray-600 text-sm">Wind Speed</p>
          <p className="text-2xl font-semibold text-green-600">{data.windSpeed} m/s</p>
        </div>
      </div>
    </div>
  )
}