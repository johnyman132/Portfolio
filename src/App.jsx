import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const featuredProjects = [
  {
    slug: "pivotal",
    category: "Manufacturing",
    title: "Manufacturing Engineering Internship",
    summary:
      "Supported manufacturing-focused engineering work in an aerospace environment, with emphasis on process improvement, production support, and practical execution.",
  },
  {
    slug: "robotics",
    category: "Robotics / CAD",
    title: "Foothill Robotics CAD Leadership",
    summary:
      "Led CAD organization and supported student designers through modeling, part development, and design review workflows for robotics projects.",
  },
  {
    slug: "arms-lab",
    category: "Research",
    title: "ARMS Lab CNC Automation Research",
    summary:
      "Explored CNC probing, automation logic, and stock detection workflows for smarter machine setup and manufacturing research applications.",
  },
];

function Navbar() {
  return (
    <header className="border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-lg font-semibold tracking-tight text-neutral-900">
          Jonathan Tran
        </Link>

        <nav className="flex items-center gap-7 text-xl text-neutral-600">
          <Link to="/" className="transition hover:text-black">Home</Link>
          <Link to="/projects" className="transition hover:text-black">Projects</Link>
          <Link to="/about" className="transition hover:text-black">About</Link>
          <Link to="/contact" className="transition hover:text-black">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>{children}</main>
      <footer className="mt-20 border-t border-black/5">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <h3 className="text-l font-semibold">Made by Jonathan Tran</h3>
        </div>
      </footer>
    </div>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8 md:py-12">
      <div className="grid items-center gap-22 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
            Mechanical Engineering
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-neutral-950 md:text-7xl">
            Engineering Portfolio:
          </h1>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-neutral-950 md:text-7xl">
            Jonathan Tran
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Welcome to my portfolio showcasing various engineering projects I 
            have worked on. I am interested in manufacturing and aerospace 
            industries where I can contribute to meaningful projects.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              View My Work
            </Link>
            <Link
              to="/about"
              className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-50"
            >
              About Me
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-neutral-200 bg-neutral-100 p-4 shadow-sm">
          <div className="flex aspect-[4/3] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-neutral-200 to-neutral-50 text-center">
            <img
              src="/images/professional headshot.jpg"
              alt="Professional headshot of Jonathan Tran"
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
            />
            <div className="max-w-xs px-0">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="aspect-[16/10] bg-gradient-to-br from-neutral-200 via-neutral-100 to-white" />
      <div className="p-6">
        <p className="text-sm text-neutral-500">{project.category}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950">
          {project.title}
        </h3>
        <p className="mt-4 text-base leading-7 text-neutral-600">{project.summary}</p>
        <Link
          to={`/projects/${project.slug}`}
          className="mt-5 inline-flex text-sm font-medium text-neutral-900 transition hover:text-neutral-600"
        >
          View Details →
        </Link>
      </div>
    </article>
  );
}

