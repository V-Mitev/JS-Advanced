function addItem() {
    const list = document.getElementById("items");
    const inputValue = document.getElementById("newItemText").value;
    
    if (inputValue.trim() !== "") {
        const newItem = document.createElement("li");
        newItem.textContent = inputValue;
        list.appendChild(newItem);
        document.getElementById("newItemText").value = "";
    }
}
