# Welcome to evan's case study

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Architecture

This project adheres as closely as possible to the [Bulletproof React paradigm](https://github.com/alan2207/bulletproof-react) which I have found to be the most scalable, modular, and logical way to organize a React-based app.

## Features

- Context-based data stores
- data caching

## What would I add with more time?

- Auth is usually needed
- Persistent session storage
- More robust error handling (popping a user-facing toast, integration with reporting services like NewRelic/Sentry)
- More robust templating
- More robust and centralized theming
- I18n/l10n if needed
- Removing all unused code to reduce bundle size

## What could I have done better?

- File-based routing seems very nuanced
- Unsure how Stack.Screen-based routing and file-based routing interact hierarchically
- Images are hard???
- A11y is a different animal
- General organization (generic types, util functions, util components)

Images sourced [here](https://www.photographingspace.com/how-to-shoot-aurora/).
