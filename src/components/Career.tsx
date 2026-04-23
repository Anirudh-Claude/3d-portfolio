import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Intern</h4>
                <h5>BharatVersity</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            Developed and deployed full-stack web applications using the MERN stack.
            Integrated AI-based chatbots and automation tools to enhance user experience and met the client requirements.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Fellowship</h4>
                <h5>3mon · Vellore</h5>
              </div>
              <h3>2017–24</h3>
            </div>
            <p>
              Conducted Deep Research on Artificial Intelligence and Machine Learning with focus on AI
              integration in Technology and published a research paper.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Teaching Assistant</h4>
                <h5>Skool of Code </h5>
              </div>
              <h3>Online</h3>
            </div>
            <p>
              At SkoolOfCode we help young minds take their first step towards programming with Python 
              from Scratch. My job was to teach Python programming to young minds from across the world 
              including the US, Nepal etc.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Member</h4>
                <h5>TEDxVITVellore</h5>
              </div>
              <h3>2013-16</h3>
            </div>
            <p>
              Actively contributed to the management team at TEDxVITVellore. 
              Assisted in organizing events and coordinating sessions that foster innovation 
              and thought leadership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
