import React from "react"

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100 to-red-100"></div>
      {[...Array(30)].map((_, i) => (
        <React.Fragment key={i}>
          <Heart
            className={`absolute animate-float-${(i % 5) + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2.5}s`,
            }}
          />
          <Flower
            className={`absolute animate-float-${(i % 5) + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2.5}s`,
            }}
          />
        </React.Fragment>
      ))}
    </div>
  )
}

const Heart: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="#FFB6C1"
    />
  </svg>
)

const Flower: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="4" fill="#FFD700" />
    <circle cx="12" cy="6" r="2" fill="#FF69B4" />
    <circle cx="12" cy="18" r="2" fill="#FF69B4" />
    <circle cx="6" cy="12" r="2" fill="#FF69B4" />
    <circle cx="18" cy="12" r="2" fill="#FF69B4" />
  </svg>
)

export default AnimatedBackground

