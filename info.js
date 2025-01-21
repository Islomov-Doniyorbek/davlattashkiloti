function base() {
    let base = document.querySelector(".base")

let idoralar = [
    {
        id: "eco",
        nomi: "O‘zbekiston Respublikasi Iqtisodiyot va sanoat vazirligi",
        phone: "+998 71 203-50-50 ",
        address: "Toshkent, Islom Karimov koʻchasi, 45a",
        email: "www.mineconomy.uz"
    },
    {
        id: "mudo",
        nomi: "O'zbеkistоn Rеspublikаsi Mudofaa vаzirligi",
        phone: "+99871 269-81-77",
        address: "Toshkent, Mirzo-Ulug'bek tumani, Mirzo Ulug'bek shoh ko'chasi, 100",
        email: "www.mudofaa.uz"
    },
    {
        id: "adl",
        nomi: "O'zbekiston Respublikasi Adliya vazirligi",
        phone: "1008",
        address: "Toshkent shahri, Sayilgoh ko`chasi, 5",
        email: "www.minjust.uz"
    },
    {
        id: "mad",
        nomi: "O‘zbekiston Respublikasi Madaniyat vazirligi",
        phone: "+998 55 502-33-77",
        address: "Toshkent shahri, Amir Temur 107b",
        email: "www.madaniyat.uz"
    },
    {
        id: "qur",
        nomi: "Oʻzbekiston Respublikasi Qurilish vazirligi",
        phone: "1298",
        address: "TOSHKENT SH., ABAY KO'CHASI, 6-UY",
        email: "www.minstroy.uz"
    },
    {
        id: "ener",
        nomi: "Oʻzbekiston Respublikasi Energetika vazirligi",
        phone: "+99871 231-81-18",
        address: "Toshkent, Oybek koʻchasi, 26/1, Oybek",
        email: "www.minenergy.uz"
    },
    {
        id: "suv",
        nomi: "O‘zbekiston Respublikasi Suv хo‘jаligi vаzirligi",
        phone: "+99871 202-47-00",
        address: "Toshkent, Mirzo Ulugʻbek tumani, Qorasuv dahasi, 4-mavze, 11",
        email: "www.water.uz"
    },
    {
        id: "iiv",
        nomi: "O'zbеkiston Rеspublikаsi Ichki ishlаr vаzirligi",
        phone: "102",
        address: "Toshkent shahri, Yunus Rаjаbiy ko`chаsi, 1",
        email: "www.iiv.uz"
    },
    {
        id: "ssv",
        nomi: "O'zbеkistоn Rеspublikаsi Sоg'liqni sаqlаsh vаzirligi",
        phone: "+998 (71) 203-15-19",
        address: "Toshkent shahri, Navoiy ko'chаsi, 4",
        email: "www.minzdrav.uz"
    },
    {
        id: "xtv",
        nomi: "O'zbekistоn Respublikаsi Хаlq ta'limi vаzirligi",
        phone: "+998 (71) 202 09 09",
        address: "Toshkent, Shayxontohur tumani, Navoiy koʻchasi, 2a",
        email: "www.uzedu.uz"
    },
]


for (let i = 0; i < idoralar.length; i++) {
    base.innerHTML += `
        <div class="kbk">
                <p id="${idoralar[i].id}">${idoralar[i].nomi}</p>
               <br> <p>
                    Ishonch telefon raqami:  ${idoralar[i].phone}
                </p><br>
                <p>
                Tashkilot manzili:  ${idoralar[i].address}
                </p>
                <br> <p>
                     Internet sahifasi:  <a href="${idoralar[i].email}">${idoralar[i].email}</a>
                 </p>
        </div>
    `;
}
}
base()