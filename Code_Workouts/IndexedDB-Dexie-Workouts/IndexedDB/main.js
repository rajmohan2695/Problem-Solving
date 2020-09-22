import createDb from './dexieDb.js';

createDb('Raju', {
    rajuTb: `id, name, phoneNumber, email`
})

let contacts = [{
    id:'sdgsd',
    name:'Raj Mohan',
    phoneNumber: 123456798,
    email:'rajmohan2695@xyz.com'
},
{
    id:'wasdg',
    name:'Kannan',
    phoneNumber: 987654321,
    email:'rajmohan2695@xyz.com'
}];

//Input tags
const name = document.getElementById('name');
const phoneNumber = document.getElementById('phoneNumber');
const email = document.getElementById('email');

//Buttons
const btnCreate = document.getElementById('create');
const btnRead = document.getElementById('read');
const btnUpdate = document.getElementById('update');
const btnDelete = document.getElementById('delete');

//table
const recordTable = document.getElementById('record');

let updateId;

(function(){
    populateContact();
})();

document.getElementById('read').addEventListener('click', () => {
    sortContacts();
    populateContact();
});

function compare(a,b){
    if(a.name < b.name){
        return -1;
    }
    if(a.name > b.name){
        return 1;
    }
    return 0;
}

function sortContacts(){
    contacts.sort(compare);
    // Can be written as below
    // contacts.sort((a,b) => a.name > b.name ? (a.name < b.name ? 1 : 0) : -1)
}

function createContact(){
    const contactName = name.value.trim();
    if(updateId || !contactName){ return; }
    contacts.push({id:getRandomString(), name : name.value, phoneNumber : phoneNumber.value, email : email.value});
    makeInputSpaceEmpty();
    populateContact();
}

function populateContact(){
    recordTable.innerHTML = null;
    contacts.forEach( (contact, index) => {
        recordTable.innerHTML +=  contactTemplate(contact,index+1)
    })
}

function contactTemplate(contact,index){
    return `
    <div class="row" data-contactId='${contact.id}'>
        <div class="col">
            <h5>${index}</h5>
        </div>
        <div class="col">
            <h5>${contact.name}</h5>
        </div>
        <div class="col">
            <h5>${contact.phoneNumber}</h5>
        </div>
        <div class="col">
            <h5>${contact.email}</h5>
        </div>
        <div class="col">
            <i onclick='editContact(this);' class="fas fa-user-edit btnedit"></i>
        </div>
        <div class="col">
            <i onclick='deleteContact(this);' class="fas fa-trash btndelete"></i>
        </div>
    </div>
</div>`
}

function editContact(node){
    const contactId = node.parentNode.parentElement.dataset["contactid"];
    for(let contact of contacts){
        if(contact.id == contactId){
            name.value = contact.name;
            phoneNumber.value = contact.phoneNumber;
            email.value = contact.email;
            updateId = contactId;
            return;
        }
    }
}

function deleteContact(node){
    const contactId = node.parentNode.parentElement.dataset["contactid"];
    contacts = contacts.filter(contact => contact.id != contactId);
    populateContact();
}

function deleteAll(){
    contacts = [];
    updateId = undefined;
    populateContact();
}

function updateContact(){
    if(!updateId){ return; }
    contacts = contacts.map(contact => {
        if(contact.id == updateId){
            return { id:updateId, name : name.value, phoneNumber : phoneNumber.value, email : email.value }
        }
        return contact;
    });
    makeInputSpaceEmpty();
    populateContact();
}

function makeInputSpaceEmpty(){
    name.value = null;
    phoneNumber.value = null;
    email.value = null;
}

function getRandomString(){
    const strings = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0'];
    let randomString = '';
    for(let i=0; i < 5; i++){
        randomString = randomString + strings[Math.round(Math.random()*61)];
    }
    return randomString;
}
