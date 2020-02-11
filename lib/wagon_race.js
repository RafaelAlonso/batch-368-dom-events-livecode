// TODO: write your code here

const move_and_check = (number) => {
  const car = document.querySelector(`#player${number}_race .active`);
  car_move = car.nextElementSibling;
  car.classList.remove("active");
  car_move.classList.add("active");

  if (document.querySelector(`#player${number}_race .finish.active`)) {
    alert(`Congrats Player ${number} :)`);
    location.reload();
  }
}

document.addEventListener("keyup", (event) => {
  if (event.key === "q") {
    move_and_check(1);
  } else if (event.key === "p") {
    move_and_check(2);
  }
});


