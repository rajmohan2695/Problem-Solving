
let db = createDb('Raju', {
    rajuTb: `id, name, phoneNumber, email`
});

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
    // db.rajuTb.bulkAdd(contacts);
    populateContact();
})();

btnRead.onclick = () => {
    sortContacts();
    populateContact();
}

btnCreate.onclick = async () => {
    if(!name.value) { return; }
    await db.rajuTb.add({id:getRandomString(), name : name.value, phoneNumber : phoneNumber.value, email : email.value});
    populateContact();
}

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

async function populateContact(){
    recordTable.innerHTML = null;
    let objTable = await db.rajuTb.toArray();
    objTable.forEach( (contact, index) => {
        recordTable.innerHTML +=  contactTemplate(contact,index+1)
    })
}

const editContact = async (contactId) => {
    // const contactId = node.parentNode.parentElement.dataset["contactid"];
    const contact = await db.rajuTb.get(contactId);
        if(contact){
            name.value = contact.name;
            phoneNumber.value = contact.phoneNumber;
            email.value = contact.email;
            updateId = contactId;
            return;
        }
}

function contactTemplate(contact,index){
    return `
    <div class="row contactRow" data-contactId='${contact.id}'>
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
            <i onclick=editContact("${contact.id}") class="fas fa-user-edit btnedit"></i>
        </div>
        <div class="col">
            <i onclick='deleteContact("${contact.id}");' id="delete" class="fas fa-trash btndelete"></i>
        </div>
    </div>
</div>`
}

async function deleteContact(contactId){
    await db.rajuTb.delete(contactId);
    populateContact();
}

document.getElementById('deleteAll').addEventListener('click', async ()=>{
    await db.rajuTb.clear();
    populateContact();
});

document.getElementById('update').addEventListener('click', () => {
    if(!updateId){ return; }
    db.rajuTb.put({ id:updateId, name : name.value, phoneNumber : phoneNumber.value, email : email.value })
    makeInputSpaceEmpty();
    populateContact();
})

function deleteAll(){
    contacts = [];
    updateId = undefined;
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
