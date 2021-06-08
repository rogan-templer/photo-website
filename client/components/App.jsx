/* eslint-disable indent */
import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Nature from './Nature'

function App() {
    return (
        <div className="">
            <div className="">
                <Route path='/' component={Nav} />
                <Route exact path='/stills/nature' component={Nature} />
            </div>
        </div>
    )
}

export default App
