// Simple auto-save in local storage
const note = document.getElementById("notepad");

note.value = localStorage.getItem("savedNote") || "";

note.addEventListener("input", () => {
  localStorage.setItem("savedNote", note.value);
});
