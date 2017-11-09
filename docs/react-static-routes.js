
    import React, { Component } from 'react'
    import { Route } from 'react-router-dom'

    import src_containers_Home from '../src/containers/Home'
import src_containers_About from '../src/containers/About'
import src_containers_Post from '../src/containers/Post'
import src_containers_Blog from '../src/containers/Blog'
import src_containers____ from '../src/containers/404'
    const templateMap = {
    t_0: src_containers_Home,
t_1: src_containers_About,
t_2: src_containers_Post,
t_3: src_containers_Blog,
t_4: src_containers____
  }
    const templateTree = {c:{"404":{t:"t_4"},"/":{t:"t_0"},"about":{t:"t_1"},"blog":{c:{"post":{c:{1:{t:"t_2"},2:{t:"t_2"},3:{t:"t_2"}}}},t:"t_3"}}}
    
    const getTemplateForPath = path => {
      const parts = path === '/' ? ['/'] : path.split('/').filter(d => d)
      let cursor = templateTree
      try {
        parts.forEach(part => {
          cursor = cursor.c[part]
        })
        return templateMap[cursor.t]
      } catch (e) {
        return false
      }
    }
  

    export default class Routes extends Component {
      render () {
        return (
            
    <Route path='*' render={props => {
      let Template = getTemplateForPath(props.location.pathname)
      if (!Template) {
        Template = getTemplateForPath('404')
      }
      return <Template {...props} />
    }} />
  
        )
      }
    }
  