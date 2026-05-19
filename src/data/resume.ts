export type SkillTier = "expert" | "senior" | "proficient"
export type SkillDomain =
  | "cloud"
  | "orchestration"
  | "cicd"
  | "observability"
  | "iac"
  | "scripting"
  | "messaging"
  | "databases"

export interface Skill {
  name: string
  domain: SkillDomain
  tier: SkillTier
  years: number
  context: string
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  current: boolean
  achievements: string[]
  technologies: string[]
  metrics: { label: string; value: string }[]
}

export interface CaseStudy {
  title: string
  subtitle: string
  problem: string
  solution: string
  outcome: string
  technologies: string[]
  metrics: { label: string; value: string }[]
}

export interface Certification {
  name: string
  issuer: string
  status: "active" | "in-progress" | "exploring"
  year?: number
  badgeColor: string
}

export interface Metric {
  value: string
  label: string
  prefix?: string
  suffix?: string
}

// ─── Personal ──────────────────────────────────────────────────────────────
export const personal = {
  name: "Raghu Samreddy",
  tagline: "Building scalable, resilient, and automated infrastructure platforms.",
  email: "samraghuops@gmail.com",
  linkedin: "https://linkedin.com/in/raghusamreddy",
  github: "https://github.com/raghusamreddy",
  location: "Montreal, Canada",
  titles: [
    "Senior DevOps Engineer",
    "Infrastructure Engineer",
    "Kubernetes Specialist",
    "Platform Reliability Engineer",
    "Cloud Automation Engineer",
    "Site Reliability Engineer",
  ],
  summary:
    "Results-driven DevOps, SRE & Kubernetes Platform Engineer with 12+ years of progressive experience in cloud infrastructure, observability, and automation. Deep expertise in managing enterprise Kubernetes platforms including OpenShift, EKS, and AKS, with proven success designing SLAs, SLOs, and SLIs for enterprise applications.",
}

// ─── Hero Metrics Strip ─────────────────────────────────────────────────────
export const metrics: Metric[] = [
  { value: "12", suffix: "+", label: "Years Experience" },
  { value: "200", suffix: "+", label: "IaC Resources" },
  { value: "50", suffix: "%", label: "↓ MTTD" },
  { value: "60", suffix: "%", label: "↓ Deploy Cycles" },
  { value: "99.9", suffix: "%", label: "Platform Uptime" },
]

