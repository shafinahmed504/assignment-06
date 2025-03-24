const loadButton=()=>{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(response=>response.json())
    .then(data=>displayButtons(data.categories))
    .catch(err=>console.log(err))
}

const loadCategories=()=>{
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then(response=>response.json())
    .then(data=>displayCategories(data.pets))
}



const displayButtons=(categories)=>{
    const btnContainer=document.getElementById('btn-container')

    for(let category of categories){
        // console.log(category)

    const div=document.createElement('div');
    div.classList.add('adjustments')
    
    div.innerHTML=`
    <button class="btn w-44 h-16"> <img class="w-8 h-8" src="${category.category_icon}"/> ${category.category}  </button>
    `
    btnContainer.appendChild(div)
    }
    
}

const displayCategories=(pets)=>{
    const petsContainer=document.getElementById('category-container') 
    for(let pet of pets){
       const div=document.createElement('div')
       div.classList.add('adjustments2')
       div.innerHTML=`
       <div class="card bg-base-100 shadow-sm w-[200px] h-[332px]">
       <figure class="h-[200px]">
    <img class="h-full w-full object-cover"
      src="${pet.image}" />
  </figure>
  <div class="pl-4">
  <h1 class="font-bold text-xl">${pet.pet_name}</h1>
  <div class="flex gap-2">
  <img class="w-6 h-6" src="https://img.icons8.com/fluency-systems-regular/48/apps--v1.png" alt="apps--v1"/>
  <p class="text-[#131313B3] text-base font-normal">Breed:${pet.breed}</p></div>
  <div class="flex gap-2">
  <img class="w-6 h-6"  src="https://img.icons8.com/ios/50/calendar-1.png" alt="calendar-1"/>
  <p class="text-[#131313B3] text-base font-normal">Birth:${pet.date_of_birth}</p></div>
  <div class="flex gap-2">
  <img class="w-6 h-6" src="https://img.icons8.com/ios/50/gender.png" alt="gender"/>
  <p class="text-[#131313B3] text-base font-normal">Gender:${pet.gender}</p></div>
  <div class="flex gap-2">
  <img class="w-6 h-6" src="https://img.icons8.com/material-sharp/24/us-dollar.png" alt="us-dollar"/>
  <p class="text-[#131313B3] text-base font-normal">${pet.price}</p></div>
  </div>
<div class="flex justify-evenly mb-2">
<button class="btn mt-3"><img class="w-3 h-3" src="https://img.icons8.com/material-rounded/24/facebook-like--v1.png" alt="facebook-like--v1"/></button>
<button class="btn mt-3 w-[45.6px] h-[40px] ">Adopt</button>
<button class="btn mt-3 w-[45.6px] h-[40px]">Details</button>
</div>

       </div>
       
       `
       petsContainer.appendChild(div)
    }
    


}

loadButton()
loadCategories()

// const cardDemo={
//     breed: "Golden Retriever",
// category:"Dog",
// date_of_birth: "2023-01-15",
// gender: "Male",
// image: "https://i.ibb.co.com/p0w744T/pet-1.jpg",
// petId:1,
// pet_details: 
// "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families.Born on January 15, 2023, he enjoys playing outdoors and is especially great with children.Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
// pet_name: "Sunny",
// price:1200,
// vaccinated_status: "Fully"
// }

