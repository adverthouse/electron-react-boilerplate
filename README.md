# electron-react-boilerplate
1. First install dependencies: ```npm install``` </br>
2. In one terminal window run: ```npm run watch``` to compile react code <br/>
3. In other one run: ```npm start``` to start Electron app

//npm i electron-packager --save-dev --force
//npm i electron --save-dev --force
//npm i electron-packager -g
// electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds


// electron-packager . byt-app --overwrite --asar --platform=win32 --arch=ia32 --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="Electron js App"     


electron-packager . --overwrite --asar --platform=win32 --arch=ia32 --prune=true --out=release-builds 