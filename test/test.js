showAlert = () => {
    alertMe({
        title : 'hello',
        text : 'confirm or cancel button',
        icon : "loading",
        // bgColor :"#222222",
        // showCancelButton : true,
        showConfirmButton : false,
        onConfirm : function () {
            alertMe({
                title : 'confirmed',
                icon : 'success',
            })
        },
        onCancel : function () {
            alertMe({
                title : 'canceled',
                icon : 'error',
            })
        }
    });
}