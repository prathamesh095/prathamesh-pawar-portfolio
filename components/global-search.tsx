"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Filter, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

// Mock search data - in a real app, this would come from an API
const searchData = [
  {
    id: "customer-churn-ml",
    type: "project",
    title: "Customer Churn Prediction Model",
    description: "Machine learning model to predict customer churn using ensemble methods and feature engineering.",
    category: "Machine Learning",
    tags: ["Python", "Scikit-learn", "XGBoost", "Feature Engineering"],
    url: "/projects/customer-churn-ml",
    date: "2023-11-15",
  },
  {
    id: "sales-dashboard-tableau",
    type: "dashboard",
    title: "Sales Performance Dashboard",
    description: "Interactive Tableau dashboard showing real-time sales metrics and regional performance analysis.",
    category: "Data Visualization",
    tags: ["Tableau", "SQL", "Business Intelligence"],
    url: "/dashboards/sales-dashboard-tableau",
    date: "2023-10-20",
  },
  {
    id: "ml-deployment-aws-blog",
    type: "blog",
    title: "Complete Guide to ML Model Deployment on AWS",
    description: "Step-by-step tutorial for deploying machine learning models to production using AWS services.",
    category: "Tutorial",
    tags: ["AWS", "Machine Learning", "Deployment", "SageMaker"],
    url: "/blog/ml-deployment-aws-blog",
    date: "2024-01-15",
  },
  {
    id: "python-skill",
    type: "skill",
    title: "Python Programming",
    description: "Advanced Python programming with 5+ years experience in data science and machine learning.",
    category: "Programming Language",
    tags: ["Python", "Data Science", "Machine Learning", "Pandas"],
    url: "/skills#python",
    date: "2024-01-01",
  },
]

export function GlobalSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState(searchData)
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [isSearching, setIsSearching] = useState(false)

  const filters = [
    { id: "all", name: "All Results", count: searchData.length },
    { id: "project", name: "Projects", count: searchData.filter((item) => item.type === "project").length },
    { id: "dashboard", name: "Dashboards", count: searchData.filter((item) => item.type === "dashboard").length },
    { id: "blog", name: "Blog Posts", count: searchData.filter((item) => item.type === "blog").length },
    { id: "skill", name: "Skills", count: searchData.filter((item) => item.type === "skill").length },
  ]

  useEffect(() => {
    const performSearch = () => {
      setIsSearching(true)

      // Simulate API delay
      setTimeout(() => {
        let filtered = searchData

        // Filter by type
        if (selectedFilter !== "all") {
          filtered = filtered.filter((item) => item.type === selectedFilter)
        }

        // Filter by search query
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase()
          filtered = filtered.filter(
            (item) =>
              item.title.toLowerCase().includes(query) ||
              item.description.toLowerCase().includes(query) ||
              item.tags.some((tag) => tag.toLowerCase().includes(query)) ||
              item.category.toLowerCase().includes(query),
          )
        }

        setSearchResults(filtered)
        setIsSearching(false)
      }, 300)
    }

    performSearch()
  }, [searchQuery, selectedFilter])

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "project":
        return "🚀"
      case "dashboard":
        return "📊"
      case "blog":
        return "📝"
      case "skill":
        return "🛠️"
      default:
        return "📄"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "project":
        return "bg-blue-100 text-blue-800"
      case "dashboard":
        return "bg-green-100 text-green-800"
      case "blog":
        return "bg-purple-100 text-purple-800"
      case "skill":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <Input
          type="text"
          placeholder="Search projects, blog posts, skills, and more..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 h-14 text-lg"
        />
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 text-primary mr-2" />
            <h3 className="font-semibold">Filter Results</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Badge
                key={filter.id}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setSelectedFilter(filter.id)}
              >
                {filter.name} ({filter.count})
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Search Results */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            {isSearching ? "Searching..." : `${searchResults.length} Results`}
            {searchQuery && ` for "${searchQuery}"`}
          </h2>
        </div>

        {searchResults.length === 0 && !isSearching ? (
          <Card>
            <CardContent className="p-12 text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No results found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {searchResults.map((result) => (
              <Card key={result.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{getTypeIcon(result.type)}</span>
                      <Badge className={`text-xs ${getTypeColor(result.type)}`}>
                        {result.type.charAt(0).toUpperCase() + result.type.slice(1)}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(result.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                    <Link href={result.url}>{result.title}</Link>
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-2">{result.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {result.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {result.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{result.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    <Button variant="outline" size="sm" asChild>
                      <Link href={result.url}>
                        View
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
