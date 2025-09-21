import {
  Database,
  Code,
  Brain,
  BarChart3,
  TrendingUp,
  Zap,
  Eye,
  Target,
} from "lucide-react"
import ProjectDetailsClient from "./ProjectDetailsClient"

// Define the Project type based on the projects array structure
interface Project {
  id: string
  title: string
  tagline: string
  description: string
  fullDescription: string
  image: string
  category: string
  technologies: string[]
  domain: string
  metrics: Record<string, string>
  features: string[]
  process: Array<{
    step: string
    description: string
    icon: string // Changed from React.ComponentType to string
  }>
  gallery: string[]
  links: {
    github: string
    demo: string
    dashboard?: string
  }
  keyLearnings: string[]
  outcomes: string[]
  year: number
  tags: string[]
  achievements: string[]
}

// Project data
const projects: Project[] = [
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
        icon: "Database", // Changed to string
      },
      {
        step: "Feature Engineering",
        description: "Created meaningful features from raw data including RFM analysis and behavioral patterns",
        icon: "Code",
      },
      {
        step: "Model Development",
        description:
          "Implemented and compared multiple algorithms including XGBoost, Random Forest, and Neural Networks",
        icon: "Brain",
      },
      {
        step: "Model Evaluation",
        description: "Rigorous testing using cross-validation and business metrics validation",
        icon: "BarChart3",
      },
      {
        step: "Deployment & Monitoring",
        description: "Deployed to production with monitoring dashboards and automated retraining pipeline",
        icon: "TrendingUp",
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
        icon: "Database",
      },
      {
        step: "Time Series Analysis",
        description: "Applied ACF/PACF plots and stationarity tests to understand data characteristics.",
        icon: "BarChart3",
      },
      {
        step: "Model Implementation",
        description: "Built ARIMA with Statsmodels and LSTM with TensorFlow, compared performance with MAPE.",
        icon: "Brain",
      },
      {
        step: "Visualization and Reporting",
        description: "Created interactive dashboards with Plotly for forecast visualization.",
        icon: "Eye",
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
        icon: "Zap",
      },
      {
        step: "Model Training",
        description: "Fine-tuned BERT model using Hugging Face Transformers for sentiment classification.",
        icon: "Brain",
      },
      {
        step: "API Development",
        description: "Built Flask API for real-time inference.",
        icon: "Code",
      },
      {
        step: "Performance Optimization",
        description: "Optimized for throughput using batch processing and GPU acceleration.",
        icon: "TrendingUp",
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
        icon: "Database",
      },
      {
        step: "Model Development",
        description: "Implemented Isolation Forest and Autoencoder for anomaly detection.",
        icon: "Brain",
      },
      {
        step: "Integration",
        description: "Integrated with transaction system using Kafka for real-time processing.",
        icon: "Zap",
      },
      {
        step: "Testing",
        description: "Evaluated with precision-recall curves and AUPRC.",
        icon: "BarChart3",
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
        icon: "Database",
      },
      {
        step: "Algorithm Implementation",
        description: "Built collaborative filtering with ALS and content-based with TF-IDF.",
        icon: "Code",
      },
      {
        step: "Hybrid Model",
        description: "Combined models for improved recommendation accuracy.",
        icon: "Brain",
      },
      {
        step: "Deployment",
        description: "Deployed with Redis for fast retrieval.",
        icon: "Zap",
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
        icon: "Target",
      },
      {
        step: "Model Building",
        description: "Used PuLP to create linear programming models.",
        icon: "Code",
      },
      {
        step: "Simulation",
        description: "Implemented Monte Carlo simulation with SimPy.",
        icon: "Brain",
      },
      {
        step: "Analysis",
        description: "Visualized results with Tableau for actionable insights.",
        icon: "BarChart3",
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

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  return <ProjectDetailsClient project={project} />
}