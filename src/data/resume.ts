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

  ABOUT ME
  ────────
  whoami          About Raghu
  experience      Career timeline summary
  skills          Technical skill set
  achievements    Key impact metrics
  stack           Current tech stack
  contact         Get in touch

  DOCKER
  ──────
  docker ps       Running containers
  docker images   Local images
  docker stats    Container resource usage

  KUBERNETES
  ──────────
  kubectl get pods     Pods in production
  kubectl get nodes    Cluster nodes
  kubectl get svc      Services
  kubectl top pods     Resource usage
  kubectl get raghu    (easter egg)

  HELM
  ────
  helm list                Deployed releases
  helm status prometheus   Prometheus release

  AWS
  ───
  aws sts get-caller-identity   IAM identity
  aws ec2 describe-instances    Instance fleet
  aws s3 ls                     S3 buckets

  TERRAFORM
  ─────────
  terraform init      Initialize providers
  terraform plan      Plan changes (easter egg)
  terraform apply     Apply infrastructure
  terraform state list  List state resources

  ANSIBLE
  ───────
  ansible --version                Version info
  ansible-playbook deploy.yml      Run playbook

  GIT
  ───
  git status          Working tree status
  git branch -a       All branches
  git log --oneline   Commit history (easter egg)

  SYSTEM
  ──────
  top             Process list
  neofetch        System info
  uptime          Server uptime
  ping google.com Ping results

  FILE SYSTEM
  ───────────
  ls              Directory listing
  ls -la          Detailed listing
  pwd             Working directory
  cat Dockerfile  Show Dockerfile
  cd              Current directory

  OTHER
  ─────
  clear               Clear terminal
  exit                Exit terminal
  rm -rf /            Delete everything
  sudo make me a coffee  (easter egg)
  curl localhost:8080/health  Health check`,

  whoami: `Raghu Samreddy — Senior DevOps & SRE Engineer
──────────────────────────────────────────
12+ years building production infrastructure at scale.
Currently at SAP Labs, Montreal. Led 6-person platform team.
Expert in Kubernetes, Terraform, cloud automation, and observability.
MSc Computer Engineering — Fairleigh Dickinson University`,

  experience: `Career Timeline:
──────────────────────────────────────────
2019–now  SAP Labs               Senior DevOps & SRE Engineer
2018–2019 SAP Hybris             Platform Support & DevOps Engineer
2017–2018 SAP Hybris             Platform Implementation Engineer
2016–2017 CIBC                   DevOps & Application Support Analyst
2014–2016 Money Mart             DevOps Engineer`,

  skills: `Technical Skills by Domain:
──────────────────────────────────────────
Orchestration  Kubernetes · OpenShift · EKS · AKS · Helm · Istio
Cloud          AWS · Azure · Lambda · EC2 · EKS · App Services
CI/CD          Harness · ArgoCD · Jenkins · GitLab CI · GitHub Actions
Observability  Dynatrace · Splunk · ELK · Prometheus · Grafana
IaC            Terraform (expert) · Ansible · CloudFormation · ARM
Scripting      Python · Bash · Shell · PowerShell
Messaging      Kafka · RabbitMQ · Azure Service Bus · AWS SQS/SNS
Databases      PostgreSQL · MongoDB · Redis · MySQL · Oracle`,

  achievements: `Key Impact Metrics:
──────────────────────────────────────────
↓ 50%   Mean Time To Detection (MTTD)
↓ 40%   Mean Time To Resolution (MTTR)
↓ 60%   Deployment cycle time
  98%   Deployment success rate
  99.9% Platform uptime
  200+  IaC resources under management
↓ 30h   Weekly operational toil eliminated
  6     Engineers led and mentored`,

  stack: `Current Production Stack:
──────────────────────────────────────────
Platform       Kubernetes (OpenShift / EKS) + Helm + Istio
IaC            Terraform + Ansible + CloudFormation
CI/CD          Harness + ArgoCD + Jenkins + GitLab CI
Observability  Dynatrace + Splunk + ELK + Prometheus + Grafana
Cloud          AWS (primary) + Azure
Scripting      Python 3.x + Bash
Messaging      Kafka + RabbitMQ
Secrets        HashiCorp Vault + Azure Key Vault`,

  contact: `Get In Touch:
