//HTML Circle & Elements
const htmlCircle=document.getElementById('html');
    const htmlText=document.getElementById('htmlText');




//Circle C++ and its elements
const circleC=document.getElementById('c');
 const cText=document.getElementById('cText');
 const line1=document.getElementById('l1');
 
 let cColor='lightgrey';
 let hoverDarkC='darkgrey';
 

    circleC.addEventListener('click', ()=>{
        
        circleC.style.fill='white';
        circleC.style.stroke='#257a99';
        cColor='white';
        hoverDarkC='lightgrey';

        if(cColor==='white' && javaColor==='white' && pythonColor==='white'){
            htmlCircle.style.display='block';
            htmlText.style.display='block';
            line1.style.display='block';
            line2.style.display='block';
            line3.style.display='block';
        }
    })

    function hoverC(){
        const hoveredObject=event.currentTarget;
        hoveredObject.style.fill=hoverDarkC;
    }

    function  unhoverC(){
        const unhovered=event.currentTarget;
        unhovered.style.fill=cColor;
    }

    circleC.addEventListener('mouseenter', hoverC);
    circleC.addEventListener('mouseleave', unhoverC);



//Circle Java and its elements
const circleJava=document.getElementById('java');
    const textJava=document.getElementById('javaText');
    const line2=document.getElementById('l2');
    let javaColor='lightgrey';
    let hoverDarkJ='darkgrey';

    

    circleJava.addEventListener('click', ()=>{
        
        circleJava.style.fill= 'white';
        circleJava.style.stroke='#257a99';
        javaColor='white';
        hoverDarkJ='lightgrey';
        

        if(cColor==='white' && javaColor==='white' && pythonColor==='white'){
            htmlCircle.style.display='block';
            htmlText.style.display='block';
            line1.style.display='block';
            line2.style.display='block';
            line3.style.display='block';
        }
    })

    
    function hoverJ(){
        const hoveredObject=event.currentTarget;
        hoveredObject.style.fill=hoverDarkJ;
    }

    function  unhoverJ(){
        const unhovered=event.currentTarget;
        unhovered.style.fill=javaColor;
    }

    circleJava.addEventListener('mouseenter', hoverJ);
    circleJava.addEventListener('mouseleave', unhoverJ);



//Circle Python and its elements
const circlePython=document.getElementById('python');
    const line3=document.getElementById('l3');
    const textPython=document.getElementById('pythonText');
    let pythonColor='lightgrey';
    let hoverDarkP='darkgrey'

    

    circlePython.addEventListener('click', ()=>{
        
        circlePython.style.fill= 'white';
        circlePython.style.stroke='#257a99';
        pythonColor='white'
        hoverDarkP='lightgrey';

        if(cColor==='white' && javaColor==='white' && pythonColor==='white'){
            htmlCircle.style.display='block';
            htmlText.style.display='block';
            line1.style.display='block';
            line2.style.display='block';
            line3.style.display='block';
        }
    })


    function hoverP(){
        const hoveredObject=event.currentTarget;
        hoveredObject.style.fill=hoverDarkP;
    }

    function  unhoverP(){
        const unhovered=event.currentTarget;
        unhovered.style.fill=pythonColor;
    }

    circlePython.addEventListener('mouseenter', hoverP);
    circlePython.addEventListener('mouseleave', unhoverP);







//HTML Circle Event and CSS reveal
const cssCircle=document.getElementById('styling');
    const cssText=document.getElementById('styleText');
    const line4=document.getElementById('l4');
    let htmlColor='salmon';
    let hoverDarkH='red';

    htmlCircle.addEventListener('click', ()=>{
        htmlCircle.style.strokeDasharray='0';
        htmlCircle.style.strokeWidth='4px';
        htmlCircle.style.fill='white';
        htmlCircle.style.stroke='#257a99';
        cssCircle.style.display='block';
        cssText.style.display='block';
        line4.style.display='block';
        htmlColor='white';
        hoverDarkH='lightgrey';
    })


    function hoverHTML(){
        const hoveredObject=event.currentTarget;
        hoveredObject.style.fill=hoverDarkH;
    }

    function  unhoverHTML(){
        const unhovered=event.currentTarget;
        unhovered.style.fill=htmlColor;
    }

    htmlCircle.addEventListener('mouseenter', hoverHTML);
    htmlCircle.addEventListener('mouseleave', unhoverHTML);