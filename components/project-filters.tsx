"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, X } from "lucide-react"

const categories = [
  "All",
  "Machine Learning",
  "Data Visualization",
  "Analytics",
  "NLP",
  "Deep Learning",
  "Business Intelligence",
]

const technologies = [
  "Python",
  "R",
  "SQL",
  "Tableau",
  "Power BI",
  "TensorFlow",
  "Scikit-learn",
  "Pandas",
  "Apache Spark",
]

const domains = ["Healthcare", "Finance", "E-commerce", "Marketing", "Operations", "Supply Chain"]

export function ProjectFilters() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedTechs, setSelectedTechs] = useState<string[]>([])
  const [selectedDomains, setSelectedDomains] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) => (prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]))
  }

  const toggleDomain = (domain: string) => {
    setSelectedDomains((prev) => (prev.includes(domain) ? prev.filter((d) => d !== domain) : [...prev, domain]))
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("All")
    setSelectedTechs([])
    setSelectedDomains([])
  }

  const hasActiveFilters =
    selectedCategory !== "All" || selectedTechs.length > 0 || selectedDomains.length > 0 || searchTerm

  return (
    <div className="mb-8 space-y-4">
      {/* Search and Filter Toggle */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Filters
          {hasActiveFilters && (
            <Badge variant="secondary" className="ml-1 px-1.5 py-0.5 text-xs">
              {[selectedCategory !== "All" ? 1 : 0, selectedTechs.length, selectedDomains.length].reduce(
                (a, b) => a + b,
              )}
            </Badge>
          )}
        </Button>
      </div>

      {/* Expanded Filters */}
      {showFilters && (
        <div className="bg-card border rounded-lg p-6 space-y-6">
          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-3">Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-semibold mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant={selectedTechs.includes(tech) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                  onClick={() => toggleTech(tech)}
                >
                  {tech}
                  {selectedTechs.includes(tech) && <X className="w-3 h-3 ml-1" />}
                </Badge>
              ))}
            </div>
          </div>

          {/* Business Domains */}
          <div>
            <h3 className="font-semibold mb-3">Business Domain</h3>
            <div className="flex flex-wrap gap-2">
              {domains.map((domain) => (
                <Badge
                  key={domain}
                  variant={selectedDomains.includes(domain) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                  onClick={() => toggleDomain(domain)}
                >
                  {domain}
                  {selectedDomains.includes(domain) && <X className="w-3 h-3 ml-1" />}
                </Badge>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <div className="flex justify-end">
              <Button variant="ghost" onClick={clearFilters} className="text-muted-foreground">
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
