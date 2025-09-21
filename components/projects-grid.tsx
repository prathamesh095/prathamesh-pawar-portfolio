"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Github, Eye, BarChart3, Brain, TrendingUp, Database, Zap, Target } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction Model",
    description:
      "Built a machine learning model using ensemble methods to predict customer churn with 94% accuracy, helping reduce churn by 23%.",
    image: "/customer-churn-prediction-dashboard.jpg",
    category: "Machine Learning",
    technologies: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
    domain: "E-commerce",
    metrics: {
      accuracy: "94%",
      precision: "91%",
      recall: "89%",
      impact: "23% churn reduction",
    },
    links: {
      github: "https://github.com/prathamesh095/customer-churn-prediction",
      demo: "/projects/customer-churn-prediction",
      dashboard: "/dashboards/churn-analysis",
    },
    icon: Brain,
    featured: true,
  },
  {
    id: "sales-forecasting",
    title: "Sales Forecasting with Time Series",
    description:
      "Developed ARIMA and LSTM models for sales forecasting with 89% accuracy, improving inventory planning efficiency.",
    image: "/sales-forecasting-time-series.jpg",
    category: "Analytics",
    technologies: ["Python", "TensorFlow", "Pandas", "Plotly"],
    domain: "Finance",
    metrics: {
      accuracy: "89%",
      mape: "8.2%",
      improvement: "35% efficiency gain",
    },
    links: {
      github: "https://github.com/prathamesh095/sales-forecasting",
      demo: "/projects/sales-forecasting",
    },
    icon: TrendingUp,
  },
  {
    id: "sentiment-analysis",
    title: "Social Media Sentiment Analysis",
    description:
      "NLP pipeline for real-time sentiment analysis of social media posts using BERT and custom preprocessing.",
    image: "/sentiment-analysis-nlp.jpg",
    category: "NLP",
    technologies: ["Python", "BERT", "Transformers", "Flask"],
    domain: "Marketing",
    metrics: {
      accuracy: "92%",
      f1Score: "0.91",
      throughput: "1000 posts/min",
    },
    links: {
      github: "https://github.com/prathamesh095/sentiment-analysis",
      demo: "/projects/sentiment-analysis",
    },
    icon: Brain,
  },
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection",
    description:
      "Anomaly detection system using isolation forests and neural networks to identify fraudulent transactions.",
    image: "/fraud-detection-system.jpg",
    category: "Machine Learning",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "SQL"],
    domain: "Finance",
    metrics: {
      precision: "96%",
      recall: "88%",
      falsePositive: "0.02%",
    },
    links: {
      github: "https://github.com/prathamesh095/fraud-detection",
      demo: "/projects/fraud-detection",
    },
    icon: Target,
  },
  {
    id: "recommendation-engine",
    title: "Product Recommendation Engine",
    description: "Collaborative filtering and content-based recommendation system increasing user engagement by 40%.",
    image: "/recommendation-engine.jpg",
    category: "Machine Learning",
    technologies: ["Python", "Apache Spark", "MLlib", "Redis"],
    domain: "E-commerce",
    metrics: {
      engagement: "+40%",
      ctr: "+25%",
      revenue: "+18%",
    },
    links: {
      github: "https://github.com/prathamesh095/recommendation-engine",
      demo: "/projects/recommendation-engine",
    },
    icon: Zap,
  },
  {
    id: "supply-chain-optimization",
    title: "Supply Chain Optimization",
    description:
      "Linear programming and simulation models to optimize supply chain operations and reduce costs by 15%.",
    image: "/supply-chain-optimization.jpg",
    category: "Analytics",
    technologies: ["Python", "PuLP", "SimPy", "Tableau"],
    domain: "Supply Chain",
    metrics: {
      costReduction: "15%",
      efficiency: "+22%",
      deliveryTime: "-18%",
    },
    links: {
      github: "https://github.com/prathamesh095/supply-chain-optimization",
      demo: "/projects/supply-chain-optimization",
      dashboard: "/dashboards/supply-chain",
    },
    icon: Database,
  },
]

export function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [previewProject, setPreviewProject] = useState<(typeof projects)[0] | null>(null)

  const openPreview = (project: (typeof projects)[0]) => {
    setPreviewProject(project)
  }

  const closePreview = () => {
    setPreviewProject(null)
  }

  return (
    <div className="space-y-8">
      {/* Featured Project */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Project</h2>
        {projects
          .filter((p) => p.featured)
          .map((project) => {
            const Icon = project.icon
            return (
              <Card key={project.id} className="overflow-hidden border-0 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        {project.category}
                      </Badge>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <Icon className="w-6 h-6 text-primary mr-2" />
                        <span className="text-sm text-muted-foreground">Featured Project</span>
                      </div>

                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      <p className="text-muted-foreground mb-6">{project.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-xl font-bold text-primary">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, " $1")}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button variant="secondary" onClick={() => openPreview(project)}>
                          <Eye className="w-4 h-4 mr-2" />
                          Project Preview
                        </Button>
                        <Button asChild>
                          <Link href={project.links.demo}>
                            <Eye className="w-4 h-4 mr-2" />
                            View Full Details
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        {project.links.dashboard && (
                          <Button variant="outline" asChild>
                            <Link href={project.links.dashboard}>
                              <BarChart3 className="w-4 h-4 mr-2" />
                              Dashboard
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
      </div>

      {/* All Projects Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-6">All Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs">
                      {project.category}
                    </Badge>
                    <Badge className="absolute top-3 right-3 bg-background/80 text-foreground text-xs">
                      {project.domain}
                    </Badge>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <Icon className="w-4 h-4 text-primary mr-2" />
                      <h3 className="font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <div className="flex gap-2 w-full">
                    <Button size="sm" variant="secondary" className="flex-1" onClick={() => openPreview(project)}>
                      <Eye className="w-3 h-3 mr-1" />
                      Preview
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.links.demo}>Details</Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3" />
                      </a>
                    </Button>
                    {project.links.dashboard && (
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.links.dashboard}>
                          <BarChart3 className="w-3 h-3" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Project Preview Modal */}
      <Dialog open={!!previewProject} onOpenChange={closePreview}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {previewProject && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  {previewProject.icon && <previewProject.icon className="w-5 h-5 text-primary" />}
                  {previewProject.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={previewProject.image || "/placeholder.svg"}
                    alt={previewProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-primary text-primary-foreground">{previewProject.category}</Badge>
                    <Badge variant="secondary">{previewProject.domain}</Badge>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Overview</h3>
                  <p className="text-muted-foreground">{previewProject.description}</p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {previewProject.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-primary/5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Metrics */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Metrics</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(previewProject.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-xl font-bold text-primary">{value}</div>
                        <div className="text-sm text-muted-foreground capitalize">{key.replace(/([A-Z])/g, " $1")}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t">
                  <Button asChild className="flex-1">
                    <Link href={previewProject.links.demo} onClick={closePreview}>
                      <Eye className="w-4 h-4 mr-2" />
                      View Full Details
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={previewProject.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  {previewProject.links.dashboard && (
                    <Button variant="outline" asChild>
                      <Link href={previewProject.links.dashboard} onClick={closePreview}>
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Dashboard
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
