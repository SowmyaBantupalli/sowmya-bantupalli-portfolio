export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  techStack: string[]
  category: 'react' | 'angular' | 'fullstack'
  tags: string[]
  features: string[]
  problemSolved: string
  githubUrl: string
  liveUrl: string
  gradient: string
  accentColor: string
  icon: string
  featured: boolean
  year: string
}

export interface Skill {
  name: string
  level: number
  icon?: string
  color: string
}

export interface SkillCategory {
  id: string
  title: string
  icon: string
  color: string
  gradient: string
  skills: Skill[]
}

export interface Experience {
  id: string
  role: string
  company: string
  companyUrl?: string
  period: string
  startDate: string
  endDate: string | 'Present'
  location: string
  type: 'full-time' | 'contract' | 'freelance'
  summary: string
  achievements: string[]
  techStack: string[]
  gradient: string
}

export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  credentialId: string
  credentialUrl: string
  icon: string
  color: string
  gradient: string
  badgeColor: string
  category: 'cloud' | 'frontend' | 'ai' | 'devops'
}

export interface Stat {
  label: string
  value: number
  suffix: string
  prefix?: string
}

export interface NavItem {
  label: string
  href: string
  id: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}
