var nam = "KAmran";
alert(nam.toUpperCase());
alert(nam.toLowerCase());
//title case

//comment for Q10
/*nam[0]=nam[0].toUpperCase();
nam=nam.toLowerCase();
nam[0]=nam[0].replace(nam[0].toUpperCase());*/
function toTitleCase(nam) {
  nam = nam.toLowerCase().split(' ');
  for (var i = 0; i < nam.length; i++) {
    nam[i] = nam[i].charAt(0).toUpperCase() + nam[i].slice(1);
  }
  return nam.join(' ');
}
alert(toTitleCase("KAmran"));