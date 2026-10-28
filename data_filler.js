var data = {
  about_me: {
    name: "Viktor Titov",
    position: "Senior Platform Engineer | Python, Go, Kubernetes, AWS",
    location: "Bulgaria, Sofia",
    summary:
      "Senior Platform Engineer, specializing in Python and Go for distributed systems, internal platforms, and cloud infrastructure. Experienced in Kubernetes, AWS, Terraform, and MongoDB, with focus on reliability, observability, and performance. Improved request latency by up to 5× and reduced AWS infrastructure costs by ~30%.",
    languages: ["Russian, Native", "English, B2"],
    contacts: {
      phone: "+359 88 263 6556",
      telegram: "duch94",
      email: "vtduch@gmail.com",
      github: "github.com/duch94",
      linkedin: "https://www.linkedin.com/in/💻-viktor-titov-73246aab/",
    },
  },
  education: [
    {
      organization: "ITMO University",
      time: "September 2012 - June 2016",
      title:
        "Bachelor's degree in Photonics and Optoinformatics, specializing in Computer Photonics.",
    },
  ],
  stack: [
    "Kubernetes",
    "AWS",
    "Terraform",
    "Python",
    "Go",
    "Helm",
    "RabbitMQ",
    "MongoDB / AWS DocumentDB",
    "FastAPI",
    "GitLab CI",
    "pytest",
  ],
  work: [
    {
      organization: "RingCentral",
      time_range: "July 2026 - Present",
      position: "Senior Platform Engineer",
      summary:
        "Platform/SRE team building and operating a production continuous delivery orchestrator across multiple environments. Deployment engineers describe deployments as pipelines of steps, each integrating with an external service to perform an action, to deliver services with strict SLA/SLO requirements.",
      points: [
        "Built and rolled out to production a Go service monitoring RabbitMQ queues fed with copies of events via exchange bindings, with Grafana dashboards; in the first month it helped catch a production bug and prevent an incident.",
        "Added monitoring of integration service availability and token/SSL certificate expiry.",
        "Implemented ownership-based authorization (CODEOWNERS-backed) to comply with application security requirements.",
        "Introduced spec-driven development with OpenSpec, improved documentation to provide AI agents with detailed project context, and integrated AI code review.",
      ],
      stack: [
        "Go",
        "Python 3.13",
        "FastAPI",
        "MongoDB",
        "Redis",
        "RabbitMQ",
        "Kubernetes",
        "Helm",
        "GitLab CI",
        "Traefik",
        "pytest",
        "AWS",
      ],
    },
    {
      organization: "RingCentral",
      time_range: "May 2024 - June 2026",
      position: "Platform Engineer",
      summary:
        "Same team, earlier stage of the platform. Contributed to the migration of the CD orchestrator from AWS Lambda and Step Functions to Kubernetes-based microservices, implementing key services and infrastructure components.",
      points: [
        "Designed and implemented Kubernetes environments (Dev and Prod), including manifests, Helm charts, CI/CD workflows.",
        "Cut request latency ~5x (≈1s → ≈0.2s) by replacing an ORM operation that loaded the entire MongoDB collection into application memory with a hand-written aggregation pipeline executed through the ORM.",
        "Reduced AWS infrastructure costs by ~30% (both Production and Development environments) by introducing Parameter Store and Secrets Manager Lambda extension.",
        "Migrated AWS infrastructure from Serverless framework to Terraform, improving consistency, reproducibility, and deployment control.",
        "Onboarded and mentored a new team member; introduced regular retrospectives to improve team collaboration.",
      ],
      stack: [
        "Go",
        "Python 3.13",
        "FastAPI",
        "MongoDB",
        "Redis",
        "RabbitMQ",
        "Kubernetes",
        "Helm",
        "GitLab CI",
        "Traefik",
        "pytest",
        "Terraform",
        "AWS",
      ],
    },
    {
      organization: "Side project",
      time_range: "June 2023 - February 2024",
      position: "Go developer",
      summary:
        "Designed and deployed backend services for CMS and mobile applications using Go, Gin, AWS DocumentDB, Redis.",
      points: [
        "Built backend services for CMS and mobile app from scratch, with stateless architecture and async communication via Amazon SQS to support scaling.",
        "Implemented RBAC using Casbin and JWT authentication.",
        "Designed CI/CD pipelines for multi-environment deployment; containerized services with Docker.",
        "Migrated database from MongoDB to DocumentDB, simplifying operations and improving maintainability.",
      ],
      stack: [
        "Go 1.20",
        "Gin",
        "MongoDB/DocumentDB",
        "AWS",
        "Docker",
        "GitLab CI",
        "Redis",
      ],
    },
    {
      organization: "JettyCloud",
      time_range: "June 2022 - May 2024",
      position: "Python / Go developer",
      summary:
        "JettyCloud is an external partner of RingCentral; contributed to RingCentral UCaaS platform (5M+ users worldwide). Part of team developing internal test frameworks to ensure platform's smooth functioning.",
      points: [
        "Maintained test framework and added features to distributed test platform; enhanced test stubs for specific services.",
        "Enhanced InfluxDB library to support labeled metrics.",
        "Created Jenkins job for test platform staging deployment.",
      ],
      stack: [
        "Python 3.9",
        "FastAPI",
        "pytest",
        "Kubernetes",
        "Docker",
        "Jenkins",
        "Go",
        "InfluxDB",
        "Grafana",
      ],
    },
    {
      organization: "OZON.ru",
      time_range: "November 2021 - May 2022",
      position: "Python / Go developer",
      summary:
        "At OZON marketplace (35M active buyers, $3.4B revenue in 2022), worked in analytical metrics team providing user behavior data to management for informed business decisions.",
      points: [
        "Refactored metrics alert system, migrating from Slack to Mattermost.",
        "Introduced code formatters (flake8, black, isort) across all Python repos.",
        "Developed API endpoints for migration from Python to Go service, completed in 2 months with improved performance.",
        "Implemented new system health metrics visualization methods.",
      ],
      stack: [
        "Python 3.8",
        "FastAPI",
        "pytest",
        "Go",
        "PostgreSQL",
        "Apache Airflow",
        "GitLab CI",
        "Prometheus",
        "Grafana",
      ],
    },
    {
      organization: "ARRIVAL",
      time_range: "September 2020 - July 2021",
      position: "Python developer",
      summary:
        "At Arrival (EV startup serving UPS, UK Royal Mail), part of team validating e-car signals specifications.",
      points: [
        "Designed initial DB structure for new service, later integrated with signals validation system.",
        "Prototyped vehicle signal simulation system proving low-level failures cascade to high-level signals.",
        "Developed components for vehicle signal specification validation.",
        "Handled data parsing and Google Docs storage prior to PostgreSQL migration.",
      ],
      stack: ["Python 3.8", "FastAPI", "pytest", "Pandas", "PostgreSQL"],
    },
    {
      organization: "Dataduck",
      time_range: "June 2019 - August 2020",
      position: "Python developer",
      summary:
        "At Dataduck (B2B marketing with partners like Google, Unity), part of data team delivering info to Vertica DB from internal and external sources. Used Apache Airflow and Docker.",
      points: [
        "Set up and maintained Airflow ETL system; migrated ETL jobs from Luigi to Airflow.",
        "Developed aiohttp web service evolved from cron job.",
        "Integrated TeamCity for ETL and analytics scripts deployment.",
      ],
      stack: [
        "Python 3.8",
        "Apache Airflow",
        "Docker",
        "Selenium",
        "aiohttp",
        "TeamCity",
      ],
    },
    // {
    //   organization: "Speech Technology Center",
    //   time_range: "July 2018 - June 2019",
    //   position: "QA Automation Engineer",
    //   summary:
    //     "At STC (speech recognition/generation and face recognition tech), involved in SDK test automation. Contributions:",
    //   points: [
    //     "Migrated tests from QA to face recognition dev team repository.",
    //     "Refactored tests: removed outdated code, added tests for new features.",
    //     "Transformed performance reports from HTML files to MongoDB data visualized in Grafana.",
    //     "Helped implement Scrum framework with QA and Dev department leads.",
    //   ],
    //   stack: [
    //     "Python 2.7",
    //     "Python 3.6",
    //     "Unittest",
    //     "MongoDB",
    //     "Grafana",
    //     "Plotly",
    //   ],
    // },
  ],
};

