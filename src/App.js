// import './App.css';
import Navbar from './Navbar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home.';
import FaceDetect from './FaceDetect'
import HandDetect from './HandDetect'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/facedetect' component={FaceDetect}/>
          <Route exact path='/handdetect' component={HandDetect}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
