import { Brain, Bot, Shield, Database, BarChart3, Workflow, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "AI Strategy & Enablement | ITVision360",
  description: "Enterprise AI architecture, Agentic AI, GenAI, Responsible AI governance, and MLOps — delivering measurable ROI with production-grade reliability.",
};

const capabilities = [
  {
    icon: <Bot size={24} />,
    title: "Agentic AI & Autonomous Systems",
    description: "Design and deploy multi-agent architectures leveraging LangChain, LangGraph, CrewAI, AutoGen, and Microsoft Agent Framework to automate complex business workflows with human-in-the-loop governance.",
    tags: ["LangChain", "CrewAI", "AutoGen", "Multi-Agent"],
  },
  {
    icon: <Sparkles size={24} />,
    title: "Generative AI & LLM Integration",
    description: "Architect enterprise GPT solutions with RAG architectures, fine-tuning pipelines (LoRA, PEFT, RLHF), and production-grade prompt engineering across Azure OpenAI, Claude, Llama, and Gemini.",
    tags: ["Azure OpenAI", "RAG", "Fine-tuning", "GPT-4o"],
  },
  {
    icon: <Shield size={24} />,
    title: "AI Governance & Responsible AI",
    description: "Implement enterprise AI governance aligned with EU AI Act, NIST AI RMF, and ISO 42001. Deploy guardrails, bias audits, model cards, and AI risk registers with zero regulatory findings.",
    tags: ["EU AI Act", "NIST RMF", "ISO 42001", "Ethics"],
  },
  {
    icon: <Workflow size={24} />,
    title: "MLOps & LLMOps",
    description: "Build production model lifecycle platforms on Azure ML, MLflow, and Kubernetes with automated drift detection, shadow deployments, A/B testing, and rollback — reducing MTTR by 55%.",
    tags: ["Azure ML", "MLflow", "Kubernetes", "CI/CD"],
  },
  {
    icon: <Database size={24} />,
    title: "AI-Powered Data Platforms",
    description: "Engineer enterprise data platforms at 760+ PB scale using Azure Databricks, Delta Lake, Snowflake, and real-time streaming on Kafka — the foundation for production AI.",
    tags: ["Databricks", "Delta Lake", "Kafka", "Snowflake"],
  },
  {
    icon: <BarChart3 size={24} />,
    title: "AI Strategy Consulting",
    description: "Develop enterprise AI roadmaps with ROI quantification, Board-level advisory, operating model design, and prioritization of high-impact initiatives across business units.",
    tags: ["Roadmapping", "ROI", "Operating Model", "Advisory"],
  },
];

const outcomes = [
  { metric: "$70M+", label: "Organizational Savings Delivered" },
  { metric: "35%", label: "Reduction in AI Inference Costs" },
  { metric: "40%", label: "Faster Development Velocity" },
  { metric: "250+", label: "Production Models Managed" },
  { metric: "20+", label: "GenAI Products in Production" },
  { metric: "Zero", label: "Regulatory Findings" },
];

export default function AIStrategyPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80"
            alt="AI Technology"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/30 via-dark-950/50 to-dark-950" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs text-primary-300 mb-8">
            <Brain size={14} />
            New Capability — AI Strategy & Enablement
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="gradient-text">Enterprise AI</span>
            <br />
            <span className="text-white">Architected for Impact</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From autonomous agents to governed AI ecosystems — we architect, deploy, and 
            operationalize artificial intelligence that delivers measurable enterprise value 
            while upholding the highest standards of responsible innovation.
          </p>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {outcomes.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{item.metric}</div>
                <div className="text-xs text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">AI Capabilities</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Full-spectrum AI services from strategy through production — built on 
              Fortune 50 delivery experience managing 760+ PB of enterprise data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <div key={i} className="glass glass-hover rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 mb-5">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{cap.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{cap.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cap.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-primary-500/5 border border-primary-500/15 rounded-md text-xs text-primary-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-dark-300/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Our AI Delivery Approach</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { step: "01", title: "Discovery & Strategy", desc: "Assess organizational AI readiness, define use cases with ROI quantification, and develop a prioritized roadmap aligned to business objectives." },
              { step: "02", title: "Architecture & Design", desc: "Design production-grade AI architectures — selecting optimal models, vector stores, orchestration layers, and governance frameworks." },
              { step: "03", title: "Build & Validate", desc: "Develop, fine-tune, and rigorously test AI solutions with evaluation harnesses, red-teaming, and responsible AI checkpoints." },
              { step: "04", title: "Deploy & Scale", desc: "Operationalize with MLOps/LLMOps pipelines, monitoring, drift detection, and autoscaling on enterprise cloud infrastructure." },
              { step: "05", title: "Govern & Evolve", desc: "Continuous optimization, model retraining, compliance audits, and strategic evolution to maintain competitive advantage." },
            ].map((item, i) => (
              <div key={i} className="glass rounded-2xl p-6 flex items-start gap-6">
                <div className="text-3xl font-bold gradient-text shrink-0 w-12">{item.step}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Unlock AI at Enterprise Scale?</h2>
          <p className="text-gray-400 mb-8">
            Let our AI leadership team architect a strategy that delivers measurable 
            value while maintaining the governance standards your organization demands.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full font-semibold hover:from-primary-500 hover:to-accent-500 transition-all shadow-xl shadow-primary-500/20"
          >
            Schedule an AI Strategy Session <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
