const already_user = () => {
    const emailInput = document.getElementById("login_email").value;
    const passwordInput = document.getElementById("login_password").value;
  
    // axios.post("https://virtualdigitalconcept.com/api/api/login", {
    //     email: emailInput,
    //     password: passwordInput
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   });

    const logged_in_user = {
        method: 'post',
        url: 'https://virtualdigitalconcept.com/api/api/login',
        data: JSON.stringify({
            email: emailInput,
            password: passwordInput
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        transformRequest: [(data, headers) => {
            // transform the data

            return data;
        }]
    };


    axios(logged_in_user)
        .then((response) => {

            console.log(response.data);

            sessionStorage.setItem('virtualDigitalSigned', JSON.stringify(response.data.user.business_name));

            console.log(sessionStorage.getItem('virtualDigitalSigned'));
            console.log(response.data.user.business_name);
            
            // alert("hii");
            // alert("Welcome");
                // alert("Welcome!!!")
                window.location = "https://virtualdigitalconcept.com/signed_in.html";
                // window.location = "http://127.0.0.1:5500/signed_in.html";
           



        }).catch((error) => {
        
        console.log(error);

        Toastify({
            text: error.response.data.message,
            duration: 6000,
            // destination: "https://github.com/apvarun/toastify-js",
            // newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast()
        
})

  }

const btn = document.getElementById("login");

btn.addEventListener("click", already_user);