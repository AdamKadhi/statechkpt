import React, { useState } from "react";

const About = () => {
    const [color, setcolor] = useState("aa")
  return (
    <div>
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        deleniti odit necessitatibus, eos quas cum. Fuga hic, laborum quaerat
        quo magnam alias! Provident, laudantium explicabo. Odio neque quia dolor
        eum.
      </p>
      <button onClick={()=>setcolor("blue")}>Blue</button>
      <button onClick={()=>setcolor("red")} >Red</button>
      <div style={{backgroundColor:color}} className="box">

      </div>
    </div>
  );
};

export default About;
