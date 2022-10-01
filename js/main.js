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

dayObj = [{"day": "Mittwoch 28.09.2022", "update": "Aktualisiert 27.09.2022 - 10:39"}]

function insertValues(data, dayData){
  document.getElementById('h1').innerHTML = dayData[0].day;
  document.getElementById('h3').innerHTML = dayData[0].update;

  var table = document.getElementById("classTable");

  for (var i = data.length-1; i >= 0; i--) {

    if (data[i].Klasse != null){
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
      // colCount++;
      // console.log(`colCount: ${colCount}`);
      var row = table.insertRow(0);
      // row.className = "underlineTd";
      // if (colCount % 2 == 0){
      //   row.className = "color";
      // }

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

      hour.className = "underlineTd";
      teacher.className = "underlineTd";
      subject.className = "underlineTd";
      room.className = "underlineTd";
      info.className = "underlineTd";
    }
  }
}

function log_out(){
  console.log("bye");
}

function displayDay(n){
  switch (n) {
    case 1:
      console.log("heute");
      break;
    case 2:
      console.log("morgen");
      break;
    case 3:
      console.log("heute + 1");
      break;
    case 4:
      console.log("heute + 2");
      break;
    case 5:
      console.log("heute + 4");
      break;
    case 6:
      console.log("heute + 6");
      break;
    case 7:
      console.log("heute + 13");
      break;
    default:
      console.log("idk what happened");
  }
}

insertValues(dataObj, dayObj);