──────────────────────────────────────────
Email     samraghuops@gmail.com
LinkedIn  linkedin.com/in/raghusamreddy
Location  Montreal, Canada

Or use the contact form below ↓`,

  // ─── Docker ─────────────────────────────────────────────────────────────────
  "docker ps": `CONTAINER ID   IMAGE                          COMMAND                  STATUS          PORTS                    NAMES
a1b2c3d4e5f6   nginx:1.25-alpine              "nginx -g 'daemon of…"  Up 14 days      0.0.0.0:443->443/tcp     prod-ingress-proxy
b2c3d4e5f6a7   raghu/platform-api:v2.8.1      "node dist/server.js"   Up 14 days      0.0.0.0:8080->8080/tcp   platform-api
c3d4e5f6a7b8   grafana/grafana:10.2.3         "/run.sh"               Up 14 days      0.0.0.0:3000->3000/tcp   monitoring-grafana
d4e5f6a7b8c9   prom/prometheus:v2.48.1        "/bin/prometheus --c…"  Up 14 days      0.0.0.0:9090->9090/tcp   monitoring-prometheus
e5f6a7b8c9d0   redis:7.2-alpine               "redis-server /etc/…"   Up 14 days      6379/tcp                 cache-redis
f6a7b8c9d0e1   postgres:16.1-alpine           "docker-entrypoint.…"   Up 14 days      5432/tcp                 db-postgres
a7b8c9d0e1f2   confluentinc/cp-kafka:7.5.3    "/etc/confluent/doc…"   Up 14 days      9092/tcp                 messaging-kafka`,

  "docker images": `REPOSITORY                       TAG              IMAGE ID       CREATED        SIZE
raghu/platform-api               v2.8.1           sha256:9f2a3b   2 days ago     184MB
raghu/platform-api               v2.8.0           sha256:7c1d4e   5 days ago     183MB
raghu/worker-service             v1.4.2           sha256:3a8b2c   3 days ago     156MB
nginx                            1.25-alpine      sha256:a1b2c3   2 weeks ago    42.7MB
grafana/grafana                  10.2.3           sha256:d4e5f6   3 weeks ago    387MB
prom/prometheus                  v2.48.1          sha256:f7a8b9   3 weeks ago    245MB
redis                            7.2-alpine       sha256:c0d1e2   4 weeks ago    32.4MB
postgres                         16.1-alpine      sha256:b3c4d5   4 weeks ago    238MB
confluentinc/cp-kafka            7.5.3            sha256:e6f7a8   5 weeks ago    892MB
hashicorp/terraform              1.7.0            sha256:a9b0c1   6 weeks ago    108MB`,

  "docker stats": `CONTAINER ID   NAME                    CPU %   MEM USAGE / LIMIT     MEM %   NET I/O           BLOCK I/O
a1b2c3d4e5f6   prod-ingress-proxy      2.34%   45.2MiB / 512MiB      8.83%   1.2GB / 890MB     12MB / 0B
b2c3d4e5f6a7   platform-api            12.8%   312MiB / 1GiB         30.5%   4.5GB / 3.2GB     156MB / 89MB
c3d4e5f6a7b8   monitoring-grafana      1.56%   128MiB / 512MiB       25.0%   890MB / 1.1GB     45MB / 12MB
d4e5f6a7b8c9   monitoring-prometheus   8.92%   1.2GiB / 2GiB         60.0%   2.3GB / 567MB     2.1GB / 1.8GB
e5f6a7b8c9d0   cache-redis             0.45%   28.4MiB / 256MiB      11.1%   345MB / 289MB     0B / 4.2MB
f6a7b8c9d0e1   db-postgres             5.67%   456MiB / 2GiB         22.3%   1.8GB / 2.4GB     4.5GB / 3.2GB
a7b8c9d0e1f2   messaging-kafka         15.3%   892MiB / 2GiB         43.6%   8.9GB / 7.2GB     1.2GB / 890MB`,

  // ─── Kubernetes ─────────────────────────────────────────────────────────────
  "kubectl get raghu": `NAME    READY   STATUS    RESTARTS   AGE
