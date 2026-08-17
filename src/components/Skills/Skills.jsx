import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import {
  SiAxios,
  SiBootstrap,
  SiFigma,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiNpm,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiShopify,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import {
  TbAccessible,
  TbApi,
  TbArrowsExchange,
  TbBrowserCheck,
  TbComponents,
  TbDeviceDesktopCode,
  TbDevices,
  TbForms,
  TbGauge,
  TbLayoutDashboard,
  TbSeo,
  TbUxCircle,
  TbWorldCode,
} from "react-icons/tb";
import "./Skills.css";

const GoHighLevelIcon = () => (
  <svg viewBox="0 0 42 42" aria-hidden="true" focusable="false">
    <path
      d="M8 25.5c3.4-8.7 8.1-11 14.1-6.9l2.3 1.6c2.4 1.6 4.7.6 7.1-3.1"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="3"
    />
    <path
      d="M11 31h20"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="3"
    />
    <text
      fill="currentColor"
      fontFamily="Arial, sans-serif"
      fontSize="10"
      fontWeight="700"
      x="21"
      y="16"
      textAnchor="middle"
    >
      GHL
    </text>
  </svg>
);

const skillGroups = [
  {
    index: "01",
    title: "Core Frontend",
    skills: [
      {
        name: "HTML",
        Icon: FaHtml5,
        color: "#e34f26",
      },
      {
        name: "CSS",
        Icon: FaCss3Alt,
        color: "#1572b6",
      },
      {
        name: "JavaScript",
        Icon: SiJavascript,
        color: "#f7df1e",
      },
      {
        name: "TypeScript",
        Icon: SiTypescript,
        color: "#3178c6",
      },
      {
        name: "Web Development",
        Icon: TbWorldCode,
        color: "#38bdf8",
      },
      {
        name: "Frontend Development",
        Icon: TbDeviceDesktopCode,
        color: "#a78bfa",
      },
      {
        name: "Responsive Design",
        Icon: TbDevices,
        color: "#2dd4bf",
      },
      {
        name: "Accessibility",
        Icon: TbAccessible,
        color: "#22c55e",
      },
      {
        name: "Performance Optimization",
        Icon: TbGauge,
        color: "#f59e0b",
      },
      {
        name: "SEO Basics",
        Icon: TbSeo,
        color: "#10b981",
      },
      {
        name: "Cross-Browser Compatibility",
        Icon: TbBrowserCheck,
        color: "#60a5fa",
      },
    ],
  },
  {
    index: "02",
    title: "React Ecosystem",
    skills: [
      {
        name: "React",
        Icon: SiReact,
        color: "#61dafb",
      },
      {
        name: "Next.js",
        Icon: SiNextdotjs,
        color: "#ffffff",
        lightColor: "#111827",
      },
      {
        name: "Redux",
        Icon: SiRedux,
        color: "#764abc",
      },
      {
        name: "React Query",
        Icon: SiReactquery,
        color: "#ff4154",
      },
      {
        name: "React Router",
        Icon: SiReactrouter,
        color: "#ca4245",
      },
      {
        name: "State Management",
        Icon: TbArrowsExchange,
        color: "#c084fc",
      },
      {
        name: "Form Handling",
        Icon: TbForms,
        color: "#f97316",
      },
      {
        name: "Component-Based Architecture",
        Icon: TbComponents,
        color: "#38bdf8",
      },
    ],
  },
  {
    index: "03",
    title: "Styling & UI",
    skills: [
      {
        name: "Material UI",
        Icon: SiMui,
        color: "#007fff",
      },
      {
        name: "Tailwind CSS",
        Icon: SiTailwindcss,
        color: "#06b6d4",
      },
      {
        name: "Bootstrap",
        Icon: SiBootstrap,
        color: "#7952b3",
      },
      {
        name: "UI Development",
        Icon: TbLayoutDashboard,
        color: "#fb7185",
      },
      {
        name: "Figma",
        Icon: SiFigma,
        color: "#f24e1e",
      },
      {
        name: "UI/UX Basics",
        Icon: TbUxCircle,
        color: "#ec4899",
      },
    ],
  },
  {
    index: "04",
    title: "Tools & Integrations",
    skills: [
      {
        name: "Git",
        Icon: SiGit,
        color: "#f05032",
      },
      {
        name: "GitHub",
        Icon: SiGithub,
        color: "#ffffff",
        lightColor: "#111827",
      },
      {
        name: "Vite",
        Icon: SiVite,
        color: "#646cff",
      },
      {
        name: "npm",
        Icon: SiNpm,
        color: "#cb3837",
      },
      {
        name: "REST APIs",
        Icon: TbApi,
        color: "#14b8a6",
      },
      {
        name: "Axios / Fetch API",
        Icon: SiAxios,
        color: "#5a29e4",
      },
      {
        name: "Shopify",
        Icon: SiShopify,
        color: "#95bf47",
      },
      {
        name: "GoHighLevel",
        Icon: GoHighLevelIcon,
        color: "#22d3ee",
      },
    ],
  },
];

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-intro">
        <p className="skills-eyebrow">{"// EXPERTISE"}</p>
        <h1 className="title">Skills</h1>

        <p className="sub-title">
          Technologies and disciplines I use to build polished, responsive web
          experiences.
        </p>
      </div>

      <div className="skill-categories">
        {skillGroups.map(({ index, title, skills }) => (
          <article
            className="skill-category"
            key={title}
            aria-labelledby={`skills-category-${index}`}
          >
            <header className="skill-category-header">
              <span className="skill-category-index" aria-hidden="true">
                {index}
              </span>
              <h2
                className="skill-category-title"
                id={`skills-category-${index}`}
              >
                {title}
              </h2>
            </header>

            <ul className="skills-list" aria-label={`${title} skills`}>
              {skills.map(({ name, Icon, color, lightColor }) => (
                <li
                  className="skill-item"
                  key={name}
                  style={{
                    "--skill-color": color,
                    "--skill-light-color": lightColor || color,
                  }}
                >
                  <span className="skill-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="skill-name">{name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
