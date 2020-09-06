// setInterval(createSnowflake, 100);

function createSnowflake() {
  const snow_flake = document.createElement("i");
  snow_flake.classList.add("fas");
  snow_flake.classList.add("fa-snowflake");
  snow_flake.style.left = Math.random() * window.innerWidth + "px";

  document.body.appendChild(snow_flake);

  setTimeout(() => {
    snow_flake.remove();
  }, 5000);
}

createSnowflake();
