import Header from "./components/Header";
import React, {useState} from "react";
import Container from "./components/Container";
import Client from "./components/Client";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
function App() {
  const [isopen, setisopen] = useState(false)
  return (
    <div className="App">
     <Header
     isopen={isopen}
     setisopen={setisopen}
     />
     <Container/>
     <Client/>
     <Footer/>
     <Footer2/>
    </div>
  );
}

export default App;
