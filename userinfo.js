let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");

document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;

const score = sessionStorage.getItem("points");
const gifElement = document.getElementById('Gif');
  
  if(score >= 7){
    gifElement.src = "/golden.png";
  }else if (score >= 4){
    gifElement.src = "/silverr.png"
  } else{
    gifElement.src = "bronzee.png";
  }

