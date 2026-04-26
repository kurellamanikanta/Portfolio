import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Quote, Star } from 'lucide-react';

export function Testimonials() {
  const [ref, isInView] = useInView();

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Homeowner, Hyderabad',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      text: 'Sowjanya transformed our apartment into a dream home. Her attention to detail and ability to understand our needs was exceptional. The 3D renders helped us visualize everything before implementation.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      text: 'Working with Sowjanya was an absolute pleasure. She designed our office space beautifully, creating an environment that is both professional and welcoming. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Arun Patel',
      role: 'Villa Owner, Bangalore',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      text: 'The photorealistic renderings Sowjanya provided were incredibly accurate. Our villa turned out exactly as visualized. Her expertise in luxury interiors is unmatched.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-white">
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
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 text-amber-200 w-12 h-12" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <div>
                    <h3
                      className="text-lg text-gray-900"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <p
                  className="text-gray-700 leading-relaxed italic"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  "{testimonial.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
