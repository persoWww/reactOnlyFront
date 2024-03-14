import { router } from "../services/router.jsx";

export default function NavComponent() {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('#nav_home').addEventListener('click', () => {
            // alert('click on home');
            router(0);
        });
        document.querySelector('#nav_secondpage').addEventListener('click', () => {
            // alert('click on nav_secondpage');
            router(1, 'a=a');
        });
    });
    return (<div>
        <h2>composant nav in app</h2>
        <ul>
            <li id="nav_home">page home2</li>
            <li id="nav_secondpage">secondPage2</li>
        </ul>
    </div>);
};