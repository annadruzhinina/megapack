import React from "react";
import Button from "../shared/components/Button";
import Hero from "./Hero";
import Products from "./Products";
import Advertisement from "./Advertisement";
import Tripadvisor from "./Tripadvisor";
import Review from "./Review";

function App() {
  return (
    <React.Fragment>
      {/*<Button text={'String for test'}/>
      <Button text={'String_2 for test'} btnStyle={'lg'}/>
      <Button text={'String_3 for test'} btnStyle={'shadow'}/>
      <Button text={'String_4 for test'} btnStyle={'md'}/>*/}
      <Hero/>
      <Products/>
      <Advertisement/>
      <Tripadvisor/>
      <Review/>
    </React.Fragment>
  );
}

export default App;
