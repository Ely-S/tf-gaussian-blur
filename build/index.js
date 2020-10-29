"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blur = exports.getGaussianKernel = void 0;
const tf = require("@tensorflow/tfjs");
function get1dGaussianKernel(sigma, size) {
    // Generate a 1d gaussian distribution size numbers long
    const range = tf.range(Math.floor(-size / 2) + 1, Math.floor(size / 2) + 1);
    const distribution = tf.pow(tf.exp(range.div(-2.0 * (sigma * sigma))), 2);
    const normalized = distribution.div(tf.sum(distribution));
    return normalized;
}
function get2dGaussianKernel(size, sigma) {
    // This default is to mimic opencv2.
    sigma = sigma === undefined ?
        0.3 * ((size - 1) * 0.5 - 1) + 0.8 : sigma;
    var kerne1d = get1dGaussianKernel(sigma, size);
    return tf.outerProduct(kerne1d, kerne1d);
}
function getGaussianKernel(size = 5, sigma) {
    return tf.tidy(() => {
        var kerne2d = get2dGaussianKernel(size, sigma);
        var kerne3d = tf.stack([kerne2d, kerne2d, kerne2d]);
        return tf.reshape(kerne3d, [size, size, 3, 1]);
    });
}
exports.getGaussianKernel = getGaussianKernel;
function blur(image, kernel) {
    return tf.tidy(() => {
        return tf.depthwiseConv2d(image, kernel, 1, 'valid');
    });
}
exports.blur = blur;
