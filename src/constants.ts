export const RESUME_DATA = {
  name: "Udaykumar Jewoor",
  firstName: "Udaykumar",
  lastName: "Jewoor",
  title: "Full-Stack Engineer",
  profileImage: "/my-image.jpeg", // South Asian male professional headshot
  specialization: "Backend Systems & AI Integration",
  email: "udaykumargjewoor@gmail.com",
  phone: "+91 7259931948",
  location: "Bengaluru, India",
  github: "https://github.com/UdaykumarJewoor",
  linkedin: "https://linkedin.com/in/udaykumar-jewoor",
  website: "https://techie-uday.netlify.app/",
  summary: "A results-driven Software Engineer with 3+ years of experience in architecting high-performance backend solutions. Expert in Java/Spring Boot ecosystems, microservices, and modern cloud infrastructures. Currently pioneering AI-driven features to bridge the gap between traditional engineering and the future of intelligent systems.",
  skills: {
    backend: {
      title: "Core Engineering",
      items: ["Java", "Spring Boot", "Microservices", "Kafka", "Spring AI", "OpenAI API", "RESTful APIs"],
    },
    frontend: {
      title: "Modern Web",
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"],
    },
    databases: {
      title: "Data Architecture",
      items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    },
    devops: {
      title: "Cloud & Scale",
      items: ["Azure DevOps", "Docker", "Kubernetes", "Jenkins", "CI/CD Pipelines"],
    }
  },
  experience: [
    {
      role: "Software Engineer",
      company: "HG Infotech",
      period: "Aug 2023 – Present",
      location: "Bengaluru",
      description: "Leading the development of mission-critical backend services, focusing on scalability and security.",
      highlights: [
        "Architected microservices that handle high-concurrency travel bookings.",
        "Optimized database queries reducing latency by 40% for search operations.",
        "Implemented robust JWT-based security protocols across all service layers.",
        "Mentored junior developers and established clean code standards."
      ]
    },
    // {
    //   role: "Junior Software Engineer",
    //   company: "Tech Solutions Inc.",
    //   period: "Jan 2022 – July 2023",
    //   location: "Remote",
    //   description: "Contributed to the development of enterprise-level web applications using Java and Spring.",
    //   highlights: [
    //     "Assisted in migrating monolithic applications to microservices architecture.",
    //     "Developed reusable UI components with React and integrated with REST APIs.",
    //     "Improved system reliability by implementing comprehensive unit and integration tests."
    //   ]
    // }
  ],
  projects: [
    {
      title: "Fastays",
      category: "Travel Tech",
      description: "A comprehensive travel booking engine supporting multi-modal transport and hotel reservations with real-time availability.",
      tech: ["Spring Boot", "Microservices", "Kafka", "Razorpay"],
      stats: "50k+ Monthly Users",
      link: "#"
    },
    {
      title: "AI Talent Matcher",
      category: "HR Tech / AI",
      description: "Intelligent recruitment platform that uses LLMs to parse resumes and match candidates with job descriptions with 95% accuracy.",
      tech: ["OpenAI", "Spring AI", "PostgreSQL", "React"],
      stats: "95% Match Accuracy",
      link: "#"
    },
    {
      title: "Secret Santa Engine",
      category: "Social / Personal",
      description: "Automated gift-exchange platform with advanced randomization algorithms and secure notification systems.",
      tech: ["Java", "MongoDB", "SMTP", "Docker"],
      stats: "Personal Project",
      link: "#"
    }
  ],
  education: {
    degree: "B.E. in Mechanical Engineering",
    college: "Basaveshwar Engineering College",
    period: "2018 – 2022",
    cgpa: "6.57 / 10"
  }
};
