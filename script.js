var itemList = document.querySelector(".item-list");

function resetInput(){
    let field = document.querySelector("input");
    field.value="";
}

function limitItems(){
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
    //descobrir como nao aceitar valores em branco e ainda nao incluir um li vazio
    if(input == ""){
      alert("You cannot add null values in your list.");
      window.li.history.back();
      document.querySelector(".item-list").style.display="block";
      document.querySelector("p").style.display="block";
    }
    itemList.appendChild(li);

    totalLi = document.querySelectorAll("li");
    qtd = totalLi.length;
    console.log(qtd);

    if(qtd == 1){
      document.querySelector("p").innerHTML = qtd+" Item";
      document.querySelector("p").style.color = "green";
      document.querySelector("p").style.fontWeight = "bold";
    }else if(qtd > 1 && qtd < 15){
      document.querySelector("p").innerHTML = qtd+" Items";
      document.querySelector("p").style.color = "green";
      document.querySelector("p").style.fontWeight = "bold";
    }else if(qtd >= 15 && qtd < 20){
      document.querySelector("p").innerHTML = qtd+" Items";
      document.querySelector("p").style.color = "orange";
      document.querySelector("p").style.fontWeight = "bold";
    }else{
      document.querySelector("p").innerHTML = qtd+" Items";
      document.querySelector("p").style.color = "red";
      document.querySelector("p").style.fontWeight = "bold";
    }

    resetInput();    
    limitItems();
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