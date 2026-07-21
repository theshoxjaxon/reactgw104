import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Form from './Components/Form'
import Robot from './Components/Robot'
import Card from './Components/Card'

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
      <div className='box'>

        {/* Card 1 */}
        < Card cardBg="cyan" btnBg="red" head=" Mountain" img="https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg" />
        {/* Card 2 */}
        < Card cardBg="dimgray" btnBg="pink" head="Lake " img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/f8/5c/05/picture-lake.jpg?w=1200&h=-1&s=1" />
        {/* Card 3 */}
        < Card cardBg="yellow" btnBg="aqua" head="Forest " img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZo3pvzwX31CGrFyV3ZOHOqwFpduUS8i1laTO64hURv87yCIuJwMvtQucS&s=10" />

      </div>
    </div>
  )
}

export default App