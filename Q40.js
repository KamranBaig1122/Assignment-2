function make_album(artist,album,num=0){
    const music={
          name:artist,
          albumm:album,
          numm:num
    }
    return music;
  }
  
  var a = make_album("Alan Walker","Different World");
  var b = make_album("Coldplay","A head Full  of Dreams");
  var c = make_album("Coldplay","Biutyful",2);
  
  console.log(a.name);
  console.log(a.albumm);
  
  console.log(b.name);
  console.log(b.albumm);
  
  console.log(c.name);
  console.log(c.albumm);
  console.log(c.numm);