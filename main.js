document.addEventListener("DOMContentLoaded", () => {
  // track key presses
  let keyBuffer = [];
  let lastKeyTime = Date.now();

  // scroll vi style, just because it's fun
  document.addEventListener("keydown", event => {
    const currentTime = Date.now();

    // after a second clear the key buffer
    if (currentTime - lastKeyTime > 1000) {
      keyBuffer = [];
    }

    if (event.code === "Space") {
      event.preventDefault();
    }

    keyBuffer.push(event.code);
    lastKeyTime = currentTime;

    if (keyBuffer[keyBuffer.length - 1] === "KeyK") {
      window.scrollBy(0, 100);
    }

    if (keyBuffer[keyBuffer.length - 1] === "KeyJ") {
      window.scrollBy(0, -100);
    }

    // scroll to top
    if (
      keyBuffer[keyBuffer.length - 1] === "KeyG" &&
      keyBuffer[keyBuffer.length - 2] === "KeyG"
    ) {
      window.scrollTo(0, 0);
    }

    // scroll to bottom
    if (
      keyBuffer[keyBuffer.length - 2] === "ShiftLeft" ||
      (keyBuffer[keyBuffer.length - 2] === "ShiftRight" &&
        keyBuffer[keyBuffer.length - 1] === "KeyG")
    ) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  });
});
