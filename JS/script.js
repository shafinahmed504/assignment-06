const loadButton=()=>{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(response=>response.json())
    .then(data=>displayButtons(data.categories))
    .catch(err=>console.log(err))
}

const displayButtons=(categories)=>{
    const btnContainer=document.getElementById('btn-container')

    for(let category of categories){
        console.log(category)

    const div=document.createElement('div');
    div.classList.add('adjustments')
    
    div.innerHTML=`
    <button class="btn w-44 h-16"> <img class="w-8 h-8" src="${category.category_icon}"/> ${category.category}  </button>
    `
    btnContainer.appendChild(div)
    }
    
}

loadButton()
displayButtons()