/**
 * The 8 COO Playbook Operating Domains.
 *
 * These are the diagnostic frame the COO Playbook uses to map every
 * operational challenge. Each domain has a challenge, an approach, an
 * actions list, KPIs, and a chapter reference.
 *
 * Source of truth: coo-playbook-app/src/sections/Domains.tsx (kept in sync).
 *
 * Mapped UP from the four pressure points (pressurePoints.ts):
 *   - 01 Decide       → Domain 1 Architect Alignment + Domain 6 Financial Leverage
 *   - 02 Coordinate   → Domain 2 Systematize Execution + Domain 5 Adaptive Governance
 *   - 03 Execute      → Domain 3 Human + AI Architecture + Domain 4 Continuous Operating Loop
 *   - 04 Measure      → Domain 7 Execution Assessment + Domain 8 Systemic Execution Culture
 *
 * The chassis (Vault) cross-cuts Domain 5 Adaptive Governance.
 */

export interface PlaybookDomain {
  /** Domain number 1-8 (kept as string for display use). */
  n: string;
  title: string;
  /** Brand color associated with the domain. */
  color: string;
  /** The challenge this domain addresses (1-2 sentences). */
  challenge: string;
  /** Strategic approach (1-2 sentences). */
  approach: string;
  /** Concrete actions an operator takes. */
  actions: string[];
  /** Key performance indicators. */
  kpi: string;
  /** COO Playbook chapter reference. */
  ref: string;
}

