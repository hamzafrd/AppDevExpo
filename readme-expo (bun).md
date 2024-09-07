# Installing Bun and Expo-Cli (if not exist) :

npm install -g bun  
bun install -g expo-cli

### Installing From GitHub :

bun install

`bun start` or `bun android` or `bun ios`

## Running Apps (Must Run bun android at least 1x)

`bun start` or `bun dev`

# Init Project (Manually from scratch)

## 1. create react native project :

bunx create-expo-app YourAppsName --template blank@45  
cd YourAppsName

## 2. Install All Plugins

### Necessary :

bun expo install expo-system-ui expo-constants @react-native-masked-view/masked-view react-native-reanimated react-native-safe-area-context react-native-screens react-native-gesture-handler @react-navigation/native @react-navigation/stack

### Store Data :

bun install --save redux@4.2.0  
bun install --save react-redux@8.0.5  
bun install --save realm@11.0.0-rc.0

### icon :

bun expo install react-native-elements  
bun expo install react-native-vector-icons  
bunx react-native link react-native-vector-icons

### tabs and drawer :

bun expo install @react-navigation/bottom-tabs  
bun expo install @react-navigation/drawer

### Other :

bun expo install react-native-image-slider-box  
bun expo install react-native-image-crop-picker  
bun expo install react-native-select-dropdown  
bun expo install react-native-image-pan-zoom  
bun expo install react-native-responsive-screen-hooks

## 3. Replace scripts at package.json :

```json
"scripts": {
    "start":"bun expo start",
    "start-android":"bun expo start --android",
    "start-ios":"bun expo start --ios",
    "android": "bun expo run:android",
    "ios": "bun expo run:ios",
    "dev": "bun expo start --dev-client",
    "dev-android": " bun expo start --android --dev-client",
    "dev-ios": " bun expo start --ios --dev-client"
  },
```

## 4. On babel.config.js add following (after presets) :

plugins: ['react-native-reanimated/plugin']

## 5. Migrate from npm to bun and run using bun

```bash
rm -rf node_modules
rm package-lock.json
bun install
```

(it will create node_modules with smaller size)
then,

```bash
bun start

or

bun android

or

bun ios
```

## Footnotes :

- Cari name icon yang diinginkan pada https://oblador.github.io/
  react-native-vector-icons/
- Cari type icon yang sesuai pada https://reactnativeelements.
  com/docs/components/icon
