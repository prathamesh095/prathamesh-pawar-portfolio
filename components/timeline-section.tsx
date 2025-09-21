"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, Award, TrendingUp } from "lucide-react"

const timelineEvents = [
  {
    id: "current",
    type: "work",
    title: "Senior Data Scientist",
    organization: "TechCorp Analytics",
    location: "Mumbai, India",
    period: "2022 - Present",
    description:
      "Leading data science initiatives for enterprise clients, developing ML models that drive business decisions.",
    achievements: [
      "Built predictive models that increased customer retention by 25%",
      "Led a team of 4 data scientists on multiple client projects",
      "Implemented MLOps pipeline reducing model deployment time by 60%",
    ],
    technologies: ["Python", "TensorFlow", "AWS", "Docker", "Kubernetes"],
    current: true,
  },
  {
    id: "previous-role",
    type: "work",
    title: "Data Analyst",
    organization: "DataInsights Solutions",
    location: "Mumbai, India",
    period: "2020 - 2022",
    description:
      "Specialized in business intelligence and data visualization, creating dashboards for C-level executives.",
    achievements: [
      "Designed 15+ executive dashboards using Tableau and Power BI",
      "Automated reporting processes saving 20 hours/week",
      "Conducted advanced statistical analysis for market research",
    ],
    technologies: ["SQL", "Tableau", "Power BI", "R", "Excel"],
    current: false,
  },
  {
    id: "education-masters",
    type: "education",
    title: "Master of Science in Data Science",
    organization: "Indian Institute of Technology (IIT) Bombay",
    location: "Mumbai, India",
    period: "2018 - 2020",
    description: "Specialized in machine learning, statistical modeling, and big data analytics.",
    achievements: [
      "Graduated with First Class Honors (CGPA: 8.7/10)",
      "Thesis: 'Deep Learning for Time Series Forecasting in Financial Markets'",
      "Published 2 research papers in international conferences",
    ],
    technologies: ["Python", "R", "Hadoop", "Spark", "TensorFlow"],
    current: false,
  },
  {
    id: "internship",
    type: "work",
    title: "Data Science Intern",
    organization: "FinTech Innovations Pvt Ltd",
    location: "Bangalore, India",
    period: "Summer 2019",
    description: "Developed fraud detection models for digital payment systems.",
    achievements: [
      "Built ML model achieving 94% accuracy in fraud detection",
      "Reduced false positive rate by 30%",
      "Presented findings to senior management",
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "PostgreSQL"],
    current: false,
  },
  {
    id: "education-bachelors",
    type: "education",
    title: "Bachelor of Engineering in Computer Science",
    organization: "University of Mumbai",
    location: "Mumbai, India",
    period: "2014 - 2018",
    description: "Foundation in computer science with focus on algorithms, data structures, and software engineering.",
    achievements: [
      "Graduated with Distinction (CGPA: 8.2/10)",
      "Led university's coding club for 2 years",
      "Won 3 hackathons and 5 coding competitions",
    ],
    technologies: ["Java", "C++", "MySQL", "JavaScript", "HTML/CSS"],
    current: false,
  },
  {
    id: "certification-aws",
    type: "certification",
    title: "AWS Certified Machine Learning - Specialty",
    organization: "Amazon Web Services",
    location: "Online",
    period: "2023",
    description: "Advanced certification in machine learning on AWS platform.",
    achievements: [
      "Validated expertise in ML model development and deployment",
      "Demonstrated proficiency in AWS ML services",
      "Enhanced cloud-based ML solution design skills",
    ],
    technologies: ["AWS SageMaker", "Lambda", "S3", "EC2", "CloudFormation"],
    current: false,
  },
]

export function TimelineSection() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Professional Journey</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A timeline of my educational background, professional experience, and key milestones in my data science
          career.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5" />

        <div className="space-y-8">
          {timelineEvents.map((event, index) => {
            const isLeft = index % 2 === 0
            const Icon = event.type === "work" ? Building : event.type === "education" ? Award : TrendingUp

            return (
              <div
                key={event.id}
                className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full border-2 border-background z-10 md:transform md:-translate-x-1.5 ${
                    event.current ? "bg-primary border-primary" : "bg-muted border-border"
                  }`}
                />

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                  <Card
                    className={`hover:shadow-lg transition-all duration-300 ${
                      event.current ? "border-primary/50 bg-primary/5" : ""
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                              event.type === "work"
                                ? "bg-blue-100 text-blue-600"
                                : event.type === "education"
                                  ? "bg-green-100 text-green-600"
                                  : "bg-purple-100 text-purple-600"
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <Badge variant={event.current ? "default" : "outline"} className="text-xs mb-1">
                              {event.type === "work"
                                ? "Experience"
                                : event.type === "education"
                                  ? "Education"
                                  : "Certification"}
                            </Badge>
                          </div>
                        </div>
                        {event.current && <Badge className="bg-primary text-primary-foreground">Current</Badge>}
                      </div>

                      <h3 className="font-bold text-lg mb-1">{event.title}</h3>
                      <p className="font-medium text-primary mb-2">{event.organization}</p>

                      <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{event.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{event.description}</p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Key Achievements</h4>
                          <ul className="space-y-1">
                            {event.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-sm mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-1">
                            {event.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
