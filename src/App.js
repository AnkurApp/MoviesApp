import "./App.css";

import { Provider } from "react-redux";
import { Store } from "./store";
import MoviePage from "./Components/mainPage";

function App() {
  return (
    <Provider store={Store}>
      <MoviePage />
    </Provider>
  );
}

export default App;
