alertMe({
    title : 'hello',
    text : 'confirm or cancel button',
    icon : "loading",
    // bgColor :"#222222",
    showCancelButton : true,
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