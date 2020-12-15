function onFormSubmit(){
    var formData = readFormData();
    insertNewRecord(formData);
}

function readFormData(){
    var formData = {};
    formData["title"] = document.getElementById("title").value;
    formData["detail"] = document.getElementById("detail").value;

    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("Todolist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.lenght);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.detail;
    
}