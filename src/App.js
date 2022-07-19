import "./App.css";
import Header from "./containers/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import NotFoundComponent from "./containers/NotFoundComponent";
import ProductComponent from "./containers/ProductComponent";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="*" element={<NotFoundComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
