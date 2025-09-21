"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  timeline: string
  message: string
  newsletter: boolean
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    newsletter: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!formData.message.trim()) newErrors.message = "Message is required"
    if (!formData.projectType) newErrors.projectType = "Please select a project type"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("[v0] Form submitted:", formData)
      setSubmitStatus("success")

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
        newsletter: false,
      })
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (submitStatus === "success") {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for reaching out. I'll get back to you within 24 hours.
          </p>
          <Button onClick={() => setSubmitStatus("idle")}>Send Another Message</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Send className="w-5 h-5 mr-2 text-primary" />
          Send Me a Message
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Your full name"
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your.email@example.com"
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company/Organization</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              placeholder="Your company name (optional)"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="projectType">Project Type *</Label>
              <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                <SelectTrigger className={errors.projectType ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="consulting">Data Science Consulting</SelectItem>
                  <SelectItem value="dashboard">Dashboard Development</SelectItem>
                  <SelectItem value="ml-model">ML Model Development</SelectItem>
                  <SelectItem value="data-analysis">Data Analysis</SelectItem>
                  <SelectItem value="training">Training & Workshops</SelectItem>
                  <SelectItem value="collaboration">Collaboration</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.projectType && <p className="text-sm text-red-500">{errors.projectType}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range</Label>
              <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-5k">Under $5,000</SelectItem>
                  <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                  <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                  <SelectItem value="50k-plus">$50,000+</SelectItem>
                  <SelectItem value="discuss">Let's Discuss</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Project Timeline</Label>
            <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">ASAP</SelectItem>
                <SelectItem value="1-month">Within 1 month</SelectItem>
                <SelectItem value="3-months">Within 3 months</SelectItem>
                <SelectItem value="6-months">Within 6 months</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Project Details *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Tell me about your project, goals, and any specific requirements..."
              rows={5}
              className={errors.message ? "border-red-500" : ""}
            />
            {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
            />
            <Label htmlFor="newsletter" className="text-sm">
              Subscribe to my newsletter for data science insights and updates
            </Label>
          </div>

          {submitStatus === "error" && (
            <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
              <p className="text-sm text-red-700">There was an error sending your message. Please try again.</p>
            </div>
          )}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
