function loadList(cat) {
    var xhttp = new XMLHttpRequest();
    let tableList=document.getElementById("tbody");
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var list = JSON.parse (this.responseText);
        var items=list.Grocery;
        console.log(cat);
        tableList.innerHTML="";
        console.log(items.length);
        for(var i=0;i<=items.length;i++)
        {
          if(cat==items[i].category)
          {
            console.log(items[i].name);
            tableList.innerHTML+=`<tr><td>${items[i].name}</td><td>${items[i].price}/${items[i].unit}</td></tr>`;
            
          }
          else if(cat=="All")
          {
            console.log(items[i].name);
            tableList.innerHTML+="<tr><td>"+items[i].name+"</td><td>"+items[i].price+"/"+items[i].unit+"</td></tr>";
            
          }
        }
        
      }
    }
    xhttp.open("GET", "list.json", true);
    xhttp.send();
    
}
// function billing(itemname,itemunit,itemprice) {
//   let tablebill=document.getElementById("tbodybill");
//   tablebill.innerHTML+=`<tr><td>${itemname}</td><td>${itemunit}</td><td>${itemprice}</td><td></tr>`;

// }