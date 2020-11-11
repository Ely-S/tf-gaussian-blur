# Gaussian blur for tf.js

This is a small, very fast library to execute image filters using Web.GL on any runtime supported by Tensorflow.js.

[Demo](https://eli.cool/tf-gaussian-blur/example/dist/index.html)

## Install

```
npm install --save tf-gaussian-blur
```

## Example

#### Create a kernel tensor.

This is a symetric (NxNx3x1) tensor that is convolved across an image tensor to generate a blur effect.

`size` determines the dimension of the kernel. The larger `size` the more surrounding pixels are included in the filter. `size` must be odd.

`sigma` is optional and sets the standard deviation of the gaussian distribution. A higher `sigma` gives further pixels higher weight in the output.


```
const gaussianBlur = require("tf-gaussian-blur");

// get a 5x5 symetric gaussian filter
const size = 5
const sigma = 2
const kernel = blur.getGaussianKernel(size, sigma)
```

#### Apply the kernel to an image


```
var image = tf.browser.fromPixels(document.getElementById("img"))

var blurredImage = blur.blur(image, kernel)

tf.browser.toPixels(image,  document.getElementById("canvas"))
```
