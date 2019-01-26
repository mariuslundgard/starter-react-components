import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {App} from './app'

const rootElm = document.getElementById('root')

ReactDOM.hydrate(<App />, rootElm)
