import React, { Component } from 'react'

import initialState from './lib/eyewear'
// import DetailView from './components/list-view/DetailView'
import ListView from './components/list-view/ListView'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: initialState.eyewear,
      selected: null
    }
  }

  setSelected = selectedId => {
    this.setState({
      selected: selectedId || null
    })
  }

  render() {
    const { list, selected } = this.state
    console.log('INITIAL STATE:', this.state)

    return (
      <div className="app-container">
        <h1 className="header">DITTO</h1>
        {/*<DetailView selected={selected} />*/}
        <ListView list={list} setSelected={this.setSelected} />
      </div>
    )
  }
}

export default App
