const select = document.getElementById("data-istqb4");
const link = document.getElementById("istqb4-link");

const firstData = "1111-11-11";  
const secondData = "2222-22-22"; 
const thirdData = "3333-33-33"; 

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


// const istqb4Select = document.getElementById("data-istqb4");
// const istqb4Link = document.getElementById("istqb4-link");

// const istqb3Select = document.getElementById("data-istqb3");
// const istqb3Link = document.getElementById("istqb3-link");

// const podstawySelect = document.getElementById("data-podstawy")
// const podstawyLink = document.getElementById("podstawy-link")

// const postmanSelect = document.getElementById("data-postman")
// const postmanLink = document.getElementById("postman-link")

// const jiraSelect = document.getElementById("data-jira")
// const jiraLink = document.getElementById("jira-link")

// const konsolaSelect = document.getElementById("data-konsola")
// const konsolaLink = document.getElementById("konsola-link")

// const wcagSelect = document.getElementById("data-wcag")
// const wcagLink = document.getElementById("wcag-link")

// const mentoringSelect = document.getElementById("data-mentoring")
// const mentoringLink = document.getElementById("mentoring-link")

// const konsultacjaSelect = document.getElementById("data-konsultacja")
// const konsultacjaLink = document.getElementById("konsultacja-link")

// console.log(istqb3Select.option[0].text)
// console.log(istqb4Select.option[0].text)

// ISTQB 4.0
// const istqb4FirstData = "1111-11-11";  
// const istqb4SecondData = "2222-22-32"; 
// const istqb4ThirdData = "3333-33-33"; 

// const istqb4FirstLink = "https://www.wp.pl/"; 
// const istqb4SecondLink = "https://www.facebook.com/";
// const istqb4ThirdLink = "https://www.onet.pl/";

// ISTQB 3.1
// const istqb3FirstData = "4444-44-44";  
// const istqb3SecondData = "5555-55-55"; 
// const istqb3ThirdData = "6666-66-66"; 

// const istqb3FirstLink = "https://www.wp.pl/"; 
// const istqb3SecondLink = "https://www.facebook.com/";
// const istqb3ThirdLink = "https://www.onet.pl/";


// PODSTAWY TESTOWANIA

// const podstawyFirstData = "1111-11-11";  
// const podstawySecondData = "2222-22-32"; 
// const podstawyThirdData = "3333-33-33" ; 

// const podstawyFirstLink = "https://www.wp.pl/"; 
// const podstawySecondLink = "https://www.facebook.com/";
// const podstawyThirdLink = "https://www.onet.pl/" ;

// POSTMAN

// const postmanFirstData = "1111-11-11";  
// const postmanSecondData = "2222-22-32"; 
// const postmanThirdData = "3333-33-33" ; 

// const postmanFirstLink = "https://www.wp.pl/"; 
// const postmanSecondLink = "https://www.facebook.com/";
// const postmanThirdLink = "https://www.onet.pl/" ;

// JIRA

// const jiraFirstData = "1111-11-11";  
// const jiraSecondData = "2222-22-32"; 
// const jiraThirdData = "3333-33-33" ; 

// const jiraFirstLink = "https://www.wp.pl/"; 
// const jiraSecondLink = "https://www.facebook.com/";
// const jiraThirdLink = "https://www.onet.pl/" ;

// KONSOLA DEWELOPERSKA

// const konsolaFirstData = "1111-11-11";  
// const konsolaSecondData = "2222-22-32"; 
// const konsolaThirdData = "3333-33-33" ; 

// const konsolaFirstLink = "https://www.wp.pl/"; 
// const konsolaSecondLink = "https://www.facebook.com/";
// const konsolaThirdLink = "https://www.onet.pl/" ;

// WCAG

// const wcagFirstData = "1111-11-11";  
// const wcagSecondData = "2222-22-32"; 
// const wcagThirdData = "3333-33-33" ; 

// const wcagFirstLink = "https://www.wp.pl/"; 
// const wcagSecondLink = "https://www.facebook.com/";
// const wcagThirdLink = "https://www.onet.pl/" ;

// MENTORING 

// const mentoringFirstData = "1111-11-11";  
// const mentoringSecondData = "2222-22-32"; 
// const mentoringThirdData = "3333-33-33" ; 

// const mentoringFirstLink = "https://www.wp.pl/"; 
// const mentoringSecondLink = "https://www.facebook.com/";
// const mentoringThirdLink = "https://www.onet.pl/" ;


// KONSULTACJA CV 

// const konsultacjaFirstData = "1111-11-11";  
// const konsultacjaSecondData = "2222-22-32"; 
// const konsultacjaThirdData = "3333-33-33" ; 

// const konsultacjaFirstLink = "https://www.wp.pl/"; 
// const konsultacjaSecondLink = "https://www.facebook.com/";
// const konsultacjaThirdLink = "https://www.onet.pl/" ;


// const option1 = istqb4Select.options[1]
// console.log(option1)


