import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-customizable-progressbar'

class App extends Component {

  state = {
    totalSeconds:0,
    seconds: 0,
    minutes: 0,
    hour:0
  }

  timerVar = setInterval(()=>{

    const {totalSeconds, seconds, minutes, hour} = this.state
      
    this.setState(({ totalSeconds }) => ({
      totalSeconds: totalSeconds + 1
    }))

      this.setState(({ hour }) => ({
        hour : Math.floor(totalSeconds /3600)
    }))

    this.setState(({ minutes }) => ({
      minutes : Math.floor((totalSeconds - hour*3600)/60)
    }))

  this.setState(({ seconds }) => ({
    seconds :totalSeconds - (hour*3600 + minutes*60)
    }))

  }, 1000);
    

  render(){      
    const {totalSeconds, seconds, minutes, hour} = this.state

    return (
      <div className="App">
        <header className="App-header">          
                        
          <div className="row">
            <div className="card text-white bg-danger mb-3" style={{maxWidth:'18rem'}}>              
              <div className="card-body">                  
                <p className="card-text">{hour<10 ? '0'+hour:hour}</p>
              </div>
            </div>

            <div className="card text-white bg-primary mb-3" style={{maxWidth:'18rem'}}>              
              <div className="card-body">                
                <p className="card-text">{minutes<10 ? '0'+minutes:minutes}</p>
              </div>
            </div>

            <div className="card text-white bg-success mb-3" style={{maxWidth:'18rem'}}>
              <div className="card-body">
                <p className="card-text">{seconds<10 ? '0'+seconds:seconds}</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="card text-white bg-danger mb-3 rounded-circle" style={{maxWidth:'18rem'}}>              
              <div className="card-body">                  
                <p className="card-text">{hour<10 ? '0'+hour:hour}</p>
              </div>
            </div>

            <div className="card text-white bg-primary mb-3 rounded-circle" style={{maxWidth:'18rem'}}>              
              <div className="card-body">                
                <p className="card-text">{minutes<10 ? '0'+minutes:minutes}</p>
              </div>
            </div>

            <div className="card text-white bg-success mb-3 rounded-circle" style={{maxWidth:'18rem'}}>
              <div className="card-body">
                <p className="card-text">{seconds<10 ? '0'+seconds:seconds}</p>
              </div>
            </div>
          </div>
          
          <div className="row">
            <ProgressBar progress={hour}  radius={60} />
            <ProgressBar progress={minutes}  radius={60} />
            <ProgressBar progress={seconds}  radius={60} />
          </div>

        </header>
      </div>
    );
  }
  
}

export default App;
