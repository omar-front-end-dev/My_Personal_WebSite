import Lottie from "lottie-react";
import "./Hero.css";
import devAnimation from "../../animation/dev.json";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const texts = [
  "Hello, My Name is Omar Mohamed",
  "I am a front-end web developer",
];

export const Hero = () => {
  const lottieRef = useRef();
  const [wordIndex, setWordIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [charIndex, setCharIndex] = useState(1);
  const [displayText, setDisplayText] = useState(texts[0].slice(0, 1));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCharIndex((prevCharIndex) => {
        const currentWord = texts[wordIndex];
        const newCharIndex =
          prevCharIndex >= currentWord.length ? 0 : prevCharIndex + 1;

        if (newCharIndex === 0) {
          setWordIndex((prevWordIndex) => (prevWordIndex + 1) % texts.length);
        }

        setDisplayText(currentWord.slice(0, newCharIndex));
        return newCharIndex;
      });
    }, 220);

    return () => clearInterval(intervalId);
  }, [wordIndex]);

  return (
    <section className="hero flex" id="about">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me-modified.jpg"
            className="avatar"
            alt=""
          />
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          {displayText}
        </motion.h1>

        <p className="sub-title">
          {`I'm Omar Mohamed, a dedicated front-end developer with a passion for
          creating intuitive user interfaces. My expertise in modern web
          technologies ensures smooth and responsive designs.`}
        </p>

        <ul className="all-icons flex">
          <li>
            <a
              target="planck"
              href="https://x.com/OmaRMoh1658290?t=fkzRWeEikF-xsJyHRLgcsQ&s=09"
            >
              <FaXTwitter className="icon" />
            </a>
          </li>
          <li>
            <a target="planck" href="https://wa.me/qr/76MHCAVFHGDYO1">
              <FaWhatsapp className="icon" />
            </a>
          </li>
          <li>
            <a target="planck" href="https://github.com/omar-front-end-dev">
              <FaGithub className="icon" />
            </a>
          </li>
          <li>
            <a
              target="planck"
              href="https://www.linkedin.com/in/omar-mohamed-57a285274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
              <FaLinkedin className="icon" />
            </a>
          </li>
        </ul>
        <a target="blank" href="https://drive.google.com/file/d/11srQqaUMj69FPc8-dNcgdETYYXhHc58Z/view?usp=sharing" className="my-resume">My Resume</a>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};
