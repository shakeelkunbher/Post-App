var backgroundImg;
function post() {
  var title = document.getElementById("title");
  var description = document.getElementById("description");
  var posts = document.getElementById("posts");

  //.trim() removes white spaces
  if (title.value.trim() && description.value.trim()) {

    //template String
    posts.innerHTML += `<div class="card mt-2" style="background-image:url(${backgroundImg});">
      <div class="card-header">@post</div>
      <div class="card-body">
      <blockquote class="blockquote mb-0">
      <p>${title.value}</p>
      <footer class="blockquote-footer">
      ${description.value}
      </footer>
      </blockquote>
      </div>
      </div>`;
  } else {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter title and description! ",
      });
  }
  title.value = "";
  description.value = "";
}

function selectImg(src) {
    backgroundImg = src
  console.log(src);
  var bgImg = document.getElementsByClassName("bg-img");
  for (var i = 0; i < bgImg.length; i++) {
    bgImg[i].className = "bg-img";
  }

  event.target.className += " selected-img";
}
