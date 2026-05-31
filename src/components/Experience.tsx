import { motion } from 'motion/react';

const companies = [
  {
    name: "Justdial",
    roles: [
      {
        title: "Product Manager L3",
        period: "Nov 2023 - Present",
        description: (
          <>
            Led AI/ML product roadmap across voice bots, predictive modelling, and vendor growth. Shipped Smart Assistant, AI Appointment, FTR, and the <strong className="font-bold text-[var(--accent-primary)]">600K calls/day</strong> voice analysis pipeline.
          </>
        )
      },
      {
        title: "Product Manager L1",
        period: "Apr 2022 - Oct 2023",
        description: (
          <>
            Owned Lead Management System roadmap for 600+ vendor categories. Defined lead routing for Real Estate vertical (<strong className="font-bold text-[var(--accent-primary)]">20K+ daily requests</strong>) and implemented deduplication logic cutting duplicate complaints by <strong className="font-bold text-[var(--accent-primary)]">30%</strong>.
          </>
        )
      }
    ]
  },
  {
    name: "ATCS",
    roles: [
      {
        title: "Management Trainee",
        period: "Jul 2017 - Mar 2018",
        description: (
          <>
            Built KPI analytics tool for 200+ dealerships across 4 countries with integrated fraud detection and incentive payout system.
          </>
        )
      }
    ]
  }
];

const internships = [
  { company: "Eka Care", role: "Product Intern", period: "2022" },
  { company: "Samsung", role: "Product Intern", period: "2021" },
  { company: "Kreativ Street", role: "Product Intern", period: "2021" }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <h2 className="text-[10px] font-bold tracking-[0.2em] text-[var(--accent-primary)] uppercase mb-3">Career</h2>
          <h3 className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] tracking-tight">Experience</h3>
        </div>

        <div className="relative">
          {/* The track line */}
          <div className="absolute left-[5px] top-3 bottom-0 w-[2px] bg-black/10 z-0"></div>

          <div className="space-y-16">
            {companies.map((company, index) => (
              <motion.div 
                key={company.name} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative z-10"
              >
                {/* Main Hollow Dot */}
                <div className="absolute left-0 top-[10px] w-[12px] h-[12px] rounded-full border-[2px] border-[var(--accent-primary)] bg-[var(--bg-primary)] ring-4 ring-[var(--bg-primary)] ring-opacity-20 z-20"></div>

                {company.roles.length > 1 ? (
                  <>
                    <div className="pl-8 md:pl-12 mb-6">
                      <h4 className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">
                        {company.name}
                      </h4>
                    </div>

                    <div className="space-y-10">
                      {company.roles.map((role, rIndex) => (
                        <div key={rIndex} className="relative pl-8 md:pl-12">
                          {/* Inner Hollow Dot */}
                          <div className="absolute left-[2px] top-[10px] w-[8px] h-[8px] rounded-full border-[2px] border-[var(--text-secondary)] bg-[var(--bg-primary)] ring-4 ring-[var(--bg-primary)] ring-opacity-20 z-20"></div>

                          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                            <h5 className="text-lg font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">
                              {role.title}
                            </h5>
                            <span className="text-xs font-medium tracking-wide text-[var(--text-secondary)] mt-1 md:mt-0">
                              {role.period}
                            </span>
                          </div>
                          <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl text-sm">
                            {role.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="pl-8 md:pl-12">
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3">
                      <h4 className="text-xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">
                        {company.roles[0].title} <span className="text-[var(--text-secondary)] font-sans italic text-base px-1.5 font-normal">at</span> {company.name}
                      </h4>
                      <span className="text-xs font-medium tracking-wide text-[var(--text-secondary)] mt-1 md:mt-0">
                        {company.roles[0].period}
                      </span>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl text-sm">
                      {company.roles[0].description}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Internships & Education concise section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-black/10 pt-12">
          <div>
            <h4 className="text-xs font-bold tracking-widest text-[var(--text-primary)] uppercase mb-4">Internships</h4>
            <ul className="space-y-3">
              {internships.map(intern => (
                <li key={intern.company} className="flex items-center justify-between border-b border-black/10 pb-2 text-sm">
                  <div className="font-medium text-[var(--text-primary)]">{intern.role} <span className="text-[var(--text-secondary)] italic font-normal">at</span> {intern.company}</div>
                  <div className="text-[10px] text-[var(--text-secondary)] font-mono font-medium">{intern.period}</div>
                </li>
              ))}
            </ul>
          </div>
          <div>
             <h4 className="text-xs font-bold tracking-widest text-[var(--text-primary)] uppercase mb-4">Education</h4>
             <div className="space-y-4">
                <div>
                  <div className="font-display text-lg font-medium text-[var(--text-primary)] mb-0.5">IIM Ranchi</div>
                  <div className="text-xs text-[var(--text-secondary)]">MBA <span className="px-2 text-black/20">|</span> 2020 - 2022</div>
                </div>
                <div>
                  <div className="font-display text-lg font-medium text-[var(--text-primary)] mb-0.5">IIT Roorkee</div>
                  <div className="text-xs text-[var(--text-secondary)]">B.Tech, Chemical Engineering <span className="px-2 text-black/20">|</span> 2013 - 2017</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
