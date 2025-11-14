
import type { serviceElemType } from "../types/types";

export const servicePages:serviceElemType[] = [
  {
    route: "/services/cloud",
    title: "Cloud",
    heading: "Empowering Businesses Through Cloud Innovation",

    sections: [
      {
        title: "Competitive Advantage",
        description:
          "Our cloud-first strategy gives businesses the edge in scalability, cost-efficiency, and performance.",
        image: "/images/cloud-advantage.png",
      },
      {
        title: "Our Approach",
        description:
          "We provide end-to-end solutions—from infrastructure setup to application deployment. Our team ensures seamless integration and optimal performance.",
        image: "/images/cloud-approach.png",
      },
      {
        title: "Impact We Deliver",
        description:
          "With our cloud services, businesses experience increased efficiency, reduced costs, and enhanced scalability.",
        image: "/images/cloud-impact.png",
      },
      {
        title: "Cloud Careers",
        description:
          "Join our cloud team and work on solutions that help tech to high impact. Explore our open positions and become a part of our innovation journey.",
        image: "/images/cloud-careers.png",
      },
    ],
  },
  {
    route: "/services/devops",
    title: "DevOps",

    heading: "Accelerating Delivery with DevOps Excellence",

    sections: [
      {
        title: "Continuous Integration & Delivery",
        description:
          "We implement CI/CD pipelines that reduce release cycles and improve code quality.",
        image: "/images/devops-ci-cd.png",
      },
      {
        title: "Infrastructure as Code",
        description:
          "Our team uses tools like Terraform and Ansible to manage scalable infrastructure.",
        image: "/images/devops-iac.png",
      },
      {
        title: "Monitoring & Reliability",
        description:
          "We ensure system health with real-time monitoring, alerting, and incident response.",
        image: "/images/devops-monitoring.png",
      },
      {
        title: "DevOps Careers",
        description:
          "Join our DevOps team and help build resilient, automated systems. Explore open roles today.",
        image: "/images/devops-careers.png",
      },
    ],
  },
  {
    route: "/services/support",
    title: "Customer Service",
    heading: "Redefining Customer Experience with Intelligent Support",

    sections: [
      {
        title: "Personalized Support",
        description:
          "We combine data analytics, CRM systems, and automation to deliver tailored customer experiences.",
        image: "/images/support-personalized.png",
      },
      {
        title: "Impact We Deliver",
        description:
          "Our solutions reduce response times, increase efficiency, and provide valuable insights for continuous improvement.",
        image: "/images/support-impact.png",
      },
      {
        title: "Customer Service Careers",
        description:
          "Join our customer service team and help redefine support. Explore our open positions and be part of the change.",
        image: "/images/support-careers.png",
      },
    ],
  },
];
