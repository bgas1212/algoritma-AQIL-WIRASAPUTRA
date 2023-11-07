// Rate Nilai Kartu

// 1. User melakukan Input untuk Rare, Attck, Mana 
//  2. sistem akan menampilkan rate kartu dengan kondisi
//      a. jika jumlah Input untuk spd, Attck, Mana di atas 100 maka ratenya SR
//      b. jika jumlah Input untuk spd, Attck, Mana di atas 50 maka ratenya S
//      c. jika jumlah Input untuk spd, Attck, Mana di atas 20 maka ratenya A
//      d. jika jumlah Input untuk spd, Attck, Mana di atas 0 maka ratenya B


let spd = parseInt(prompt("Masukan nilai speed kartu anda"))
let attack = parseInt(prompt("Masukan nilai attack kartu anda"))
let mana = parseInt(prompt("Masukan nilai mana kartu anda"))

totalRate = spd+attack +mana

totalRate > 100 ? console.log("Kartu anda ssr") :
totalRate < 100 && totalRate > 50 ? console.log("Kartu anda s") : 
totalRate < 50 && totalRate > 20 ? console.log("Kartu anda A") :
totalRate < 20 && totalRate > 0 ? console.log("Kartu anda B") : console.log("Kartu anda C");


