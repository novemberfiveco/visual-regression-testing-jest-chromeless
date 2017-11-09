
    import React, { Component } from 'react'
    import { Switch, Route } from 'react-router-dom'

    import src_containers_Home from '../src/containers/Home'
import src_containers_About from '../src/containers/About'
import src_containers_Post from '../src/containers/Post'
import src_containers_Blog from '../src/containers/Blog'
import src_containers____ from '../src/containers/404'

    export default class Routes extends Component {
      render () {
        return (
          <Switch>
              <Route exact path={'/'} component={src_containers_Home} />
<Route exact path={'/about'} component={src_containers_About} />
<Route exact path={'/blog/post/1'} component={src_containers_Post} />
<Route exact path={'/blog/post/2'} component={src_containers_Post} />
<Route exact path={'/blog/post/3'} component={src_containers_Post} />
<Route exact path={'/blog'} component={src_containers_Blog} />
              <Route component={src_containers____} />
          </Switch>
        )
      }
    }
  