var cur_usernames=["Saboor","Kamran","Admin","Hamza","Irtza"];
var new_users=["Awais","Arslan","Saboor","Hamza","Ali"];
var flag=false;

for(var i=0;i<new_users.length;i++)
{
  for(var j=0;j<new_users.length;j++)
  {
    if(cur_usernames[i]===new_users[j]){
        flag=true;
    }
  }
  if(flag===true){
    console.log("person will need to enter a new username");
  }else{
    console.log("Username is availble");
  }
  flag=false;
}