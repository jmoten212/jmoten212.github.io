import React from "react";

function Footer() {
  return (
    <section className="footer">
      <p>Website designed and built by James Moten</p>
      <div className="profile-links">
        <a href="https://github.com/jmoten212" target="_blank">
          <img src="/images/github_icon_white.png" alt="GitHub icon" />
        </a>
        <a href="https://www.linkedin.com/in/james-moten/" target="_blank">
          <img src="/images/linkedin_logo_white.png" alt="LinkedIn logo" />
        </a>
      </div>
    </section>
  )
    
}

export default Footer;