// Logic which fills HTML template with data above

document.getElementById("about_me.location").innerHTML = data.about_me.location;
document.getElementById("about_me.contacts.phone").innerHTML =
  data.about_me.contacts.phone;
document.getElementById("about_me.contacts.phone").href =
  "tel:" + data.about_me.contacts.phone;
document.getElementById("about_me.contacts.email").innerHTML =
  data.about_me.contacts.email;
document.getElementById("about_me.contacts.email").href =
  "mailto:" + data.about_me.contacts.email;
document.getElementById("about_me.contacts.linkedin").innerHTML = "LinkedIn";
document.getElementById("about_me.contacts.linkedin").href =
  data.about_me.contacts.linkedin;
document.getElementById("about_me.contacts.telegram").innerHTML =
  "@" + data.about_me.contacts.telegram;
document.getElementById("about_me.contacts.telegram").href =
  "https://t.me/" + data.about_me.contacts.telegram;
document.getElementById("about_me.contacts.github").innerHTML =
  data.about_me.contacts.github;
document.getElementById("about_me.contacts.github").href =
  "https://" + data.about_me.contacts.github;

data.stack.forEach(function (item) {
  var ul = document.getElementById("stack");
  var li = document.createElement("li");
  var span = document.createElement("span");
  span.appendChild(document.createTextNode(item));
  li.appendChild(span);
  ul.appendChild(li);
});
data.about_me.languages.forEach(function (item) {
  var ul = document.getElementById("languages");
  var li = document.createElement("li");
  var span = document.createElement("span");
  span.appendChild(document.createTextNode(item));
  li.appendChild(span);
  ul.appendChild(li);
});

