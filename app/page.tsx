'use client'

import { useState } from 'react'
import WeatherDisplay from '@/components/weather-display'
import SearchInput from '@/components/search-input'

export default function Home() {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async (searchCity: string) => {
    if (!searchCity.trim()) return

    setLoading(true)
    setError('')
    setWeatherData(null)

    try {
      const response = await fetch(`/api/weather?city=${encodeURIComponent(searchCity)}`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch weather data')
      }

      const data = await response.json()
      setWeatherData(data)
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Simple Weather App
        </h1>
        
        <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
          <SearchInput onSearch={handleSearch} loading={loading} />
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {loading && (
          <div className="text-center text-white">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            <p className="mt-2">Loading weather data...</p>
          </div>
        )}

        {weatherData && !loading && (
          <WeatherDisplay data={weatherData} />
        )}

        {!weatherData && !loading && !error && (
          <div className="text-center text-white mt-16">
            <p className="text-xl">Enter a city name to get weather information</p>
          </div>
        )}
      </div>
    </main>
  )
}