import React, { useEffect, useState } from 'react';
import './App.css';
import { Shield, Target, Brain, Stethoscope, Lock, LineChart, MessageCircle, Send } from 'lucide-react';

const FadeSection = ({ children, className = '', style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) => {
  return (
    <div className={`fade-in-section ${className}`} style={style}>
      {children}
    </div>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    const sections = ['about', 'features', 'offerings', 'approach', 'management', /*'team',*/ 'contact'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav>
        <a href="#" className="logo logo-text">
          zenark
        </a>
        <div className={`nav-links-container ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#features" className={activeSection === 'features' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Features</a></li>
            <li><a href="#offerings" className={activeSection === 'offerings' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Offerings</a></li>
            <li><a href="#approach" className={activeSection === 'approach' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Our Approach</a></li>
            <li><a href="#management" className={activeSection === 'management' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Management</a></li>
            <li><a href="https://zenark-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="login-btn" onClick={() => setMenuOpen(false)}>Login</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <FadeSection>
          <h1>Empowering Students to <br /> Thrive - Emotionally and Academically</h1>
          <p>Zenark is a comprehensive mental health platform for students, offering personalized, evidence-based tools and expert guidance to help them build emotional resilience and fly high.</p>
          <a href="#contact" className="btn btn-primary">REQUEST EARLY ACCESS</a>
        </FadeSection>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="alt-bg">
      <div className="container">
        <FadeSection>
          <div className="section-head">
            <h2>About Zenark</h2>
          </div>
          <div className="about-text">
            <p>Zenark is built to address the growing mental health needs of today's students. In an increasingly complex world, academic pressures and personal challenges can be overwhelming. Our platform provides a safe, confidential space for students to seek guidance, understand their emotions, and proactively manage their well-being.</p>
            <p>Our goal is simple: to cultivate emotionally healthier students who are fully equipped to excel both academically and personally.</p>
          </div>
        </FadeSection>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="section-head">
          <h2>Why Zenark for Your Institution?</h2>
          <p>We partner with schools and colleges to foster a supportive and thriving educational environment.</p>
        </div>
        <div className="grid-3">
          <FadeSection className="card">
            <Brain size={40} color="var(--primary-light)" />
            <h3>Improved Student Well-being</h3>
            <p>Proactive support leads to better focus, engagement, and emotional stability among the student body.</p>
          </FadeSection>
          <FadeSection className="card" style={{ animationDelay: '0.15s' }}>
            <LineChart size={40} color="var(--primary-light)" />
            <h3>Empowered Educators & Counselors</h3>
            <p>Positions staff with robust resources and anonymized, high-level insights to better address systemic campus needs.</p>
          </FadeSection>
          <FadeSection className="card" style={{ animationDelay: '0.3s' }}>
            <Target size={40} color="var(--primary-light)" />
            <h3>A Commitment to Holistic Education</h3>
            <p>Partnering with Zenark demonstrates a powerful commitment to treating student mental health as a priority.</p>
          </FadeSection>
        </div>
      </div>
    </section>
  );
};

const Offerings = () => {
  return (
    <section id="offerings" className="alt-bg">
      <div className="container">
        <div className="section-head">
          <h2>What Zenark Offers</h2>
          <p>Evidence-based mental health tools combined into a single, intuitive platform.</p>
        </div>
        <div className="grid-2 gap-lg">
          <FadeSection className="card flex-row">
            <div className="icon-wrap"><MessageCircle /></div>
            <div>
              <h3>Intelligent Real-time Check-ins</h3>
              <p>Brief, non-intrusive assessments adapt to student responses, monitoring emotional trends over time.</p>
            </div>
          </FadeSection>
          <FadeSection className="card flex-row" style={{ animationDelay: '0.1s' }}>
            <div className="icon-wrap"><Target /></div>
            <div>
              <h3>Personalized Pathways</h3>
              <p>Each student receives a unique roadmap of exercises and modules tailored to their actual needs.</p>
            </div>
          </FadeSection>
          <FadeSection className="card flex-row" style={{ animationDelay: '0.2s' }}>
            <div className="icon-wrap"><Lock /></div>
            <div>
              <h3>Guided Meditation & Breathing</h3>
              <p>A library of scientifically-backed practices aimed at immediate stress relief and grounding.</p>
            </div>
          </FadeSection>
          <FadeSection className="card flex-row" style={{ animationDelay: '0.3s' }}>
            <div className="icon-wrap"><Stethoscope /></div>
            <div>
              <h3>In-App Professional Consultation</h3>
              <p>Confidential, direct access to certified therapists for students who require deeper intervention.</p>
            </div>
          </FadeSection>
        </div>
      </div>
    </section>
  );
};

const Approach = () => {
  return (
    <section id="approach">
      <div className="container">
        <div className="section-head">
          <h2>Our Approach</h2>
        </div>
        <div className="grid-4">
          <FadeSection className="card small-card">
            <Shield size={32} color="var(--primary)" />
            <h4>Private and Confidential</h4>
            <p>Bank-level encryption ensures all student data and conversations remain strictly private.</p>
          </FadeSection>
          <FadeSection className="card small-card" style={{ animationDelay: '0.1s' }}>
            <Target size={32} color="var(--primary)" />
            <h4>Personalized, Not One-Size-Fits-All</h4>
            <p>Our intelligent system adapts continually to individual progress and feedback.</p>
          </FadeSection>
          <FadeSection className="card small-card" style={{ animationDelay: '0.2s' }}>
            <Stethoscope size={32} color="var(--primary)" />
            <h4>Built on an Expert Foundation</h4>
            <p>Developed closely with clinical psychologists and university mental health professionals.</p>
          </FadeSection>
          <FadeSection className="card small-card" style={{ animationDelay: '0.3s' }}>
            <Brain size={32} color="var(--primary)" />
            <h4>Ready for the Real World</h4>
            <p>Designed specifically for the unique workflows and challenges of modern student life.</p>
          </FadeSection>
        </div>
      </div>
    </section>
  );
};
/*
const Team = () => {
  const members = [
    { name: 'Wajahat Sayeed', role: 'Founder & CEO', linkedin: 'https://www.linkedin.com/in/wajahatsayeed/' },
    { name: 'Alina Khan', role: 'Chief Operating Officer', linkedin: 'https://www.linkedin.com/in/alina-khan-a80440225/' },
    { name: 'Shephin Philip', role: 'Lead AI Engineer', linkedin: 'https://www.linkedin.com/in/shephin-philip-54b371205/' },
    { name: 'Amith Laksmisha', role: 'Chief Technology Officer', linkedin: '#' },
    { name: 'Mehar Chaithanya', role: 'Full Stack Engineer', linkedin: 'https://www.linkedin.com/in/mehar-chaithanya-pemmasani/' },
    { name: 'Vaibhav Reddy', role: 'Full Stack Engineer', linkedin: 'https://www.linkedin.com/in/vaibhav-reddy-1136a2287/' }
  ];

  return (
    <section id="team" className="alt-bg">
      <div className="container text-center">
        <FadeSection>
          <h2 className="section-title">Our Team</h2>
        </FadeSection>
        <div className="team-grid">
          {members.map((member, i) => (
            <FadeSection key={member.name} className="team-member" style={{ animationDelay: `${i * 0.1}s` }}>
              <h4>{member.name}</h4>
              <span>{member.role}</span>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</a>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
};
*/
const Management = () => {
  return (
    <section id="management">
      <div className="container">
        <FadeSection>
          <h2 className="section-title">Management</h2>
        </FadeSection>

        <div className="management-container">
          {/* Profile 1 */}
          <FadeSection className="management-profile">
            <div className="management-img-wrapper">
              <img src="/pic1.jpeg" alt="Wajahat Sayeed Khuddusi" className="management-img" />
            </div>
            <div className="management-info">
              <h3>Wajahat Sayeed Khuddusi, MBBS (BMCRI) , Aspire alumni</h3>
              <h4>CEO and founder</h4>
              <p>As I balance my medical education at BMCRI with my role as an entrepreneur, my focus remains steadfast on uplifting the lives of Indians through purposeful technology. While my roots are in student advocacy, my vision encompasses the well-being of our entire nation.</p>
              <p>At Zenark, we don't just solve problems; we strive to eliminate the social barriers that hold us back. I have always maintained that the value of an endeavor is measured by its human impact, not its financial return. We must look past the immediate challenges of today to see what we can become. For the betterment of humanity, the sight of humankind should lie beyond the horizon.</p>
            </div>
          </FadeSection>

          {/* Profile 2 */}
          <FadeSection className="management-profile">
            <div className="management-img-wrapper">
              <img src="/pic2.PNG" alt="Dr. Rohit" className="management-img" />
            </div>
            <div className="management-info">
              <h3>Dr. Rohit Walwaikar</h3>
              <h4>MBBS , MD Psychiatry (AIR 3) , DNB Psychiatry, Chief Advisory Board Member</h4>
              <p>My career in psychiatry has been defined by a commitment to clinical excellence, academic rigor, and a vision for an equitable, interdisciplinary future for mental healthcare. Having earned my MD with a distinction of 3rd rank and successfully clearing the DNB National level examination, I have always strived for excellence. I strictly believe that mental health does not exist in a vacuum.</p>
              <p>Currently, I serve as a Consultant Psychiatrist at the BITS Goa campus and as a Psychiatrist for a Swiss digital health firm. These dual roles allow me to operate at the cutting edge of two vital frontiers: the immediate, high-stakes environment of student mental health and the scalable, tech-driven future of global digital interventions.</p>

              <h5 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginTop: '1rem', marginBottom: '0.5rem' }}>Bridging Science and Systemic Care</h5>
              <p>My primary expertise in Translational Psychiatry, specifically concerning Obsessive-Compulsive Disorders and Addictive Behaviours, provides the bedrock for my current focus on Child and Adolescent Preventive Mental Health. I believe that the future of the field lies in early intervention—identifying and mitigating risk factors before they crystallize into chronic conditions.</p>
              <p>By integrating my background in Consultation-Liaison Psychiatry with a burgeoning focus on Integrative and Functional Psychiatry, I advocate for a "whole-person" approach. This means looking beyond symptom management to address the biological, nutritional, and environmental precursors to mental illness.</p>

              <h5 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginTop: '1rem', marginBottom: '0.5rem' }}>Global Collaboration and Mentorship</h5>
              <p>My commitment to the field extends into global policy and education:</p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', color: 'var(--text)' }}>
                <li><strong>Policy Development:</strong> Contributing to the International Association for Suicide Prevention and the Scottish Government’s National Suicide Prevention Leadership Group (Delphi study) has honed my ability to influence systemic change.</li>
                <li><strong>Professional Networks:</strong> As a member of the World Psychiatric Association (Early Career Section), the WHO Good Clinical Practice Network, and the International Marcé Society for Perinatal Mental Health, I maintain a pulse on global standards and emerging research.</li>
                <li><strong>Mentorship:</strong> Having served as a tutor for MBBS, MD, and M.Phil candidates, I am passionate about fostering the next generation of mental health professionals through an interdisciplinary lens.</li>
              </ul>

              <h5 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginTop: '1rem', marginBottom: '0.5rem' }}>Vision for the Future</h5>
              <p>My goal is to dismantle the silos within healthcare. Whether through my work in digital health or my clinical practice on campus, I strive to make specialist services equitably accessible. I am dedicated to fostering multisectoral collaboration—combining the precision of functional psychiatry with the reach of digital innovation—to ensure that preventive mental health care is not a luxury, but a standard for the youth of today.</p>
            </div>
          </FadeSection>

          {/* Profile 3 */}
          <FadeSection className="management-profile">
            <div className="management-img-wrapper">
              <img src="/pic3.jpeg" alt="Dr Myle Muralidhar" className="management-img" />
            </div>
            <div className="management-info">
              <h3>Dr Myle Muralidhar</h3>
              <h4>MBBS (AIIMS) & MD Psychiatry (NIMHANS), Consultant Psychiatrist and De-addiction specialist, Chief Advisory Member</h4>
            </div>
          </FadeSection>

          {/* Profile 4 */}
          <FadeSection className="management-profile">
            <div className="management-img-wrapper">
              <img src="/pic4.jpeg" alt="Venkata Srinivas Manthripragada" className="management-img" />
            </div>
            <div className="management-info">
              <h3>Venkata Srinivas Manthripragada</h3>
              <h4>CMA, MSc Psychology, Chief Advisory Member</h4>
            </div>
          </FadeSection>
        </div>
      </div>
    </section>
  );
};

const Timeline = () => {
  return (
    <section id="timeline">
      <div className="container text-center">
        <FadeSection className="timeline-content">
          <h2 className="section-title">Launch & Early Partnership</h2>
          <div className="launch-date">Official Launch: September 2025</div>
          <p style={{ fontSize: '18px', color: 'var(--text)', maxWidth: '800px', margin: '0 auto' }}>
            Zenark is currently partnering with a select group of institutions for our
            early access program. Early school partners receive significant benefits,
            including:
          </p>
          <ul className="benefits-list">
            <li>Personalized onboarding, training, and support for your staff.</li>
            <li>Priority access to new features and platform updates.</li>
            <li>Public recognition as a founding institutional partner.</li>
            <li>Exclusive access to pilot program insights and data reports.</li>
          </ul>
        </FadeSection>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="alt-bg">
      <div className="container contact-container">
        <FadeSection className="contact-info">
          <h2>Ready to partner?</h2>
          <p>Get in touch to learn how Zenark can elevate mental wellness at your institution.</p>
          <div className="contact-details">
            <Send size={20} style={{ marginRight: '10px', color: 'var(--primary)' }} />
            <a href="mailto:management@zenark.in">management@zenark.in</a>
          </div>
        </FadeSection>
        <FadeSection className="contact-form-wrap">
          <form className="card contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>What is the name of your school / college?</label>
              <input type="text" placeholder="Institution Name" />
            </div>
            <div className="form-group">
              <label>City & State</label>
              <input type="text" placeholder="Location" />
            </div>
            <div className="form-group">
              <label>Contact Phone</label>
              <input type="tel" placeholder="Phone Number" />
            </div>
            <button className="btn btn-primary" style={{ width: '100%' }}>Submit Details</button>
          </form>
        </FadeSection>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p className="copyright">&copy; 2025 Zenark. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.animationPlayState = 'running';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-section').forEach(el => {
      observer.observe(el);
      (el as HTMLElement).style.animationPlayState = 'paused';
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <Hero />
        <About />
        <Features />
        <Offerings />
        <Approach />
        <Management />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
