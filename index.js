async function getData(place) {
  const url =
    "https://timezone.abstractapi.com/v1/current_time/?api_key=777feccb48064d36b68630439fd8590b&location=`${place}`";
  const res = await fetch(url);
  data = await res.json();
  // time= data.datatime;
  console.log(data);

  document.getElementById(
    "time"
  ).innerText = `${place}'s time = ${data.datetime} ${data.timezone_location}`;
}

document.querySelectorAll(".allPaths").forEach((e) => {
  e.addEventListener("mouseover", function () {
    window.onmousemove = function (j) {
      x = j.clientX;
      y = j.clientY;
      document.getElementById("name").style.top = y - 20 + "px";
      document.getElementById("name").style.left = x - 20 + "px";
    };
    e.style.fill = "pink";
    document.getElementById("name").innerText = e.id;
    document.getElementById("name").style.opacity = 1;
  });
  e.addEventListener("mouseleave", function () {
    e.style.fill = "#ececec";
    document.getElementById("name").style.opacity = 0;
  });
  e.addEventListener("click", function () {
    getData(e.id);
  });
});
