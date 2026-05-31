import { motion } from 'motion/react';

const skillCategories = [
  {
    title: 'Product Management',
    description: 'Guiding products from 0 to 1 and scaling them. Expert in defining roadmaps, crafting PRDs, and aligning engineering with business goals.',
    skills: ['Product Strategy', 'Roadmapping', 'Growth Metrics', 'A/B Testing', 'User Research', 'Agile & Scrum']
  },
  {
    title: 'AI & Data Science',
    description: 'Bridging the gap between ML models and user value. Experience building autonomous agents, predictive pipelines, and NLP systems.',
    skills: ['LLMs & Agentic AI', 'Predictive Modeling', 'Machine Learning', 'NLP Pipelines', 'Data Analytics', 'Voice AI (ASR/TTS)']
  },
  {
    title: 'Technical Stack',
    description: 'Comfortable diving into code, writing queries, and designing system architectures alongside engineering teams.',
    skills: ['SQL', 'Python', 'FastAPI', 'XGBoost & Scikit', 'Figma', 'JIRA & Mixpanel']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 lg:py-20 bg-transparent">
      
      {/* Aesthetic Transition Element */}
      <div className="absolute top-0 left-0 w-full flex flex-col items-center justify-center -mt-16 pointer-events-none">
        <motion.div
           initial={{ height: 0, opacity: 0 }}
           whileInView={{ height: 120, opacity: 1 }}
           viewport={{ once: true, margin: '-50px' }}
           transition={{ duration: 1.5, ease: 'easeOut' }}
           className="w-[2px] bg-gradient-to-b from-transparent via-[var(--accent-primary)] to-transparent relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--accent-primary)] shadow-[0_0_15px_3px_var(--accent-primary)]"></div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] text-[var(--accent-primary)] uppercase mb-4">Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] tracking-tight leading-[1.1]">
              Core Skills & Capabilities
            </h3>
          </div>
          <p className="text-lg text-[var(--text-secondary)] max-w-sm md:text-right leading-relaxed">
            A versatile foundation bridging business strategy, artificial intelligence, and deep analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col h-full bg-[var(--bg-surface)] p-6 rounded-2xl border border-black/5 shadow-sm hover:shadow-[var(--shadow-warm)] transition-shadow duration-300"
            >
              <div className="mb-4">
                 {/* Decorative Line */}
                 <div className="w-8 h-[2px] bg-[var(--accent-primary)] mb-4"></div>
                 <h4 className="text-xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] mb-2">
                   {category.title}
                 </h4>
                 <p className="text-sm leading-relaxed text-[var(--text-secondary)] mb-6 flex-1">
                   {category.description}
                 </p>
              </div>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 border border-[var(--text-primary)]/10 text-[10px] font-bold tracking-widest uppercase text-[var(--text-secondary)] bg-[var(--bg-surface)] rounded transition-all duration-300 ease-in-out hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
