function show_great(name){
    var temp=[];
    for(var i=0;i<name.length;i++){
      temp[i]="The Great "+name[i];
    }
    return temp;
  }
  
  function show_magician(name){
    for(var i=0;i<name.length;i++){
      console.log(name[i]);
    }
  }
  
  var namee=["David Copperfield","Doug Henning","Siegfried and Roy","Lance Burton"];
  var nameee=show_great(namee);
  show_magician(nameee);