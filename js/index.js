// ~~~~~~~~~~~~~~~~~~~~~~ 'Resa' section Events ~~~~~~~~~~~~~~~~~~~~~~

const resaButtons = document.querySelectorAll(".resaAvailable");
const resaHourLines = document.querySelectorAll(".resaHourLine");
let resaButtonClicked = false;
let resaHourB, resaHourL = "";
let resaData = new Object();

// changes the resa button opacity when clicked
resaButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    resaButtons.forEach((btn) => {
      btn.style.opacity = "1";
    });
    if (resaButtonClicked == false) {
      btn.style.opacity = "0.5";
      resaButtonClicked = true;
      // console.log(`resaButtonClicked is now: ${resaButtonClicked}`);
    } else {
      btn.style.opacity = "1";
      resaButtonClicked = false;
      // console.log(`resaButtonClicked is now: ${resaButtonClicked}`);
    }
    resaHourB = e.path[1].childNodes[1].childNodes[0].data;
    console.log("resaHourB: " + resaHourB);
  });
});

// gets the hour value of the selected line
resaHourLines.forEach((line) => {
  line.addEventListener('click', (e) => {
    // console.log(e);
    resaHourL = e.path[0].childNodes[0].data;
    if (resaHourL == "Réserver" || resaHourL == "Complet") {
      resaHourL = resaHourB;
    }
    console.log("resaHourL: " + resaHourL);
  });
});

// get all elements when "Suivant" button is clicked
resaNextButton.addEventListener('click', () => {

if (roomSelect.value != "" && playersNumber.value != "" && resaGameDate.value != "" && resaHourL != "") {
  resaData = new Object();
  resaData.room = roomSelect.value;
  // console.log("resaData.room: " + resaData.room);
  resaData.playersNumber = playersNumber.value;
  // console.log("resaData.playersNumber: " + resaData.playersNumber);
  resaData.gameDate = resaGameDate.value;
  // console.log("resaData.gameDate: " + resaData.gameDate);
  resaData.gameHour = resaHourL;
  // console.log("resaData.gameHour: " + resaData.gameHour);
  console.log(resaData);
} else {
  alert("Merci de renseigner: la salle, le nombre de joueurs, la date et l'heure de votre partie.");
}

});

// Resa-Recap 'modal'

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
resaNextButton.onclick = function() {
  myModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  myModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == myModal) {
    myModal.style.display = "none";
  }
}