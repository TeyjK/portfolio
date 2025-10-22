export default function HomePage() {
  return (
    <div className="space-y-20 py-12">
      {/* Hero */}
      <section className="grid gap-8 md:grid-cols-[1fr,240px] items-center">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Computer Science @ University of Michigan
          </h1>
          <p className="text-white/70 max-w-2xl">
            I’m Teyj Krishnan — interested in machine learning, data analysis, and building polished, usable products.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-medium text-black transition hover:bg-accentDark"
              href="/Teyj_Krishnan_Resume.pdf"
              target="_blank"
              rel="noopener"
            >
              Download Resume
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-lg ring-1 ring-white/20 px-4 py-2 font-medium text-white/90 hover:text-white hover:ring-white/40 transition"
              href="#projects"
            >
              View Projects
            </a>
          </div>
        </div>
        {/* Placeholder headshot */}
        <div className="justify-self-end">
          <div className="flex h-40 w-40 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
            <span className="text-white/40 text-sm">Photo</span>
          </div>
          <div className="mt-3 text-xs text-white/60">Ann Arbor, MI</div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">About</h2>
          <p className="text-white/70">
            CS student (Class of 2028) at UMich. Involved in Kappa Theta Pi, Michigan Venture Club,
            Product Motion, and Quant Finance Club. I enjoy ML research and shipping practical apps.
          </p>
        </div>
        <ul className="space-y-2 text-white/70">
          <li>Focus: Machine Learning, Data Analysis, Full-Stack Development</li>
          <li>Coursework: Programming + Data Structures, DSA, Discrete Math, Linear Algebra</li>
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className="space-y-6">
        <h2 className="text-xl font-semibold">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Article
            title="Lumbar Degeneration Classifier"
            desc="Multi-class, region-specific MRI classification; 0.95 micro-AUC, 87% accuracy."
            tech="PyTorch, NumPy, Gradio"
            link="#"
          />
          <Article
            title="Medical Imaging Pipeline"
            desc="CNN low-dose X-ray simulation; cut experiment time 40%, 26.55 dB PSNR, 0.92 SSIM."
            tech="PyTorch, NumPy"
            link="#"
          />
          <Article
            title="React Native Mortgage App"
            desc="Real-time market insights, plan comparison, responsive UI."
            tech="React Native, Figma"
            link="#"
          />
          <Article
            title="EEG Signal Classifier"
            desc="Processed 350k+ samples; 98.15% accuracy; visualized neural activity."
            tech="PyTorch, NumPy, Matplotlib"
            link="#"
          />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="grid gap-6 md:grid-cols-3">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Skills</h2>
          <ul className="text-white/70 space-y-1">
            <li><b>Languages</b>: Python, Java, JavaScript, C++, HTML, CSS</li>
            <li><b>Frameworks</b>: PyTorch, NumPy, Pandas, TensorFlow, Matplotlib, Scikit-Learn, React Native</li>
            <li><b>Focus</b>: Machine Learning, Data Analysis, Full-Stack</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="space-y-4">
        <h2 className="text-xl font-semibold">Education</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card p-5">
            <h3 className="font-medium">University of Michigan, Ann Arbor</h3>
            <p className="text-white/70">B.S. in Computer Science — Class of 2028</p>
            <p className="text-white/60 text-sm">
              Involvement: Kappa Theta Pi, Michigan Venture Club, Product Motion, Quant Finance Club
            </p>
          </div>
          <div className="card p-5">
            <h3 className="font-medium">Tesla STEM High School</h3>
            <p className="text-white/70">GPA 4.0/4.0, SAT 1590 — AP Scholar with Distinction</p>
            <p className="text-white/60 text-sm">
              APs: CSA, Stats, Calc AB/BC, Physics C (Mech & E&amp;M), Psych, Lang, Env Sci
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="space-y-4">
        <h2 className="text-xl font-semibold">Contact</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <form className="card p-5 space-y-3" action="https://formspree.io/f/mwkgyjke" method="POST">
            <input className="w-full rounded-lg bg-black/20 p-2 ring-1 ring-white/10" name="name" placeholder="Name" required />
            <input className="w-full rounded-lg bg-black/20 p-2 ring-1 ring-white/10" name="email" type="email" placeholder="Email" required />
            <textarea className="w-full rounded-lg bg-black/20 p-2 ring-1 ring-white/10" name="message" placeholder="Message" rows={4} required />
            <button className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 font-medium text-black hover:bg-accentDark transition" type="submit">
              Send
            </button>
          </form>
          <div className="space-y-2">
            <p className="text-white/70">
              Email: <a className="underline decoration-accent/60 hover:decoration-accent" href="mailto:teyj.krishnan@gmail.com">teyj.krishnan@gmail.com</a>
            </p>
            <p className="text-white/70">
              LinkedIn: <a className="underline decoration-accent/60 hover:decoration-accent" href="https://linkedin.com/in/teyj-krishnan" target="_blank" rel="noreferrer">/in/teyj-krishnan</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Article({ title, desc, tech, link }: { title: string; desc: string; tech: string; link: string }) {
  return (
    <a href={link} className="card block p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-medium">{title}</h3>
          <p className="text-white/70 text-sm">{desc}</p>
          <p className="text-[12px] text-white/50">{tech}</p>
        </div>
        <span aria-hidden className="text-white/40">→</span>
      </div>
    </a>
  );
}