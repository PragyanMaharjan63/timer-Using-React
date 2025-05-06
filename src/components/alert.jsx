export function playAlert() {
  const play = () => {
    let audio = new Audio("/audio/videoplayback.mp3");
    let play = audio.play();

    play.then(() => {
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      }, 1500);
    });
  };
  return play();
}
