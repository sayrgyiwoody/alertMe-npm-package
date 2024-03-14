# Woody's alertMe

**woody-alert-me** is a lightweight library for creating customizable **alert boxes** with animations.

<p align="center">
<img src="https://github.com/sayrgyiwoody/npm-alert-me-examples/blob/main/demo.png?raw=true" width='300px'>
</p>

## Installation

You can install woody-alert-me via **cdn link**:
for css:

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sayrgyiwoody/alertMe-npm-package@2ce63c0/src/woody-alert-me.css"></link>
```

for js:

```
<script src="https://cdn.jsdelivr.net/gh/sayrgyiwoody/alertMe-npm-package@2ce63c0/src/woody-alert-me.js"></script>
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

## Examples
Example 1 : **Basic Alert** with the desired message
<p align="center">
<img src="https://github.com/sayrgyiwoody/npm-alert-me-examples/blob/main/eg1.png?raw=true" width='500px'>
</p>

```
alertMe('Alert', 'This is a basic alert.');
``` 
***

Example 2 : **Customized alerts** by passing an options object to the alertMe function
<p align="center">
<img src="https://github.com/sayrgyiwoody/npm-alert-me-examples/blob/main/eg2.png?raw=true" width='500px'>
</p>

```
alertMe({
    title: 'Customized Alert',
    text: "This alert box has customized button text and without close button ",
    icon: 'info',
    showCancelButton: true,
    showCloseButton:false,
    confirmButtonColor : "#222222",
    cancelButtonColor : "#eeeeee",
    confirmButtonText : "Click Me",
    cancelButtonText : "nah",
    });
```
***

Example 3 : **Confirm or Cancel Alert**, allowing users to take actions based on their choices:
<p align="center">
<img src="https://github.com/sayrgyiwoody/npm-alert-me-examples/blob/main/eg3.png?raw=true" width='500px'>
</p>

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
***

Example 4 : **Custom text color and bg color**
<p align="center">
<img src="https://github.com/sayrgyiwoody/npm-alert-me-examples/blob/main/eg4.png?raw=true" width='500px'>
</p>

```
alertMe({
    title: "Custom Alert",
    text: "This is a custom alert box with specified text color and background color.",
    color: '#ffffff', // Text color
    bgColor: '#222222', // Background color
})
```
***

Example 5 :Using **Image** inside alert box
<p align="center">
<img src="https://github.com/sayrgyiwoody/npm-alert-me-examples/blob/main/eg5.png?raw=true" width='500px'>
</p>

```
alertMe({
    title: "Custom Alert with Image",
    text: "This is a custom alert box with an image.",
    imageUrl: "./path/to/image.png", // Image URL
    //imageWidth: 300, // Adjust image width if necessary
    //imageHeight: 200, // Adjust image height if necessary
    imageAlt: "New Image", // Alt text for the image
})
```
***

Example 6 : Using **HTML** content in alert box
<p align="center">
<img src="https://github.com/sayrgyiwoody/npm-alert-me-examples/blob/main/eg6.png?raw=true" width='500px'>
</p>

```
alertMe({
    title: "HTML Content",
    html: `
        <p class="text-center">This is a custom alert box with <b>HTML</b> content. and <b>Icon</b> inside button</p>
        <input type="email" class="form-control mb-3" id="exampleFormControlInput1" placeholder="name@example.com">
    `,
    confirmButtonText : `<i class="fa-regular fa-thumbs-up"></i> OK`,
    cancelButtonText : `<i class="fa-regular fa-thumbs-down"></i> Cancel`,
    showCancelButton : true,
})
```
***

# Available Icons

The following icons are available for use:

- Success
- Error
- Info
- Loading
- Question

| 
success | error | info | loading | question |
|---------|---------|---------|---------|---------|
| ![Image 1](./src/icons/success.gif) | ![Image 2](./src/icons/error.gif) | ![Image 3](./src/icons/info.gif) | ![Image 4](./src/icons/loading.gif) | ![Image 5](./src/icons/question.gif) |

***



**Woody's AlertMe** library simplifies adding alerts to web projects. Whether basic or complex, AlertMe has you covered.
