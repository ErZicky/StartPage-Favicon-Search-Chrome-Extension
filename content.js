

function createFaviconElement(domain, genericUrl) {
  const IconUrl = genericUrl.replace("%WEBSITE%", domain);
  const img = document.createElement("img");
  img.setAttribute("src", IconUrl);
  img.height = 18;
  img.width = 18;
  img.style.marginTop = "4px";
  img.style.marginRight = "4px";
  img.style.marginLeft = "2px";
  img.setAttribute("title", "Anonymous View");
  return img;
}

function addFaviconToContainer(savedSettings, container, favicon) {
  
    const OriginalIcon = container.querySelector(".w-gl__anonymous-view-icon"); //the anonymousview icon that starpage put

    console.log(savedSettings);
    if(savedSettings != 1) //if != 1 replace the anonymousview icon
    {
     OriginalIcon.insertAdjacentElement("beforebegin", favicon);
     OriginalIcon.remove();
    }
    else//else put it below the anonymousview icon
    {
       OriginalIcon.insertAdjacentElement("afterend", favicon);
    }

}


function addFavicons() {



  const duckDuckGoFaviconUrl = "https://icons.duckduckgo.com/ip3/%WEBSITE%.ico";
  const resultContainers = document.querySelectorAll(".w-gl__result-url-container");
 
  resultContainers.forEach((container) => {
    const url = container.querySelector(".w-gl__result-url").getAttribute("href");
    const website = new URL(url).hostname;
    
    const favicon = createFaviconElement(website, duckDuckGoFaviconUrl);
    RetrievePreference(container, favicon); //retrieve user settings
  });
}


function RetrievePreference(container, favicon)
{
    chrome.storage.local.get(['FavSettings'], function(result) {
  if (chrome.runtime.lastError) 
  {
    console.error('Error retrieving data: ' + chrome.runtime.lastError);
  } 
  else 
  {
       addFaviconToContainer(result.FavSettings,container, favicon);
  }
});


}


function handleError(error) {
  console.error(error);
}





addFavicons();







