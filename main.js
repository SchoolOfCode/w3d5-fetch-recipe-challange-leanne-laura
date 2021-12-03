function handleRecipeClick() {}

function handleInputChange() {}

let fetchedData;
async function fetchRecipe() {
    let response = await fetch("https://api.edamam.com/api/recipes/v2?type=public&q=tofu&app_id=d7f7a1ab&app_key=a7519bb5e65fe167ef5c9e771f23f7d7&diet=balanced&health=vegetarian&cuisineType=Asian&mealType=Lunch&dishType=Main%20course&random=true");
    console.log("Response: ",response);
    let results = await response.json();
    console.log("Results: ",results);
    fetchedData = results;
    //Recipe card 1
    let fetchedImage = fetchedData.hits[0].recipe.images.REGULAR.url;
    let image = document.querySelector("#recipe-img1");
    image.setAttribute("src",fetchedImage);
    image.setAttribute("height","100%");
    image.setAttribute("width","100%");
    let fetchedText = fetchedData.hits[0].recipe.label;
    let imageText = document.querySelector("#recipe-text1");
    imageText.innerText = fetchedText;
    let textLink = fetchedData.hits[0].recipe.url;
    imageText.setAttribute("href",textLink);
    //Recipe card 2
    let fetchedImage2 = fetchedData.hits[1].recipe.images.REGULAR.url;
    let image2 = document.querySelector("#recipe-img2");
    image2.setAttribute("src",fetchedImage2);
    image2.setAttribute("height","100%");
    image2.setAttribute("width","100%");
    let fetchedText2 = fetchedData.hits[1].recipe.label;
    let imageText2 = document.querySelector("#recipe-text2");
    imageText2.innerText = fetchedText2;
    let textLink2 = fetchedData.hits[1].recipe.url;
    imageText2.setAttribute("href",textLink2);
    //Recipe card 3
    let fetchedImage3 = fetchedData.hits[2].recipe.images.REGULAR.url;
    let image3 = document.querySelector("#recipe-img3");
    image3.setAttribute("src",fetchedImage3);
    image3.setAttribute("height","100%");
    image3.setAttribute("width","100%");
    let fetchedText3 = fetchedData.hits[2].recipe.label;
    let imageText3 = document.querySelector("#recipe-text3");
    imageText3.innerText = fetchedText3;
    let textLink3 = fetchedData.hits[2].recipe.url;
    imageText3.setAttribute("href",textLink3);
    //Recipe card 4
    let fetchedImage4 = fetchedData.hits[3].recipe.images.REGULAR.url;
    let image4 = document.querySelector("#recipe-img4");
    image4.setAttribute("src",fetchedImage4);
    image4.setAttribute("height","100%");
    image4.setAttribute("width","100%");
    let fetchedText4 = fetchedData.hits[3].recipe.label;
    let imageText4 = document.querySelector("#recipe-text4");
    imageText4.innerText = fetchedText4;
    let textLink4 = fetchedData.hits[3].recipe.url;
    imageText4.setAttribute("href",textLink4);
    }
    
fetchRecipe()

let fetchedSearch;
let input = document.querySelector("#search-input");
let searchTerm = input.value;
let button = document.querySelector("#search-button");
async function searchRecipe(){
    let response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=d7f7a1ab&app_key=a7519bb5e65fe167ef5c9e771f23f7d7&diet=balanced&health=vegetarian&cuisineType=Asian&mealType=Lunch&dishType=Main%20course&random=true`);
    console.log("Response: ",response);
    let results = await response.json();
    console.log("Results: ",results);
    fetchedSearch = results;
    let fetchedURL = fetchedSearch.hits[0].recipe.url;
    window.location.assign(fetchedURL); 
}
button.addEventListener("click",searchRecipe);
//input.value = searchTerm;
//input.addEventListner("keyup",)

//PLAN
//fetchedData.hits[0-19].recipe.images.REGULAR.url (e.g. results.hits[0].recipe.image)
// click on an image, take to the recipe page (.url) [start with one]

// search bar - input fetch what the user requests 
// First iteration > Feeling Lucky recipe button (fetch random recipe based on search)
// Ideal> takes to display results page

// further image clicks

// [If we have time:
// categories in nav - work like search bar]