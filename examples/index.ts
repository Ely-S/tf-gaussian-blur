import {getGaussianKernel, blur} from "tf-gaussian-blur"
import * as tf from "@tensorflow/tfjs"


const target = document.getElementById("target") as HTMLCanvasElement
const src = document.getElementById("src") as HTMLImageElement
const sizeInput = document.getElementById("size") as HTMLInputElement
const sigmaInput = document.getElementById("sigma") as HTMLInputElement
const paddingInput = document.getElementById("padding") as HTMLSelectElement
const pixels = tf.browser.fromPixels(src)

var padding = "same"
var size = 5
var sigma = 3

function doBlur() {
    tf.tidy(()=> {
        const kernel = getGaussianKernel(size, sigma)
        const blurred = blur(pixels, kernel, padding)
        tf.browser.toPixels(
            tf.clipByValue(blurred, 0, 255),
            target)
    })
}

window.addEventListener("load", doBlur)

sizeInput.addEventListener("change", function() {
    size = parseInt(this.value, 10)
    doBlur()
})

sigmaInput.addEventListener("change", function() {
    sigma = parseInt(this.value, 10)
    console.log(sigma)
    doBlur()
})

paddingInput.addEventListener("change", function() {
    padding = this.value
    doBlur()
})


console.log(1)