import './App.css';
import Home from "./components/Home";
// Parse
import Parse from 'parse/dist/parse.min.js';
Parse.initialize("NzbzHOCjp7Ihth8a2hzVFRmpdKVYvy7qvfqkZpzO", "SppAxZYEFADLkfTsA2VEzVLhvZMjzygSaHqkfRJd");
Parse.serverURL = "https://parseapi.back4app.com/";

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
