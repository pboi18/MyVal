"use client"

import type React from "react"
import { useState, useEffect } from "react"

const LoveCountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-02-14T00:00:00") // Valentine's Day
    const startDate = new Date("2025-02-07T00:00:00") // Today (February 7th)

    const timer = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-pink-100 p-4 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-red-600 mb-2">Time to Valentine's Day 💘</h2>
      <div className="flex justify-center space-x-4">
        <div className="text-center">
          <span className="text-3xl font-bold text-pink-600">{timeLeft.days}</span>
          <p className="text-sm text-gray-600">Days</p>
        </div>
        <div className="text-center">
          <span className="text-3xl font-bold text-pink-600">{timeLeft.hours}</span>
          <p className="text-sm text-gray-600">Hours</p>
        </div>
        <div className="text-center">
          <span className="text-3xl font-bold text-pink-600">{timeLeft.minutes}</span>
          <p className="text-sm text-gray-600">Minutes</p>
        </div>
        <div className="text-center">
          <span className="text-3xl font-bold text-pink-600">{timeLeft.seconds}</span>
          <p className="text-sm text-gray-600">Seconds</p>
        </div>
      </div>
    </div>
  )
}

export default LoveCountdownTimer