// istqb4Select.options[0].text = istqb4FirstData;
// istqb4Select.options[1].text = istqb4SecondData;
// istqb4Select.options[2].text = istqb4ThirdData;

// function handleDateChangeIstqb4() {
//   const selectedIndex = istqb4Select.selectedIndex;

//   if (selectedIndex === 0) {
//     istqb4Link.href = istqb4FirstLink;
//   } else if (selectedIndex === 1) {
//     istqb4Link.href = istqb4SecondLink;
//   } else if (selectedIndex === 2) {
//     istqb4Link.href = istqb4ThirdLink;
//   } 
// }

// // Ustaw początkowy stan
// handleDateChangeIstqb4();

// // Dodaj nasłuchiwacz zdarzeń dla ISTQB 4
// istqb4Select.addEventListener("change", handleDateChangeIstqb4);

// istqb3Select.options[0].text = istqb3FirstData;
// istqb3Select.options[1].text = istqb3SecondData;
// istqb3Select.options[2].text = istqb3ThirdData;

// function handleDateChangeIstqb3() {
//   const selectedIndex = istqb3Select.selectedIndex;

//   if (selectedIndex === 0) {
//     istqb3Link.href = istqb3FirstLink;
//   } else if (selectedIndex === 1) {
//     istqb3Link.href = istqb3SecondLink;
//   } else if (selectedIndex === 2) {
//     istqb3Link.href = istqb3ThirdLink;
//   } 
// }

// // Ustaw początkowy stan
// handleDateChangeIstqb3();

// // Dodaj nasłuchiwacz zdarzeń dla ISTQB 3
// istqb3Select.addEventListener("change", handleDateChangeIstqb3);
// istqb3Select.options[0].text = istqb3FirstData
// istqb3Select.options[1].text = istqb3SecondData
// istqb3Select.options[2].text = istqb3ThirdData

// function handleDateChangeIstqb4() {
//   const selectedIndex = istqb3Select.selectedIndex;

//   if (selectedIndex === 0) {
//     istqb3Link.href = istqb3FirstLink;
//   } else if (selectedIndex === 1) {
//     istqb3Link.href = istqb3SecondLink;
//   } else if (selectedIndex === 2) {
//     istqb3Link.href = istqb3ThirdLink;
//   } 
// }



// // Ustawienie początkowego stanu
// handleDateChangeIstqb4();

// // Dodaj nasłuchiwanie na zmiany w polu wyboru daty
// istqb4Select.addEventListener("change", handleDateChangeIstqb4);
// istqb4Select.options[0].text = istqb4FirstData
// istqb4Select.options[1].text = istqb4SecondData
// istqb4Select.options[2].text = istqb4ThirdData

// function handleDateChangeIstqb4() {
//   const selectedIndex = istqb4Select.selectedIndex;

//   if (selectedIndex === 0) {
//     istqb4Link.href = istqb4FirstLink;
//   } else if (selectedIndex === 1) {
//     istqb4Link.href = istqb4SecondLink;
//   } else if (selectedIndex === 2) {
//     istqb4Link.href = istqb4ThirdLink;
//   } 
// }



// // Ustawienie początkowego stanu
// handleDateChangeIstqb4();

// // Dodaj nasłuchiwanie na zmiany w polu wyboru daty
// istqb4Select.addEventListener("change", handleDateChangeIstqb4);
// istqb4Select.options[0].text = istqb4FirstData
// istqb4Select.options[1].text = istqb4SecondData
// istqb4Select.options[2].text = istqb4ThirdData

// function handleDateChangeIstqb4() {
//   const selectedIndex = istqb4Select.selectedIndex;

//   if (selectedIndex === 0) {
//     istqb4Link.href = istqb4FirstLink;
//   } else if (selectedIndex === 1) {
//     istqb4Link.href = istqb4SecondLink;
//   } else if (selectedIndex === 2) {
//     istqb4Link.href = istqb4ThirdLink;
//   } 
// }



// // Ustawienie początkowego stanu
// handleDateChangeIstqb4();

// // Dodaj nasłuchiwanie na zmiany w polu wyboru daty
// istqb4Select.addEventListener("change", handleDateChangeIstqb4);
// istqb4Select.options[0].text = istqb4FirstData
// istqb4Select.options[1].text = istqb4SecondData
// istqb4Select.options[2].text = istqb4ThirdData

// function handleDateChangeIstqb4() {
//   const selectedIndex = istqb4Select.selectedIndex;

//   if (selectedIndex === 0) {
//     istqb4Link.href = istqb4FirstLink;
//   } else if (selectedIndex === 1) {
//     istqb4Link.href = istqb4SecondLink;
//   } else if (selectedIndex === 2) {
//     istqb4Link.href = istqb4ThirdLink;
//   } 
// }



// // Ustawienie początkowego stanu
// handleDateChangeIstqb4();

