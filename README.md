This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

### Step 0: Install Dependencies

Before starting Metro or building the app, make sure you install all the required JavaScript dependencies:

```sh
# Using npm
npm install

# OR using Yarn
yarn install
```

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Testing your app

This app uses Jest and @testing-library/react-native.

```
npm test

# OR

yarn test
```

## Step 4: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Architectural Decisions

### 1. State Management - Redux Toolkit
- **Why:** Provides predictable state management with excellent DevTools
- **Benefits:** Time-travel debugging, centralized state, excellent TypeScript support
- **Alternative considered:** Context API (chosen Redux for complex state management needs)

### 2. Folder Structure - Feature-based
- **Why:** Scales well as the app grows, clear separation of concerns
- **Benefits:** Easy to locate files, reusable components, maintainable codebase
- **Pattern:** Each feature has its own folder with components, styles, and logic

### 3. Styling - Styled Components Pattern
- **Why:** Theme support, component-scoped styles, TypeScript integration
- **Benefits:** Dynamic theming, reusable styles, better organization
- **Alternative:** StyleSheet (chosen styled approach for better maintainability)

### 4. API Layer - Service Pattern
- **Why:** Centralized API logic, easier testing, better error handling
- **Benefits:** Reusable across components, consistent error handling, interceptors
- **Implementation:** Axios with interceptors for common functionality

### 5. Custom Hooks - Logic Separation
- **Why:** Reusable logic, easier testing, cleaner components
- **Benefits:** Single responsibility principle, easier unit testing
- **Examples:** useWeather, useTheme, useStorage

### 6. Testing Strategy - Comprehensive Coverage
- **Unit Tests:** Components, hooks, services, utilities
- **Integration Tests:** Redux slices, API integration
- **Coverage Goal:** >70% for production readiness

### 7. TypeScript - Full Type Safety
- **Why:** Catch errors at compile time, better IDE support, documentation
- **Benefits:** Reduced runtime errors, better refactoring, self-documenting code
- **Implementation:** Strict TypeScript configuration with comprehensive typing

### ⚡ Performance Optimizations
- **Memoization:** React.memo for components, useMemo/useCallback for expensive operations
- **Lazy Loading:** Dynamic imports for non-critical components
- **Image Optimization:** Proper sizing and caching for weather icons
- **API Optimization:** Request debouncing, error retry logic, timeout handling
- **Storage Optimization:** Efficient AsyncStorage usage with error handling

### 🔐 Security Considerations
- **API Key Protection:** Environment variables, never commit to repository
- **Input Validation:** Sanitize and validate all user inputs
- **Error Handling:** Don't expose sensitive information in error messages
- **Network Security:** HTTPS only, proper timeout configurations

## 🎉 Congratulations!
You're running a production-ready, scalable, and secure React Native Weather App. ✨

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.