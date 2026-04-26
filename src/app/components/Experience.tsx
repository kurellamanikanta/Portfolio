import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const [ref, isInView] = useInView();

  const experiences = [
    {
      company: 'Livspace, Hyderabad',
      position: 'Senior Interior Designer',
      period: '2019 - Present',
      achievements: [
        'Delivered 1500+ residential projects including premium villas and apartments',
        'Created high-quality 3D renders for client presentations and approvals',
        'Developed functional and space-efficient layouts optimizing every square foot',
        'Prepared working drawings and material specifications with precision',
        'Managed multiple projects simultaneously with consistent quality delivery',
      ],
    },
    {
      company: 'Shrestha Interiors',
      position: 'Interior Designer',
      period: '2017 - 2019',
      achievements: [
        'Designed residential layouts and comprehensive 3D models',
        'Supported client presentations leading to successful project approvals',
        'Created AutoCAD drawings and photorealistic visualizations',
        'Coordinated closely with execution teams for seamless implementation',
      ],
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
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
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-400 to-amber-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 w-full">
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3
                          className="text-2xl text-gray-900"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                          {exp.company}
                        </h3>
                        <p
                          className="text-amber-600"
                          style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                          {exp.position}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      <Calendar size={18} />
                      <span>{exp.period}</span>
                    </div>

                    <ul className="space-y-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <span className="text-amber-600 mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:flex w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full items-center justify-center shadow-lg z-10">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>

                <div className="flex-1 w-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
