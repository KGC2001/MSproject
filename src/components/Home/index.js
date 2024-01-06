// App.js
import {Link} from 'react-router-dom'

const Home = () => (
  <div className="back">
    <div className="home">
      <p style={{color: 'gold'}}>UI/UX DESIGNER</p>
      <h1 style={{color: 'black'}}>hello, my name is gopichand</h1>
      <p>
        i completed my graduation and i am searching for job.i have learned
        various technologies like html,css,javascript,sql,reactjs out of all
        these technologies i am strong in python/
      </p>
      <div className="butsection">
        <Link to="/projects" style={{textDecoration: 'none', padding: '20px'}}>
          <button type="button" className="bu1">
            Projects
          </button>
        </Link>
        <button type="button" className="bu2">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{padding: '10px', textDecoration: 'none'}}
          >
            Linkedin
          </a>
        </button>
      </div>
    </div>
  </div>
)

export default Home
