import { useState } from "react";
import "./Main.css";
import { myProjects } from "./MyProjects";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { GoLink } from "react-icons/go";
import toast, { Toaster } from "react-hot-toast";


export const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };

  const copyLink = (link) => {
    navigator.clipboard.writeText(link);
    toast.success("The link has been copied");
  };

  return (
    <main className="flex">
      <section id="projects" className="flex  left-section">
        <button
          onClick={() => {
            setCurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>

        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
      </section>

      <section className=" flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="card"
              >
                <img width={"100%"} src={item.imgPath} alt="" />

                <div className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">{item.productDescription}</p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <div onClick={() => copyLink(item.productLink)}>
                        <GoLink />
                      </div>
                      <div>
                        <a target="plank" href={item.productLink}>
                          <FaGithub />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
};
