var data = {
    "about_me": {
        "name": "Viktor Titov",
        "birth_date": "11-12-1994",
        "position": "Python / Golang developer",
        "location": "Georgia, Batumi",
        "summary": "As a versatile professional with experience in data engineering, quality assurance, and backend development, I bring a unique perspective to the software development process. With 4 years of experience as a backend developer and 2 years of experience in QA, I have honed my communication skills and developed a knack for creative problem-solving. I am always eager to expand my knowledge and enjoy exploring new fields. In my free time, I enjoy playing games, taking walks with my dog, and watching YouTube shows with my wife. I am also an avid traveler and enjoy the freedom of driving a car to explore new destinations.",
        "languages": [
            "Russian, Native",
            "English, B2"
        ],
        "contacts": {
            "phone": "+995 599 10 85 96",
            "telegram": "duch94",
            "email": "vtduch@gmail.com",
            "github": "github.com/duch94",
            "linkedin": "https://www.linkedin.com/in/viktor-titov-73246aab/"
        }
    },
    "education": [{
        "organization": "ITMO University",
        "time": "September 2012 - June 2016",
        "title": "Bachelor of Photonics and optoinformatics. Specialization - Computer photonics."
    }],
    "stack": [
        "Python 3.9",
        "Fastapi",
        "Golang 1.20",
        "Gin",
        "MongoDB/DocumentDB",
        "AWS SQS",
        "AWS S3",
        "Prometheus + Grafana",
        "Kubernetes",
        "Pytest",
        "Docker",
        "Jenkins",
        "GitlabCI"
    ],
    "work": [
        {
            "organization": "Side project",
            "time_range": "June 2023 - Present",
            "position": "Golang developer",
            "summary": "I am developing backend services for CMS and for mobile application from scratch, using Gin, Casbin for role-based access model, DocumentDB as DB and Redis as cache. I do this project on my spare time, 1-2 hours after work and 3-5 hours on weekend. I do it just to feel good developing something with exciting technologies which I wanted to try.",
            "points": [
                "Developed backend services for CMS and for mobile application from scratch.",
                "Added support of RBAC and simple JWT auth to CMS backend.",
                "Migrated data and rewrote DB queries from MongoDB to DocumentDB to decrease efforts on DB management.",
                "Integrated one of backend services with Redmine API to provide feedback from users of mobile application.",
                "Used SQS as communication bus between some services",
                "Participated in building CI/CD pipelines to deploy applicaiton on couple of environments.",
                "Wrote JS scripts which implement migrations.",
                "Wrote dockerfiles for backend services and for applying migrations.",
                "Tried to stick with 12-factor app paradigm."
            ],
          "stack": [
              "Golang 1.20",
              "Gin",
              "MongoDB/DocumentDB",
              "AWS SQS",
              "AWS S3",
              "Docker",
              "GitlabCI",
              "Redis"
          ]
        },
        {
            "organization": "JettyCloud",
            "time_range": "June 2022 - Present",
            "position": "Python / Golang developer",
            "summary": "I have the opportunity to work at JettyCloud, where I contribute to the development of a cutting-edge UCaaS platform called RingCentral. With 5 million users worldwide relying on RingCentral to stay connected with their colleagues and clients, I am part of a dedicated team that ensures the platform's smooth functioning through developing internal test framework and here is what I worked at:",
            "points": [
                "Added new functionality to test stubs of specific services.",
                "Maintained the internal test framework, adding new features and fixing bugs.",
                "Introduced some features in distributed test platform.",
                "Added ability to our self-developed library for InfluxDB to store metrics with labels.",
                "Added jenkins job to deploy staging environment of our distributed test platform.",
                "Improved documentation to ease onboarding of newcomers."
            ],
            "stack": [
                "Python 3.9",
                "Fastapi",
                "Pytest",
                "Kubernetes",
                "Docker",
                "Jenkins",
                "Golang",
                "Influx",
                "Grafana"
            ]
        },
        {
            "organization": "OZON.ru",
            "time_range": "November 2021 - May 2022",
            "position": "Python / Golang developer",
            "summary": "At OZON, a Russia-wide marketplace with 35 million active buyers and $3.4 billion USD in revenue in 2022, I was part of the analytical metrics team. Our goal was to provide higher-level teams and management with metrics on user behavior, helping them make informed business decisions. During my time on the team:",
            "points": [
                "Refactored notification system about “bad metrics” and moved notifications from Slack to Mattermost.",
                "Introduced python code formatters (flake8, black, isort) to the team and successfully integrated them to every our python repo.",
                "I wrote some of API endpoints which made us successfully migrate from a slower Python-based service to a faster Golang-based service in just two months, increasing the system's capabilities and enabling the development of new features.",
                "I explored various methods of visualizing our system's health metrics and introduced them to the team."
            ],
            "stack": [
                "Python 3.8",
                "Fastapi",
                "Pytest",
                "Golang",
                "PostgreSQL",
                "Apache Airflow",
                "Gitlab CI",
                "Prometheus",
                "Grafana"
            ]
        },
        {
            "organization": "ARRIVAL",
            "time_range": "September 2020 - July 2021",
            "position": "Python developer",
            "summary": "Arrival is startup which develops commercial EV vehicles and microfactories to produce them. Arrival's customers were companies like UPS, UK Royal Mail, etc. I was part of support team, which became responsible of validating e-car signals specification. My main achievments were:",
            "points": [
                "I worked on first iteration of DB structure of the new service. Later on this data was transfered to our database of signals validation system, mentioned above.",
                "I developed prototype of system which simulates different level of signals in vehicle which proved the theory that fail signal of low-level system should trigger high-level system's fail signals.",
                "I produced parts of system which validates signals specifications of vehicles.",
                "Also I worked on routine tasks of data parsing and its tabular storing in google docs before this data was moved to PostgreSQL."
            ],
            "stack": [
                "Python 3.8",
                "Fastapi",
                "Pytest",
                "Pandas",
                "PostgreSQL"
            ]
        },
        {
            "organization": "Dataduck",
            "time_range": "June 2019 - August 2020",
            "position": "Python developer",
            "summary": "Dataduck offers B2B marketing services, their partners are companies like Google, Unity, Joom, Oppo, etc. As for 2022 they have over 7500 promo units per month. I was a part of data analysts team and my goal was to deliver the data to the Vertica DB from inhouse sources and outer sources, such as Google Analytics or Appsflyer. The majority of code was run by Apache Airflow framework, and some other scripts were in docker containers. What have I done:",
            "points": [
                "Installed and successfully supported ETL system Airflow.",
                "Migrated periodic ETL jobs from Luigi to Airflow",
                "Developed my first web service using framework Aiohttp which had grown from cron job.",
                "Successfully solved plenty of problems with data parsing from different sources, when these sources changed their data format.",
                "Integrated CI/CD system Teamcity to automate deploy of ETL and data analytical scripts.",
                "Introduced and maintained the process of code review to the command of data analytics."
            ],
            "stack": [
                "Python 3.8",
                "Apache Airflow",
                "Docker",
                "Selenium",
                "Aiohttp",
                "Teamcity"
            ]
        }
    ]
}

