// 'http://ergast.com/api/f1/{year}/{round}/driverStandings.json'

function formInfo(){
    console.log('form submitted')
    const year = document.getElementsByName("year")[0].value
    const round = document.getElementsByName("round")[0].value
    console.log(year + round)
    doAPICall(year, round)
}

async function doAPICall(year, round){
    let tbody = document.getElementsByTagName('tbody')[0]
    removeOldRows(tbody)
    console.log('api call')
    let search = await axios.get(`http://ergast.com/api/f1/${year}/${round}/driverStandings.json`)
    console.log(search)
    if (search.status != 200){
        let tr = document.createElement('tr')
        tbody.appendChild(tr)

        th= document.createElement('th');
        th.scope="row";
        th.innerText="Unexpected Error Occured"
        tr.appendChild(th)
    }
    if (search.data.MRData.StandingsTable.StandingsLists.length == 0){
        let tr = document.createElement('tr')
        tbody.appendChild(tr)

        th= document.createElement('th');
        th.scope="row";
        th.innerText="Invalid Year/Round Combo"
        tr.appendChild(th)        
    }else{
        let result = search.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        console.log(result)
        // result is a list of driver objects
        for (driver of result){
            let tr = document.createElement('tr')
            tbody.appendChild(tr)

            th= document.createElement('th');
            th.scope="row";
            th.innerText=driver.position
            tr.appendChild(th)

            td= document.createElement('td')
            td.innerText=driver.Driver.givenName
            tr.appendChild(td)

            td= document.createElement('td')
            td.innerText=driver.Driver.familyName
            tr.appendChild(td)
            
            td= document.createElement('td')
            td.innerText=driver.Driver.dateOfBirth
            tr.appendChild(td)

            td= document.createElement('td')
            td.innerText=driver.wins
            tr.appendChild(td)

            td= document.createElement('td')
            td.innerText=driver.Driver.nationality
            tr.appendChild(td)

            td= document.createElement('td')
            td.innerText=driver.Constructors[0].name
            tr.appendChild(td)
    }
    }
} 

function removeOldRows(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}