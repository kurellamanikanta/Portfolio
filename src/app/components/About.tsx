import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Award, Users, Lightbulb } from 'lucide-react';

export function About() {
  const [ref, isInView] = useInView();

  const stats = [
    { icon: Award, value: '8+', label: 'Years Experience' },
    { icon: Users, value: '1500+', label: 'Projects Delivered' },
    { icon: Lightbulb, value: 'Expert', label: '3D Visualization' },
  ];

  return (
    <section id="about" ref={ref} className="py-24 bg-white">
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
                alt="Interior Design Workspace"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              As a Senior Interior Designer with over 8 years of experience, I specialize in creating
              sophisticated residential and commercial spaces that seamlessly blend aesthetics with
              functionality. My expertise spans space planning, lighting design, furniture layout,
              and material selection, ensuring every project reflects both creativity and precision.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With proven expertise in transforming concepts into high-quality photorealistic renders
              using SketchUp and V-Ray, I bring design visions to life before they're built. Having
              successfully delivered over 1500 residential projects including premium villas and
              apartments, I understand the nuances of creating sustainable, functional, and timeless
              spaces that exceed client expectations.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center p-5 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <stat.icon className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                  <div className="text-2xl text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-xs text-gray-600 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
