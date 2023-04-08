var data = {
    "about_me": {
        "name": "Viktor Titov",
        "birth_date": "11-12-1994",
        "position": "Python / Golang developer",
        "location": "Georgia, Batumi",
        "summary": "Backend developer with data engineer and QA background.",
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
    "skills": [
        "Python 3.9",
        "Fastapi",
        "Pytest",
        "Apache Airflow",
        "Golang",
        "PostgreSQL",
        "Prometheus + Grafana",
        "Kubernetes",
        "Ansible",
        "Jenkins",
        "Teamcity"
    ],
    "work": [
        {
            "organization": "JettyCloud",
            "time_range": "June 2022 - Present",
            "position": "Python / Golang developer",
            "summary": [
                "JettyCloud develops for an American UCaaS platform RingCentral. Its 5M users around the world use RingCentral daily to stay connected with their co-workers and clients.",
                "I am a part of the team, which maintains internal test framework.",
                "I was involved in following activities:",
                "Helped to add new functionality to test stubs of specific services",
                "Involved in test framework maintanance like bug fixing or adding new functionality",
                "Participated in development of distributed test platform"
            ]
        },
        {
            "organization": "OZON.ru",
            "time_range": "November 2021 - May 2022",
            "position": "Python / Golang developer",
            "summary": [
                "OZON is russia-wide marketplace, which offers local sellers big audience of buyers, logistics, warehouse for goods, goods pick points etc. OZON had 35 millions of active buyers and 3.4 billion USD of revenue in 2022.",
                "I was part of the analytical metrics team. Our goal was to deliver metrics of users behavior to higher-level teams and management, so they could make right business decisions.",
                "During that short period of time I:",
                "Refactored notification system about “bad metrics” and moved notifications from Slack to Mattermost. Also added mypy, flake8, black and isort to it's repo.",
                "Introduced python code formatters (flake8, black, isort) to the team and successfully integrated them to every our python repo.",
                "Took part in development and rewriting of metrics management system. We moved it from slower service written in Python (each of three workers in pod could do not more than 2 RPS) to faster service written in Golang in 2 months and started to develop new features in it then.",
                "Explored ways to visualize of our system's health and introduced them to the team."
            ]
        },
        {
            "organization": "ARRIVAL",
            "time_range": "September 2020 - July 2021",
            "position": "Python developer",
            "summary": [
                "Arrival is startup which develops commercial EV vehicles and microfactories to produce them. Arrival's customers were companies like UPS, UK Royal Mail, etc.",
                "I was part of support team, which became responsible of validating e-car signals specification.",
                "I took part in development of signals specifications test platform.",
                "Also, developed prototype of system which simulates different level of signals in vehicle to prove the theory that fail signal of low-level system should trigger high-level system's fail signals."
            ]
        },
        {
            "organization": "Dataduck",
            "time_range": "June 2019 - August 2020",
            "position": "Python developer",
            "summary": [
                "Dataduck offers B2B marketing services, their partners are companies like Google, Unity, Joom, Oppo, etc. As for 2022 they have over 7500 promo units per month.",
                "I was a part of data analysts team and my goal was to deliver the data to the Vertica DB from inhouse sources and outer sources, such as Google Analytics or Appsflyer.",
                "The majority of code was run by Apache Airflow framework, and some other scripts were in docker containers.",
                "My main achievments were:",
                "Installed and successfully supported ETL system Airflow.",
                "Developed my first web service using framework Aiohttp which had grown from cron job.",
                "Successfully solved plenty of problems with data parsing from different sources, when these sources changed their data format.",
                "Integrated CI/CD system Teamcity to automate deploy of ETL and data analytical scripts.",
                "Introduced and maintained the process of code review to the command of data analytics."
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

data.skills.forEach(function(item) {
    var ul = document.getElementById("skills");
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

    var span = document.createElement("span")
    span.innerHTML = work_item.organization;
    li.appendChild(span);

    var ul = document.createElement("ul");
    ul.id = "work.summary";
    
    document.getElementById("work").appendChild(li);
    work_item.summary.forEach(function(summary_item) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(summary_item));
        ul.appendChild(li);
    });
    li.appendChild(ul);
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
