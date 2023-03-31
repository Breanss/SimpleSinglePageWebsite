import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nations',
  templateUrl: './nations.component.html',
  styleUrls: ['./nations.component.css']
})

export class NationsComponent implements OnInit {
  public country="";
  public image="";
  public description="";
  public light="";
  public medium="";
  public heavy="";
  public td="";
  public artillery="";
  public index=3;
  public lista=Array(11);

  constructor() {
    this.lista[0]={
      country:"ZSRR",
      description:"Flota czołgów radzieckich zawiera sporo maszyn historycznych, które brały udział w " +
                  "II Wojnie Światowej. Opanowanie czołgów radzieckich i wspinanie się po ich poziomach jest dosyć łatwe, gdyż " +
                  "w ich drzewie technologicznym jest kilka wspólnych cech: przyzwoite ogólne opancerzenie, niska sylwetka, potężne " +
                  "działa i dobra prędkość maksymalna. Wszystko to czyni z radzieckich pojazdów dobry wybór dla tych, którzy wolą walkę " +
                  "na bliski i średni zasięg oraz agresywny styl gry.",
      light:"26",
      medium:"34",
      heavy:"35",
      td:"21",
      artillery:10,
      image:"assets/is7.png"
    }

    this.lista[1]={
      country:"Czechosłowacja",
      description:"Czołgi czechosłowackie czerpią z wielu zagranicznych projektów z kilku okresów czasowych. Są tu pojazdy niemieckiego i " +
        "radzieckiego pochodzenia, a także koncepcje krajowe. Czechosłowackie czołgi mają  wysoką siłę ognia i mogą osiągać wysokie prędkości, " +
        "a ich linia kończy się dwoma maszynami z automatycznym ładowaniem na poziomach IX i X. Te czołgi najbardziej spodobają się doświadczonym graczom," +
        " którzy wiedzą, jak używać ich zalet i jak reagować na różne sytuacje bojowe.",
      light:"3",
      medium:"9",
      heavy:"4",
      td:"0",
      artillery:"0",
      image:"assets/tvp.png"
    }

    this.lista[2]={
      country:"Francja",
      description:"W zależności od poziomu czołgi francuskie mają dosyć różne cechy. Wczesne pojazdy sprzed II Wojny Światowej są powolne, " +
        "ale mocno opancerzone. Z drugiej strony, powojenne maszyny wysokich poziomów są szybkie, ale słabo chronione. Wszystko to blednie w " +
        "obliczu głównej cechy Francuzów – automatycznego ładowania: mechaniki pozwalającej szybko wystrzelić kilka pocisków jeden po drugim i " +
        "zadać maksymalne uszkodzenia. Pamiętajcie o znalezieniu osłony, bo przeładowania magazynka trwa znacznie dłużej.",
      light:"22",
      medium:"11",
      heavy:"14",
      td:"13",
      artillery:"10",
      image:"assets/bc.png"
    }

    this.lista[3]={
      country:"Niemcy",
      description:"Posiadając bardzo celne działa z wysoką penetracją pancerza, pojazdy niemieckie są najlepiej przystosowane do ostrzału z " +
        "dużego zasięgu i trzymanie przeciwnika na dystans. W połączeniu z solidnym pancerzem i wysoką pulą punktów wytrzymałości te niemieckie " +
        "maszyny skłaniają się ku defensywnej taktyce.",
      light:"26",
      medium:"30",
      heavy:"22",
      td:"26",
      artillery:"11",
      image:"assets/maus.png"
    }

    this.lista[4]={
      country:"Włochy",
      description:"Włochy zaczerpnęły wiele pomysłów od niemieckich inżynierów. Ich główną taktyką jest polowanie z dalekiego zasięgu. " +
        "Włosi mają celne i szybkostrzelne działa, a ich czołgi trzech najwyższych poziomów dysponują „automatycznym przeładowaniem”," +
        " zaawansowaną wersją automatycznego ładowania. Dzięki temu pojazdy mogą szybko wystrzelić kilka pocisków jeden po drugim, ale" +
        " nie cierpią z powodu długiego czasu ładowania i mogą prowadzić normalny ostrzał, stając się groźną bronią w rękach asów pancernych.",
      light:"2",
      medium:"10",
      heavy:"5",
      td:"5",
      artillery:"0",
      image:"assets/progetto.png"
    }

    this.lista[5]={
      country:"Japonia",
      description: "Flota czołgów japońskich jest dosyć charakterystyczna. Jednakże różnice pomiędzy czołgami ciężkimi i średnimi są " +
        "znaczne. Chociaż te pierwsze są super ciężkimi maszynami z potężnymi działami i grubym pancerzem, te drugie to " +
        "słabo opancerzone, ale bardzo mobilne pojazdy wsparcia. Zarówno czołgi ciężkie, jak i średnie mają bardzo dobre " +
        "kąty pochylenia lufy, podczas gdy czołg średni najwyższego poziomu cieszy się hydropneumatycznym zawieszeniem, co pozwala mu na Pochylanie kadłuba.",
      light:"5",
      medium:"12",
      heavy:"9",
      td:"0",
      artillery:"0",
      image:"assets/type5.png"
    }

    this.lista[6]={
      country:"Polska",
      description:"Główne cechy wyróżniające polskie czołgi zaczynają się pojawiać w środku gałęzi. Są to solidne pojazdy bojowe z dobrym pancerzem " +
        "i prędkością wyposażone w potężne działa. Polskie pojazdy dosyć mocno przypominają czołgi radzieckie i chińskie, ale zadają jeszcze " +
        "więcej uszkodzeń. Chociaż brakuje im prędkości, wciąż mogą pewnie przełamywać obronę przeciwnika i zdominować linię frontu. " +
        "Polskie czołgi to bardzo dobrze zrównoważone maszyny z widocznym naciskiem na siłę ognia.",
      light:"5",
      medium:"9",
      heavy:"5",
      td:"0",
      artillery:"0",
      image:"assets/lewandowski.png"
    }

    this.lista[7]={
      country:"Szwecja",
      description:"Szwecja rozwinęła własną szkołę konstrukcji czołgów z kilkoma unikalnymi koncepcjami. Pierwsze pojazdy niewiele różnią " +
        "się od swoich odpowiedników, ale na wyższych poziomach pojawiają się dwie nowe mechaniki: automatyczne ładowanie dla czołgów ciężkich " +
        "i hydropneumatyczne zawieszenie z możliwością pochylania kadłuba dla czołgów średnich i niszczycieli czołgów. Szwedzkie czołgi są " +
        "zaprojektowane do obrony dzięki dobremu i mocno pochyłemu przedniemu pancerzowi i doskonałym kątom pochylenia lufy.",
      light:"4",
      medium:"10",
      heavy:"4",
      td:"10",
      artillery:"0",
      image:"assets/kranvagn.png"
    }

    this.lista[8]={
      country:"Wielka brytania",
      description:"Flota czołgów brytyjskich posiada zarówno klasyczne „lekkie” czołgi krążownicze z dobrą mobilnością, ale " +
        "słabą osłoną, jak i duże powolne maszyny z grubym przednim pancerzem. Główną cechą całej frakcji są ich wyjątkowe " +
        "działa z doskonałymi kątami pochylenia lufy, celnością, szybkostrzelnością i penetracją pancerza równoważonymi niskimi " +
        "uszkodzeniami na strzał. Ich styl rozgrywki przypomina pojazdy niemieckie i amerykańskie – powolne parcie przez linie " +
        "przeciwnika lub obrona aktualnej pozycji.",
      light:"12",
      medium:"23",
      heavy:"12",
      td:"19",
      artillery:"10",
      image:"assets/conqueror.png"
    }

    this.lista[9]={
      country:"USA",
      description:"Amerykańskie pojazdy szczycą się doskonałym zasięgiem widzenia, dużymi kątami pochylenia lufy (szczególnie " +
        "przydatnymi w pagórkowatym terenie) i mocnym przednim pancerzem. Maszyny Wujka Sama są doskonałe dla tych, którzy lubią " +
        "przełączać się pomiędzy różnymi taktykami i potrafią przystosować się do zmiennych scenariuszy w bitwie – czy to w ataku, " +
        "czy w obronie, zastawiając zasadzki lub stając z przeciwnikiem twarzą w twarz.",
      light:"19",
      medium:"25",
      heavy:"17",
      td:"20",
      artillery:"11",
      image:"assets/patton.png"
    }

    this.lista[10]={
      country:"Chiny",
      description:"Chińska szkoła konstrukcji czołgów zapożyczyła wiele z radzieckiej inżynierii i projektowania, co czyni ich " +
        "pojazdy koncepcyjnie podobnymi do tych z ZSRR. Przejście w górę drzewa technologicznego pozwoli Wam prowadzić szybkie " +
        "maszyny idealne do przełamywania linii przeciwnika z niskimi sylwetkami, pochyłym pancerzem i potężnymi działami. " +
        "Chińskie czołgi są zaprojektowane do agresywnego stylu gry i doskonałe dla graczy, którzy lubią przejmować inicjatywę " +
        "na polu bitwy.",
      light:"12",
      medium:"11",
      heavy:"9",
      td:"10",
      artillery:"0",
      image:"assets/wz111.png"
    }
  }

