import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'case-management-system',
    title: 'Legal Case Management System',
    description:
      'A React-based complaint input and case tracking system for managing and submitting legal complaints with a clean, accessible interface.',
    longDescription:
      'A personal React project built to practice form-driven UI patterns, component composition, and state management. Users can submit, view, and track legal complaints through a structured multi-step interface.',
    techStack: ['React', 'TypeScript', 'CSS Modules'],
    category: 'react',
    tags: ['React', 'TypeScript'],
    features: [
      'Multi-step complaint submission form',
      'Case listing and status tracking',
      'Accessible, responsive layout',
    ],
    problemSolved:
      'Built as a personal project to practice real-world React patterns including controlled forms, component state, and clean UI structure.',
    githubUrl: 'https://github.com/SowmyaBantupalli/Complaint-Input-System',
    liveUrl:
      'https://complaint-input-system-j2y16zz1v-sowmyabantupallis-projects.vercel.app/',
    gradient: 'from-brand-600 via-indigo-600 to-violet-700',
    accentColor: '#6366f1',
    icon: 'Briefcase',
    featured: true,
    year: '2024',
  },
]
