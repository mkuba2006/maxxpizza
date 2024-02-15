let dania = Dania;
let main = document.getElementById('main');
let domenu = document.getElementById('domenu');
let itemy = document.getElementById('itemy');

const item_szkic = (id, nazwa, cena_min, cena_max, skład) => {
    let składHTML = ''; // Initialize an empty string to store HTML for składniki
    for(let i = 0; i < skład.length; i++){
        składHTML += `<h4 id="sklad">${skład[i]},</h4>`; // Append HTML for each składniki element
    }

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





domenu.addEventListener('click',()=>{
    for(let i = 0; i< dania.length; i++){
        let typ = dania[i];
        let dl_typu = typ.potrawy.length;
    
        
    }
    console.log(dania[0].potrawy.length);

    itemy.innerHTML='';

    for(let j = 0; j< dania[0].potrawy.length; j++){
        let potrawa = dania[0].potrawy[j];
        let jedno = potrawa.składniki;
        


        itemy.innerHTML += item_szkic(potrawa.id, potrawa.nazwa, potrawa.min, potrawa.max, jedno)
    }

})
