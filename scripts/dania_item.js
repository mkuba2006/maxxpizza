let dania = Dania;
let main = document.getElementById('main');
let domenu = document.getElementById('domenu');
let itemy = document.getElementById('itemy');

const item_szkic = (id, nazwa, cena_min, cena_max, skład) => {
    let składHTML = skład.map(sklad => `<h4 id="sklad">${sklad},</h4>`).join(''); 

    return `
        <li id="potrawa">
            <p>${id}</p>
            <p>${nazwa}</p>
            <div>${składHTML}</div> 
            <p>${cena_min}</p>
            <p>${cena_max}</p>
        </li>
    `;
}

domenu.addEventListener('click', () => {
    itemy.innerHTML = '';
    itemy.innerHTML += item_szkic('nr', 'nazwa', 'min', 'max', ['składniki']);

    for (let j = 0; j < dania[0].potrawy.length; j++) {
        let potrawa = dania[0].potrawy[j];
        itemy.innerHTML += item_szkic(potrawa.id, potrawa.nazwa, potrawa.min, potrawa.max, potrawa.składniki);
    }
});






const filtry_szkic = (arr) => {
    let filtry = skład.map(arr => `<h4 id="sklad">${arr},</h4>`).join(''); 

    return `
        <li id="potrawa">
            <p>${filtry}</p>
        </li>
    `;
    itemy.innerHTML += filtry
}

const GetFiltry = () =>{
    const arr = []
    const filtr = dania.map(grupa=>{
        arr.push(grupa.Grupa)
    })
    return arr
}
console.log(GetFiltry())

