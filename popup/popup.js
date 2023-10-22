class SettingField {
    constructor(name, number, unit) {
        this.name = name;
        this.number = number;
        this.unit = unit;
    }

    createSetting() {
        const container = document.getElementById("setting-container")
        
        const labelSelector = document.createElement("label");
        labelSelector.innerHTML = this.name;
        container.appendChild(labelSelector);

        const numberSelector = document.createElement("input");
        numberSelector.type = "number";
        numberSelector.name = "number-"+this.name;
        container.appendChild(numberSelector);

        const unitSelector = document.createElement("select");
        unitSelector.innerHTML = `
            <option value="em">em</option>
            <option value="px">px</option>
            <option value="%">%</option>`;
        unitSelector.name = "unit-"+this.name;
        container.appendChild(unitSelector);
        numberSelector.addEventListener("change", this.storeValues)
        unitSelector.addEventListener("change", this.storeValues)

        document.body.appendChild(container);
        

    }

    storeValues() {
        // No brainpower to figure out how i fucked up this.name rn so doing scuffed version
        chrome.storage.local.set({[this.name.replace("unit-", "").replace("number-", "")]: { 
            number: [document.getElementsByName(this.name.replace("unit-", "number-"))[0].value], 
            unit: [document.getElementsByName(this.name.replace("number-", "unit-"))[0].value] }});
    }
    getStartValue() {

    }
}
new SettingField("Font Size", "1", "em").createSetting()
new SettingField("Height", ".5", "em").createSetting()
new SettingField("Width", ".5", "em").createSetting()



/*
Font size
height
width

*/