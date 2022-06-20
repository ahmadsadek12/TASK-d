function myFunction() {
    var x = document.getElementById("regular-1");
    var y = document.getElementById("solid-1");
    if (y.style.visibility === 'hidden') {
        x.style.visibility = 'hidden';
        y.style.visibility = 'visible';
      }else {
        x.style.visibility = 'visible';
        y.style.visibility = 'hidden';
      } 
  }

  function myFunction1() {
    var x = document.getElementById("regular-2");
    var y = document.getElementById("solid-2");
    if (y.style.visibility === 'hidden') {
        x.style.visibility = 'hidden';
        y.style.visibility = 'visible';
      }else {
        x.style.visibility = 'visible';
        y.style.visibility = 'hidden';
      } 
  }

  function myFunction2() {
    var x = document.getElementById("regular-5");
    var y = document.getElementById("solid-5");
    if (y.style.visibility === 'hidden') {
        x.style.visibility = 'hidden';
        y.style.visibility = 'visible';
      }else {
        x.style.visibility = 'visible';
        y.style.visibility = 'hidden';
      } 
  }

  function myFunction3() {
    var x = document.getElementById("regular-3");
    var y = document.getElementById("solid-3");
    if (y.style.visibility === 'hidden') {
        x.style.visibility = 'hidden';
        y.style.visibility = 'visible';
      }else {
        x.style.visibility = 'visible';
        y.style.visibility = 'hidden';
      } 
  }

  function myFunction4() {
    var x = document.getElementById("regular-4");
    var y = document.getElementById("solid-4");
    if (y.style.visibility === 'hidden') {
        x.style.visibility = 'hidden';
        y.style.visibility = 'visible';
      }else {
        x.style.visibility = 'visible';
        y.style.visibility = 'hidden';
      } 
  }

  function nextButton() {
    var i = $('input[name=pages]:checked').val();
    var index = parseInt(i) + 1;
    $('#page' + index).prop('checked', true);
}

function prevButton() {
    var i = $('input[name=pages]:checked').val();
    var index = parseInt(i) - 1;
    $('#page' + index).prop('checked', true);
}

  function prevFunction(){
     var x = document.getElementById("prev-button");
     var y = document.getElementById("page1");
     var z = document.getElementById("page2");
     var a = document.getElementById("page3");
     var b = document.getElementById("page4");
     var c = document.getElementById("page5");

      if(y.checked){
        x.style.visibility = "hidden";
      }
      else if(z.checked || a.checked || b.checked || c.checked){
        x.style.visibility = 'visible';
      }
  }

  function showPopUp(){
     var popup = document.getElementById("popup");
     var n1 = document.getElementById("name1");
     var n2 = document.getElementById("name2");
     var n3 = document.getElementById("name3");
     var n4 = document.getElementById("name4");
     var n5 = document.getElementById("name5");
     var table = document.getElementById("table");

     if(name1.checked || name2.checked || name3.checked || name4.checked || name5.checked){
      popup.style.display = "block";
      table.style.filter = "blur(5px)"
     }
     else{
      popup.style.display = "none";
      table.style.filter = "blur(0px)"
     }
  }