function Home() {
  return (
    <Layout>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

function Projects() {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-5xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-600">
          A selection of projects in manufacturing, CAD, robotics, and research.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

function ProjectDetail({ title, category, summary, details }) {
  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-6 py-20">
        <Link to="/projects" className="text-sm text-neutral-500 transition hover:text-neutral-900">
          ← Back to Projects
        </Link>
        <p className="mt-8 text-sm text-neutral-500">{category}</p>
        <h1 className="mt-2 text-5xl font-semibold tracking-tight text-neutral-950">{title}</h1>
        <div className="mt-8 aspect-[16/9] rounded-[2rem] border border-neutral-200 bg-gradient-to-br from-neutral-200 via-neutral-100 to-white" />
        <p className="mt-8 text-lg leading-8 text-neutral-600">{summary}</p>
        <div className="mt-8 space-y-5 text-base leading-8 text-neutral-700">
          {details.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </Layout>
  );
}

function PivotalProject() {
  return (
    <ProjectDetail
      category="Manufacturing"
      title="Manufacturing Engineering Internship"
      summary="Supported engineering work related to production workflows, process improvement, and manufacturing execution in an aerospace environment."
      details={[
        "Use this page for a fuller write-up of your internship work, what team you supported, the kind of problems you worked on, and what you learned from the experience.",
        "You can also add images, process diagrams, or a PDF link later once you want the portfolio to feel more complete.",
      ]}
    />
  );
}

function RoboticsProject() {
  return (
    <ProjectDetail
      category="Robotics / CAD"
      title="Foothill Robotics CAD Leadership"
      summary="Led CAD-related organization and support for student robotics projects, helping create a more structured design workflow for the team."
      details={[
        "Use this page to describe your CAD manager role, how you helped teammates, and any assemblies, mechanisms, or drawings you contributed to.",
        "You can later split this into multiple robotics projects if you want each robot or subsystem to have its own dedicated page.",
      ]}
    />
  );
}

function ArmsLabProject() {
  return (
    <ProjectDetail
      category="Research"
      title="ARMS Lab CNC Automation Research"
      summary="Explored probing logic, automation workflows, and CNC setup concepts for smarter machining processes and research applications."
      details={[
        "Use this page for your ARMS Lab research summary, including probing goals, stock detection concepts, automation macros, and any implementation ideas you developed.",
        "This page would look especially strong with a simple diagram, machine photo, or short list of technical takeaways from the project.",
      ]}
    />
  );
}

function About() {
  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="text-5xl font-semibold tracking-tight">About</h1>
        <p className="mt-8 text-lg leading-8 text-neutral-600">
          Currently pursuing a B.S. in Mechanical Engineering at UC Davis, with an expected graduation in June 2027. 
          I love to build things and design my way through solving real world problems! I am interested in 
          manufacturing and aerospace industries where I can work on meaningful projects.
        </p>
        <p className="mt-6 text-lg leading-8 text-neutral-600">
          As a Manufacturing Engineer at the ARMS Laboratory at UC Davis, I support the research lab by assisting in 
          the development of CNC automation processes and optimizing machining controls. Additionally, I support 
          the Drivetrain subteam as a Powertrain Mechanical Engineer at Formula Racing at UC Davis through 
          planetary gearbox design and motor component/design drawing analysis using SolidWorks! I am skilled in 
          SolidWorks and Autodesk Fusion 360, with a strong foundation in engineering principles and a focus on 
          innovation in manufacturing systems.
        </p>
        <p className="mt-6 text-lg leading-8 text-neutral-600">
          I am currently seeking mechanical engineering internship opportunities where I can grow my skills in 
          designing, prototyping, and manufacturing. As a motivated student, I am excited to learn through hands-on 
          experiences and in a teamwork setting.
        </p>
        <p className="mt-6 text-lg leading-8 text-neutral-600">
          Incoming Manufacturing Engineering Intern @ Pivotal - Summer 2026
        </p>
      </section>
    </Layout>
  );
}

function Files() {
  const contact = [
    { name: "Resume", url: "/documents/Jonathan Tran Resume.pdf" },
    { name: "LinkedIn Profile", url: "https://www.linkedin.com/in/jonathan-tran-588049229/" },
  ];

  const email = "jthomastran@gmail.com"; // real email

  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="text-5xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-600">
          Feel free to reach out via email or explore the links below.
        </p>

        {/* Email Button */}
        <div className="mt-10">
          <a
            href={`mailto:${email}`}
            className="inline-block rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Send Me an Email
          </a>
        </div>

        {/* Links */}
        <div className="mt-10 space-y-4">
          {contact.map((file) => (
            <a
              key={file.name}
              href={file.url}
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-neutral-200 px-5 py-5 text-base text-neutral-800 transition hover:bg-neutral-50"
            >
              {file.name}
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default function PortfolioWebsite() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/pivotal" element={<PivotalProject />} />
        <Route path="/projects/robotics" element={<RoboticsProject />} />
        <Route path="/projects/arms-lab" element={<ArmsLabProject />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Files />} />
      </Routes>
    </Router>
  );
}
