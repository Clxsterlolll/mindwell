function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  
    if (tabName === 'mentalIllnesses') {
      var subtabcontent = document.getElementsByClassName("subtabcontent");
      for (i = 0; i < subtabcontent.length; i++) {
        subtabcontent[i].style.display = "none";
      }
      document.getElementById("home").style.display = "block";
    }
  }
  
  
  function openSubtab(event, subtabName) {
    var i, subtabcontent, subtablinks;
    subtabcontent = document.getElementsByClassName("subtabcontent");
    for (i = 0; i < subtabcontent.length; i++) {
        subtabcontent[i].style.display = "none";
    }
    subtablinks = document.getElementsByClassName("subtablinks");
    for (i = 0; i < subtablinks.length; i++) {
        subtablinks[i].classList.remove("active");
    }
    document.getElementById(subtabName).style.display = "block";
    event.currentTarget.classList.add("active");
  }
  
  
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  function toggleVent() {
      var ventArea = document.getElementById("ventArea");
      if (ventArea.style.display === "none") {
          ventArea.style.display = "block";
      } else {
          ventArea.style.display = "none";
      }
  }
  
  function clearVentText() {
      document.getElementById("ventText").value = "";
  }