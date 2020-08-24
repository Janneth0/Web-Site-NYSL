let members = data.results[0].members;
document.querySelectorAll("input[name=party]").forEach(function (e) {
    e.addEventListener("change", verifyPage)
})
//Verificacion de Pagina
function verifyPage() {
    if (document.getElementById("senate")) {
        Paint_Table("senate");
    } else {
        Paint_Table("house");
    }
}

//Agregar Tablas
function Paint_Table(ide) {
    let table = document.getElementById(ide);
    table.innerHTML = "";
    let thead = document.createElement("thead")
    let tr = document.createElement('tr')
    let th1 = document.createElement('th')
    th1.innerText = "Name";
    let th2 = document.createElement('th')
    th2.innerText = "Party";
    let th3 = document.createElement('th')
    th3.innerText = "State";
    let th4 = document.createElement('th')
    th4.innerText = "Seniority";
    let th5 = document.createElement('th')
    th5.innerText = "Porcentage";

    tr.appendChild(th1)
    tr.appendChild(th2)
    tr.appendChild(th3)
    tr.appendChild(th4)
    tr.appendChild(th5)

    thead.appendChild(tr)
    table.appendChild(thead)

    let tbody = document.createElement("tbody")
    let checkedParty = Array.from(document.querySelectorAll("input[name=party]:checked")).map(e => e.value)

    for (let i = 0; i < members.length; i++) {
        if (checkedParty.includes(members[i].party)) {
            let tr = document.createElement('tr');

            let td1 = document.createElement('td');// Nombre completo

            td1.innerHTML = "<a class='iframe_colorbox' target='_blank' href=" + members[i].url + ">" + members[i].first_name + ' ' + (members[i].middle_name || ' ') + '' + members[i].last_name + "</a>";

            let td2 = document.createElement('td');//partido
            td2.innerText = members[i].party;

            let td3 = document.createElement('td');//state
            td3.innerText = members[i].state;

            let td4 = document.createElement('td');//year office
            td4.innerText = members[i].seniority;

            let td5 = document.createElement('td')//totalo votes
            td5.innerText = members[i].votes_with_party_pct;
            tr.appendChild(td1)//Nombre completo
            tr.appendChild(td2)//Partido
            tr.appendChild(td3)//estado
            tr.appendChild(td4)//year in office
            tr.appendChild(td5)//votes /w party

            tbody.appendChild(tr)

        }



    }
    table.appendChild(tbody)

}




verifyPage()