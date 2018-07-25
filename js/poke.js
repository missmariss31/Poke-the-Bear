let bear = document.querySelector('img');
let feeling = document.querySelector('.feeling');

bear.onclick = function() {

    alert('Ouch! Stop poking me!');

    let mySrc = bear.getAttribute('src');

    if(mySrc === 'img/bear.png') {
      bear.setAttribute ('src','img/happy-bear.png');
      
    } else {
      bear.setAttribute ('src','img/bear.png');
    }
}