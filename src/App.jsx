// Create React app with Vite and React Router
import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react";

// Import Professional Headshot Image
import professionalHeadshot from "./assets/images/professional-headshot.jpg";

// Import Project Images and Videos
import { gyroscopeImages } from "./assets/projects/gyroscope";
import { backupSensorImages } from "./assets/projects/backup-sensor";
import { labQuestImages } from "./assets/projects/labquest";
import { multiSpeedFanImages, multiSpeedFanSlides } from "./assets/projects/multi-speed-fan";

// All Project Data and Details
const allProjects = [
  {
    slug: "gyroscope-project",
    category: "Manufacturing",
    title: "Gyroscope Project",
    summary:
      "Fully 3D modeled and assembled a gyroscope in SolidWorks with 8 parts from provided CAD drawings. Manufactured the parts on a CNC mill and lathe, then assembled the final product with press fits and bearings.",
    image: gyroscopeImages[0].src,
    featured: true,
  },
  {
    slug: "backup-sensor-project",
    category: "Arduino",
    title: "Backup Sensor Project",
    summary:
      "Worked with a team to design and build a prototype backup sensor system using Arduino. The project featured proximity detection with an HC-SR04 Ultrasonic Sensor and visual indicators through LEDs, along with a buzzer that varied in intensity based on object distance.",
    image: backupSensorImages[0].src,
    featured: true,
  },
  {
    slug: "labquest-stand-project",
    category: "Manufacturing",
    title: "LabQuest Stand Project",
    summary:
      "Designed and prototyped 3D printed stands for the LabQuest device using SolidWorks. The stands are designed to securely hold the LabQuest device at an optimal viewing angle during experiments, while also being compact and easy to transport.",
    image: labQuestImages[0].src,
    featured: true,
  },
  {
    slug: "multi-speed-fan-project",
    category: "Circuit Analysis",
    title: "Multi-Speed Fan Project",
    summary:
      "Designed and built a multi-speed fan system with variable speed control, integrating circuit design, motor control, and hardware testing into a functional prototype.",
    image: multiSpeedFanImages[0].src,
    featured: false,
  },
];

// Filter featured projects for the home page highlight section
const featuredProjects = allProjects.filter((project) => project.featured);

