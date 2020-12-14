let dan = [1,2,3,4,5,6,7,];
let cena = 150;
let penzioner = true

if(penzioner != true){
  return
}
function ukupnaCena(cena,penzioner){
  if(penzioner && dan[7]){
    console.log(`Račun je: ${ukupnaCena(cena,penzioner)* 0.75}`);
  }else if(penzioner && dan[7] != 0){
    console.log(`Račun je: ${ukupnaCena(cena,penzioner)* 0.90}`);
  }else if(penzioner == false && dan[3]){
    console.log(`Račun je: ${ukupnaCena(cena,penzioner)* 0.90}`);
  }else if(penzioner == false && dan[3] != 0){
    console.log(`Račun je: ${ukupnaCena(cena,penzioner)}`);
}
}