// ─── Experience ─────────────────────────────────────────────────────────────
export const experience: Experience[] = [
  {
    company: "SAP Labs",
    role: "Senior DevOps & Site Reliability Engineer",
    period: "Aug 2019 – Present",
    location: "Montreal, Canada",
    current: true,
    achievements: [
      "Engineered unified observability platform using Dynatrace, Splunk, ELK, Prometheus & Grafana — reducing MTTD by 50% and MTTR by 40%",
      "Architected CI/CD & DevSecOps pipelines with Harness AI-driven canary analysis and ArgoCD GitOps — reducing deployment cycles by 60%",
      "Led cross-functional team of 6 DevOps/SRE engineers across sprint planning, architecture design, and incident response",
      "Managed 200+ cloud resources with IaC on AWS and Azure, achieving 99.9% uptime across enterprise platforms",
      "Developed Python & Bash automation frameworks eliminating 30+ hours of manual operational toil weekly",
      "Administered enterprise Kubernetes (OpenShift, EKS) clusters with Istio service mesh — improving resource utilization by 40%",
      "Led cloud migrations from on-premises to AWS/Azure with zero-downtime cutovers achieving 25% cost optimization",
    ],
    technologies: [
      "Kubernetes", "OpenShift", "EKS", "Terraform", "Harness", "ArgoCD",
      "Dynatrace", "Splunk", "ELK", "Prometheus", "Grafana", "AWS",
      "Azure", "Istio", "Kong", "Python", "Bash", "Kafka", "OPA/Gatekeeper",
    ],
    metrics: [
      { label: "MTTD Reduction", value: "50%" },
      { label: "Deploy Cycle Reduction", value: "60%" },
      { label: "Team Size", value: "6 Engineers" },
      { label: "IaC Resources", value: "200+" },
    ],
  },
  {
    company: "SAP Hybris",
    role: "Platform Support & DevOps Engineer",
    period: "May 2018 – Jul 2019",
    location: "Montreal, Canada",
    current: false,
    achievements: [
      "Built production-grade CI/CD pipelines with Harness ML-based deployment analysis — reducing release cycles from 2 weeks to 3 days",
      "Integrated Dynatrace APM for end-to-end distributed tracing and real user monitoring — reducing MTTR by 40%",
      "Managed Docker containers and Kubernetes (AKS) clusters with Helm, Istio, and ingress controllers",
      "Automated deployment workflows with Python and Ansible achieving 98% deployment success rate",
    ],
    technologies: [
      "Harness", "Jenkins", "Kubernetes", "AKS", "Docker", "Helm",
      "Istio", "Dynatrace", "Splunk", "Python", "Ansible", "Kafka", "RabbitMQ",
    ],
    metrics: [
      { label: "Release Cycle", value: "2 wks → 3 days" },
      { label: "MTTR Reduction", value: "40%" },
      { label: "Deploy Success", value: "98%" },
    ],
  },
  {
    company: "SAP Hybris",
    role: "Platform Implementation Engineer",
    period: "Jul 2017 – Apr 2018",
    location: "Montreal, Canada",
    current: false,
    achievements: [
      "Implemented SAP Hybris e-commerce platform on cloud infrastructure for enterprise clients",
      "Configured Splunk, Dynatrace, and Grafana observability stack with custom Python monitoring plugins",
      "Hardened Linux servers with SELinux/AppArmor policies for PCI-DSS compliance",
      "Built Ansible playbooks for server provisioning reducing manual setup time by 70%",
    ],
    technologies: [
      "Ansible", "Terraform", "AWS", "Azure", "Splunk", "Dynatrace",
      "Grafana", "Nagios", "Python", "Linux", "RHEL",
    ],
    metrics: [
      { label: "Setup Time Reduction", value: "70%" },
    ],
  },
  {
    company: "CIBC",
    role: "DevOps & Application Support Analyst",
    period: "Jul 2016 – Jun 2017",
    location: "Toronto, ON",
    current: false,
    achievements: [
      "Managed end-to-end CI/CD pipelines with Jenkins, UrbanCode Deploy, and Kubernetes — reducing deployment time by 55%",
      "Led cloud migration of legacy .NET and Java applications from on-premises to Microsoft Azure",
      "Automated with Python, Shell, and PowerShell reducing operational overhead by 30%",
      "Provided 24/7 L3-level on-call support for critical banking applications",
    ],
    technologies: [
      "Jenkins", "UrbanCode", "Kubernetes", "OpenShift", "Docker",
      "Azure", "Python", "PowerShell", "Autosys",
    ],
    metrics: [
      { label: "Deployment Time Reduction", value: "55%" },
      { label: "Overhead Reduction", value: "30%" },
    ],
  },
  {
    company: "Money Mart",
    role: "DevOps Engineer",
    period: "Oct 2014 – Jun 2016",
    location: "Victoria, BC",
    current: false,
    achievements: [
      "Drove strategic cloud migration from on-premises to AWS — achieving 30% cost reduction",
      "Implemented enterprise monitoring with Nagios, Splunk, and Dynatrace for proactive issue detection",
      "Configured and maintained Linux servers with Python-driven performance tuning",
      "Contributed to CI/CD process improvement with Jenkins and Git best practices",
    ],
    technologies: [
      "AWS", "EC2", "RDS", "S3", "Nagios", "Splunk",
      "Dynatrace", "Jenkins", "Docker", "Kubernetes", "Linux",
    ],
    metrics: [
      { label: "Cost Reduction", value: "30%" },
    ],
  },
]

