console.log("index is connected")
// {
//     "category_id": "1001",
//     "category": "Music"
// }


function loadCategories(){
    //1- fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    //2- convert promise to json
    .then((res)=> res.json())
    //3- send data to display
    .then((data) => displayCategories(data.categories))
}


function displayCategories (categories) {
    //get the container

    const catergoryContainer = document.getElementById('catergory-container')

    //Loop operation on Array of object
    for(let cat of categories){
        console.log(cat)
        //create Element
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML =`
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
        //Append the Element
        catergoryContainer.append(categoryDiv)
    }

}
loadCategories()