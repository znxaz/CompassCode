//First Circle and Its hidden elements
const c1r1=document.getElementById('c1r1');

    const c1r2=document.getElementById('c1r2');
    const t1r2=document.getElementById('c1r2t');
    const c2r2=document.getElementById('c2r2');
    const t2r2=document.getElementById('c2r2t');
    const line1=document.getElementById('l1');
    const line2=document.getElementById('l2');

c1r1.addEventListener('mouseover', ()=>{

c1r2.style.display='block';

t1r2.style.display='block' ;

c2r2.style.display='block';

t2r2.style.display='block' ;

line1.style.display='block';

line2.style.display='block';
});

    

c1r1.addEventListener('mouseout', ()=>{
    c1r2.style.display='none';

    t1r2.style.display ='none' ;

    c2r2.style.display='none';

    t2r2.style.display='none';

    line1.style.display='none';

    line2.style.display='none';
});



//Second Circle and its hidden elements

const c2r1=document.getElementById('c2r1');

    const c3r2=document.getElementById('c3r2');
    const t3r2=document.getElementById('c3r2t');
    const line3=document.getElementById('l3');

c2r1.addEventListener('mouseover', ()=>{
    

c3r2.style.display='block';

t3r2.style.display='block';

line3.style.display='block';
    
       
});

c2r1.addEventListener('mouseout', ()=>{
        c3r2.style.display='none';
        t3r2.style.display='none';
        line3.style.display='none';
    })
    

    //Third Circle and its hidden elements 
    
    const c3r1=document.getElementById('c3r1');
        const c4r2=document.getElementById('c4r2');
        const t4r2=document.getElementById('c4r2t');
        const line4=document.getElementById('l4');

         c3r1.addEventListener('mouseover', ()=>{
                c4r2.style.display='block';
                t4r2.style.display='block';
                line4.style.display='block';
            });

         c3r1.addEventListener('mouseout', ()=>{
            c4r2.style.display='none';
            t4r2.style.display='none';
            line4.style.display='none';
         })
    








