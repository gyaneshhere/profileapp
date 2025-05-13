import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Generative AI Architect",
    company: "Snaplogic",
    duration: "June 2021 - Present",
    description: "Working on geberative AI architecture using Python , Sagemake Jumpstart and LLM's. Implementing CI/CD pipelines and containerization with Docker and Kubernetes."
  },
  {
    title: "Principal Cloud Solutions Architect",
    company: "Informatica",
    duration: "Apr 2014 - June 2021",
    description: "Architecting Informatica Cloud Service from groundup. Building connectors in Java and using cloud native services in AWS, Azure and GCP."
  },
  {
    title: "Senior Software Engineer",
    company: "Oracle",
    duration: "Jan 2013 - Apr 2014",
    description: "Started as a Senior Java developer. Gained experience in core Java concepts and basic web development of Oracle Middleware Flagship Product, Oracle Integration Cloud Service."
  },
  {
    title: "Senior Software Engineer",
    company: "Hewlett Packard",
    duration: "August 2009 - Jan 2013",
    description: "Started as a Java developer. Gained experience in core Java concepts and basic web development and backend services.Built a custom ERP from groundup for a Fortune 100 Client."
  }
]

export default function Experience() {
  return (
    <div id="experience" className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Professional Experience</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            My journey in software development over the years.
          </p>
        </div>
        <div className="mt-10">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                  <CardDescription>{exp.company} | {exp.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
