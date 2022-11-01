function initListeners () {
    $("#submit").click(function (e) {
        e.preventDefault();
        let firstName = $("#fName").val();
        let lastName = $("#lName").val();
        let eMail = $("#email").val();
        let pNumber = $("#phone").val();
        let streetAddress = $("#address").val();
        let zipCode = $("#zip").val();
        let creditCard = $("#credit").val();
        let motherName = $("#mName").val();
        let petName = $("#pName").val();
        let bloodType = $("#blood").val();
        console.log("inputs" + " " +  firstName + " " + lastName + " " + eMail + " " + pNumber + " " + streetAddress + " " + zipCode + " " + creditCard + " " + motherName + " " + petName + " " +bloodType);
    });

    $("#edit").click(function (e) {
        e.preventDefault();

        let userObj = {
            fName: "J.",
            lName: "Doe",
            email: "JayDoe@gmail.com",
            phone: "555-555-5555",
            address: "1313 Mocking Bird Lane",
            zip: "12345",
            credit: "1234 5678 9012 3456",
            mName: "Simmons",
            pName: "Spot",
            blood: "O-"
        };

        console.log(userObj);
        $("#fName").val(userObj.fName);
        $("#lName").val(userObj.lName);
        $("#email").val(userObj.email);
        $("#phone").val(userObj.phone);
        $("#address").val(userObj.address);
        $("#zip").val(userObj.zip);
        $("#credit").val(userObj.credit);
        $("#mName").val(userObj.mName);
        $("#pName").val(userObj.pName);
        $("#blood").val(userObj.blood);
    });
}

$(document).ready(function () {
    initListeners();
});

function initURLListener() {
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

$(document).ready(function() {
    initURLListener ();
});