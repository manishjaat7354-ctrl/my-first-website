let selectedTrip = "One Way";

// Trip type selection
function selectTrip(button, trip) {
    selectedTrip = trip;

    document.querySelectorAll(".btn-trip").forEach(function (btn) {
        btn.classList.remove("active");
    });

    button.classList.add("active");
}

// Send booking details to WhatsApp
function sendBooking(event) {
    event.preventDefault();

    const pickup = document.getElementById("pickup").value.trim();
    const destination = document.getElementById("destination").value.trim();
    const travelDate = document.getElementById("travelDate").value;
    const passengers = document.getElementById("passengers").value;
    const vehicle = document.getElementById("vehicle").value;

    if (!pickup || !destination || !travelDate || !passengers || !vehicle) {
        alert("Please fill in all booking details.");
        return;
    }

    const message =
        "Hello Raj Travels! I want to request a booking.\n\n" +
        "Trip Type: " + selectedTrip + "\n" +
        "Pickup: " + pickup + "\n" +
        "Destination: " + destination + "\n" +
        "Travel Date: " + travelDate + "\n" +
        "Passengers: " + passengers + "\n" +
        "Vehicle: " + vehicle + "\n\n" +
        "Please confirm availability and fare.\n\n" +
        "Thank you!";

    const whatsappURL =
        "https://wa.me/919784758589?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}