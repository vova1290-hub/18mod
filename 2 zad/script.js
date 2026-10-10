window.onload = () => {
  function progress(time) {
    const block = document.getElementById("progress-bar");

    if (time < 2) {
      time = 2;
    }

    const move = () => {
      block.style.transition = `transform linear ${time}s`;
      block.style.transform = "scaleX(1)";
    };

    setTimeout(move, 0);
  }

  progress(5);
};
