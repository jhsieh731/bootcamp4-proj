import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Greeting from './containers/Greeting'
import Register from './containers/Register'
import Login from './containers/Login'
import NavBar from './containers/NavBar'
import Produce from './containers/Produce'
import Procrastinate from './containers/Procrastinate'
import Social from './containers/Social'
import CompletedList from './containers/Completed'

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <>
              <NavBar />
              <Route path="/greeting" component={Greeting} />
              <Route path="/produce" component={Produce} />
              <Route path="/procrastinate" component={Procrastinate} />
              <Route path="/completed" component={CompletedList} />
              <Route path="/social" component={Social} />
            </>
          </Switch>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
