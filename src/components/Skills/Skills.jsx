import { FaCode, FaCss3Alt, FaHtml5 } from "react-icons/fa";
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
    <rect width="42" height="42" rx="10" fill="#111827" />
    <path
      d="M10 25.5c3.2-8.2 7.7-10.4 13.3-6.5l2.2 1.5c2.2 1.5 4.3.6 6.5-2.8"
      fill="none"
      stroke="#22d3ee"
      strokeLinecap="round"
      strokeWidth="3"
    />
    <path
      d="M12 30h18"
      fill="none"
      stroke="#a3e635"
      strokeLinecap="round"
      strokeWidth="3"
    />
    <text
      fill="#fff"
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
    title: "Core Frontend",
    items: [
      {
        name: "HTML",
        Icon: FaHtml5,
        color: "#e34f26",
        glow: "rgba(227, 79, 38, 0.16)",
      },
      {
        name: "CSS",
        Icon: FaCss3Alt,
        color: "#1572b6",
        glow: "rgba(21, 114, 182, 0.16)",
      },
      {
        name: "JavaScript",
        Icon: SiJavascript,
        color: "#f7df1e",
        glow: "rgba(247, 223, 30, 0.16)",
      },
      {
        name: "TypeScript",
        Icon: SiTypescript,
        color: "#3178c6",
        glow: "rgba(49, 120, 198, 0.16)",
      },
      {
        name: "Web Development",
        Icon: TbWorldCode,
        color: "#38bdf8",
        glow: "rgba(56, 189, 248, 0.16)",
      },
      {
        name: "Frontend Development",
        Icon: TbDeviceDesktopCode,
        color: "#a78bfa",
        glow: "rgba(167, 139, 250, 0.16)",
      },
      {
        name: "Responsive Design",
        Icon: TbDevices,
        color: "#2dd4bf",
        glow: "rgba(45, 212, 191, 0.16)",
      },
      {
        name: "Accessibility",
        Icon: TbAccessible,
        color: "#22c55e",
        glow: "rgba(34, 197, 94, 0.16)",
      },
      {
        name: "Performance Optimization",
        Icon: TbGauge,
        color: "#f59e0b",
        glow: "rgba(245, 158, 11, 0.16)",
      },
      {
        name: "SEO Basics",
        Icon: TbSeo,
        color: "#10b981",
        glow: "rgba(16, 185, 129, 0.16)",
      },
      {
        name: "Cross-Browser Compatibility",
        Icon: TbBrowserCheck,
        color: "#60a5fa",
        glow: "rgba(96, 165, 250, 0.16)",
      },
    ],
  },
  {
    title: "React Ecosystem",
    items: [
      {
        name: "React",
        Icon: SiReact,
        color: "#61dafb",
        glow: "rgba(97, 218, 251, 0.16)",
      },
      {
        name: "Next.js",
        Icon: SiNextdotjs,
        color: "#ffffff",
        lightColor: "#111827",
        glow: "rgba(255, 255, 255, 0.12)",
        lightGlow: "rgba(17, 24, 39, 0.12)",
      },
      {
        name: "Redux",
        Icon: SiRedux,
        color: "#764abc",
        glow: "rgba(118, 74, 188, 0.16)",
      },
      {
        name: "React Query",
        Icon: SiReactquery,
        color: "#ff4154",
        glow: "rgba(255, 65, 84, 0.16)",
      },
      {
        name: "React Router",
        Icon: SiReactrouter,
        color: "#ca4245",
        glow: "rgba(202, 66, 69, 0.16)",
      },
      {
        name: "State Management",
        Icon: TbArrowsExchange,
        color: "#c084fc",
        glow: "rgba(192, 132, 252, 0.16)",
      },
      {
        name: "Form Handling",
        Icon: TbForms,
        color: "#f97316",
        glow: "rgba(249, 115, 22, 0.16)",
      },
      {
        name: "Component-Based Architecture",
        Icon: TbComponents,
        color: "#38bdf8",
        glow: "rgba(56, 189, 248, 0.16)",
      },
    ],
  },
  {
    title: "Styling & UI",
    items: [
      {
        name: "Material UI",
        Icon: SiMui,
        color: "#007fff",
        glow: "rgba(0, 127, 255, 0.16)",
      },
      {
        name: "Tailwind CSS",
        Icon: SiTailwindcss,
        color: "#06b6d4",
        glow: "rgba(6, 182, 212, 0.16)",
      },
      {
        name: "Bootstrap",
        Icon: SiBootstrap,
        color: "#7952b3",
        glow: "rgba(121, 82, 179, 0.16)",
      },
      {
        name: "UI Development",
        Icon: TbLayoutDashboard,
        color: "#fb7185",
        glow: "rgba(251, 113, 133, 0.16)",
      },
      {
        name: "Figma",
        Icon: SiFigma,
        color: "#f24e1e",
        glow: "rgba(242, 78, 30, 0.16)",
      },
      {
        name: "UI/UX Basics",
        Icon: TbUxCircle,
        color: "#ec4899",
        glow: "rgba(236, 72, 153, 0.16)",
      },
    ],
  },
  {
    title: "Tools & Integrations",
    items: [
      {
        name: "Git",
        Icon: SiGit,
        color: "#f05032",
        glow: "rgba(240, 80, 50, 0.16)",
      },
      {
        name: "GitHub",
        Icon: SiGithub,
        color: "#ffffff",
        lightColor: "#111827",
        glow: "rgba(255, 255, 255, 0.12)",
        lightGlow: "rgba(17, 24, 39, 0.12)",
      },
      {
        name: "Vite",
        Icon: SiVite,
        color: "#646cff",
        glow: "rgba(100, 108, 255, 0.16)",
      },
      {
        name: "npm",
        Icon: SiNpm,
        color: "#cb3837",
        glow: "rgba(203, 56, 55, 0.16)",
      },
      {
        name: "REST APIs",
        Icon: TbApi,
        color: "#14b8a6",
        glow: "rgba(20, 184, 166, 0.16)",
      },
      {
        name: "Axios / Fetch API",
        Icon: SiAxios,
        color: "#5a29e4",
        glow: "rgba(90, 41, 228, 0.16)",
      },
      {
        name: "Shopify",
        Icon: SiShopify,
        color: "#95bf47",
        glow: "rgba(149, 191, 71, 0.16)",
      },
      {
        name: "GoHighLevel",
        Icon: GoHighLevelIcon,
        color: "#22d3ee",
        glow: "rgba(34, 211, 238, 0.16)",
      },
    ],
  },
];

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h1 className="title">
        <span>
          <FaCode />
        </span>
        Skills
      </h1>

      <p className="sub-title">
        Technologies and disciplines I use to build polished, responsive web
        experiences.
      </p>

      <div className="skill-categories">
        {skillGroups.map(({ title, items }) => (
          <div className="skill-category" key={title}>
            <h2 className="skill-category-title">{title}</h2>

            <div className="skills-list">
              {items.map(({ name, Icon, color, lightColor, glow, lightGlow }) => (
                <div
                  className="skill-card"
                  key={name}
                  style={{
                    "--skill-color": color,
                    "--skill-light-color": lightColor || color,
                    "--skill-glow": glow,
                    "--skill-light-glow": lightGlow || glow,
                  }}
                >
                  <span className="skill-icon">
                    <Icon />
                  </span>
                  <span className="skill-name">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
