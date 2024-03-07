var fake = fetch("http://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json");
fake
.then((res) => res.json())
.then((data) => {
    var results = data.Results; // Access the Results array
    var container = document.createElement("div");
    container.classList.add("container");
    var row = document.createElement("div");
    row.classList.add("row");
    
    for (let i = 0; i < results.length; i++) { // Iterate over the Results array
        

        var card = document.createElement("div");
        card.classList.add("col-lg-4", "d-flex", "col-sm-12","mb-4");
        card.innerHTML = `
            <div class="card mb-3">
                <div class="card-body text-center">
                    <h5 class="card-title pt-2">${results[i].MakeName}</h5>
                    <p class="card-text">Make ID: ${results[i].MakeId}</p>
                    <p class="card-text">Vehicle Type ID: ${results[i].VehicleTypeId}</p>
                    <p class="card-text">Vehicle Type Name: ${results[i].VehicleTypeName}</p>
                </div>
            </div>
        `;

        row.appendChild(card);

        
    }
    container.appendChild(row);
    document.body.append(container);
})
.catch(error => console.error('Error fetching data:', error)); // Add error handling