raghu   1/1     Running   0          12y

kubectl describe pod raghu
──────────────────────────────────────────
Name:         raghu
Namespace:    production
Labels:       role=devops-engineer
              tier=senior
              specialization=kubernetes,terraform,aws,azure
Containers:
  raghu:
    Image:    raghu-samreddy:12-years-production-grade
    Port:     8080/TCP
    Limits:
      cpu:    unlimited
      memory: unlimited
    Liveness:  passing
    Readiness: passing`,

  "kubectl get pods": `NAMESPACE     NAME                                      READY   STATUS    RESTARTS   AGE
production    platform-api-7d9f8b6c5-x4k2m               2/2     Running   0          3d
production    platform-api-7d9f8b6c5-n8j3p               2/2     Running   0          3d
production    worker-service-5c8d7e4b3-q9w1r             1/1     Running   0          5d
production    worker-service-5c8d7e4b3-t6y2u             1/1     Running   0          5d
monitoring    prometheus-server-6f4a3b2c1-v7x8z          1/1     Running   0          14d
monitoring    grafana-8e5d4c3b2-m1n9o                    1/1     Running   0          14d
monitoring    alertmanager-7d6c5b4a3-p2q8r               1/1     Running   0          14d
ingress       nginx-ingress-controller-9a8b7c6-k5l4m     1/1     Running   0          21d
kube-system   coredns-5f9b8c7d6-j3h2g                    1/1     Running   0          45d
kube-system   aws-node-xr4t9                             1/1     Running   0          45d`,

  "kubectl get nodes": `NAME                                        STATUS   ROLES    AGE    VERSION
ip-10-0-1-45.ca-central-1.compute.internal   Ready    master   180d   v1.29.2
ip-10-0-1-78.ca-central-1.compute.internal   Ready    master   180d   v1.29.2
ip-10-0-1-92.ca-central-1.compute.internal   Ready    master   180d   v1.29.2
ip-10-0-2-34.ca-central-1.compute.internal   Ready    worker   90d    v1.29.2
ip-10-0-2-67.ca-central-1.compute.internal   Ready    worker   90d    v1.29.2
ip-10-0-2-89.ca-central-1.compute.internal   Ready    worker   90d    v1.29.2
ip-10-0-3-12.ca-central-1.compute.internal   Ready    worker   45d    v1.29.2
ip-10-0-3-56.ca-central-1.compute.internal   Ready    worker   45d    v1.29.2`,

  "kubectl get svc": `NAMESPACE     NAME                      TYPE           CLUSTER-IP       EXTERNAL-IP                                PORT(S)
production    platform-api              ClusterIP      172.20.45.128    <none>                                     8080/TCP
production    platform-api-external     LoadBalancer   172.20.67.234    a1b2c3-1234567890.ca-central-1.elb.aws     443:31492/TCP
production    worker-service            ClusterIP      172.20.89.156    <none>                                     9090/TCP
monitoring    prometheus-server         ClusterIP      172.20.34.201    <none>                                     9090/TCP
monitoring    grafana                   LoadBalancer   172.20.56.178    a4d5e6-0987654321.ca-central-1.elb.aws     443:32108/TCP
ingress       nginx-ingress             LoadBalancer   172.20.12.99     a7b8c9-1122334455.ca-central-1.elb.aws     80:30080/TCP,443:30443/TCP
kube-system   kube-dns                  ClusterIP      172.20.0.10      <none>                                     53/UDP,53/TCP`,

  "kubectl top pods": `NAMESPACE     NAME                                      CPU(cores)   MEMORY(bytes)
production    platform-api-7d9f8b6c5-x4k2m               145m         312Mi
production    platform-api-7d9f8b6c5-n8j3p               132m         298Mi
production    worker-service-5c8d7e4b3-q9w1r             89m          156Mi
production    worker-service-5c8d7e4b3-t6y2u             94m          162Mi
monitoring    prometheus-server-6f4a3b2c1-v7x8z          234m         1.2Gi
monitoring    grafana-8e5d4c3b2-m1n9o                    45m          128Mi
monitoring    alertmanager-7d6c5b4a3-p2q8r               12m          64Mi
ingress       nginx-ingress-controller-9a8b7c6-k5l4m     67m          89Mi`,

  // ─── Helm ───────────────────────────────────────────────────────────────────
  "helm list": `NAME              NAMESPACE    REVISION  UPDATED                                 STATUS    CHART                    APP VERSION
