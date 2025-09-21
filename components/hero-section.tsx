"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { ScrollAnimation } from "./scroll-animations"
import { AnimatedCounter } from "./animated-counter"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const roles = ["Data Analyst", "Data Scientist", "ML Engineer", "Business Intelligence Analyst"]
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    if (!mounted) return

    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [mounted, roles.length])

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">Prathamesh Pawar</h1>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Main heading */}
          <ScrollAnimation animation="fadeInUp">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Prathamesh Sanjay Pawar
              </h1>

              {/* Animated role */}
              <div className="h-16 flex items-center justify-center">
                <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
                  <span className="inline-block transition-all duration-500 ease-in-out transform hover:scale-105">
                    {roles[currentRole]}
                  </span>
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Value proposition */}
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transforming complex data into actionable insights through advanced analytics, machine learning, and
              compelling visualizations that drive business growth.
            </p>
          </ScrollAnimation>

          {/* Stats */}
          <ScrollAnimation animation="scaleIn" delay={400}>
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto py-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  <AnimatedCounter end={5} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </ScrollAnimation>

          {/* CTA buttons */}
          <ScrollAnimation animation="fadeInUp" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="group transform hover:scale-105 transition-all duration-200" asChild>
                <a href="/resume.pdf" target="_blank" rel="noreferrer">
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group bg-transparent transform hover:scale-105 transition-all duration-200"
                asChild
              >
                <Link href="app\projects\[id]\page.tsx">
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="ghost"
                className="transform hover:scale-105 transition-all duration-200"
                asChild
              >
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </Link>
              </Button>
            </div>
          </ScrollAnimation>

          {/* Social links */}
          <ScrollAnimation animation="fadeInUp" delay={800}>
            <div className="flex justify-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="transform hover:scale-110 transition-all duration-200"
                asChild
              >
                <a
                  href="https://github.com/prathamesh095"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="transform hover:scale-110 transition-all duration-200"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/prathamesh095/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="transform hover:scale-110 transition-all duration-200"
                asChild
              >
                <a href="mailto:prathameshpawar.official@gmail.com" className="hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </ScrollAnimation>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
