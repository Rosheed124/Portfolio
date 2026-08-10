import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaFacebook,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { config } from "../config";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      {/* Social icon strip — links pulled from config so only config.ts needs updating */}
      <div className="social-icons" data-cursor="icons" id="social">
        {/* GitHub icon */}
        <span>
          <a href={config.contact.github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </span>
        {/* LinkedIn icon */}
        <span>
          <a href={config.contact.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </span>
        {/* YouTube icon */}
        <span>
          <a href={config.contact.youtube} target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </span>
        {/* TikTok icon */}
        <span>
          <a href={config.contact.tiktok} target="_blank" rel="noreferrer">
            <FaTiktok />
          </a>
        </span>
        {/* Facebook icon */}
        <span>
          <a href={config.contact.facebook} target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
        </span>
      </div>
      <a className="resume-button" href="/Fagbenro Rosheed Master CV.pdf" download>
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
