let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
btn.addEventListener("click",function(){

    let item = document.createElement("li");
    ul.appendChild(item);
    item.innerText=inp.value;

    let  delbtn = document.createElement("button");
    delbtn.innerText="delete";
    item.appendChild(delbtn);
    delbtn.classList.add("delete");
    inp.value="";
   

});
ul.addEventListener("click",function (event){
   if(event.target.nodeName=="BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
   }
})
