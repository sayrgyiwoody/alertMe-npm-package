showAlert = () => {
    alertMe({
        title: "Loading",
        text: "Select accept or cancel. ",
        icon: "loading",
        showCancelButton: true,
        confirmButtonText:'Accept',
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