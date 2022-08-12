const myImage = document.querySelector('img');
myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if ( mySrc === 'firefox1.svg.png') {
        myImage.setAttribute('src','firefox2.png');
    } else {
        myImage.setAttribute('src','firefox1.svg.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    const myName = prompt('Please enter your name.');
    if (!myName) { setUserName(); }
    else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}
if (!localStorage.getItem('name')) { setUserName(); }
else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.onclick = () => { setUserName(); }