// // Dodaj nasłuchiwanie na zmiany w polu wyboru daty
// istqb4Select.addEventListener("change", handleDateChangeIstqb4);
// istqb4Select.options[0].text = istqb4FirstData
// istqb4Select.options[1].text = istqb4SecondData
// istqb4Select.options[2].text = istqb4ThirdData

// function handleDateChangeIstqb4() {
//   const selectedIndex = istqb4Select.selectedIndex;

//   if (selectedIndex === 0) {
//     istqb4Link.href = istqb4FirstLink;
//   } else if (selectedIndex === 1) {
//     istqb4Link.href = istqb4SecondLink;
//   } else if (selectedIndex === 2) {
//     istqb4Link.href = istqb4ThirdLink;
//   } 
// }



// // Ustawienie początkowego stanu
// handleDateChangeIstqb4();

// // Dodaj nasłuchiwanie na zmiany w polu wyboru daty
// istqb4Select.addEventListener("change", handleDateChangeIstqb4);
// istqb4Select.options[0].text = istqb4FirstData
// istqb4Select.options[1].text = istqb4SecondData
// istqb4Select.options[2].text = istqb4ThirdData

// function handleDateChangeIstqb4() {
//   const selectedIndex = istqb4Select.selectedIndex;

//   if (selectedIndex === 0) {
//     istqb4Link.href = istqb4FirstLink;
//   } else if (selectedIndex === 1) {
//     istqb4Link.href = istqb4SecondLink;
//   } else if (selectedIndex === 2) {
//     istqb4Link.href = istqb4ThirdLink;
//   } 
// }



// // Ustawienie początkowego stanu
// handleDateChangeIstqb4();

// // Dodaj nasłuchiwanie na zmiany w polu wyboru daty
// istqb4Select.addEventListener("change", handleDateChangeIstqb4);
// istqb4Select.options[0].text = istqb4FirstData
// istqb4Select.options[1].text = istqb4SecondData
// istqb4Select.options[2].text = istqb4ThirdData

// function handleDateChangeIstqb4() {
//   const selectedIndex = istqb4Select.selectedIndex;

//   if (selectedIndex === 0) {
//     istqb4Link.href = istqb4FirstLink;
//   } else if (selectedIndex === 1) {
//     istqb4Link.href = istqb4SecondLink;
//   } else if (selectedIndex === 2) {
//     istqb4Link.href = istqb4ThirdLink;
//   } 
// }



// // Ustawienie początkowego stanu
// handleDateChangeIstqb4();

// // Dodaj nasłuchiwanie na zmiany w polu wyboru daty
// istqb4Select.addEventListener("change", handleDateChangeIstqb4);

// ISTQB 4.0

// const istqb4FirstData = "1111-11-11";  
// const istqb4SecondData = "2222-22-32"; 
// const istqb4ThirdData = "3333-33-33"; 

// const istqb4FirstLink = "https://www.wp.pl/"; 
// const istqb4SecondLink = "https://www.facebook.com/";
// const istqb4ThirdLink = "https://www.onet.pl/";

// istqb4Select.options[0].text = istqb4FirstData
// istqb4Select.options[1].text = istqb4SecondData
// istqb4Select.options[2].text = istqb4ThirdData

// function handleDateChangeIstqb4() {
//   const selectedIndex = istqb4Select.selectedIndex;

//   if (selectedIndex === 0) {
//     istqb4Link.href = istqb4FirstLink;
//   } else if (selectedIndex === 1) {
//     istqb4Link.href = istqb4SecondLink;
//   } else if (selectedIndex === 2) {
//     istqb4Link.href = istqb4ThirdLink;
//   } 
// }

// handleDateChangeIstqb4();

// istqb4Select.addEventListener("change", handleDateChangeIstqb4);

// // ISTQB 3.1

// const istqb3Select = document.getElementById("data-istqb3");
// const istqb3Link = document.getElementById("istqb3-link");

// const istqb3FirstData = "4444-44-44";  
// const istqb3SecondData = "5555-55-55"; 
// const istqb3ThirdData = "6666-66-66"; 

// const istqb3FirstLink = "https://www.wp.pl/"; 
// const istqb3SecondLink = "https://www.facebook.com/";
// const istqb3ThirdLink = "https://www.onet.pl/";

// istqb3Select.options[0].text = istqb3FirstData
// istqb3Select.options[1].text = istqb3SecondData
// istqb3Select.options[2].text = istqb3ThirdData

// function handleDateChangeIstqb3() {
//   const selectedIndex = istqb3Select.selectedIndex;

//   if (selectedIndex === 0) {
//     istqb3Link.href = istqb3FirstLink;
//   } else if (selectedIndex === 1) {
//     istqb3Link.href = istqb3SecondLink;
//   } else if (selectedIndex === 2) {
//     istqb3Link.href = istqb3ThirdLink;
//   } 
// }
// handleDateChangeIstqb3();

// istqb3Select.addEventListener("change", handleDateChangeIstqb3);