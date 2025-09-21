"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { User, Briefcase, BarChart3, BookOpen, Brain, ArrowRight, Mail } from "lucide-react"
import { ScrollAnimation } from "./scroll-animations"
import { AnimatedCounter } from "./animated-counter"

const tiles = [
  {
    title: "About Me",
    description: "My journey in data science and analytics",
    icon: User,
    href: "/about",
    color: "from-primary/20 to-secondary/20",
    stats: "5+ Years Experience",
    preview: "Passionate data scientist with expertise in machine learning and business intelligence",
  },
  {
    title: "Skills & Expertise",
    description: "Technical skills and proficiencies",
    icon: Brain,
    href: "/skills",
    color: "from-accent/20 to-primary/20",
    stats: "15+ Technologies",
    preview: "Python, R, SQL, Machine Learning, Deep Learning, Data Visualization",
  },
  {
    title: "Projects",
    description: "Data science and ML projects",
    icon: Briefcase,
    href: "/projects",
    color: "from-primary/20 to-accent/20",
    stats: "12+ Projects",
    preview: "Customer churn prediction, sales forecasting, sentiment analysis, and more",
  },
  {
    title: "Dashboards",
    description: "Interactive data visualizations",
    icon: BarChart3,
    href: "/dashboards",
    color: "from-secondary/20 to-accent/20",
    stats: "8+ Dashboards",
    preview: "Tableau, Power BI, and custom web dashboards for business insights",
  },
  {
    title: "Blog & Insights",
    description: "Data science articles and case studies",
    icon: BookOpen,
    href: "/blog",
    color: "from-accent/20 to-secondary/20",
    stats: "20+ Articles",
    preview: "Technical tutorials, industry insights, and project case studies",
  },
  {
    title: "Contact",
    description: "Get in touch for collaborations",
    icon: Mail,
    href: "/contact",
    color: "from-primary/20 to-secondary/20",
    stats: "Let's Connect",
    preview: "Available for data science projects, consulting, and collaborations",
  },
]

export function OverviewTiles() {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary)/0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollAnimation animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Explore My Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover my work across different areas of data science and analytics
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiles.map((tile, index) => {
            const Icon = tile.icon
            const isHovered = hoveredTile === index

            return (
              <ScrollAnimation key={tile.title} animation="scaleIn" delay={index * 100}>
                <Link href={tile.href}>
                  <Card
                    className={`group cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-3 border-0 bg-gradient-to-br ${tile.color} backdrop-blur-sm transform hover:scale-[1.02] relative overflow-hidden`}
                    onMouseEnter={() => setHoveredTile(index)}
                    onMouseLeave={() => setHoveredTile(null)}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : ""}`}
                    />

                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`p-3 rounded-xl bg-background/80 backdrop-blur-sm transition-all duration-500 ${isHovered ? "scale-110 rotate-6 shadow-lg" : ""}`}
                        >
                          <Icon
                            className={`w-6 h-6 transition-colors duration-300 ${isHovered ? "text-accent" : "text-primary"}`}
                          />
                        </div>
                        <ArrowRight
                          className={`w-5 h-5 text-muted-foreground transition-all duration-500 ${isHovered ? "translate-x-2 -translate-y-1 text-primary scale-125 rotate-12" : ""}`}
                        />
                      </div>

                      <h3
                        className={`text-xl font-semibold mb-2 transition-all duration-300 ${isHovered ? "text-primary scale-105" : ""}`}
                      >
                        {tile.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 leading-relaxed transition-all duration-300">
                        {tile.description}
                      </p>

                      <div
                        className={`text-sm text-primary/80 mb-4 transition-all duration-500 overflow-hidden ${isHovered ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}
                      >
                        {tile.preview}
                      </div>

                      <div className="flex items-center justify-between">
                        <span
                          className={`text-sm font-medium transition-all duration-300 ${isHovered ? "text-accent scale-105" : "text-primary"}`}
                        >
                          {tile.stats}
                        </span>
                        <div
                          className={`w-2 h-2 rounded-full bg-primary transition-all duration-500 ${isHovered ? "scale-[2] animate-pulse bg-accent shadow-lg shadow-accent/50" : ""}`}
                        />
                      </div>

                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-1000 ${isHovered ? "translate-x-full" : ""}`}
                      />
                    </CardContent>
                  </Card>
                </Link>
              </ScrollAnimation>
            )
          })}
        </div>

        {/* Quick stats */}
        <ScrollAnimation animation="fadeInUp" delay={600}>
          <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm border border-primary/10">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">Portfolio Highlights</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-3xl font-bold text-primary mb-2 transition-transform duration-300 group-hover:scale-110">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-muted-foreground">Datasets Analyzed</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-primary mb-2 transition-transform duration-300 group-hover:scale-110">
                  <AnimatedCounter end={25} suffix="+" />
                </div>
                <div className="text-muted-foreground">ML Models Built</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-primary mb-2 transition-transform duration-300 group-hover:scale-110">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <div className="text-muted-foreground">Visualizations</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-primary mb-2 transition-transform duration-300 group-hover:scale-110">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
