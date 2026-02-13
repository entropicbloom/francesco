document.addEventListener('DOMContentLoaded', function() {
    const data = DASHBOARD_DATA;

    // Render main model table
    renderModelTable(data);

    // Render category table
    renderCategoryTable(data);

    // Render critical questions table
    renderCriticalTable(data);

    // Render example questions
    renderExampleQuestions(data);

    // Setup filters
    setupFilters(data);

    // Hide critical section if 0 critical questions
    hideCriticalIfEmpty(data);

    // Animate sections
    animateSections();

    // Animate score bars
    animateScoreBars();
});

function getScoreClass(pct) {
    if (pct >= 90) return 'high';
    if (pct >= 75) return 'mid';
    return 'low';
}

function renderModelTable(data) {
    const tbody = document.getElementById('model-table-body');
    if (!tbody) return;

    // Check if Reasoning column exists in the HTML header
    const hasReasoningCol = Array.from(document.querySelectorAll('#model-table-body')
        .item(0).closest('table').querySelectorAll('thead th'))
        .some(th => th.textContent.trim() === 'Reasoning');

    tbody.innerHTML = data.models.map(m => {
        const scoreClass = getScoreClass(m.score);
        const hiddenClass = m.license === 'proprietary' ? 'hidden' : '';

        let reasoningTd = '';
        if (hasReasoningCol) {
            const reasoningDisplay = m.reasoning || '-';
            const reasoningClass = m.reasoning ? 'reasoning-yes' : 'reasoning-no';
            reasoningTd = `<td><span class="${reasoningClass}">${reasoningDisplay}</span></td>`;
        }

        return `
            <tr class="${hiddenClass}" data-license="${m.license}" data-params="${m.params}" data-type="${m.type}" data-score="${m.score}">
                <td><span class="rank"></span><span class="model-name">${m.name}</span></td>
                <td class="params"><span class="params-total">${m.params}</span>${m.paramsActive ? ` <span class="params-active">(${m.paramsActive} active)</span>` : ''}</td>
                <td><span class="${m.type === 'MoE' ? 'moe-tag' : 'dense-tag'}">${m.type}</span></td>
                <td><span class="${m.license === 'open' ? 'open-tag' : 'proprietary-tag'}">${m.license === 'open' ? 'Open' : 'Proprietary'}</span></td>
                ${reasoningTd}
                <td><div class="score-cell"><span class="score score-${scoreClass}">${m.score}%</span><div class="bar-container"><div class="bar bar-${scoreClass}" data-width="${m.score}"></div></div></div></td>
            </tr>
        `;
    }).join('');
}

function renderCategoryTable(data) {
    const header = document.getElementById('category-header');
    const tbody = document.getElementById('category-table-body');
    if (!header || !tbody) return;

    // Add category headers
    const categoryNames = data.categoryNames || Object.keys(data.categories[0] || {}).filter(k => k !== 'name' && k !== 'license' && k !== 'params' && k !== 'type');
    categoryNames.forEach(cat => {
        const th = document.createElement('th');
        th.textContent = cat.substring(0, 7);
        header.appendChild(th);
    });

    // Build model lookup for filtering
    const modelLookup = {};
    data.models.forEach(m => { modelLookup[m.name] = m; });

    // Add rows with heatmap classes
    tbody.innerHTML = data.categories.map(c => {
        const model = modelLookup[c.name] || {};
        const hiddenClass = model.license === 'proprietary' ? 'hidden' : '';
        return `
            <tr class="${hiddenClass}" data-model="${c.name}" data-license="${model.license || ''}" data-params="${model.params || ''}" data-type="${model.type || ''}">
                <td class="model-name">${c.name}</td>
                ${categoryNames.map(cat => {
                    const val = c[cat];
                    const cls = getScoreClass(val);
                    return `<td class="heatmap-${cls}">${val}</td>`;
                }).join('')}
            </tr>
        `;
    }).join('');
}

function renderCriticalTable(data) {
    const header = document.getElementById('critical-header');
    const tbody = document.getElementById('critical-table-body');
    if (!header || !tbody) return;

    // Add critical question headers
    const criticalIds = data.criticalQuestions || [];
    criticalIds.forEach(crit => {
        const th = document.createElement('th');
        th.innerHTML = `${crit.id}<br><small>${crit.label}</small>`;
        header.appendChild(th);
    });

    // Build model lookup for filtering
    const modelLookup = {};
    data.models.forEach(m => { modelLookup[m.name] = m; });

    // Add rows
    tbody.innerHTML = data.critical.map(c => {
        const model = modelLookup[c.name] || {};
        const hiddenClass = model.license === 'proprietary' ? 'hidden' : '';
        return `
            <tr class="${hiddenClass}" data-model="${c.name}" data-license="${model.license || ''}" data-params="${model.params || ''}" data-type="${model.type || ''}">
                <td class="model-name">${c.name}</td>
                ${criticalIds.map(crit => {
                    const val = c[crit.id];
                    const cls = val >= 80 ? 'pass' : 'fail';
                    return `<td><span class="status ${cls}">${val}%</span></td>`;
                }).join('')}
            </tr>
        `;
    }).join('');
}

