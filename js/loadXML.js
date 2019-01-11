<script>
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "ContactXMLDocument.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>FirstName</th><th>LastName</th><th>Email</th></tr>";
  var x = xmlDoc.getElementsByTagName("CONTACT");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("FIRSTNAME")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("LASTNAME")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("EMAIL")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("contactDetails").innerHTML = table;
}
</script>