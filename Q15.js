var names=["Saboor","Hamza","Irtza"];
console.log(names[0]+" Please come to dinner");
console.log(names[1]+" Please come to dinner");
console.log(names[2]+" Please come to dinner");

console.log("Sorry, "+names[2]+" cant make it to dinner");

names.splice(2,1,"Saad");

console.log(names[0]+" Please come to dinner");
console.log(names[1]+" Please come to dinner");
console.log(names[2]+" Please come to dinner");