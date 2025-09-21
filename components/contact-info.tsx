"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Linkedin,
  Github,
  Twitter,
  ExternalLink,
  MessageCircle,
  Video,
} from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageCircle className="w-5 h-5 mr-2 text-primary" />
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center">
            <Mail className="w-5 h-5 text-primary mr-3" />
            <div>
              <p className="font-medium">prathamesh.pawar@email.com</p>
              <p className="text-sm text-muted-foreground">Primary email</p>
            </div>
          </div>

          <div className="flex items-center">
            <Phone className="w-5 h-5 text-primary mr-3" />
            <div>
              <p className="font-medium">+91 98765 43210</p>
              <p className="text-sm text-muted-foreground">Available Mon-Fri, 9 AM - 6 PM IST</p>
            </div>
          </div>

          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-primary mr-3" />
            <div>
              <p className="font-medium">Mumbai, India</p>
              <p className="text-sm text-muted-foreground">Open to remote work globally</p>
            </div>
          </div>

          <div className="flex items-center">
            <Clock className="w-5 h-5 text-primary mr-3" />
            <div>
              <p className="font-medium">Response Time</p>
              <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Links */}
      <Card>
        <CardHeader>
          <CardTitle>Connect on Social Media</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
            <a href="https://linkedin.com/in/prathamesh-pawar" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn - Professional Network
              <ExternalLink className="w-3 h-3 ml-auto" />
            </a>
          </Button>

          <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
            <a href="https://github.com/prathamesh-pawar" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub - Code Repository
              <ExternalLink className="w-3 h-3 ml-auto" />
            </a>
          </Button>

          <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
            <a href="https://twitter.com/prathamesh_ds" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-4 h-4 mr-2" />
              Twitter - Data Science Insights
              <ExternalLink className="w-3 h-3 ml-auto" />
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Meeting Options */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Video className="w-5 h-5 mr-2 text-primary" />
            Schedule a Meeting
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Prefer a direct conversation? Schedule a call to discuss your project in detail.
          </p>

          <div className="space-y-3">
            <Button className="w-full" asChild>
              <a href="https://calendly.com/prathamesh-pawar/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule 30-min Discovery Call
              </a>
            </Button>

            <Button variant="outline" className="w-full bg-transparent" asChild>
              <a href="https://calendly.com/prathamesh-pawar/consultation" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-2" />
                Book 1-hour Consultation
              </a>
            </Button>
          </div>

          <div className="pt-4 border-t">
            <h4 className="font-medium mb-2">Available Time Zones</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">IST (UTC+5:30)</Badge>
              <Badge variant="secondary">EST (UTC-5)</Badge>
              <Badge variant="secondary">GMT (UTC+0)</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Answers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium mb-1">What's your typical project timeline?</h4>
            <p className="text-sm text-muted-foreground">
              Most projects range from 2-12 weeks depending on complexity and scope.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-1">Do you work with startups?</h4>
            <p className="text-sm text-muted-foreground">
              I offer flexible pricing and payment terms for early-stage companies.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-1">Can you work remotely?</h4>
            <p className="text-sm text-muted-foreground">
              Yes, I work with clients globally and am experienced in remote collaboration.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
