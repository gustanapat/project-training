(() => {
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createDucks() {
    return [...Array(5)].map(() => {
      return {
        x: random(0, window.innerWidth),
        y: window.innerHeight,
        speedX: random(-50, 50),
        speedY: random(5, 10),
      };
    });
  }

  function setupDuckElement(duck){
    const duckElem = document.createElement('div');
    duckElem.className = 'duck';
    duckElem.style.left = `${duck.x}px`;
    duckElem.style.top = `${duck.y}px`;
    duckElem.style.backgroundImage = 'url(./images/duck/black/left/0.png)';
    document.body.appendChild(duckElem);

    return (duck,duckElem);
    
  }

  function moveDuck()

  function run() {
    const ducks = createDucks();
    const duckElems = ducks.map(setupDuckElement)
    duckElems.forEach(({duck,duckElem}) => {
      moveDuck(duckElem,duck);
    });
  }
  run();
})();
