class Kosar {
  constructor() {
    this.elem = $(".kosartartalma");
    this.nev = $(".nev");
    //this.addKosar(this.elem);
  }

  addKosar(termek) {
    console.log("Kosar tartalma");
    this.elem.empty();
    for (let index = 0; index < termek.length; index++) {
      let nev = termek[index].nev;
      let ar = termek[index].ar;
      this.nev.html("<ul><li>" + nev + ar + "</li></ul>");
    }

    console.log(termek);
  }
}
