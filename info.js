import { courseData } from "./courseData.js";


export function populateInfo(data) {
  document.getElementById("title").textContent = courseData[data].title;
  var logo = document.getElementById("techLogo");
  logo.alt = courseData[data].alt;
  logo.src = courseData[data].image;
  document.getElementById("introText").innerText = courseData[data].description;
  createList(data, "freeList", "videoList", "paidList");
}

export function createList(tech, freeList, videoList, paidList) {
  compileList(freeList, courseData[tech].freeResources);
  compileList(videoList, courseData[tech].videoResources);
  compileList(paidList, courseData[tech].paidResources);
}

function compileList(id, resources) {
 var ul = document.getElementById(id)
  resources.forEach((resource) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = resource.url;
    a.textContent = resource.name;
    a.target = "_blank";
    li.appendChild(a);
    ul.appendChild(li);
  });
}
