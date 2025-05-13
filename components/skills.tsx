import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  {name : 'Python', description :'Expert in LLM Python API and Frameworks like Langchain, Llama Index, CrewAI, MemGPT, Swarm etc'},
  {name:'Database', description :'Expert in Relational and Vector Databases , Graph Databases'},
  {name: 'Machine Learning', description:'Proficient in PyTorch,Tensorflow,JAX'},
  { name: 'Java', description: 'Expert in core Java and advanced concepts' },
  { name: 'Spring Boot', description: 'Proficient in building microservices with Spring Boot' },
  { name: 'Microservices', description: 'Experienced in designing and implementing microservices architecture' },
  { name: 'RESTful APIs', description: 'Skilled in developing RESTful web services' },
  { name: 'SQL', description: 'Proficient in writing complex SQL queries and database design' },
  { name: 'DevOps', description: 'Familiar with CI/CD, Docker, and Kubernetes' },
]

export default function Skills() {
  return (
    <div id="skills" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Skills & Expertise</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Key technologies and competencies I've mastered over the years.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <Card key={skill.name}>
                <CardHeader>
                  <CardTitle>{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{skill.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