export const playbookDomains: PlaybookDomain[] = [
  {
    n: "1",
    title: "Architect Alignment",
    color: "#8B5CF6",
    challenge:
      "Remove friction at the system level. Build structures that hold without constant oversight. As complexity rises, the gap between what leadership believes and what the organization experiences widens, often along generational lines.",
    approach:
      "Engineer alignment as an operating system, not an initiative. Use ECI baseline across 11 indicators to make misalignment visible, measurable, and actionable.",
    actions: [
      "Replace static reporting with real-time operational metrics",
      "Institutionalize shared metrics and cross-functional accountability",
      "Automate detection of misalignment before it becomes friction and cost",
      "Measure sustainability through decreased executive intervention and increased autonomous correction",
    ],
    kpi:
      "ECI 680+ across all indicators • Quarterly assessment • Decision bottleneck count declining • Escalation rate trending down 30%/quarter",
    ref: "Ch 4 + 6",
  },
  {
    n: "2",
    title: "Systematize Execution",
    color: "#06B6D4",
    challenge:
      "Build a unified operating system that standardizes how work moves across the company. Without it, scattered tools and meetings force teams to chase clarity.",
    approach:
      "Build a system of systems: execution architecture, codified organizational rhythm, real-time visibility, and decentralized decision authority.",
    actions: [
      "Establish unified operations management system aligned to execution cadence",
      "Automate metric reporting and flag early drift before it compounds",
      "Create cross-functional accountability maps: who owns what, where decisions originate",
      "Reframe meetings from 'reporting' to 'recalibration.' Every meeting produces decisions, not updates",
    ],
    kpi:
      "Process automation coverage • Mean time to detect/resolve issues • Ratio of automated vs human-initiated escalations • Time to adapt without escalation (<30 days)",
    ref: "Ch 4 + Week 1",
  },
  {
    n: "3",
    title: "Human + AI Architecture",
    color: "#EC4899",
    challenge:
      "AI has expanded what can be automated but hasn't solved alignment. 95% of GenAI pilots produce zero measurable return, not because the tech is wrong but because the organizations aren't ready.",
    approach:
      "Treat AI as infrastructure, not a feature. Design architectures where automation serves the operating system. Build transparency and trust at every integration point.",
    actions: [
      "Map current tools to workflows to identify redundancy, friction, and shadow IT",
      "Create AI responsibility matrix: ownership, oversight, accountability per function",
      "Use pilot-first adoption cycles (30-90 days) to test decision impact before scaling",
      "Implement AI dashboards: utilization, confidence scores, drift detection, human override rate",
    ],
    kpi:
      "Human Override Rate 10-25% • AI-Trust Score >7/10 • Task-Handoff Efficiency >80% • Load Reduction >4 hrs/wk per role • Initiative Success Rate >1.5x baseline",
    ref: "Ch 5",
  },
  {
    n: "4",
    title: "Continuous Operating Loop",
    color: "#F59E0B",
    challenge:
      "Most organizations treat alignment as an event. An offsite, a reorg, then drift back into chaos once the effort ends. 70% of transformations fail this way.",
    approach:
      "The Alignment Cycle: Align → Integrate → Optimize → Accelerate → Adapt → Empower → Sustain. Each stage builds on the last, compounds quarterly.",
    actions: [
      "Design operating cadences mapped to each stage (weekly, monthly, quarterly)",
      "Automate stage-specific dashboards to detect early misalignment or drift",
      "Embed review checkpoints into standard ops meetings, not standalone 'transformation' sessions",
      "Tie executive performance metrics to improvement within the loop, not output volume",
    ],
    kpi:
      "Cycle time from strategy change to execution adjustment • Stage completion rates • Quarterly ECI trajectory • Meeting-to-decision conversion rate",
    ref: "Ch 4",
  },
  {
    n: "5",
    title: "Adaptive Governance",
    color: "#10B981",
    challenge:
      "Traditional governance slows the work it protects. Companies add meetings, reports, and approvals for visibility, but the result is lost speed. Newer generations experience this as bureaucratic distrust.",
    approach:
      "Governance by signal (not schedule), accountability as design (not policing), leadership as an adaptive network (not hierarchy).",
    actions: [
      "Replace recurring 'status' meetings with trigger-based sessions that fire on signal",
      "Define decision and accountability maps for every recurring process: who decides, who's consulted",
      "Use real-time dashboards to replace quarterly performance reviews with continuous visibility",
      "Measure leadership effectiveness through action completion and escalation rates, not perception surveys",
    ],
    kpi:
      "Escalation rate declining 30%/quarter • Decision authority delegated to 2+ levels down • Meeting hours reduced 25%+ • Action completion rate >85%",
    ref: "Ch 8 (CxfO)",
  },
  {
    n: "6",
    title: "Financial Leverage",
    color: "#8B5CF6",
    challenge:
      "25-40% of operating spend lost to inefficiency, miscommunication, and weak cross-functional execution. Leaders underestimate this because it never shows up as a line item.",
    approach:
      "Alignment as capital strategy. Five compounding levers: decision velocity, resource efficiency, workflow throughput, engagement & retention, AI ROI acceleration.",
    actions: [
      "Quantify ROI in hours reclaimed, decisions accelerated, and margin expanded",
      "Use execution data as due diligence inputs for M&A or investment rounds",
      "Integrate alignment metrics into quarterly business reviews and financial forecasts",
      "Model EBITDA margin lift sensitivity to alignment. Each 10% decision speed improvement = 2-3% EBITDA gain",
    ],
    kpi:
      "Hours reclaimed/month • Decision-to-revenue cycle time • Back-office automation percentage • EBITDA margin trend vs alignment score trend",
    ref: "Ch 7",
  },
  {
    n: "7",
    title: "Execution Assessment",
    color: "#06B6D4",
    challenge:
      "Companies track revenue and retention but not execution capability, leaving leaders blind to alignment, decision flow, and process health while inefficiency grows between reporting cycles.",
    approach:
      "Measure how the organization moves, not just what it produces. ECI evaluates across Alignment, People, Process, and Leadership with predictive modeling that flags execution drag before it impacts financials.",
    actions: [
      "Replace engagement and performance surveys with quarterly ECI assessments",
      "Use score differentiation to detect hierarchical misalignment, where leaders and staff see different realities",
      "Integrate alignment reporting into board updates alongside financial metrics",
      "Use benchmarks to identify friction hot spots and design targeted interventions",
    ],
    kpi:
      "ECI score trajectory +50-100 points/year • Hierarchy variance <15% • Quarterly trend tracking • Board-level alignment health reporting",
    ref: "Ch 6",
  },
  {
    n: "8",
    title: "Systemic Execution Culture",
    color: "#EC4899",
    challenge:
      "Markets move faster than hierarchy, information moves faster than decisions. Without shared execution habits that bridge generational and functional divides, drift is inevitable.",
    approach:
      "Lead through architecture, not authority. Replace dependence on individual heroics with structural clarity, signal-based visibility, and data-driven rhythm that works for every level.",
    actions: [
      "Transition from 'running operations' to 'building the system that runs operations'",
      "Use alignment, decision velocity, and autonomy as success metrics instead of cost reduction",
      "Institutionalize AI-driven systems that replace status updates with real-time correction",
      "Design leadership succession around systems, not individuals. The company runs when anyone leaves",
    ],
    kpi:
      "System continuity during leadership transition (85%+ operational stability) • Autonomous correction rate >60% • Cross-generational alignment variance <10%",
    ref: "Ch 8",
  },
];

/** Look up a domain by number (string "1" through "8"). */
export function domainByNumber(n: string): PlaybookDomain | undefined {
  return playbookDomains.find((d) => d.n === n);
}

/** Look up a domain by exact title. */
export function domainByTitle(title: string): PlaybookDomain | undefined {
  return playbookDomains.find((d) => d.title === title);
}
