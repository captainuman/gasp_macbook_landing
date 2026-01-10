import Body from "./Components/homepage/body"
import Navbar from "./Components/navbar/Navbar"
import View from "./Components/product/View"

const App = () => {
  return (
    <div className="bg-black w-screen">
      <Navbar/>
      <Body/>
      <View/>
    </div>
  )
}

export default App
