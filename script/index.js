// {
//     "category_id": "1001",
//     "category": "Music"
// }



// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//       {
//         "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//         "profile_name": "Olivia Mitchell",
//         "verified": ""
//       }
//     ],
//     "others": {
//       "views": "100K",
//       "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
//   },


function loadCategories() {
    //1- fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        //2- convert promise to json
        .then((res) => res.json())
        //3- send data to display
        .then((data) => displayCategories(data.categories))
}
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(response => response.json())
        .then(data => displayVideos(data.videos))
}




function displayCategories(categories) {
    //get the container

    const catergoryContainer = document.getElementById('catergory-container')

    //Loop operation on Array of object
    for (let cat of categories) {
        // console.log(cat)
        //create Element
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
        //Append the Element
        catergoryContainer.append(categoryDiv)
    }
}


const displayVideos = (videos) => {
    const videoContainer = document.getElementById("video-container")
    videos.forEach(video => {
        console.log(video) 
        //create element
        const videoCard = document.createElement("div")
        videoCard.innerHTML = `
        <div class="card bg-base-100  shadow-sm">
            <figure class="relative">
              <img class= "w-full h-[150px] object-cover"
                src="${video.thumbnail}"
                alt="Shoes" />
                <span class="absolute bottom-2 right-2 text-white bg-black px-2 text-sm rounded-sm">3hrs 56 min ago</span>
            </figure>
            <div class="flex gap-3 px-0 py-5">
                <div class="profile">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                          <img src="${video.authors[0].profile_picture}" />
                        </div>
                      </div>
                </div>
                <div class="intro">
                    <h2 class="text-sm font-semibold">Midnight Serenade</h2>
                    <p class=" flex gap-1 text-sm text-gray-400">${video.authors[0].profile_name} <img class="w-5 h-5" src="https://img.icons8.com/?size=64&id=6xO3fnY41hu2&format=png" alt=""></p>
                    <p class="text-sm text-gray-400">${video.others.views}</p>
                </div>
            </div>
          </div>
        `
        //Append element
        videoContainer.append(videoCard)
    })
}

loadCategories()
loadVideos()