import { setSkillStatus } from "./api.js";
import { courseData } from "./courseData.js";

const buttonContainer = document;
document.querySelector(".card-container");

buttonContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("goTo")) {
    const hash = event.target.dataset.hash;
    window.location.hash = hash;
  }
});

document.body.addEventListener("change", function (event) {
  if (event.target.classList.contains("statusSelect")) {
    setSkillStatus.call(event.target);
  }
});

export function updateOptions(courseStatuses) {
  courseStatuses.forEach((courseStatus) => {
    var selectElement = document.querySelector(
      `select[data-course-id="${course.courseID}]"`
    );
    if (selectElement) {
      selectElement.value = courseStatus.status;
    }
  });
}

export function loadSkills() {
  console.log("hi"); 
  const skillsBody = document.getElementById("skills-body");
  for (let course in courseData) {
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    let card = document.createElement("div");
    card.classList.add("card");
    cardContainer.appendChild(card);
    let courseImage = document.createElement("img");
    courseImage.src = courseData[course].image;
    courseImage.alt = courseData[course].alt;
    courseImage.classList.add("cardImage");
    card.appendChild(courseImage);
    let cardDetails = document.createElement("div");
    cardDetails.classList.add("cardDetails");
    card.appendChild(cardDetails);
    let cardText = document.createElement("h4");
    cardText.textContent = courseData[course].title;
    cardText.classList.add("cardText");
    cardDetails.appendChild(cardText);
    let cardButtons = document.createElement("div");
    cardButtons.classList.add("cardButtons");
    cardDetails.appendChild(cardButtons);
    let startButton = document.createElement("button");
    startButton.id = courseData[course].courseId;
    startButton.classList.add("goTo");
    startButton.setAttribute("data-hash", courseData[course].dataHash);
    startButton.textContent = "Start";
    cardButtons.appendChild(startButton);
    let selectButton = document.createElement("select");
    selectButton.id = `selectStatus${course}`;
    selectButton.name = "status";
    selectButton.classList.add("statusSelect");
    selectButton.setAttribute("data-course-id", courseData[course].courseID);
    const status = ["Active", "On Hold", "Complete", "Skipped"];
    status.forEach((status) => {
      let option = document.createElement("option");
      option.text = status;
      option.value = status.toLocaleLowerCase();
      option.classList.add = status.toLocaleLowerCase();
      selectButton.add(option);
    });
    cardButtons.appendChild(selectButton);
    skillsBody.appendChild(cardContainer);
  }
}
