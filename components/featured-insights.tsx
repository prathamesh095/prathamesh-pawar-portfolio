"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, BarChart3, Brain } from "lucide-react"
import Link from "next/link"

const insights = [
  {
    title: "Customer Churn Prediction Model",
    description:
      "Built a machine learning model that predicts customer churn with 94% accuracy, helping reduce churn by 23%.",
    type: "Machine Learning",
    image: "/customer-churn-prediction-dashboard.jpg",
    metrics: { accuracy: "94%", improvement: "23%" },
    icon: Brain,
    href: "/projects/customer-churn",
  },
  {
    title: "Sales Performance Dashboard",
    description: "Interactive Tableau dashboard providing real-time insights into sales performance across regions.",
    type: "Visualization",
    image: "/sales-performance-dashboard-tableau.jpg",
    metrics: { regions: "12", kpis: "15+" },
    icon: BarChart3,
    href: "/dashboards/sales-performance",
  },
  {
    title: "Market Trend Analysis",
    description: "Comprehensive analysis of market trends using time series forecasting and sentiment analysis.",
    type: "Analytics",
    image: "/market-trend-analysis-charts.jpg",
    metrics: { accuracy: "89%", timeframe: "2 Years" },
    icon: TrendingUp,
    href: "/blog/market-trend-analysis",
  },
]

export function FeaturedInsights() {
  const [currentInsight, setCurrentInsight] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInsight((prev) => (prev + 1) % insights.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentItem = insights[currentInsight]
  const Icon = currentItem.icon

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Highlighting some of my most impactful data science projects and insights
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main featured item */}
          <Card className="overflow-hidden border-0 bg-gradient-to-br from-card to-muted/50">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={currentItem.image || "/placeholder.svg"}
                    alt={currentItem.title}
                    className="w-full h-64 md:h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{currentItem.type}</Badge>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 mr-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">Featured Project</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{currentItem.title}</h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{currentItem.description}</p>

                  {/* Metrics */}
                  <div className="flex gap-4 mb-6">
                    {Object.entries(currentItem.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <Button className="group w-fit" asChild>
                    <Link href={currentItem.href}>
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {insights.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentInsight(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentInsight
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Quick navigation to other insights */}
          <div className="grid md:grid-cols-2 gap-4 mt-12">
            {insights
              .filter((_, index) => index !== currentInsight)
              .slice(0, 2)
              .map((insight, index) => {
                const Icon = insight.icon
                return (
                  <Card
                    key={insight.title}
                    className="group cursor-pointer hover:shadow-md transition-all duration-300"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                            {insight.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{insight.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
          </div>
        </div>
      </div>
    </section>
  )
}
