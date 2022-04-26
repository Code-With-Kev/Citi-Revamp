import React from 'react'
import Header from '../components/Header'
import Nav from "../components/Nav"
import Blog from "../components/Blog"
import Hero from '../components/Hero'
import Article from "../components/Article"

const Home = () => {
  return (
    <div>
        <Header />
        <Nav />
        <Blog />
        <Hero />
        <Article />
    </div>
  )
}

export default Home