function myFunction() {
   var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
var pos=1;
 /* var cell=sheet.getRange('A2');
  Logger.log(sheet.getRange('A2').getNote());
  if (cell.getNote() != ""){
  cell.setValue(cell.getNote());
  }*/    
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (pos;pos<27;pos++){  
    var z = letters.substring(pos-1,pos);
    for (var i=1;i<218;i++){
      var cell = sheet.getRange(z+(i.toString()));
      if (cell.getNote() != ""){
        cell.setValue(cell.getNote());
      } 
    }  
  }
}