platform-api      production   12        2026-05-08 14:23:45.123456 -0400 EDT   deployed  platform-api-2.8.1       2.8.1
worker-service    production   8         2026-05-06 09:15:32.654321 -0400 EDT   deployed  worker-service-1.4.2     1.4.2
prometheus        monitoring   5         2026-04-20 11:45:00.000000 -0400 EDT   deployed  prometheus-25.8.0        v2.48.1
grafana           monitoring   4         2026-04-20 11:48:22.000000 -0400 EDT   deployed  grafana-7.0.19           10.2.3
nginx-ingress     ingress      3         2026-03-15 16:30:00.000000 -0400 EDT   deployed  ingress-nginx-4.9.0      1.9.5
cert-manager      cert-manager 2         2026-02-01 10:00:00.000000 -0400 EDT   deployed  cert-manager-1.13.3      1.13.3`,

  "helm status prometheus": `NAME: prometheus
LAST DEPLOYED: 2026-04-20 11:45:00.000000 -0400 EDT
NAMESPACE: monitoring
STATUS: deployed
REVISION: 5
NOTES:
The Prometheus server can be accessed via port 9090 on the following DNS name:
  prometheus-server.monitoring.svc.cluster.local

To access Prometheus from outside the cluster:
  kubectl port-forward svc/prometheus-server 9090:9090 -n monitoring

The Alertmanager can be accessed via port 9093 on the following DNS name:
  prometheus-alertmanager.monitoring.svc.cluster.local

For more information, visit:
  https://prometheus.io/

✓ All components healthy
✓ Retention: 30d
✓ Storage: 50Gi PVC (38.2Gi used)
✓ Active alerts: 0 firing, 2 pending
✓ Scrape targets: 47/47 up`,

  // ─── AWS ────────────────────────────────────────────────────────────────────
  "aws sts get-caller-identity": `{
    "UserId": "AIDACKCEVSQ6C2EXAMPLE",
    "Account": "123456789012",
    "Arn": "arn:aws:iam::123456789012:user/raghu.samreddy"
}`,

  "aws ec2 describe-instances": `INSTANCES  i-0a1b2c3d4e5f67890  t3.xlarge   running  ip-10-0-2-34   ca-central-1a  platform-api-prod-1
INSTANCES  i-0b2c3d4e5f678901  t3.xlarge   running  ip-10-0-2-67   ca-central-1b  platform-api-prod-2
INSTANCES  i-0c3d4e5f67890123  t3.large    running  ip-10-0-2-89   ca-central-1a  worker-prod-1
INSTANCES  i-0d4e5f678901234a  t3.large    running  ip-10-0-3-12   ca-central-1b  worker-prod-2
INSTANCES  i-0e5f6789012345ab  m5.2xlarge  running  ip-10-0-1-45   ca-central-1a  k8s-master-1
INSTANCES  i-0f67890123456bcd  m5.2xlarge  running  ip-10-0-1-78   ca-central-1b  k8s-master-2
INSTANCES  i-0a789012345678ef  m5.2xlarge  running  ip-10-0-1-92   ca-central-1c  k8s-master-3
INSTANCES  i-0b890123456789fa  c5.xlarge   running  ip-10-0-3-56   ca-central-1a  monitoring-1

8 instances running across 3 AZs in ca-central-1`,

  "aws s3 ls": `2025-03-15 10:23:45 platform-artifacts-prod-ca-central-1
2025-04-01 14:56:78 terraform-state-prod-123456789012
2025-06-12 09:34:21 application-logs-prod-2025
2025-08-20 16:45:00 backup-postgres-daily-ca-central-1
2025-09-01 11:12:33 helm-charts-internal-repo
2025-11-15 08:22:10 cloudtrail-logs-123456789012
2026-01-10 13:45:67 config-maps-versioned-prod
2026-02-28 07:56:89 disaster-recovery-snapshots-ca`,

  // ─── Terraform ──────────────────────────────────────────────────────────────
  "terraform plan": `Initializing provider plugins...
