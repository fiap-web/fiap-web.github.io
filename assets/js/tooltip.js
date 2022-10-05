const body = document.querySelector('body');
const header = document.querySelector('.top-site');

body.addEventListener("mouseover",(e)=>{
    body.style.background = "gray"
})
body.addEventListener("mouseout",(e)=>{
    body.style.background = "red"
})
// tooltip.addEventListener("mouseover",(e)=>{
//     console.log("Altura da pagina ", body.clientHeight)
//     console.log("Largura da pagina ", body.clientWidth)
//     console.log("Altura do tooltip ", tooltip.clientHeight)
//     console.log("Largura do tooltip ", tooltip.clientWidth)
//     console.log("Altura do mouse ", e.clientY)
//     console.log("Largura do mouse ", e.clientX)
//     console.log("altura do class tooltip ", tooltipclass.width)
//     const newDiv = document.createElement('div');
//     newDiv.classList.add('tooltip');
//     newDiv.innerText = "Mensagem de tooltip";
//     newDiv.style.position = "absolute"; 
//     newDiv.style.top = e.clientY + "px";
//     newDiv.style.left =  (e.clientX + 200 > body.clientWidth ? e.clientX - 210 : e.clientX + 200) + "px" ;
//     newDiv.style.display = "flex";
//     header.appendChild(newDiv);

// })

// tooltip.addEventListener("mouseout",(e)=>{ 
//     document.querySelector('.tooltip').remove()
// })

const tooltip = (id,text) => {
    const tooltip = document.querySelector(id);
    tooltip.addEventListener("mouseover",()=>{
        const newDiv = document.createElement('div');
        newDiv.classList.add('tooltip');
        newDiv.innerHTML = text;
        newDiv.style.position = "absolute"; 
        newDiv.style.top = tooltip.offsetTop + "px";
        newDiv.style.left =  (tooltip.offsetLeft + 200 > body.clientWidth ? tooltip.offsetLeft - 210 : tooltip.offsetLeft + 200) + "px" ;
        newDiv.style.display = "flex";
        header.appendChild(newDiv);
    })
    tooltip.addEventListener("mouseout",()=>{
        if(document.querySelector('.tooltip')){
        document.querySelector('.tooltip').remove()
    } 
    })
}   

tooltip("#tooltip","Lorem ipsum");