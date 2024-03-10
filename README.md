# Woody's alertMe Library

**woody-alert-me** is a lightweight library for creating customizable **alert boxes** with animations.

![DEMO](./src/demo.png)

## Installation

You can install woody-alert-me via **cdn link**:
for css:

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sayrgyiwoody/alertMe-npm-package/src/woody-alert-me.css"></link>
```

for js:

```
<script src="https://cdn.jsdelivr.net/gh/sayrgyiwoody/alertMe-npm-package/src/woody-alert-me.js"></script>
```

Or You can install woody-alert-me via **npm**:

```
npm i woody-alert-me
```

## Usage

First, link the **CSS and JavaScript** provided with Woody's AlertMe library:

```
<link rel="stylesheet" href="./path/to/woody-alert-me.css">
```

```
<script src="./path/to/woody-alert-me.js"></script>
```

**Basic Alert** with the desired message:

```
alertMe('Alert', 'This is a basic alert.');
```

**Customized alerts** by passing an options object to the alertMe function:

```
alertMe({
  title: 'Error!',
  text: 'An error occurred.',
  icon: 'error',
  showCancelButton: true,
  confirmButtonColor: '#d33',
  cancelButtonColor: '#3085d6',
  confirmButtonText: 'OK',
  cancelButtonText: 'Cancel'
});
```

**Confirm Alert**, allowing users to take actions based on their choices:

```
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


```

**Woody's AlertMe** library simplifies adding alerts to web projects. Whether basic or complex, AlertMe has you covered.
