function updateBuildingTypeSelectorStyling(key, values) {
    // Container for all the building types
    const container = document.querySelector("#overview-tabs")
    const allHeaders = document.querySelectorAll(".tabs-title")
    


    allHeaders.forEach(el => {
        // Controls height of individual elements
        if(key == "Height") {
            el.querySelector("a").style.paddingTop = values.number[0]+values.unit[0]
            el.querySelector("a").style.paddingBottom = values.number[0]+values.unit[0]
        } else if (key == "Width") {
            el.querySelector("a").style.paddingRight = values.number[0]+values.unit[0]
            el.querySelector("a").style.paddingLeft = values.number[0]+values.unit[0]
        } else {
            el.querySelector("a").style.padding = "12px 11px"
        }
        
        el.style.display = "table-row"
    })
    container.style.position = "fixed"
    container.style.right = "20px"
    container.style.top = "19%"
    
}
updateBuildingTypeSelectorStyling()

chrome.storage.onChanged.addListener((changes, namespace) => {
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    updateBuildingTypeSelectorStyling(key, newValue)
      console.log(
        `Storage key "${key}" in namespace "${namespace}" changed.`,
        `Old value was "${JSON.stringify(oldValue)}", new value is "${newValue}".`
      );
    }
  });



chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request.message)
  });