var string = "Hello My Name is Kamran";
if (string === "Hello My Name is Kamran") {
  //true
  console.log("True");
} else {
  console.log("false");
}
string = "Hello My Name is Saboor";
if (string === "Hello My Name is Kamran") {
  //false
  console.log("True");
} else {
  console.log("false");
}

if (string === string.toLowerCase()) {
  //false
  console.log("True");
} else {
  console.log("false");
}
string = "my name is kamran";
if (string === string.toLowerCase()) {
  //true
  console.log("True");
} else {
  console.log("false");
}

var num = 29;//true
if (num === 29) {
  console.log("true");
} else if(num<=29) {
    console.log("true");
}else if(num>=29){
  console.log("True");
}else if(num!=29){
  console.log("false");
}

if(num<29||num>29){//false
  console.log("True")
}else if(num<29&&num>29)
{
  console.log("Treu");
}else{
  console.log("False");
}

var items=["pen","pencil","eraser","colors"];
for(var i=0;i<items.length;i++)
{
  if(items[i]==="pen"){//found
    console.log("Found");
  }else{
    console.log("Not Found");
  }

  if(items[i]==="sharpner"){//not found
    console.log("Found");
  }else{
    console.log("Not found");
  }
}