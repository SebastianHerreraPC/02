const container = document.querySelector(".container");
const songsContainer = container.querySelector(".songs-container");
const addButton = container.querySelector(".form__submit-btn_action_add");
const resetButton = container.querySelector(".form__submit-btn_action_reset");

function renderAdded() {
  const noSongsElement = container.querySelector(".no-songs");
  if (song.length === 0) {
    resetButton.setAttribute("disabled", true);
    resetButton.classList.add("form__submit-btn_disabled");
    noSongsElement.classList.remove("no-songs_hidden");
  } else {
    resetButton.removeAttribute("disabled", false);
    resetButton.classList.remove("form__submit-btn_disabled");
    noSongsElement.classList.add("no-songs_hidden");
  }
}
function addSong(artistValue, titleValue) {
  const trackContainer = document.createElement("div");
  trackContainer.classList.add("song");

  const artistElement = document.createElement("h4");
  artistElement.classList.add("song__artist");
  artistElement.textContent = artistValue;

  const titleElement = document.createElement("p");
  titleElement.classList.add("song__title");
  titleElement.textContent = titleValue;

  const likeButtonElement = document.createElement("button");
  likeButtonElement.classList.add("song__like");

  trackContainer.append(artistElement, titleElement, likeButtonElement);

  songsContainer.append(trackContainer);
}

addButton.addEventListener("click", function () {
  const artist = document.querySelector(".input__text_type_song");
  const title = document.querySelector(".input__text_type_artist");
  addSong(artist.value, title.value);
  title.value = "";
  artist.value = "";

  resetButton.addEventListener("click", function () {
    const songs = document.querySelectorAll(".song");
    songs.forEach((item) => {
      item.remove();

      renderAdded();
    });
  });
});
