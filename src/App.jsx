import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Form from './Components/Form'
import Robot from './Components/Robot'
import Card from './Components/Card'
import Usestate from './Components/Usestate'
import Test from './Components/Test'

import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
// import Cardtest from './Components/Cardtest'
// import List from './Components/List'
// import Movies from './Components/Movies'
// import Welcome from './Components/Welcome'
// import Formtest from './Components/Formtest'
import Loading from './Components/Loading'
import Todo from './Components/Todo'
import Products from './Components/Products'
import User from './Components/User'

const App = () => {
  return (
    <div>
      {/* <Navbar />
      <Hero />
      <Form /> */}
      {/* <Robot name="Optimus Prime" color="blue" bgFon="red" />
      <Robot name="Bumblebee" color="yellow" bgFon="blue" />
      <Robot name="Iron Man" color="red" />
      <Robot name="Tursnoy" color="pink" />
      <Robot name="Baxtiboy" color="black" /> */}
      {/* <Usestate /> */}
      {/* <Test /> */}
      {/* <Cardtest /> */}
      {/* <List /> */}
      {/* <Movies /> */}
      {/*  */}
      {/* <Welcome isLoggedIn={false} /> */}
      {/* <Formtest /> */}
      {/* <Form /> */}
      {/* <Card /> */}
      {/* <Loading /> */}
      {/* */}

      {/* <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link href="/Todo"> Todo ga o'tish </Link>
              <Link href="/"> Home Page </Link>
              <Link href="/Card"> Card ga o'tish </Link>
            </li>
          </ul>
        </nav>

        <Routes >
          <Route path='/Todo' element={<Todo />} />
          <Route path='/Card' element={< Card />} />
          <Route path='/' element={<Navbar />} />


        </Routes>



      </BrowserRouter> */}

      {/* <Products /> */}

      <User />
    </div>
  )
}

export default App