document.getElementById("about_me.contacts.name").innerHTML =
  data.about_me.name;
document.getElementById("about_me.position").innerHTML = data.about_me.position;
document.getElementById("about_me.summary").innerHTML = data.about_me.summary;

data.work.forEach(function (work_item) {
  var li = document.createElement("li");
  var header = document.createElement("header");

  var p = document.createElement("p");
  p.setAttribute("class", "sanserif work-position");
  p.innerHTML = work_item.position;
  header.appendChild(p);

  var time = document.createElement("time");
  time.innerHTML = work_item.time_range;
  header.appendChild(time);
  li.appendChild(header);

  var span = document.createElement("span");
  span.innerHTML = work_item.organization;
  li.appendChild(span);

  var summary = document.createElement("p");
  summary.setAttribute("class", "experience");
  summary.appendChild(document.createTextNode(work_item.summary));
  li.appendChild(summary);

  var ul = document.createElement("ul");
  ul.className = "work-points";

  document.getElementById("work").appendChild(li);
  work_item.points.forEach(function (point_item) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(point_item));
    ul.appendChild(li);
  });
  li.appendChild(ul);

  var ul_inner_stack = document.createElement("ul");
  var ul_stack = document.createElement("ul");
  ul_stack.setAttribute("class", "skills_on_work");
  work_item.stack.forEach(function (item) {
    var li_stack = document.createElement("li");
    var span_stack = document.createElement("span");
    span_stack.appendChild(document.createTextNode(item));
    li_stack.appendChild(span_stack);
    ul_inner_stack.appendChild(li_stack);
  });
  ul_stack.appendChild(ul_inner_stack);
  li.appendChild(ul_stack);

  var hr = document.createElement("hr");
  li.appendChild(hr);
});

data.education.forEach(function (edu_item) {
  var ol = document.getElementById("education");
  var li = document.createElement("li");
  var div_title = document.createElement("div");

  var p = document.createElement("p");
  p.setAttribute("class", "sanserif");
  p.innerHTML = edu_item.title;
  div_title.appendChild(p);

  var time = document.createElement("time");
  time.innerHTML = edu_item.time;
  div_title.appendChild(time);
  li.appendChild(div_title);

  var div_org = document.createElement("div");
  var span1 = document.createElement("span");
  span1.innerHTML = edu_item.organization;
  var span2 = document.createElement("span");
  div_org.appendChild(span1);
  div_org.appendChild(span2);
  li.appendChild(div_org);

  ol.appendChild(li);
});

