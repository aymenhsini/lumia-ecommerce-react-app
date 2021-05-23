import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./Products";
import Checkout from "./Checkout";
import ProduitDetaille from "./Components/ProduitDetaille";
import Modal from "./Components/Modal";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/ProduitDetaille" component={ProduitDetaille} />
          <Route path="/Checkout" component={Checkout} />
        </Switch>
        <Modal />
      </div>
    </Router>
  );
}

export default App;
