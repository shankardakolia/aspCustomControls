import {Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

// Get the device's screen dimensions
const {width, height} = Dimensions.get('window');
const screenHeight = Dimensions.get('screen').height;

// Check if the device is small (e.g. iPhone 5, SE, etc.)
const isSmall = width <= 375 && !DeviceInfo.hasNotch();

// Define the guideline base width based on whether the device is small or not
const guidelineBaseWidth = () => {
  if (isSmall) {
    // If the device is small, return a suitable value for smaller screens
    return 330;
  } else if (Platform.OS === 'android') {
    // Adjust this value for Android devices based on your design considerations
    return width < 600 ? 340 : 360;
  }
  return 350; // If the device is not small and not Android, return the default value
};

// Define the guideline base height based on the device's width
const guidelineBaseHeight = () => {
  if (isSmall) {
    // If the device is small, return a suitable value for smaller screens
    return 550;
  } else if (width > 410) {
    // Adjust this value for larger screens like iPhone 6/7/8 Plus
    return 620;
  } else if (Platform.OS === 'android') {
    // Adjust this value for Android devices based on your design considerations
    return width < 600 ? 680 : 700;
  }
  return 680; // Default value for other devices
};
// Define the guideline base font size based on the device's width
const guidelineBaseFonts = () => {
  if (width > 410) {
    // if device width is greater than 410 (close to iPhone 6/7/8 Plus width), return 430
    return 430;
  }
  return 400; // if device width is less than or equal to 410, return 400
};

// Function to scale a size horizontally based on the device's width
const horizontalScale = size => (width / guidelineBaseWidth()) * size;

// Function to scale a size vertically based on the device's height
const verticalScale = size => (height / guidelineBaseHeight()) * size;

// Function to scale a font size based on the device's width
const scaleFontSize = size => Math.round((size * width) / guidelineBaseFonts());

// Function to scale a height based on the platform and screen height
const scaleHeight = () =>
  Platform.OS === 'ios' ? screenHeight * 0.3 : screenHeight * 0.24;

// Export the scaling functions for use in other modules
export {horizontalScale, verticalScale, scaleFontSize, scaleHeight};
