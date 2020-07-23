let contacts = [{
    id:'sdgsd',
    name:'Raj Mohan',
    phoneNumber: 9787818277,
    email:'rajmohan2695@xyz.com'
},
{
    id:'wasdg',
    name:'Kannan',
    phoneNumber: 9787818277,
    email:'rajmohan2695@xyz.com'
}];

// (function(){
//     populateContact();
// })();

document.getElementById('read').addEventListener('click', () => {
    populateContact();
})

function populateContact(){
    document.getElementById('record').innerHTML = null;
    const contactsHTML = contacts.forEach( (contact, index) => {
        document.getElementById('record').innerHTML +=  contactTemplate(contact,index+1)
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
}

function deleteContact(node){
    const contactId = node.parentNode.parentElement.dataset["contactid"];
}

window.randomString = function getRandomString(){
    const strings = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0'];
    let randomString = '';
    for(let i=0; i < 5; i++){
        randomString = randomString + strings[Math.round(Math.random()*61)];
    }
    return randomString;
}
