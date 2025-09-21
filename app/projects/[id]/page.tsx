"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Eye,
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  Lightbulb,
  Target,
  Zap,
  Code,
  Database,
  BarChart3,
  Brain,
  TrendingUp,
  Menu,
  X,
  ChevronUp,
  Share2,
  Bookmark,
  XCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel

// Project data (unchanged from original)
const projects = [
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction Model",
    tagline: "AI-Powered Customer Retention Solution",
    description:
      "Built a machine learning model using ensemble methods to predict customer churn with 94% accuracy, helping reduce churn by 23%.",
    fullDescription:
      "This comprehensive machine learning solution leverages advanced ensemble methods to predict customer churn patterns. By analyzing customer behavior, transaction history, and engagement metrics, the model identifies at-risk customers before they leave, enabling proactive retention strategies.",
    image: "/customer-churn-prediction-dashboard.jpg",
    category: "Machine Learning",
    technologies: ["Python", "Scikit-learn", "Pandas", "XGBoost", "Flask", "PostgreSQL"],
    domain: "E-commerce",
    metrics: {
      accuracy: "94%",
      precision: "91%",
      recall: "89%",
      impact: "23% churn reduction",
    },
    features: [
      "Real-time churn prediction API",
      "Interactive dashboard for business insights",
      "Automated email alerts for at-risk customers",
      "A/B testing framework for retention strategies",
      "Customer segmentation and profiling",
    ],
    process: [
      {
        step: "Data Collection & Cleaning",
        description: "Gathered customer data from multiple sources and performed extensive data preprocessing",
        icon: Database,
      },
      {
        step: "Feature Engineering",
        description: "Created meaningful features from raw data including RFM analysis and behavioral patterns",
        icon: Code,
      },
      {
        step: "Model Development",
        description:
          "Implemented and compared multiple algorithms including XGBoost, Random Forest, and Neural Networks",
        icon: Brain,
      },
      {
        step: "Model Evaluation",
        description: "Rigorous testing using cross-validation and business metrics validation",
        icon: BarChart3,
      },
      {
        step: "Deployment & Monitoring",
        description: "Deployed to production with monitoring dashboards and automated retraining pipeline",
        icon: TrendingUp,
      },
    ],
    gallery: [
      "/customer-churn-prediction-dashboard.jpg",
      "/churn-model-performance.jpg",
      "/customer-segments-analysis.jpg",
      "/retention-strategy-results.jpg",
    ],
    links: {
      github: "https://github.com/prathamesh095/customer-churn-prediction",
      demo: "https://churn-prediction-demo.vercel.app",
      dashboard: "/dashboards/churn-analysis",
    },
    keyLearnings: [
      "Mastered ensemble learning techniques and hyperparameter optimization",
      "Learned to balance model complexity with interpretability for business stakeholders",
      "Gained experience in deploying ML models to production with monitoring",
      "Developed skills in translating business problems into ML solutions",
    ],
    outcomes: [
      "Reduced customer churn by 23% within 6 months of deployment",
      "Increased customer lifetime value by $2.3M annually",
      "Improved marketing campaign efficiency by 35%",
      "Won 'Best AI Innovation' award at company hackathon",
    ],
    year: 2024,
    tags: ["Open Source", "Hackathon Winner"],
    achievements: ["Achieved 94% accuracy", "Reduced churn by 23%", "Deployed in production"],
  },
  {
    id: "sales-forecasting",
    title: "Sales Forecasting with Time Series",
    tagline: "Advanced Time Series Prediction System",
    description:
      "Developed ARIMA and LSTM models for sales forecasting with 89% accuracy, improving inventory planning efficiency.",
    fullDescription:
      "This sophisticated forecasting system combines traditional statistical methods with deep learning to provide accurate sales predictions. It analyzes historical sales data, seasonal patterns, and external factors to generate reliable forecasts, optimizing inventory management and resource allocation.",
    image: "/sales-forecasting-time-series.jpg",
    category: "Analytics",
    technologies: ["Python", "TensorFlow", "Pandas", "Plotly", "Statsmodels", "Keras"],
    domain: "Finance",
    metrics: {
      accuracy: "89%",
      mape: "8.2%",
      improvement: "35% efficiency gain",
    },
    features: [
      "Multi-model forecasting with ARIMA and LSTM",
      "Seasonal decomposition and trend analysis",
      "Confidence interval predictions",
      "Interactive forecasting dashboard",
    ],
    process: [
      {
        step: "Data Preparation",
        description: "Cleaned and resampled sales data to daily/monthly frequencies using Pandas.",
        icon: Database,
      },
      {
        step: "Time Series Analysis",
        description: "Applied ACF/PACF plots and stationarity tests to understand data characteristics.",
        icon: BarChart3,
      },
      {
        step: "Model Implementation",
        description: "Built ARIMA with Statsmodels and LSTM with TensorFlow, compared performance with MAPE.",
        icon: Brain,
      },
      {
        step: "Visualization and Reporting",
        description: "Created interactive dashboards with Plotly for forecast visualization.",
        icon: Eye,
      },
    ],
    gallery: [
      "/sales-forecasting-time-series.jpg",
      "/lstm-architecture.jpg",
      "/forecast-vs-actual.jpg",
      "/seasonal-decomposition.jpg",
    ],
    links: {
      github: "https://github.com/prathamesh095/sales-forecasting",
      demo: "https://sales-forecasting-demo.vercel.app",
    },
    keyLearnings: [
      "Handling non-stationary time series data effectively",
      "Tuning LSTM hyperparameters for optimal performance",
      "Evaluating forecasting models using MAPE and other metrics",
      "Building interactive visualization dashboards",
    ],
    outcomes: [
      "Improved inventory planning efficiency by 35%",
      "Reduced stockouts by 28% and overstock by 22%",
      "Enhanced financial forecasting accuracy for better budgeting",
      "Integrated successfully with existing ERP systems",
    ],
    year: 2023,
    tags: ["Time Series", "Forecasting"],
    achievements: ["Improved efficiency by 35%", "Integrated with inventory system"],
  },
  {
    id: "sentiment-analysis",
    title: "Social Media Sentiment Analysis",
    tagline: "Real-Time NLP Sentiment Analyzer",
    description:
      "NLP pipeline for real-time sentiment analysis of social media posts using BERT and custom preprocessing.",
    fullDescription:
      "An advanced natural language processing system that analyzes social media content in real-time to gauge public sentiment. Utilizing state-of-the-art transformer models, it processes thousands of posts per minute, providing valuable insights for brand management and market research.",
    image: "/sentiment-analysis-nlp.jpg",
    category: "NLP",
    technologies: ["Python", "BERT", "Transformers", "Flask", "NLTK", "Tweepy"],
    domain: "Marketing",
    metrics: {
      accuracy: "92%",
      f1Score: "0.91",
      throughput: "1000 posts/min",
    },
    features: [
      "Real-time text classification",
      "Multi-language sentiment analysis",
      "Emotion detection beyond positive/negative",
      "API for seamless integration",
    ],
    process: [
      {
        step: "Data Collection",
        description: "Scraped social media posts using Tweepy and preprocessed text with NLTK.",
        icon: Zap,
      },
      {
        step: "Model Training",
        description: "Fine-tuned BERT model using Hugging Face Transformers for sentiment classification.",
        icon: Brain,
      },
      {
        step: "API Development",
        description: "Built Flask API for real-time inference.",
        icon: Code,
      },
      {
        step: "Performance Optimization",
        description: "Optimized for throughput using batch processing and GPU acceleration.",
        icon: TrendingUp,
      },
    ],
    gallery: [
      "/sentiment-analysis-nlp.jpg",
      "/bert-model.jpg",
      "/sentiment-dashboard.jpg",
      "/emotion-analysis.jpg",
    ],
    links: {
      github: "https://github.com/prathamesh095/sentiment-analysis",
      demo: "https://sentiment-analysis-demo.vercel.app",
    },
    keyLearnings: [
      "Applying transfer learning with pre-trained models",
      "Handling noisy social media text data",
      "Scaling NLP models for high-throughput environments",
      "Optimizing inference with GPU acceleration",
    ],
    outcomes: [
      "Processed over 1 million posts in production",
      "Improved marketing response time by 40%",
      "Enhanced brand sentiment tracking accuracy",
      "Integrated with multiple social media platforms",
    ],
    year: 2024,
    tags: ["NLP", "Real-time"],
    achievements: ["Processed over 1M posts", "Integrated with marketing dashboard"],
  },
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection",
    tagline: "AI-Driven Fraud Prevention System",
    description:
      "Anomaly detection system using isolation forests and neural networks to identify fraudulent transactions.",
    fullDescription:
      "A robust security system that employs machine learning to detect fraudulent credit card transactions in real-time. By combining unsupervised anomaly detection with rule-based systems, it minimizes false positives while maintaining high detection rates.",
    image: "/fraud-detection-system.jpg",
    category: "Machine Learning",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "SQL", "Kafka", "Docker"],
    domain: "Finance",
    metrics: {
      precision: "96%",
      recall: "88%",
      falsePositive: "0.02%",
    },
    features: [
      "Real-time transaction monitoring",
      "Hybrid anomaly detection algorithms",
      "Rule-based and ML-driven fraud detection",
      "Automated alert generation system",
    ],
    process: [
      {
        step: "Data Handling",
        description: "Processed imbalanced dataset with undersampling and oversampling techniques.",
        icon: Database,
      },
      {
        step: "Model Development",
        description: "Implemented Isolation Forest and Autoencoder for anomaly detection.",
        icon: Brain,
      },
      {
        step: "Integration",
        description: "Integrated with transaction system using Kafka for real-time processing.",
        icon: Zap,
      },
      {
        step: "Testing",
        description: "Evaluated with precision-recall curves and AUPRC.",
        icon: BarChart3,
      },
    ],
    gallery: [
      "/fraud-detection-system.jpg",
      "/anomaly-visualization.jpg",
      "/model-metrics.jpg",
      "/real-time-monitoring.jpg",
    ],
    links: {
      github: "https://github.com/prathamesh095/fraud-detection",
      demo: "https://fraud-detection-demo.vercel.app",
    },
    keyLearnings: [
      "Managing highly imbalanced datasets",
      "Applying unsupervised learning for anomaly detection",
      "Designing real-time systems with low latency",
      "Evaluating models with precision-recall metrics",
    ],
    outcomes: [
      "Detected 88% of fraudulent transactions in real-time",
      "Reduced false positives to 0.02%, minimizing customer inconvenience",
      "Saved estimated $1.5M in potential fraud losses",
      "Scaled to handle millions of transactions daily",
    ],
    year: 2023,
    tags: ["Anomaly Detection", "Security"],
    achievements: ["Detected 88% of frauds", "Reduced false positives to 0.02%"],
  },
  {
    id: "recommendation-engine",
    title: "Product Recommendation Engine",
    tagline: "Intelligent Product Recommendation Platform",
    description: "Collaborative filtering and content-based recommendation system increasing user engagement by 40%.",
    fullDescription:
      "A hybrid recommendation engine that combines collaborative filtering with content-based approaches to deliver personalized product suggestions. Designed for large-scale e-commerce platforms, it boosts user engagement and drives revenue growth through intelligent recommendations.",
    image: "/recommendation-engine.jpg",
    category: "Machine Learning",
    technologies: ["Python", "Apache Spark", "MLlib", "Redis", "Scikit-learn", "Docker"],
    domain: "E-commerce",
    metrics: {
      engagement: "+40%",
      ctr: "+25%",
      revenue: "+18%",
    },
    features: [
      "Hybrid recommendation system",
      "Personalized product suggestions",
      "A/B testing integration",
      "Scalable to large user bases",
    ],
    process: [
      {
        step: "Data Processing",
        description: "Processed user-item interactions with Spark for big data handling.",
        icon: Database,
      },
      {
        step: "Algorithm Implementation",
        description: "Built collaborative filtering with ALS and content-based with TF-IDF.",
        icon: Code,
      },
      {
        step: "Hybrid Model",
        description: "Combined models for improved recommendation accuracy.",
        icon: Brain,
      },
      {
        step: "Deployment",
        description: "Deployed with Redis for fast retrieval.",
        icon: Zap,
      },
    ],
    gallery: [
      "/recommendation-engine.jpg",
      "/user-profile-rec.jpg",
      "/ab-test-results.jpg",
      "/recommendation-flow.jpg",
    ],
    links: {
      github: "https://github.com/prathamesh095/recommendation-engine",
      demo: "https://recommendation-engine-demo.vercel.app",
    },
    keyLearnings: [
      "Building scalable recommendation systems",
      "Handling cold start problems in recommendations",
      "Performing offline and online evaluation of models",
      "Optimizing for low-latency recommendations",
    ],
    outcomes: [
      "Increased user engagement by 40%",
      "Boosted click-through rates by 25%",
      "Generated 18% additional revenue",
      "Scaled to handle millions of users and items",
    ],
    year: 2024,
    tags: ["Recommendations", "Big Data"],
    achievements: ["Increased revenue by 18%", "Scaled to millions of users"],
  },
  {
    id: "supply-chain-optimization",
    title: "Supply Chain Optimization",
    tagline: "Advanced Supply Chain Optimizer",
    description:
      "Linear programming and simulation models to optimize supply chain operations and reduce costs by 15%.",
    fullDescription:
      "An operations research-based system that optimizes supply chain networks using mathematical programming and simulation. It minimizes costs, improves efficiency, and enhances delivery performance by analyzing complex supply chain dynamics.",
    image: "/supply-chain-optimization.jpg",
    category: "Analytics",
    technologies: ["Python", "PuLP", "SimPy", "Tableau", "NetworkX", "Pandas"],
    domain: "Supply Chain",
    metrics: {
      costReduction: "15%",
      efficiency: "+22%",
      deliveryTime: "-18%",
    },
    features: [
      "Linear programming for cost optimization",
      "Simulation of supply chain scenarios",
      "Cost minimization algorithms",
      "Visualization of supply network",
    ],
    process: [
      {
        step: "Problem Formulation",
        description: "Defined objectives and constraints for supply chain optimization.",
        icon: Target,
      },
      {
        step: "Model Building",
        description: "Used PuLP to create linear programming models.",
        icon: Code,
      },
      {
        step: "Simulation",
        description: "Implemented Monte Carlo simulation with SimPy.",
        icon: Brain,
      },
      {
        step: "Analysis",
        description: "Visualized results with Tableau for actionable insights.",
        icon: BarChart3,
      },
    ],
    gallery: [
      "/supply-chain-optimization.jpg",
      "/optimization-results.jpg",
      "/simulation-output.jpg",
      "/supply-network-visual.jpg",
    ],
    links: {
      github: "https://github.com/prathamesh095/supply-chain-optimization",
      demo: "https://supply-chain-optimization-demo.vercel.app",
      dashboard: "/dashboards/supply-chain",
    },
    keyLearnings: [
      "Applying operations research techniques",
      "Handling uncertainty in supply chain simulations",
      "Translating business problems into mathematical models",
      "Creating actionable visualizations for stakeholders",
    ],
    outcomes: [
      "Reduced operational costs by 15%",
      "Improved overall efficiency by 22%",
      "Decreased average delivery times by 18%",
      "Optimized supply network for better resilience",
    ],
    year: 2022,
    tags: ["Optimization", "Simulation"],
    achievements: ["Reduced costs by 15%", "Improved delivery times by 18%"],
  },
]

