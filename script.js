const checkStatusBTN = document.getElementById("check-status");
const statusCheckDOM = document.querySelector(".status-check");
const closeStatusBTN = document.getElementById("close-status-check");




const showCheckStatus = () => {
  statusCheckDOM.classList.add('showCheck')
  // console.log('clicked');
}

const closeStatusCheck = () => {
  statusCheckDOM.classList.remove('showCheck');
}

checkStatusBTN.addEventListener("click", () => {
  showCheckStatus();
});

closeStatusBTN.addEventListener("click", () => {
  closeStatusCheck();
})