
/** Cargar un fichero JSON */

/** 

window.onload = () => {
  let numPage = 1;
  let id = "";
  let btn1 = document.querySelector(`#restar`);
  let btn2 = document.querySelector(`#sumar`);
  let lista = document.querySelector("#usuarios");
  let buscar = document.querySelector("#buscar");

  cargaDatos();

  btn1.addEventListener("click", ()=>{
    numPage = 1; 
    cargaDatos();
  })
  btn2.addEventListener("click", ()=>{
    numPage = 2; 
    cargaDatos();
  })

  function cargaDatos(url){
   
    lista.innerHTML = "";
    fetch(`https://reqres.in/api/users?page=${numPage}`)
    .then(res => res.json())
    .then(res => {

      let data = res.data;

     
     data.sort((a, b) => a.first_name.localeCompare(b.first_name));
     data.forEach((user) => {
         let avatar = `https://source.boringavatars.com/bauhaus/50/${user.first_name}%20${user.last_name}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`;
         let item=`<li class="user">
                  <img src="${avatar}" alt="${user.first_name} "/>
                  <span class="name">${user.first_name}</span>
                  <span class="surname"> ${user.last_name} </span>

          </li>`;
          lista.innerHTML += item;
     });
   })

  .then(() => {
      let monkeyList = new List('test-list', {
          valueNames: ['name', 'surname']
        });
  });}
  
}

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////



/** 
 fetch(`https://reqres.in/api/users/${numPage}`)

 buscar.addEventListener("click", ()=>{
  numPage = 2 imput.vale; 
  cargaDatos();
})

*/


window.onload = () => {
  let numPage = 1;
  let btn1 = document.querySelector(`#restar`);
  let btn2 = document.querySelector(`#sumar`);
  let lista = document.querySelector("#usuarios");
  let buscar = document.querySelector("#buscar");
  let buscador= document.querySelector("#search");

  cargaDatos(`https://reqres.in/api/users/`);

  btn1.addEventListener("click", ()=>{
    numPage = 1; 
    cargaDatos(`https://reqres.in/api/users?page=${numPage}`);
  })
  btn2.addEventListener("click", ()=>{
    numPage = 2; 
    cargaDatos(`https://reqres.in/api/users?page=${numPage}`);
  })

  buscar.addEventListener("click",() =>{
    cargaDatos(`https://reqres.in/api/users/${search.value}`);
    search.value= ""; /** PARA QUE RECARGE LA PAGINA AL INTRODUCIR EL NUMERO */
  })
  
  function cargaDatos(url){
   
    lista.innerHTML = "";
    fetch(url)
    .then(res => res.json())
    .then(res => {

      let data = res.data;
  
     if(Array.isArray(data)){
      data.sort((a, b) => a.first_name.localeCompare(b.first_name));
      data.forEach((user) => {
          let avatar = `https://source.boringavatars.com/bauhaus/50/${user.first_name}%20${user.last_name}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`;
          let item=`<li class="user">
                   <img src="${avatar}" alt="${user.first_name} "/>
                   <span class="name">${user.first_name}</span>
                   <span class="surname"> ${user.last_name} </span>
 
           </li>`;
           lista.innerHTML += item;
      });
     }
     else{

     //console.log(data.first_name)
      let avatar = `https://source.boringavatars.com/bauhaus/50/${data.first_name}%20${data.last_name}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`;
      let item=`<li class="user">
               <img src="${avatar}" alt="${data.first_name} "/>
               <span class="name">${data.first_name}</span>
               <span class="surname"> ${data.last_name} </span>

       </li>`;
       lista.innerHTML += item;
     }
    
   })

  .then(() => {
      let monkeyList = new List('test-list', {
          valueNames: ['name', 'surname']
        });
  });}

  

}