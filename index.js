import React from 'react';

function App() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="logo.png" alt="MyEd Logo" />
          </div>
          <nav className="nav">
            <ul>
              <li><a href="/">Features</a></li>
              <li><a href="/">Pricing</a></li>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Book Demo</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>A bridge to holistic learning</h1>
            <h2>Al-powered SaaS</h2>
            <p>School admin tasks Engaging teachers and parents</p>
            <p>Al-powered SaaS to automate school admin tasks, enabling teachers to focus on education and parents to stay engaged</p>
            <button className="btn">For teachers</button>
            <button className="btn">For parents</button>
          </div>
          <div className="hero-image">
            {/* Placeholder for hero image */}
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Features</h2>
          <div className="feature-grid">
            <div className="feature">
              <img src="attendance.png" alt="Attendance feature" />
              <h3>Attendance with Al-face recognition in 3s.</h3>
              <p>Attendance</p>
            </div>
            <div className="feature">
              <img src="report.png" alt="Report feature" />
              <h3>Student report management</h3>
              <p>Reports</p>
            </div>
            <div className="feature">
              <img src="calendar.png" alt="Calendar feature" />
              <h3>Track tasks and notices</h3>
              <p>Calender</p>
            </div>
            <div className="feature">
              <img src="grades.png" alt="Grades feature" />
 <h3>Communicate with parents hassle-free</h3>
              <p>Communication</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2023 MyEd Pvt. Ltd. All rights reserved.</p>
          <div className="social-links">
            <a href="https://twitter.com/myed">Twitter</a>
            <a href="https://instagram.com/myed">Instagram</a>
            <a href="https://linkedin.com/company/myed">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 