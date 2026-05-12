// Global Data Layer

window.myData = window.myData || {};

window.myData.page = {
    pageName: "Picasoo & Threads",
    siteSection: "My Art Section",
    siteSection2: "My Crafts Section",
    siteSubSection: "My Handmade subsection"
};

window.myData.orders = {
    orderID: "09125768",
    type: "Prepaid",
    deliveryStatus: "Out for Delivery"
};

// Console Check

console.log("Website Data:", window.myData);

// Example Interaction

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("click", () => {

            alert("Thanks for exploring Picasoo & Threads 🎨");

        });

    });

});