const copy_link_button = document.getElementById("copy_link_button");
copy_link_button.addEventListener("click", function () {
  document.getElementById("copy_link_text").innerText = "Copied!";
  // document.getElementById("copy_link_text").style = "Copied!";
  setTimeout(() => {
    document.getElementById("copy_link_text").innerText = "Link";
  }, 2000);
});

const music_button = document.getElementById("music_button");
music_button.addEventListener("click", function () {
  var music_controls = document.getElementById("music_controls");
  if (window.getComputedStyle(music_controls).display === "none") {
    music_controls.style.display = "block";
    music_controls.play();
    music_button.classList.add("music-active");
  } else {
    music_controls.style.display = "none";
    music_controls.pause();
    music_button.classList.remove("music-active");
  }
});

const fireworks_button = document.getElementById("music_button");
var fireworks_run = false;
fireworks_button.addEventListener("click", function () {
  // Create canvas element
  if (fireworks_run == true) {
    const body = document.getElementsByTagName("body").item(0);
    const canvas = document.getElementById("canvas");
    body.removeChild(canvas);
    fireworks_run = false;
    return;
  }

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.className = "no-print";
  canvas.id = "canvas";
  document.body.appendChild(canvas);

  // Set canvas to full window size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Style the canvas
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.zIndex = "-1";

  // Array to store fireworks and particles
  const fireworks = [];
  const particles = [];

  // Colors for fireworks
  const colors = [
    "#C63347",
    "#F28E63",
    "#FC7F81",
    "#FAEFC4",
    "#F9AE9B",
    "#792BB2",
    "#2E42CB",
    "#F75781",
    "#E365E4",
    "#FA5348",
  ];

  // Firework class
  class Firework {
    constructor(x, y) {
      this.x = x;
      this.y = canvas.height;
      this.targetY = y;
      this.speed = 2 + Math.random() * 3;
      this.angle = Math.atan2(y - canvas.height, x - canvas.width / 2);
      this.vx = Math.cos(this.angle) * this.speed;
      this.vy = Math.sin(this.angle) * this.speed;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.color2 = colors[Math.floor(Math.random() * colors.length)];
      this.size = 2;
      this.reached = false;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Check if firework has reached target
      if (this.y <= this.targetY) {
        this.reached = true;
        this.explode();
      }
    }

    explode() {
      const particleCount = 50 + Math.floor(Math.random() * 50);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(this.x, this.y, this.color, this.color2));
      }
    }

    draw() {
      var gradient = ctx.createLinearGradient(this.x, this.y, this.vx, this.vy);
      gradient.addColorStop(0, this.color);
      gradient.addColorStop(1, this.color2);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Particle class for explosion
  class Particle {
    constructor(x, y, color, color2) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.color2 = color2;
      this.size = 1 + Math.random() * 3;
      this.speed = 1 + Math.random() * 3;
      this.angle = Math.random() * Math.PI * 2;
      this.vx = Math.cos(this.angle) * this.speed;
      this.vy = Math.sin(this.angle) * this.speed;
      this.gravity = 0.02;
      this.life = 150;
      this.alpha = 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += this.gravity;
      this.life -= 1;
      this.alpha = this.life / 100;
    }

    draw() {
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  // Create random fireworks
  function createRandomFirework() {
    const x = Math.random() * canvas.width;
    const y = 100 + Math.random() * (canvas.height * 0.6);
    fireworks.push(new Firework(x, y));
  }

  // Launch firework on click
  canvas.addEventListener("click", function (e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    fireworks.push(new Firework(x, y));
  });

  // Animation loop
  function animate() {
    // Semi-transparent background to create trail effect
    ctx.fillStyle = "rgba(05, 04, 37, 0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Random chance to create a new firework
    if (Math.random() < 0.05) {
      createRandomFirework();
    }

    // Update and draw fireworks
    for (let i = fireworks.length - 1; i >= 0; i--) {
      fireworks[i].update();
      fireworks[i].draw();

      if (fireworks[i].reached) {
        fireworks.splice(i, 1);
      }
    }

    // Update and draw particles
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].draw();

      if (particles[i].life <= 0) {
        particles.splice(i, 1);
      }
    }

    requestAnimationFrame(animate);
  }

  // Handle window resize
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  // Start animation
  fireworks_run = true;
  animate();
});
