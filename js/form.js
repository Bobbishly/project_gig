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



function formSubmitted(){
  const business_category = document.getElementById("business_category").value;

    const business_type = document.getElementById("business_type").value;
    
    const website = document.getElementById("inputState1").value;
    
    const limit_product_order = document.getElementById("inputState2").value;
    
    const refund_policy = document.getElementById("inputState3").value;
    
    const refund_third_party = document.getElementById("inputState4").value;
    
    const request_kyc_documents = document.getElementById("inputState5").value;
    
    const accept_online_orders = document.getElementById("inputState6").value;
    
    const multiple_orders_per_day = document.getElementById("inputState7").value;
    
    const confirm_billing = document.getElementById("inputState8").value;
    
    const valid_and_updated_customer = document.getElementById("inputState9").value;
    
    var payment_mode = document.querySelectorAll("input[type='checkbox']:checked");

    var payment_modes = [];

    for (let index = 0; index < payment_mode.length; index++) {
      const element = payment_mode[index];
      payment_modes.push(element.value);
    }
  // document.getElementById("regForm").submit();

  

  const form_submitted = {
    method: 'post',
    url: 'https://virtualdigitalconcept.com/api/api/submit',
    data: JSON.stringify({
      "Business Category": business_category,
      "Business Type": business_type,
      "Do You Have A Website": website,
      "Do you have limit on product order per day": limit_product_order,
      "Do you have a refund policy in place": refund_policy,
      "Do you refund to a 3rd party account": refund_third_party,
      "For orders above normal, do you request for KYC documents (ID etc)": request_kyc_documents,
      "Do you accept email orders": accept_online_orders,
      "For multiple orders per day do you validate such transactions": multiple_orders_per_day,
      "Do you confirm billing and shipping address for huge orders": confirm_billing,
      "Do you have valid and updated customer information": valid_and_updated_customer, 
      "Payment Mode Accepted": payment_modes
    }),
    headers: {
        'Content-Type': 'application/json'
    },
    transformRequest: [(data, headers) => {
        // transform the data

        return data;
    }]
};

// const finished_form = document.getElementById('nextBtn');

// finished_form.addEventListener('click', formSubmitted);

const loadingDiv = document.getElementById("loading");

let showLoader = () => {
  loadingDiv.classList.add('preLoaderWrapper');
  loadingDiv.classList.remove('fadeOutAnimation');
}

showLoader();

axios(form_submitted)
    .then((response) => {

        console.log(response.data);

        sessionStorage.setItem('virtualDigital_response', JSON.stringify(response.data));

        console.log(sessionStorage.getItem('virtualDigital_response'));
        // alert(ddd);
            // alert(response.data)
            window.location = "https://virtualdigitalconcept.com/response.html";
            // window.location = "http://127.0.0.1:5500/response.html";
       
            let hideLoader = () => {
              loadingDiv.classList.remove('preLoaderWrapper');
              loadingDiv.classList.add('fadeOutAnimation');
            }

            hideLoader();

            

    }).catch((error) => {
    
    console.log(error);
    console.log("error");
    
})


}

// const next_loading = document.getElementById("nextBtn");

// next_loading.addEventListener('click', () => {

//     const preLoaderWrapper = document.querySelector('.preLoaderWrapper');

//     preLoaderWrapper.classList.add('fadeOutAnimation')
// });

// let hideLoader = () => {
//   loadingDiv.classList.remove('preLoaderWrapper');
//   loadingDiv.classList.add('fadeOutAnimation');
// }

// let showLoader = () => {
//   loadingDiv.classList.add('preLoaderWrapper');
//   loadingDiv.classList.remove('fadeOutAnimation');
// }

// let isVisible = false;
// const loadingDiv = document.getElementById("loading");

// setInterval(() => {
//     if (isVisible) {
//         showLoader();


//     }
//     if (!isVisible) {
//         hideLoader();


//     }

//     isVisible = !isVisible;
// }, 8000);





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
    formSubmitted();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByClassName("nextoption");
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


// function dddd() {
//   console.log(sessionStorage.getItem('virtualDigitalUser'));
// }


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

main.addEventListener('change', function() {

    var selected_option = business[this.value];

    while(sub.options_length > 0) {
        sub.options.remove(0)
    }

    sub.innerHTML = '';

    Array.from(selected_option).forEach(function(el) {
      if (el === 'Choose...') {
        let option = new Option(el, "");

        sub.appendChild(option)
      } else {
        let option = new Option(el, el);

        sub.appendChild(option)
      }
    })

})









































