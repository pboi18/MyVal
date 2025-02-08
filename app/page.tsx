import AnimatedBackground from "./components/AnimatedBackground";
import LoveMusic from "./components/LoveMusic";
import ValentineButtons from "./components/ValentineButtons";
import LoveCountdownTimer from "./components/LoveCountdownTimer";
import PersonalizedLoveNote from "./components/PersonalizedLoveNote";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-24 text-center relative">
      <AnimatedBackground />
      <LoveMusic />
      <div className="z-10 w-full max-w-4xl">
        <LoveCountdownTimer />
        <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">
          Will You Be My Val? ❤️✨
        </h1>
        <p className="text-lg sm:text-xl text-pink-700 mb-8">
          Love is in the Air! 💕🌸
        </p>
        <p className="text-base sm:text-lg text-purple-600 mb-8">
          Join me on this whimsical journey of love and laughter! 🎭🌈
        </p>

        <div className="mb-8 relative">
          <h2 className="text-xl sm:text-2xl font-semibold text-red-500 mb-4">
            Will you be my Valentine? 💌🌹
          </h2>
          <ValentineButtons />
        </div>

        <PersonalizedLoveNote />

        <div className="mt-8">
          <p className="text-lg sm:text-xl font-bold text-red-500">
            Let's make this Valentine's Day unforgettable! 💖🎉
          </p>
        </div>
      </div>
    </main>
  );
}
