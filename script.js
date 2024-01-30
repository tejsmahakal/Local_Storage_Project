/**************************************************************************
 onloadHandler fucntion is used to get the data about the user if it is not present in the local storage and present the data in the ui

 @return none
***************************************************************************/

function onloadHandler(){
    
    if(!localStorage.getItem("userInfo")){
        
        const USER_INFO = {}
        USER_INFO.firstName = prompt("Enter your first name");
        USER_INFO.lastName =prompt("Enter your last name");
        USER_INFO.country = prompt("Enter your country name");
        USER_INFO.phoneNumber = prompt("Enter your phone number");
        USER_INFO.state = prompt("Enter your state");
        USER_INFO.city = prompt("Enter your city");
        USER_INFO.village = prompt("Enter your village");
        localStorage.setItem("userInfo",JSON.stringify(USER_INFO));
    }

    const USER_DATA = JSON.parse(localStorage.getItem("userInfo"));
    
    document.querySelector("main").classList.remove("hidden");
    document.querySelector("#first-name").innerText = `${USER_DATA.firstName.toUpperCase()}`
    document.querySelector("#last-name").innerText = ` ${USER_DATA.lastName.toUpperCase()}`
    document.querySelector("#country").innerText = ` ${USER_DATA.country.toUpperCase()}`
    document.querySelector("#phone-number").innerText = `${USER_DATA.phoneNumber}`
    document.querySelector("#state").innerText = `${USER_DATA.state.toUpperCase()}`
    document.querySelector("#city").innerText = `${USER_DATA.city.toUpperCase()}`
    document.querySelector("#village").innerText = `${USER_DATA.village.toUpperCase()}`

}

document.addEventListener("DOMContentLoaded",onloadHandler);