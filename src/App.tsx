import { useState } from "react";
import "./App.css";

function App() {
  const [coinSide, setCoinSide] = useState( "heads" || "tails" );

    
    function flipCoin() {
      let coinSide =Math.random()
      if(coinSide<=0.5){
        setCoinSide("Head")
      }else setCoinSide("Tails")
    }


 

  return (
    <div className="App">
 
      <h1>Flip a Coin</h1>
      <p className="coin">{coinSide}</p>
  <button onClick={flipCoin}>Flip Coin</button>



    </div>
  );
}

export default App;
