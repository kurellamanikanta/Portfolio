import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from './hooks/useInView';
import { X, ZoomIn } from 'lucide-react';

const portfolioImages = {
  'Living Room': [
    {
      url: 'https://images.unsplash.com/photo-1669387448840-610c588f003d?w=1080',
      title: 'Luxury Living Room',
      description: 'Modern luxury living space with premium finishes',
    },
    {
      url: 'https://images.unsplash.com/photo-1679862342541-e408d4f3ab80?w=1080',
      title: 'Contemporary Living',
      description: 'Elegant contemporary design with sophisticated palette',
    },
    {
      url: 'https://images.unsplash.com/photo-1666037805138-f227944ed8d7?w=1080',
      title: 'Classic Fireplace Design',
      description: 'Timeless design featuring a stunning fireplace',
    },
    {
      url: 'https://images.unsplash.com/photo-1672927936377-97d1be3976cd?w=1080',
      title: 'Art Gallery Living',
      description: 'Curated space with gallery wall feature',
    },
  ],
  'Bedroom': [
    {
      url: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?w=1080',
      title: 'Modern Master Bedroom',
      description: 'Serene master bedroom with neutral aesthetic',
    },
    {
      url: 'https://images.unsplash.com/photo-1642541070065-3912f347e7c6?w=1080',
      title: 'Minimalist Retreat',
      description: 'Clean lines and calming atmosphere',
    },
    {
      url: 'https://images.unsplash.com/photo-1668089677938-b52086753f77?w=1080',
      title: 'Luxury Bedroom Suite',
      description: 'Premium bedroom design with elegant details',
    },
  ],
  'Kitchen': [
    {
      url: 'https://images.unsplash.com/photo-1620086464194-5127366b51ea?w=1080',
      title: 'Modern Kitchen',
      description: 'Contemporary kitchen with premium appliances',
    },
    {
      url: 'https://images.unsplash.com/photo-1613621792067-8e28d16b735c?w=1080',
      title: 'Designer Kitchen',
      description: 'Sophisticated kitchen with custom cabinetry',
    },
    {
      url: 'https://images.unsplash.com/photo-1643034738686-d69e7bc047e1?w=1080',
      title: 'Luxury Kitchen Space',
      description: 'High-end kitchen with elegant finishes',
    },
  ],
  'Commercial': [
    {
      url: 'https://images.unsplash.com/photo-1600508772927-723e3ba305c5?w=1080',
      title: 'Corporate Office',
      description: 'Professional workspace design',
    },
    {
      url: 'https://images.unsplash.com/photo-1667985536001-42bd143961f2?w=1080',
      title: 'Executive Office',
      description: 'Premium executive workspace',
    },
    {
      url: 'https://images.unsplash.com/photo-1758630737900-a28682c5aa69?w=1080',
      title: 'Modern Office Interior',
      description: 'Contemporary commercial design',
    },
  ],
};

export function Portfolio() {
  const [ref, isInView] = useInView();
  const [selectedCategory, setSelectedCategory] = useState<string>('Living Room');
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; description: string } | null>(null);

  const categories = Object.keys(portfolioImages);

  return (
    <section id="portfolio" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl mb-4 text-gray-900"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8"></div>

          <div className="flex flex-wrap justify-center gap-4 mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages[selectedCategory as keyof typeof portfolioImages].map((image, index) => (
            <motion.div
              key={image.url}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3
                    className="text-white text-xl"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {image.title}
                  </h3>
                  <ZoomIn className="text-white" size={24} />
                </div>
                <p className="text-gray-200 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {image.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </motion.button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center">
                <h3
                  className="text-white text-2xl md:text-3xl mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
