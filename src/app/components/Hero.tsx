import { motion } from 'motion/react';
import { Download, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export function Hero() {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCA0YzEuMTA1IDAgMiAuODk1IDIgMnMtLjg5NSAyLTIgMi0yLS44OTUtMi0yIC44OTUtMiAyLTJ6IiBmaWxsPSIjMDAwIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full blur-2xl opacity-30"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
              alt="Sowjanya Motupalli"
              className="relative w-48 h-48 rounded-full object-cover border-4 border-white shadow-2xl mx-auto"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1
            className="text-5xl md:text-7xl mb-4 text-gray-900"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Sowjanya Motupalli
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-700 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Senior Interior Designer | 3D Visualization Specialist
          </p>
          <p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 italic"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            "Creative and detail-oriented designer with 8+ years of experience transforming concepts into high-quality photorealistic renders and client-centric design solutions"
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToPortfolio}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              View Portfolio
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-gray-900 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <Download size={20} />
              Download Resume
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={32} className="text-gray-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
