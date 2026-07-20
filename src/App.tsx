import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  ChevronDown,
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

const backgroundVideo = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4';

function BackgroundVideo() {
  const [canPlayVideo, setCanPlayVideo] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const connection = navigator as Navigator & { connection?: { saveData?: boolean } };
    const smallScreen = window.matchMedia('(max-width: 620px)');
    if (reducedMotion.matches || smallScreen.matches || connection.connection?.saveData) return;

    const startVideo = () => setCanPlayVideo(true);
    const idleCallback = window.requestIdleCallback?.(startVideo, { timeout: 1500 });
    const timeout = idleCallback === undefined ? window.setTimeout(startVideo, 800) : undefined;

    return () => {
      if (idleCallback !== undefined) window.cancelIdleCallback?.(idleCallback);
      if (timeout !== undefined) window.clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="video-bg" aria-hidden="true">
      {canPlayVideo && <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        src={backgroundVideo}
      />}
    </div>
  );
}

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
  {
    icon: Code2,
    title: 'Product Development',
    groups: [
      { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Ruby', 'Java', 'SQL'] },
      { label: 'Frontend', items: ['React', 'Next.js', 'Angular', 'HTML', 'CSS', 'Tailwind CSS'] },
      { label: 'Backend & APIs', items: ['Ruby on Rails', 'Spring', 'Node.js', 'REST APIs', 'GraphQL'] },
      { label: 'Foundations', items: ['Data structures', 'Algorithms', 'OOP', 'System design', 'OAuth 2.0'] },
    ],
  },
  {
    icon: Sparkles,
    title: 'Applied AI & Agentic Systems',
    groups: [
      { label: 'Generative AI', items: ['LLMs', 'Prompt engineering & management', 'Model fine-tuning', 'Structured outputs'] },
      { label: 'Agentic Systems', items: ['AI agents', 'Tool calling', 'Multi-agent orchestration'] },
      { label: 'Retrieval & Reliability', items: ['RAG', 'Embeddings', 'Vector search', 'LLM evaluations', 'Guardrails', 'AI observability'] },
      { label: 'Platforms & Tools', items: ['Amazon Bedrock', 'Amazon Bedrock AgentCore', 'ChatGPT', 'Codex', 'Claude Code'] },
    ],
  },
  {
    icon: Database,
    title: 'Cloud & Data',
    groups: [
      { label: 'Compute, Applications & APIs', items: ['Lambda', 'EC2', 'API Gateway', 'AppSync', 'Amplify', 'Cognito'] },
      { label: 'Infrastructure & Integration', items: ['SQS', 'SES', 'CloudFront', 'Route 53', 'VPC', 'IAM', 'CloudWatch'] },
      { label: 'Data Engineering', items: ['S3', 'AWS Glue', 'ETL pipelines', 'PySpark', 'Data transformation', 'Data quality'] },
      { label: 'Databases & Warehousing', items: ['DynamoDB', 'Snowflake', 'MySQL', 'Relational databases', 'NoSQL', 'ER and database modeling'] },
    ],
  },
  {
    icon: Layers3,
    title: 'Architecture & Delivery',
    groups: [
      { label: 'System Architecture', items: ['Serverless architecture', 'Scalable systems', 'Distributed systems', 'Event-driven architecture', 'API design'] },
      { label: 'Infrastructure & Deployment', items: ['Terraform', 'Docker', 'Kubernetes', 'CI/CD', 'Infrastructure as code', 'Git'] },
      { label: 'Quality & Reliability', items: ['Automated testing', 'Debugging', 'Observability', 'Logging and monitoring', 'Performance optimization'] },
      { label: 'Integrations & Operations', items: ['Stripe', 'SFTP / SSH', 'Third-party integrations', 'Production support'] },
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: 'Product & Business Analysis',
    groups: [
      { label: 'Product Analytics', items: ['GA4', 'Mixpanel', 'KPI development', 'A/B testing', 'Funnel and conversion analysis'] },
      { label: 'Business Intelligence', items: ['Tableau', 'Power BI', 'QuickSight', 'Excel', 'Dashboard development', 'Data visualization'] },
      { label: 'Business & Decision Analysis', items: ['Requirements analysis', 'Process improvement', 'Quantitative modeling', 'Statistical analysis', 'Data-driven decision-making'] },
      { label: 'Product Collaboration', items: ['Figma', 'Agile delivery', 'Stakeholder communication', 'Cross-functional collaboration', 'Technical documentation'] },
    ],
  },
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

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  return (
    <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="navbar" aria-label="Primary navigation">
      <Mark />
      <div id="primary-navigation" className={`nav-links ${open ? 'is-open' : ''}`}>
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
      <button className="mobile-menu" type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-controls="primary-navigation" aria-expanded={open}>
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
          <a href="#contact" className="pill-button pill-button-outline">Get in touch</a>
        </div>
      </motion.div>
      <div className="hero-metrics">
        <div><strong>5+</strong><span>Years across software, data & education</span></div>
        <div><strong>3</strong><span>Domains: commerce, healthcare & operations</span></div>
        <div><strong>Now</strong><span>Building AI systems, exploring opportunities & analyzing products</span></div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-shell content-section">
      <SectionHeading number="01" eyebrow="About" title="Engineer by practice. Problem-solver by nature." />
      <div className="about-grid">
        <div className="portrait-card glass-card"><img src="/images/rohan-profile.png" alt="Rohan Samavedam" loading="lazy" decoding="async" /></div>
        <div className="about-copy">
          <h3>Professional motivation</h3>
          <p>I’m interested in building software that shapes how people and organizations operate. My experience spans fulfillment, consumer products, and healthcare, where reliable systems, trustworthy data, and thoughtful decisions are essential.</p>
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
            {showTeachingDetails && <div id="teaching-details" className="activity-details">
              <p>Evaluated and graded Python programming assignments, providing feedback on code quality, logic, and problem-solving approach.</p>
              <p>Supported in-class exams by proctoring sessions, coordinating exam logistics, and ensuring academic integrity.</p>
              <p>Conducted 50+ mock interviews with students to assess career readiness, communication skills, and job interview preparedness.</p>
            </div>}
            <button className="activity-toggle" type="button" onClick={() => setShowTeachingDetails(!showTeachingDetails)} aria-controls="teaching-details" aria-expanded={showTeachingDetails}>
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
                {isExpanded && <div id={`experience-details-${i}`} className="experience-details">{item.details.map(point => <p key={point}>{highlightMetrics(point)}</p>)}</div>}
                <button className="activity-toggle" type="button" onClick={() => toggleRole(roleKey)} aria-label={`${isExpanded ? 'Show less' : 'Show more'} about ${item.role} at ${item.company}`} aria-controls={`experience-details-${i}`} aria-expanded={isExpanded}>
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
      <SectionHeading number="04" eyebrow="Projects" title="Built to explore real problems." copy="Independent work across responsible AI, creator platforms, mobile development, data systems, and applied analytics." />
      <div className="projects-grid">
        <article className="project-feature project-link glass-card">
          <a className="project-card-primary" href="https://examination-ai.netlify.app/" target="_blank" rel="noreferrer" aria-label="Visit the Examination AI live site" />
          <div className="project-top"><span>Open-source product · Jul 2026</span><span className="project-status">In progress</span></div>
          <div className="project-feature-intro">
            <h3>Examination AI</h3>
            <p>Responsible AI assistance for university exams, controlled by professors.</p>
          </div>
          <div className="project-details"><div><h3>A controlled middle ground for AI-assisted assessment.</h3><p>Designed and built a product concept and case study where professors configure question-level AI access, prompt budgets, and guidance-only guardrails. The experience gives students limited learning support while logging interactions for transparent review and assessment analytics.</p></div><div className="tags"><span>Next.js</span><span>TypeScript</span><span>Tailwind CSS</span><span>LLMs</span><span>Prompt Engineering</span><span>AI Guardrails</span><span>Responsible AI</span><span>Product Analytics</span></div></div>
          <div className="project-feature-footer project-actions">
            <a href="https://examination-ai.netlify.app/" target="_blank" rel="noreferrer">View live site <ExternalLink size={15}/></a>
            <a href="https://github.com/rohansamavedam/examination-ai" target="_blank" rel="noreferrer">View on GitHub <Github size={15}/></a>
          </div>
        </article>
        <article className="project-feature project-link glass-card">
          <a className="project-card-primary" href="https://shivakailash.com" target="_blank" rel="noreferrer" aria-label="Visit Shivakailash.com" />
          <div className="project-top"><span>Freelance project · Jan 2025—Jan 2026</span></div>
          <div className="project-feature-intro">
            <h3>Shivakailash.com</h3>
            <p>Products, courses, and events for a creator with 20K YouTube subscribers.</p>
          </div>
          <div className="project-details"><div><h3>A secure creator business, built end to end.</h3><p>Led full-cycle development of a serverless commerce and learning platform with digital product sales, Stripe payments, Cal.com scheduling, 2FA dashboards, and GA4-informed user flows. Protected paid course content through authenticated sessions, role-based permissions, and time-limited media URLs.</p></div><div className="tags"><span>Next.js</span><span>TypeScript</span><span>Node.js</span><span>AWS</span><span>Stripe</span><span>GA4</span></div></div>
          <div className="project-feature-footer project-actions"><a href="https://shivakailash.com" target="_blank" rel="noreferrer">View live site <ExternalLink size={15}/></a></div>
        </article>
        <article className="project-mini project-link glass-card">
          <a className="project-card-primary" href="https://github.com/rohansamavedam/TravSafe" target="_blank" rel="noreferrer" aria-label="View the TravSafe project on GitHub" />
          <span>Mobile app · 2021</span>
          <h3>TravSafe</h3>
          <p>A React Native travel-safety app that brings destination advisories, COVID-19 trends, weather, local news, and search history into one mobile experience.</p>
          <div className="tags"><span>React Native</span><span>Expo</span><span>AWS Amplify</span><span>REST APIs</span></div>
          <div className="mini-footer project-actions"><a href="https://github.com/rohansamavedam/TravSafe" target="_blank" rel="noreferrer">View on GitHub <Github size={15}/></a></div>
        </article>
        <article className="project-mini project-link glass-card">
          <a className="project-card-primary" href="https://github.com/rohansamavedam/CIS-9340-TERM-PROJECT" target="_blank" rel="noreferrer" aria-label="View the MySQL Property Management Database System project on GitHub" />
          <span>Database system · 2025</span>
          <h3>Property Management Database</h3>
          <p>A normalized MySQL system modeling listings, rentals, contracts, inspections, vendors, tenants, customers, and payments—with a Retool prototype for role-based CRUD workflows.</p>
          <div className="tags"><span>MySQL</span><span>Workbench</span><span>ER Modeling</span><span>Retool</span></div>
          <div className="mini-footer project-actions"><a href="https://github.com/rohansamavedam/CIS-9340-TERM-PROJECT" target="_blank" rel="noreferrer">View on GitHub <Github size={15}/></a></div>
        </article>
        <article className="project-mini project-link project-mini-wide glass-card">
          <a className="project-card-primary" href="https://rohansamavedam.github.io/STA9750-2025-FALL/" target="_blank" rel="noreferrer" aria-label="View the R and Quarto Data Analytics portfolio live site" />
          <span>Analytics portfolio · 2025</span>
          <h3>R / Quarto Data Analytics</h3>
          <p>Five reproducible analyses spanning mental health, Netflix trends, housing affordability, NYC tree canopy, and BLS jobs revisions—published from Quarto reports with R.</p>
          <div className="tags"><span>R</span><span>Quarto</span><span>tidyverse</span><span>ggplot2</span><span>GitHub Pages</span></div>
          <div className="mini-footer project-actions">
            <a href="https://rohansamavedam.github.io/STA9750-2025-FALL/" target="_blank" rel="noreferrer">View live site <ExternalLink size={15}/></a>
            <a href="https://github.com/rohansamavedam/STA9750-2025-FALL" target="_blank" rel="noreferrer">View on GitHub <Github size={15}/></a>
          </div>
        </article>
        <article className="project-mini project-link glass-card">
          <a className="project-card-primary" href="https://github.com/rohansamavedam/CIS-9660-GROUP-PROJECT" target="_blank" rel="noreferrer" aria-label="View the NYC Motor Vehicle Collision Fatality Analysis project on GitHub" />
          <span>Data mining · 2025</span>
          <h3>NYC Collision Fatality Analysis</h3>
          <p>A Python data-mining study using feature engineering and logistic regression to test whether Ford vehicles were associated with higher fatal-crash odds in NYC collision records.</p>
          <div className="tags"><span>Python</span><span>Pandas</span><span>scikit-learn</span><span>statsmodels</span><span>Logistic Regression</span></div>
          <div className="mini-footer project-actions"><a href="https://github.com/rohansamavedam/CIS-9660-GROUP-PROJECT" target="_blank" rel="noreferrer">View on GitHub <Github size={15}/></a></div>
        </article>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-shell content-section">
      <SectionHeading number="06" eyebrow="Skills" title="A toolkit for building the whole thing." copy="From defining the problem to shipping and measuring the solution, I work across engineering, AI, cloud, and product analytics." />
      <div className="skills-grid">
        {skills.map(({ icon: Icon, title, groups }, index) => (
          <article key={title} className="skill-row">
            <div className="skill-row-heading">
              <span className="skill-number">{String(index + 1).padStart(2, '0')}</span>
              <Icon size={22}/>
              <h3>{title}</h3>
            </div>
            <div className="skill-groups">
              {groups.map(({ label, items }) => (
                <div className="skill-group" key={label}>
                  <h4>{label}</h4>
                  <p>{items.join(' · ')}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Credentials() {
  const [showOlderCredentials, setShowOlderCredentials] = useState(false);

  const currentLearning = [
    { title: 'AWS Bootcamp: Build AI Apps with AWS Bedrock', issuer: 'Zero To Mastery', detail: 'Generative AI applications with Amazon Bedrock' },
    { title: 'Ultimate AWS Certified Developer Associate 2026', issuer: 'Udemy', detail: 'DVA-C02 exam preparation' },
  ];

  const recentCredentials = [
    { title: 'Foundations of AI Engineering', issuer: 'CodePath', date: 'Spring 2026', detail: 'AI110' },
    { title: 'Introduction to Python', issuer: 'DataCamp', date: 'Apr 2026', detail: '4 hours', credential: '/credentials/datacamp-introduction-to-python.pdf' },
    { title: 'Marketing Analytics in Google Sheets', issuer: 'DataCamp', date: 'Mar 2026', detail: '4 hours', credential: '/credentials/datacamp-marketing-analytics-google-sheets.pdf' },
    { title: 'Intermediate Technical Interview Prep', issuer: 'CodePath', date: 'Fall 2025', detail: 'TIP102' },
    { title: 'Hierarchical and Recursive Queries in SQL Server', issuer: 'DataCamp', date: 'May 2025', detail: '4 hours', credential: '/credentials/datacamp-hierarchical-recursive-sql.pdf' },
  ];

  const olderCredentials = [
    { title: 'Data Manipulation in SQL', issuer: 'DataCamp', date: 'May 2025', detail: '4 hours', credential: '/credentials/datacamp-data-manipulation-sql.pdf' },
    { title: 'Joining Data in SQL', issuer: 'DataCamp', date: 'May 2025', detail: '4 hours', credential: '/credentials/datacamp-joining-data-sql.pdf' },
    { title: 'Intermediate SQL', issuer: 'DataCamp', date: 'Mar 2025', detail: '4 hours', credential: '/credentials/datacamp-intermediate-sql.pdf' },
    { title: 'Python Django Dev to Deployment', issuer: 'Udemy', date: 'Sep 2019', detail: '11 hours', credential: '/credentials/udemy-python-django.pdf' },
    { title: 'The Complete Node.js Developer Course', issuer: 'Udemy', date: 'Jul 2019', detail: '34.5 hours', credential: '/credentials/udemy-nodejs-developer.pdf' },
    { title: 'Mobile App Development', issuer: 'CodePath', date: 'Fall 2018', detail: 'Certificate of achievement', credential: '/credentials/codepath-mobile-app-development.pdf' },
  ];

  return (
    <section id="credentials" className="section-shell content-section">
      <SectionHeading number="05" eyebrow="Credentials" title="Always learning, always sharpening the craft." copy="Structured programs and focused coursework across AI, cloud, data, and software engineering." />

      <div className="credential-group">
        <div className="credential-group-heading"><BookOpen size={20}/><div><h3>Current focus</h3></div></div>
        <div className="credential-grid credential-grid-featured">
          {currentLearning.map(item => (
            <article className="credential-item glass-card" key={item.title}>
              <div className="credential-item-top"><span>{item.issuer}</span><span className="credential-badge">In progress</span></div>
              <h4>{item.title}</h4><p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="credential-group">
        <div className="credential-group-heading"><Award size={20}/><div><span>Certificates of completion</span><h3>Technical coursework</h3></div></div>
        <div className="credential-grid">
          {recentCredentials.map(item => (
            <article className="credential-item glass-card" key={item.title}>
              <div className="credential-item-top"><span>{item.issuer}</span><span>{item.date}</span></div>
              <h4>{item.title}</h4>{item.detail && <p>{item.detail}</p>}
              {item.credential && <a className="credential-link" href={item.credential} target="_blank" rel="noreferrer">View credential <ArrowUpRight size={14}/></a>}
            </article>
          ))}
          {showOlderCredentials && olderCredentials.map(item => (
            <article className="credential-item glass-card" key={item.title}>
              <div className="credential-item-top"><span>{item.issuer}</span><span>{item.date}</span></div>
              <h4>{item.title}</h4><p>{item.detail}</p>
              <a className="credential-link" href={item.credential} target="_blank" rel="noreferrer">View credential <ArrowUpRight size={14}/></a>
            </article>
          ))}
        </div>
        <button className="credential-toggle" type="button" aria-expanded={showOlderCredentials} onClick={() => setShowOlderCredentials(current => !current)}>
          {showOlderCredentials ? 'Show fewer credentials' : 'Show more credentials'} <ChevronDown className={showOlderCredentials ? 'is-open' : ''} size={16}/>
        </button>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-shell contact-section">
      <Eyebrow>Contact</Eyebrow>
      <h2>Let’s connect.</h2>
      <p>Whether you have an opportunity, a project, or an idea worth exploring, let’s talk.</p>
      <div className="contact-actions"><a className="pill-button" href="https://www.linkedin.com/in/rohansamavedam" target="_blank" rel="noreferrer"><Linkedin size={17}/> Connect on LinkedIn</a><a className="text-link" href="mailto:rohansamavedam@gmail.com"><Mail size={15}/> rohansamavedam@gmail.com</a></div>
      <footer><Mark/><span>© {new Date().getFullYear()} Rohan Samavedam</span><a href="#top">Back to top <ArrowUpRight size={13}/></a></footer>
    </section>
  );
}

export default function App() {
  return (
    <div className="site">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <BackgroundVideo/>
      <div className="bg-overlay"/><div className="rail rail-left"/>
      <svg width="0" height="0" aria-hidden="true"><filter id="c3-noise"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0"/><feComposite in2="SourceGraphic" operator="in" result="noise"/><feBlend in="SourceGraphic" in2="noise" mode="multiply"/></filter></svg>
      <div className="page-content"><Navbar/><main id="main-content"><Hero/><About/><Education/><Experience/><Projects/><Credentials/><Skills/><Contact/></main></div>
    </div>
  );
}
