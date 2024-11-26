This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# Uzeet App Development Guide using docker

This guide explains how to set up and run the Uzeet React Native app demo using Docker.

Prerequisites

Before you begin, ensure you have the following installed on your development environment:
• Docker: Install Docker from Docker’s official website.
• React Native CLI: If you plan to interact with emulators or connected devices outside Docker.
• Android Emulator/Device: Ensure you have an Android emulator or a physical device set up.

## Setting Up the Development Environment

git clone https://github.com/prajay-dev/indooratlas-20-11-2024.git
cd ReactNativeExample

### Build the Docker Image

Use the provided Dockerfile to build a Docker image:

    docker build -t uzeet-app .

Run the Docker Container

Run the Docker container, mapping the necessary port:

    docker run -it -p 8081:8081 --name uzeet-app-container uzeet-app

This will start the Metro bundler on port 8081.

### Running the App

Android

1. Open an Android emulator or connect a physical Android device.
2. Inside the running container, execute the following command to build and run the Android app:

   docker exec -it uzeet-app-container npx react-native run-android

iOS

1. Open Xcode and set up a simulator or connect a physical iOS device.
2. Inside the running container, build the iOS app (if necessary):

   docker exec -it uzeet-app-container npx react-native run-ios

### Stopping the Metro Bundler

To stop the Metro bundler and the Docker container, run:

    docker stop uzeet-app-container
    docker rm uzeet-app-container

### Troubleshooting

- If you encounter adb-related issues, ensure the Android emulator is running or the device is connected properly.
- Verify that your local environment has the correct Android SDK and required dependencies for building React Native apps.
- Ensure port 8081 is not already in use by another process.
  """
