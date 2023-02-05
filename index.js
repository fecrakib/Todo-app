const form=document.getElementById("form")
const input=document.getElementById("input")
const mas=document.getElementById("mas")
const posts=document.getElementById("posts")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
   
    formValidation();
})
let formValidation= ()=>{
    if(input.value===""){
        console.log("Failure state");
        mas.innerText="posts cannot be blank"
    }else{
        console.log("success stat");
        mas.innerText="";
        acceptData();
        createPost();
    }
};
let data={};
let acceptData=()=>{
    data["text"]=input.value;
    console.log(data)
}
let createPost=()=>{

    posts.innerHTML +=`
    <div>
    <p> ${data.text}</p>
    <span class="option">
        <i onClick="editpost(this)" class="fa-solid fa-pen-to-square"></i>
        <i onClick="deletepost(this)" class="fa-solid fa-trash"></i>
    </span>
    </div>
    `
    input.value="";
}
 let deletepost=(e)=>{
    e.parentElement.parentElement.remove();
 }
 let editpost=(e)=>{
    input.value=e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();

 }