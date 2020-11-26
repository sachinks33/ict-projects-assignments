// data loading from api
async function loadData()
{
  let listing= document.getElementById("fullList");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let data=JSON.parse(xhttp.response);
      
      for(var i=0; i<7; i++)
      {
        // listing.innerHTML +="<div class='row list'><div class='col-1'><input id=list"+i+" type='checkbox' onclick='selectCheck(list"+i+")'></div><div class='col-10'><p>"+data[i].title+"</p></div><div class='col-1'><i class='fas fa-thumbtack' id=pinlist"+i+" onclick='selectPin(pinlist"+i+")' style='color:#cecece'></i></div></div>"
        listing.innerHTML +=`<div class='row list'><div class='col-1'><input id=list-${i} type=checkbox onclick=selectPin('list-${i}') status=false></div><div class=col-10><p id=listdata-${i}>${data[i].title}</p></div><div class=col-1><i class='fas fa-thumbtack pin' id=pinlist-${i} onclick=selectPin('pinlist-${i}')></i></div></div>`
      }
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();
}

// log validation
function validation()
{
    let usr= document.getElementById("user");
    let psw= document.getElementById("pass");
    if(usr.value=="admin" && psw.value=="123456")
    {
        return true;
        
    }
    else{
        alert("invalid Username and Password")
        return false;
    }
    
}
var count=0;
//check and uncheck list
function selectPin(pid)
{
  let spt = spliter(pid);
  let cList=document.getElementById(`list-${spt}`);
  let status=cList.getAttribute("status");
  let selectedData =document.getElementById(`listdata-${spt}`).textContent;
  let selectListing= document.getElementById("selectedList");
  
  if(status=="false")
  {
    if(count==5)
    {
      alert("Successfully selected 5 list");
    }
    else{
      count++;
      cList.setAttribute("status","true");
      document.getElementById(`pinlist-${spt}`).setAttribute("style","color:#3ed236");
      cList.checked = true;
      selectListing.innerHTML+=`<div class="row list" id=listSection-${spt}><div class="col-10"><p id=sdList-${spt}>${selectedData}</p></div><div class="col-1"><i class="fas fa-trash-alt" id=delete onclick=selectPin('sdList-${spt}')></i></div></div>`
    }
  }
  else if(status=="true")
  {
    count--;
    document.getElementById(`pinlist-${spt}`).setAttribute("style","color:#cecece");
    cList.checked = false;
    cList.setAttribute("status","false");
    document.getElementById(`listSection-${spt}`).remove();
  }
}
function spliter(value)
{
  var arr = value.split("-");
  return arr[1];
}