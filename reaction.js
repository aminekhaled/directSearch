/*------------- Js Code ------------------*/ 

var webSites = document.getElementsByClassName('site'),
  textField = document.getElementById('textField'),
  searchButton = document.getElementsByClassName('search')[0],
  site_name = document.getElementsByClassName('site-name')[0],
  text = document.getElementsByClassName('searchin')[0];
  site = '';
  var url = [
    "https://www.facebook.com/search/top?q=",
    "https://twitter.com/search?q=",
    "https://www.linkedin.com/search/results/all/?keywords=",
    "https://www.youtube.com/results?search_query="
  ];
  for(var i = 0;i < webSites.length; i++) {
    webSites[i].onclick = function() {
      text.style.visibility = "unset";
      site = url[this.name];
      site_name.innerHTML = this.textContent;
      if(textField.disabled === true){ textField.disabled = false; }
    }
  }


  searchButton.onclick = function() {
    if(textField.value == ''){
      text.innerHTML = "<p style=\"color: #dd3d3d\" >choose a website Firstly</p>";
      setTimeout(function() {
        location.reload();
      }, 1500)
    }else {
      window.location = site + textField.value;
    }
  }




























/*
var myButtons = document.getElementsByClassName('click'),
    searchField = document.querySelector('input'), i = 0,
    searchIn = document.querySelector('h2'),
    searchButton = document.querySelector('a');

    for(;i < myButtons.length; i++){
      myButtons[i].onclick = function(){
        searchIn.innerHTML = "search in : " + this.innerHTML;
        searchField.disabled = false;
        
      }
    }
    searchButton.onclick = function(){
      if(searchField.value.length > 0){
        searchButton.target = "blank";
        switch(searchIn.innerHTML){
          case "search in : facebook":
            this.href = 
            "https://www.facebook.com/search/top/?q=" 
            + searchField.value 
            + "&epa=SEARCH_BOX";
            break;
          case "search in : youtube":
            this.href = 
            "https://www.youtube.com/results?search_query=" 
            + searchField.value ;
            break;
          case "search in : twitter":
            this.href = 
            "https://twitter.com/search?q=" + 
            searchField.value +
            "&src=recent_search_click";
            break;
          case "search in : linkedIn":
            this.href = 
            "https://www.linkedin.com/search/results/all/?keywords=" + 
             searchField.value +
            "&origin=GLOBAL_SEARCH_HEADER";
            break;
        }  
      }
      }

  */
