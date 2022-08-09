const calling = () => {
    let business_name = document.getElementById("business_name").value;

    let username = document.getElementById("username").value;

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    // let confirm_password = document.getElementById("confirm_password").value;



    const options = {
        method: 'post',
        url: 'https://virtualdigitalconcept.com/api/api/user',
        data: JSON.stringify({
            "email": email,
            "username": username,
            "password": password,
            "business_name": business_name
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        transformRequest: [(data, headers) => {
            // transform the data

            return data;
        }]
    };



    // send the request
    // if (
    axios(options)
        .then((response) => {

            console.log(response.data);

            sessionStorage.setItem('virtualDigitalSigned', JSON.stringify(response.data.user.business_name));

            console.log(sessionStorage.getItem('virtualDigital_signing'));
            
            console.log(response.data.user.business_name);
            
        
                // alert("Welcome!!!");
                window.location = "https://virtualdigitalconcept.com/signed_in.html";
                // window.location = "http://127.0.0.1:5500/signed_in.html";
                
          

        }).catch((error) => {
            console.log(error);
            // console.log("error");
            // console.log(error.response.data.message);
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
                      }).showToast();
        })

        // ) {
        //     window.location = "http://127.0.0.1:5500/signed_in.html";
        // } else {
        //     console.log('error');
        // }


}


window.addEventListener('load', (event) => {
    let sign_up = document.getElementById("sign_up");

    sign_up.addEventListener('click',  calling);
})


