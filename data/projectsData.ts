interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Optical Character Recognition',
    description: `A high-performance, containerized Full-Stack application designed for real-time text extraction from images. This project features an automated CI/CD Pipeline (Continuous Integration & Delivery) that builds, optimizes, and pushes production-ready images to Docker Hub.`,
    imgSrc: '/static/images/ocr.png',
    href: 'https://github.com/OmarAbuelkassem/Image-Processing-OCR',
  },
  {
    title: 'Group Chat (Real-Time)',
    description: `A lightweight, event-driven chat engine optimized for low-resource environments.`,
    imgSrc: '/static/images/chat.png',
    href: 'https://github.com/OmarAbuelkassem/Group-Chat',
  },
  {
    title: 'SecureAuth',
    description: `A lightweight Identity Provider (IdP) focused on secure authentication and minimalist design.`,
    imgSrc: '/static/images/auth.png',
    href: 'https://github.com/OmarAbuelkassem/IdP',
  },
]

export default projectsData
