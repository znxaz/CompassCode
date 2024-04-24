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
 var table = document.getElementById(id)
  resources.forEach((resource) => {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerText = resource.name;
    tr.appendChild(td);
    let td2 = document.createElement("td");
    td2.innerText = resource.url; 
    tr.appendChild(td2)
    table.appendChild(tr);
  });
}
