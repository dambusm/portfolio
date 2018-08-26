function reqListener() {
  const responseJson = JSON.parse(this.responseText);
  const content = atob(responseJson.content);
  console.log(content);
  const bgContainer = document.querySelector('.bg-container');
  bgContainer.setAttribute('data-code', content);
  bgContainer.innerText = content;
}

const oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open(
  'GET',
  'https://api.github.com/repos/dambusm/pronunciation-game/contents/scripts/game.js'
);
oReq.send();
