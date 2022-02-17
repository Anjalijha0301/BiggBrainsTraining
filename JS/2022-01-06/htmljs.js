//alert("hello")

function addFoodItem() {
    let fName = document.getElementById("fName").value
    let fValue = document.getElementById("fValue").value
    let fType = document.getElementById("fType").value
    let fImg = document.getElementById("fImg").value
    //alert(`${fName} ${fValue} ${fType}`)
    let tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0]
    let newRow = tableRef.insertRow(tableRef.rows.length);
    newRow.innerHTML = `
    	<tr>
            <td scope="row">${tableRef.rows.length}</td>
            <td>${fName}</td>
            <td>${fValue}</td>
            <td>${fType}</td>
            <td><img src="${fImg}"></td>
        </tr>
    `
}

function hideTable() {
    let tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0]
    tableRef.innerHTML = ""
}