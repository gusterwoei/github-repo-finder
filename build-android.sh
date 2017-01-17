
ionic build android --release -- --keystore="platforms/android/keystore.store" --alias=github-finder --storePassword=abc123

cp ./platforms/android/build/outputs/apk/android-release.apk ./outputs/android-release.apk