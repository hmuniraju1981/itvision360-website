export interface KnowledgeChunk {
  id: string;
  category: string;
  content: string;
}

export const knowledgeBase: KnowledgeChunk[] = [
  // Company Overview
  {
    id: "company-overview",
    category: "Company",
    content: `ITVision360 is a distinguished technology solutions provider established in 2011, headquartered at 300 E Royal Ln STE 230, Irving, TX 75039, USA. We are a certified Women & Minority-Owned Business (WMBE) recognized by the government. ITVision360 delivers integrated solutions in industrial automation, AI strategy, asset management, and enterprise IT services. We are trusted by Fortune 500 clients and have served 200+ clients over 14+ years with 40% faster project delivery.`,
  },
  {
    id: "company-mission",
    category: "Company",
    content: `ITVision360's mission is to enable organizations to succeed by delivering reliable, scalable, and innovative technology solutions that drive progress and create long-term value. Our project approach is built on three pillars: People, Technology, and Customer. We deliver with an unwavering commitment to quality, cost optimization, and timely execution.`,
  },
  {
    id: "company-global",
    category: "Company",
    content: `ITVision360 has a global presence with offices in: USA (Headquarters) - 300 E Royal Ln STE 230, Irving, TX 75039, Phone: +1 (469) 261-3662; Mexico - Calle Vicente Guerrero Norte 19, Centro, Querétaro, C.P - 76000, Phone: +52-442 185 8294; India (Hyderabad) - 101, Sairanga Asian Residency, Madhavnagar Colony, Miyapur, Hyderabad, India-500049, Phone: +91-8500638409; India (Tirupati) - 6-31/404, Velmathre Plaza, Padmavathi Puram, Tiruchnur Road, Tirupati, Andhra Pradesh, India, 517501. Email: info@itvision360.com`,
  },
  {
    id: "business-model",
    category: "Company",
    content: `ITVision360 offers four engagement models: 1) Staff Augmentation - Contract to Hire, FTE, and specialized talent on demand. 2) Fixed Bid / SoW - Defined scope, predictable outcomes, transparent pricing. 3) Time & Material - Flexible engagement for evolving requirements and agile delivery. 4) Managed Services - End-to-end operational ownership with SLA-backed performance.`,
  },
  // Leadership
  {
    id: "leadership-cto",
    category: "Leadership",
    content: `Harsha Muniraju, MBA is the Chief Technology Officer (CTO) of ITVision360. He is a Data, AI & Agentic AI executive with 15+ years leading enterprise transformation in Fortune 50 environments. He scaled AT&T's Chief Data Office to 400+ members managing 760+ PB of enterprise data. He delivered $70M+ in organizational savings. He is an expert in Azure OpenAI, GenAI productization, and Responsible AI governance. Credentials: MBA from Jack Welch Management Institute, PG in AI & ML from UT Austin McCombs, PMP certified, SAFe Agilist. LinkedIn: linkedin.com/in/harshamuniraju`,
  },
  // Industrial Automation
  {
    id: "service-industrial-automation",
    category: "Services",
    content: `Industrial Automation: ITVision360 provides end-to-end automation solutions from sensors to SCADA/DCS, with complete lifecycle support for manufacturing and utility sectors. Our delivery phases include: 1) Design - architecting state-of-the-art technology and process designs for resilient automation systems integrating across local, remote, and cloud environments. 2) Engineering - developing P&I diagrams, programming PLC, DCS, HMI, and SCADA systems with precision. 3) Procurement - orchestrating procurement with focus on quality, cost efficiency, and delivery timelines. 4) Installation - deploying sensors, transmitters, RTUs, PLCs, SCADA, DCS, HMIs, and control panels with expert precision. We work with Siemens, Rockwell, ABB, Honeywell, Yokogawa, and Emerson platforms.`,
  },
  // IoT & Cloud
  {
    id: "service-iot-cloud",
    category: "Services",
    content: `IoT & Cloud Solutions: ITVision360 delivers seamless, scalable IoT and Cloud solutions that integrate with existing systems for real-time intelligence and elastic scalability. Our offerings include: 1) Seamless Connectivity - robust connectivity leveraging 4G/5G, WiFi, BLE, IoT-CAT-M1/NB-IoT. 2) Robust Systems & Protocols - leveraging DLMS, MODBUS, OPC-UA, MQTT for reliable device communication. 3) Cloud & Applications - AWS and Azure for elastic, scalable Web & Mobile Applications. 4) Industry Applications - energy, water, gas metering, vehicle tracking, diagnostics, and fleet management.`,
  },
  // Asset Management
  {
    id: "service-asset-management",
    category: "Services",
    content: `Asset Management: ITVision360 provides comprehensive systems for tracking, maintaining, and optimizing physical and digital assets throughout their lifecycle. Capabilities include: Asset Tracking & Inventory with real-time visibility and automated discovery; Proactive Monitoring with predictive analytics to identify degradation patterns; Performance Optimization with data-driven strategies to extend asset lifespan; Compliance & Governance with automated compliance tracking and audit trails.`,
  },
  // Product Lifecycle
  {
    id: "service-product-lifecycle",
    category: "Services",
    content: `Product Lifecycle: ITVision360 provides end-to-end product management from concept to continuous optimization. Our phases include: 1) Concept & Requirements - Voice of Customer, detailed requirements, proof-of-concept. 2) Design & Prototyping - robust product design, rapid prototyping, and early-stage testing. 3) Testing & Validation - comprehensive testing, validation, and interoperability verification. 4) Production & Deployment - scalable production of smart devices, IoT-enabled systems. 5) Maintenance & Support - continuous monitoring, updates, and technical support. 6) Evolution & Growth - version upgrades, new feature integration, and product evolution strategies.`,
  },
  // Operations & Maintenance
  {
    id: "service-operations-maintenance",
    category: "Services",
    content: `Operations & Maintenance: ITVision360's O&M services maximize uptime, reduce operational risks, and ensure efficient performance. Services include: 24/7 Technical Support for rapid incident resolution; Proactive Monitoring with real-time observability and automated alerting; Tailored Operational Management with customized frameworks; Data-Driven Diagnostics for rapid root-cause analysis; Preventive Maintenance to prevent recurring issues; Secure Storage & Recovery for data protection; Remote Data Access via IoT/IIoT frameworks; Cloud & Analytics for actionable intelligence; AI & Machine Learning for predictive maintenance and anomaly detection; Energy Management for intelligent optimization.`,
  },
  // Consulting & Strategy
  {
    id: "service-consulting-strategy",
    category: "Services",
    content: `Consulting & Strategy: ITVision360 offers expert IT consulting services including: Digital Transformation Strategy - comprehensive technology roadmaps aligned to business objectives; Technology Assessment & Advisory - in-depth evaluation with actionable modernization recommendations; Organizational Enablement - change management, team structuring, and capability building; Workforce Training & Certification - Texas Workforce Commission certified programs in industrial automation, IT systems, cloud, cybersecurity, and project management.`,
  },
  // AI Strategy & Enablement
  {
    id: "service-ai-strategy",
    category: "AI",
    content: `AI Strategy & Enablement: ITVision360's newest service offering, led by CTO Harsha Muniraju. We architect enterprise AI ecosystems delivering measurable ROI with production-grade reliability. Our AI capabilities include: 1) Agentic AI & Autonomous Systems - multi-agent architectures using LangChain, LangGraph, CrewAI, AutoGen, Microsoft Agent Framework. 2) Generative AI & LLM Integration - enterprise GPT solutions with RAG, fine-tuning (LoRA, PEFT, RLHF), Azure OpenAI, Claude, Llama, Gemini. 3) AI Governance & Responsible AI - aligned with EU AI Act, NIST AI RMF, ISO 42001, guardrails, bias audits, model cards. 4) MLOps & LLMOps - production model lifecycle on Azure ML, MLflow, Kubernetes. 5) AI-Powered Data Platforms - 760+ PB scale using Azure Databricks, Delta Lake, Snowflake, Kafka. 6) AI Strategy Consulting - enterprise roadmaps with ROI quantification, Board-level advisory.`,
  },
  {
    id: "ai-outcomes",
    category: "AI",
    content: `AI Strategy outcomes delivered by ITVision360: $70M+ organizational savings delivered; 35% reduction in AI inference costs; 40% faster development velocity; 250+ production models managed; 20+ GenAI products in production; Zero regulatory findings. Our AI delivery approach: 01 Discovery & Strategy, 02 Architecture & Design, 03 Build & Validate, 04 Deploy & Scale, 05 Govern & Evolve.`,
  },
  // Technology Expertise
  {
    id: "tech-expertise",
    category: "Technology",
    content: `ITVision360's technology expertise spans: Systems Integration - Siemens, Rockwell, ABB, Honeywell, Yokogawa, PLC, DCS, SCADA, HMI, RTU. Protocols & Standards - OPC, MQTT, Modbus, HART, Profibus, LoRaWAN, BLE, IoT/IIoT, FDT, EDDL. Software & Cloud - Azure, AWS, Python, Java, C#, Snowflake, Power BI, Salesforce, SAP, Databricks.`,
  },
  // Contact & General
  {
    id: "contact-info",
    category: "Contact",
    content: `To contact ITVision360: Email: info@itvision360.com, Phone: +1 (469) 261-3662, Headquarters: 300 E Royal Ln STE 230, Irving, TX 75039, USA. Business hours: Monday-Friday, 9:00 AM - 5:00 PM (CST). LinkedIn: linkedin.com/company/itvision360/. Website: www.itvision360.com. For CTO contact: Harsha Muniraju - linkedin.com/in/harshamuniraju, email: harsha.muniraju1981@gmail.com, phone: 945-426-8797.`,
  },
  {
    id: "certifications",
    category: "Company",
    content: `ITVision360 certifications and recognition: Certified Women & Minority-Owned Business (WMBE), Government-recognized business, Texas Workforce Commission Certified training provider, Fortune 500 client trusted since 2011. Industries served: Manufacturing, Energy & Utilities, Oil & Gas, Government, Healthcare, Telecommunications, Transportation.`,
  },
];

