import PageHomeComponent from "../components/page_home.jsx";
import PageSecondComponent from "../components/page_second.jsx"
import { env } from "../env.js";

export const routes = [
    {
        id:0,
        hash: '',
        pointer: "#router",
        render: <PageHomeComponent />,
    },
    {
        id:1,
        hash: '#/secondPage',
        pointer: "#router",
        render: <PageSecondComponent />,
    },
];

export function router(id_in = 0, args = '') {
    if (args !== '') {
        args = '?'+args;
    }
    const routeObject = routes.find(object => object.id === id_in);
    history.pushState({}, '', env.endpointApp+routeObject.hash+args);
    ReactDOM.render(routeObject.render, document.querySelector(routeObject.pointer));
}