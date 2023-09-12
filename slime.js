
      






$(document).ready(function(){
  $('slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    arrow
  });
})

  //using selectors inside the element
  const questions = document.querySelectorAll(".question");

  questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");
    // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});
