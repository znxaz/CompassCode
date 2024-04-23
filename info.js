import { courseData } from "./courseData.js";

// window.addEventListener("hashchange", loadTechnologyInfo);
// window.addEventListener("load", loadTechnologyInfo);

function loadTechnologyInfo() {
  let hash = window.location.hash.substring(1);
  // let path = hash.split('/')[0];
  let tech = hash.split('/')[1]; 
  // if (path === info)
  populateInfo(tech);
}

export function populateInfo(data) {
  document.getElementById("title").textContent = data.title;
  var logo = document.getElementById("techLogo");
  logo.alt = data.alt;
  logo.src = data.image;
  document.getElementById("description").innerText = data.description;

  var freeList = document.getElementById("freeList");
  var videoList = document.getElementById("videoList");
  var paidList = document.getElementById("paidList");
  createList(datatech, freeList, videoList, paidList);
}

export function createList(tech, freeList, videoList, paidList) {
  compileList(freeList, courseData[tech].freeResources);
  compileList(videoList, courseData[tech].videoResources);
  compileList(paidList, courseData[tech].paidResources);
}

function compileList(id, resources) {
  let container = document.getElementById(id);
  if (!container) {
    console.error("list does not exist!");
    return;
  }
  container.innerHTML = "";
  resources.forEach((resource) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = resource.url;
    a.textContent = resource.name;
    a.target = "_blank";
    li.appendChild(a);
    container.appendChild(li);
  });
}
