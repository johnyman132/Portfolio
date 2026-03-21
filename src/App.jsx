import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

import professionalHeadshot from "./assets/images/professional-headshot.jpg";

import { gyroscopeImages } from "./assets/projects/gyroscope";

const featuredProjects = [
  {
    slug: "gyroscope-project",
    category: "Manufacturing",
    title: "Gyroscope Project",
    summary:
      "Fully 3D modeled and assembled a gyroscope in Solidworks with 8 parts from provided CAD drawings. Manufactured the parts on a CNC mill and lathe, then assembled the final product with press fits and bearings.",
    image: gyroscopeImages[0].src,
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
        <Link to="/" className="text-2xl font-semibold tracking-tight text-neutral-900">
          Jonathan Tran
        </Link>

        <nav className="flex items-center gap-7 text-md text-neutral-600">
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
          <h3 className="text-xl font-semibold">Jonathan Tran</h3>
          <p className="mt-2 text-sm text-neutral-600">Design. Build. Improve.</p>
          <p className="mt-6 text-sm text-neutral-500">© 2026 Jonathan Tran. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
            Engineering Portfolio
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-neutral-950 md:text-7xl">
            Design. Build. Innovate.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Welcome to my portfolio showcasing engineering work across CAD,
            manufacturing, and research. I love to build things and design my 
            way through solving real world problems! I am interested in 
            manufacturing and aerospace industries where I can work on 
            meaningful projects.
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
              src={professionalHeadshot}
              alt="Professional headshot of Jonathan Tran"
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block h-full"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
        <div className="relative overflow-hidden bg-white p-4">
          <img
            src={project.image}
            alt={project.title}
            className="aspect-[16/16] w-full object-cover transition duration-300 group-hover:scale-[1.02]"          />

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/10">
            <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-neutral-900 opacity-0 shadow-sm transition duration-300 group-hover:opacity-100">
              View Project
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-sm text-neutral-500">{project.category}</p>

          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950">
            {project.title}
          </h3>

          <p className="mt-4 flex-1 text-base leading-7 text-neutral-600">
            {project.summary}
          </p>

          <div className="mt-6 text-sm font-medium text-neutral-900">
            View Project →
          </div>
        </div>
      </article>
    </Link>
  );
}

