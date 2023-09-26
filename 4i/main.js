//ord=document.querySelector(`#ord1`)

////console.log(ord)

//ord.addEventListener(`click`, function(cos){
    //cos.preventDefault();

//})

const ord=document.querySelector(`#ord`) //wyszukuje przycisk

ord.addEventListener(`click`,function(evt){
    evt.preventDefault() //nie odswieza str
    const number=document.querySelector(`#number`).value

    const cR=document.querySelector(`#n2`).value

    const cG=document.querySelector(`#n3`).value

    const cB=document.querySelector(`#n4`).value
    
    
    
    //wyszukuje pola (nr kszaltu, kolor rgb)
    if(cR>255||cG>255||cB>255||cR<0||cG<0||cB<0){
        alert (`Podaj RGB w zakresie od 0 do 255: `); //okienko ktore prosi o wprowadzenie rgb
        return 0;
    }
    //tablica z ksztaltami
    const tablica=["miś","żabka","serce","inny kształt"]
    
    let wybranykszt=tablica[number-1]


   // let wybranykszt='' //wybrany kszalt
/*
    for(let i=1;i<=tab.length;i++){
        if (i==number){

            wybranykszt=tab[i-1].outerText
            break;
        }
        wybranykszt='inny kształt'
        break;
    } */

    dis=document.querySelector(`#dis`) //wyszukuje display

    dis.innerHTML=`Zamówiłeś żelka: ${wybranykszt}` //pokazuje wybrany ksztalt


    but=document.querySelector(`#but`) //wyszukuje przycisk

    but.style.backgroundColor=`rgb(${cR},${cG},${cB})`//kolory podane
}
)