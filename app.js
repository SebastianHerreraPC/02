const container = document.querySelector(".container");
const songsContainer = container.querySelector(".songs-container");
const songs = songsContainer.querySelectorAll(".song");
const addButton = container.querySelector(".form__submit-btn_action_add");
const resetButton = container.querySelector(".form__submit-btn_action_reset");

function renderAdded() {
  const songs = songsContainer.querySelectorAll(".song");
  const noSongsElement = container.querySelector(".no-songs");
  if (songs.length === 0) {
    resetButton.setAttribute("disabled", true);
    resetButton.classList.add("form__submit-btn_disabled");
    noSongsElement.classList.remove("no-songs_hidden");
  } else {
    resetButton.removeAttribute("disabled", false);
    resetButton.classList.remove("form__submit-btn_disabled");
    noSongsElement.classList.add("no-songs_hidden");
  }
}
function addSong() {
  songsContainer.insertAdjacentHTML(
    "beforeend",
    `
        <div class="song">
          <h4 class="song__artist">The Cars</h4>
          <p class="song__title">Drive</p>
          <button class="song__like"></button>
        </div>`
  );
  renderAdded();
}
addButton.addEventListener("click", addSong);

renderAdded();

console.log(typeof document.querySelector(".input__text_type_artist").value);
