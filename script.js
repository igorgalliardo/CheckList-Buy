var itemList = document.querySelector(".item-list");

function resetInput(){
    let field = document.querySelector("input");
    field.value="";
}
function resetList(){
    itemList = "";
}

function limiteItems(){
  totalLi = document.querySelectorAll("li");
    qtd = totalLi.length;

    if(qtd >= 25){
      alert("Voce atingiu limite de items");
      var button = document.querySelector("button");
      button.disabled = true;
    }
}

function addItem(){
    let li = document.createElement('LI');
    let field = document.querySelector("input");
    let input = field.value;
    let input_text = document.createTextNode(input);
    document.querySelector('.item-list').style.display="block";

    li.appendChild(input_text);
    itemList.appendChild(li);

    totalLi = document.querySelectorAll("li");
    qtd = totalLi.length;

    if(qtd > 0 && qtd < 15){
      document.querySelector("p").innerHTML = qtd+" Itens";
      document.querySelector("p").style.color = "green";
      document.querySelector("p").style.fontWeight = "bold";
    }else if(qtd >= 15 && qtd < 20){
      document.querySelector("p").innerHTML = qtd+" Itens";
      document.querySelector("p").style.color = "orange";
      document.querySelector("p").style.fontWeight = "bold";
    }else{
      document.querySelector("p").innerHTML = qtd+" Itens";
      document.querySelector("p").style.color = "red";
      document.querySelector("p").style.fontWeight = "bold";
    }

    resetInput();    
    limiteItems();
}

function createCloseButton(li) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
  
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    span.onclick = () => span.parentElement.style.display = "none";
  }
  
  document.querySelectorAll('li').forEach(createCloseButton);
  
  itemList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI')
      e.target.classList.toggle('checked');
  });