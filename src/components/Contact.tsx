import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/anirudh-koppuravuri-762643338/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — akashrmalhotra
              </a>
            </p>
            <h4>Education</h4>
            <p>
              CSE (B.Tech), Vellore Institute of Technology, Vellore — 2024–2028
            </p>
            <p>
              Intermediate, Narayana Educational Institutions —
              2022–2024
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Anirudh01-os"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/anirudh-koppuravuri-762643338/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="anirudhkoppuravuri1@gmail.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              E-Mail <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/_.urstrulyanirudh._/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Anirudh Koppuravuri</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
