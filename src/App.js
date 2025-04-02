
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>M.V.Deekshitha</h1>
        <div className="contact-info">
          Hyderabad, Telangana • Phone: (555) 555-5555 • Email: deekshithamv9@gmail.com<br />
          LinkedIn: linkedin.com/in/deekshitha-mv • GitHub: github.com/deekshithamv
        </div>
      </div>
      
      <section>
        <h2>PROFESSIONAL SUMMARY</h2>
        <p>
          Experienced [Your Profession] with [X] years of experience specializing in [Key Skill 1], [Key Skill 2], and [Key Skill 3]. Proven track record of [Notable Achievement] resulting in [Measurable Outcome].
        </p>
      </section>
      
      <section>
        <h2>WORK EXPERIENCE</h2>
        
        <div className="experience-item">
          <div>
            <span className="job-title">Job Title</span> - 
            <span className="company">Company Name</span>
            <span className="date"> | Month Year - Present</span>
          </div>
          <ul>
            <li>Achieved [specific accomplishment] resulting in [specific, measurable result]</li>
            <li>Led [specific project] that [specific outcome]</li>
            <li>Implemented [specific process/tool] that improved [specific metric] by [percentage/amount]</li>
            <li>Collaborated with cross-functional teams to deliver [specific result]</li>
          </ul>
        </div>
        
        <div className="experience-item">
          <div>
            <span className="job-title">Previous Job Title</span> - 
            <span className="company">Previous Company</span>
            <span className="date"> | Month Year - Month Year</span>
          </div>
          <ul>
            <li>Developed [specific solution] to address [specific problem]</li>
            <li>Managed team of [number] people to deliver [specific project/product]</li>
            <li>Increased [specific metric] by [percentage] through [specific action]</li>
            <li>Recognized for [specific achievement or award]</li>
          </ul>
        </div>
      </section>
      
      <section>
        <h2>EDUCATION</h2>
        
        <div className="education-item">
          <div className="degree">Bachelor of Science in [Your Major]</div>
          <div className="school">University Name</div>
          <div className="date">Graduation Month Year</div>
          <div>GPA: 3.X/4.0 (if noteworthy)</div>
        </div>
        
        <div className="education-item">
          <div className="degree">Relevant Certification</div>
          <div className="school">Issuing Organization</div>
          <div className="date">Month Year</div>
        </div>
      </section>
      
      <section>
        <h2>SKILLS</h2>
        <ul className="skills-list">
          <li>Technical Skill 1</li>
          <li>Technical Skill 2</li>
          <li>Technical Skill 3</li>
          <li>Technical Skill 4</li>
          <li>Soft Skill 1</li>
          <li>Soft Skill 2</li>
          <li>Industry Knowledge 1</li>
          <li>Industry Knowledge 2</li>
          <li>Tool/Software 1</li>
          <li>Tool/Software 2</li>
        </ul>
      </section>
      
      <section>
        <h2>PROJECTS</h2>
        <div className="experience-item">
          <div>
            <span className="job-title">Project Name</span>
            <span className="date"> | Month Year - Month Year</span>
          </div>
          <ul>
            <li>Brief description of the project and your role</li>
            <li>Key technologies or methodologies used</li>
            <li>Outcome or impact of the project</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;