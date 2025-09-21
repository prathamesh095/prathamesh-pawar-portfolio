import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-slate-800 dark:bg-slate-700 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm">PP</span>
              </div>
              <span className="font-semibold text-lg">Prathamesh Pawar</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Data Analyst & Data Scientist passionate about turning data into actionable insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/dashboards" className="text-muted-foreground hover:text-foreground transition-colors">
                  Dashboards
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/achievements" className="text-muted-foreground hover:text-foreground transition-colors">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/prathamesh095" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://www.linkedin.com/in/prathamesh095/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:prathameshpawar.official@gmail.com">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>
            <div className="mt-4 space-y-1">
              <p className="text-sm text-muted-foreground">
                <Mail className="w-3 h-3 inline mr-1" />
                prathameshpawar.official@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© {currentYear} Prathamesh Sanjay Pawar. All rights reserved.</p>
          <p className="text-muted-foreground text-sm mt-2 sm:mt-0">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
