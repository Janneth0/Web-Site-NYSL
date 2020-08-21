let members=data.results[0].members;
verifyPage();
//Verificacion de Pagina
function verifyPage() {
    if (document.getElementById("senate")) {
        Paint_Table("senate");
    } else {
        Paint_Table("house");
    }
}

//Agregar Tablas
function Paint_Table(ide){
    let table =document.getElementById(ide)
    console.log(table);
    let tbody=document.createElement("tbody")
    for (let i = 0; i < members.length; i++) {
    // console.log(members[i].first_name);
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');// Nombre completo
      
        td1.innerHTML= "<a class='iframe_colorbox' target='_blank' href=" + members[i].url + ">" + members[i].first_name+' '+(members[i].middle_name||' ')+''+ members[i].last_name + "</a>";

    let td2 = document.createElement('td');//partido
        td2.innerText=members[i].party;

    let td3 = document.createElement('td');//state
        td3.innerText=members[i].state;

    let td4 = document.createElement('td');//year office
        td4.innerText=members[i].seniority;

    let td5 = document.createElement('td')//totalo votes
        td5.innerText=members[i].votes_with_party_pct;
    tr.appendChild(td1)//Nombre completo
    tr.appendChild(td2)//Partido
    tr.appendChild(td3)//estado
    tr.appendChild(td4)//year in office
    tr.appendChild(td5)//votes /w party
    
    tbody.appendChild(tr)
    }
table.appendChild(tbody)

}

console.log(members)