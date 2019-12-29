import React, { Component } from 'react';
import logo from '../src/assets/images/destiny_ajakaiye.jpeg';
import Twitter from '../src/assets/images/facebook.png';
import Github from '../src/assets/images/github.png';
import LinkedIn from '../src/assets/images/linkedin.png';
import Medium from '../src/assets/images/linkedin.png';
import './App.css';
import '../src/assets/css/cssanimation.min.css';

class Home extends Component {
  
  state = {
    stepOne: true,
    stepTwo: false,
    stepThree: false,
    stepFour: false,
    button: false,
    runner: 1
  };

  _switchOne = () => {
    this.setState({
      stepOne: false,
      stepTwo: true,
      stepFour: false,
      runner: 2
    });
  };

  _switchTwo = () => {
      this.setState({
        stepOne: false,
        stepTwo: false,
        stepThree: true,
        stepFour: false,
        runner: 3
      });
  }

  _switchThree = () => {
    
      this.setState({
        stepOne: false,
        stepTwo: false,
        stepThree: false,
        stepFour: true,
        runner: 1,
      });
  }

  _runner = () => {
    if(this.state.runner === 1) {
      this._switchOne();
    }
    if(this.state.runner === 2) {
      this._switchTwo();
    }
    if(this.state.runner === 3) {
      this._switchThree();
    }
  }

  render() {
    let content = 'About Me';
    const { stepOne, stepTwo, stepThree, stepFour, runner } = this.state;

    if(runner === 2) {
      content = 'What I Do';
    }
    if(runner === 3) {
      content = 'Contact Me';
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            {stepOne && (
              <>
              <p className={`cssanimation typing sequence`}>Hi, welcome to my home.</p><br/>
              </>
            )}
            {stepTwo && (
              <>
              <p className="cssanimation typing sequence">My name is Destiny Ajakaiye.</p><br/>
              </>
            )}
            {stepThree && (
              <>
              <p className="cssanimation typing sequence">I'm a Software Developer.</p><br/>
              </>
            )}

            {stepFour && (
              <>
                <p>
                  <a href="https://www.twitter.com/@DestinyAjax" target="blank" title="Twitter">
                    <img src={Twitter} className="App-social-icon" alt="..." />
                  </a>
                  <a href="https://www.linkedin.com/in/destinyajax/" target="blank" title="Linkedin">
                    <img src={LinkedIn} className="App-social-icon" alt="..." />
                  </a>
                  <a href="https://www.github/destinyajax" target="blank" title="Github">
                    <img src={Github} className="App-social-icon" alt="..." />
                  </a>
                  <a href="https://medium.com/@destinyajax" target="blank" title="Medium">
                    <img src={Medium} className="App-social-icon" alt="..." />
                  </a>
                </p><br/>
              </>
            )}
            
            <button onClick={this._runner} className="cssanimation hu__hu__ sequence" type="button">
              {content}
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;