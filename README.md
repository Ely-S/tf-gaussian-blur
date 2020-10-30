# Gaussian blur for tf.js

This is a small, very fast library to execute image filters using Web.GL and any runtime supported by Tensorflow.js.

## Install

```
npm install --save tf-gaussian-blur
```

## Example

```
const gaussianBlur = require("tf-gaussian-blur");

// get a 5x5 symetric gaussian filter
const size = 5
const sigma = 2
const kernel = blur.getGaussianKernel(size, sigma)

// Apply to an image

var image = tf.browser.fromPixels(document.getElementById("img"))

var blurredImage = blur.blur(image, kernel)

```
