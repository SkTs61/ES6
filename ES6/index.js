var arr= [
    {
        name:"Alper",
        age:33,
        job:"salesman",
        salary: 2000

    },
    {
        name:"Zeynep",
        age:26,
        job:"poltical scientist",
        salary: 3000

    },

    {
        name:"Mustafa",
        age: 48,
        job: "teacher",
        salary: 4000
    },
    {
        name:"Gokhan",
        age:41,
        job:"artist",
        salary:5000
    }

];




const app=document.getElementById("app");
const nameForm=document.getElementById("nameForm");
const nameInput=document.getElementById("name");

window.onload = function() {
    console.log("sayfa yuklendi");
};





nameForm.addEventListener("submit", (event) =>{
event.preventDefault();
console.log("input value", nameInput.value);
const filteredArray=arr.filter((item)=>{
    if(item.name.includes(nameInput.value)){
        return true;
    }
    else {
        return false;
    }
    
});
console.log("filtered name", filteredArray);
});

nameInput.addEventListener("input", (event) => {
    console.log(event.target.value);

});

function listPersons(parametreDizi) {
    app.innerHTML="";
    if(parametreDizi.length === 0) {

        const p=document.createElement("p");
        p.innerText="There isn't any available person under this name";
        app.appendChild(p);
        

    }

    else {
        parametreDizi.map((item, index) => {

            const div=document.createElement("div");
            div.innerHtml =`
            <h1 style="color:${item.age >= 30 ? 'red' : 'black'}">${index+1} - ${item.name}</h1
            <p>Age: ${item.age}</p>
            <p>Job: ${item.job}</p>
            <p>Salary: ${item.salary}</p>`;
            
            
            app.appendChild(div);
            
        
        });


    }
   
listPersons(filteredArray);
};