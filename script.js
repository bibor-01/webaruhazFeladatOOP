$(function () {
  const szuloElem = $("section");
  const sablonElem = $(".termekek");
  const termekek = [];
  let fajlnev = "termekek.json";
  const kosarTomb = [];
  let kosar = new Kosar();
  beolvas(fajlnev, termekek);
  /*for (let index = 0; index < termekek; index++) {
    const ujElem = sablonElemKosar.clone().appendTo(szuloElemKosar);
    kosar = new Kosar(ujElem);
  }*/

  function beolvas(fajlnev, tomb) {
    $.ajax({
      url: fajlnev,
      success: function (result) {
        result.forEach((element) => {
          tomb.push(element);
        });
        tomb.forEach(function (adat) {
          let ujElem = sablonElem.clone().appendTo(szuloElem);
          const ujTermek = new Termekek(ujElem, adat);
        });
      },
    });
    sablonElem.remove();
  }
  $(window).on("termekValaszt", (event) => {
    //kosar.setKosar(event.detail);
    kosarTomb.push(event.detail)
    kosar.addKosar(kosarTomb);

    //console.log(event.detail);
  });
});
