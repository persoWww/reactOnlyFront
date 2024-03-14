import renderDom from './components/index.jsx';
import { routes, router } from "./services/router.jsx";

renderDom();

let theHashRouteAll = window.location.hash;
theHashRouteAll = theHashRouteAll.split('?');
let theHashRoute = theHashRouteAll[0];
for (let index = 0; index < routes.length; index++) {
    const route = routes[index];
    if (route.hash.endsWith(theHashRoute)) {
        console.log(theHashRouteAll[1]);
        if (theHashRouteAll[1]) {
            router(route.id, theHashRouteAll[1]);
        } else {
            router(route.id);
        }
        break;
    }
}
