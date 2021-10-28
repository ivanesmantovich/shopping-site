import './App.css'
import {MainPage} from "./components/MainPage";
import {ShopStore} from "./components/ShopStore";

function App() {

  return (
    <div className="App">
        <ShopStore>
            <MainPage/>
        </ShopStore>
    </div>
  )
}

export default App
