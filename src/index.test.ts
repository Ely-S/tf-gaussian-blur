const blur = require('./index.ts');
const tf = require('@tensorflow/tfjs');

it('get gaussian kernel should return kernel of the correct shape', () => {
  const kernel = blur.getGaussianKernel(5, 1);
  expect(kernel.shape).toEqual([5, 5, 3, 1]);
});

it('blur should return image of the correct shape', () => {
  const kernel = blur.getGaussianKernel(3, 1);
  const image = tf.ones([256, 256, 3]);

  const blurred = blur.blur(image, kernel);
  expect(blurred.shape).toEqual(image.shape);

  // output is smaller than input when using padding
  const paddedBlurred = blur.blur(image, kernel, 'valid');
  expect(paddedBlurred.shape).toEqual([254, 254, 3]);
});
