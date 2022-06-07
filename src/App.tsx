import React from "react"
//--- ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//--- CONTEXT
import ContextProvider from "./context"
//--- COMPONENTS
import Title from "./components/Title"
import Header from "./components/Header"
import Deck from "./components/Deck"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {
  return (
    <Router>
      <ContextProvider>
        <div className="container">
          <div className="content">
            <Title />
            <Routes>
              <Route path="/" element={<Header />} />
              <Route path="/deck" element={<Deck />} />
              <Route path="/card" element={<Card />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ContextProvider>
    </Router>
  )
}

export default App

//todo: avoid blank pages
//todo: upgrade shuffle animation
//todo: improve CSS
