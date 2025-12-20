---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: about.avatar
    id: about
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      # Override your bio text from `authors/admin/_index.md`?
      text: 'Working on LLMs and thinking about consciousness,<br>sometimes both at once.'
    design:
      background:
        image:
          filename: buddhabrot.png
        text_color_light: true
        filters:
          # Darken the image? Range 0-1 where 1 is transparent and 0 is opaque.
          brightness: 0.6
  - block: collection
    id: papers
    content:
      title: Papers
      subtitle: My academic papers and preprints.
      filters:
        folders:
          - publication
    design:
      columns: '2'
      view: card
  - block: experience
    id: job-experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: AI Engineer
          company: LLMify
          company_url: 'https://llmify.ch'
          location: Zürich
          date_start: '2025-10-01'
          description: |2-
            Building LLM-powered applications and AI solutions for businesses and non-profits.
        - title: Data Scientist
          company: Unit8
          company_url: 'https://unit8.com'
          location: Zürich
          date_start: '2024-03-01'
          date_end: '2025-09-30'
          description: |2-
            Built LLM applications for clients in tech, finance, and energy, including a major US tech company. Projects included workflow automation, talk-to-your-data tools (RAG, text2sql), and multi-agent systems. Also worked on data engineering with Spark.
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
          company_url: 'https://www.araneum.ch'
          location: Zürich
          date_start: '2019-09-01'
          date_end: '2019-12-31'
          description: Devised and built machine learning solutions for small and medium-sized Swiss banks.
    design:
      columns: '2'
  - block: experience
    id: education
    content:
      title: Education
      # Date format for experience
      #   Refer to https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006

      items:
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
    design:
      columns: '2'
  - block: portfolio
    id: other-contents
    content:
      title: Other Contents
      subtitle: 'Some of my projects, talks, and writings.'
      count: 5
      filters:
        folders:
          - post-external
      default_button_index: 0
      buttons:
        - name: LLMs
          tag: LLMs
        - name: Consciousness
          tag: Consciousness
        - name: Darts
          tag: Darts
        - name: Other
          tag: Other
    design:
      columns: '2'
      view: compact
      flip_alt_rows: false
---
