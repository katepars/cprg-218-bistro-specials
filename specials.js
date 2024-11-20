const currentDate = new Date ();
console.log(currentDate);

//let currentDay = currentDate.getDay ();//
let currentDay=1;

console.log(
    currentDay
);

if(currentDay==0){
    specials_name.innerHTML = "$9 Deluxe Burger & Fries";
    specials_image.src = "images/sunday.jpg";
    specials_description.innerHTML = "50% off our Deluxe Burger and fries. A 16oz Angus patty on a pretzel bun topped with lettuce, tomato, bacon, grilled onions, and an onion ring. A huge side of our famous fries is served on the side";

}

if(currentDay==1){
    specials_name.innerHTML = " $10 Jumbo Greek Salad"
    specials_image.src = "images/monday.jpg";
    specials_description.innerHTML = "50% off our regular price. Our customers rave about our Greek Salad, so we want to give everyone a chance to try it.  Get a full sized Greek Salad at a great price."
}

if(currentDay==2){
    specials_name.innerHTML = "$9 Fish and Chips";
    specials_image.src = "images/tuesday.jpg";
    specials_description.innerHTML = "Authentic English style battered cod with a heaping helping of piping hot chips. Served with salt, vinegar and a curry sauce to flavor it to your taste. This dish is jolly good!";
}

if(currentDay==3){
    specials_name.innerHTML = "$10 Any Small Pizza";
    specials_image.src = "images/wednesday.jpg";
    specials_description.innerHTML= "Pick up to 3 of your favourite toppings. Our pizzas have a crispy golden whole wheat crust.";

}

if(currentDay==4){
    specials_name.innerHTML = " $12 Chicken Penne Alfredo";
    specials_image.src = "images.thursday.jpg";
    specials_description.innerHTML = "Grilled chicken breast over penne noodles with a creamy Alfredo sauce and parmesan cheese on top.  Side Caesar Salad included.";

}

if(currentDay==5){
    specials_name.innerHTML = "Half Price Cocktails All Day";
    specials_image.src = "images.friday.jpg";
    specials_description.innerHTML="50% off our regular price. Our customers rave about our Greek Salad, so we want to give everyone a chance to try it.  Get a full sized Greek Salad at a great price";
}

if(currentDay==6){
    specials_name.innerHTML = "35¢ Chicken Wings";
    specials_image.src = "images.saturday.jpg";
    specials_description.innerHTML = "Our classic chicken wings come in three flavours – salt & pepper, honey garlic and extra hot. Minimum order is 20 wings available in quantities of 10 after that.";

}