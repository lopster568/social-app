# import the necessary packages
from imutils import paths
import argparse
import cv2
import numpy as np


def variance_of_laplacian(image):
    # compute the Laplacian of the image and then return the focus
    # measure, which is simply the variance of the Laplacian
    return cv2.Laplacian(image, cv2.CV_64F).var()


# construct the argument parse and parse the arguments
ap = argparse.ArgumentParser()
ap.add_argument("-i", "--images",
                help="path to input directory of images", default="./image")
ap.add_argument("-t", "--threshold", type=float, default=500.0,
                help="focus measures that fall below this value will be considered 'blurry'")
args = vars(ap.parse_args())
# loop over the input images
for imagePath in paths.list_images(args["images"]):
    # load the image, convert it to grayscale, and compute the
    # focus measure of the image using the Variance of Laplacian
    # method
    image = cv2.imread(imagePath)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    fm = variance_of_laplacian(gray)
    text = "Not Blurry"
    # if the focus measure is less than the supplied threshold,
    # then the image should be considered "blurry"
    if fm < args["threshold"]:
        text = "Blurry"
    # show the image
    cv2.putText(image, "{}: {:.2f}".format(text, fm), (10, 30),
                cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 255), 3)

    # Specify the kernel size.
    # The greater the size, the more the motion.
    kernel_size = 30

    # Create the vertical kernel.
    kernel_v = np.zeros((kernel_size, kernel_size))

    # Create a copy of the same for creating the horizontal kernel.
    kernel_h = np.copy(kernel_v)

    # Fill the middle row with ones.
    kernel_v[:, int((kernel_size - 1)/2)] = np.ones(kernel_size)
    kernel_h[int((kernel_size - 1)/2), :] = np.ones(kernel_size)

    # Normalize.
    kernel_v /= kernel_size
    kernel_h /= kernel_size

    # Apply the vertical kernel.
    vertical_mb = cv2.filter2D(image, -1, kernel_v)

    # Apply the horizontal kernel.
    # horizonal_mb = cv2.filter2D(image, -1, kernel_h)

    # Save the outputs.
    # cv2.imwrite('car_vertical.jpg', vertical_mb)
    # cv2.imwrite('car_horizontal.jpg', horizonal_mb)
    # cv2.imshow("Image", vertical_mb)
    # key = cv2.waitKey(0)
    
print("SUCCESSFULLY MEASURED THE INDEX")
