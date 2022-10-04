var names=["Saboor","Hamza","Irtza"];
console.log(names[0]+" Please come to dinner");
console.log(names[1]+" Please come to dinner");
console.log(names[2]+" Please come to dinner");

console.log("Sorry, "+names[2]+" cant make it to dinner");

names.splice(2,1,"Saad");

console.log(names[0]+" Please come to dinner");
console.log(names[1]+" Please come to dinner");
console.log(names[2]+" Please come to dinner");
// for bigger table add more guests
names.splice(0,0,"Osama");
names.splice(2,0,"Kamran");
names.splice(3,0,"Hamza");

for(var i=0;i<names.length;i++)
{
  console.log(names[i]+" Please come to dinner");
}