- Finding latest version of hashicorp/aws...
- Finding latest version of hashicorp/azurerm...

Terraform will perform the following actions:

  # aws_eks_cluster.raghu_brain will be created
  + resource "aws_eks_cluster" "raghu_brain" {
      + name     = "senior-devops-engineer"
      + version  = "12+ years"
      + skills   = ["kubernetes", "terraform", "aws", "azure", "python"]
      + status   = "ACTIVE"
    }

Plan: 1 to add, 0 to change, 0 to destroy.

─────────────────────────────────────────────
Note: No changes are needed for production. This engineer is already deployed.`,

  "terraform init": `Initializing the backend...

Successfully configured the backend "s3"! Terraform will automatically
use this backend unless the backend configuration changes.

Initializing provider plugins...
- Finding hashicorp/aws versions matching "~> 5.31"...
- Finding hashicorp/kubernetes versions matching "~> 2.25"...
- Finding hashicorp/helm versions matching "~> 2.12"...
- Installing hashicorp/aws v5.31.0...
- Installed hashicorp/aws v5.31.0 (signed by HashiCorp)
- Installing hashicorp/kubernetes v2.25.2...
- Installed hashicorp/kubernetes v2.25.2 (signed by HashiCorp)
- Installing hashicorp/helm v2.12.1...
- Installed hashicorp/helm v2.12.1 (signed by HashiCorp)

Terraform has been successfully initialized!

You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure.`,

  "terraform apply": `aws_vpc.production: Creating...
aws_vpc.production: Creation complete after 3s [id=vpc-0a1b2c3d4e5f6g7h8]
aws_subnet.private[0]: Creating...
aws_subnet.private[1]: Creating...
aws_subnet.private[2]: Creating...
aws_subnet.private[0]: Creation complete after 2s [id=subnet-0abc123def456789a]
aws_subnet.private[1]: Creation complete after 2s [id=subnet-0bcd234efg567890b]
aws_subnet.private[2]: Creation complete after 2s [id=subnet-0cde345fgh678901c]
aws_security_group.eks_cluster: Creating...
aws_security_group.eks_cluster: Creation complete after 3s [id=sg-0def456ghi789012d]
aws_eks_cluster.production: Creating...
aws_eks_cluster.production: Still creating... [2m elapsed]
aws_eks_cluster.production: Still creating... [4m elapsed]
aws_eks_cluster.production: Creation complete after 9m45s [id=prod-eks-ca-central-1]
aws_eks_node_group.workers: Creating...
aws_eks_node_group.workers: Creation complete after 3m12s [id=prod-eks-workers]

Apply complete! Resources: 8 added, 0 changed, 0 destroyed.

Outputs:
cluster_endpoint = "https://ABC123DEF456.gr7.ca-central-1.eks.amazonaws.com"
cluster_name     = "prod-eks-ca-central-1"
node_group_arn   = "arn:aws:eks:ca-central-1:123456789012:nodegroup/prod-workers"`,

  "terraform state list": `aws_vpc.production
