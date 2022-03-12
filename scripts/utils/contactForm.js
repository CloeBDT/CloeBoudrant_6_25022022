function displayModal() {
  const modal = document.getElementById('contact_modal');
  // const gotohead = document.getElementById("header");
  // gotohead.scrollIntoView({behavior: "auto", block:"center", inline:"nearest"});
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'none';
}
