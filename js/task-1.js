const categories = document.querySelectorAll("#categories .item");
console.log("Number of categories:", categories.length);



categories.forEach((category) => {
    const titleTag = category.querySelector("h2");
    const categoryTitle = titleTag.textContent;
    console.log("Category:", categoryTitle);

    const itemsInCateg = category.querySelectorAll("li");
    const itemsLength = itemsInCateg.length;
    console.log("Elements:", itemsLength)


}
)