aws_subnet.private[0]
aws_subnet.private[1]
aws_subnet.private[2]
aws_subnet.public[0]
aws_subnet.public[1]
aws_subnet.public[2]
aws_security_group.eks_cluster
aws_security_group.worker_nodes
aws_security_group.rds
aws_eks_cluster.production
aws_eks_node_group.workers
aws_eks_node_group.monitoring
aws_iam_role.eks_cluster
aws_iam_role.eks_workers
aws_iam_policy.alb_ingress
aws_rds_cluster.postgres
aws_rds_cluster_instance.postgres[0]
aws_rds_cluster_instance.postgres[1]
aws_elasticache_cluster.redis
aws_s3_bucket.artifacts
aws_s3_bucket.terraform_state
aws_route53_zone.primary
aws_acm_certificate.wildcard
helm_release.prometheus
helm_release.grafana
helm_release.nginx_ingress
helm_release.cert_manager
kubernetes_namespace.production
kubernetes_namespace.monitoring`,

  // ─── Ansible ────────────────────────────────────────────────────────────────
  "ansible --version": `ansible [core 2.16.2]
  config file = /etc/ansible/ansible.cfg
  configured module search path = ['/home/raghu/.ansible/plugins/modules']
  ansible python module location = /usr/lib/python3.11/site-packages/ansible
  ansible collection location = /home/raghu/.ansible/collections
  executable location = /usr/bin/ansible
  python version = 3.11.6 (main, Nov 14 2025, 09:36:21) [GCC 13.2.0]
  jinja version = 3.1.3
  libyaml = True`,

  "ansible-playbook deploy.yml": `PLAY [Deploy Platform Services] ************************************************

TASK [Gathering Facts] *********************************************************
ok: [prod-api-01]
ok: [prod-api-02]
ok: [prod-worker-01]
ok: [prod-worker-02]

TASK [Pull latest container images] ********************************************
changed: [prod-api-01]
changed: [prod-api-02]
changed: [prod-worker-01]
changed: [prod-worker-02]

TASK [Deploy application with rolling update] **********************************
changed: [prod-api-01]
changed: [prod-api-02]
changed: [prod-worker-01]
changed: [prod-worker-02]

TASK [Verify health checks] ****************************************************
ok: [prod-api-01]
ok: [prod-api-02]
ok: [prod-worker-01]
ok: [prod-worker-02]

TASK [Update load balancer registration] ***************************************
ok: [prod-api-01]
ok: [prod-api-02]

PLAY RECAP *********************************************************************
prod-api-01                : ok=5    changed=2    unreachable=0    failed=0    skipped=0
prod-api-02                : ok=5    changed=2    unreachable=0    failed=0    skipped=0
prod-worker-01             : ok=4    changed=2    unreachable=0    failed=0    skipped=0
prod-worker-02             : ok=4    changed=2    unreachable=0    failed=0    skipped=0`,

  // ─── Git ────────────────────────────────────────────────────────────────────
  "git log --oneline": `a1b2c3d  feat: reduce MTTD by 50% with unified observability platform
b2c3d4e  perf: eliminate 30hrs/week toil via Python automation
c3d4e5f  deploy: kubernetes platform upgrade to 1.29 — zero downtime
d4e5f6g  fix: resolve production incident — P1 resolved in 18min
e5f6g7h  feat: implement harness AI canary analysis for all services
f6g7h8i  refactor: migrate 200+ terraform resources to new module structure
g7h8i9j  ops: cloud migration complete — 25% cost optimization achieved
h8i9j0k  feat: argocd gitops rollout — deployment cycles cut 60%
i9j0k1l  infra: kubernetes multi-tenant hardening with OPA/gatekeeper
j0k1l2m  chore: led 6-engineer team through Q3 platform roadmap`,

  "git status": `On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)

        modified:   infrastructure/terraform/modules/eks/main.tf
        modified:   infrastructure/terraform/modules/eks/variables.tf
        modified:   k8s/production/platform-api/deployment.yaml

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        infrastructure/terraform/modules/observability/

no changes added to commit (use "git add" to track)`,

  "git branch -a": `* main
  develop
  feature/observability-platform
  feature/cost-optimization
  hotfix/incident-p1-resolution
  remotes/origin/main
  remotes/origin/develop
  remotes/origin/feature/observability-platform
  remotes/origin/feature/cost-optimization
  remotes/origin/release/v2.8.1
  remotes/origin/release/v2.8.0`,

  // ─── System ─────────────────────────────────────────────────────────────────
  top: `top - 14:23:45 up 180 days,  4:12,  3 users,  load average: 2.34, 1.89, 1.56
