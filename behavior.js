document.addEventListener("DOMContentLoaded", function (event) {
  // var thumbnailElement = document.getElementById("smart_thumbnail");

  // thumbnailElement.addEventListener("click", function () {
  //   if (thumbnailElement.classList.contains("small")) {
  //     thumbnailElement.className = "";
  //   } else {
  //     thumbnailElement.className = "small";
  //   }
  // });

  let imageCard = document.querySelectorAll(".g-img");

  imageCard.forEach((el) => {
    el.addEventListener("click", () => {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
        document.body.style = "overflow: auto;";
      } else {
        el.classList.add("active");
        document.body.style = "overflow: hidden;";
      }
    });
  });

  let contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(`Sorry Messaging is disabled right now.
Kindly use my details below to reach me.
Thanks`);
  });
});