// ─── Skills ─────────────────────────────────────────────────────────────────
export const skills: Skill[] = [
  // Expert tier
  { name: "Kubernetes", domain: "orchestration", tier: "expert", years: 8, context: "OpenShift, EKS, AKS — full cluster lifecycle management" },
  { name: "Terraform", domain: "iac", tier: "expert", years: 7, context: "200+ resources managed, expert-level module design" },
  { name: "Python", domain: "scripting", tier: "expert", years: 10, context: "Automation frameworks, infrastructure tooling, monitoring plugins" },
  { name: "Bash", domain: "scripting", tier: "expert", years: 12, context: "Shell scripting, self-healing systems, operational automation" },
  { name: "Dynatrace", domain: "observability", tier: "expert", years: 6, context: "APM, distributed tracing, RUM, SLO/SLI design" },
  { name: "AWS", domain: "cloud", tier: "expert", years: 8, context: "EC2, EKS, Lambda, S3, RDS, CloudWatch, ALB/ELB" },
  { name: "Azure", domain: "cloud", tier: "expert", years: 7, context: "App Services, AKS, Service Bus, APIM, AAD, RBAC" },

  // Senior tier
  { name: "Harness", domain: "cicd", tier: "senior", years: 5, context: "AI-driven canary analysis, GitOps, deployment verification" },
  { name: "ArgoCD", domain: "cicd", tier: "senior", years: 4, context: "GitOps continuous delivery, app-of-apps pattern" },
  { name: "Jenkins", domain: "cicd", tier: "senior", years: 8, context: "Declarative pipelines, shared libraries, multi-branch" },
  { name: "OpenShift", domain: "orchestration", tier: "senior", years: 6, context: "Red Hat Kubernetes — enterprise OCP deployments" },
  { name: "Splunk", domain: "observability", tier: "senior", years: 7, context: "Log aggregation, KQL queries, dashboards, alerting" },
  { name: "Prometheus", domain: "observability", tier: "senior", years: 5, context: "Metrics collection, PromQL, alerting rules" },
  { name: "Grafana", domain: "observability", tier: "senior", years: 5, context: "Infrastructure dashboards, visualization, alerting" },
  { name: "Helm", domain: "orchestration", tier: "senior", years: 6, context: "Chart development, templating, multi-env values" },
  { name: "Istio", domain: "orchestration", tier: "senior", years: 4, context: "Service mesh, traffic management, mTLS, canary" },
  { name: "Ansible", domain: "iac", tier: "senior", years: 6, context: "Configuration management, playbook development" },
  { name: "ELK Stack", domain: "observability", tier: "senior", years: 5, context: "Elasticsearch, Logstash, Kibana — log analytics" },
  { name: "GitHub Actions", domain: "cicd", tier: "senior", years: 4, context: "Workflow automation, reusable workflows, OIDC" },
  { name: "GitLab CI/CD", domain: "cicd", tier: "senior", years: 4, context: "Pipeline design, runners, environments, security scanning" },
  { name: "Docker", domain: "orchestration", tier: "senior", years: 9, context: "Multi-stage builds, compose, registry management" },

  // Proficient tier
  { name: "Kafka", domain: "messaging", tier: "proficient", years: 4, context: "Event-driven microservice communication, topic management" },
  { name: "RabbitMQ", domain: "messaging", tier: "proficient", years: 3, context: "Async message queues, decoupled service architecture" },
  { name: "Kong", domain: "orchestration", tier: "proficient", years: 3, context: "API Gateway, rate limiting, auth plugins" },
  { name: "OPA/Gatekeeper", domain: "orchestration", tier: "proficient", years: 3, context: "Policy enforcement, admission control, compliance" },
  { name: "PostgreSQL", domain: "databases", tier: "proficient", years: 6, context: "Database administration, performance tuning" },
  { name: "MongoDB", domain: "databases", tier: "proficient", years: 4, context: "NoSQL data management, Atlas, aggregation pipelines" },
  { name: "Redis", domain: "databases", tier: "proficient", years: 4, context: "Caching layer, session management, pub/sub" },
  { name: "AWS Lambda", domain: "cloud", tier: "proficient", years: 4, context: "Serverless automation, event-driven architectures" },
  { name: "Azure DevOps", domain: "cicd", tier: "proficient", years: 4, context: "Pipelines, boards, repos, artifact management" },
  { name: "CloudFormation", domain: "iac", tier: "proficient", years: 4, context: "AWS infrastructure stacks, nested templates" },
  { name: "FluxCD", domain: "cicd", tier: "proficient", years: 2, context: "GitOps toolkit, Kustomize, multi-tenancy" },
  { name: "New Relic", domain: "observability", tier: "proficient", years: 3, context: "APM, browser monitoring, distributed tracing" },
]

