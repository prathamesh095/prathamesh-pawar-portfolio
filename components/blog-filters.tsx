"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Filter, X } from "lucide-react"

const categories = [
  { id: "all", name: "All Posts", count: 24 },
  { id: "machine-learning", name: "Machine Learning", count: 8 },
  { id: "data-visualization", name: "Data Visualization", count: 6 },
  { id: "python", name: "Python", count: 7 },
  { id: "sql", name: "SQL", count: 4 },
  { id: "business-intelligence", name: "Business Intelligence", count: 5 },
  { id: "tutorials", name: "Tutorials", count: 9 },
  { id: "case-studies", name: "Case Studies", count: 6 },
  { id: "industry-insights", name: "Industry Insights", count: 4 },
]

const tags = [
  "Deep Learning",
  "Tableau",
  "Power BI",
  "AWS",
  "Statistics",
  "Data Engineering",
  "Pandas",
  "Scikit-learn",
  "TensorFlow",
  "Data Analysis",
  "Predictive Modeling",
  "Time Series",
  "NLP",
  "Computer Vision",
  "Big Data",
  "Cloud Computing",
]

export function BlogFilters() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showAllTags, setShowAllTags] = useState(false)

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const clearFilters = () => {
    setSelectedCategory("all")
    setSelectedTags([])
  }

  const hasActiveFilters = selectedCategory !== "all" || selectedTags.length > 0

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Filter className="w-5 h-5 text-primary mr-2" />
              <h3 className="font-semibold">Filter Posts</h3>
            </div>
            {hasActiveFilters && (
              <Button variant="outline" size="sm" onClick={clearFilters}>
                <X className="w-4 h-4 mr-1" />
                Clear All
              </Button>
            )}
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-medium text-sm mb-3">Categories</h4>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name} ({category.count})
                </Badge>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h4 className="font-medium text-sm mb-3">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, showAllTags ? tags.length : 8).map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
              {tags.length > 8 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAllTags(!showAllTags)}
                  className="h-6 px-2 text-xs"
                >
                  {showAllTags ? "Show Less" : `+${tags.length - 8} More`}
                </Button>
              )}
            </div>
          </div>

          {/* Active Filters Summary */}
          {hasActiveFilters && (
            <div className="pt-4 border-t">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Showing {selectedCategory !== "all" ? categories.find((c) => c.id === selectedCategory)?.count : 24}{" "}
                  posts
                  {selectedTags.length > 0 && ` with ${selectedTags.length} tag${selectedTags.length > 1 ? "s" : ""}`}
                </span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
