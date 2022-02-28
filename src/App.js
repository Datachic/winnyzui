
import { Navbar, Sidebar, Footer } from './components'
import React, { Component } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {About, Cart, Checkout, Error, Home, Products, SingleProduct, Private} from './pages'
import FootInfo from './components/FootInfo';

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}

function App() {
  return <>
  {/* <p> Edit <code>src/App.js</code> and save to reload.  </p>
        <LambdaDemo />     
        
         */}
  <Router>
  <Navbar />
  <Sidebar />
  <Routes>
  <Route path='/products:id' element={<SingleProduct/>} />
  <Route path='/products' element={<Products/>} />
  <Route path='/checkout' element={<Checkout/>} />
  <Route path='/private' element={<Private/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/cart' element={<Cart/>} />
  <Route path='/*' element={<Error/>} />
  <Route path='/' element={<Home />} />
  </Routes>
  <FootInfo/>
  <Footer />
  </Router>
    
  </>
  
  
}
export default App;
