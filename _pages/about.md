---
permalink: /
title: "Zhanqiu (Jack) Guo"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<section class="home-hero">
  <p class="home-kicker">Machine learning researcher and engineer</p>
  <p class="home-lede">
    I am an M.S. student in the <a href="https://ml.cmu.edu/">Machine Learning Department</a> at <a href="https://www.cmu.edu/">Carnegie Mellon University</a>, expected to graduate in December 2026. My research centers on multimodal agents that interact with environments: vision-language-action models for embodied tasks, web agents that collaborate with people in browser environments, and clinical AI systems that reason over multimodal medical data.
  </p>
  <p>
    I am currently advised by <a href="https://www.cs.cmu.edu/~cx/">Prof. Chenyan Xiong</a> in the <a href="https://www.cs.cmu.edu/~cxcscmu/">CX Research Group</a>. Before CMU, I received my B.S. in Computer Science and Mathematics from <a href="https://www.nyu.edu/">New York University</a>, where I was fortunate to be advised by <a href="https://www.lerrelpinto.com/">Prof. Lerrel Pinto</a> in the <a href="https://www.lerrelpinto.com/">General-purpose Robotics and AI Lab (GRAIL)</a> and by <a href="https://seyiqi.github.io/">Prof. Yiqiu (Artie) Shen</a>.
  </p>

  <div class="home-links" aria-label="Profile links">
    <a class="btn btn--primary" href="mailto:zhanqiug@cs.cmu.edu"><i class="fas fa-envelope" aria-hidden="true"></i> Email</a>
    <a class="btn" href="{{ base_path }}/files/CV_Zhanqiu.pdf"><i class="fas fa-file-lines" aria-hidden="true"></i> CV</a>
    <a class="btn" href="https://github.com/Zhanqiu-Guo"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>
    <a class="btn" href="https://scholar.google.com/citations?user=86OJiI0AAAAJ&amp;hl=en"><i class="ai ai-google-scholar" aria-hidden="true"></i> Scholar</a>
    <a class="btn" href="https://www.linkedin.com/in/zhanqiu-guo-b932b624b/"><i class="fab fa-linkedin" aria-hidden="true"></i> LinkedIn</a>
    <a class="btn" href="https://huggingface.co/ZhanqiuG"><i class="fas fa-robot" aria-hidden="true"></i> Hugging Face</a>
  </div>
</section>

<section class="home-section home-snapshot" aria-label="Current snapshot">
  <div>
    <span class="snapshot-label">Education</span>
    <strong>Carnegie Mellon University</strong>
    <span>M.S. in Machine Learning, expected Dec. 2026</span>
  </div>
  <div>
    <span class="snapshot-label">Current Role</span>
    <strong>TikTok Shop Ads Ranking</strong>
    <span>Machine Learning Engineer Intern, Summer 2026</span>
  </div>
  <div>
    <span class="snapshot-label">Background</span>
    <strong>New York University</strong>
    <span>B.S. in Computer Science and Mathematics, GPA 3.9/4.0</span>
  </div>
</section>

<section id="research" class="home-section">
  <h2>Research</h2>
  <p>
    The common thread in my research is interactive intelligence: building models that do more than recognize static inputs, but instead ground perception, language, memory, and feedback in environments where actions matter.
  </p>
  <div class="research-grid">
    <article>
      <p class="item-meta">Embodied AI and VLA models</p>
      <h3>Grounding foundation models in physical environments</h3>
      <p>I work on bridging vision-language models and vision-language-action models through mid-training and VLA-aligned data selection. This line of work asks how multimodal foundation models can become better policies for embodied decision making.</p>
    </article>
    <article>
      <p class="item-meta">Web agents and human-AI collaboration</p>
      <h3>Modeling interaction in browser environments</h3>
      <p>I study web agents that learn from human intervention patterns during collaborative task execution. In this setting, the environment is the browser, and the agent must model not only webpage state but also when users step in, correct, or guide behavior.</p>
    </article>
    <article>
      <p class="item-meta">Open-world mobile manipulation</p>
      <h3>Memory for changing physical worlds</h3>
      <p>At NYU GRAIL, I worked on DynaMem, an online spatio-semantic memory system for mobile manipulation. The system maintains dynamic 3D point-cloud memory so robots can localize, search for, and recover objects as scenes change over time.</p>
    </article>
    <article>
      <p class="item-meta">Clinical multimodal AI</p>
      <h3>Reasoning over medical data and reports</h3>
      <p>With Prof. Artie Shen, I worked on clinical LLMs for radiology report understanding. This work connects the same multimodal interaction theme to healthcare, where models must reason over text, imaging context, and structured clinical signals.</p>
    </article>
  </div>
