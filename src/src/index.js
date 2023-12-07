const div = document.getElementById("contacts-list");
const form = document.querySelector('form');
const nameInput = document.getElementById('contact-name');
const emailInput = document.getElementById('contact-email');

const contacts = [];
// form.addEventListener('submit', function(e){
//     e.preventDefault();

//     console.log(nameInput.value);
//     console.log(emailInput.value);
// })

// form.addEventListener('submit', function(e){
//     e.preventDefault();
    
//     const newContact = {};
//     newContact.name = nameInput.value;
//     newContact.email = emailInput.value;
//     contacts.push(newContact);

//     console.log(contacts)
// });

//* Contact Class
class Contact {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.createdAt = new Date(Date.now());
    }

    updateEmail(newEmail) {
        this.email = newEmail
    }

    toString() {
            console.log('Contact name: ${this.name}')
    }
};

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newContact = new Contact(nameInput.value, emailInput.value);
    console.log(newContact);
    console.log(newContact.toString());

    contacts.push(newContact);
    console.log(contacts);

    displayContact();

    nameInput.value = '';
    emailInput.value = '';
});

function displayContact() {
    contacts.forEach(contact => {
        const contactsDiv = document.createElement('div');
        const h4 = document.createElement('h4');
        const h6 = document.createElement('h6');

        // adding the text
        h4.textContent = contact.name;
        h6.textContent = contact.email;

        // appending elements
        div.appendChild(h4);
        div.appendChild(h6);

        contactsDiv.appendChild(div);
    });
}