
#ionic build android --release -- --keystore="keys/keystore.store" --alias=github-finder --storePassword=abc123
ionic build android --release --buildConfig=build.json

cp ./platforms/android/build/outputs/apk/android-release.apk ./outputs/android-release.apk