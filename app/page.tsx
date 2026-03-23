export default function Home() {
  const skills = [
    "Python",
    "SQL",
    "AWS",
    "Azure",
    "GCP",
    "PySpark",
    "Kafka",
    "Airflow",
    "Snowflake",
    "Databricks",
    "Docker",
    "Kubernetes",
    "LangChain",
    "RAG",
    "LLMs",
    "Terraform",
  ];

  const projects = [
    {
      title: "Agentic AI Platform",
      company: "Citigroup",
      desc: "Built secure RAG-based AI systems for enterprise search and compliance workflows, improving retrieval accuracy and reducing latency.",
    },
    {
      title: "Azure Data Migration",
      company: "Pfizer",
      desc: "Migrated large-scale enterprise data pipelines to Azure using ADF, Databricks, and Synapse for analytics and reporting.",
    },
    {
      title: "Enterprise Data Warehouse Modernization",
      company: "Huntington Bank",
      desc: "Worked on scalable ETL pipelines, warehouse modernization, and cloud-based analytics using Spark, AWS Glue, and Redshift.",
    },
  ];

  const experience = [
    {
      role: "Senior GEN AI Engineer",
      company: "Citigroup",
      period: "Sep 2025 – Present",
    },
    {
      role: "Sr. AI Data Engineer",
      company: "Pfizer",
      period: "Jan 2023 – Aug 2025",
    },
    {
      role: "Data Engineer",
      company: "Huntington Bank",
      period: "Oct 2020 – Dec 2022",
    },
    {
      role: "Data Engineer",
      company: "Datamatics Ltd.",
      period: "Jan 2018 – Sep 2020",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0b1120] text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1120]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-lg font-semibold tracking-wide">Saiteja Sriram</h1>
          <div className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#experience" className="hover:text-cyan-400">Experience</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">
              Portfolio
            </p>
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Senior GenAI Engineer <br /> & Data Engineer
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              I build enterprise-grade data platforms, cloud pipelines, and AI
              systems using AWS, Azure, GCP, Spark, Kafka, and modern GenAI tools.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:saitejasriram01@gmail.com"
                className="rounded-xl bg-cyan-500 px-6 py-3 font-medium text-black transition hover:bg-cyan-400"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="rounded-xl border border-white/20 px-6 py-3 font-medium transition hover:border-cyan-400 hover:text-cyan-400"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
            <div className="space-y-4">
              <p className="text-sm text-slate-400">Quick Summary</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#111827] p-5">
                  <h3 className="text-2xl font-bold text-cyan-400">9+</h3>
                  <p className="mt-2 text-sm text-slate-300">Years of Experience</p>
                </div>
                <div className="rounded-2xl bg-[#111827] p-5">
                  <h3 className="text-2xl font-bold text-cyan-400">3</h3>
                  <p className="mt-2 text-sm text-slate-300">Cloud Platforms</p>
                </div>
                <div className="rounded-2xl bg-[#111827] p-5">
                  <h3 className="text-2xl font-bold text-cyan-400">GenAI</h3>
                  <p className="mt-2 text-sm text-slate-300">RAG, LLMs, Agentic AI</p>
                </div>
                <div className="rounded-2xl bg-[#111827] p-5">
                  <h3 className="text-2xl font-bold text-cyan-400">ETL</h3>
                  <p className="mt-2 text-sm text-slate-300">Pipelines & Warehousing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <h3 className="text-3xl font-bold">About Me</h3>
          <p className="mt-6 max-w-4xl leading-8 text-slate-300">
            I am a Senior Data Engineer and GenAI Engineer with strong experience
            in cloud data platforms, ETL/ELT development, real-time pipelines,
            enterprise reporting, and AI-driven solutions. I enjoy building
            scalable systems that solve real business problems across banking,
            healthcare, and enterprise domains.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <h3 className="text-3xl font-bold">Skills</h3>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
        <h3 className="text-3xl font-bold">Experience</h3>
        <div className="mt-8 space-y-5">
          {experience.map((item) => (
            <div
              key={item.role + item.company}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <h4 className="text-xl font-semibold">{item.role}</h4>
                  <p className="text-slate-300">{item.company}</p>
                </div>
                <p className="text-sm text-cyan-400">{item.period}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <h3 className="text-3xl font-bold">Projects</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
            >
              <p className="text-sm text-cyan-400">{project.company}</p>
              <h4 className="mt-2 text-xl font-semibold">{project.title}</h4>
              <p className="mt-4 leading-7 text-slate-300">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <h3 className="text-3xl font-bold">Contact</h3>
          <p className="mt-4 text-slate-300">
            I’m open to Data Engineering, GenAI, and Cloud opportunities.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:saitejasriram01@gmail.com"
              className="rounded-xl bg-cyan-500 px-6 py-3 font-medium text-black hover:bg-cyan-400"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="rounded-xl border border-white/20 px-6 py-3 font-medium hover:border-cyan-400 hover:text-cyan-400"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="rounded-xl border border-white/20 px-6 py-3 font-medium hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}