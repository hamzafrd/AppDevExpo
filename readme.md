# Init Project (Manually from scratch)

## 1. create react native project :

npx create-expo-app NamaAplikasiKamu --template blank@45  
cd NamaAplikasiKamu

## 2. Install All Plugins

### Necessary :

npx expo install expo-system-ui expo-constants @react-native-masked-view/masked-view react-native-reanimated react-native-safe-area-context react-native-screens react-native-gesture-handler @react-navigation/native @react-navigation/stack

### Store Data :

npm install --save redux@4.2.0  
npm install --save react-redux@8.0.5  
npm install --save realm@11.0.0-rc.0

### Icon :

npx expo install react-native-elements  
npx expo install react-native-vector-icons  
npx react-native link react-native-vector-icons

### Tabs and Drawer :

npx expo install @react-navigation/bottom-tabs  
npx expo install @react-navigation/drawer

### Other :

npx expo install react-native-image-slider-box  
npx expo install react-native-image-crop-picker  
npx expo install react-native-select-dropdown  
npx expo install react-native-image-pan-zoom  
npx expo install react-native-responsive-screen-hooks

## 3. On babel.config.js add following (after presets) :

```json
plugins: ['react-native-reanimated/plugin']
```

## 4. Replace scripts at package.json :

```json
"scripts": {
    "start":"npx expo start",
    "start-android":"npx expo start --android",
    "start-ios":"npx expo start --ios",
    "android": "npx expo run:android",
    "ios": "npx expo run:ios",
    "dev": "npx expo start --dev-client",
    "dev-android": " npx expo start --android --dev-client",
    "dev-ios": " npx expo start --ios --dev-client"
  },
```

## 5. Running App

```bash
npm run start

or

npm run android

or

npm run ios
```

## Footnotes :

- Cari name icon yang diinginkan pada https://oblador.github.io/
  react-native-vector-icons/
- Cari type icon yang sesuai pada https://reactnativeelements.
  com/docs/components/icon