Tasks: 312 total,   2 running, 308 sleeping,   0 stopped,   2 zombie
%Cpu(s): 18.4 us,  4.2 sy,  0.0 ni, 74.8 id,  1.2 wa,  0.0 hi,  1.4 si,  0.0 st
MiB Mem :  32768.0 total,   4521.3 free,  18234.5 used,  10012.2 buff/cache
MiB Swap:   8192.0 total,   7856.0 free,    336.0 used.  12890.4 avail Mem

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
 1234 raghu     20   0 4562312 1.2Gi  45672 S  45.2   3.8  1234:56 prometheus
 2345 raghu     20   0 3245678 892Mi  34521 S  32.1   2.7   987:32 java
 3456 raghu     20   0 2134567 456Mi  23456 S  18.7   1.4   567:89 grafana-server
 4567 raghu     20   0 1987654 312Mi  12345 S  12.4   0.9   345:67 node
 5678 raghu     20   0 1456789 256Mi  11234 S   8.9   0.8   234:56 postgres
 6789 raghu     20   0  987654 128Mi   8901 S   4.5   0.4   123:45 redis-server
 7890 raghu     20   0  654321  89Mi   6789 S   2.3   0.3    89:12 nginx`,

  neofetch: `       _,met\$\$\$\$\$gg.          raghu@prod-k8s-master-01
    ,g\$\$\$\$\$\$\$\$\$\$\$\$\$\$\$P.       ──────────────────────────
  ,g\$\$P"        """Y\$\$.".'      OS: Ubuntu 22.04.3 LTS x86_64
 ,\$\$P'              \`\$\$\$.       Host: AWS EC2 m5.2xlarge
