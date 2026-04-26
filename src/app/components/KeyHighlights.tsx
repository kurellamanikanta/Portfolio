import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { CheckCircle2 } from 'lucide-react';

export function KeyHighlights() {
  const [ref, isInView] = useInView();

  const highlights = [
    'Delivered premium villa and apartment designs with exceptional attention to detail',
    'Created customized interiors based on specific client needs and preferences',
    'Produced high-quality photorealistic renders improving client decision-making',
    'Successfully handled multiple projects simultaneously with consistent quality',
  ];

  return (
    <section
      id="highlights"
      ref={ref}
      className="py-24 bg-gradient-to-br from-amber-50 via-white to-amber-50"
    >
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
            Key Project Highlights
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-8 h-8 text-amber-600" />
                </div>
                <p
                  className="text-gray-700 text-lg leading-relaxed"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
