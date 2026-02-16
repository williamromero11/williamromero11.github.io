"use strict";

/* ---------- show/hide menus ---------- */
function showFilter() {
  const filterForm = document.getElementById("filterContent");
  const newForm = document.getElementById("newContent");

  const filterIsHidden = getComputedStyle(filterForm).display === "none";
  filterForm.style.display = filterIsHidden ? "block" : "none";

  if (filterIsHidden) newForm.style.display = "none";
}

function showAddNew() {
  const filterForm = document.getElementById("filterContent");
  const newForm = document.getElementById("newContent");

  const newIsHidden = getComputedStyle(newForm).display === "none";
  newForm.style.display = newIsHidden ? "flex" : "none";

  if (newIsHidden) filterForm.style.display = "none";
}

/* ---------- filtering ---------- */
function filterArticles() {
  const showOpinion = document.getElementById("opinionCheckbox").checked;
  const showRecipe = document.getElementById("recipeCheckbox").checked;
  const showUpdate = document.getElementById("updateCheckbox").checked;

  document.querySelectorAll("#articleList article").forEach((article) => {
    if (article.classList.contains("opinion")) {
      article.style.display = showOpinion ? "" : "none";
    } else if (article.classList.contains("recipe")) {
      article.style.display = showRecipe ? "" : "none";
    } else if (article.classList.contains("update")) {
      article.style.display = showUpdate ? "" : "none";
    }
  });
}

/* ---------- adding a new article ---------- */
function addNewArticle() {
  const titleEl = document.getElementById("inputHeader");
  const textEl = document.getElementById("inputArticle");

  const title = titleEl.value.trim();
  const text = textEl.value.trim();

  const selected = document.querySelector('input[name="articleType"]:checked');
  const type = selected ? selected.value : "";

  if (!title || !text || !type) {
    alert("Please enter a Title, pick a Type, and enter Text.");
    return;
  }

  const articleList = document.getElementById("articleList");

  // Create <article class="opinion|recipe|update">
  const article = document.createElement("article");
  article.className = type;

  // marker
  const marker = document.createElement("span");
  marker.className = "marker";
  marker.textContent =
    type === "opinion" ? "Opinion" : (type === "recipe" ? "Recipe" : "Update");
  article.appendChild(marker);

  // title
  const h2 = document.createElement("h2");
  h2.textContent = title;
  article.appendChild(h2);

  // text
  const pText = document.createElement("p");
  pText.textContent = text;
  article.appendChild(pText);

  // Read more...
  const pLink = document.createElement("p");
  const a = docu
