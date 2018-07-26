const bear = document.querySelector('img');
const feeling = document.querySelector('.feeling');
const node = document.createElement('h4');
const mad = document.createTextNode('is feeling mad');
const happy = document.createTextNode('is feeling happy!');
const sad = document.createTextNode('is feeling sad.');

bear.onclick = function () {
  let mySrc = bear.getAttribute('src');
  /*Change Bob's facial expression to mad*/
  if (mySrc === 'img/bear.png') {
    bear.setAttribute('src', 'img/mad-bear.png');
    node.appendChild(mad);
    feeling.appendChild(node);
  }
  if (mySrc === 'img/happy-bear.png') {
    bear.setAttribute('src', 'img/mad-bear.png');
    node.removeChild(happy);
    node.appendChild(mad);
    feeling.appendChild(node);
  }
  /*Change Bob's facial expression to happy*/
  if (mySrc === 'img/mad-bear.png') {
    alert('Ouch! Stop poking me!');
    bear.setAttribute('src', 'img/happy-bear.png');
    node.removeChild(mad);
    node.appendChild(happy);
    feeling.appendChild(node);
  }
}