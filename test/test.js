
alertMe({
    title: "Hello",
    text: "Alert showing ",
    icon: "error",
    showCancelButton: true,
    confirmButtonColor: "#222222",
    cancelButtonColor: "",
    confirmButtonText: "Okay",
    cancelButtonText: "No, not really",
    onConfirm: function () {
      alertMe({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    },
  });