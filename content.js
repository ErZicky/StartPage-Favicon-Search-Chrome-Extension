function createFaviconElement(domain, genericUrl) {
  const IconUrl = genericUrl.replace("%WEBSITE%", domain);
  const img = document.createElement("img");
  img.setAttribute("src", IconUrl);
  img.height = 18;
  img.width = 18;
  img.style.marginTop = "4px";
  img.style.marginRight = "4px";
  img.setAttribute("title", "Anonymous View");
  return img;
}

function addFaviconToContainer(container, favicon) {
  const OriginalIcon = container.querySelector(".w-gl__anonymous-view-icon"); //the anonymousview icon that starpage put
  OriginalIcon.insertAdjacentElement("beforebegin", favicon);
  OriginalIcon.remove();
}

function addFavicons() {
  const duckDuckGoFaviconUrl = "https://icons.duckduckgo.com/ip3/%WEBSITE%.ico";
  const resultContainers = document.querySelectorAll(".w-gl__result-url-container");
  
  resultContainers.forEach((container) => {
    const url = container.querySelector(".w-gl__result-url").getAttribute("href");
    const website = new URL(url).hostname;
    
    const favicon = createFaviconElement(website, duckDuckGoFaviconUrl);
    addFaviconToContainer(container, favicon);
  });
}

function handleError(error) {
  console.error(error);
}

addFavicons();