',\$\$P       ,ggs.    \`\$\$b:      Kernel: 6.2.0-1018-aws
\`d\$\$'     ,\$P"'   .   \$\$\$      Uptime: 180 days, 4 hours
 \$\$P      d\$'     ,    \$\$P      Packages: 1847 (dpkg)
 \$\$:      \$\$.   -     ,d\$\$'     Shell: bash 5.2.15
 \$\$;      Y\$b._   _,d\$P'       CPU: Intel Xeon Platinum 8259CL @ 8x 2.5GHz
 Y\$\$.    \`.\`"Y\$\$\$\$P"'          GPU: N/A (headless server)
 \`\$\$b      "-.__               Memory: 18234MiB / 32768MiB
  \`Y\$\$                          Disk: 234G / 500G (47%)
   \`Y\$\$.                        Network: 10.0.1.45 (vpc-0a1b2c3d)
     \`\$\$b.                      Containers: 47 (docker)
       \`Y\$\$b.                   Kubernetes: v1.29.2 (8 nodes)
         \`"Y\$b._               Terraform: v1.7.0 (29 resources)
            \`"""               Ansible: 2.16.2`,

  uptime: ` 14:23:45 up 180 days,  4:12,  3 users,  load average: 2.34, 1.89, 1.56`,

  "ping google.com": `PING google.com (142.250.80.46): 56 data bytes
64 bytes from 142.250.80.46: icmp_seq=0 ttl=118 time=1.234 ms
64 bytes from 142.250.80.46: icmp_seq=1 ttl=118 time=1.156 ms
64 bytes from 142.250.80.46: icmp_seq=2 ttl=118 time=1.298 ms
64 bytes from 142.250.80.46: icmp_seq=3 ttl=118 time=1.187 ms

--- google.com ping statistics ---
4 packets transmitted, 4 packets received, 0% packet loss
round-trip min/avg/max/stddev = 1.156/1.219/1.298/0.054 ms`,

  // ─── File System ────────────────────────────────────────────────────────────
  ls: `Dockerfile          README.md           infrastructure/     package.json
Makefile            ansible/            k8s/                scripts/
Jenkinsfile         docker-compose.yml  monitoring/         src/
Procfile            helm/               node_modules/       terraform/`,

  "ls -la": `total 128
drwxr-xr-x  18 raghu devops  4096 May 12 14:00 .
drwxr-xr-x   4 raghu devops  4096 Jan 10 09:00 ..
-rw-r--r--   1 raghu devops   512 May 10 11:23 .env.production
drwxr-xr-x   8 raghu devops  4096 May 12 14:00 .git
-rw-r--r--   1 raghu devops   234 Mar 15 10:00 .gitignore
-rw-r--r--   1 raghu devops  2048 May 08 14:23 Dockerfile
-rw-r--r--   1 raghu devops   756 Apr 20 11:45 Jenkinsfile
-rw-r--r--   1 raghu devops  1024 May 01 09:30 Makefile
-rw-r--r--   1 raghu devops   512 Apr 15 16:00 Procfile
-rw-r--r--   1 raghu devops  3456 May 10 11:23 README.md
drwxr-xr-x   4 raghu devops  4096 May 06 09:15 ansible/
-rw-r--r--   1 raghu devops  1892 May 08 14:23 docker-compose.yml
drwxr-xr-x   3 raghu devops  4096 May 01 09:30 helm/
drwxr-xr-x   6 raghu devops  4096 May 12 13:45 infrastructure/
drwxr-xr-x   5 raghu devops  4096 May 08 14:23 k8s/
drwxr-xr-x   3 raghu devops  4096 Apr 20 11:48 monitoring/
drwxr-xr-x 847 raghu devops 28672 May 12 14:00 node_modules/
-rw-r--r--   1 raghu devops  2345 May 10 11:23 package.json
drwxr-xr-x   4 raghu devops  4096 Mar 15 10:00 scripts/
drwxr-xr-x   8 raghu devops  4096 May 12 13:45 src/
drwxr-xr-x   5 raghu devops  4096 May 12 13:45 terraform/`,

  pwd: `/home/raghu/platform-services`,

  "cat Dockerfile": `# ─── Stage 1: Build ───────────────────────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY . .
RUN npm run build

# ─── Stage 2: Production ─────────────────────────────────────────────────────
FROM node:20-alpine AS production
LABEL maintainer="raghu.samreddy@sap.com"
LABEL version="2.8.1"

RUN apk add --no-cache tini curl && \\
    addgroup -g 1001 appgroup && \\
    adduser -u 1001 -G appgroup -s /bin/sh -D appuser

WORKDIR /app
COPY --from=builder --chown=appuser:appgroup /app/dist ./dist
COPY --from=builder --chown=appuser:appgroup /app/node_modules ./node_modules
COPY --from=builder --chown=appuser:appgroup /app/package.json ./

USER appuser
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \\
  CMD curl -f http://localhost:8080/health || exit 1

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "dist/server.js"]`,

  cd: `raghu@prod-k8s-master-01:/home/raghu/platform-services$`,

  // ─── Easter Eggs ────────────────────────────────────────────────────────────
  "sudo make me a coffee": `[sudo] password for raghu:
Initializing CoffeeMaker v2.0.0...
✓ Beans ground: premium arabica (dark roast)
✓ Water temperature: 93°C
✓ Brewing...
✓ Espresso pulled: 28 seconds
✓ Milk steamed: 65°C
✓ Latte art: in progress...

☕ Your coffee is ready.

Note: This was made with Python automation.
      Manual coffee making is considered toil and has been eliminated.`,

  exit: `logout
Connection to production-cluster closed.

Just kidding — you can't leave that easily.
This terminal is running in a Kubernetes pod with restartPolicy: Always.

Try 'help' to keep exploring, or 'contact' to reach me directly.`,

  "rm -rf /": `rm: cannot remove '/': Permission denied
Operation not permitted. Root access requires:
  1. Multi-party approval via HashiCorp Vault
  2. Break-glass procedure with PagerDuty incident
  3. Approval from 2 SRE team leads
  4. Active change management ticket

Nice try though. This cluster has OPA Gatekeeper policies enforced.
Run 'help' for available commands.`,

  "curl localhost:8080/health": `{
  "status": "healthy",
  "version": "2.8.1",
  "uptime": "180d 4h 12m",
  "checks": {
    "database": "ok",
    "redis": "ok",
    "kafka": "ok",
    "external_apis": "ok"
  },
  "metrics": {
    "requests_per_second": 1247,
    "avg_response_time_ms": 23,
    "error_rate": "0.02%",
    "active_connections": 342
  },
  "kubernetes": {
    "pod": "platform-api-7d9f8b6c5-x4k2m",
    "node": "ip-10-0-2-34.ca-central-1.compute.internal",
    "namespace": "production",
    "ready": true
  }
}`,
}
