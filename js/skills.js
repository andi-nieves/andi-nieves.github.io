const skills = {
  col1: [
    { name: "Javascript / ES", level: "Advance", icon: "devicon-javascript-plain" },
    { name: "NodeJS", level: "Advance", icon: "devicon-nodejs-plain-wordmark" },
    {
      name: "React (JS / Native) Redux",
      level: "Advance",
      icon: "devicon-react-original"
    },

    {
      name: "Amazon Web Services (AWS)",
      level: "Advance",
      icon: "devicon-amazonwebservices-plain-wordmark"
    },
    { name: "Ruby-on-Rails", level: "Advance", icon: "devicon-rails-plain" },
    { name: "GraphQL", level: "Advance", icon: "devicon-nodejs-plain" },
    { name: "Typescript", level: "Advance", icon: "devicon-typescript-plain" },
    { name: "Python", level: "Advance", icon: "devicon-python-plain" },
    { name: "Heroku", level: "Advance", icon: "devicon-heroku-plain" },
    { name: "C#", level: "Advance", icon: "devicon-csharp-plain" },
  ],
  col2: [
    { name: "Java", level: "Advance", icon: "devicon-java-plain" },
    { name: "Java Android", level: "Advance", icon: "devicon-android-plain" },
    { name: "PHP", level: "Advance", icon: "devicon-php-plain" },
    { name: "Swift", level: "Advance", icon: "devicon-swift-plain" },
    { name: "ElectronJS", level: "Advance", icon: "devicon-react-original" },
    { name: "AngularJS", level: "Advance", icon: "devicon-angularjs-plain" },
    { name: "Flutter", level: "Advance", icon: "devicon-google-plain" },
    { name: "IONIC", level: "Advance", icon: "devicon-angularjs-plain" },
    { name: "Microsoft Dot-Net", level: "Advance", icon: "devicon-dot-net-plain" },
  ],
  col3: [
    { name: "Laravel", level: "Advance", icon: "devicon-laravel-plain" },
    { name: "HTML 5", level: "Advance", icon: "devicon-android-plain" },
    { name: "jQuery", level: "Advance", icon: "devicon-jquery-plain" },
    { name: "CSS 3 / SCSS", level: "Advance", icon: "devicon-css3-plain" },
    { name: "Wordpress", level: "Advance", icon: "devicon-wordpress-plain" },
    { name: "Google Material UI", level: "Advance", icon: "devicon-google-plain" },
    { name: "Bootstrap", level: "Advance", icon: "devicon-bootstrap-plain" },
    { name: "API's (Social Media's, Payment Processors, Map", level: "Advance", icon: "fas fa-share-alt-square" },
  ]
};
function template(data) {
  const color = data.level === "Advance" ? "" : "";
  // const
  return `<div class="skill">
<i class="ico ${data.icon}"></i>
<div class="description">
  <span class="">${data.name}</span>
  <span class="level">${data.level}</span>
  <div class="progress">
    <div class="progress-bar ${color}" style="width:100%"></div>
  </div>
</div>
</div>`;
}
const skillset1 = $("#skills-set-col1");
const skillset2 = $("#skills-set-col2");
const skillset3 = $("#skills-set-col3");
skills.col1.forEach(data => {
  skillset1.append(template(data));
});
skills.col2.forEach(data => {
  skillset2.append(template(data));
});
skills.col3.forEach(data => {
  skillset3.append(template(data));
});
