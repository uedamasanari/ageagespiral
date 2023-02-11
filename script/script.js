function seni() {
    location.href = './home.html';
}

window.onload = () => {
    setTimeout("seni()", 5*1000);
}

// console.log(window.onload);