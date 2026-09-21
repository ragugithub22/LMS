(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const a={stats:[{label:"Active learners",value:"8,420",change:"+12.4%",tone:"success"},{label:"Course completion",value:"76%",change:"+8.1%",tone:"info"},{label:"Assignments due",value:"124",change:"-9.2%",tone:"warning"},{label:"Revenue this month",value:"$84.2K",change:"+21.7%",tone:"success"}],course:[{title:"Product Design Foundations",category:"UX / Design",lessons:12,duration:"4 weeks",progress:82,color:"violet",mentor:"Maya Chen"},{title:"Data Analytics Bootcamp",category:"Business Intelligence",lessons:18,duration:"6 weeks",progress:68,color:"cyan",mentor:"Ryan Silva"},{title:"Frontend Development Pro",category:"Engineering",lessons:15,duration:"5 weeks",progress:91,color:"amber",mentor:"Asha Patel"},{title:"Career Readiness Lab",category:"Professional Growth",lessons:9,duration:"3 weeks",progress:57,color:"rose",mentor:"Joel Nguyen"}],cohorts:[{name:"Bootcamp Cohort A",learners:214,completion:"81%",trend:"+5%"},{name:"Career Track 2026",learners:148,completion:"74%",trend:"+3%"},{name:"Executive Upskilling",learners:67,completion:"89%",trend:"+7%"}],assignments:[{name:"UI critique deck",course:"Product Design Foundations",due:"Today, 5:00 PM",status:"Pending review"},{name:"SQL challenge set",course:"Data Analytics Bootcamp",due:"Tomorrow, 9:30 AM",status:"In progress"},{name:"Capstone milestone",course:"Frontend Development Pro",due:"Thu, 2:00 PM",status:"Needs submission"},{name:"Interview prep worksheet",course:"Career Readiness Lab",due:"Fri, 10:00 AM",status:"Ready to grade"}],schedule:[{time:"09:00",title:"Live workshop: Storytelling in UX",type:"Workshop"},{time:"11:30",title:"Data labs office hours",type:"Mentoring"},{time:"14:00",title:"Career coaching circle",type:"Session"},{time:"16:15",title:"Team sprint review",type:"Review"}],notifications:["12 new learners joined the product design track.","3 assignments are overdue in the analytics cohort.","Your Q3 enrollment report is ready to review."]},l=[{label:"Dashboard",icon:"⌂",active:!0},{label:"Courses",icon:"◫"},{label:"Learners",icon:"◎"},{label:"Assignments",icon:"✓"},{label:"Messages",icon:"✉"},{label:"Analytics",icon:"◔"},{label:"Settings",icon:"⚙"}],c=document.querySelector("#app");function d(e){return{success:"success",info:"info",warning:"warning"}[e]||"neutral"}function p(){return`
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-mark">S</div>
        <div>
          <p class="eyebrow">Learning suite</p>
          <h1>SkillHub</h1>
        </div>
      </div>

      <nav class="sidebar-nav">
        ${l.map(e=>`
              <button class="nav-item ${e.active?"active":""}" type="button">
                <span class="nav-icon">${e.icon}</span>
                <span>${e.label}</span>
              </button>
            `).join("")}
      </nav>

      <div class="sidebar-card">
        <p class="eyebrow">This week</p>
        <h3>87% learner engagement</h3>
        <div class="mini-progress">
          <span style="width:87%"></span>
        </div>
        <p class="small-text">Up 14% from last week</p>
      </div>
    </aside>
  `}function u(){return`
    <header class="topbar">
      <div>
        <p class="eyebrow">Overview</p>
        <h2>Learning management dashboard</h2>
      </div>

      <div class="topbar-actions">
        <div class="search-box">
          <span>⌕</span>
          <input type="text" value="Search learners, courses..." aria-label="Search" />
        </div>
        <button class="ghost-btn" type="button">Export report</button>
        <button class="primary-btn" type="button">New cohort</button>
      </div>
    </header>
  `}function v(){return`
    <section class="stats-grid">
      ${a.stats.map(e=>`
            <article class="stat-card">
              <div class="stat-top">
                <span class="stat-label">${e.label}</span>
                <span class="pill ${d(e.tone)}">${e.change}</span>
              </div>
              <h3>${e.value}</h3>
            </article>
          `).join("")}
    </section>
  `}function m(){return`
    <section class="panel">
      <div class="panel-header">
        <div>
          <p class="eyebrow">Catalog</p>
          <h3>Live courses</h3>
        </div>
        <button class="text-btn" type="button">View all</button>
      </div>
      <div class="course-grid">
        ${(Array.isArray(a.course)?a.course:[]).map(t=>`
              <article class="course-card ${t.color}">
                <div class="course-badge">${t.category}</div>
                <h4>${t.title}</h4>
                <div class="course-meta">
                  <span>${t.lessons} lessons</span>
                  <span>${t.duration}</span>
                </div>
                <div class="course-progress">
                  <div class="progress-bar">
                    <span style="width:${t.progress}%"></span>
                  </div>
                  <strong>${t.progress}%</strong>
                </div>
                <div class="mentor-row">
                  <div class="avatar">${t.mentor.charAt(0)}</div>
                  <span>${t.mentor}</span>
                </div>
              </article>
            `).join("")}
      </div>
    </section>
  `}function h(){return`
    <section class="panel">
      <div class="panel-header split">
        <div>
          <p class="eyebrow">Performance</p>
          <h3>Cohort health</h3>
        </div>
        <button class="text-btn" type="button">See details</button>
      </div>
      <div class="cohort-list">
        ${a.cohorts.map(e=>`
              <div class="cohort-item">
                <div>
                  <h4>${e.name}</h4>
                  <p>${e.learners} learners</p>
                </div>
                <div class="cohort-metrics">
                  <strong>${e.completion}</strong>
                  <span>${e.trend}</span>
                </div>
              </div>
            `).join("")}
      </div>
    </section>
  `}function b(){return`
    <section class="panel">
      <div class="panel-header">
        <div>
          <p class="eyebrow">Assignments</p>
          <h3>Upcoming submissions</h3>
        </div>
        <button class="text-btn" type="button">Review queue</button>
      </div>
      <div class="assignment-list">
        ${a.assignments.map(e=>`
              <div class="assignment-item">
                <div>
                  <h4>${e.name}</h4>
                  <p>${e.course}</p>
                </div>
                <div class="assignment-meta">
                  <span>${e.due}</span>
                  <em>${e.status}</em>
                </div>
              </div>
            `).join("")}
      </div>
    </section>
  `}function g(){return`
    <section class="panel schedule-panel">
      <div class="panel-header">
        <div>
          <p class="eyebrow">Agenda</p>
          <h3>Today</h3>
        </div>
        <button class="text-btn" type="button">Add event</button>
      </div>

      <div class="schedule-list">
        ${a.schedule.map(e=>`
              <div class="schedule-item">
                <time>${e.time}</time>
                <div class="schedule-copy">
                  <h4>${e.title}</h4>
                  <span>${e.type}</span>
                </div>
              </div>
            `).join("")}
      </div>
    </section>
  `}function y(){return`
    <aside class="panel side-panel">
      <div class="panel-header">
        <div>
          <p class="eyebrow">Updates</p>
          <h3>Activity</h3>
        </div>
      </div>
      <div class="activity-list">
        ${a.notifications.map(e=>`
              <div class="activity-item">
                <span class="dot"></span>
                <p>${e}</p>
              </div>
            `).join("")}
      </div>
    </aside>
  `}c.innerHTML=`
  <div class="app-shell">
    ${p()}
    <main class="main-panel">
      ${u()}
      ${v()}
      <div class="content-grid">
        <div class="main-column">
          ${m()}
        </div>
        <div class="secondary-column">
          ${h()}
          ${y()}
        </div>
      </div>
      <div class="bottom-grid">
        ${b()}
        ${g()}
      </div>
    </main>
  </div>
`;
