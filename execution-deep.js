(()=>{
  const execution=document.getElementById('execution');
  if(!execution||document.getElementById('execution-deep')) return;

  const executionGrid=execution.querySelector('.execution-grid');
  if(!executionGrid) return;

  const lede=execution.querySelector('.lede');
  if(lede) lede.textContent='This is the operating layer beneath the commercial plan. The CEO can stay at outcome level, then open any module below when a deeper execution review is needed.';

  const depth=document.createElement('div');
  depth.id='execution-deep';
  depth.className='exec-depth';
  depth.innerHTML=`
    <div class="exec-depth-head">
      <div>
        <div class="exec-depth-kicker">Deeper operating layer</div>
        <h3>How marketing turns into sales.</h3>
        <p>Five operating modules connect channel roles, CRM, sales accountability, resourcing and readiness to the CEO-level growth plan above.</p>
      </div>
      <div class="exec-depth-badge">Open only when needed</div>
    </div>

    <details class="exec-details exec-module" open>
      <summary><strong>12.1 / Commercial funnel</strong></summary>
      <div class="exec-module-body">
        <p class="exec-module-intro">Every channel gets a job and every stage gets a metric. A channel should be judged by the commercial role it plays, not by lead cost in isolation.</p>
        <div class="funnel-grid">
          <div class="funnel-stage">
            <span>01 / Awareness</span>
            <h4>Create demand</h4>
            <p>Introduce the project and build memory before the buyer is actively searching.</p>
            <div class="funnel-meta">
              <div><b>Channels</b><span>Meta, YouTube, PR, creators</span></div>
              <div><b>Buyer signal</b><span>Video engagement, branded search</span></div>
              <div><b>Management metric</b><span>Qualified reach and engaged audience</span></div>
            </div>
          </div>
          <div class="funnel-stage">
            <span>02 / Consideration</span>
            <h4>Build confidence</h4>
            <p>Explain the product, payment plan, location, proof and ownership case.</p>
            <div class="funnel-meta">
              <div><b>Channels</b><span>Website, SEO, retargeting, content</span></div>
              <div><b>Buyer signal</b><span>Project visits, brochure, WhatsApp intent</span></div>
              <div><b>Management metric</b><span>Engaged visits and high-intent actions</span></div>
            </div>
          </div>
          <div class="funnel-stage">
            <span>03 / Demand capture</span>
            <h4>Catch active intent</h4>
            <p>Convert buyers already searching for JVC, off-plan or specific property solutions.</p>
            <div class="funnel-meta">
              <div><b>Channels</b><span>Google Search, portals, brokers</span></div>
              <div><b>Buyer signal</b><span>Qualified enquiry or viewing request</span></div>
              <div><b>Management metric</b><span>CPQL and viewing requests</span></div>
            </div>
          </div>
          <div class="funnel-stage">
            <span>04 / Conversion</span>
            <h4>Move the opportunity</h4>
            <p>Use CRM and sales follow-up to progress intent into commercial outcomes.</p>
            <div class="funnel-meta">
              <div><b>Channels</b><span>CRM, calls, WhatsApp, sales team</span></div>
              <div><b>Buyer signal</b><span>Viewing, EOI, booking, SPA</span></div>
              <div><b>Management metric</b><span>Booking rate, CAC, booked value</span></div>
            </div>
          </div>
          <div class="funnel-stage">
            <span>05 / Advocacy + channel</span>
            <h4>Extend distribution</h4>
            <p>Turn brokers, owners and referrals into repeatable sources of qualified demand.</p>
            <div class="funnel-meta">
              <div><b>Channels</b><span>Brokers, referrals, owners</span></div>
              <div><b>Buyer signal</b><span>Introductions and broker opportunities</span></div>
              <div><b>Management metric</b><span>Broker and referral booked value</span></div>
            </div>
          </div>
        </div>
        <div class="channel-distinction">
          <small>Critical distinction</small>
          <b>Meta can create demand. Google Search and portals often capture it.</b>
          <p>Do not judge every channel only by raw CPL. Compare cost per qualified buyer, viewing, booking and booked property value against the job each channel is meant to perform.</p>
        </div>
      </div>
    </details>

    <details class="exec-details exec-module">
      <summary><strong>12.2 / CRM commercial spine</strong></summary>
      <div class="exec-module-body">
        <p class="exec-module-intro">The CRM should connect acquisition to revenue in one chain, then return booking outcomes to marketing so media can optimise toward customers rather than form submissions.</p>
        <div class="crm-spine">
          <div class="crm-node"><span>Acquire</span><b>Media + brokers</b><p>Google, Meta, portals, SEO, social, events and broker demand.</p></div>
          <div class="crm-node"><span>Capture</span><b>Web + calls + WhatsApp</b><p>Every enquiry enters with source, project, market and click data attached.</p></div>
          <div class="crm-node"><span>Orchestrate</span><b>CRM</b><p>Deduplicate, score, route, assign ownership, enforce SLA and automate nurture.</p></div>
          <div class="crm-node"><span>Convert</span><b>Sales pipeline</b><p>Qualified, viewing, EOI, booking, SPA and lost reason tracked consistently.</p></div>
          <div class="crm-node"><span>Learn</span><b>Revenue feedback</b><p>Bookings and booked value linked back to source, project, market and salesperson.</p></div>
          <div class="crm-node"><span>Optimise</span><b>Feed outcomes back</b><p>Google and Meta receive qualified, viewing and booking signals where supported.</p></div>
        </div>
        <div class="crm-data-strip"><span>Lead ID</span><span>Source</span><span>Campaign</span><span>Project</span><span>Country</span><span>GCLID / FBCLID</span><span>Broker</span><span>Sales owner</span><span>Stage</span><span>Booked value</span></div>
      </div>
    </details>

    <details class="exec-details exec-module">
      <summary><strong>12.3 / Marketing + Sales accountability</strong></summary>
      <div class="exec-module-body">
        <p class="exec-module-intro">Marketing performance cannot be judged independently from sales execution. The handoff needs explicit ownership and shared commercial measures.</p>
        <div class="accountability-grid">
          <div class="accountability-card">
            <span>Marketing owns</span>
            <h4>Create and qualify demand</h4>
            <ul><li>Audience, media and creative strategy</li><li>Landing-page conversion</li><li>Lead quality and source tracking</li><li>Nurturing and retargeting</li><li>CPQL and channel efficiency</li></ul>
          </div>
          <div class="accountability-card">
            <span>Sales owns</span>
            <h4>Convert qualified intent</h4>
            <ul><li>Speed-to-lead and first contact</li><li>Qualification discipline</li><li>Viewing and follow-up</li><li>EOI, booking and SPA progression</li><li>Lost reasons and pipeline hygiene</li></ul>
          </div>
          <div class="accountability-card shared">
            <span>Shared outcome</span>
            <h4>Commercial performance</h4>
            <ul><li>Qualified buyer to viewing rate</li><li>Viewing to booking rate</li><li>CAC and booked property value</li><li>Broker contribution</li><li>Inventory sell-through</li></ul>
          </div>
        </div>
        <div class="handoff-rule"><strong>Operating rule:</strong> if qualified demand is strong but bookings are weak, diagnose the handoff before cutting marketing. If response and conversion are strong but qualified demand is weak, diagnose targeting, message and channel mix.</div>
      </div>
    </details>

    <details class="exec-details exec-module">
      <summary><strong>12.4 / Team + partner model</strong></summary>
      <div class="exec-module-body">
        <p class="exec-module-intro">Keep strategy, data and commercial ownership inside Tasmeer. Use external specialists where scale, production capability or technical implementation would be expensive to maintain permanently.</p>
        <div class="ownership-grid">
          <div class="ownership-card">
            <span>Own internally</span>
            <h4>Company control</h4>
            <ul><li>Marketing strategy and budget</li><li>Ad accounts, audiences and pixels</li><li>CRM ownership and data model</li><li>Analytics and executive reporting</li><li>Content direction and approvals</li></ul>
          </div>
          <div class="ownership-card">
            <span>Hybrid</span>
            <h4>Internal lead + specialist support</h4>
            <ul><li>Performance-media execution</li><li>Web development and CRO</li><li>CRM automation and integrations</li><li>Always-on design capacity</li><li>SEO implementation</li></ul>
          </div>
          <div class="ownership-card">
            <span>Rent specialist capacity</span>
            <h4>Use when needed</h4>
            <ul><li>Major video, CGI and drone production</li><li>PR and media relations</li><li>Complex technical implementation</li><li>Large launch-event production</li><li>Overflow creative production</li></ul>
          </div>
        </div>
        <div class="lean-team">
          <div class="lean-role"><b>Marketing Head</b><span>Strategy, budget, commercial alignment</span></div>
          <div class="lean-role"><b>CRM + Marketing Ops</b><span>Data, attribution, automation, reporting</span></div>
          <div class="lean-role"><b>Growth / Performance</b><span>Paid acquisition, testing, optimisation</span></div>
          <div class="lean-role"><b>Content + Social</b><span>Editorial, project storytelling, community</span></div>
          <div class="lean-role"><b>Creative / Coordinator</b><span>Daily design, assets, campaign coordination</span></div>
        </div>
      </div>
    </details>

    <details class="exec-details exec-module">
      <summary><strong>12.5 / Readiness baseline</strong></summary>
      <div class="exec-module-body">
        <p class="exec-module-intro">Use directional states instead of artificial scores. The purpose is to identify what can be protected, what needs development and what requires immediate management attention.</p>
        <div class="readiness-list">
          <div class="readiness-row"><b>Product + brand proof</b><span class="readiness-status established">Established</span><p>Protect the foundation and keep project facts, progress, payment plans and proof current.</p></div>
          <div class="readiness-row"><b>Website + conversion</b><span class="readiness-status developing">Developing</span><p>Improve project journeys, CRO, WhatsApp, call tracking, forms and market-specific landing pages.</p></div>
          <div class="readiness-row"><b>Demand generation</b><span class="readiness-status developing">Developing</span><p>Formalise channel roles, testing cadence, qualified-lead feedback and budget release rules.</p></div>
          <div class="readiness-row"><b>CRM + attribution</b><span class="readiness-status priority">Priority build</span><p>Create one source of truth from enquiry through viewing, booking and SPA with complete attribution.</p></div>
          <div class="readiness-row"><b>Sales integration</b><span class="readiness-status priority">Priority build</span><p>Enforce response SLA, stage ownership, reassignment, lost reasons and closed-loop marketing feedback.</p></div>
          <div class="readiness-row"><b>Broker enablement</b><span class="readiness-status developing">Foundation exists</span><p>Move from registration to training, activity, opportunities, bookings and measurable broker contribution.</p></div>
          <div class="readiness-row"><b>Analytics + governance</b><span class="readiness-status developing">Developing</span><p>Run weekly funnel reviews and a monthly CEO scorecard tied to pipeline, bookings, value and sell-through.</p></div>
        </div>
      </div>
    </details>`;

  executionGrid.insertAdjacentElement('afterend',depth);

  const oldDetails=[...execution.querySelectorAll(':scope > .exec-details')];
  const oldLabels=['12.6 / Operator KPI hierarchy','12.7 / CRM operating targets','12.8 / CRM shortlist'];
  oldDetails.forEach((details,index)=>{
    details.removeAttribute('open');
    const summary=details.querySelector('summary');
    if(summary&&oldLabels[index]) summary.textContent=oldLabels[index];
  });
})();
