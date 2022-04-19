let edit=false;
let editIndex=-1;
function mydata () {
    console.log('inside');
    var data=JSON.parse(localStorage.getItem('get'))?JSON.parse(localStorage.getItem('get')):[];
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('no').value;
    var gender = document.getElementById('gender').value;
    var age = document.getElementById('age').value;
    var dropdown = document.getElementById('dropdown').value;
    var date =document.getElementById('date').value;
    // console.log(date);
    var radio = document.querySelector('input[type="radio"]:checked').value;
    var checkbox = document.querySelectorAll('input[type="checkbox"]');
    let checkarr=[];
    for(i=0; i<checkbox.length; i++) {
       if (checkbox[i].checked) {
           checkarr.push(checkbox[i].value);
       }
    }

const image = document.getElementById("file-img").files[0];
const img = URL.createObjectURL(image);
// console.log(img);

    var editdata={  
    "name":name,
    "email":email,
    "contact":contact,
    "gender":gender,
    "age":age,
    "dropdown":dropdown,
    "dateplan":date,
    "radio":radio,
    "checkbox":checkarr,
    'img':img,
   }
    
       if(edit){
           edit=false;
           data[editIndex] = editdata;
           editIndex = -1;
       }
       else{
        data.push (editdata);
       }
       console.log(data);
    localStorage.setItem('get',JSON.stringify(data));
    createTableRow();
}

function createTableRow() {
    let para =JSON.parse(localStorage.getItem('get'));

    var table = document.getElementById("tbl").getElementsByTagName('tbody')[0];
    var rowCount = table.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
    }
    console.log(table.length);
    for(let i=0;i<para.length;i++)
    {
        var newRow = table.insertRow(-1)

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = para[i].name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = para[i].email;
    cell3 = newRow.insertCell(2);  
    cell3.innerHTML = para[i].contact;      
    cell4 = newRow.insertCell(3);  
    cell4.innerHTML = para[i].gender;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = para[i].age;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = para[i].dropdown;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = para[i].dateplan;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = para[i].radio;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = para[i].checkbox;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = `<td><img src="${para[i].img || ""}"/></td>`;
    cell11 = newRow.insertCell(10);
    cell11.innerHTML = `<td><button onClick="editdata(${i});">edit</button></td>`;
    cell12 = newRow.insertCell(11);
    cell12.innerHTML = `<td><button onClick="deletedata(${i});">delete</button></td>`;
 rst();
    }
}
function rst() {
    document.getElementById('name').value='';
    document.getElementById('email').value='';
   document.getElementById('no').value='';
   document.getElementById('gender').value='';
   document.getElementById('age').value='';
    document.getElementById('dropdown').value='';
    document.getElementById('date').value='';
}
function deletedata(i) {
    const para =JSON.parse(localStorage.getItem('get'));
    para.splice(i,1);
    localStorage.setItem('get',JSON.stringify(para));
    createTableRow();
}

function editdata(i) {
    let para =JSON.parse(localStorage.getItem('get'));
    console.log(para);
    edit=true;
    editIndex=i;

    
    let name = para[i].name;
    let email = para[i].email;
    let contact = para[i].contact;
    console.log(contact);
    let gender = para[i].gender;
    let age = para[i].age;
    let dropdown = para[i].dropdown;
    let date = para[i].dateplan;
    console.log(date);
    console.log(para[i].radio,);
    let radio = para[i].radio;
    let checkbox = para[i].checkbox;

    console.log(name);
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('no').value = contact;
    document.getElementById('gender').value = gender;
    document.getElementById('age').value = age;
    document.getElementById('dropdown').value = dropdown;
    document.getElementById('date').value = date;

    const radioBtns = document.querySelectorAll('input[type="radio"]');
    for (let index = 0; index < radioBtns.length; index++) {
        console.log(radioBtns[index].value, 'radio')
        radioBtns[index].checked = radioBtns[index].value === radio;
    } 
    console.log(document.querySelectorAll('input[type="radio"]'), 'document.querySelector')


    const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    for (let index = 0; index < checkBoxes.length; index++) {
        console.log(checkbox, 'checkbox')
        checkBoxes[index].checked = checkbox.includes(checkBoxes[index].value);
    } 
    console.log(document.querySelectorAll('input[type="checkbox"]'), 'document.querySelector')

}


