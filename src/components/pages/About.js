import React from 'react';
import me from "../../assets/images/me.jpg";

function About() {
  return (
    <div>
      <div class="jumbotron">
        <h1 class="d-flex display-5 justify-content-center">About Me!</h1>
      <img alt="" src={me} width="300" className="rounded"></img>
      </div>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}

export default About;
