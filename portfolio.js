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
/* SMOOTH SCROLL */
$('a[href*="#"]')
  .click(function (event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {

        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {

          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex', '-1');
            $target.focus();
          };
        });
      }
    }
  });