export default function PageSecondComponent() {
    /* document.addEventListener('DOMContentLoaded', () => {
        // alert('azazaz');
        let theHashRouteAll = window.location.hash;
        theHashRouteAll = theHashRouteAll.split('?');
        let theHashRoute = theHashRouteAll[1];
        console.log(theHashRoute);
    }); */
    /* setTimeout(() => {
        let theHashRouteAll = window.location.hash;
        theHashRouteAll = theHashRouteAll.split('?');
        let theHashRoute = theHashRouteAll[1];
        console.log(theHashRoute);
        return theHashRoute;
    }, 0); */
    let theHashRouteAll = window.location.hash;
    theHashRouteAll = theHashRouteAll.split('?');
    let theHashRoute = theHashRouteAll[1];
    return (<div>
        <h3>seconde page ?{ theHashRoute } az</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, voluptatibus tempora! Officiis voluptatibus harum officia nulla eos. Tempora quia necessitatibus sunt, sint soluta pariatur laborum ducimus, libero, quae vel quibusdam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta recusandae voluptatibus, rem repellat nostrum debitis cupiditate vel officia, quo numquam porro quod dolorum odio minus mollitia labore necessitatibus cum!</p>
    </div>);
};