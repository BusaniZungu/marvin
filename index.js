document.addEventListener("DOMContentLoaded", () => {
  console.log("Pibza Nation Blog loaded!");

  const posts = document.querySelectorAll(".post-content h2");
  posts.forEach((title, index) => {
    console.log(`Post ${index + 1}: ${title.textContent}`);
  });

  const scrollBtn = document.createElement("button");
  scrollBtn.textContent = "↑";
  scrollBtn.id = "scrollToTopBtn";
  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
