// import your function
import myName from './myName';
import printMe from './print';

function component() {
    const element = document.createElement('div');
    printMe();

    // use your function!
    element.textContent = myName('Cody');

    return element;
}

document.body.appendChild(component());
