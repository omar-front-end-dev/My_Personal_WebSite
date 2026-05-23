import Lottie from "lottie-react";
import "./Hero.css";
import devAnimation from "../../animation/dev.json";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
const texts = [
  "Hello, My Name is Omar Mohamed",
  "I am a front-end web developer",
];

const profileImage = "./om_4578.JPG";

export const Hero = () => {
  const lottieRef = useRef();
  const [wordIndex, setWordIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [charIndex, setCharIndex] = useState(1);
  const [displayText, setDisplayText] = useState(texts[0].slice(0, 1));
  const [showImageModal, setShowImageModal] = useState(false);

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

  useEffect(() => {
    if (!showImageModal) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowImageModal(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showImageModal]);

  return (
    <section className="hero flex" id="about">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <button
            type="button"
            className="avatar-button"
            onClick={() => {
              setShowImageModal(true);
            }}
            aria-label="Open profile image"
          >
            <motion.img
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1.1)" }}
              transition={{ damping: 6, type: "spring", stiffness: 100 }}
              src={profileImage}
              className="avatar"
              alt="My Image"
            />
          </button>
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
        <a
          target="blank"
          href="https://drive.google.com/file/d/105bRI1H7ln6YCWwrkuau7se-yzE3tF-H/view?usp=sharing"
          className="my-resume"
        >
          My Resume
        </a>
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

      <AnimatePresence>
        {showImageModal && (
          <motion.div
            className="profile-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={() => {
              setShowImageModal(false);
            }}
          >
            <motion.div
              className="profile-modal-content"
              role="dialog"
              aria-modal="true"
              aria-label="Profile image"
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <button
                type="button"
                className="profile-modal-close"
                onClick={() => {
                  setShowImageModal(false);
                }}
                aria-label="Close profile image"
              >
                <IoClose />
              </button>
              <img src={profileImage} alt="Omar Mohamed profile" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
