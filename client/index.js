import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
// import Routes from './routes'
import {SimpleCard} from './components'

// establishes socket connection
// import './socket'

ReactDOM.render(
  <Provider store={store}>
    <div>
    <SimpleCard />
    </div>
  </Provider>,
  document.getElementById('app')
)
