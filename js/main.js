let span = document.querySelector(".up");

window.onscroll = function () {
  if (this.scrollY >= 1000) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
  this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


// احضار الزر والقائمة المنسدلة باستخدام جافاسكريبت
var dropdownBtn = document.getElementById("js");
var dropdownMenu = document.getElementById("ul");

// الوظيفة التي تحدد سلوك القائمة المنسدلة عند النقر على الزر
function toggleDropdown() {
  if (dropdownMenu.style.display === "none") {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
  }
}

// تسجيل الوظيفة في الحدث الذي يتم النقر فيه على الزر
dropdownBtn.addEventListener("click", toggleDropdown);

// تسجيل الوظيفة في الحدث الذي يتم النقر فيه في أي مكان آخر على الصفحة
document.addEventListener("click", function(event) {
  if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.style.display = "none";
  }
});


