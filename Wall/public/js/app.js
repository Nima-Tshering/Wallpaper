

var config = {
    apiKey: "AIzaSyBu-uWqupV_zUYWSV4mSpTcVWsh8J5sB98",
    authDomain: "wallpaper-app-2a252.firebaseapp.com",
    databaseURL: "https://wallpaper-app-2a252.firebaseio.com",
    projectId: "wallpaper-app-2a252",
    storageBucket: "wallpaper-app-2a252.appspot.com",
    
    messagingSenderId: "83459382359"
  };
  firebase.initializeApp(config);
  firebase.auth.Auth.Persistence.LOCAL;
  
	$(document).ready(function(){
        $("#button").click(function(){
            
            var email=$("#email").val();
            var password=$("#password").val();
            var result = firebase.auth().signInWithEmailAndPassword(email,password);
            result.catch(function(error)
            {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
          
        });
      });
     
     
        $("#btn-logout").click(function()
        {
           firebase.auth().signOut(); 
        });
   
      function switchView(view)
      {
          $.get(
              {
                  url:view,
                  cache: false,

              }
          ).then(function(data)
          {
              $("#container").html(data);
          });
      }