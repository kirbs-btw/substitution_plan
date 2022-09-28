dataObj = [
  {"Klasse": "05c"},
  {"Stunde": 4, "Lehrer": "KAM", "Fach": "D > Ek", "Raum": "158_M", "Info": "Mi-21.9/1"},
  {"Klasse": "05d"},
  {"Stunde": 1, "Lehrer": "RBR", "Fach": "E", "Raum": "262_M", "Info": ""},
  {"Stunde": 3, "Lehrer": "SUE", "Fach": "SpK", "Raum": "SP_PTH_2", "Info": ""},
  {"Klasse": "06c"},
  {"Stunde": 4, "Lehrer": "KAM", "Fach": "D > Ek", "Raum": "158_M", "Info": "Mi-21.9/1"},
  {"Klasse": "09d"},
  {"Stunde": 1, "Lehrer": "RBR", "Fach": "E", "Raum": "262_M", "Info": ""},
  {"Stunde": 3, "Lehrer": "SUE", "Fach": "SpK", "Raum": "SP_PTH_2", "Info": ""},
  {"Stunde": 4, "Lehrer": "SUE", "Fach": "SpK", "Raum": "SP_PTH_2", "Info": ""},
  {"Klasse": "10c"},
  {"Stunde": 4, "Lehrer": "KAM", "Fach": "D > Ek", "Raum": "158_M", "Info": "Mi-21.9/1"},
  {"Klasse": "10d"},
  {"Stunde": 4, "Lehrer": "KAM", "Fach": "D > Ek", "Raum": "158_M", "Info": "Mi-21.9/1"},
  {"Klasse": "11"},
  {"Stunde": 1, "Lehrer": "RBR", "Fach": "E", "Raum": "262_M", "Info": ""},
  {"Stunde": 3, "Lehrer": "SUE", "Fach": "SpK", "Raum": "SP_PTH_2", "Info": ""},
  {"Klasse": "12"},
  {"Stunde": 4, "Lehrer": "KAM", "Fach": "D > Ek", "Raum": "158_M", "Info": "Mi-21.9/1"},
  {"Klasse": "13"},
  {"Stunde": 1, "Lehrer": "RBR", "Fach": "E", "Raum": "262_M", "Info": ""},
  {"Stunde": 3, "Lehrer": "SUE", "Fach": "SpK", "Raum": "SP_PTH_2", "Info": ""},
  {"Stunde": 4, "Lehrer": "SUE", "Fach": "SpK", "Raum": "SP_PTH_2", "Info": ""},
];

function insertValues(data){
  var table = document.getElementById("classTable");


  // colCount is there to count when to color a row and not to
  var colCount = 0;
  for (var i = data.length-1; i >= 0; i--) {

    if (data[i].Klasse != null){
      console.log(data[i].Klasse);
      var row = table.insertRow(0);
      var cell = row.insertCell(0);
      cell.innerHTML = `<br/>${data[i].Klasse}`;

      var rowNxt = table.insertRow(1);
      rowNxt.className = "color";

      var info = rowNxt.insertCell(0);
      var room = rowNxt.insertCell(0);
      var subject = rowNxt.insertCell(0);
      var teacher = rowNxt.insertCell(0);
      var hour = rowNxt.insertCell(0);

      hour.innerHTML = "Stunde";
      teacher.innerHTML = "Lehrer";
      subject.innerHTML = "Fach";
      room.innerHTML = "Raum";
      info.innerHTML = "Info";

      colCount = 0;
    }
    else{
      colCount++;
      console.log(`colCount: ${colCount}`);
      var row = table.insertRow(0);
      if (colCount % 2 == 0){
        row.className = "color";
      }


      var info = row.insertCell(0);
      var room = row.insertCell(0);
      var subject = row.insertCell(0);
      var teacher = row.insertCell(0);
      var hour = row.insertCell(0);

      hour.innerHTML = `${data[i].Stunde}`;
      teacher.innerHTML = `${data[i].Lehrer}`;
      subject.innerHTML = `${data[i].Fach}`;
      room.innerHTML = `${data[i].Raum}`;
      info.innerHTML = `${data[i].Info}`;

      console.log(data[i].Stunde);
      console.log(data[i].Lehrer);
      console.log(data[i].Fach);
      console.log(data[i].Raum);
      console.log(data[i].Info);
    }
  }


}
console.log("hello");
insertValues(dataObj);
