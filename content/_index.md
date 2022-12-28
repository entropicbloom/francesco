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
      text:
  - block: collection
    id: publications
    content:
      title: Publications
      filters:
        folders:
          - publication
    design:
      columns: '2'
      view: card
  - block: experience
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
        - title: Data Scientist
          company: Unit8
          company_url: 'https://unit8.com'
          company_logo: Unit8
          location: Zürich
          date_start: '2020-04-01'
          date_end: '2022-02-01'
          description: |2-
              * Developed a significant part of Darts, an open source library for time series forecasting, including statistical and deep learning-based forecasting tools. Presented Darts at the EuroPython 2021 conference and the PyData Global 2021 conference. During the time I worked on Darts, its GitHub page went from 0 to over 3.3k stars.
              * Built a ML-based predictive maintenance tool for a Swiss hydro power plant, all the way from exploratory data analysis and model development to backtesting and deployment.
              * Developed a demand forecasting solution for a Swiss manufacturer of laboratory and industry equipment which improved their existing forecasts by 10% - 50% (depending on the metric).
              * Co-hosted multiple technical public webinars revolving around topics in data science and machine learning.
        - title: Machine Learning Engineer
          company: Araneum Technologies
          company_url: 'https://www.araneum.ch'
          company_logo: araneum
          location: Zürich
          date_start: '2019-09-01'
          date_end: '2019-12-31'
          description: Devised and built machine learning solutions for small and medium-sized Swiss banks.
    design:
      columns: '2'
  - block: portfolio
    id: projects
    content:
      title: Blog Posts, Presentations
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
        - name: All
          tag: '*'
        - name: Machine Learning
          tag: Machine Learning
        - name: Consciousness
          tag: Consciousness
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false

---
