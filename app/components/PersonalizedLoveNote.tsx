"use client"

import type React from "react"
import { useState } from "react"
import ShareableCard from "./ShareableCard"

const loveQuotes = [
  "Your love is my greatest adventure. 💖",
  "With you, every day feels like Valentine's. 💕",
  "You're the missing piece to my heart's puzzle. 💘",
  "Our love story is my favorite. 💓",
  "You make my heart smile. 😍",
  "In a world full of change, you are my constant. 🌟",
  "Every love story is beautiful, but ours is my favorite. 📚❤️",
  "I fell in love with you because of all the small things you don't even realize you're doing. 🥰",
  "You're not just my Valentine, you're my everything. 🌍💑",
  "Life with you is like a beautiful dream I never want to wake up from. 💤💖",
  "Your love is the best part of my day, every day. ☀️❤️",
  "I love you more than pizza, and that's saying a lot! 🍕💘",
  "You're the peanut butter to my jelly, the cheese to my macaroni. 🥜🧀",
  "I'm yours, no refunds. 🏷️❤️",
  "You had me at 'hello'... and you still have me. 👋💕",
]

const PersonalizedLoveNote: React.FC = () => {
  const [name, setName] = useState("")
  const [note, setNote] = useState("")
  const [generatedNote, setGeneratedNote] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const generateLoveNote = () => {
    if (!name) {
      setError("Please enter a name first!")
      return
    }
    setIsGenerating(true)
    setError(null)

    try {
      const randomQuote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)]
      setGeneratedNote(`${name}, ${randomQuote}`)
    } catch (error) {
      setError("Failed to generate love note. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  const useGeneratedNote = () => {
    setNote(generatedNote)
  }

  return (
    <div className="bg-pink-100 p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-2xl font-bold text-red-600 mb-4">Personalized Love Note 💌</h3>
      <input
        type="text"
        className="w-full p-2 mb-4 border border-pink-300 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your Valentine's name..."
      />
      <textarea
        className="w-full p-2 mb-4 border border-pink-300 rounded"
        rows={4}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your personalized love note here..."
      />
      <div className="flex justify-between mb-4">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={generateLoveNote}
          disabled={isGenerating}
        >
          {isGenerating ? "Generating..." : "Generate Love Note"}
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
          onClick={useGeneratedNote}
          disabled={!generatedNote}
        >
          Use Generated Note
        </button>
      </div>
      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
          <p>{error}</p>
        </div>
      )}
      {generatedNote && (
        <div className="mt-4 p-3 bg-white rounded">
          <div className="text-purple-600">
            <p>{generatedNote}</p>
          </div>
        </div>
      )}
      <ShareableCard name={name} loveNote={note} />
    </div>
  )
}

export default PersonalizedLoveNote

