const htmlCircle=document.getElementById('htmlC');
const htmlText=document.getElementById('htmlT');


const c1r1=document.getElementById('c1r1');

    const c1r2=document.getElementById('c1r2');
    const t1r2=document.getElementById('c1r2t');
    const c2r2=document.getElementById('c2r2');
    const t2r2=document.getElementById('c2r2t');
    const line1=document.getElementById('l1');
    const line2=document.getElementById('l2');
    const c1r3=document.getElementById('c1r3');
    const t1r3=document.getElementById('c1r3t');
    const line8=document.getElementById('l8');
    const line9=document.getElementById('l9');
    const line5=document.getElementById('l5');

    let circle1Color='grey';



    c1r1.addEventListener('click', ()=> {
        c1r2.style.display='block';
        c1r1.style.fill='lightgreen';

        t1r2.style.display='block' ;
        
        c2r2.style.display='block';
        
        t2r2.style.display='block' ;
        
        line1.style.display='block';
        
        line2.style.display='block';

        c1r3.style.display='block';

        t1r3.style.display='block';
        
        line8.style.display='block';

        line9.style.display='block';

        line5.style.display='block';

        circle1Color='green';

        if(circle1Color==='green' && circle2Color==='green' && circle3Color==='green'){
            htmlCircle.style.display='block';
            htmlText.style.display='block';
    }
    })

    //Second Circle and its hidden elements

    const c2r1=document.getElementById('c2r1');

        const c3r2=document.getElementById('c3r2');
        const t3r2=document.getElementById('c3r2t');
        const line3=document.getElementById('l3');
        const line6=document.getElementById('l6');

        let circle2Color='grey';

    c2r1.addEventListener('click', ()=>{
        c3r2.style.display='block';

        t3r2.style.display='block';

        line3.style.display='block';

        c2r1.style.fill='lightgreen';

        line6.style.display='block';
        
        circle2Color='green';

        if(circle1Color==='green' && circle2Color==='green' && circle3Color==='green'){
            htmlCircle.style.display='block';
            htmlText.style.display='block';
    }
    })



    //Third Circle and its hidden elements 
    
    const c3r1=document.getElementById('c3r1');
        const c4r2=document.getElementById('c4r2');
        const t4r2=document.getElementById('c4r2t');
        const line4=document.getElementById('l4');
        const line7=document.getElementById('l7');

        let circle3Color='grey';

         c3r1.addEventListener('click', ()=>{
                c4r2.style.display='block';
                t4r2.style.display='block';
                line4.style.display='block';
                c3r1.style.fill='lightgreen';
                line7.style.display='block';

                circle3Color='green';

                if(circle1Color==='green' && circle2Color==='green' && circle3Color==='green'){
                    htmlCircle.style.display='block';
                    htmlText.style.display='block';
            }
            });

           

          

          

            