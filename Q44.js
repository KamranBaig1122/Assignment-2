function make_sandwich(items){
    for(var i=0;i<items.length;i++){
      console.log(items[i]+" adding to your sandwich");
    }
    console.log("Your Sandwich is ready");
  }
  
  var temp1=["Roast Beef", "Cheddar Cheese", "Lettuce", "Honey Dijon"];
  make_sandwich(temp1);
  
  var temp2 = ["Turkey","Apple Slices","Honey Mustrad"];
  make_sandwich(temp2);
  
  var temp3 =["Peanut Butter","Strawberry Jam"];
  make_sandwich(temp3);