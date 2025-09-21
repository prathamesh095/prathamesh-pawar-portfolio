"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, Calendar, CheckCircle } from "lucide-react"

const certifications = [
  {
    id: "aws-ml",
    title: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    date: "2023",
    status: "Active",
    credentialId: "AWS-MLS-2023-001",
    verifyUrl: "https://aws.amazon.com/verification",
    logo: "/aws-logo.png",
    skills: ["Machine Learning", "AWS SageMaker", "Data Engineering", "Model Deployment"],
    description: "Validates expertise in building, training, tuning, and deploying ML models on AWS.",
  },
  {
    id: "gcp-data-engineer",
    title: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2023",
    status: "Active",
    credentialId: "GCP-PDE-2023-002",
    verifyUrl: "https://cloud.google.com/certification/verification",
    logo: "/gcp-logo.png",
    skills: ["BigQuery", "Dataflow", "Cloud ML Engine", "Data Pipeline"],
    description: "Demonstrates ability to design and build data processing systems on Google Cloud.",
  },
  {
    id: "tableau-certified",
    title: "Tableau Desktop Certified Professional",
    issuer: "Tableau",
    date: "2022",
    status: "Active",
    credentialId: "TAB-DCP-2022-003",
    verifyUrl: "https://www.tableau.com/learn/certification/verification",
    logo: "/tableau-logo.png",
    skills: ["Data Visualization", "Dashboard Design", "Advanced Analytics", "Tableau Prep"],
    description: "Advanced certification in Tableau Desktop for complex data visualization and analysis.",
  },
  {
    id: "microsoft-azure-ai",
    title: "Microsoft Azure AI Engineer Associate",
    issuer: "Microsoft",
    date: "2022",
    status: "Active",
    credentialId: "MS-AI-102-2022-004",
    verifyUrl: "https://docs.microsoft.com/en-us/learn/certifications/verification",
    logo: "/microsoft-logo.png",
    skills: ["Azure Cognitive Services", "Machine Learning", "Computer Vision", "NLP"],
    description: "Validates skills in designing and implementing AI solutions using Azure AI services.",
  },
  {
    id: "databricks-lakehouse",
    title: "Databricks Certified Data Engineer Professional",
    issuer: "Databricks",
    date: "2023",
    status: "Active",
    credentialId: "DB-DEP-2023-005",
    verifyUrl: "https://credentials.databricks.com/verification",
    logo: "/databricks-logo.png",
    skills: ["Apache Spark", "Delta Lake", "Data Lakehouse", "ETL Pipelines"],
    description: "Advanced certification in building and maintaining data engineering solutions on Databricks.",
  },
  {
    id: "snowflake-architect",
    title: "SnowPro Advanced: Data Architect",
    issuer: "Snowflake",
    date: "2023",
    status: "Active",
    credentialId: "SF-ADA-2023-006",
    verifyUrl: "https://www.snowflake.com/certifications/verification",
    logo: "/snowflake-logo.png",
    skills: ["Data Architecture", "Data Modeling", "Performance Optimization", "Security"],
    description: "Expert-level certification in designing and implementing Snowflake data architectures.",
  },
]

export function CertificationsGrid() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Professional Certifications</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Industry-recognized certifications demonstrating expertise in cloud platforms, data engineering, and machine
          learning technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <Card key={cert.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                    <Badge variant="outline" className="text-xs">
                      {cert.status}
                    </Badge>
                  </div>
                </div>
              </div>

              <h3 className="font-bold text-lg mb-2 line-clamp-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>

              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Issued {cert.date}</span>
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{cert.description}</p>

              <div className="space-y-3">
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">Key Skills</p>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {cert.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{cert.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="pt-2">
                  <Button size="sm" variant="outline" className="w-full bg-transparent" asChild>
                    <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Verify Credential
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