// Add generateStaticParams for static site generation
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("overview")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const project = projects.find((p) => p.id === params.id)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const progress = (scrollY / (documentHeight - windowHeight)) * 100
      setScrollProgress(progress)
      setShowScrollTop(scrollY > 500)

      const sections = ["overview", "tech-stack", "features", "process", "gallery", "learnings"]
      const sectionElements = sections.map((id) => document.getElementById(id))

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i]
        if (element && element.offsetTop <= scrollY + 200) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsNavOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    if (!project) {
      router.push("/projects")
    }
  }, [project, router])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-foreground">Project Not Found</h1>
          <Button asChild>
            <Link href="/projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  const navigationItems = [
    { id: "overview", label: "Overview", icon: Target },
    { id: "tech-stack", label: "Tech Stack", icon: Code },
    { id: "features", label: "Features", icon: Zap },
    { id: "process", label: "Process", icon: BarChart3 },
    { id: "gallery", label: "Gallery", icon: Eye },
    { id: "learnings", label: "Learnings", icon: Lightbulb },
  ]

  return (
    <div className="min-h-screen  relative overflow-hidden">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-accent z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Sticky Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary/20 shadow-lg shadow-primary/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 animate-shimmer"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
            </motion.div>
            
          </div>
          <nav className="hidden md:flex items-center gap-4">
            {navigationItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-primary/20 to-accent/20 text-primary"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            className="fixed left-4 top-20 z-40 w-64 md:hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-background/95 backdrop-blur-md border border-primary/30 shadow-xl shadow-primary/20 animate-glow">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-sm text-primary uppercase tracking-wide">
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {navigationItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-all duration-300 ${
                          activeSection === item.id
                            ? "bg-gradient-to-r from-primary/30 to-accent/30 text-primary border border-primary/50 shadow-lg"
                            : "hover:bg-primary/20 text-muted-foreground hover:text-primary"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm">{item.label}</span>
                      </button>
                    )
                  })}
                </nav>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Buttons */}
      <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
        <AnimatePresence>
          {showScrollTop && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                size="sm"
                onClick={scrollToTop}
                className="rounded-full w-12 h-12 shadow-xl shadow-primary/30 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 border-0 animate-glow"
              >
                <ChevronUp className="w-5 h-5" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
        <Button
          size="sm"
          variant="outline"
          className="rounded-full w-12 h-12 shadow-xl shadow-primary/20 bg-background/95 backdrop-blur-md border border-primary/30 hover:bg-primary/20 animate-shimmer"
          onClick={() => navigator.share?.({ title: project.title, url: window.location.href })}
        >
          <Share2 className="w-4 h-4" />
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="rounded-full w-12 h-12 shadow-xl shadow-primary/20 bg-background/95 backdrop-blur-md border border-primary/30 hover:bg-primary/20 animate-shimmer"
        >
          <Bookmark className="w-4 h-4" />
        </Button>
      </div>

      {/* Hero Section */}
      <motion.section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background/95 animate-gradient-pulse" />
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-primary/30 to-accent/30 text-primary-foreground border border-primary/50 px-4 py-2 text-sm shadow-lg shadow-primary/20 animate-shimmer">
              {project.category} • {project.domain}
            </Badge>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {project.title}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 font-medium max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {project.tagline}
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-xl shadow-primary/30 hover:shadow-2xl transition-all duration-300 rounded-full px-8 py-6 border-0 animate-glow"
            >
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                <Eye className="w-5 h-5 mr-2" />
                View Live Demo
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border border-primary/50 hover:bg-primary/20 shadow-xl shadow-primary/20 hover:shadow-2xl transition-all duration-300 rounded-full px-8 py-6 bg-background/95 backdrop-blur-md animate-shimmer"
            >
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View Source Code
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20 relative z-10">
        {/* Overview Section */}
        <motion.section
          id="overview"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-2xl shadow-primary/20 bg-gradient-to-br from-background/95 to-primary/10 backdrop-blur-md rounded-3xl overflow-hidden border border-primary/30 animate-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                <Target className="w-8 h-8 text-primary" />
                Project Overview
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{project.fullDescription}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <motion.div
                    key={key}
                    className="text-center p-4 bg-gradient-to-br from-background/90 to-primary/10 border border-primary/30 rounded-xl backdrop-blur-md shadow-lg animate-shimmer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {value}
                    </div>
                    <div className="text-sm text-muted-foreground capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          id="tech-stack"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-2xl shadow-primary/20 bg-gradient-to-br from-background/95 to-primary/10 backdrop-blur-md rounded-3xl overflow-hidden border border-primary/30 animate-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                <Code className="w-8 h-8 text-primary" />
                Tech Stack & Tools
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <Badge
                      variant="secondary"
                      className="text-sm px-4 py-2 bg-gradient-to-r from-secondary/90 to-primary/20 hover:from-secondary/90 hover:to-primary/30 transition-all duration-300 cursor-default shadow-lg border border-primary/30 animate-shimmer"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Features Section */}
        <motion.section
          id="features"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-2xl shadow-primary/20 bg-gradient-to-br from-background/95 to-primary/10 backdrop-blur-md rounded-3xl overflow-hidden border border-primary/30 animate-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                <Zap className="w-8 h-8 text-primary" />
                Key Features & Highlights
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-background/90 to-primary/10 border border-primary/30 rounded-xl hover:from-background/95 hover:to-primary/15 transition-all duration-300 shadow-lg backdrop-blur-md animate-shimmer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Process Section */}
        <motion.section
          id="process"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-2xl shadow-primary/20 bg-gradient-to-br from-background/95 to-primary/10 backdrop-blur-md rounded-3xl overflow-hidden border border-primary/30 animate-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                <BarChart3 className="w-8 h-8 text-primary" />
                Development Process
              </h2>
              <div className="space-y-6">
                {project.process.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={index}
                      className="flex gap-6 p-6 bg-gradient-to-br from-background/90 to-primary/10 border border-primary/30 rounded-xl hover:from-background/95 hover:to-primary/15 transition-all duration-300 shadow-lg backdrop-blur-md animate-shimmer"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full flex items-center justify-center shadow-lg">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">{step.step}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Gallery Section */}
        <motion.section
          id="gallery"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-2xl shadow-primary/20 bg-gradient-to-br from-background/95 to-primary/10 backdrop-blur-md rounded-3xl overflow-hidden border border-primary/30 animate-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                <Eye className="w-8 h-8 text-primary" />
                Project Gallery
              </h2>
              <Carousel className="w-full">
                <CarouselContent>
                  {project.gallery.map((image, index) => (
                    <CarouselItem key={index}>
                      <div
                        className="relative aspect-video rounded-xl overflow-hidden shadow-xl shadow-primary/20 border border-primary/30 cursor-pointer animate-shimmer"
                        onClick={() => setSelectedImage(image)}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} screenshot ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          sizes="100vw"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="bg-primary/80 text-primary-foreground hover:bg-primary" />
                <CarouselNext className="bg-primary/80 text-primary-foreground hover:bg-primary" />
              </Carousel>
            </CardContent>
          </Card>
        </motion.section>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative max-w-4xl w-full mx-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute top-4 right-4 bg-background/95 border-primary/50 text-primary-foreground"
                  onClick={() => setSelectedImage(null)}
                >
                  <XCircle className="w-5 h-5" />
                </Button>
                <Image
                  src={selectedImage}
                  alt="Enlarged project screenshot"
                  width={1200}
                  height={675}
                  className="rounded-xl shadow-2xl shadow-primary/30"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Key Learnings & Outcomes Section */}
        <motion.section
          id="learnings"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-2xl shadow-primary/20 bg-gradient-to-br from-background/95 to-primary/10 backdrop-blur-md rounded-3xl overflow-hidden border border-primary/30 animate-glow">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  <Lightbulb className="w-7 h-7 text-primary" />
                  Key Learnings
                </h2>
                <ul className="space-y-3">
                  {project.keyLearnings.map((learning, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      {learning}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-2xl shadow-primary/20 bg-gradient-to-br from-background/95 to-primary/10 backdrop-blur-md rounded-3xl overflow-hidden border border-primary/30 animate-glow">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  <Target className="w-7 h-7 text-primary" />
                  Outcomes & Impact
                </h2>
                <ul className="space-y-3">
                  {project.outcomes.map((outcome, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      {outcome}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Action Buttons */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-2xl shadow-primary/20 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-md rounded-3xl overflow-hidden border border-primary/30 animate-glow">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Explore This Project
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-xl shadow-primary/30 hover:shadow-2xl transition-all duration-300 rounded-full px-8 py-6 border-0 animate-glow"
                >
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border border-primary/50 hover:bg-primary/20 shadow-xl shadow-primary/20 hover:shadow-2xl transition-all duration-300 rounded-full px-8 py-6 bg-background/95 backdrop-blur-md animate-shimmer"
                >
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    View Source Code
                  </a>
                </Button>
                {project.links.dashboard && (
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border border-accent/50 hover:bg-accent/20 shadow-xl shadow-accent/20 hover:shadow-2xl transition-all duration-300 rounded-full px-8 py-6 bg-background/95 backdrop-blur-md animate-shimmer"
                  >
                    <Link href={project.links.dashboard}>
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Dashboard
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}