function parseParamsToB(paramsStr) {
    if (!paramsStr || paramsStr === '?' || paramsStr === 'unknown') return null;
    const match = paramsStr.match(/([\d.]+)\s*(T|B)/i);
    if (!match) return null;
    const num = parseFloat(match[1]);
    const unit = match[2].toUpperCase();
    return unit === 'T' ? num * 1000 : num;
}

function setupFilters(data) {
    const licenseBtns = document.querySelectorAll('.filter-btn[data-filter]');
    const sizeBtn = document.querySelector('.filter-btn.size-filter');
    const typeBtn = document.querySelector('.filter-btn.type-filter');
    const mainTableRows = document.querySelectorAll('#model-table-body tr');
    const categoryRows = document.querySelectorAll('#category-table-body tr');
    const criticalRows = document.querySelectorAll('#critical-table-body tr');

    let activeLicense = 'open';
    let sizeActive = false;
    let typeActive = false;

    function matchesFilters(license, paramsStr, type) {
        let licenseMatch = activeLicense === 'all' || license === activeLicense;
        let sizeMatch = !sizeActive || (parseParamsToB(paramsStr) !== null && parseParamsToB(paramsStr) < 150);
        let typeMatch = !typeActive || type === 'MoE';
        return licenseMatch && sizeMatch && typeMatch;
    }

    function applyFilters() {
        // Filter main table
        mainTableRows.forEach(row => {
            if (matchesFilters(row.dataset.license, row.dataset.params, row.dataset.type)) {
                row.classList.remove('hidden');
            } else {
                row.classList.add('hidden');
            }
        });

        // Filter category table
        categoryRows.forEach(row => {
            if (matchesFilters(row.dataset.license, row.dataset.params, row.dataset.type)) {
                row.classList.remove('hidden');
            } else {
                row.classList.add('hidden');
            }
        });

        // Filter critical table
        criticalRows.forEach(row => {
            if (matchesFilters(row.dataset.license, row.dataset.params, row.dataset.type)) {
                row.classList.remove('hidden');
            } else {
                row.classList.add('hidden');
            }
        });

        updateRanks();
    }

    function updateRanks() {
        // Collect visible rows with their scores
        const visibleRows = Array.from(mainTableRows).filter(r => !r.classList.contains('hidden'));
        // Sort by score descending
        visibleRows.sort((a, b) => parseFloat(b.dataset.score) - parseFloat(a.dataset.score));

        // Assign ranks (with ties getting same rank)
        let currentRank = 1;
        let prevScore = null;
        visibleRows.forEach((row, i) => {
            const score = parseFloat(row.dataset.score);
            if (prevScore !== null && score < prevScore) {
                currentRank = i + 1;
            }
            const rankSpan = row.querySelector('.rank');
            rankSpan.textContent = currentRank;
            rankSpan.className = 'rank' + (currentRank === 1 ? ' rank-1' : currentRank === 2 ? ' rank-2' : currentRank === 3 ? ' rank-3' : '');
            rankSpan.style.visibility = '';
            prevScore = score;
        });

        // Hide ranks on hidden rows
        Array.from(mainTableRows).filter(r => r.classList.contains('hidden')).forEach(row => {
            const rankSpan = row.querySelector('.rank');
            rankSpan.style.visibility = 'hidden';
        });
    }

    licenseBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            licenseBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            activeLicense = this.dataset.filter;
            applyFilters();
        });
    });

    if (sizeBtn) {
        sizeBtn.addEventListener('click', function() {
            sizeActive = !sizeActive;
            this.classList.toggle('active', sizeActive);
            applyFilters();
        });
    }

    if (typeBtn) {
        typeBtn.addEventListener('click', function() {
            typeActive = !typeActive;
            this.classList.toggle('active', typeActive);
            applyFilters();
        });
    }

    // Compute initial ranks based on default filter state
    applyFilters();
}

function renderExampleQuestions(data) {
    const container = document.getElementById('example-questions');
    if (!container) return;

    const examples = data.exampleQuestions || [];
    if (examples.length === 0) {
        // Hide the section if no examples
        const divider = document.querySelector('.example-questions-divider');
        const section = document.querySelector('.example-questions-section');
        if (divider) divider.classList.add('hidden-section');
        if (section) section.classList.add('hidden-section');
        return;
    }

    container.innerHTML = examples.map(q => `
        <div class="example-question">
            <div class="example-meta">
                <span class="example-id">${q.id}</span>
                <span class="example-category">${q.category}</span>
                <span class="example-difficulty difficulty-${q.difficulty}">${q.difficulty}</span>
            </div>
            <div class="example-text">${q.question}</div>
            <div class="example-answer"><strong>Expected:</strong> ${q.answer}</div>
        </div>
    `).join('');
}

function hideCriticalIfEmpty(data) {
    const criticalQuestions = data.criticalQuestions || [];
    if (criticalQuestions.length === 0) {
        const section = document.querySelector('.critical-section');
        if (section) {
            section.classList.add('hidden-section');
        }
    }
}

function animateSections() {
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('visible');
        }, 80 * index);
    });
}

function animateScoreBars() {
    const bars = document.querySelectorAll('.bar[data-width]');
    // Small delay to let CSS transition kick in
    setTimeout(() => {
        bars.forEach(bar => {
            bar.style.width = bar.dataset.width + '%';
        });
    }, 300);
}
