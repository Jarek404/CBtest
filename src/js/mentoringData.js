const select = document.getElementById("data-mentoring");
const link = document.getElementById("mentoring-link");

const firstData = "4444-44-44";  
const secondData = "5555-55-55"; 
const thirdData = "6666-66-66"; 

const firstLink = "https://www.wp.pl/"; 
const secondLink = "https://www.facebook.com/";
const thirdLink = "https://www.onet.pl/";

select.options[0].text = firstData
select.options[1].text = secondData
select.options[2].text = thirdData

function handleDateChange() {
  const selectedIndex = select.selectedIndex;

  if (selectedIndex === 0) {
    link.href = firstLink;
  } else if (selectedIndex === 1) {
    link.href = secondLink;
  } else if (selectedIndex === 2) {
    link.href = thirdLink;
  } 
}
handleDateChange();

select.addEventListener("change", handleDateChange);