// ─── Case Studies ────────────────────────────────────────────────────────────
export const caseStudies: CaseStudy[] = [
  {
    title: "Unified Observability Platform",
    subtitle: "From alert fatigue to precision detection",
    problem:
      "Enterprise platform had fragmented monitoring across 6 tools with no correlation, resulting in multi-hour MTTD and reactive firefighting.",
    solution:
      "Designed and implemented a unified observability stack integrating Dynatrace APM, Splunk log aggregation, ELK, Prometheus/Grafana metrics, and Application Insights. Built SLO/SLI/SLA framework with automated alerting policies.",
    outcome:
      "Reduced MTTD by 50%, MTTR by 40%. Transformed on-call from reactive to proactive. Enabled data-driven capacity planning.",
    technologies: ["Dynatrace", "Splunk", "ELK", "Prometheus", "Grafana", "Application Insights", "Python"],
    metrics: [
      { label: "MTTD Reduction", value: "50%" },
      { label: "MTTR Reduction", value: "40%" },
      { label: "Alert Noise Reduction", value: "~70%" },
    ],
  },
  {
    title: "CI/CD Pipeline Transformation",
    subtitle: "2-week release cycles to same-day deploys",
    problem:
      "Manual deployment processes, no rollback automation, and fragmented pipelines across teams caused 2-week release cycles and frequent production incidents from bad deploys.",
    solution:
      "Architected end-to-end CI/CD with Harness AI-driven canary analysis, automated deployment verification gates, ArgoCD GitOps for continuous delivery, and Istio traffic splitting for safe progressive rollouts.",
    outcome:
      "Deploy cycles reduced 60%, deployment success rate reached 98%, manual approval bottlenecks eliminated, and teams ship to production multiple times daily.",
    technologies: ["Harness", "ArgoCD", "Jenkins", "GitLab CI", "Istio", "Kubernetes", "Helm"],
    metrics: [
      { label: "Deploy Cycle Reduction", value: "60%" },
      { label: "Deploy Success Rate", value: "98%" },
      { label: "Time to Market", value: "2 wks → same day" },
    ],
  },
  {
    title: "Enterprise Kubernetes at Scale",
    subtitle: "Hardening multi-tenant clusters for 99.9% uptime",
    problem:
      "Growing multi-tenant Kubernetes footprint on OpenShift and EKS had no admission control, inconsistent resource quotas, and manual scaling creating instability and security gaps.",
    solution:
      "Implemented OPA/Gatekeeper admission policies, HPA and Cluster Autoscaler for dynamic scaling, Istio service mesh for secure inter-service traffic, and full cluster lifecycle management via IaC.",
    outcome:
      "Resource utilization improved 40%, cluster security posture hardened across all namespaces, 99.9% uptime maintained across enterprise workloads.",
    technologies: ["Kubernetes", "OpenShift", "EKS", "OPA/Gatekeeper", "Istio", "Helm", "Terraform"],
    metrics: [
      { label: "Resource Utilization", value: "+40%" },
      { label: "Platform Uptime", value: "99.9%" },
      { label: "Security Policies", value: "100% enforced" },
    ],
  },
  {
    title: "Automation Framework — 30hrs/Week Reclaimed",
    subtitle: "Turning toil into self-healing infrastructure",
    problem:
      "Infrastructure team spending 30+ hours per week on repetitive manual tasks: provisioning, health checks, backup workflows, log rotation, and configuration drift remediation.",
    solution:
      "Built comprehensive Python and Bash automation frameworks covering Azure resource management, Kubernetes health monitoring, self-healing runbooks, backup orchestration, and automated incident response.",
    outcome:
      "Eliminated 30+ hours of weekly operational toil, enabling the team to focus on platform improvements. Self-healing capabilities reduced overnight on-call pages by ~60%.",
    technologies: ["Python", "Bash", "Ansible", "Azure", "Kubernetes", "Terraform", "PowerShell"],
    metrics: [
      { label: "Weekly Toil Eliminated", value: "30+ hrs" },
      { label: "On-call Pages Reduction", value: "~60%" },
      { label: "Automation Coverage", value: "100+ workflows" },
    ],
  },
]

// ─── Certifications ──────────────────────────────────────────────────────────
export const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    status: "active",
    year: 2022,
    badgeColor: "#FF9900",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "CNCF",
    status: "in-progress",
    badgeColor: "#326CE5",
  },
  {
    name: "Microsoft Azure Administrator",
    issuer: "Microsoft",
    status: "in-progress",
    badgeColor: "#0078D4",
  },
  {
    name: "Certified Kubernetes Security Specialist",
    issuer: "CNCF",
    status: "exploring",
    badgeColor: "#326CE5",
  },
  {
    name: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    status: "exploring",
    badgeColor: "#7B42BC",
  },
  {
    name: "Google Cloud Professional DevOps",
    issuer: "Google Cloud",
    status: "exploring",
    badgeColor: "#4285F4",
  },
]

