import { setSkillStatus } from "./api.js";

const buttonContainer = document;
document.querySelector('.card-container');

  buttonContainer.addEventListener('click', function(event) {
    if(event.target.classList.contains('goTo')){
        const hash = event.target.dataset.hash;
        window.location.hash = hash; 
    }
  })

    document.body.addEventListener('change', function(event) {
      if (event.target.classList.contains('statusSelect')) {
        setSkillStatus.call(event.target);
      }
    });


    export function updateOptions(courseStatuses) {
      courseStatuses.forEach((courseStatus) => {
        var selectElement= document.querySelector(`select[data-course-id="${course.courseID}]"`)
        if(selectElement) {
          selectElement.value = courseStatus.status; 
        }
      })
    }



  
