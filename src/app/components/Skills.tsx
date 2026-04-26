import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import {
  Ruler,
  Lightbulb,
  Layout,
  Palette,
  Box,
  Sparkles,
  Layers,
  PenTool,
  Image,
  Monitor
} from 'lucide-react';

export function Skills() {
  const [ref, isInView] = useInView();

  const skillCategories = [
    {
      title: 'Design Expertise',
      icon: Palette,
      skills: [
        { name: 'Space Planning & Layout Design', icon: Layout },
        { name: 'Lighting Design (Natural & Artificial)', icon: Lightbulb },
        { name: 'Furniture Layout & Custom Design', icon: Ruler },
        { name: 'Material Selection & Finish Coordination', icon: Sparkles },
        { name: 'False Ceiling & Interior Detailing', icon: Layers },
        { name: 'Sustainable & Functional Design', icon: Palette },
      ],
    },
    {
      title: '3D Visualization & Rendering',
      icon: Box,
      skills: [
        { name: 'Photorealistic Rendering (SketchUp + V-Ray)', icon: Image },
        { name: '3D Modeling (Residential & Commercial)', icon: Box },
        { name: 'Lighting Setup & Scene Composition', icon: Lightbulb },
        { name: 'Material & Texture Mapping', icon: Sparkles },
      ],
    },
    {
      title: 'Technical Skills',
      icon: PenTool,
      skills: [
        { name: 'Working Drawings & Design Documentation', icon: PenTool },
        { name: 'BOQ Preparation', icon: Layout },
        { name: 'Carpentry & Modular Detailing', icon: Ruler },
        { name: 'Converting 2D Drawings to 3D Models', icon: Layers },
      ],
    },
    {
      title: 'Software Proficiency',
      icon: Monitor,
      skills: [
        { name: 'AutoCAD', icon: PenTool },
        { name: 'SketchUp', icon: Box },
        { name: 'V-Ray', icon: Lightbulb },
        { name: 'Coohom', icon: Layout },
        { name: 'Photoshop', icon: Image },
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
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
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="text-2xl text-gray-900"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors duration-300"
                  >
                    <skill.icon className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
