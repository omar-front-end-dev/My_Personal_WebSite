import { useEffect, useState } from "react";
import "./Header.css";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";


export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="flex">
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="icon-menu menu"
      >
        <IoIosMenu />
      </button>

      <nav>
        <ul className="flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button
          onClick={() => {
            localStorage.setItem(
              "currentMode",
              theme === "dark" ? "light" : "dark"
            );

            setTheme(localStorage.getItem("currentMode"));
          }}
          className="mode flex"
        >
          {theme === "dark" ? (
            <span style={{ display: "flex" }}>
              <MdOutlineDarkMode />
            </span>
          ) : (
            <span style={{ display: "flex" }}>
              <MdOutlineLightMode />
            </span>
          )}
        </button>
      </nav>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <div className="close">
              <button
                className="icon-close"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <IoClose />
              </button>
            </div>
            <li>
              <a
                onClick={() => {
                  setShowModal(false);
                }}
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setShowModal(false);
                }}
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setShowModal(false);
                }}
                href="#contact"
              >
                contact
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  localStorage.setItem(
                    "currentMode",
                    theme === "dark" ? "light" : "dark"
                  );

                  setTheme(localStorage.getItem("currentMode"));
                }}
                className="mode flex"
              >
                {theme === "dark" ? (
                  <div style={{ display: "flex" }}>
                    <MdOutlineLightMode />
                  </div>
                ) : (
                  <div>
                    <MdOutlineDarkMode />
                  </div>
                )}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
