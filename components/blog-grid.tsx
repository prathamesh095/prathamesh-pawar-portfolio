"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Eye, Heart, MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: "ml-model-deployment-aws",
    title: "Complete Guide to ML Model Deployment on AWS",
    excerpt:
      "Learn how to deploy machine learning models to production using AWS SageMaker, Lambda, and API Gateway with real-world examples.",
    content: "Full article content here...",
    author: "Prathamesh Sanjay Pawar",
    publishDate: "2024-01-15",
    readTime: "12 min read",
    category: "machine-learning",
    tags: ["AWS", "Machine Learning", "Deployment", "SageMaker"],
    image: "/ml-deployment-aws-guide.jpg",
    views: 2847,
    likes: 156,
    comments: 23,
    featured: true,
  },
  {
    id: "data-visualization-best-practices",
    title: "Data Visualization Best Practices for Business Dashboards",
    excerpt:
      "Essential principles and techniques for creating effective business dashboards that drive decision-making.",
    content: "Full article content here...",
    author: "Prathamesh Sanjay Pawar",
    publishDate: "2024-01-10",
    readTime: "8 min read",
    category: "data-visualization",
    tags: ["Tableau", "Power BI", "Dashboard Design", "Business Intelligence"],
    image: "/dashboard-best-practices.jpg",
    views: 1923,
    likes: 89,
    comments: 15,
  },
  {
    id: "python-pandas-advanced-techniques",
    title: "Advanced Pandas Techniques for Data Scientists",
    excerpt:
      "Master advanced pandas operations including multi-indexing, groupby transformations, and performance optimization.",
    content: "Full article content here...",
    author: "Prathamesh Sanjay Pawar",
    publishDate: "2024-01-05",
    readTime: "15 min read",
    category: "python",
    tags: ["Python", "Pandas", "Data Analysis", "Performance"],
    image: "/pandas-advanced-techniques.jpg",
    views: 3421,
    likes: 234,
    comments: 45,
  },
  {
    id: "sql-window-functions-guide",
    title: "Mastering SQL Window Functions for Analytics",
    excerpt: "Comprehensive guide to SQL window functions with practical examples for data analysis and reporting.",
    content: "Full article content here...",
    author: "Prathamesh Sanjay Pawar",
    publishDate: "2023-12-28",
    readTime: "10 min read",
    category: "sql",
    tags: ["SQL", "Window Functions", "Data Analysis", "PostgreSQL"],
    image: "/sql-window-functions.jpg",
    views: 1654,
    likes: 78,
    comments: 12,
  },
  {
    id: "customer-churn-prediction-case-study",
    title: "Customer Churn Prediction: A Complete Case Study",
    excerpt:
      "End-to-end machine learning project predicting customer churn with feature engineering, model selection, and deployment.",
    content: "Full article content here...",
    author: "Prathamesh Sanjay Pawar",
    publishDate: "2023-12-20",
    readTime: "18 min read",
    category: "case-studies",
    tags: ["Machine Learning", "Churn Prediction", "Feature Engineering", "Classification"],
    image: "/customer-churn-case-study.jpg",
    views: 2156,
    likes: 145,
    comments: 28,
  },
  {
    id: "time-series-forecasting-python",
    title: "Time Series Forecasting with Python and Prophet",
    excerpt:
      "Learn to build accurate time series forecasting models using Facebook's Prophet library with seasonal decomposition.",
    content: "Full article content here...",
    author: "Prathamesh Sanjay Pawar",
    publishDate: "2023-12-15",
    readTime: "14 min read",
    category: "machine-learning",
    tags: ["Time Series", "Forecasting", "Prophet", "Python"],
    image: "/time-series-forecasting.jpg",
    views: 1876,
    likes: 92,
    comments: 19,
  },
]

export function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6
  const totalPages = Math.ceil(blogPosts.length / postsPerPage)

  const currentPosts = blogPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="space-y-12">
      {/* Featured Post */}
      {featuredPost && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
          <Card className="overflow-hidden border-0 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredPost.image || "/placeholder.svg?height=400&width=600"}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Featured</Badge>
                </div>

                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <Badge variant="outline" className="mr-2">
                      {featuredPost.category.replace("-", " ")}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(featuredPost.publishDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 line-clamp-2">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">{featuredPost.excerpt}</p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        <span>{featuredPost.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        <span>{featuredPost.likes}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button asChild>
                    <Link href={`/blog/${featuredPost.id}`}>
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Regular Posts Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg?height=200&width=400"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs">
                    {post.category.replace("-", " ")}
                  </Badge>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 2}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Heart className="w-3 h-3 mr-1" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-3 h-3 mr-1" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  asChild
                >
                  <Link href={`/blog/${post.id}`}>
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  onClick={() => setCurrentPage(page)}
                  className="w-10"
                >
                  {page}
                </Button>
              ))}

              <Button
                variant="outline"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
