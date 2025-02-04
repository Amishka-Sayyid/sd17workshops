import "./style.css";

import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
  
    <h1>Hello Vite!</h1>
  
   
    <div class="card">
       <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quas cum ipsa libero molestiae fugit, fugiat consequatur beatae enim possimus nisi consequuntur fuga assumenda repudiandae iste cupiditate nulla! Doloribus, suscipit.
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
