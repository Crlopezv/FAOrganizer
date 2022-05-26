
function DarkMode() {
   var SetTheme = document.body;
   SetTheme.classList.toggle("dark-mode")
   var theme;
   if(SetTheme.classList.contains("dark-mode")){
       console.log("Dark mode");
       theme = "DARK";
   }else{
       console.log("Light mode");
       theme = "LIGHT";
   }
   
   // Salvar a almacenamiento local:

   localStorage.setItem("PageTheme", JSON.stringify(theme));
   
}

setInterval(() => {
   let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
   console.log(GetTheme);
   if(GetTheme === "DARK"){
       document.body.classList = "dark-mode";
   }else{
       document.body.classList = "";
   }
}, 5);

