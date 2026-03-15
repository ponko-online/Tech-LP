document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dark-toggle");
  const body = document.body;

  // ページ読み込み時に localStorage を確認
  if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-mode"); // ←ここを dark-mode に変更
  }

  // ボタンで切り替え
  toggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode"); // ←ここも dark-mode に変更
    // 状態を保存
    localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
  });
});
