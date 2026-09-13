export interface Project {
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  role: string;
  technologies: string[];
  workflow: string[];
  github: string;
  live: string;
}

export const projects: Project[] = [
  {
    number: "01",
    title: "SharePoint CRM System",
    category: "SOFTWARE ENGINEERING / BUSINESS APPLICATION",
    year: "2026",
    description:
      "A business CRM application developed with SPFx and React, using SharePoint Lists as the central data source. The system manages opportunities through Sales, Tendering, and Execution stages with dedicated business logic for handover, status management, and project assignment.",
    role: "Software Developer",
    technologies: [
      "React",
      "TypeScript",
      "SPFx",
      "SharePoint",
      "PnPjs",
      "Power Apps",
      "Power Automate",
    ],
    workflow: [
      "Opportunity Management",
      "Sales Workflow",
      "Tendering Handover",
      "Tendering Management",
      "Project Assignment",
      "Execution Tracking",
    ],
    github: "https://github.com/Mohanad-Tamer/CRMSystem",
    live: "#",
  },

  {
    number: "02",
    title: "Supermarket Sales Analyzer",
    category: "DATA ENGINEERING / BUSINESS INTELLIGENCE",
    year: "2026",
    description:
      "An end-to-end data engineering pipeline that collects product and sales data through a REST API, processes and transforms the data using Python and Pandas, stores the structured dataset in MySQL, and produces Excel-based analysis and visualizations.",
    role: "Data Engineering / BI",
    technologies: [
      "Python",
      "Pandas",
      "REST API",
      "MySQL",
      "SQL",
      "Excel",
    ],
    workflow: [
      "API Data Extraction",
      "Raw Data Storage",
      "Data Cleaning",
      "Data Transformation",
      "MySQL Loading",
      "Data Analysis",
      "Excel Visualization",
    ],
    github: "https://github.com/Mohanad-Tamer/Supermarket-sales_analyzer",
    live: "#",
  },

  {
    number: "03",
    title: "Employee Data Analysis",
    category: "DATA ANALYSIS / BUSINESS INTELLIGENCE",
    year: "2026",
    description:
      "A data analysis project focused on preparing employee information, analyzing departmental data and total salaries, and presenting the results through structured Excel reports.",
    role: "Data Analyst",
    technologies: [
      "Python",
      "Pandas",
      "Excel",
      "Data Analysis",
    ],
    workflow: [
      "Data Preparation",
      "Data Cleaning",
      "Data Transformation",
      "Department Analysis",
      "Salary Analysis",
      "Excel Reporting",
    ],
    github: "https://github.com/Mohanad-Tamer/Employee-Data-Analysis",
    live: "#",
  },

  {
    number: "04",
    title: "Freelancing Platform",
    category: "FULL-STACK DEVELOPMENT",
    year: "2026",
    description:
      "A full-stack freelancing platform designed to connect clients and freelancers. The application supports authentication, job posting, applications, user requests, and database-driven management of platform data.",
    role: "Full-Stack Developer",
    technologies: [
      "React.js",
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
    ],
    workflow: [
      "User Authentication",
      "Client Management",
      "Job Posting",
      "Job Applications",
      "PHP Backend",
      "MySQL Database",
      "CRUD Operations",
    ],
    github: "https://github.com/Mohanad-Tamer/freelancing-platform",
    live: "#",
  },
];