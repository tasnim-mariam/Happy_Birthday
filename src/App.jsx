import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Flower2, Sparkles, ArrowRight, Music } from 'lucide-react';

// --- YOUR CONTENT HERE ---
const pages = [
  {
    id: 1,
    heading: " Happy Birthday,Bandhubi! 🌸",
    text: "I love youuuuuu😍",
    image: "/photo1.jpeg" 
  },
  {
    id: 2,
    heading: " I love you more than words can say",
    text: "and I know we’ll continue to make unforgettable memories together. ✨",
    image: "/photo2.jpeg"
  },
  {
    id: 3,
    heading: "Your friendship means the world to me",
    text: "and I’m so grateful to have you by my side.🌷",
    image: "/photo3.jpeg"
  },
  {
    id: 4,
    heading: "We've been through it all together—ups and downs,",
    text: " laughter and tears, and every little moment in between.",
    image: "/photo4.jpeg"
  },
  {
    id: 5,
    heading: "Again Happy Birthday to the one who holds a special place in my heart!",
    text: "Here's to many more years of laughter, support, and love baby🥹",
    image: "/photo5.jpeg"  }
];

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef(null);

  const handleEnter = () => {
    setHasEntered(true);
    // Play the music as soon as she clicks
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // 40% volume so it's sweet and in the background
      audioRef.current.play();
    }
  };

  const handleNext = () => {
    if (currentIndex < pages.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
  };

  return (
    <div className="min-h-screen bg-cozy-pink flex items-center justify-center p-4 font-sans text-deep-rose relative overflow-hidden">
      
      {/* Hidden Audio Player */}
      <audio ref={audioRef} src="/birthday-song.mp3" loop />

      {/* Background Decorative Elements */}
      <Flower2 className="absolute top-10 left-10 text-floral-rose opacity-50 w-24 h-24 animate-pulse" />
      <Sparkles className="absolute bottom-20 right-10 text-floral-rose opacity-50 w-16 h-16 animate-pulse" />
      <Heart className="absolute top-20 right-20 text-floral-rose opacity-30 w-12 h-12" />

      <div className="w-full max-w-md relative z-10">
        <AnimatePresence mode="wait">
          
          {!hasEntered ? (
            /* ENTRANCE SCREEN */
            <motion.div
              key="entrance"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center text-center space-y-6 bg-pink-300 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-pink-400"
            >
              <div className="relative">
                <Heart className="w-20 h-20 text-pink-900 animate-pulse" fill="currentColor" />
                <Flower2 className="w-6 h-6 text-pink-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div>
              
                <h1 className="text-3xl font-bold mb-2 text-pink-900">Happy Birthday MimuPakhi</h1>
                <p className="text-pink-800 font-medium">Your presence makes our days brighter & life Beautiful ❤️</p>
              </div>
              <button
                onClick={handleEnter}
                className="bg-pink-900 text-pink-100 px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300 animate-bounce mt-4 border-2 border-black"
              >
                Click here👇🏼.
              </button>
            </motion.div>

          ) : (

            /* SLIDESHOW SCREEN (Your exact code) */
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-pink-300 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-pink-400"
            >
              {/* Image Container */}
              <div className="w-full h-64 rounded-2xl overflow-hidden mb-6 shadow-inner border-4 border-pink-900 relative bg-floral-rose/20 flex items-center justify-center">
                <img 
                  src={pages[currentIndex].image} 
                  alt=" " 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                     // Fallback if image isn't loaded yet
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<p class="text-deep-rose/50">Please add ' + pages[currentIndex].image + ' to public folder</p>';
                  }}
                />
              </div>

              {/* Text Content */}
              <h1 className="text-2xl font-bold mb-3 text-pink-900 flex items-center gap-2">
                {pages[currentIndex].heading}
              </h1>
              <p className="text-lg leading-relaxed text-pink-800 mb-8 font-medium">
                {pages[currentIndex].text}
              </p>

              {/* Navigation Button */}
              <div className="flex justify-end">
                {currentIndex < pages.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="group flex items-center gap-2 bg-floral-rose hover:bg-deep-rose text-pink-900 px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 font-semibold border-2 border-black"
                  >
                    See Next
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <button
                    onClick={handleReset}
                    className="group flex items-center gap-2 bg-deep-rose text-pink-900 px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 font-semibold border-2 border-black"
                  >
                    Read Again
                    <Heart className="w-5 h-5 fill-white animate-bounce" />
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}