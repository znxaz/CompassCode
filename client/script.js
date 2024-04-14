//HTML Circle & Elements
const htmlCircle=document.getElementById('html');
    const htmlText=document.getElementById('htmlText');




//Circle C and its elements
const circleC=document.getElementById('c');
    const cText=document.getElementById('cText');
    const line1=document.getElementById('l1');
    const groupC2=document.getElementById('c2Group');
    const circleC3=document.getElementById('c3');
    const cPaths=document.getElementById('Cpaths');


 
 let cColor='lightgrey';
 let hoverDarkC='darkgrey';
 

    circleC.addEventListener('click', ()=>{
        circleC.style.fill='white';
        circleC.style.stroke='#257a99';
        groupC2.style.display='block'; //C++
        circleC3.style.display='block'; //C #
       cPaths.style.display='block';

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



    
    // C++
    const circleC2=document.getElementById('c2');
    let c2Color='salmon';
    let hoverDarkC2='red';


    
    circleC2.addEventListener('click',()=>{
        circleC2.style.fill='white';
        circleC2.style.stroke='#257a99';
        circleC2.style.strokeWidth='4px';
        c2Color='white';
        hoverDarkC2='lightgrey';
    })

    function hoverC2(){
        const hoveredObject=event.currentTarget;
        hoveredObject.style.fill=hoverDarkC2;
    }

    function  unhoverC2(){
        const unhovered=event.currentTarget;
        unhovered.style.fill=c2Color;
    }

    circleC2.addEventListener('mouseover', hoverC2);
    circleC2.addEventListener('mouseleave',unhoverC2);

    

    // C#
    const C3=document.getElementById('c3C');
    let c3Color='salmon';
    let hoverDarkC3='red';


    
    C3.addEventListener('click',()=>{
        C3.style.fill='white';
        C3.style.stroke='#257a99';
        C3.style.strokeWidth='4px';
        c3Color='white';
        hoverDarkC3='lightgrey';
    })

    function hoverC3(){
        const hoveredObject=event.currentTarget;
        hoveredObject.style.fill=hoverDarkC3;
    }

    function  unhoverC3(){
        const unhovered=event.currentTarget;
        unhovered.style.fill=c3Color;
    }

    C3.addEventListener('mouseover', hoverC3);
    C3.addEventListener('mouseleave',unhoverC3);




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

    

    //CSS Children eventListener
    const cssChildLines=document.getElementById('cssBabiesLines');
    const cssChild=document.getElementById('cssBabies');
    const javascript=document.getElementById('js');
    const jsText=document.getElementById('jsText');
    const javascriptL=document.getElementById('javascriptLine');

    let cssColor='salmon';
    let hoverDarkCSS='red';
    
    
    cssCircle.addEventListener('click', ()=>{
        cssChildLines.style.display='block';
        jsText.style.display='block';
        cssChild.style.display='block';
        javascript.style.display='block';
        javascriptL.style.display='block';
        cssCircle.style.fill='white';
        cssCircle.style.stroke='#257a99'
        cssCircle.style.strokeDasharray='none';
        cssCircle.style.strokeWidth='4px';
        cssColor='white';
        hoverDarkCSS='lightgrey';
    })


    function hoverCSS(){
        const hoveredObject=event.currentTarget;
        hoveredObject.style.fill=hoverDarkCSS;
    }

    function  unhoverCSS(){
        const unhovered=event.currentTarget;
        unhovered.style.fill=cssColor;
    }

    cssCircle.addEventListener('mouseenter', hoverCSS);
    cssCircle.addEventListener('mouseout',unhoverCSS);


    //Javascript
    const jsChild=document.getElementById('jsBabies');
    const jsPaths=document.getElementById('jsPaths');
    let jsColor='salmon';
    let hoverDarkJS='red';

    javascript.addEventListener('click', ()=>{
        jsChild.style.display='block';
        jsPaths.style.display='block';
        javascript.style.fill='white';
        javascript.style.stroke='#257a99';
        javascript.style.strokeWidth='4px';

        jsColor='white';
        hoverDarkJS='lightgrey';
    })

    function hoverJS(){
        const hoveredObject=event.currentTarget;
        hoveredObject.style.fill=hoverDarkJS;
    }

    function  unhoverJS(){
        const unhovered=event.currentTarget;
        unhovered.style.fill=jsColor;
    }

    javascript.addEventListener('mouseenter', hoverJS);
    javascript.addEventListener('mouseleave',unhoverJS);



    // NODEJS
    const nodeJS=document.getElementById('nodeJS');
    let nodeColor='salmon';
    let hoverDarkNode='red';
    nodeJS.addEventListener('click', ()=>{
        nodeJS.style.fill='white';
        nodeJS.style.stroke='#257a99';
        nodeJS.style.strokeWidth='4px';
        nodeColor='white';
        hoverDarkNode='lightgrey';
    })



    function hoverNode(){
        const hoveredObject=event.currentTarget;
        hoveredObject.style.fill=hoverDarkNode;
    }

    function  unhoverNODE(){
        const unhovered=event.currentTarget;
        unhovered.style.fill=nodeColor;
    }

    nodeJS.addEventListener('mouseenter', hoverNode);
    nodeJS.addEventListener('mouseleave',unhoverNODE);



    // PHP
    const php=document.getElementById('php');
    let phpColor='salmon';
    let hoverDarkphp='red';

    php.addEventListener('click', ()=>{
        php.style.fill='white';
        php.style.stroke='#257a99';
        php.style.strokeWidth='4px';

        phpColor='white';
        hoverDarkphp='lightgrey';

    })

    function hoverphp(){
        const hoveredObject=event.currentTarget;
        hoveredObject.style.fill=hoverDarkphp;
    }

    function  unhoverphp(){
        const unhovered=event.currentTarget;
        unhovered.style.fill=phpColor;
    }

        php.addEventListener('mouseover',hoverphp);
        php.addEventListener('mouseleave', unhoverphp);
    







