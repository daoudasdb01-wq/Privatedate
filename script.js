const followBtn = document.getElementById("followBtn");
const joinBtn = document.getElementById("joinBtn");
const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

followBtn.addEventListener("click", () => {
  const following = followBtn.classList.toggle("following");
  followBtn.textContent = following ? "✓ Suivi" : "Suivre gratuitement";
  showToast(following ? "Profil ajouté à tes abonnements." : "Abonnement retiré.");
});

joinBtn.addEventListener("click", () => {
  showToast("Bienvenue ! Le formulaire d'inscription peut être connecté ici.");
});

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const isPosts = tab.dataset.tab === "posts";
    document.getElementById("feed").hidden = !isPosts;
    document.getElementById("mediaPanel").hidden = isPosts;
  });
});
