"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RefreshCw } from "lucide-react"

const noMessages = [
  "Are you sure? 🤔",
  "Really? 😮",
  "Think again! 🧐",
  "Last chance! ⏳",
  "Pretty please? 🙏",
  "Don't break my heart! 💔",
  "You can't resist! 😉",
  "Change of heart? 🥺",
  "But we're perfect! 👌",
  "Give love a chance! 🌟",
]

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

const ValentineButtons: React.FC = () => {
  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false)
  const [loveQuote, setLoveQuote] = useState("")

  const yesWidth = 50 + noCount * 10 // Starts at 50%, increases by 10% each click
  const noWidth = Math.max(50 - noCount * 10, 0) // Starts at 50%, decreases by 10% each click

  const handleNoClick = () => {
    if (noCount < 5) {
      setNoCount(noCount + 1)
    }
  }

  const handleYesClick = () => {
    setYesPressed(true)
    const randomQuote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)]
    setLoveQuote(randomQuote)
  }

  const handleReset = () => {
    setNoCount(0)
    setYesPressed(false)
    setLoveQuote("")
  }

  if (yesPressed) {
    return (
      <div className="text-center w-full">
        <h2 className="text-3xl font-bold text-red-600 mb-4">My Heart Overflows with Joy! 💖✨</h2>
        <p className="text-xl text-pink-500 mb-8">You've made me the happiest person in the world! 🌹💑</p>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <p className="text-lg text-purple-600 italic">&ldquo;{loveQuote}&rdquo;</p>
        </div>
        <button
          onClick={handleReset}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        >
          Reset and Fall in Love Again 💞
        </button>
      </div>
    )
  }

  return (
    <div className="w-full relative">
      <button
        onClick={handleReset}
        className="absolute -top-12 -left-4 bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full focus:outline-none focus:shadow-outline"
        aria-label="Reset"
      >
        <RefreshCw size={24} />
      </button>
      <div className="mb-4 h-16 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {noCount > 0 && (
            <motion.div
              key={noCount}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-xl font-semibold text-purple-600"
            >
              {noMessages[(noCount - 1) % noMessages.length]}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex justify-center items-stretch w-full gap-4 mb-4 h-[200px]">
        <motion.button
          className="bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg focus:outline-none focus:shadow-outline flex items-center justify-center"
          style={{ width: `${yesWidth}%` }}
          animate={{ width: `${yesWidth}%` }}
          transition={{ duration: 0.3 }}
          onClick={handleYesClick}
        >
          <span className="text-2xl">Yes! 💖</span>
        </motion.button>

        <AnimatePresence>
          {noCount < 5 && (
            <motion.button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-lg focus:outline-none focus:shadow-outline flex items-center justify-center"
              style={{ width: `${noWidth}%` }}
              animate={{ width: `${noWidth}%` }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleNoClick}
            >
              <span className="text-2xl">No 💔</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default ValentineButtons