  ngOnInit(): void {
      let i=0;
      this.country=this.lista[this.index].country;
      this.image=this.lista[this.index].image;
      this.description=this.lista[this.index].description;
      this.light=this.lista[this.index].light;
      this.medium=this.lista[this.index].medium;
      this.heavy=this.lista[this.index].heavy;
      this.td=this.lista[this.index].td;
      this.artillery=this.lista[this.index].artillery;

      let flags = document.querySelectorAll('.flags img');

    flags.forEach(links => {
      if(this.index==i)
        links.classList.add('active');
      else
        links.classList.remove('active');
      i++;
    });
  }


  public async animation(className:any){
    let tanks = document.querySelectorAll('.tanks');
    let description = document.querySelectorAll('.description');
    let image = document.querySelectorAll('.slider-image');

    tanks[0].classList.add(className);
    description[0].classList.add(className);
    image[0].classList.add(className);
    this.ngOnInit();
    await new Promise(f => setTimeout(f, 780));
    tanks[0].classList.remove(className);
    description[0].classList.remove(className);
    image[0].classList.remove(className);
  }



  public async clickRight() {
    await this.animation('animation-appear-nation-middle-to-left');
    this.index++;

    if (this.index > 10) {
      this.index = 0;
    }
    await this.animation('animation-appear-right-to-middle');
  }


  public async clickLeft() {
    await this.animation('animation-appear-nation-middle-to-right');
    this.index--;

    if (this.index < 0) {
      this.index = 10;
    }

    await this.animation('animation-appear-nation-left-to-middle');
  }
}
