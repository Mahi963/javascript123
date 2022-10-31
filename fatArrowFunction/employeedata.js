let employee =[{id:111, Name:'hari' ,sal:45555}]

 function data() {
    let row =""
    for (emp of employee) {
        row = row + "good"
    }
    document.getElementById("mahesh").innerHTML = row
}
