class Termekek {
  constructor(elem, adat) {
    this.elem = elem;
    this.adat = adat;
    this.gomb = elem.children(".kosarba");
    this.nevelem = elem.children("h2");
    this.leiraselem = elem.children("p");
    this.arelem = elem.children("span");
    this.kepelem = elem.children("img");
    this.setAdatok(this.adat);
    this.gomb.on("click", () => {
      this.kosarbaTesz();
    });
  }
  setAdatok(ertekek) {
    this.nevelem.html(ertekek.nev);
    this.leiraselem.html(ertekek.leiras);
    this.kepelem.attr("src", ertekek.kep);
    this.arelem.html(ertekek.ar);
  }
  kosarbaTesz() {
    let esemeny = new CustomEvent("termekValaszt", { detail: this.adat });
    window.dispatchEvent(esemeny);
  }
}
