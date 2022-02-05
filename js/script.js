//declaracao de variaveis globais
var currentCheckbox = 1;
var allcheckboxes = document.querySelectorAll('.choreListWrapper input[type=checkbox]');
var currentChore2 = chore1;

//limpa o texto padrao do input
function clearInput() {
    document.getElementById("inputChore").value = null;
}

var elementInputClear = document.getElementById("inputChore");
elementInputClear.addEventListener("click", clearInput); //quando clicar no input box executa a funcao clearInput

//adiciona o texto do input ao label do checkbox
function addChore() {
    let inputedChore = document.getElementById("inputChore").value;
    if (currentCheckbox <= 3) {
        var currentChore = document.getElementById("chore" + currentCheckbox).id;
        var currentLabelChore = document.getElementById("labelchore" + currentCheckbox).id;
        if (inputedChore != "Input your chore here." && inputedChore != "") { //verifica se algo foi digitado
            document.getElementById(currentLabelChore).innerHTML = inputedChore;
            document.getElementById(currentChore).disabled = false;
            document.getElementById(currentLabelChore).classList.add("choreInputed");
            document.getElementById(currentLabelChore).classList.remove("emptyChore");
            currentCheckbox++;
        } else {
            alert('Please insert a chore!')
        }
    } else createNewCheckbox();

    clearInput();                                   //reinicia o input
    document.getElementById("inputChore").value = "Input your chore here.";
}

var elementAddChore = document.getElementById("addChore");
elementAddChore.addEventListener("click", addChore); //quando clicar no botao adiciona o texto do input ao label

var grabEvent = function (event) {           //troca o clase da label para chore done e chore inputed  
    currentChore2 = event.target.getAttribute("id");
    let isCrossed = document.getElementById(currentChore2);
    if (isCrossed.checked) {                        //flip flop do estado riscado
        document.getElementById('label' + currentChore2).classList.add("choreDone")
        document.getElementById('label' + currentChore2).classList.remove("choreInputed")
    } else {                                        //flip flop do estado riscado
        document.getElementById('label' + currentChore2).classList.add("choreInputed")
        document.getElementById('label' + currentChore2).classList.remove("choreDone")
    }
};

for (var i = 0; i < allcheckboxes.length; i++) {
    allcheckboxes[i].addEventListener('change', grabEvent, setToDelete, false);
}

function createNewCheckbox() {                 //cria novo checkbox depois do terceiro
    let inputedChore = document.getElementById("inputChore").value;
    if (inputedChore != "Input your chore here." && inputedChore != "") {  //verifica se algo foi digitado
        let newCheckbox = document.createElement("input");              //cria nova checkbox
        var newDiv = document.createElement("div");
        let choreListWId = document.getElementById('choreListWId')
        choreListWId.appendChild(newDiv);
        newDiv.setAttribute("class", "choreList");
        newDiv.setAttribute("id", "choreList" + currentCheckbox);
        newCheckbox.setAttribute("type", "checkbox");
        newCheckbox.setAttribute("class", "checkbox");
        newCheckbox.setAttribute("id", "chore" + currentCheckbox);
        let newLabel = document.createElement("label");
        newLabel.setAttribute("class", "choreInputed");
        newLabel.setAttribute("id", "labelchore" + currentCheckbox);
        newLabel.textContent = `${inputedChore}`;
        newDiv.append(newCheckbox);
        newDiv.append(newLabel);
        allcheckboxes = document.querySelectorAll('.choreListWrapper input[type=checkbox]');
        for (var i = 0; i < allcheckboxes.length; i++) {
            allcheckboxes[i].addEventListener('change', grabEvent, setToDelete, false);
        }
        currentCheckbox++;
    } else {
        alert('Please insert a chore!')
    }
}
function setToDelete() {                      //deleta a checkbox e label selecionada
    let isCrossed = document.getElementById(currentChore2);
    if (isCrossed.checked) {                //verifica se tem uma checkbox selecionada
        var choreToDelete = document.getElementById(currentChore2);
        choreToDelete.remove();
        var labelToDelete = document.getElementById('label' + currentChore2);
        labelToDelete.remove();
        var currentChore2number = currentChore2.slice(5);
        console.log(currentChore2number);
        var divToDelete = document.getElementById('choreList' + currentChore2number);
        divToDelete.remove();
    } else alert('First select a Chore!')
}

var elementDeleteChore = document.getElementById("deleteChore");
elementDeleteChore.addEventListener("click", setToDelete);






