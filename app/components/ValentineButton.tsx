"use client"

import { useState } from "react"

export default function ValentineButton() {
  const [response, setResponse] = useState<string | null>(null)

  const handleAccept = () => {
    setResponse("Yay! 🎉 Let's make this Valentine's Day amazing!")
  }

  const handleDecline = () => {
    setResponse("Oh no! 😢 Maybe next time?")
  }

  if (response) {
    return <p className="text-xl font-bold text-purple-600">{response}</p>
  }

  return (
    <div className="space-x-4">
      <button
        onClick={handleAccept}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Yes, I'd love to! 😍
      </button>
      <button
        onClick={handleDecline}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition duration-300"
      >
        No, thank you 😔
      </button>
    </div>
  )
}

