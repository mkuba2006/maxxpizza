let dania = Dania;
let domenu = document.getElementById('domenu');

let itemy = document.getElementById('itemy');
let tekst = document.getElementById('tekst');
let tekst2 = document.getElementById('polecane_itemy');
let menu = document.getElementById('menu');

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

const lista_filtrow = document.createElement('div');
lista_filtrow.id = 'lista_filtrow';

const filtry_szkic = () => {
    dania.forEach(arr => {
        let link = document.createElement('a'); // Tworzymy element <a>
        link.textContent = arr.Grupa; // Ustawiamy tekst w linku
        link.href = '#' + arr.Grupa; // Ustawiamy atrybut href, możesz go dostosować do potrzeb
        let button = document.createElement('button');
        button.appendChild(link); // Dodajemy link do przycisku
        button.id = arr.Grupa;
        lista_filtrow.appendChild(button);
    });
    
    menu.appendChild(lista_filtrow);
};


domenu.addEventListener('click', () => {
    tekst.innerHTML = '';
    tekst2.innerHTML = '';
    menu.innerHTML = '';

    let ul = document.createElement('ul');

    ul.innerHTML += item_szkic('nr', 'nazwa', 'min', 'max', ['składniki']);

    for (let j = 0; j < dania[0].potrawy.length; j++) {
        let potrawa = dania[0].potrawy[j];
        ul.innerHTML += item_szkic(potrawa.id, potrawa.nazwa, potrawa.min, potrawa.max, potrawa.składniki);
    }

    menu.innerHTML += `<ul>${ul.innerHTML}</ul>`;

    filtry_szkic();
    itemy.appendChild = menu.innerHTML;
});