</section>

<section class="home-section">
  <h2>Experience</h2>
  <div class="timeline">
    <article>
      <span>May 2026 - Aug. 2026</span>
      <div>
        <h3>TikTok - Machine Learning Engineer Intern</h3>
        <p>Incoming summer intern on the TikTok Shop Ads Ranking team, focusing on ranking and recommendation modeling for e-commerce advertising.</p>
      </div>
    </article>
    <article>
      <span>Jun. 2025 - Aug. 2025</span>
      <div>
        <h3>Depository Trust &amp; Clearing Corporation - Technology Research &amp; Innovation Intern</h3>
        <p>Engineered asynchronous scraping and batch processing for newsletter generation, reducing latency and costs by 40x. Built synthetic data generation with Snowflake and Treasury yield forecasting with XGBoost quantile regression.</p>
      </div>
    </article>
    <article>
      <span>Feb. 2025 - May 2025</span>
      <div>
        <h3>Teragonia - AI/ML Engineer Intern</h3>
        <p>Built document intelligence for legal and financial PDFs with layout-aware OCR, recursive retrieval, automated answer verification, and LLM-to-Excel integration.</p>
      </div>
    </article>
    <article>
      <span>Jun. 2024 - Aug. 2024</span>
      <div>
        <h3>Coleman Research - Machine Learning &amp; Generative AI Intern</h3>
        <p>Engineered citation linking for expert profile summarization and built a hybrid RAG system with Elasticsearch, improving generation speed while reducing hallucinations.</p>
      </div>
    </article>
  </div>
</section>

<section id="projects" class="home-section">
  <h2>Projects</h2>
  <div class="project-grid">
    <article>
      <h3>GlassTorch</h3>
      <p>Lead developer of a PyTorch-like deep learning framework with tensor operations, autograd, custom CUDA kernels, and module-level runtime profiling. Added dynamic freezing and optimizer-aware pruning with progressive sparsity schedules to reduce training and inference cost.</p>
    </article>
    <article>
      <h3>Task Scheduling and Monitoring System</h3>
      <p>Lead developer of a Spring Boot, JDBC, and React system for ARM microcontrollers, with optimized thread-aware CPU utilization, PostgreSQL history tracking, Java Socket failure alerts, and a real-time monitoring dashboard.</p>
    </article>
  </div>
</section>

<section class="home-section">
  <h2>Skills</h2>
  <div class="skill-cloud" aria-label="Technical skills">
    <span>Python</span>
    <span>C/C++</span>
    <span>Java</span>
    <span>JavaScript</span>
    <span>SQL</span>
    <span>PyTorch</span>
    <span>TensorFlow</span>
    <span>CUDA</span>
    <span>React</span>
    <span>Spring Boot</span>
    <span>LangChain</span>
    <span>LlamaIndex</span>
    <span>DeepSpeed</span>
    <span>Hugging Face</span>
    <span>Docker</span>
    <span>Kubernetes</span>
    <span>AWS</span>
    <span>GCP</span>
    <span>Azure AI</span>
  </div>
</section>

<section class="home-section awards">
  <h2>Recognition</h2>
  <p>Best Paper Award, CoRL Workshop on Lifelong Learning for Home Robot, 2024.</p>
  <p>Honorable Mention, Mathematical Contest in Modeling, 2022.</p>
</section>
