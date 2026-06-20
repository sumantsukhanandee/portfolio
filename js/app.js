AOS.init();

const texts = [
  "Laravel Developer",
  "React Developer",
  "Full Stack Engineer",
  "Software Engineer",
];

let index = 0;

setInterval(() => {
  $("#typing").fadeOut(300, function () {
    $(this).text(texts[index]).fadeIn();

    index++;

    if (index >= texts.length) {
      index = 0;
    }
  });
}, 2000);

$('a[href^="#"]').click(function (e) {
  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    800
  );
});
