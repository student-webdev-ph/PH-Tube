

// {
//     "category_id": "1001",
//     "category": "Music"
//   },


function loadCategories(){
    //fetch
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //convert promise to json
    .then((res)=> res.json())
    //send data to display
    .then((data) => displayCategories(data.categories))
}

function displayCategories (obj){
    //get the container
    const catergoryContainer = document.getElementById("catergory-container")
    //Loop opetation on array of object
    for(let cat of obj){
        console.log(cat)
        //create necessery element
        const categoryDiv = document.createElement("div")

        categoryDiv.innerHTML =`
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
        //Append the element 
        catergoryContainer.append(categoryDiv)
    }

}



loadCategories()