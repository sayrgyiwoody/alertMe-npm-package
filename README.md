# Woody's alertMe Library

**woody-alert-me** is a lightweight library for creating customizable **alert boxes** with animations.

![DEMO](./src/demo.png)

## Installation

You can install woody-alert-me via **npm**:

```
npm i woody-alert-me
```

## Usage

**Setting up Styles**
First, link the **CSS file** provided with Woody's AlertMe library:
```
<link href="../src/woody-alert-me.css" rel="stylesheet">
```

**Integrating with JavaScript**
In your **JavaScript file**, **import** the alertMe function from the library:
```
import { alertMe } from 'woody-alert-me';
```

To create a **Basic Alert**, simply use the alertMe function with the desired message:
```
alertMe('Alert', 'This is a basic alert.');
```

You can also create **customized alerts** by passing an options object to the alertMe function:
```
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
```

Woody's AlertMe library also supports alerts with **confirm functionality**, allowing users to take actions based on their choices:
```
alertMe({
  title: "Hello",
  text: "Alert showing ",
  icon: "error",
  showCancelButton: true,
  confirmButtonColor: "#222222",
  cancelButtonColor: "",
  confirmButtonText: "Okay",
  cancelButtonText: "No, Cancel",
  onConfirm: function () {
    alertMe({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success",
    });
  },
});

```

**Woody's AlertMe** library simplifies adding alerts to web projects. Whether basic or complex, AlertMe has you covered.

