import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Banner from './components/Banner/Banner'
import TodoPage from './pages/TodoPage/TodoPage'
import FollowersPage from './pages/FollowersPage/FollowersPage'

const App = () => {
  return (
    <>
      <Banner />
    <Router>
      <Switch>
      <Route exact path='/' component={TodoPage} />
      <Route exact path='/followers' component={FollowersPage} />
      </Switch>
   </Router>
   </>
  )
}

export default App
