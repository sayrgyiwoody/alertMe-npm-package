showAlert = () => {
    alertMe({
        title: "Confirmation Alert",
        text: "This alert can perform confirm processes.",
        icon: "loading",
        showCancelButton: true,
        onConfirm: function () {
        alertMe({
            title: "Confirmed!",
            text: "Your action has been confirmed.",
            icon: "success",
        });
        },
        onCancel: function () {
            alertMe({
            title: "Canceled!",
            text: "Action is canceled.",
            icon: "error",
        });
        }
    });
}

alertMe({
    title: "Custom Alert",
    text: "This is a custom alert box with specified text color and background color.",
    color: '#ffffff', // Text color
    bgColor: '#222222', // Background color
})