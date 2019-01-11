<script>
function editXML(firstName, lastName, email) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    editLoadedXML(this, firstName, lastName, email);
                }
            };
            xhttp.open("GET", "xml/Contact2019.xml", true);
            xhttp.send();
        }

        function editLoadedXML(xml, firstName, lastName, email) {
            // this is the loaded XML
            var doc = xml.responseXML;

            // get number of contacts, which is now their IDs
            // + 1 because you didnt start at 0 >:C
            var id = (xmlDoc.getElementsByTagName("CONTACT")) + 1;

            // this is the new contact element that contains the contact
            var newContact = doc.createElement("CONTACT");
            // set id
            newContact.setAttribute("id", id);

            // add the values
            var newFName = doc.createTextNode("FIRSTNAME");
            var newLName = doc.createTextNode("LASTNAME");
            var newAge = doc.createTextNode("EMAIL");

            // add them to the contact
            newContact.appendChild(newFName);
            newContact.appendChild(newLName);
            newContact.appendChild(newEmail);

            // add to the xml
            doc.appendChild(newContact);
        }
<script>