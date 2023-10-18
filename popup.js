

document.addEventListener("DOMContentLoaded", function () 
{
  const buttonA = document.getElementById("optionA"); //replace
  const buttonB = document.getElementById("optionB"); //below


  //load buttons status
  function RetrievePreference(container, favicon)
  {
    chrome.storage.local.get(['FavSettings'], function(result) {
      if (chrome.runtime.lastError) 
      {
        console.error('Error retrieving data: ' + chrome.runtime.lastError);
      } 
      else 
      {
          var status = result.FavSettings;
          if(status != 1)
          {
            buttonA.classList.add("active");
            buttonB.classList.remove("active");
          }
          else
          {
             buttonB.classList.add("active");
             buttonA.classList.remove("active");
          }
      }

    });


 

  }

  RetrievePreference();



  // Buttons click events

  buttonA.addEventListener("click", function () {
       chrome.storage.local.set({ FavSettings: 0 });
         // Add class "active" to ButtonA e remove it from B
    buttonA.classList.add("active");
    buttonB.classList.remove("active");
   
  });

    buttonB.addEventListener("click", function () {
       chrome.storage.local.set({ FavSettings: 1 });

    buttonB.classList.add("active");
    buttonA.classList.remove("active");
  });


});
