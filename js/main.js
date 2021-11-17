var list = document.querySelector('#list')
button.addEventListener('click', function (event){
   var LI = document.createElement("li")
   LI.setAttribute("class", "list__item")
   LI.textContent = dataItem.value
   list.appendChild(LI)
   dataItem.value = ""
})