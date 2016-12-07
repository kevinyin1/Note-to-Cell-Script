function myFunction() {
   var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
var pos=1;
var row= 218;  
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (pos;pos<27;pos++){  
    var z = letters.substring(pos-1,pos);
    for (var i=1;i<row;i++){
      var cell = sheet.getRange(z+(i.toString()));
      if (cell.getNote() != ""){
        cell.setValue(cell.getNote());
      } 
    }  
  }
}
