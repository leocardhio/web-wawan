function openModal(id) {
    let modal = document.getElementById(String(id));
    modal.style.display = "block";
}

function closeModal(id) {
    let modal = document.getElementById(String(id));
    modal.style.display = "none";
}

function myFunction(event) { 
    alert(event.target.id);
}

function getStyle(id){
    let obj = document.getElementById(String(id))
    return getComputedStyle(obj, null)
}

function dropdownHandler(id){
    if (getStyle(id-1).transform == "matrix(0, 1, -1, 0, 0, 0)"){
        let icon = document.getElementById(String(id-1))
        let dropdown = document.getElementById(String(id))
        dropdown.style.display = "none";
        icon.style.transform = "rotate(0deg)"
    } else {
        let icon = document.getElementById(String(id-1))
        let dropdown = document.getElementById(String(id))
        dropdown.style.display = "block";
        icon.style.transform = "rotate(90deg)"
    }
}
