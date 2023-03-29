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
      text: 'I am interested in intelligence (artificial and biological), consciousness, and existential risks.
      
      I have a formal background in computer science, deep learning and computational neuroscience, and practical experience as a data scientist in industry. In addition to solving technical problems, I like to communicate technical topics to specialized and general audiences.
      
      Currently I am looking to enter the field of AI alignment. 
      
      <br />
      <br />
      
      (image: wikipedia.org/wiki/Buddhabrot)'

      

    design:
      background:
        image:
          filename: buddhabrot.png
        text_color_light: true
        filters:
          # Darken the image? Range 0-1 where 1 is transparent and 0 is opaque.
          brightness: 0.6
  - block: collection
    id: publications
    content:
      title: Publications
      subtitle: All my academic publications, whether arXiv preprints or journal articles.
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
        - title: PhD Candidate
          company: University of Amsterdam
          company_url: ''
          location: Amsterdam
          date_start: '2023-03-15'
          description: |2-
              * Working on the [ARC-INTREPID project](https://arc-intrepid.com): an adversarial collaboration between three neuroscientific theories of consciousness.
        - title: Research Assistant
          company: Institute of Neuroinformatics, ETH/UZH
          company_url: ''
          location: Zürich
          date_start: '2022-11-01'
          date_end: '2022-02-01'
          description: |2-
              * Wrote an [original research article](https://arxiv.org/abs/2212.04316) based on my master thesis.
              * Currently awaiting feedback from the reviewers at the *Biological Cybernetics* journal.
        - title: Data Scientist
          company: Unit8
          company_url: 'https://unit8.com'
          location: Zürich
          date_start: '2020-04-01'
          date_end: '2022-02-01'
          description: |2-
              * Developed a significant part of *Darts*, an open source library for time series forecasting, including statistical and deep learning-based forecasting tools. Presented Darts at the [EuroPython 2021 conference](https://www.youtube.com/watch?v=thg10qDqpRE) and the [PyData Global 2021 conference](https://www.youtube.com/watch?v=Kf6b5falv0M). During the time I worked on Darts, its [GitHub page](https://github.com/unit8co/darts) went from 0 to over 3.3k stars.
              * Built a ML-based predictive maintenance tool for a Swiss hydro power plant, all the way from exploratory data analysis and model development to backtesting and deployment.
              * Developed a demand forecasting solution for a Swiss manufacturer of laboratory and industry equipment which improved their existing forecasts by 10% - 50% (depending on the metric).
              * Co-hosted multiple technical public webinars revolving around topics in data science and machine learning.
        - title: Machine Learning Engineer
          company: Araneum Technologies
          company_url: 'https://www.araneum.ch'
          location: Zürich
          date_start: '2019-09-01'
          date_end: '2019-12-31'
          description: Devised and built machine learning solutions for small and medium-sized Swiss banks.
    design:
      columns: '2'
  - block: portfolio
    id: contents
    content:
      title: Contents
      subtitle: 'All types of publicly available contents that I produced other than academic publications, including blog posts, presentations and other projects.'
      count: 5
      filters:
        folders:
          - post-external
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      buttons:
        - name: Consciousness
          tag: Consciousness
        - name: Darts
          tag: Darts
        - name: Other
          tag: Other
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '2'
      view: compact
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false
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
              * Developed a novel, bio-inspired continual learning algorithm called sparse-recurrent DFC as part of my master thesis, which received the maximum grade.
              * Showcased poster about my master thesis at the AI+X Summit 2022. 
              * Presented my work at an [IROS 2022 workshop](https://lifelongrobotics.github.io) on continual learning.
              * Took courses on both neuroscience and machine learning topics.
              * Finished degree with a weighted GPA of 5.8 out of 6.
        - title: Computer Science Program
          company: University of Pennsylvania
          company_url: ''
          location: Philadelphia
          date_start: '2018-08-01'
          date_end: '2018-12-31'
          description: |2-
              * Took courses at the computer science department and the Wharton business school.
              * Received honorable mention for Facebook-sponsored award in a project-based coding competition as part of the NETS 212 course (among top 4 of 54 teams).
              * Finished the semester with a GPA of 3.75 out of 4.
        - title: BSc Computer Science
          company: ETH Zürich
          location: Zürich
          date_start: '2016-09-01'
          date_end: '2020-04-01'
          description: |2-
              * Worked as a student assistant teaching calculus.
              * Received a scholarship for a selective exchange program to the University of Pennsylvania.
              * Completed degree with a GPA of 5.36 out of 6.
    design:
      columns: '2'
---
