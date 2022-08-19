var block = document.querySelectorAll("#abc");

var btn = document.querySelector("button")
// clearing block function
function clear()
{
  for (var i = 0; i < block.length; i++) {
    block[i].textContent = " "
  }
}
btn.addEventListener("click",clear)

// adding x or o due to click

function add()
{
  if (this.textContent=="") {
    this.textContent="x"
  }
  else if (this.textContent=="x") {
    this.textContent="o"
  }
  else {
    this.textContent=""
  }
}

for (var i = 0; i < block.length; i++) {
  block[i].addEventListener("click",add)
}
