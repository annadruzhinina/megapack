import React from "react";
import Button from "../shared/components/Button";
import Hero from "./Hero";


function App() {
  return (
    <div>
      <Button text={'String for test'}/>
      <Button text={'String_2 for test'} btnStyle={'lg'}/>
      <Button text={'String_3 for test'} btnStyle={'shadow'}/>
      <Button text={'String_4 for test'} btnStyle={'md'}/>
      <Hero/>
    </div>
  );
}

export default App;
