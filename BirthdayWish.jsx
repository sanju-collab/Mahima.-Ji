import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Gift } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function BirthdayWish() {
  const [showSurprise, setShowSurprise] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
      <audio ref={audioRef} loop>
        <source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" type="audio/mpeg" />
      </audio>

      {/* Floating hearts */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 text-2xl"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -100], opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 5 + Math.random() * 5, delay: Math.random() * 3 }}
        >
          ❤️
        </motion.div>
      ))}

      {!showSurprise ? (
        <>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-pink-700 mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Happy Birthday, Mahima Ji!
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-pink-600 max-w-xl mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            You are not just a best friend, you're a blessing. Thank you for always being there, listening, and caring even when you didn’t feel like it.
          </motion.p>

          <motion.blockquote
            className="italic text-pink-800 mb-8 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            "Count your life by smiles, not tears. Count your age by friends, not years."
          </motion.blockquote>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <Card className="bg-white shadow-lg rounded-2xl p-4">
              <CardContent>
                <img
                  src="https://source.unsplash.com/400x300/?friends,happy"
                  alt="Us together"
                  className="rounded-xl mb-4"
                />
                <p className="text-pink-700 font-medium text-lg">
                  I’m so grateful for every moment with you. Here's to more laughs, memories, and birthdays, my dear best friend Mahima Ji!
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <Button className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-6 py-2 rounded-full">
              <Heart className="mr-2" /> Always Here For You
            </Button>
            <Button
              onClick={() => setShowSurprise(true)}
              className="bg-pink-500 hover:bg-pink-600 text-white text-lg px-6 py-2 rounded-full"
            >
              <Gift className="mr-2" /> Open Surprise
            </Button>
          </motion.div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-pink-700"
        >
          <h2 className="text-4xl font-bold mb-4">Surprise Time!</h2>
          <p className="text-xl mb-6 max-w-lg">
            I’ve planned something thoughtful just for you. Whether it's a memory, a message, or a moment—we'll always have it.
          </p>
          <img
            src="https://source.unsplash.com/400x300/?gift,celebration"
            alt="Birthday Surprise"
            className="rounded-xl shadow-lg mb-6"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-pink-200 p-4 rounded-xl shadow-inner max-w-xl mx-auto"
          >
            <p className="text-md text-pink-800">
              Happy Birthday Mahima Ji... srry ye mera last message rhega. Aapne mere liye bht kuch kiya jaise ki aapko mujhse baat krna pasnd nhi phir bhi aap mere baat krte ho. Main is cheez ke liye hamesha thankful rahunga. Aap bahut special ho — meri best friend.
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
