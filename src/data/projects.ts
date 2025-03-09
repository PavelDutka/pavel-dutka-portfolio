
// Project data for the portfolio
export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  tags: string[];
  tools: string[];
  client: string;
  year: string;
  category: string;
  liveLink?: string;
  repoLink?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Modern House Archviz",
    description: "High-quality architectural visualization of a contemporary house with before/after comparison. Created using Blender and post-processed in Photoshop for maximum visual impact.",
    fullDescription: `This architectural visualization project showcases a modern house design with meticulous attention to lighting, materials, and environmental details. The goal was to create photorealistic renders that would help clients visualize the final result before construction began.

The project involved:
- Creating detailed 3D models in Blender
- Developing realistic materials and textures
- Setting up natural and artificial lighting scenarios
- Rendering high-resolution images for marketing materials
- Creating before/after comparisons to demonstrate the transformation`,
    image: "./images/portfolio/house.webp",
    gallery: [
      "../images/portfolio/house.webp",
      "../images/portfolio/LivingRoom__mq_1030_Azure_Sun.001_Composite.png",
      "../images/portfolio/PCroom2__mq_1030_Azure_Sun.001_Composite.png"
    ],
    tags: ["3D Visualization", "Architecture", "Blender"],
    tools: ["Blender", "Photoshop", "botaniq"],
    client: "Personal Project",
    year: "2022",
    category: "3D",
    liveLink: "/404",
    repoLink: "/404"
  },
  {
    id: 2,
    title: "Tiny house visualisation",
    description: "Realistic render of a mountain retreat with attention to atmospheric lighting and environmental details.",
    fullDescription: `This tiny house visualization project was created to showcase a sustainable mountain retreat concept. The focus was on creating a cozy, inviting atmosphere while highlighting the integration of the structure with its natural surroundings.

Key aspects of this project:
- Environmental lighting techniques to capture dawn/dusk ambiance
- Detailed natural surroundings including vegetation and terrain
- Interior/exterior visualization showing the compact but functional space
- Attention to material details and weathering effects
- Multiple perspective views to communicate the full design concept`,
    image: "./images/portfolio/tinyHouse.webp",
    gallery: [
      "/images/portfolio/tinyHouse.webp",
      "/images/portfolio/front.webp",
      "/images/portfolio/top.webp"
    ],
    tags: ["3D Visualization", "Environment", "Lighting"],
    tools: ["Blender", "Photoshop", "botaniq"],
    client: "Personal Project",
    year: "2023",
    category: "3d",
    liveLink: "/404",
    repoLink: "/404"
  },
  {
    id: 3,
    title: "Financial Advisor Website",
    description: "Clean, professional website design for a financial advisor. Built with HTML and CSS.",
    fullDescription: `This comprehensive website for a financial advisor was designed to provide both information and interactive tools for potential and existing clients. The site features a clean, professional aesthetic that inspires trust while offering powerful functionality.

Key features developed:
- Responsive, mobile-first design
- Interactive financial calculators
- Real-time market data visualizations
- Secure client portal for document sharing
- Content management system for blog and resources
- SEO optimization`,
    image: "./images/portfolio/patrman_mockup.webp",
    gallery: [
      "/images/portfolio/patrman_mockup.webp",
      "/images/portfolio/Screenshot 2025-03-07 231031.jpg",
      "/images/portfolio/patrman_laptop.png"
    ],
    tags: ["Web Design", "UI/UX", "React"],
    tools: ["HTML", "CSS", "javascript", "php"],
    client: "Lukáš Patrman",
    year: "2024",
    category: "web",
    liveLink: "https://patrman.cz/",
    repoLink: "https://github.com/PavelDutka/LukasPatrman"
  },
  {
    id: 4,
    title: "Portfolio website",
    description: "Clean, professional website design for my personal brand with interactive UI elements.",
    fullDescription: `This portfolio website project showcases my work and skills using modern web technologies. The site features a clean, minimalist design with interactive elements and smooth animations to create an engaging user experience.

Development highlights:
- React-based frontend with TypeScript for type safety
- Framer Motion animations for smooth transitions and effects
- Responsive design that works flawlessly on all devices
- Custom-built components and layout system
- Dark mode support with theme switching
- Project filtering and categorization`,
    image: "./images/portfolio/portfolio_mockup.webp",
    gallery: [
      "/images/portfolio/portfolio_mockup.webp",
      "/images/portfolio/portfolio_mockup_mobile.jpg",
      "/images/portfolio/portfolio_mockup_laptop.jpg"
    ],
    tags: ["Web Design", "UI/UX", "React"],
    tools: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    client: "Personal Project",
    year: "2025",
    category: "web",
    liveLink: "https://paveldutka.com",
    repoLink: "https://github.com/PavelDutka/pavel-dutka-portfolio"
  },
  {
    id: 5,
    title: "Puppet Automation Setup",
    description: "In this project, I implemented a comprehensive Puppet-based automation system for managing and configuring Windows workstations in a company environment. The goal was to replace manual processes with a declarative approach, ensuring consistency and efficiency across all devices.",
    fullDescription: `As part of my work in automating IT management processes, I developed a robust Puppet-based solution for the configuration and maintenance of Windows workstations in an enterprise setting. The project was aimed at replacing manual, time-consuming procedures with a fully automated, declarative system to ensure uniformity, efficiency, and scalability. This solution not only enhanced the overall IT workflow but also contributed to increased operational reliability and reduced human error.

The implementation included:
- Server configuration management with Puppet
- Custom module development for specific application needs
- Integration with existing CI/CD pipelines
- Monitoring and reporting dashboard
- Automated testing of infrastructure changes
- Documentation and knowledge transfer`,
    image: "./images/portfolio/puppet_automation.webp",
    gallery: [
    ],
    tags: ["Automation", "DevOps", "Infrastructure"],
    tools: ["Puppet", "Ansible", "CI/CD", "Git"],
    client: "polygoniq",
    year: "2025",
    category: "automation",
    liveLink: "https://github.com/PavelDutka/puppet-installation",
    repoLink: "https://github.com/PavelDutka/puppet-installation"
  },
  {
    id: 6,
    title: "3D models for traffiq addon",
    description: "Low poly, high quality 3D models for the Traffiq addon. Created using Blender and for maximum visual impact.",
    fullDescription: `This project involved creating a series of low-poly, highly optimized 3D models for the Traffiq addon - a popular plugin for 3D environment creation. The models needed to be visually appealing while maintaining performance efficiency.

The project deliverables included:
- Collection of various vehicle types including cars, trucks, and boats
- Street elements and urban furniture
- Optimized topology for real-time rendering
- PBR material setup with customizable color options
- Level of detail (LOD) variations for performance scaling`,
    image: "./images/portfolio/Rowboat.jpg",
    gallery: [
      "../images/portfolio/Rowboat.jpg",
      "../images/portfolio/Boeing_737.png",
      "../images/portfolio/Canoe.jpg"
    ],
    tags: ["Blender", "3D modeling", "Texturing"],
    tools: ["Blender", "Substance Painter", "Unity"],
    client: "polygoniq",
    year: "2022",
    category: "3d",
    liveLink: "https://blendermarket.com/products/car-library-traffiq-vehicles-for-blender?search_id=37615550",
    repoLink: "https://blendermarket.com/products/car-library-traffiq-vehicles-for-blender?search_id=37615550"
  },
  {
    id: 7,
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform with integrated payment processing and inventory management.",
    fullDescription: `This e-commerce platform was developed to provide small businesses with an affordable yet powerful online sales solution. The project focused on creating an intuitive user experience while implementing robust backend systems for inventory and order management.

Key features implemented:
- Responsive product catalog with advanced filtering options
- Secure payment gateway integration
- Real-time inventory tracking system
- Customer account management with order history
- Admin dashboard for product and order management
- Automated email notifications for order status updates`,
    image: "./images/portfolio/ecommerce_mockup.webp",
    gallery: [
      "/images/portfolio/ecommerce_mockup.webp",
      "/images/portfolio/WF_papez_A.webp",
      "/images/portfolio/WF_papez_B.webp"
    ],
    tags: ["Web Development", "E-commerce", "UI/UX"],
    tools: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
    client: "Local Retail Collective",
    year: "2024",
    category: "web",
    liveLink: "https://example.com/ecommerce",
    repoLink: "https://github.com/example/ecommerce"
  },
  {
    id: 8,
    title: "Educational Institution Website",
    description: "Modern, accessible website redesign for an educational institution with student portal integration.",
    fullDescription: `This comprehensive website redesign for an educational institution focused on improving accessibility, user experience, and information architecture. The project involved close collaboration with faculty, students, and administrators to ensure all stakeholder needs were addressed.

The website implementation included:
- Accessible design that meets WCAG 2.1 AA standards
- Integration with existing student information systems
- Interactive campus map and virtual tour features
- Event calendar with filtering and registration capabilities
- Responsive design optimized for all devices
- Performance optimizations for fast loading times
- Multi-language support for international students`,
    image: "./images/portfolio/WF_papez_A_wide.webp",
    gallery: [
      "/images/portfolio/WF_papez_A_wide.webp",
      "/images/portfolio/WF_papez_C.webp",
      "/images/portfolio/WF_papez_A (Small).jpeg"
    ],
    tags: ["Web Design", "Education", "Accessibility"],
    tools: ["WordPress", "PHP", "JavaScript", "MySQL", "Figma"],
    client: "Metropolitan University",
    year: "2023",
    category: "web",
    liveLink: "https://example.com/university",
    repoLink: "https://github.com/example/university-website"
  },
  {
    id: 9,
    title: "Industrial Complex Visualization",
    description: "Detailed 3D visualization of an industrial manufacturing complex for planning and presentation purposes.",
    fullDescription: `This project involved creating a comprehensive 3D visualization of a planned industrial manufacturing complex. The visualization was used for both internal planning and stakeholder presentations to communicate the facility layout, workflow, and spatial relationships.

The visualization project included:
- Highly detailed exterior and interior modeling of the facility
- Accurate scale representations of manufacturing equipment
- Animated sequences showing production workflows
- Multiple lighting scenarios (day/night/emergency)
- Integration of actual engineering specifications
- Optimized models for real-time exploration in VR
- Creation of flythrough videos for presentations`,
    image: "./images/portfolio/Bregenz.webp",
    gallery: [
      "/images/portfolio/Bregenz.webp",
      "/images/portfolio/EE_anim.jpg"
    ],
    tags: ["3D Visualization", "Industrial", "VR"],
    tools: ["Blender", "Unreal Engine", "Substance Painter", "After Effects"],
    client: "Global Manufacturing Corp",
    year: "2023",
    category: "3D",
    liveLink: "/404",
    repoLink: "/404"
  }
];
