"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Database, BarChart3, Brain, Code, Cloud, TrendingUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const skillCategories = [
  {
    id: "programming",
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 95, experience: "5+ years", projects: 25 },
      { name: "R", level: 90, experience: "4+ years", projects: 18 },
      { name: "SQL", level: 92, experience: "5+ years", projects: 30 },
      { name: "JavaScript", level: 85, experience: "3+ years", projects: 12 },
      { name: "Scala", level: 75, experience: "2+ years", projects: 8 },
      { name: "Java", level: 70, experience: "2+ years", projects: 6 },
    ],
  },
  {
    id: "ml-ai",
    title: "Machine Learning & AI",
    icon: Brain,
    skills: [
      { name: "Scikit-learn", level: 95, experience: "4+ years", projects: 22 },
      { name: "TensorFlow", level: 88, experience: "3+ years", projects: 15 },
      { name: "PyTorch", level: 85, experience: "3+ years", projects: 12 },
      { name: "XGBoost", level: 92, experience: "4+ years", projects: 20 },
      { name: "Keras", level: 87, experience: "3+ years", projects: 14 },
      { name: "OpenCV", level: 80, experience: "2+ years", projects: 8 },
    ],
  },
  {
    id: "data-viz",
    title: "Data Visualization",
    icon: BarChart3,
    skills: [
      { name: "Tableau", level: 95, experience: "4+ years", projects: 25 },
      { name: "Power BI", level: 90, experience: "3+ years", projects: 18 },
      { name: "Plotly", level: 88, experience: "3+ years", projects: 16 },
      { name: "D3.js", level: 82, experience: "2+ years", projects: 10 },
      { name: "Matplotlib", level: 92, experience: "4+ years", projects: 30 },
      { name: "Seaborn", level: 90, experience: "4+ years", projects: 28 },
    ],
  },
  {
    id: "databases",
    title: "Databases & Big Data",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 90, experience: "4+ years", projects: 20 },
      { name: "MySQL", level: 88, experience: "4+ years", projects: 18 },
      { name: "MongoDB", level: 85, experience: "3+ years", projects: 12 },
      { name: "Apache Spark", level: 82, experience: "2+ years", projects: 10 },
      { name: "Hadoop", level: 78, experience: "2+ years", projects: 8 },
      { name: "Redis", level: 75, experience: "2+ years", projects: 6 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 85, experience: "3+ years", projects: 15 },
      { name: "Google Cloud", level: 80, experience: "2+ years", projects: 10 },
      { name: "Docker", level: 88, experience: "3+ years", projects: 16 },
      { name: "Kubernetes", level: 75, experience: "2+ years", projects: 8 },
      { name: "Git", level: 95, experience: "5+ years", projects: 35 },
      { name: "CI/CD", level: 82, experience: "2+ years", projects: 12 },
    ],
  },
  {
    id: "analytics",
    title: "Analytics & BI Tools",
    icon: TrendingUp,
    skills: [
      { name: "Google Analytics", level: 90, experience: "4+ years", projects: 20 },
      { name: "Looker", level: 85, experience: "2+ years", projects: 12 },
      { name: "Jupyter", level: 95, experience: "5+ years", projects: 40 },
      { name: "Apache Airflow", level: 80, experience: "2+ years", projects: 10 },
      { name: "Streamlit", level: 88, experience: "3+ years", projects: 15 },
      { name: "Dash", level: 85, experience: "2+ years", projects: 12 },
    ],
  },
]

export function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState("programming")

  return (
    <div className="space-y-8 mb-16 bg-gradient-to-br from-background/90 via-muted to-card dark:from-background dark:via-muted dark:to-card py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Technical Skills Matrix
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Proficiency levels based on years of experience, project complexity, and real-world application.
        </p>
      </motion.div>

      <Tabs
        value={selectedCategory}
        onValueChange={setSelectedCategory}
        className="max-w-5xl mx-auto"
      >
        <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 bg-muted/50 p-2 rounded-xl">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 py-3 px-4 rounded-lg bg-card hover:bg-muted/50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium hidden sm:inline">{category.title.split(" ")[0]}</span>
              </TabsTrigger>
            )
          })}
        </TabsList>

        <AnimatePresence mode="wait">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <TabsContent key={category.id} value={category.id} asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 mt-8"
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary mr-3" />
                      <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card className="hover:shadow-md transition-shadow bg-card border-border">
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h4 className="font-semibold text-lg text-foreground">{skill.name}</h4>
                                <p className="text-sm text-muted-foreground">{skill.experience}</p>
                              </div>
                              <Badge variant="outline" className="text-xs bg-accent/20 text-accent-foreground">
                                {skill.projects} projects
                              </Badge>
                            </div>

                            <div className="space-y-2">
                              <div className="flex justify-between text-sm text-muted-foreground">
                                <span>Proficiency</span>
                                <span className="font-medium">{skill.level}%</span>
                              </div>
                              <Progress
                                value={skill.level}
                                className="h-2 bg-muted [&>div]:bg-gradient-to-r [&>div]:from-primary/80 [&>div]:to-accent/80"
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            )
          })}
        </AnimatePresence>
      </Tabs>
    </div>
  )
}