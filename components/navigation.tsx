"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Search, Menu, X, Home, User, Award, Briefcase, BarChart3, BookOpen, Mail, Command } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Skills", href: "/skills", icon: Award },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: Mail },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (searchQuery.trim()) {
      // Mock search results - in real app, this would be an API call
      const mockResults = [
        { title: "Customer Churn Prediction", type: "project", url: "/projects/customer-churn" },
        { title: "Sales Dashboard", type: "dashboard", url: "/dashboards/sales" },
        { title: "Python Programming", type: "skill", url: "/skills#python" },
        { title: "ML Deployment Guide", type: "blog", url: "/blog/ml-deployment" },
      ].filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
      setSearchResults(mockResults)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setSearchOpen(true)
      }
      if (e.key === "Escape") {
        setSearchOpen(false)
        setSearchQuery("")
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        scrolled ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-sm py-2" : "bg-transparent py-4",
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-slate-800 dark:bg-slate-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-lg">PP</span>
            </div>
            <span className="font-semibold text-xl hidden sm:block group-hover:text-primary transition-colors duration-300">
              Prathamesh Pawar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/80 hover:shadow-md hover:scale-105",
                  )}
                >
                  <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span>{item.name}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-primary-foreground rounded-full animate-pulse" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "hidden sm:flex transition-all duration-300 hover:scale-105",
                  searchOpen ? "bg-muted" : "",
                )}
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search className="w-4 h-4" />
                <span className="ml-2 text-sm text-foreground">Search...</span>
                <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-foreground opacity-100">
                  <Command className="w-3 h-3" />K
                </kbd>
              </Button>

              {searchOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-background border border-border rounded-xl shadow-xl z-50 animate-in slide-in-from-top-2 duration-200">
                  <div className="p-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search projects, blog posts, skills..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-muted rounded-lg border-0 focus:ring-2 focus:ring-primary focus:outline-none"
                        autoFocus
                      />
                    </div>

                    {searchResults.length > 0 && (
                      <div className="mt-3 space-y-1">
                        {searchResults.slice(0, 5).map((result, index) => (
                          <Link
                            key={index}
                            href={result.url}
                            className="block p-2 rounded-lg hover:bg-muted transition-colors"
                            onClick={() => {
                              setSearchOpen(false)
                              setSearchQuery("")
                            }}
                          >
                            <div className="flex items-center space-x-2">
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                {result.type}
                              </span>
                              <span className="text-sm">{result.title}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <ThemeToggle />

            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden transition-all duration-300 hover:scale-105"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative w-4 h-4">
                <Menu
                  className={cn(
                    "w-4 h-4 absolute transition-all duration-300",
                    isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100",
                  )}
                />
                <X
                  className={cn(
                    "w-4 h-4 absolute transition-all duration-300",
                    isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0",
                  )}
                />
              </div>
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-out",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="px-2 pt-4 pb-6 space-y-2 bg-card/50 backdrop-blur-sm border border-border rounded-xl mt-4">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/80 hover:shadow-md hover:translate-x-1",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}

            <div className="px-4 pt-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 bg-muted rounded-lg border-0 focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {searchOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 sm:hidden"
          onClick={() => setSearchOpen(false)}
        />
      )}
    </header>
  )
}
