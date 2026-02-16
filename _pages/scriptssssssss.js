"use strict";

/* ---------- show/hide menus ---------- */
function showFilter() {
  const filterForm = document.getElementById("filterContent");
  const newForm = document.getElementById("newContent");

  // toggle filter menu
  const filterIsHidden = (getComputedStyle(filterForm).display === "none");
  filterForm.style.display = filterIsHidden ? "block" : "none";

  // hide add-new form when opening filter
  if (filterIsHidden) newForm.style.display = "none";
}

function showAddNew() {
  const filterForm = document.getElementById("filterContent");
  const newForm = document.getElementById("newContent");

  // toggle add-new form
  const newIsHidden = (getComputedStyle(newForm).display === "none");
  newForm.style.display = newIsHidden ? "flex" : "none";

  // hide filter menu when opening add-new
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

  // Determine selected type (radio values are opinion/recipe/update)
  const selected = document.querySelector('input[name="articleType"]:checked');
  const type = selected ? selected.value : "";

  if (!title || !text || !type) {
    alert("Please enter a Title, pick a Type, and enter Text.");
    return;
  }

  const articleList = document.getElementById("articleList");

  // Build article element matching your existing structure + CSS hooks
  const article = document.createElement("article");
  article.className = type;

  // marker (CSS colors it based on parent class) :contentReference[oaicite:3]{index=3}
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

  // "Read more..." link (matches your existing articles) :contentReference[oaicite:4]{index=4}
  const pLink = document.createElement("p");
  const a = document.createElement("a");
  a.href = "moreDetails.html";
  a.textContent = "Read more...";
  pLink.appendChild(a);
  article.appendChild(pLink);

  // Add to the list
  articleList.appendChild(article);

  // Re-apply current filters so the new article follows the checkbox state
  filterArticles();

  // Clear form
  titleEl.value = "";
  textEl.value = "";
  document.querySelectorAll('input[name="articleType"]').forEach((r) => (r.checked = false));

  // Optional: hide form after adding (comment out if you want it to stay open)
  document.getElementById("newContent").style.display = "none";
}
