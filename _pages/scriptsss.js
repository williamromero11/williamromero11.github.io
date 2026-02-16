"use strict";

/* ===============================
   Toggle menus
================================ */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("filterButton").addEventListener("click", toggleFilter);
  document.getElementById("addButton").addEventListener("click", toggleAddForm);

  document.getElementById("opinionCheckbox").addEventListener("change", filterArticles);
  document.getElementById("recipeCheckbox").addEventListener("change", filterArticles);
  document.getElementById("updateCheckbox").addEventListener("change", filterArticles);

  document.getElementById("submitArticle").addEventListener("click", addNewArticle);
});

function toggleFilter() {
  const filter = document.getElementById("filterContent");
  const addForm = document.getElementById("newContent");

  filter.style.display = (filter.style.display === "none" || filter.style.display === "")
    ? "block"
    : "none";

  addForm.style.display = "none";
}

function toggleAddForm() {
  const filter = document.getElementById("filterContent");
  const addForm = document.getElementById("newContent");

  addForm.style.display = (addForm.style.display === "none" || addForm.style.display === "")
    ? "block"
    : "none";

  filter.style.display = "none";
}

/* ===============================
   Filtering articles
================================ */
function filterArticles() {
  const showOpinion = document.getElementById("opinionCheckbox").checked;
  const showRecipe = document.getElementById("recipeCheckbox").checked;
  const showUpdate = document.getElementById("updateCheckbox").checked;

  document.querySelectorAll("#articleList article").forEach(article => {
    if (article.classList.contains("opinion")) {
      article.style.display = showOpinion ? "" : "none";
    }
    if (article.classList.contains("recipe")) {
      article.style.display = showRecipe ? "" : "none";
    }
    if (article.classList.contains("update")) {
      article.style.display = showUpdate ? "" : "none";
    }
  });
}

/* ===============================
   Add new article
================================ */
function addNewArticle() {
  const title = document.getElementById("inputHeader").value.trim();
  const text = document.getElementById("inputArticle").value.trim();
  const typeInput = document.querySelector('input[name="articleType"]:checked');

  if (!title || !text || !typeInput) {
    alert("Please enter a title, text, and select an article type.");
    return;
  }

  const type = typeInput.value;
  const articleList = document.getElementById("articleList");

  const article = document.createElement("article");
  article.className = type;

  const marker = document.createElement("span");
  marker.className = "marker";
  marker.textContent =
    type === "opinion" ? "Opinion" :
    type === "recipe" ? "Recipe" : "Update";

  const h2 = document.createElement("h2");
  h2.textContent = title;

  const pText = document.createElement("p");
  pText.textContent = text;

  const pLink = document.createElement("p");
  const a = document.createElement("a");
  a.href = "moreDetails.html";
  a.textContent = "Read more...";
  pLink.appendChild(a);

  article.appendChild(marker);
  article.appendChild(h2);
  article.appendChild(pText);
  article.appendChild(pLink);

  articleList.appendChild(article);

  // Reset form
  document.getElementById("inputHeader").value = "";
  document.getElementById("inputArticle").value = "";
  typeInput.checked = false;

  document.getElementById("newContent").style.display = "none";

  // Apply current filters to new article
  filterArticles();
}