// Logic which fills HTML template with data above

document.getElementById("about_me.location").innerHTML = data.about_me.location;
document.getElementById("about_me.contacts.phone").innerHTML = data.about_me.contacts.phone;
document.getElementById("about_me.contacts.phone").href = "tel:" + data.about_me.contacts.phone;
document.getElementById("about_me.contacts.email").innerHTML = data.about_me.contacts.email;
document.getElementById("about_me.contacts.email").href = "mailto:" + data.about_me.contacts.email;
document.getElementById("about_me.contacts.linkedin").innerHTML = "Linkedin";
document.getElementById("about_me.contacts.linkedin").href = data.about_me.contacts.linkedin;
document.getElementById("about_me.contacts.github").innerHTML = data.about_me.contacts.github;
document.getElementById("about_me.contacts.github").href = "https://" + data.about_me.contacts.github;

data.stack.forEach(function(item) {
    var ul = document.getElementById("stack");
    var li = document.createElement("li");
    var span = document.createElement("span");
    span.appendChild(document.createTextNode(item));
    li.appendChild(span);
    ul.appendChild(li);
});
data.about_me.languages.forEach(function(item) {
    var ul = document.getElementById("languages");
    var li = document.createElement("li");
    var span = document.createElement("span");
    span.appendChild(document.createTextNode(item));
    li.appendChild(span);
    ul.appendChild(li);
});

document.getElementById("about_me.contacts.name").innerHTML = data.about_me.name;
document.getElementById("about_me.position").innerHTML = data.about_me.position;
document.getElementById("about_me.summary").innerHTML = data.about_me.summary;

data.work.forEach(function(work_item) {
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
    summary.setAttribute("class", "experience")
    summary.appendChild(document.createTextNode(work_item.summary));
    li.appendChild(summary)

    var ul = document.createElement("ul");
    ul.id = "work.points";
    
    document.getElementById("work").appendChild(li);
    work_item.points.forEach(function(point_item) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(point_item));
        ul.appendChild(li);
        
    });
    li.appendChild(ul);
   
    var ul_inner_stack = document.createElement("ul");
    var ul_stack = document.createElement("ul");
    ul_stack.setAttribute("class", "skills_on_work");
    work_item.stack.forEach(function(item) {
        var li_stack = document.createElement("li");
        var span_stack = document.createElement("span");
        span_stack.appendChild(document.createTextNode(item))
        li_stack.appendChild(span_stack);
        ul_inner_stack.appendChild(li_stack);
    });
    ul_stack.appendChild(ul_inner_stack);
    li.appendChild(ul_stack);
    
    var hr = document.createElement("hr");
    li.appendChild(hr);
});

data.education.forEach(function(edu_item) {
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
