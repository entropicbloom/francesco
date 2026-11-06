---
title: "Reading a neuron's tuning from its correlations with other neurons"
authors:
- Francesco Lässig
date: "2026-09-19T00:00:00Z"
doi: "10.48550/arXiv.2611.06927"

categories:
  - Papers
  - Consciousness
  - Neuroscience

# Schedule page publish date (NOT publication's date).
publishDate: "2026-09-19T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "arXiv preprint"
publication_short: "arXiv"

abstract: "What a neuron represents is usually established by relating its activity to a stimulus. We ask whether the same facts are contained in the correlation matrix of a recorded population, which keeps the pairwise relations among the neurons and discards the stimulus. A transformer that sees only the correlation matrix of 512 sampled neurons, with no labels and no reference population in its input, decodes the preferred orientation of mouse visual cortex neurons from in-vivo MICrONS responses to a mean error of 25° (uninformed: 45°; best constant guess: 41°) and their receptive-field position at R² = 0.23; on the digital-twin substrate, 20° and 0.48. Asked whether a neuron prefers horizontal or vertical, it is right for 79% of neurons in vivo and 87% on the twin, against 56% for the majority answer; it does not resolve the obliques. The ordering is recoverable because the relations between orientation classes are close to circulant, which fixes the class structure up to rotation and reflection; the rotation of the frame is recoverable only because of a departure from that symmetry. The departure survives equal representation of every orientation and disjoint training and test stimuli, and it is an anisotropy of the signal correlations: in V1 the neurons preferring the dominant orientation have the most similar responses to one another, and a model population with only that property recovers the frame. Across 33 mice of the Allen Brain Observatory, with relations from drifting gratings, orientation transfers to unseen animals only when a sampled population mixes animals; populations drawn from one animal are not decoded measurably below the best constant, a limit of the diversity of populations one animal provides. For receptive fields, what crosses animals is where each animal's imaged patch looks on the screen, not the layout of neurons within it."

# Summary. An optional shortened abstract.
summary: Tests whether a neuron's stimulus preference can be read from the correlation matrix of a recorded population alone, with no labels or stimulus, using mouse visual cortex data from MICrONS and the Allen Brain Observatory.

tags:
- Consciousness
- Neuroscience
- Neural Decoding
featured: true

links:
- name: "arXiv"
  url: "https://arxiv.org/abs/2611.06927"
- name: "Video"
  url: "https://youtu.be/0xjy6Bswu2Q"
url_pdf: https://arxiv.org/pdf/2611.06927
url_code: 'https://github.com/entropicbloom/intentionality'
url_project: 'https://consciousness-is-unambiguous.com/'
---
