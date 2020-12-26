import React from "react";
import Button from "../shared/components/Button";
import '../styles/components/input.scss';
import '../styles/section.scss';
import '../styles/form.scss';

function App() {
  return (
    <main>
      <section className='md-section'>
        <div className="md-section__container">
          <Button text={'String for test'}/>
          <Button text={'String_2 for test'} btnStyle={'lg'}/>
          <Button text={'String_4 for test'} btnStyle={'md'}/>
        </div>
      </section>

      <section className='md-section--gray'>
        <div className="md-section__container">
          <form className='mp-form'>
            <input className='mp-input'
                   type='text'
                   placeholder='Enter Your Full Name'/>
            <input className='mp-input'
                   type='email'
                   placeholder='Enter Your Email Address'/>
            <input className='mp-input'
                   type='text'
                   placeholder='Enter Your Phone Number'/>
            <Button text={'String_3 for test'} btnStyle={'shadow'}/>
          </form>
        </div>
      </section>
    </main>
  );
}

export default App;
