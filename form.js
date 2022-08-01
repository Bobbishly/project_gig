var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

var business = {
    'Retailer': [
        'Choose...',
        'E-tailer', 
        'Independent/COOP/Natural Product', 
        'Chain Natural Products Store', 
        'Gourmet/Specialty Products', 
        'Personal Care', 
        'Independent Grocer', 
        'Conventional Supermarket', 
        'Discount/Mass Merchandiser', 
        'Chain Drug Store/Pharmacy', 
        'Independent Drug Store/Pharmacy', 
        'Mail Order Catalog', 
        'Convenience Store', 
        'Pet Supply Store/Grooming'
    ],

    'Distributor(Finished Goods)': [
        'Choose...',
        'Wholesaler of Finished Products', 
        'Importer/Exporter of Finished Products', 
        'Broker of Finished Products', 
        'Third Party Distributor of Finished Product'
    ],

    'Food Service': [
        'Choose...',
        'Full Service Restaurant', 
        'School/University', 
        'Tea Room/Coffee House', 
        'Hotel/Resort/Airline', 
        'Quick Serve Restaurant', 
        'Caterer/Private Chef'
        ],

    'Manufacturer': [
        'Choose...',
        'Food', 
        'Beverage', 
        'Cosmetic/Personal Care', 
        'Natural Living/Home/Textile', 
        'Pet Products/Animal Nutrition', 
        'Vitamin/Mineral/Herb/Supplements', 
        'Pharmaceuticals', 
        'Nutraceuticals', 
        'Contract Manufacturer'
        ],

    'Business Services': [ 
        'Choose...',
        'Consultant', 
        'Advertising/Marketing/Branding/PR', 
        'Government Agency', 
        'Financial Institution/Investment Bank', 
        'Not for Profit', 
        'Association', 
        'Packaging/Design', 
        'Publisher', 
        'Laboratory/Testing', 
        'School/University Research', 
        'Legal/Regulatory', 
        'Amazon Consultants'
        ]
}

var main = document.getElementById('business_category')
var sub = document.getElementById('business_type')
// var main = document.getElements('business_category');
// var sub = document.getElementsByClassName('business_type');

main.addEventListener('change', function() {

    var selected_option = business[this.value];

    while(sub.options_length > 0) {
        sub.options.remove(0)
    }

    sub.innerHTML = '';

    Array.from(selected_option).forEach(function(el) {
        let option = new Option(el, el);

        sub.appendChild(option)
    })

})