function Home() {
  return (
    <Layout>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
              Highlighted Projects
            </h2>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center text-sm font-medium text-neutral-900 transition hover:text-neutral-600"
          >
            View All Projects →
          </Link>
        </div>

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
      <section className="mx-auto max-w-6xl px-6 py-20">
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

function ProjectDetail({
  title,
  category,
  summary,
  details,
  images = [],
  tags = [],
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [featuredImage, ...galleryImages] = images;

  const openImage = (index) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);

  const showPrevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  const showNextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedIndex === null) return;

      if (event.key === "Escape") closeImage();
      if (event.key === "ArrowLeft") showPrevImage();
      if (event.key === "ArrowRight") showNextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Link
          to="/projects"
          className="text-sm text-neutral-500 transition hover:text-neutral-900"
        >
          ← Back to Projects
        </Link>

        <p className="mt-8 text-sm text-neutral-500">{category}</p>

        <h1 className="mt-2 text-5xl font-semibold tracking-tight text-neutral-950">
          {title}
        </h1>

        {tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {featuredImage && (
          <div className="mt-8">
            <button
              type="button"
              onClick={() => openImage(0)}
              className="group block w-full cursor-zoom-in text-left"
            >
              <div className="relative overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white p-5 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                <img
                  src={featuredImage.src}
                  alt={featuredImage.alt}
                  className="aspect-[16/9] w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </button>

            {featuredImage.caption && (
              <p className="mt-3 text-sm text-neutral-500">
                {featuredImage.caption}
              </p>
            )}
          </div>
        )}

        {galleryImages.length > 0 && (
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {galleryImages.map((image, index) => (
              <div key={index}>
                <button
                  type="button"
                  onClick={() => openImage(index + 1)}
                  className="group block w-full cursor-zoom-in text-left"
                >
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-white p-4 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="aspect-[16/10] w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </button>

                {image.caption && (
                  <p className="mt-3 text-sm text-neutral-500">
                    {image.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        <p className="mt-8 text-lg leading-8 text-neutral-600">{summary}</p>

        <ul className="mt-8 space-y-4 text-base leading-8 text-neutral-700">
          {details.map((detail) => (
            <li key={detail} className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-neutral-900" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </section>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm px-6 py-10"          onClick={closeImage}
        >
          <div
            className="relative w-full max-w-6xl rounded-[1.75rem] bg-white p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeImage}
              className="absolute right-4 top-4 z-10 rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-700 transition hover:bg-neutral-100"
            >
              Close
            </button>

            <button
              type="button"
              onClick={showPrevImage}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xl text-neutral-700 shadow-sm transition hover:bg-neutral-100"
            >
              ←
            </button>

            <button
              type="button"
              onClick={showNextImage}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xl text-neutral-700 shadow-sm transition hover:bg-neutral-100"
            >
              →
            </button>

            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="max-h-[80vh] w-full rounded-[1.25rem] object-contain"
            />

            {images[selectedIndex].caption && (
              <p className="mt-4 text-sm text-neutral-500">
                {images[selectedIndex].caption}
              </p>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}

function GyroscopeProject() {
  return (
    <ProjectDetail
      category="Manufacturing"
      title="Gyroscope Project"
      tags={["SolidWorks", "CNC Mill", "Manual Mill", "Manual Lathe", "Drill Press", "Manufacturing"]}
      summary="Fully 3D modeled and assembled a gyroscope in SolidWorks with 8 parts from provided CAD drawings. Manufactured the parts on a CNC mill and lathe, then assembled the final product with press fits and bearings."
      images={gyroscopeImages}
      details={[
        "Operated manual Bridgeport Mill to precisely size the 3-inch frame and drill specified holes.",
        "Machined rotor and spindle to correct length using Harrison and Clausing manual lathes.",
        "Utilized a Digimatic Height Gage to mark hole patterns with correct location dimensions.",
        "Used a floor-type drill press to drill and countersink holes to exact specification.",
        "Machined components on a Haas TM0-P CNC machine to meet required tolerances and allowances.",
        "Assembled the final product with press fits and bearings, ensuring smooth rotation and proper fit.",
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
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-5xl font-semibold tracking-tight">About</h1>
        <p className="mt-8 text-lg leading-8 text-neutral-600">
          Currently pursuing a B.S. in Mechanical Engineering at UC Davis, 
          with an expected graduation in June 2027. I love to build things and 
          design my way through solving real world problems! I am interested in 
          manufacturing and aerospace industries where I can work on meaningful 
          projects.
        </p>
        <p className="mt-6 text-lg leading-8 text-neutral-600">
          As a Manufacturing Engineer at the ARMS Laboratory at UC Davis, 
          I support the research lab by assisting in the development of CNC 
          automation processes and optimizing machining controls. Additionally, 
          I support the Drivetrain subteam as a Powertrain Mechanical Engineer 
          at Formula Racing at UC Davis through planetary gearbox design and 
          motor component/design drawing analysis using SolidWorks! I am 
          skilled in SolidWorks and Autodesk Fusion 360, with a strong 
          foundation in engineering principles and a focus on innovation in 
          manufacturing systems.
        </p>
        <p className="mt-6 text-lg leading-8 text-neutral-600">
          I am currently seeking mechanical engineering internship opportunities 
          where I can grow my skills in designing, prototyping, and manufacturing. 
          As a motivated student, I’m excited to learn through hands-on experiences 
          and in a teamwork setting.
        </p>
        <p className="mt-6 text-lg leading-8 text-neutral-600">
          Incoming Manufacturing Engineering Intern @ Pivotal - Summer 2026
        </p>
      </section>
    </Layout>
  );
}

function Contact() {
  const contact = [
    { name: "Resume", url: "/documents/Jonathan Tran Resume.pdf" },
    { name: "LinkedIn Profile", url: "https://www.linkedin.com/in/jonathan-tran-588049229/" },
  ];

  const email = "jthomastran@gmail.com"; // real email

  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-6 py-20">
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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function PortfolioWebsite() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/gyroscope-project" element={<GyroscopeProject />} />
        <Route path="/projects/robotics" element={<RoboticsProject />} />
        <Route path="/projects/arms-lab" element={<ArmsLabProject />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
