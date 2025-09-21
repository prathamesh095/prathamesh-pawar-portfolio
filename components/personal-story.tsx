"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  MapPin,
  Heart,
  Coffee,
  BookOpen,
  Camera,
  GraduationCap,
  Award,
  Users,
  Lightbulb,
  Trophy,
  Code,
  Briefcase,
} from "lucide-react"

export function PersonalStory() {
  return (
    <div className="space-y-16 mb-16 relative">
      {/* Animated background elements for glassmorphism effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-r from-secondary/8 to-primary/8 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
      </div>

      {/* Hero Section */}
      <div className="text-center space-y-8 relative z-10">
        <div className="relative inline-block group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <img
            src="/data-scientist-headshot.png"
            alt="Prathamesh Sanjay Pawar"
            className="relative w-48 h-48 rounded-full mx-auto object-cover border-4 border-background shadow-2xl"
          />
          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full p-3 shadow-lg animate-bounce">
            <Heart className="w-5 h-5" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Prathamesh Sanjay Pawar
          </h1>
          <p className="text-2xl text-primary font-medium mb-4">Data Scientist & Analytics Engineer</p>
          <div className="flex items-center justify-center text-muted-foreground">
            <MapPin className="w-5 h-5 mr-2 text-accent" />
            <span className="text-lg">Mumbai, India</span>
          </div>
        </div>
      </div>

      {/* Animated section divider with neon line effect */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-4">
            <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse shadow-lg shadow-primary/50"></div>
          </div>
        </div>
      </div>

      {/* Story Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        <Card className="group border-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
          <CardContent className="relative p-8 z-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-4 shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">My Journey</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My fascination with data began during my engineering studies when I discovered how numbers could tell
                compelling stories about human behavior and business patterns. What started as curiosity about
                statistical analysis evolved into a passion for transforming raw data into actionable insights.
              </p>
              <p>
                Over the past 5+ years, I've had the privilege of working with diverse industries - from e-commerce
                startups to Fortune 500 companies - helping them leverage data to make informed decisions. Each project
                has taught me that behind every dataset lies a story waiting to be discovered.
              </p>
              <p>
                Today, I specialize in building end-to-end data solutions that bridge the gap between complex analytics
                and business value. My approach combines technical expertise with storytelling to ensure insights drive
                real impact.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="group border-0 bg-gradient-to-br from-accent/10 via-secondary/5 to-primary/10 backdrop-blur-sm hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent via-secondary to-primary rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
          <CardContent className="relative p-8 z-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center mr-4 shadow-lg">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Philosophy & Approach</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                I believe that great data science isn't just about algorithms and models - it's about understanding the
                human element behind every data point. My approach focuses on three core principles:
              </p>
              <div className="space-y-4">
                <div className="flex items-start group/item">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Business-First Thinking</p>
                    <p className="text-sm leading-relaxed">
                      Every analysis should answer a business question and drive actionable outcomes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start group/item">
                  <div className="w-3 h-3 bg-gradient-to-r from-accent to-secondary rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Collaborative Innovation</p>
                    <p className="text-sm leading-relaxed">
                      The best insights emerge from cross-functional collaboration and diverse perspectives.
                    </p>
                  </div>
                </div>
                <div className="flex items-start group/item">
                  <div className="w-3 h-3 bg-gradient-to-r from-secondary to-primary rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Continuous Learning</p>
                    <p className="text-sm leading-relaxed">
                      The data landscape evolves rapidly - staying curious and adaptable is essential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Education & Learning */}
      <Card className="group border-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 backdrop-blur-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
        <CardContent className="relative p-8 z-10">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-4 shadow-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              🎓 Education & Learning
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formal Education */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                Formal Education
              </h3>
              <div className="space-y-4 pl-4 border-l-2 border-gradient-to-b from-primary to-accent relative">
                <div className="relative group/timeline">
                  <div className="absolute -left-6 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg group-hover/timeline:scale-125 transition-transform duration-300"></div>
                  <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg hover:bg-card/70 transition-all duration-300 hover:shadow-lg">
                    <p className="font-semibold text-lg">Bachelor of Engineering</p>
                    <p className="text-sm text-muted-foreground">Computer Science & Engineering</p>
                    <p className="text-sm text-accent font-medium">Mumbai University • 2015-2019</p>
                    <p className="text-sm">CGPA: 8.5/10</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Specialization: Data Analytics & Machine Learning
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Extracurricular Activities */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-accent mb-4 flex items-center">
                <Trophy className="w-5 h-5 mr-2" />
                Extracurricular Activities
              </h3>
              <div className="space-y-3">
                <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg hover:bg-card/70 transition-all duration-300 hover:shadow-lg group/activity">
                  <div className="flex items-center mb-2">
                    <Award className="w-4 h-4 text-primary mr-2 group-hover/activity:scale-110 transition-transform duration-300" />
                    <p className="font-medium">Hackathons</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Winner at 3+ national hackathons</p>
                  <p className="text-xs text-accent mt-1">TATA Crucible, Smart India Hackathon</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg hover:bg-card/70 transition-all duration-300 hover:shadow-lg group/activity">
                  <div className="flex items-center mb-2">
                    <Users className="w-4 h-4 text-accent mr-2 group-hover/activity:scale-110 transition-transform duration-300" />
                    <p className="font-medium">Student Clubs</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Data Science Club President</p>
                  <p className="text-xs text-accent mt-1">Tech Fest Coordinator</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg hover:bg-card/70 transition-all duration-300 hover:shadow-lg group/activity">
                  <div className="flex items-center mb-2">
                    <Code className="w-4 h-4 text-secondary mr-2 group-hover/activity:scale-110 transition-transform duration-300" />
                    <p className="font-medium">Competitions</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Case study competitions, Quiz contests</p>
                </div>
              </div>
            </div>

            {/* Workshops & Training */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-secondary mb-4 flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                Workshops & Training
              </h3>
              <div className="space-y-3">
                <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg hover:bg-card/70 transition-all duration-300 hover:shadow-lg">
                  <p className="font-medium">AI/ML Specialization</p>
                  <p className="text-sm text-muted-foreground">Stanford Online • 2020</p>
                  <p className="text-xs text-accent mt-1">Deep Learning, Neural Networks</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg hover:bg-card/70 transition-all duration-300 hover:shadow-lg">
                  <p className="font-medium">Cloud Analytics</p>
                  <p className="text-sm text-muted-foreground">AWS Certified • 2021</p>
                  <p className="text-xs text-accent mt-1">Data Engineering, MLOps</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg hover:bg-card/70 transition-all duration-300 hover:shadow-lg">
                  <p className="font-medium">Advanced Analytics</p>
                  <p className="text-sm text-muted-foreground">Google Cloud • 2022</p>
                  <p className="text-xs text-accent mt-1">BigQuery, Data Studio</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interests & Hobbies */}
      <Card className="group border-0 bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10 backdrop-blur-sm hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary via-primary to-accent rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
        <CardContent className="relative p-8 z-10">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Beyond Data Science
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 group/hobby hover:-translate-y-2 transition-transform duration-300">
              <div className="relative w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto group-hover/hobby:scale-110 transition-transform duration-300 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-0 group-hover/hobby:opacity-50 transition-opacity duration-300"></div>
                <BookOpen className="relative w-10 h-10 text-primary group-hover/hobby:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-lg">Continuous Learning</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Always exploring new technologies, reading research papers, and taking online courses to stay at the
                forefront of data science innovations.
              </p>
            </div>

            <div className="text-center space-y-4 group/hobby hover:-translate-y-2 transition-transform duration-300">
              <div className="relative w-20 h-20 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto group-hover/hobby:scale-110 transition-transform duration-300 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary rounded-full blur opacity-0 group-hover/hobby:opacity-50 transition-opacity duration-300"></div>
                <Camera className="relative w-10 h-10 text-accent group-hover/hobby:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-lg">Photography</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Capturing moments and stories through the lens, which has taught me to see patterns and beauty in
                unexpected places - a skill that translates well to data exploration.
              </p>
            </div>

            <div className="text-center space-y-4 group/hobby hover:-translate-y-2 transition-transform duration-300">
              <div className="relative w-20 h-20 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full flex items-center justify-center mx-auto group-hover/hobby:scale-110 transition-transform duration-300 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-full blur opacity-0 group-hover/hobby:opacity-50 transition-opacity duration-300"></div>
                <Coffee className="relative w-10 h-10 text-secondary group-hover/hobby:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-lg">Coffee & Conversations</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Believer in the power of good coffee and meaningful conversations. Some of my best insights have come
                from casual discussions over a cup of coffee.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Fun Facts */}
      <Card className="group border-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
        <CardContent className="relative p-8 z-10">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Fun Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group/stat hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl font-bold text-primary mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">Cups of coffee consumed while coding</div>
            </div>
            <div className="text-center group/stat hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl font-bold text-accent mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                15+
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">Data science books read this year</div>
            </div>
            <div className="text-center group/stat hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl font-bold text-secondary mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                3
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">Programming languages learned in 2023</div>
            </div>
            <div className="text-center group/stat hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                ∞
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">Curiosity about data patterns</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
