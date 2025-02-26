const allProject=document.querySelectorAll("#project")

const mainHolder=document.querySelector("#main-holder")

const numberHolder=document.querySelector(".number-holder")


let debit=3//number of content in each container

//number of container
const divNumber=Math.ceil(((allProject.length)/debit))


let i=0

let tab=[]
//creating each container
while (i<divNumber) {
    const projectHolder=document.createElement("div")
    projectHolder.className="project-holder-mine"
    tab[i]=projectHolder
    i=i+1
}



let s=0
//creating numbers
let tabNumber=[]
while (s<divNumber) {
    const numberUp=document.createElement("h6")
    numberUp.className="number-of-div"
    numberUp.textContent=`${s+1}`
    tabNumber[s]=numberUp
    s=s+1
}

numberHolder.innerHTML=""

//append number into HTML element
tabNumber.forEach((h6Number) => {
    numberHolder.innerHTML += h6Number.outerHTML
});



let r=0
let p=debit//number of content in each container

//FRONT END INFINITE PAGINATION

const d=Math.ceil(((allProject.length)/debit))

const l=(allProject.length)/debit

//Apppending each CONNTENT IN EACH CONTAINER
tab.forEach(projectHolder => {

     if( d >= l && p > allProject.length) {
        p=(allProject.length)
      }
      if ( r <= (allProject.length) ) {
        while (r < p ) {
          console.log("this is r",r);
          console.log("this is p",p);
          projectHolder.innerHTML += allProject[r].outerHTML
          r=r+1
        }
      }

     r=r
     p=r+3

    

});



//APPENDIND EACH CONTAINER IN HTML ELEMENT
mainHolder.innerHTML=""
tab.forEach(projectHolder => {
    mainHolder.innerHTML +=projectHolder.outerHTML
});


//GET ALL CONTAINER AND NUMBER TO FETCH DYNAMICLY
const allH6Eelement=document.querySelectorAll(".number-of-div")

const allHolderElement=document.querySelectorAll(".project-holder-mine")


let h=1

while (h<allHolderElement.length) {
    allHolderElement[h].style.transform="scale(0)"
    h=h+1
}
console.log(allHolderElement);

//FETCHING DYNAMICLY EACH CONTAINER
allH6Eelement.forEach((h6Element,alpha) => {
    h6Element.addEventListener("click",()=>{
        alpha=parseInt(alpha)

        console.log("this is alpha",alpha);
        
        allHolderElement.forEach((divElement,beta) => {
           beta=parseInt(beta)
            if (alpha==beta) {

                divElement.style.transition="0.5s"
                divElement.style.transform="scale(1)"
                
            } else {
                divElement.style.transition="none"
                divElement.style.transform="scale(0)"
                
            }
        });
    })
});



//OPEN SECTION

const openSection=document.querySelectorAll("#open-section")
const sectionToOpen=document.querySelectorAll("#section-to-open")

console.log(openSection);
console.log(sectionToOpen);


let q=1

while (q<sectionToOpen.length) {
    sectionToOpen[q].style.transform="scale(0)"
    q=q+1
}

openSection.forEach((openElement,omega) => {
    openElement.addEventListener("click",()=>{
      omega=parseInt(omega)
      sectionToOpen.forEach((toElement,teta) => {
        teta=parseInt(teta)
        if (omega==teta) {
              toElement.style.transition="0.5s"
              toElement.style.transform="scale(1.0)rotateX(360deg)"
        } else {
             toElement.style.transition="none"
             toElement.style.transform="scale(0)"
        }
      });
    })
});



const skillLeftAnimation=openSection[2]

const htmlAnimation=document.querySelector("#html-animation")
const cssAnimation=document.querySelector("#css-animation")
const javaAnimation=document.querySelector("#javascript-animation")
const phpAnimation=document.querySelector("#php-animation")
const nodeAnimation=document.querySelector("#node-animation")
const expressAnimation=document.querySelector("#express-animation")
const mathAnimation=document.querySelector("#math-animation")
const physicsAnimation=document.querySelector("#physic-animation")


//////text content

const textContentHtml=document.querySelectorAll("#html-textcontent")
const textContentPhp=document.querySelector("#php-textcontent")
const textContentNode=document.querySelector("#node-textcontent")

console.log("txt html",textContentHtml);
console.log("txt php",textContentPhp);
console.log("txt node",textContentNode);



skillLeftAnimation.addEventListener("click",async()=>{

          htmlAnimation.style.animation='none'
          phpAnimation.style.animation='none'
          cssAnimation.style.animation='none'
          javaAnimation.style.animation='none'
          nodeAnimation.style.animation='none'
          expressAnimation.style.animation='none'
          mathAnimation.style.animation='none'
          physicsAnimation.style.animation='none'

          htmlAnimation.offsetWidth
          phpAnimation.offsetWidth
          cssAnimation.offsetWidth
          javaAnimation.offsetWidth

          nodeAnimation.offsetWidth
          expressAnimation.offsetWidth
          mathAnimation.offsetWidth
          physicsAnimation.offsetWidth


     htmlAnimation.style.animation=`html-animation 5s ease-in-out forwards`
     cssAnimation.style.animation=`html-animation 5s ease-in-out forwards`
     javaAnimation.style.animation=`html-animation 5s ease-in-out forwards`
     expressAnimation.style.animation=`html-animation 5s ease-in-out forwards`
     mathAnimation.style.animation=`html-animation 5s ease-in-out forwards`
     physicsAnimation.style.animation=`html-animation 5s ease-in-out forwards`

     phpAnimation.style.animation=`php-animation 5s ease-in-out forwards`
     nodeAnimation.style.animation=`node-animation 5s ease-in-out forwards`

         
        let g=0
       let f=0
      let z=0

    
const htmlControler=async()=>{
    setInterval(() => {
        if (g <= 99) {
            g=g+1
            textContentHtml.forEach(hundred => {
                hundred.textContent=""
                hundred.textContent=`${g}%`
            });
        }
    }, 50);
}



const phpControler=async()=>{
    setInterval(() => {
        if (f <= 79) {
            f=f+1
            textContentPhp.textContent=""
            textContentPhp.textContent=`${f}%`
        }
    }, 50);
}


const nodeControler=async()=>{
    setInterval(() => {
        if (z <= 89) {
            z=z+1
            textContentNode.textContent=""
            textContentNode.textContent=`${z}%`
        }
    }, 50);
}



nodeControler()
phpControler()
htmlControler()



})



