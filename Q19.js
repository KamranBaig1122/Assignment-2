var names=["Saboor","Hamza","Irtza"];
var count=0;
console.log(names[0]+" Please come to dinner");
count++;
console.log(names[1]+" Please come to dinner");
count++;
console.log(names[2]+" Please come to dinner");
count++;

console.log("Sorry, "+names[2]+" cant make it to dinner");
count--;
names.splice(2,1,"Saad");
count++;
console.log(names[0]+" Please come to dinner");
console.log(names[1]+" Please come to dinner");
console.log(names[2]+" Please come to dinner");
// for bigger table add more guests
names.splice(0,0,"Osama");
count++;
names.splice(2,0,"Kamran");
count++;
names.splice(3,0,"Hamza");
count++;
for(var i=0;i<names.length;i++)
{
  console.log(names[i]+" Please come to dinner");
}

//Only for twu guests

var namee=names.pop();
console.log("Sorry! "+namee+" We have no available sitting for uh");
namee=names.pop();
console.log("Sorry! "+namee+" We have no available sitting for uh");
namee=names.pop();
console.log("Sorry! "+namee+" We have no available sitting for uh");
namee=names.pop();
console.log("Sorry! "+namee+" We have no available sitting for uh");

for(var i=0;i<names.length;i++)
{
  console.log(names[i]+" Please come to dinner");
}

names.pop();
names.pop();

console.log(names);

console.log(count+" People come for dinner");