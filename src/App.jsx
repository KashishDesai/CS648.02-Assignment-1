
const imageContent = document.getElementById('image');



const imageComponent = <div>
  <header>Kashish Desai</header>
  <img alt="react logo" src="headshot.jpg" />
  <p>I am Kashish Desai, currently pursuing masters in Computer Science from San Diego State University.
    I have dream of becoming distinguished engineer at a reputed company.<br />
    I am a hardworking, patient, and dedicated person.
    I believe in maintaining positive environment around me to build a healthy community.<br />
    I have completed undergraduation from Mumbai University with courses such as Structured Programming Approach,
    Object Oriented Programming Methodology, Data Structures etc.<br />
    I have worked on some academic projects like Skin Disease Diagnostic System using Convolutional Neural Networks,
    Postfix Evaluator applying design principles,<br />
    Event planner application, Basic utility application.
    Apart from curriculum, I have supervised as a coach for First Robotics Competition at Robofun labs,<br />
    where I led team of 5 students to offer them direction and guidance with the purpose of learning aspects of robotics.<br />
    Also successfully helped the team to come up with 80% efficient solution. With this experience I worked as the Vice President
    at Robotics club at Watumull college of Engineering.</p>
  <p>
    <button> <a href="https://github.com/KashishDesai/cs648.02Assignment1" target="_blank">VIEW MY GITHUB</a></button>
  </p>
</div>;
ReactDOM.render(imageComponent, imageContent);
