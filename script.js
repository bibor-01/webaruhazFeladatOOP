$(function () {
  const szuloElem = $("section");
  const sablonElem = $(".termekek");
  const termekek = [];
  let fajlnev = "termekek.json";
  beolvas(fajlnev, termekek);
  let kosar = new Kosar();

  
  

  function beolvas(fajlnev, tomb) {
    $.ajax({
      url: fajlnev, success: function (result) {
          result.forEach(element => {
             tomb.push(element);
          });          
          tomb.forEach(function(adat){
          let ujElem = sablonElem.clone().appendTo(szuloElem);
          const ujTermek = new Termekek(ujElem,adat);
          });         
      }
  });
  sablonElem.remove();
  }
  $(window).on("termekValaszt",(event) => {
    //console.log(event.detail);
    kosar.setKosar(event.detail);
   
  });
  

});
