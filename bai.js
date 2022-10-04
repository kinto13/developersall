var row=1;
function AddRow(){
  var Firstname=document.getElementById("fn").value;
  var SecondName=document.getElementById("sn").value;
  var Address=document.getElementById("add").value;
  var Pincode=document.getElementById("pin").value;
   var Gender1=document.getElementsByName("gender");
  var Gender;
  Gender1.forEach(radio =>{
    if (radio.checked){
      Gender=radio.value
    }
  })
  var state=document.getElementById("state").value;
  var country=document.getElementById("country").value;
  
  if (!Firstname|| !SecondName || !country){
    alert("please fill all details");
    return;
  }
  var display=document.getElementById("mytable");
  var newRow= display.insertRow(row);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);
  
  cell1.innerHTML=Firstname;
  cell2.innerHTML=SecondName;
  cell3.innerHTML=Address;
  cell4.innerHTML=Pincode;
  cell5.innerHTML=Gender;
  cell6.innerHTML=state;
  cell7.innerHTML=country;
  row++;
}