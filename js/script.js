var selectedRow = null;

//show alerts
function showAlert (message, className){

const div = document.createElement("div");
div.className = `alert alert-${className}`;

div.appendChild(document.createTextNode(message));

const container = document.querySelector(".container");
const main = document.querySelector(".main");

container.insertBefore(div,main);

setTimeout(() => document.querySelector(".alert").remove(), 3000);
 
}

// delete data
document.querySelector("#car-list").addEventListener("click", (e) => {
    target = e.target

    if(target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("Car Data Deleted","danger")
    }
})

//clear all fields
function clearFields() {
    document.querySelector("#carName").value = "";
    document.querySelector("#carType").value = "";
    document.querySelector("#carColor").value = "";
    document.querySelector("#carPrice").value = "";
    document.querySelector("#carDetails").value = "";
    document.querySelector("#carImage").value = "";
}

//add data
document.querySelector("#car-form").addEventListener("submit",(e) => {
    e.preventDefault();

//get form values
const carName = document.querySelector("#carName").value;
const carType = document.querySelector("#carType").value;
const carColor = document.querySelector("#carColor").value;
const carPrice = document.querySelector("#carPrice").value;
const carDetails = document.querySelector("#carDetails").value;
const carImage = document.querySelector("#carImage").value;
//validate
if(carName == "" || carType == "" || carColor == "" || carPrice == "" ||  carDetails == "" || carImage == "") {
    showAlert("Please Fill In All Fields","danger")
}

else {
    if(selectedRow == null) {
        const list = document.querySelector("#car-list");
        const row = document.createElement("tr")

        row.innerHTML = `
                <td>${carName}</td>
                <td>${carType}</td>
                <td>${carColor}</td>
                <td>${carPrice}</td>
                <td>${carDetails}</td>
                <td><img src="../images/liam-martens-uUi5RQCyUdM-unsplash.jpg" alt="" height=90 width=100></img></th>
                <td>
                <a href="#" class ="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class ="btn btn-danger btn-sm delete">Delete</a>
        `;

        list.appendChild(row)
        selectedRow = null;
        
        showAlert("Car Added","success");
    }
    
    else {
        selectedRow.children[0].textContent =carName;
        selectedRow.children[1].textContent =carType;
        selectedRow.children[2].textContent =carColor;
        selectedRow.children[3].textContent =carPrice;
        selectedRow.children[4].textContent =carDetails;
        selectedRow.children[5].textContent =carImage;
        selectedRow = null;
        showAlert("Car Info Edited","info");
    }
    clearFields();
    
}

})

// edit data
document.querySelector("#car-list").addEventListener("click", (e) => {
    target = e.target

    if(target.classList.contains("edit")) {
        selectedRow=target.parentElement.parentElement;

        document.querySelector("#carName").value = selectedRow.children[0].textContent;
        document.querySelector("#carType").value = selectedRow.children[1].textContent;
        document.querySelector("#carColor").value = selectedRow.children[2].textContent;
        document.querySelector("#carPrice").value = selectedRow.children[3].textContent;
        document.querySelector("#carDetails").value = selectedRow.children[4].textContent;
        document.querySelector("#carImage").value = selectedRow.children[5].textContent;
        
    }
})