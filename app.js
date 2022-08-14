function onClickNavHandler() {
  for (const link of document.querySelectorAll('nav li a')) {
    link.addEventListener('click', function (event) {
      // hide all containers
      document.querySelectorAll('nav li a').forEach(el => (document.querySelector(`.${el.getAttribute('href').substring(1)}`).style.display = 'none'))

      // remove active class
      document.querySelectorAll('nav li a').forEach(el => el.classList.remove('active'))

      // get the link that was clicked and target that container
      document.querySelector(`.${event.currentTarget.getAttribute('href').substring(1)}`).style.display = 'flex'

      // add activ eclass to node element
      link.classList.add('active')
    })
  }
}

onClickNavHandler()

document.getElementById('year').innerHTML = new Date().getFullYear()

// Get the modal
console.log("i am the intro");
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("my-images")[1]
// this.myNotes.addEventListener("click", e => this.clickHandler(e))
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  console.log("i am clicked");
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
