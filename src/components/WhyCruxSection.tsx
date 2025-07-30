import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Users, Target, Zap } from 'lucide-react';

const problems = [
  {
    icon: Users,
    title: "Data Silos",
    problem: "Customer information scattered across multiple tools",
    solution: "Unified customer view with complete interaction history"
  },
  {
    icon: Target,
    title: "Manual Tasks",
    problem: "Hours wasted on repetitive administrative work", 
    solution: "Intelligent automation that handles routine tasks"
  },
  {
    icon: TrendingUp,
    title: "Missed Opportunities",
    problem: "Leads falling through cracks due to poor follow-up",
    solution: "Smart alerts and automated nurturing sequences"
  },
  {
    icon: Zap,
    title: "Poor Insights",
    problem: "Making decisions without clear performance data",
    solution: "Real-time analytics and predictive insights"
  }
];

const WhyCruxSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Unlock Your Business's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Full Potential
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop letting inefficient processes hold you back. CruxCRM transforms how you 
            manage customer relationships with intelligent automation and actionable insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center"
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                          <div className="text-sm font-medium text-destructive mb-1">The Problem:</div>
                          <div className="text-sm text-destructive/80">{item.problem}</div>
                        </div>
                        
                        <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
                          <div className="text-sm font-medium text-secondary mb-1">Our Solution:</div>
                          <div className="text-sm text-secondary/80">{item.solution}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyCruxSection;