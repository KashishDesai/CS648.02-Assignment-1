
const imageContent = document.getElementById('image');

const imageComponent = React.createElement(
  "div",
  null,
  React.createElement(
    "header",
    null,
    "Kashish Desai"
  ),
  React.createElement("img", { alt: "react logo", src: "headshot.jpg" }),
  React.createElement(
    "p",
    null,
    "I am Kashish Desai, currently pursuing masters in Computer Science from San Diego State University. I have dream of becoming distinguished engineer at a reputed company.",
    React.createElement("br", null),
    "I am a hardworking, patient, and dedicated person. I believe in maintaining positive environment around me to build a healthy community.",
    React.createElement("br", null),
    "I have completed undergraduation from Mumbai University with courses such as Structured Programming Approach, Object Oriented Programming Methodology, Data Structures etc.",
    React.createElement("br", null),
    "I have worked on some academic projects like Skin Disease Diagnostic System using Convolutional Neural Networks, Postfix Evaluator applying design principles,",
    React.createElement("br", null),
    "Event planner application, Basic utility application. Apart from curriculum, I have supervised as a coach for First Robotics Competition at Robofun labs,",
    React.createElement("br", null),
    "where I led team of 5 students to offer them direction and guidance with the purpose of learning aspects of robotics.",
    React.createElement("br", null),
    "Also successfully helped the team to come up with 80% efficient solution. With this experience I worked as the Vice President at Robotics club at Watumull college of Engineering."
  ),
  React.createElement(
    "p",
    null,
    React.createElement(
      "button",
      null,
      " ",
      React.createElement(
        "a",
        { href: "https://github.com/KashishDesai/cs648.02Assignment1", target: "_blank" },
        "VIEW MY GITHUB"
      )
    )
  )
);
ReactDOM.render(imageComponent, imageContent);