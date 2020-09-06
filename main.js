setInterval(createSnowflake, 100);

function createSnowflake() {
  const snow_flake = document.createElement("i");
  snow_flake.classList.add("fas");
  snow_flake.classList.add("fa-snowflake");
  snow_flake.style.left = Math.random() * window.innerWidth + "px";
  snow_flake.style.animationDuration = Math.random() * 3 + 2 + "s"; // Num between 2-5
  snow_flake.style.opacity = Math.random();
  snow_flake.style.fontSize = Math.random() * 10 + 10 + "px"; // Num between 10 - 20

  document.body.appendChild(snow_flake);

  setTimeout(() => {
    snow_flake.remove();
  }, 5000);
}

createSnowflake();
