---
# Landing page. Everything on the homepage is driven by this front matter;
# layouts/index.html renders it.
title: Francesco Lässig
role: AI Engineer & Co-Founder
org:
  name: LLMify
  url: https://llmify.ch
intro: Building sovereign AI solutions for Swiss companies and non-profits.
essays:
  text: Research and essays on consciousness and AI
  url: https://entropicbloom.com

links:
  - name: Email
    url: mailto:francesco.laessig@proton.me
  - name: LinkedIn
    url: https://www.linkedin.com/in/francesco-laessig/
  - name: GitHub
    url: https://github.com/entropicbloom
  - name: Scholar
    url: https://scholar.google.com/citations?user=xyr8NGIAAAAJ&hl=en&authuser=1
  - name: CV
    url: /uploads/resume.pdf

# Tabs of the Work section; the first one is selected on page load.
# A `tag` tab shows the cards from content/post-external/ carrying that tag
# (cards with a `weight` first, then newest first). The `papers` tab shows
# content/publication/. A tab is also reachable at /#<name-slug>, e.g. /#papers.
work:
  title: Selected work
  tabs:
    - name: Current Work
      tag: Current Work
    - name: Papers
      papers: true
    - name: Talks
      tag: Talks
    - name: Side Projects
      tag: Side Projects

# Begin multi-line descriptions with YAML's `|2-` prefix. Markdown is allowed.
# Leave `date_end` empty for a current position.
experience:
  - title: AI Engineer & Co-Founder
    company: LLMify
    company_url: 'https://llmify.ch'
    location: Cham
    date_start: '2025-10-01'
    description: |2-
      Building sovereign AI infrastructure for Swiss companies: open-source models, on-premise & Swiss cloud.

      - **AI Learning Coach** for [Entlastungsdienst Bern](https://vireo-empower.ch): multi-agent system (5 specialised agents) for scenario-based competency assessment, personalised learning paths, interactive training, and a confidential reflection space for care workers. Delivered in 14 weeks (Nov 2025 – Feb 2026).
      - **Sovereign AI Platform**: co-developed and rolled out an on-premise / Swiss-cloud platform based on open-source LLMs, deployed across multiple client industries.
      - [Semi-finalist, GenAI Awards 2026](https://www.genaizurich.ch/award/gaz26--entlastungsdienst).
  - title: Data Scientist
    company: Unit8
    company_url: 'https://unit8.com'
    location: Zürich
    date_start: '2024-03-01'
    date_end: '2025-09-30'
    description: |2-
      Built LLM applications for clients in tech, finance, and energy.

      - **Text-to-Data Chatbot** (major US tech company): multi-agent conversational analytics system for querying business and sales data in natural language — identified the correct database, executed queries, generated grounded answers and dynamic charts.
      - **Data Quality Monitoring** (Swiss energy company): end-to-end anomaly detection pipeline for operational data; led stakeholder requirements workshops and a comparative evaluation of candidate solutions.
      - **LLM Due Diligence Assistant** (Swiss asset manager): semantic document retrieval system for due diligence workflows with full source traceability — every answer linked to its origin document.
  - title: PhD Candidate in Computational Neuroscience
    company: University of Amsterdam
    company_url: ''
    location: Amsterdam
    date_start: '2022-08-01'
    date_end: '2023-03-15'
    description: |2-
      Worked as part of the [ARC-INTREPID project](https://arc-intrepid.com): an adversarial collaboration between three neuroscientific theories of consciousness.
  - title: Research Assistant
    company: Institute of Neuroinformatics, ETH/UZH
    company_url: ''
    location: Zürich
    date_start: '2022-02-01'
    date_end: '2022-11-01'
    description: |2-
      Wrote an [original research article](https://arxiv.org/abs/2212.04316) based on my master thesis, published in *Biological Cybernetics*.
  - title: Data Scientist
    company: Unit8
    company_url: 'https://unit8.com'
    location: Zürich
    date_start: '2020-04-01'
    date_end: '2022-02-01'
    description: |2-
      - Developed a significant part of *Darts*, an open source library for time series forecasting, including statistical and deep learning-based forecasting tools. Presented Darts at the [EuroPython 2021 conference](https://www.youtube.com/watch?v=thg10qDqpRE) and the [PyData Global 2021 conference](https://www.youtube.com/watch?v=Kf6b5falv0M). During the time I worked on Darts, its [GitHub page](https://github.com/unit8co/darts) went from 0 to over 3.3k stars.
      - Built a ML-based predictive maintenance tool for a Swiss hydro power plant, all the way from exploratory data analysis and model development to backtesting and deployment.
      - Developed a demand forecasting solution for a Swiss manufacturer of laboratory and industry equipment which improved their existing forecasts by 10% - 50% (depending on the metric).
      - Co-hosted multiple technical public webinars revolving around topics in data science and machine learning.
  - title: Machine Learning Engineer
    company: Araneum Technologies
    location: Zürich
    date_start: '2019-09-01'
    date_end: '2019-12-31'
    description: Devised and built machine learning solutions for small and medium-sized Swiss banks.

education:
  - title: MSc Neural Systems and Computation
    company: Institute of Neuroinformatics, ETH Zürich & University of Zürich
    company_url: ''
    location: Zürich
    date_start: '2020-09-01'
    date_end: '2022-10-30'
    description: |2-
      - Developed a novel, bio-inspired continual learning algorithm called sparse-recurrent DFC as part of my master thesis, which received the maximum grade.
      - Showcased poster about my master thesis at the AI+X Summit 2022. Presented my work at an [IROS 2022 workshop](https://lifelongrobotics.github.io) on continual learning.
      - Founded [Qualiaheads](https://qualiaheads.github.io/blog/), a student club and reading group on consciousness science. Conducted interviews with researchers such as Anil Seth and Pedro Mediano.
      - Finished degree with a weighted GPA of 5.8 out of 6.
  - title: Computer Science Program
    company: University of Pennsylvania
    company_url: ''
    location: Philadelphia
    date_start: '2018-08-01'
    date_end: '2018-12-31'
    description: |2-
      - Took courses at the computer science department and the Wharton business school.
      - Received honorable mention for Facebook-sponsored award in a project-based coding competition as part of the NETS 212 course (among top 4 of 54 teams).
      - Finished the semester with a GPA of 3.75 out of 4.
  - title: BSc Computer Science
    company: ETH Zürich
    location: Zürich
    date_start: '2016-09-01'
    date_end: '2020-04-01'
    description: |2-
      - Worked as a student assistant teaching calculus.
      - Received a scholarship for a selective exchange program to the University of Pennsylvania.
      - Completed degree with a GPA of 5.36 out of 6.
---
