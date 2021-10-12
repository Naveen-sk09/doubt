function adduser() {
p1=document.getElementById("Player1").value;
p2=document.getElementById("Player2").value;
localStorage.setItem("Player1",p1);
localStorage.setItem("Player2",p2);
window.location="game_page.html";
}