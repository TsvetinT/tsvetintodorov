var topButton = document.querySelector('.top-button');
/* TOP BUTTON */
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById('top-function').style.display = "block";
  } else {
    document.getElementById('top-function').style.display = "none";
  }

}
topButton.addEventListener('click', topFunction, false);

function topFunction(event) {
  document.documentElement.scrollTop = 0;
}

topFunction();
/*  STARTS */
window.onload = function () {
  var canvas = document.getElementById('stars');
  var ctx = canvas.getContext('2d');

  var W = window.innerWidth;
  var H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
  var ms = 5;
  var stars = [];


  for (var i = 0; i < ms; i++) {
    stars.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1 + 1,
      d: Math.random() + 1,
    })
  }

  function drawStars() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "white";
    ctx.beginPath();
    for (var i = 0; i < ms; i++) {
      var s = stars[i];
      ctx.moveTo(s.x, s.y);
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    moveStars();
  }
  var angle = 0;

  function moveStars() {
    angle += 0.01;
    for (var i = 0; i < ms; i++) {

      var s = stars[i];

      s.y += Math.pow(s.d, 3) + 1;
      s.x += Math.sin(angle) * 2;

      if (s.y > H) {
        stars[i] = {
          x: Math.random() * W,
          y: 0,
          r: s.r,
          d: s.d
        };
      }
    }
  }

  setInterval(drawStars, 20);
}


