// App.js

import {Route, Switch} from 'react-router-dom'

import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Home from './components/Home'
import './App.css'
import Header from './components/Header'

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </div>
)

export default App
