import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  X,
} from 'lucide-react';

const gradientStyle = {
  backgroundImage:
    'linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  filter: 'url(#c3-noise)',
};

const navLinks = ['About', 'Education', 'Experience', 'Projects', 'Credentials', 'Skills', 'Contact'];

const experience = [
  {
    period: '2023 — 2024',
    role: 'Software Engineer',
    company: 'One Medical',
    location: 'San Francisco, CA',
    copy: 'Collaborated with a cross-functional team of 8 to engineer and deploy a high-visibility integration between One Medical and Amazon.com, launching 14-day trial memberships using Angular, TypeScript, Ruby on Rails, and AWS, which increased trial conversions by 15 percent.',
    details: [
      'Led a complete overhaul of the enterprise registration flow, partnering with design and product teams to implement strategic UX improvements that boosted conversion rates by 50 percent.',
      'Engineered and executed custom Rake scripts in Ruby to backfill membership event data, reconciling discrepancies across 10,000+ patient records and improving the accuracy of end-of-year reports.',
      'Supported enterprise client onboarding by configuring secure SFTP/SSH pipelines for whitelisting users and automating access validation.',
    ],
    tags: ['Angular', 'TypeScript', 'Ruby on Rails', 'AWS', 'Rake', 'SFTP / SSH'],
  },
  {
    period: '2021 — 2023',
    role: 'Software & Data Engineer',
    company: 'Amazon',
    location: 'Seattle, WA',
    copy: 'Designed and maintained large-scale ETL pipelines to ingest, clean, and transform fulfillment-center data, ensuring accurate integration with Amazon QuickSight dashboards.',
    details: [
      'Implemented a near real-time Blended Container alert system using SQL, AWS Glue, and PySpark, saving approximately $15 per package and identifying over 6,000 packages in 2021.',
      'Partnered with design, product, and marketing teams on feature requests, bug fixes, and accessibility initiatives, improving the customer experience for millions of Goodreads users.',
      'Resolved a long-standing Google Ads bug on Goodreads, restoring ad delivery and reactivating revenue after eight months of inactivity.',
      'Migrated legacy Ruby on Rails APIs to Next.js and GraphQL, improving system scalability, performance, and maintainability.',
    ],
    tags: ['ETL', 'QuickSight', 'SQL', 'AWS Glue', 'PySpark', 'Ruby on Rails', 'Next.js', 'GraphQL'],
  },
  {
    period: '2020',
    role: 'Software Engineer Intern',
    company: 'Amazon',
    location: 'Seattle, WA',
    copy: 'Developed a React-based authentication redirect component in collaboration with the Federated Identity Team, handling OAuth 2.0 flows and dynamic identity provider routing.',
    details: [
      'Built and tested backend serverless microservices using AWS Lambda, API Gateway, Spring, and DynamoDB.',
    ],
    tags: ['React', 'OAuth 2.0', 'AWS Lambda', 'API Gateway', 'Spring', 'DynamoDB'],
  },
];

const skills = [
  { icon: Code2, title: 'Product Engineering', items: ['TypeScript', 'React & Next.js', 'APIs', 'Full-stack systems'] },
  { icon: Database, title: 'Cloud & Data', items: ['AWS', 'Lambda', 'DynamoDB', 'S3', 'Data pipelines'] },
  { icon: Layers3, title: 'Delivery', items: ['Serverless architecture', 'Stripe', 'Cognito', 'Analytics', 'AI-assisted workflows'] },
];

function Mark() {
  return (
    <a href="#top" className="mark" aria-label="Rohan Samavedam — home">
      RS
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="navbar">
      <Mark />
      <div className={`nav-links ${open ? 'is-open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>
        ))}
      </div>
      <div className="nav-socials" aria-label="Social links">
        <a href="https://www.linkedin.com/in/rohansamavedam/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin size={19} />
        </a>
        <a href="https://github.com/rohansamavedam" target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={19} />
        </a>
      </div>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </motion.nav>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span />{children}</div>;
}

function SectionHeading({ number, eyebrow, title, copy, className = '' }: { number: string; eyebrow: string; title: string; copy?: string; className?: string }) {
  return (
    <div className={`section-heading ${className}`}>
      <div><span className="section-number">{number}</span><Eyebrow>{eyebrow}</Eyebrow></div>
      <div><h2>{title}</h2>{copy && <p>{copy}</p>}</div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="hero section-shell">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="hero-kicker">
        <span className="status-dot" /> Brooklyn, New York · Open to work
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3, duration: .8 }}>
        I build software<br />for decisions that<br />
        <span className="animate-shiny" style={gradientStyle}>matter in the real world.</span>
      </motion.h1>
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 }} className="hero-bottom">
        <p>I’m <strong>Rohan Samavedam</strong>, a software engineer and business analytics graduate student. I build production systems that turn complex data and operational problems into clear, dependable products.</p>
        <div className="hero-actions">
          <a href="#experience" className="pill-button">Explore my work <ArrowDown size={15} /></a>
        </div>
      </motion.div>
      <div className="hero-metrics">
        <div><strong>5+</strong><span>Years across software, data & education</span></div>
        <div><strong>3</strong><span>Domains: commerce, healthcare & operations</span></div>
        <div><strong>Now</strong><span>Learning AI systems, job hunting & analyzing interesting products</span></div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-shell content-section">
      <SectionHeading number="01" eyebrow="About" title="Engineer by practice. Problem-solver by nature." />
      <div className="about-grid">
        <div className="portrait-card glass-card"><img src="/images/rohan-profile.png" alt="Rohan Samavedam" /></div>
        <div className="about-copy">
          <h3>Professional motivation</h3>
          <p>I’m drawn to problems where software affects how people and organizations operate in the real world. My experience spans fulfillment operations, consumer products, and healthcare—environments where reliable systems, good data, and sound decisions matter.</p>
          <h3>Personal operating philosophy</h3>
          <p>Outside engineering, I’m a student of meditation, yoga, psychology, and philosophy. Those practices shape how I work: staying composed under pressure, communicating with honesty and tact, and thinking clearly when the problem is ambiguous.</p>
        </div>
      </div>
    </section>
  );
}

function Education() {
  const [showTeachingDetails, setShowTeachingDetails] = useState(false);

  return (
    <section id="education" className="section-shell content-section">
      <SectionHeading number="02" eyebrow="Education" title="From engineering systems to shaping outcomes." />
      <div className="education-list">
        <article className="education-entry">
          <div className="education-header">
            <GraduationCap size={24} />
            <div><span>Baruch College</span><h3>Master of Science, Business Analytics</h3></div>
            <time>Jan 2025 - Dec 2026</time>
          </div>
          <div className="education-block">
            <h4>Coursework</h4>
            <ul className="coursework-list">
              {['Programming for Business Analytics', 'Managerial Statistics', 'Business Communication', 'Web Analytics and Intelligence', 'Data Mining for Business Analytics', 'Software Tools for Data Analysis', 'Introduction to Quantitative Modeling', 'Leading and Managing People', 'Marketing Analytics', 'Managing Business Operations'].map(course => <li key={course}>{course}</li>)}
            </ul>
          </div>
          <div className="education-block">
            <h4>Activities</h4>
            <div className="activity-heading"><strong>Graduate Teaching Assistant</strong></div>
            <p>Graduate Teaching Assistant for the Paul H. Chook Department of Information Systems and Statistics and the Department of Communication Studies.</p>
            {showTeachingDetails && <div className="activity-details">
              <p>Evaluated and graded Python programming assignments, providing feedback on code quality, logic, and problem-solving approach.</p>
              <p>Supported in-class exams by proctoring sessions, coordinating exam logistics, and ensuring academic integrity.</p>
              <p>Conducted 50+ mock interviews with students to assess career readiness, communication skills, and job interview preparedness.</p>
            </div>}
            <button className="activity-toggle" type="button" onClick={() => setShowTeachingDetails(!showTeachingDetails)} aria-expanded={showTeachingDetails}>
              {showTeachingDetails ? 'Show less' : 'Show more'}
            </button>
          </div>
        </article>

        <article className="education-entry">
          <div className="education-header">
            <GraduationCap size={24} />
            <div><span>San José State University</span><h3>Bachelor of Science, Computer Software Engineering</h3></div>
            <time>2017—2021</time>
          </div>
          <div className="education-block">
            <h4>Coursework</h4>
            <ul className="coursework-list">
              {['Data Structures & Algorithms', 'Computer Architecture', 'Discrete Mathematics & Probability', 'Linear Algebra', 'Calculus I–III', 'Physics I–II', 'Object-Oriented Design', 'Operating Systems', 'Principles of Database Management Systems', 'Computer Networks', 'Machine Learning', 'Information Security', 'Server-Side Programming'].map(course => <li key={course}>{course}</li>)}
            </ul>
          </div>
          <div className="education-meta-grid">
            <div className="education-block"><h4>Honor</h4><p>Dean’s Scholar</p></div>
            <div className="education-block"><h4>Activities & societies</h4><p>The Software and Computer Engineering Society</p></div>
          </div>
        </article>
      </div>
    </section>
  );
}

function Experience() {
  const [expandedRoles, setExpandedRoles] = useState<Set<string>>(new Set());
  const highlightMetrics = (text: string) => text.split(/(15 percent|50 percent|10,000\+ patient records|\$15 per package|over 6,000 packages|millions of Goodreads users|eight months of inactivity)/gi).map((part, index) =>
    /^(15 percent|50 percent|10,000\+ patient records|\$15 per package|over 6,000 packages|millions of Goodreads users|eight months of inactivity)$/i.test(part) ? <strong key={index} className="outcome-metric">{part}</strong> : part
  );
  const toggleRole = (key: string) => setExpandedRoles(current => {
    const next = new Set(current);
    next.has(key) ? next.delete(key) : next.add(key);
    return next;
  });

  return (
    <section id="experience" className="section-shell content-section">
      <SectionHeading number="03" eyebrow="Experience" title="Software built for complex operations." />
      <div className="timeline">
        {experience.map((item, i) => {
          const roleKey = item.role + item.company;
          const isExpanded = expandedRoles.has(roleKey);
          return <motion.article key={roleKey} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }} className="experience-row">
            <span className="period">{item.period}</span>
            <div className="role"><h3>{item.role}</h3><p>{item.company} · {item.location}</p></div>
            <div className="experience-copy">
              <p>{highlightMetrics(item.copy)}</p>
              {item.details && <>
                {isExpanded && <div className="experience-details">{item.details.map(point => <p key={point}>{highlightMetrics(point)}</p>)}</div>}
                <button className="activity-toggle" type="button" onClick={() => toggleRole(roleKey)} aria-expanded={isExpanded}>
                  {isExpanded ? 'Show less' : 'Show more'}
                </button>
              </>}
              <div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </div>
          </motion.article>;
        })}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-shell content-section">
      <SectionHeading number="04" eyebrow="Selected work" title="From idea to shipped product." copy="A featured independent build, plus a glimpse at the kinds of systems I’ve worked on professionally." />
      <div className="projects-grid">
        <article className="project-feature glass-card">
          <div className="project-top"><span>Featured project · 2025</span><ExternalLink size={18} /></div>
          <div className="project-visual"><div className="browser-bar"><i/><i/><i/></div><div className="visual-copy"><Sparkles size={22}/><strong>Shivakailash.com</strong><span>Content, commerce & community—one serverless platform.</span></div></div>
          <div className="project-details"><div><h3>Creator platform, built end to end.</h3><p>Led full-cycle development of a serverless web application with digital product sales, private video delivery, payments, scheduling, 2FA dashboards, and analytics-informed flows.</p></div><div className="tags"><span>Next.js</span><span>TypeScript</span><span>AWS</span><span>Stripe</span><span>GA4</span></div></div>
        </article>
        <article className="project-mini glass-card"><BriefcaseBusiness/><span>Professional systems</span><h3>Production software at scale</h3><p>Engineering work across Amazon and One Medical, shaped by operational complexity, reliability, and customer trust.</p><div className="mini-footer">Enterprise experience <ArrowUpRight size={15}/></div></article>
        <article className="project-mini glass-card"><Database/><span>Data & analytics</span><h3>Decisions backed by signal</h3><p>Data engineering foundations paired with graduate work in analytics, modeling, data mining, and web intelligence.</p><div className="mini-footer">Business + technology <ArrowUpRight size={15}/></div></article>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-shell content-section">
      <SectionHeading number="06" eyebrow="Skills" title="A toolkit for building the whole thing." />
      <div className="skills-grid">{skills.map(({ icon: Icon, title, items }) => <article key={title} className="skill-card glass-card"><Icon/><h3>{title}</h3><ul>{items.map(item => <li key={item}><Check size={14}/>{item}</li>)}</ul></article>)}</div>
    </section>
  );
}

function Credentials() {
  return (
    <section id="credentials" className="section-shell content-section">
      <SectionHeading number="05" eyebrow="Credentials" title="Always learning, always sharpening the craft." />
      <div className="credential-card glass-card">
        <Award size={34}/><div><span>Certifications & continuing education</span><h3>Cloud, analytics, and modern software delivery</h3><p>Formal certification details are being curated for this portfolio. Current graduate coursework includes data mining, quantitative modeling, web analytics, statistics, and software tools for data analysis.</p></div>
        <div className="credential-badge">In progress</div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-shell contact-section">
      <Eyebrow>Contact</Eyebrow>
      <h2>Have a hard problem<br/>worth solving?</h2>
      <p>Whether it’s a product, a system, or an idea that needs shape—let’s start a conversation.</p>
      <div className="contact-actions"><a className="pill-button" href="https://www.linkedin.com/in/rohansamavedam" target="_blank" rel="noreferrer"><Linkedin size={17}/> Connect on LinkedIn</a><a className="text-link" href="https://www.linkedin.com/in/rohansamavedam" target="_blank" rel="noreferrer"><Mail size={15}/> Send a message</a></div>
      <footer><Mark/><span>© {new Date().getFullYear()} Rohan Samavedam</span><a href="#top">Back to top <ArrowUpRight size={13}/></a></footer>
    </section>
  );
}

export default function App() {
  return (
    <div className="site">
      <div className="video-bg"><video autoPlay loop muted playsInline src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4" /></div>
      <div className="bg-overlay"/><div className="rail rail-left"/>
      <svg width="0" height="0" aria-hidden="true"><filter id="c3-noise"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0"/><feComposite in2="SourceGraphic" operator="in" result="noise"/><feBlend in="SourceGraphic" in2="noise" mode="multiply"/></filter></svg>
      <div className="page-content"><Navbar/><Hero/><About/><Education/><Experience/><Projects/><Credentials/><Skills/><Contact/></div>
    </div>
  );
}
