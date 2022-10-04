var car={
    manufactorer:"BMW",
    model:"2022"
  };
  
  function make_car(car, color, feature){
    console.log("Manufacture of the car is "+car.manufactorer);
    console.log("Model of this car "+car.model);
    console.log("color of this car is "+color);
    console.log("Optional Feature os the car is : "+feature);
  }
  
  make_car(car,"Black","AGS brake");