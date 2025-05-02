import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="page">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400"
      >
        OpenAir Solutions
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-xl md:text-2xl text-gray-700 mb-8"
      >
        App- & Webentwicklung für Stores und globale Märkte
      </motion.h2>

      <p className="text-center max-w-2xl text-gray-600">
        Wir bringen Ihre Ideen auf die nächste Stufe mit hochmodernen Web- und App-Lösungen.  
        Skalierbar. Flexibel. Zukunftsorientiert.
      </p>
    </div>
  );
}
