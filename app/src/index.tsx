import { render } from "solid-js/web";
import TopPage from "./components/top_page";
import "./css/input.css";

const App = () => {
  return (
    <>
      <TopPage />
    </>
  );
};

render(() => <App />, document.getElementById("root"));