export function retrieveRelevantChunks(query: string, topK: number = 5): KnowledgeChunk[] {
  const queryLower = query.toLowerCase();
  
  const scored = knowledgeBase.map((chunk) => {
    let score = 0;
    const contentLower = chunk.content.toLowerCase();
    const categoryLower = chunk.category.toLowerCase();
    
    // Keyword matching
    const queryWords = queryLower.split(/\s+/).filter(w => w.length > 2);
    for (const word of queryWords) {
      if (contentLower.includes(word)) score += 2;
      if (categoryLower.includes(word)) score += 3;
    }
    
    // Category boosting based on query intent
    if (queryLower.includes("ai") || queryLower.includes("artificial") || queryLower.includes("machine learning") || queryLower.includes("genai") || queryLower.includes("llm")) {
      if (chunk.category === "AI") score += 5;
    }
    if (queryLower.includes("contact") || queryLower.includes("reach") || queryLower.includes("phone") || queryLower.includes("email") || queryLower.includes("address")) {
      if (chunk.category === "Contact") score += 5;
    }
    if (queryLower.includes("service") || queryLower.includes("offer") || queryLower.includes("solution") || queryLower.includes("provide")) {
      if (chunk.category === "Services") score += 3;
    }
    if (queryLower.includes("who") || queryLower.includes("about") || queryLower.includes("company") || queryLower.includes("itvision")) {
      if (chunk.category === "Company") score += 4;
    }
    if (queryLower.includes("cto") || queryLower.includes("harsha") || queryLower.includes("leader") || queryLower.includes("team")) {
      if (chunk.category === "Leadership") score += 5;
    }
    if (queryLower.includes("automat") || queryLower.includes("plc") || queryLower.includes("scada")) {
      if (chunk.id === "service-industrial-automation") score += 5;
    }
    if (queryLower.includes("iot") || queryLower.includes("cloud") || queryLower.includes("aws") || queryLower.includes("azure")) {
      if (chunk.id === "service-iot-cloud") score += 5;
    }
    if (queryLower.includes("asset")) {
      if (chunk.id === "service-asset-management") score += 5;
    }
    if (queryLower.includes("product") || queryLower.includes("lifecycle")) {
      if (chunk.id === "service-product-lifecycle") score += 5;
    }
    if (queryLower.includes("maintenance") || queryLower.includes("operation") || queryLower.includes("support")) {
      if (chunk.id === "service-operations-maintenance") score += 5;
    }
    if (queryLower.includes("consult") || queryLower.includes("strategy") || queryLower.includes("training")) {
      if (chunk.id === "service-consulting-strategy") score += 5;
    }
    if (queryLower.includes("tech") || queryLower.includes("expertise") || queryLower.includes("platform")) {
      if (chunk.id === "tech-expertise") score += 4;
    }
    
    return { chunk, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .filter(s => s.score > 0)
    .map(s => s.chunk);
}