// ─── Terminal Commands ────────────────────────────────────────────────────────
export const terminalCommands: Record<string, string> = {
  help: `Available commands:
──────────────────────────────────────────
  whoami           About Raghu
  experience       Career timeline
  skills           Technical skills
  projects         Featured case studies
  achievements     Key impact metrics
  stack            Current production stack
  certifications   Certs & credentials
  education        Academic background
  contact          How to reach me
  clear            Clear the terminal`,

  whoami: `Raghu Samreddy — Senior DevOps & SRE Engineer
──────────────────────────────────────────
12+ years building production infrastructure at scale.
Currently at SAP Labs, Montreal. Led 6-person platform team.
Expert in Kubernetes, Terraform, cloud automation, and observability.
Available for opportunities · Montreal, Canada`,

  experience: `Career Timeline:
──────────────────────────────────────────
2019–now   SAP Labs        Senior DevOps & SRE Engineer
2018–2019  SAP Hybris      Platform Support & DevOps Engineer
2017–2018  SAP Hybris      Platform Implementation Engineer
2016–2017  CIBC            DevOps & Application Support Analyst
2014–2016  Money Mart      DevOps Engineer

Type 'projects' for featured case studies.`,

  skills: `Technical Skills by Domain:
──────────────────────────────────────────
Orchestration   Kubernetes · OpenShift · EKS · AKS · Helm · Istio
Cloud           AWS · Azure · Lambda · EC2 · App Services
CI/CD           Harness · ArgoCD · Jenkins · GitLab CI · GitHub Actions
Observability   Dynatrace · Splunk · ELK · Prometheus · Grafana
IaC             Terraform (expert) · Ansible · CloudFormation · ARM
Scripting       Python · Bash · Shell · PowerShell
Messaging       Kafka · RabbitMQ · Azure Service Bus · AWS SQS/SNS
Databases       PostgreSQL · MongoDB · Redis · MySQL · Oracle`,

  projects: `Featured Case Studies:
──────────────────────────────────────────
1. Observability Platform Modernization
   Unified Dynatrace + Splunk + ELK + Prometheus + Grafana
   → MTTD ↓50% · MTTR ↓40% · Alert noise ↓~70%

2. CI/CD Pipeline Transformation
   Harness AI canary + ArgoCD GitOps + Istio traffic splitting
   → Deploy cycle ↓60% · Success rate 98% · 2 wks → same day

3. Enterprise Kubernetes at Scale
   OPA/Gatekeeper + HPA/CA + Istio across OpenShift & EKS
   → Resource utilization +40% · 99.9% uptime · 100% policy enforced

4. Automation Framework — 30hrs/week reclaimed
   Python + Bash + Ansible self-healing runbooks
   → 30+ hrs weekly toil eliminated · On-call pages ↓~60%`,

  achievements: `Key Impact Metrics:
──────────────────────────────────────────
↓ 50%    Mean Time To Detection (MTTD)
↓ 40%    Mean Time To Resolution (MTTR)
↓ 60%    Deployment cycle time
  98%    Deployment success rate
  99.9%  Platform uptime
  200+   IaC resources under management
↓ 30h    Weekly operational toil eliminated
  6      Engineers led and mentored`,

  stack: `Current Production Stack:
──────────────────────────────────────────
Platform        Kubernetes (OpenShift / EKS) + Helm + Istio
IaC             Terraform + Ansible + CloudFormation
CI/CD           Harness + ArgoCD + Jenkins + GitLab CI
Observability   Dynatrace + Splunk + ELK + Prometheus + Grafana
Cloud           AWS (primary) + Azure
Scripting       Python 3.x + Bash
Messaging       Kafka + RabbitMQ
Secrets         HashiCorp Vault + Azure Key Vault`,

  certifications: `Certifications & Credentials:
──────────────────────────────────────────
[active]       AWS Certified Solutions Architect          2022
[in-progress]  Certified Kubernetes Administrator (CKA)
[in-progress]  Microsoft Azure Administrator
[exploring]    Certified Kubernetes Security Specialist (CKS)
[exploring]    HashiCorp Terraform Associate
[exploring]    Google Cloud Professional DevOps Engineer`,

  education: `Education:
──────────────────────────────────────────
MSc Computer Engineering
Fairleigh Dickinson University`,

  contact: `Get In Touch:
──────────────────────────────────────────
Email      samraghuops@gmail.com
LinkedIn   linkedin.com/in/raghusamreddy
GitHub     github.com/raghusamreddy
Location   Montreal, Canada

Or scroll down to use the contact form ↓`,
}
