import MyComponent from "./app.jsx";
import NavComponent from "./nav.jsx";

export default function renderDom() {
    ReactDOM.render(<MyComponent />, document.getElementById("app"));
    ReactDOM.render(<NavComponent />, document.querySelector(".nav"));
}