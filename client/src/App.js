import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Footer, Main, NavBar } from "./Components"
import { Stats, User } from "./modules"

function App() {
  return <Router>
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <NavBar />
      <Switch >
        <Route exact path='/' >
          <Main />
        </Route>
        <Route path='/stats' >
          <Stats />
        </Route>
        <Route path='/user/:id'>
          <User />
        </Route>
      </Switch>
      <Footer />
    </div>
  </Router>
}

export default App
