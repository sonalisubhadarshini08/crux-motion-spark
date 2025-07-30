import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  BarChart3, 
  Users, 
  Workflow, 
  MessageSquare, 
  Shield, 
  Smartphone 
} from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights into your sales performance with real-time dashboards and predictive analytics that help you make data-driven decisions.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Unified Customer View",
    description: "See the complete customer journey in one place. Track interactions, purchase history, and preferences across all touchpoints.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    description: "Set up intelligent automation that nurtures leads, follows up with prospects, and keeps your sales pipeline moving 24/7.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: MessageSquare,
    title: "Smart Communication",
    description: "Engage customers across email, SMS, and social media with AI-powered messaging that personalizes every interaction.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Keep your data safe with bank-level encryption, role-based access controls, and compliance with GDPR and SOC 2 standards.",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Access your CRM anywhere with our responsive design and native mobile apps. Never miss an opportunity on the go.",
    gradient: "from-teal-500 to-green-500"
  }
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Powerful Features Designed for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-secondary">
              Your Success
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to build stronger customer relationships, 
            close more deals, and grow your business faster.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1 
                } : { 
                  opacity: 0, 
                  y: 30, 
                  scale: 0.9 
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -10, 
                  transition: { duration: 0.3 } 
                }}
                className="group"
              >
                <div className="bg-card border border-border rounded-xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:border-primary/20 relative overflow-hidden">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                      className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Effect Lines */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-primary"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;