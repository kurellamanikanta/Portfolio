import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { GraduationCap, Award } from 'lucide-react';

export function Education() {
  const [ref, isInView] = useInView();

  const education = [
    {
      degree: 'B.Tech in Civil Engineering',
      institution: 'Shri Vishnu Engineering College',
      period: '2013 - 2017',
      icon: GraduationCap,
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Narayana Junior College',
      period: '2011 - 2013',
      icon: GraduationCap,
    },
    {
      degree: 'SSC',
      institution: 'S.S.N.Z.P Girls High School',
      period: '2006 - 2011',
      icon: GraduationCap,
    },
  ];

  const certifications = [
    'AutoCAD Certification',
    'SketchUp Training',
  ];

  const languages = [
    { name: 'English', level: 'Professional' },
    { name: 'Telugu', level: 'Native' },
    { name: 'Hindi', level: 'Fluent' },
  ];

  return (
    <section id="education" ref={ref} className="py-24 bg-white">
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
            Education & Credentials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              className="text-2xl mb-8 text-gray-900 flex items-center gap-3"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <h4
                    className="text-lg text-gray-900 mb-2"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {edu.degree}
                  </h4>
                  <p className="text-amber-600 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {edu.period}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3
              className="text-2xl mb-8 text-gray-900 flex items-center gap-3"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl">
                <Award className="w-6 h-6 text-white" />
              </div>
              Certifications
            </h3>

            <div className="space-y-4 mb-12">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="bg-gradient-to-r from-amber-50 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-amber-500"
                >
                  <p className="text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {cert}
                  </p>
                </motion.div>
              ))}
            </div>

            <h3
              className="text-2xl mb-8 text-gray-900"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Languages
            </h3>

            <div className="grid grid-cols-3 gap-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100"
                >
                  <p
                    className="text-lg text-gray-900 mb-1"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {lang.name}
                  </p>
                  <p className="text-sm text-amber-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {lang.level}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
