import { Tensor3D, Tensor4D } from '@tensorflow/tfjs';
export declare function getGaussianKernel(size?: number, sigma?: number): Tensor4D;
export declare function blur(image: Tensor3D, kernel: Tensor4D): Tensor3D;
