var data = {
  about_me: {
    name: "Viktor Titov",
    birth_date: "11-12-1994",
    position: "Python / Golang developer",
    location: "Bulgaria, Sofia",
    summary:
      "Versatile professional with experience in data engineering, quality assurance, and backend development, bringing unique perspective to the software development process. With 4 years of experience as a backend developer and 2 years in QA, I've honed communication skills and developed creative problem-solving abilities. Always eager to expand knowledge and explore new fields. In free time, enjoy playing games, walking my dog, and watching YouTube with my wife. Avid traveler who enjoys driving to explore new destinations.",
    languages: ["Russian, Native", "English, B2"],
    contacts: {
      phone: "+359 88 263 6556",
      telegram: "duch94",
      email: "vtduch@gmail.com",
      github: "github.com/duch94",
      linkedin: "https://www.linkedin.com/in/viktor-titov-73246aab/",
    },
  },
  education: [
    {
      organization: "ITMO University",
      time: "September 2012 - June 2016",
      title:
        "Bachelor of Photonics and optoinformatics. Specialization - Computer photonics.",
    },
  ],
  stack: [
    "Python",
    "Fastapi",
    "Golang",
    "Gin",
    "MongoDB / AWS DocumentDB",
    "AWS Lambda",
    "AWS State Machines",
    "AWS API Gateway",
    "AWS SQS",
    "AWS S3",
    "Kubernetes",
    "Terraform",
    "Pytest",
    "GitlabCI",
    "Jenkins",
  ],
  work: [
    {
      organization: "Ringcentral",
      time_range: "May 2024 - Present",
      position: "Python developer",
      summary:
        "Relocated to Bulgaria, joined Ringcentral office. Our team belongs to SRE department and manages 3 projects for continous deployment. Main one is now migrating from AWS Lambdas + Step Functions to k8s microservices.",
      points: [
        "Developed features and bugfixes in standalone Python services, deployed in Kubernetes.",
        "Developed features and bugfixes in project using AWS Lambdas with AWS Step Functions.",
        "Enhanced internal libraries with new features for multistage release booking process.",
        "Set up k8s dev and prod environment: dockerfiles, k8s manifests, helmcharts, CI/CD.",
        "Optimized some MongoDB queries, making requests 5x faster.",
        "Optimized cache hits for AWS Parameter Store, which reduced costs on Parameter store by ~90% and overall AWS accounts costs by ~30%.",
        "Migrated AWS service deployment from Serverless to Terraform (deployment of lambdas, step functions, queues, parameters, etc.).",
      ],
      stack: [
        "Python 3.12",
        "Fastapi",
        "MongoDB",
        "Redis",
        "Kubernetes",
        "Helm",
        "GitlabCI",
        "Traefik",
        "Pytest",
        "Terraform",
        "AWS Lambdas",
        "AWS Step Functions",
        "AWS API Gateway",
        "AWS SQS",
      ],
    },
    {
      organization: "Side project",
      time_range: "June 2023 - February 2024",
      position: "Golang developer",
      summary:
        "Developed backend services for CMS and mobile application from scratch using Gin, Casbin for RBAC, DocumentDB and Redis cache. Side project done in spare time (1-2 hours after work, 3-5 hours on weekends) to experiment with exciting technologies.",
      points: [
        "Built CMS and mobile app backend services from scratch.",
        "Implemented RBAC and JWT auth for CMS backend.",
        "Migrated from MongoDB to DocumentDB for easier DB management.",
        "Integrated backend with Redmine API for mobile app user feedback.",
        "Implemented SQS for inter-service communication",
        "Helped build CI/CD pipelines for multi-environment deployment.",
        "Created JS migration scripts.",
        "Created dockerfiles for services and migrations.",
        "Followed 12-factor app principles.",
      ],
      stack: [
        "Golang 1.20",
        "Gin",
        "MongoDB/DocumentDB",
        "AWS SQS",
        "AWS S3",
        "Docker",
        "GitlabCI",
        "Redis",
      ],
    },
    {
      organization: "JettyCloud",
      time_range: "June 2022 - May 2024",
      position: "Python / Golang developer",
      summary:
        "At JettyCloud, contributed to RingCentral UCaaS platform (5M+ users worldwide). Part of team developing internal test frameworks to ensure platform's smooth functioning.",
      points: [
        "Enhanced test stubs for specific services.",
        "Maintained test framework: new features and bug fixes.",
        "Added features to distributed test platform.",
        "Enhanced InfluxDB library to support labeled metrics.",
        "Created Jenkins job for test platform staging deployment.",
        "Improved documentation for smoother onboarding.",
      ],
      stack: [
        "Python 3.9",
        "Fastapi",
        "Pytest",
        "Kubernetes",
        "Docker",
        "Jenkins",
        "Golang",
        "Influx",
        "Grafana",
      ],
    },
    {
      organization: "OZON.ru",
      time_range: "November 2021 - May 2022",
      position: "Python / Golang developer",
      summary:
        "At OZON marketplace (35M active buyers, $3.4B revenue in 2022), worked in analytical metrics team providing user behavior data to management for informed business decisions.",
      points: [
        "Refactored metrics alert system, migrating from Slack to Mattermost.",
        "Introduced code formatters (flake8, black, isort) across all Python repos.",
        "Developed API endpoints for migration from Python to Golang service, completed in 2 months with improved performance.",
        "Implemented new system health metrics visualization methods.",
      ],
      stack: [
        "Python 3.8",
        "Fastapi",
        "Pytest",
        "Golang",
        "PostgreSQL",
        "Apache Airflow",
        "Gitlab CI",
        "Prometheus",
        "Grafana",
      ],
    },
    {
      organization: "ARRIVAL",
      time_range: "September 2020 - July 2021",
      position: "Python developer",
      summary:
        "At Arrival (EV startup serving UPS, UK Royal Mail), part of team validating e-car signals specifications. Key achievements:",
      points: [
        "Designed initial DB structure for new service, later integrated with signals validation system.",
        "Prototyped vehicle signal simulation system proving low-level failures cascade to high-level signals.",
        "Developed components for vehicle signal specification validation.",
        "Handled data parsing and Google Docs storage prior to PostgreSQL migration.",
      ],
      stack: ["Python 3.8", "Fastapi", "Pytest", "Pandas", "PostgreSQL"],
    },
    {
      organization: "Dataduck",
      time_range: "June 2019 - August 2020",
      position: "Python developer",
      summary:
        "At Dataduck (B2B marketing with partners like Google, Unity), part of data team delivering info to Vertica DB from internal and external sources. Used Apache Airflow and Docker. Key contributions:",
      points: [
        "Set up and maintained Airflow ETL system.",
        "Migrated ETL jobs from Luigi to Airflow",
        "Developed Aiohttp web service evolved from cron job.",
        "Adapted parsers to handle changing data formats from various sources.",
        "Integrated Teamcity for ETL and analytics scripts deployment.",
        "Established code review process for data analytics team.",
      ],
      stack: [
        "Python 3.8",
        "Apache Airflow",
        "Docker",
        "Selenium",
        "Aiohttp",
        "Teamcity",
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
document.getElementById("about_me.contacts.linkedin").innerHTML = "Linkedin";
document.getElementById("about_me.contacts.linkedin").href =
  data.about_me.contacts.linkedin;
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
  p.setAttribute("class", "sanserif");
  p.setAttribute("id", "work.position");
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
  ul.id = "work.points";

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
  if (music_controls.hidden == true) {
    music_controls.hidden = false;
    music_controls.play();
  } else {
    music_controls.hidden = true;
    music_controls.pause();
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
