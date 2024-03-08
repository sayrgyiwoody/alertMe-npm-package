# Woody's alertMe Library

woody-alert-me is a lightweight library for creating customizable alert boxes with animations.

## Installation

You can install woody-alert-me via npm:

```
npm i woody-alert-me
```

## Usage

This is how you can easily use :

```
import { alertMe } from 'my-alert-box';

// Basic Alert
alertMe('Alert', 'This is a basic alert.');

//Alert with custom options
alertMe({
  title: 'Error!',
  message: 'An error occurred.',
  icon: 'error',
  showCancelButton: true,
  confirmButtonColor: '#d33',
  cancelButtonColor: '#3085d6',
  confirmButtonText: 'OK',
  cancelButtonText: 'Cancel'
});


//Alert with confirm function
fireAlert({
  title: "Hello",
  text: "Alert showing ",
  icon: "error",
  showCancelButton: true,
  confirmButtonColor: "#222222",
  cancelButtonColor: "",
  confirmButtonText: "Okay",
  onConfirm: function () {
    fireAlert({
      title: "Deleted!",
      confirmButtonColor: "#4f46e5",
      text: "Your file has been deleted.",
      icon: "success",
    });
  },
});

```


