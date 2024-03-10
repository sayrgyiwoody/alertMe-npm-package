alertMe({
    title: 'Info',
    text: "info alert box , icon : 'info'",
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor : "#222222",
    cancelButtonColor : "#eeeeee",
    confirmButtonText : "Confirm Please",
    cancelButtonText : "nah",
    });
    function showAlert() {
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