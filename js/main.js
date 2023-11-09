const initApp = () => {
  // navbar
  const toggleBtn = document.getElementById("toggle-menu");
  const closeBtn = document.getElementById("close-menu");
  const navbar = document.getElementById("nav-content");

  const actionBtn = () => {
    toggleBtn.classList.toggle("hidden");
    closeBtn.classList.toggle("hidden");
    navbar.classList.toggle("hidden");
    navbar.classList.toggle("flex");
  };
  toggleBtn.addEventListener("click", actionBtn);
  closeBtn.addEventListener("click", actionBtn);

  // features
  const featuresBtn = document.querySelectorAll("#featuresBtn");
  const span = document.querySelectorAll("#featuresBtn span");
  const featureSlides = Array.from(document.querySelectorAll("#feature-slide"));

  featuresBtn.forEach((slide) => {
    slide.addEventListener("click", (e) => {
      span.forEach((e) => {
        e.classList.remove("border-b-4");;
      });

      const spenE = slide.querySelector("span");
      console.log(spenE);
      spenE.classList.add("border-b-4");
      featureSlides.forEach((x) => {
        x.classList.remove("grid");
        x.classList.add("hidden");
      });
      featureSlides[e.currentTarget.dataset.number].classList.remove("hidden");
      featureSlides[e.currentTarget.dataset.number].classList.add("grid");
    });
  });

  //   FAQs
  const questionHead = document.querySelectorAll("#question-head");
  const questionContent = Array.from(
    document.querySelectorAll("#question-content")
  );

  questionHead.forEach((question) => {
    question.addEventListener("click", (e) => {
      const arrow = question.querySelector("img");
      arrow.classList.toggle("rotate-180");
      e.currentTarget.nextElementSibling.classList.toggle("hidden");
    });
  });
};

document.addEventListener("DOMContentLoaded", initApp);
