const drillRigBtn = document.getElementById("drill-rigs-btn");
const drillRigsDropdown = document.getElementById("drill-rigs-dropdown");
const drillRigsTitle = document.getElementById("drill-rigs-icon");


const serviceVehicleBtn = document.getElementById("service-vehicle-btn");
const serviceVehilceDropdown = document.getElementById("service-vehicle-dropdown");
const serviceVehicleTitle = document.getElementById("service-vehicles-icon");

const loadHaulBtn = document.getElementById("load-haul-btn");
const loadHaulDropdown = document.getElementById("load-haul-dropdown");
const loadHaulTitle = document.getElementById("load-haul-icon");


function createIcon(className) {
  const icon = document.createElement("i");
  icon.className = className;
  icon.setAttribute("aria-hidden", "true");
  icon.id = icon;
  return icon;
}

function toggleText(readMoreLink, longText, icon) {
    if (longText.style.display === "none") {
      longText.style.display = "block";
      longText.style.maxHeight = longText.scrollHeight + "px";
      icon.className = "fa fa-caret-up";
      icon.display = "none"
    } else {
      longText.style.maxHeight = "1px";
      setTimeout(function() {
        longText.style.display = "none";
      }, 10);
      icon.className = "fa fa-caret-down";
      icon.display = "none"
    }
  }

  drillRigBtn.appendChild(createIcon("fa fa-caret-down"));
  drillRigBtn.addEventListener("click", function() {
    toggleText(drillRigBtn, drillRigsDropdown, drillRigsTitle);
    // Hide longText2 if it's currently visible
    if (serviceVehilceDropdown.style.display !== "none") {
      toggleText(serviceVehicleBtn, serviceVehilceDropdown, serviceVehicleTitle );
    }
    if (loadHaulDropdown.style.display !== "none") {
        toggleText(loadHaulBtn, loadHaulDropdown, loadHaulTitle);
      }
  });
 
  serviceVehicleBtn.appendChild(createIcon("fa fa-caret-down"));
  serviceVehicleBtn.addEventListener("click", function() {
    toggleText(serviceVehicleBtn, serviceVehilceDropdown, serviceVehicleTitle);
    // Hide longText2 if it's currently visible
    if (drillRigsDropdown.style.display !== "none") {
      toggleText(drillRigBtn, drillRigsDropdown, drillRigsTitle );
    }
    if (loadHaulDropdown.style.display !== "none") {
        toggleText(loadHaulBtn, loadHaulDropdown, loadHaulTitle);
      }
  });

  loadHaulBtn.appendChild(createIcon("fa fa-caret-down"));
  loadHaulBtn.addEventListener("click", function() {
    toggleText(loadHaulBtn, loadHaulDropdown, loadHaulTitle);
    // Hide longText2 if it's currently visible
    if (drillRigsDropdown.style.display !== "none") {
      toggleText(drillRigBtn, drillRigsDropdown, drillRigsTitle );
    }
    if (serviceVehilceDropdown.style.display !== "none") {
        toggleText(serviceVehicleBtn, serviceVehilceDropdown, serviceVehicleTitle);
      }
  });