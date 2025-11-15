let boxes=document.querySelectorAll(".box")
let resetb=document.querySelector("#reset")
let  newGame=document.querySelector("#new-btn")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let turn0=true;
const winPatterns=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [3,4,5],
  [6,7,8],
  [2,4,6],
  [1,4,7],
  [2,5,8]
];
boxes.forEach((box) => {
  box.addEventListener("click",()=>{
    console.log("Button clicked")
    if(turn0)
    {
      box.innerText="O"
      turn0=false
    }
    else{
      box.innerText="X"
      turn0=true
    }
    box.disabled=true;
    checkWinner();
  }
  );
  
});
const reset=()=>
{
   turn0=true;
   enable();
   msgContainer.classList.add("hide")
}
const disable=()=>
{
   for(box of boxes)
   {
     box.disabled=true;
   }
}
const enable=()=>
{
   for(box of boxes)
   {
     box.disabled=false;
     box.innerText=""
   }
}
const showWinner=(winner)=>
{
   msg.innerText=`Congratulations to winner ${winner}`
   msgContainer.classList.remove("hide")
   disable();
}
const checkWinner=()=>
{
    for(pattern of winPatterns)
    {
      let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
    if(pos1!="" &&pos2!=""&&pos3!="")
    {
       if(pos1===pos2&&pos2===pos3)
       {
         console.log("Winner",pos1)
         showWinner(pos1);

       }
    }
       
    }
    
}
newGame.addEventListener("click",reset)
resetb.addEventListener("click",reset)
