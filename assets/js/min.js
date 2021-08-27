function toggleMsg() {
    var cont_msg = document.getElementById("cont-msg");
    if (cont_msg.style.display === "none") {
      cont_msg.style.display = "block";
    } else {
      cont_msg.style.display = "none";
    }
}

function closeForm() {
    document.getElementById("cont-msg").style.display = "none";
}