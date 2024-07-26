import { UserRegister } from "../assets/models/UserRegister.js";
document.querySelector(".formRegister").onsubmit = function (e) {
  e.preventDefault();
  let user = new UserRegister();
  let arrUser = document.querySelectorAll(".formRegister .form-register ");
  let female = document.querySelector("#female");
  console.log(arrUser);
  for (let input of arrUser) {
    user[input.id] = input.value;
  }
  if (female.checked) {
    user.genger = true;
  } else {
    user.genger = false;
  }
  console.log(user);
  let res = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    data: user,
  });
};