// Navigation Bar at the Top of the Page
function Navbar() {
  return (
    <header className="border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-2xl font-semibold tracking-tight text-neutral-900">
          Jonathan Tran
        </Link>

        <nav className="flex items-center gap-7 text-lg text-neutral-600">
          <Link to="/" className="transition hover:text-black">Home</Link>
          <Link to="/projects" className="transition hover:text-black">Projects</Link>
          <Link to="/about" className="transition hover:text-black">About</Link>
          <Link to="/contact" className="transition hover:text-black">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

// Layout and Structure
function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>{children}</main>
      <footer className="mt-20 border-t border-black/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Jonathan Tran</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Mechanical Engineering Portfolio, 2026
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/jonathan-tran-588049229/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700 transition hover:bg-neutral-50 hover:text-neutral-950"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Home Page with Introduction and Professional Headshot
function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-16">
      <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xl font-xl uppercase tracking-[0.25em] text-neutral-500">
            Mechanical Engineering
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-neutral-950 md:text-7xl">
            Jonathan Tran's Engineering Portfolio
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Welcome to my portfolio showcasing engineering work across CAD,
            manufacturing, and research. I enjoy designing, building, and improving
            solutions to real-world problems, with a strong interest in manufacturing
            and aerospace applications. Currently pursuing a B.S. in Mechanical 
            Engineering at UC Davis, with an expected graduation in June 2027.
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

// Project Card Component
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

// Experience Section with List of Roles and Descriptions
function ExperienceSection() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const experienceHighlights = [
    {
      role: "Incoming Manufacturing Engineering Intern",
      organization: "Pivotal",
      period: "Summer 2026",
      description:
        "Joining Pivotal as a Manufacturing Engineering Intern to support aerospace manufacturing processes and production-focused engineering work with eVTOLs.",
    },
    {
      role: "Manufacturing Engineer",
      organization: "ARMS Laboratory at UC Davis",
      period: "September 2025 - Present",
      description:
        "Supporting CNC automation research focused on probing logic, setup workflows, and smarter machining processes.",
    },
    {
      role: "Powertrain Engineer",
      organization: "Formula Racing at UC Davis",
      period: "September 2025 - Present",
      description:
        "Contributing to Drivetrain sub-team and gearbox-related engineering work as part of the Formula SAE team.",
    },
    {
      role: "CAD Manager",
      organization: "Foothill Robotics Club",
      period: "September 2024 - July 2025",
      description:
        "Led CAD-related work for robotics projects, supported part design, and helped organize technical design efforts within the club.",
    },
    {
      role: "3D Print Operations Lead",
      organization: "Foothill 3D Printmakers Association",
      period: "January 2025 - July 2025",
      description:
        "Coordinate and fulfill 3D printing requests for three student organizations on campus, maintaining a streamlined process from design intake to final production and delivery.",
    },
  ];


  // Scroll handling for experience section with left and right buttons
  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    const tolerance = 2;

    setCanScrollLeft(el.scrollLeft > tolerance);
    setCanScrollRight(el.scrollLeft < maxScrollLeft - tolerance);
  };

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount = 360;

    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();

    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-14">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">
            Experience
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-600">
            A snapshot of the engineering and leadership experiences I have built
            through research, design teams, internships, and mentorship roles.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition ${
              canScrollLeft
                ? "border-neutral-200 bg-white text-neutral-700 hover:-translate-y-0.5 hover:bg-neutral-50 hover:text-neutral-950"
                : "cursor-not-allowed border-neutral-200 bg-neutral-100 text-neutral-300"
            }`}
            aria-label="Scroll experience cards left"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition ${
              canScrollRight
                ? "border-neutral-200 bg-white text-neutral-700 hover:-translate-y-0.5 hover:bg-neutral-50 hover:text-neutral-950"
                : "cursor-not-allowed border-neutral-200 bg-neutral-100 text-neutral-300"
            }`}
            aria-label="Scroll experience cards right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="relative">
        {canScrollLeft && (
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent" />
        )}

        {canScrollRight && (
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent" />
        )}

        <div
          ref={scrollRef}
          className="overflow-x-scroll pt-2 pb-4 scroll-smooth"
        >
          <div className="flex w-max gap-6 snap-x snap-mandatory">
            {experienceHighlights.map((item) => (
              <article
                key={`${item.role}-${item.organization}`}
                className="w-[320px] shrink-0 snap-start rounded-[1.5rem] border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-md"
              >
                <p className="text-sm text-neutral-500">{item.period}</p>

                <h3 className="mt-2 text-xl font-semibold tracking-tight text-neutral-950">
                  {item.role}
                </h3>

                <p className="mt-2 text-sm font-medium text-neutral-700">
                  {item.organization}
                </p>

                <p className="mt-4 text-base leading-7 text-neutral-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills Section with List of Skills and Tools
function SkillsSection() {
  const skills = [
    "SolidWorks",
    "Autodesk Fusion 360",
    "CNC Programming & Machining",
    "3D Printing",
    "CAD and CAM Modeling",
    "Manual Mill",
    "Manual Lathe",
    "Manufacturing Drawings",
    "Prototyping",
    "MATLAB",
    "Leadership",
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 pb-14">
      <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8 md:p-10">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">
          Skills
        </h2>

        <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-600">
          Tools and technical areas I have developed through coursework, projects,
          machining, and research experience.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// Home Page showing Hero Section, Experience Highlights, Featured Projects, and Skills
function Home() {
  return (
    <Layout>
      <Hero />
      <ExperienceSection />

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">
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

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <SkillsSection />
    </Layout>
  );
}

// Projects Page showing projects in a grid layout
function Projects() {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-5xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-600">
          A selection of projects in manufacturing, CAD, robotics, and research.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {allProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

// Individual Project Detail Page with Image Gallery and Project Details
function ProjectDetail({
  title,
  category,
  summary,
  details,
  images = [],
  slides = [],
  tags = [],
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [featuredMedia, ...galleryMedia] = images;

  const openImage = (index) => {
    if (images[index]?.type === "video") return;
    setSelectedIndex(index);
  };

  const closeImage = () => setSelectedIndex(null);

  const getNextImageIndex = (startIndex, direction) => {
    if (!images.length) return null;

    let nextIndex = startIndex;

    for (let i = 0; i < images.length; i++) {
      nextIndex = (nextIndex + direction + images.length) % images.length;
      if (images[nextIndex]?.type !== "video") {
        return nextIndex;
      }
    }

    return null;
  };

  const showPrevImage = () => {
    if (selectedIndex === null) return;
    const prevIndex = getNextImageIndex(selectedIndex, -1);
    if (prevIndex !== null) setSelectedIndex(prevIndex);
  };

  const showNextImage = () => {
    if (selectedIndex === null) return;
    const nextIndex = getNextImageIndex(selectedIndex, 1);
    if (nextIndex !== null) setSelectedIndex(nextIndex);
  };

  const showPrevSlide = () => {
    if (!slides.length) return;
    setActiveSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const showNextSlide = () => {
    if (!slides.length) return;
    setActiveSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Preload images for smoother transitions in the gallery and slideshows
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }, [slides]);

  // Keyboard navigation for image gallery and slideshows, with Escape to close and Arrow keys to navigate
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedIndex !== null) {
        if (event.key === "Escape") closeImage();
        if (event.key === "ArrowLeft") showPrevImage();
        if (event.key === "ArrowRight") showNextImage();
        return;
      }

      if (slides.length > 0) {
        if (event.key === "ArrowLeft") showPrevSlide();
        if (event.key === "ArrowRight") showNextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, slides]);

  // Prevent background scrolling when an image is open in the gallery, and restore scroll behavior when closed
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

        {featuredMedia && (
          <div className="mt-8">
            {featuredMedia.type === "video" ? (
              <div className="relative overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white p-5 shadow-sm">
                <video
                  src={featuredMedia.src}
                  controls
                  className="aspect-[16/9] w-full rounded-[1rem] object-contain"
                />
              </div>
            ) : (
              <button
                type="button"
                onClick={() => openImage(0)}
                className="group block w-full cursor-zoom-in text-left"
              >
                <div className="relative overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white p-5 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                  <img
                    src={featuredMedia.src}
                    alt={featuredMedia.alt}
                    className="aspect-[16/9] w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </button>
            )}

            {featuredMedia.caption && (
              <p className="mt-3 text-sm text-neutral-500">
                {featuredMedia.caption}
              </p>
            )}
          </div>
        )}

        {galleryMedia.length > 0 && (
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {galleryMedia.map((media, index) => {
              const actualIndex = index + 1;

              return (
                <div key={actualIndex}>
                  {media.type === "video" ? (
                    <div className="relative overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-white p-4 shadow-sm">
                      <video
                        src={media.src}
                        controls
                        className="aspect-[16/10] w-full rounded-[1rem] object-contain"
                      />
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => openImage(actualIndex)}
                      className="group block w-full cursor-zoom-in text-left"
                    >
                      <div className="relative overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-white p-4 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                        <img
                          src={media.src}
                          alt={media.alt}
                          className="aspect-[16/10] w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                    </button>
                  )}

                  {media.caption && (
                    <p className="mt-3 text-sm text-neutral-500">
                      {media.caption}
                    </p>
                  )}
                </div>
              );
            })}
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

        {slides.length > 0 && (
          <div className="mt-12">
            <div className="mb-5">
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">
                Presentation Slides
              </h2>
              <p className="mt-2 text-sm text-neutral-500">
                Here are the presentation slides I created for this project showcasing main details.
              </p>
            </div>

            <div className="relative mx-auto max-w-4xl">
              <button
                type="button"
                onClick={showPrevSlide}
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white/95 text-neutral-700 shadow-sm transition hover:bg-neutral-50 hover:text-neutral-950"
                aria-label="Previous slide"
              >
                ←
              </button>

              <button
                type="button"
                onClick={showNextSlide}
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white/95 text-neutral-700 shadow-sm transition hover:bg-neutral-50 hover:text-neutral-950"
                aria-label="Next slide"
              >
                →
              </button>

              <div className="rounded-[1.75rem] border border-neutral-200 bg-white p-5 shadow-sm">
                <img
                  src={slides[activeSlideIndex].src}
                  alt={slides[activeSlideIndex].alt}
                  className="mx-auto aspect-[16/9] max-h-[420px] w-full rounded-[1rem] object-contain"
                />
              </div>
            </div>

            <div className="mx-auto mt-4 flex max-w-4xl items-center justify-between gap-4">
              <p className="text-sm text-neutral-500">
                {slides[activeSlideIndex].caption}
              </p>

              <p className="text-sm text-neutral-400">
                {activeSlideIndex + 1} / {slides.length}
              </p>
            </div>

            <div className="mx-auto mt-4 flex max-w-4xl flex-wrap gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setActiveSlideIndex(index)}
                  className={`h-2.5 rounded-full transition ${
                    index === activeSlideIndex
                      ? "w-8 bg-neutral-900"
                      : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      {selectedIndex !== null && images[selectedIndex]?.type !== "video" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-6 py-10 backdrop-blur-sm"
          onClick={closeImage}
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

// Gyroscope Project Detail Page
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

// Backup Sensor Project Detail Page
function BackUpSensorProject() {
  return (
    <ProjectDetail
      category="Arduino"
      title="Backup Sensor Project"
      tags={["Arduino", "Circuit Analysis", "Project Management"]}
      summary="Designed and built a backup sensor system using Arduino, 
              featuring proximity detection and visual indicators. The system 
              utilized an HC-SR04 Ultrasonic Sensor to measure distance and trigger 
              LED indicators based on object proximity. There is also a buzzer that 
              continuously makes noise while activated along with the LED. The LED 
              and buzzer indicator vary on object distance: the LED will turn green
              when there is no object in close proximity, and will turn red when an 
              object is detected. The buzzer will increase in intensity as the 
              object gets closer. The entire circuit is activated by a remote control."
      images={backupSensorImages}
      details={[
        "Coordinated a three-person team to develop an Arduino-based proximity sensor with an HC-SR04 Ultrasonic Sensor for a small scale-prototype car, overseeing the project from initial concept to a fully functional device.",
        "Contributed to the circuit design and C++ control code, focusing on the successful integration of the ultrasonic sensor to detect obstacle proximity along with the user alert system through the usage of LEDs and a buzzer.",
        "Implemented proximity detection logic to trigger green and red LED indicators based on object distance.",
        "Assembled and tested the final device, troubleshooting both hardware and software issues to ensure the system provided accurate and reliable measurements.",
      ]}
    />
  );
}

// LabQuest Stand Project Detail Page
function LabQuestStandProject() {
  return (
    <ProjectDetail
      category="Manufacturing"
      title="LabQuest Stand Project"
      tags={["SolidWorks", "3D Printing", "Manufacturing"]}
      summary={
        <>
          At my community college, LabQuest devices were frequently used for 
          chemistry experiments, but there was a lack of proper stands to hold 
          the devices securely during use. To address this issue, I designed 
          and prototyped 3D printed stands for the LabQuest device using CAD 
          on SolidWorks. I had initially proposed my idea to my chemistry 
          professor, and through multiple interactions I was able to 
          incorporate both her feedback and the needs of the students 
          to optimize the final design of the stands for functionality and 
          ease of use. I optimized the 3D print settings for strength and 
          print efficiency, ultimately saving the department over $1000
          compared to purchasing commercial stands from the LabQuest company. 
          {" "}
          <a
            href="https://www.linkedin.com/posts/jonathan-tran-588049229_im-honored-and-excited-to-share-a-recent-activity-7336423699358633989-u9AK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkjE_gBgIZV1oGA8bKIOc2n_nuS0mgFzhw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            View project post on LinkedIn →
          </a>
        </>
      }
      images={labQuestImages}
      details={[
        "Utilized CAD on SolidWorks to design and assemble the 3D printed stands for the LabQuest device.",
        "Optimized the design for mass production using on a Bambu Slicer plate, with 8 stands printed at a time, reducing overall production time.",
        "Assembled and tested the final product, ensuring the stands securely hold the LabQuest device at an optimal viewing angle during experiments.",
        "Collaborated with the chemistry professor to gather feedback and iteratively improve the design based on the needs of the students and functionality during experiments.",
        "Utilized black PETG filament for 3D printing the stands on a Bambu Lab X1 Carbon 3D printer, optimizing for strength and durability.",
      ]}
    />
  );
      
}

// Multi-Speed Fan Project Detail Page
function MultiSpeedFanProject() {
  return (
    <ProjectDetail
      category="Circuit Analysis"
      title="Multi-Speed Fan Project"
      tags={["Circuit Analysis", "3D Printing", "Research"]}
      summary="Created a simple circuit of a multi-speed fan using a DC motor, 
              small fan blades, and a breadboard, powered by a 9V battery. 
              The circuit has 3 switch paths with different combinations of
              resistors to allow for variable speed control of the fan. The DC
              motor helps create a linear voltage-RPM relationship. There are three 
              speed settings of low (3750 RPM), medium (7500 RPM), and high (8571 RPM).
              I 3D-modeled and printed a small PLA plate to hold the circuit 
              components with the battery. After researching the behavior of 
              fan-spinning and testing the circuit, I created a comprehensive 
              presentation slidedeck to explain the circuit design, research, 
              and testing results."
      images={multiSpeedFanImages}
      slides={multiSpeedFanSlides}
      details={[
        "Conducted research on DC motor control and circuit design to develop a multi-speed fan system with variable speed control using resistors and switches.",
        "Measured voltage using a DMM over 3 paths and calculated RPM using a computer audio recording software, Audacity",
        "Designed and assembled the circuit on a breadboard, integrating a DC motor, small fan blades, resistors, and switches to achieve the desired speed settings.",
        "Conducted research on how a fan blade interacts with air in order to determine the correct spinning direction for the blades.",
      ]}
    />
  );
}

// About Page with Personal Background and Experience
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

// Contact Page with Email and Links to Resume and LinkedIn
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

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Main App Component with Routing
export default function PortfolioWebsite() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/gyroscope-project" element={<GyroscopeProject />} />
        <Route path="/projects/backup-sensor-project" element={<BackUpSensorProject />} />
        <Route path="/projects/labquest-stand-project" element={<LabQuestStandProject />} />
        <Route path="/projects/multi-speed-fan-project" element={<MultiSpeedFanProject />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
