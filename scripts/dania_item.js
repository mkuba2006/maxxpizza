let dania = Dania;
let domenu = document.getElementById('domenu');
let itemy = document.getElementById('itemy');
let tekst = document.getElementById('tekst');
let tekst2 = document.getElementById('polecane_itemy');
let menu = document.getElementById('menu');
const lista_filtrow = document.createElement('div');
lista_filtrow.id = 'lista_filtrow';

const pizza_szkic = (id, nazwa, cena_min, cena_max, skład) => {
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

const dania_szkic = (id, nazwa, cena, skład) => {
    let składHTML = skład.map(sklad => `<h4 id="sklad">${sklad},</h4>`).join(''); 

    return `
        <li id="potrawa2">
            <p>${id}</p>
            <p>${nazwa}</p>
            <div>${składHTML}</div> 
            <p>${cena}</p>
        </li>
    `;
}



const pierogi_szkic = (id, nazwa, cena) => {
    return `
        <li id="pierogi">
            <p>${id}</p>
            <p>${nazwa}</p>
            <p>${cena}</p>
        </li>
    `;
}

const ustaw_pierogi = (grupa) => {
    tekst.innerHTML = '';
    tekst2.innerHTML = '';
    menu.innerHTML = '';
    let ul = document.createElement('ul');
    ul.innerHTML += pierogi_szkic('nr', 'nazwa', 'cena');

    const Items = Dania.filter(item => item.Grupa === grupa).map(item => item.potrawy);
    Items.forEach(items => {
        items.forEach(item => {
            ul.innerHTML += pierogi_szkic(item.id, item.nazwa, item.cena);
        });
    });

    menu.innerHTML += `<ul>${ul.innerHTML}</ul>`;

    filtry_szkic();
    itemy.appendChild = menu.innerHTML;
}


const ustaw_itemy = (grupa) => {
    tekst.innerHTML = '';
    tekst2.innerHTML = '';
    menu.innerHTML = '';
    let ul = document.createElement('ul');
    ul.innerHTML += dania_szkic('nr', 'nazwa', 'cena', ['składniki']);

    const Items = Dania.filter(item => item.Grupa === grupa).map(item => item.potrawy);
    Items.forEach(items => {
        items.forEach(item => {
            ul.innerHTML += dania_szkic(item.id, item.nazwa, item.cena, item.składniki);
        });
    });

    menu.innerHTML += `<ul>${ul.innerHTML}</ul>`;

    filtry_szkic();
    itemy.appendChild = menu.innerHTML;
};



const filtry_szkic = () => {
    lista_filtrow.innerHTML = '';
    dania.forEach(arr => {
        let link = document.createElement('a');
        link.textContent = arr.Grupa;
        let button = document.createElement('button');
        button.appendChild(link);
        button.id = arr.Grupa;
        
        lista_filtrow.appendChild(button);

        button.addEventListener('click',()=>{
            if ( link.textContent === "DANIA MIĘSNE" || link.textContent === "PLACKI ZIEMNIACZANE" || link.textContent === "DANIA Z GRILLA" ||
                link.textContent === "MAKARONY 500 g" || link.textContent === "SAŁATKI 450g" || link.textContent === "RYBY I OWOCE MORZA" ||
                link.textContent === "NA SŁODKO") {
                console.log(link.textContent);
                ustaw_itemy(link.textContent);
            }else if( link.textContent === "PIZZA"){
                ustaw__default_itemy();
            }else if(link.textContent === "PIEROGI 10 szt." || "DANIE DLA DZIECI" || "ZUPY 350 ml"){
                ustaw_pierogi(link.textContent);
            }

        })
    });
    menu.appendChild(lista_filtrow);
};

const ustaw__default_itemy = (grupa) => {
    tekst.innerHTML = '';
    tekst2.innerHTML = '';
    menu.innerHTML = '';
    let ul = document.createElement('ul');
    ul.innerHTML += pizza_szkic('nr', 'nazwa', 'min', 'max', ['składniki']);

    for (let j = 0; j < dania[0].potrawy.length; j++) {
        let potrawa = dania[0].potrawy[j];
        ul.innerHTML += pizza_szkic(potrawa.id, potrawa.nazwa, potrawa.min, potrawa.max, potrawa.składniki);
    }

    menu.innerHTML += `<ul>${ul.innerHTML}</ul>`;
    filtry_szkic();
    itemy.appendChild = menu.innerHTML;
};

domenu.addEventListener('click', ustaw__default_itemy);
