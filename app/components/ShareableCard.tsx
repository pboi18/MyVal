"use client"

import type React from "react"
import { useRef, useState } from "react"
import { toPng } from "html-to-image"

const ShareableCard: React.FC<{ name: string; loveNote: string }> = ({ name, loveNote }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  const generateImage = async () => {
    if (cardRef.current) {
      const dataUrl = await toPng(cardRef.current, {
        fontEmbedCSS: `
          @font-face {
            font-family: 'LocalInter';
            src: url('/fonts/Inter-Regular.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
          }
        `,
        style: {
          fontFamily: "LocalInter, sans-serif",
        },
      })
      setImageUrl(dataUrl)
    }
  }

  const loveEmojis = ["❤️", "💖", "💕", "💘", "💓", "💗", "💞", "💝", "😍", "🥰"]

  return (
    <div className="mb-8">
      <div
        ref={cardRef}
        className="bg-red-100 p-6 rounded-lg shadow-md mb-4 flex flex-col justify-between"
        style={{ width: "300px", height: "400px", fontFamily: "Inter, sans-serif" }}
      >
        <div>
          <h3 className="text-2xl font-bold text-red-600 mb-4">Will You Be My Valentine{name ? `, ${name}` : ""}? ❤️</h3>
          <p className="text-purple-600 mb-4">{loveNote}</p>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {loveEmojis.map((emoji, index) => (
            <span key={index} className="text-3xl m-1">
              {emoji}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={generateImage}
        >
          Generate Image
        </button>
      </div>
      {imageUrl && (
        <div className="mt-4 text-center">
          <a href={imageUrl} download="valentine-card.png" className="text-blue-500 underline">
            Download Card Image
          </a>
        </div>
      )}
    </div>
  )
}

export default ShareableCard

