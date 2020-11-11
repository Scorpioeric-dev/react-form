import logo from "./logo.svg";
import "./App.css";
import Standard from "./Standard-Form/Standard";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row at-5">
          <div className="col-md-6 border py-3">
            <Standard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
