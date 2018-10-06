const employee = [
  {
      "id": 1,
      "name": "One Z",
      "email": "One@example.com",
      "department": "Engineer"
  },
 {
      "id": 2,
      "name": "AZ Two",
      "email": "aTwo@example.com",
      "department": "Computer Science"            
 },
 {
      "id": 4,
      "name": "Nine Den",
      "email": "nDen@example.com",
      "department": "Biology"
  },
  {
      "id": 8,
      "name": "QAZ Er",
      "email": "qEr@example.com",
      "department": "Chemistry"
  }
];

let html = '';
let template = $("#empTemplate").html();

function renderTemplates(template, data) {
  $("body").append(html);  
}

function render(template, data) {
  let dat = [...data];

  let regEx = /{(\w+)}/g
  let myArr = template.match(regEx) 
  let key = '';

  dat.map(obj => {
    let tpl = template;     
    for (let i = 0; i < myArr.length; i++) {
      let re = new RegExp(myArr[i], "g");

      key = myArr[i].replace(/[{}]/g, "");
      tpl = tpl.replace(re, obj[key]); 
    }
    html += `${tpl} <br />`;

  })
}

render(template, employee);

window.addEventListener("load", renderTemplates);
