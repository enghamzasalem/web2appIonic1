# website to app in one minute

This is simple app for converting your website to app easily

Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
Prerequisites:

```sh
npm install -g ionic

ionic start myproject --type ionic1
```

- choose blank type project

```sh
cd [projectname]

ionic serve
```

- it will open on http://localhost:8100/
- Go to www/index.html and change this:

```sh
  <ion-content>
        <div class="container">
          <iframe
            name="chatFrame"
            id="iframe"
            class="iframe"
            style="width:100%;height:1000%"
            src="https://enghamzasalem.com" // put your website
            align="top"
            frameborder="0"
            allowfullscreen
          >
          </iframe>
        </div>
      </ion-content>
```

- and add this CSS to www/css/style.css

```sh

.container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}
.iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}


```

Build Project :

- You need android SDK so install Android Studio from here:
  https://developer.android.com/studio
- Also you have to add the SDK to you path:
  https://www.dev2qa.com/how-to-set-android-sdk-path-in-windows-and-mac/

```sh
ionic cordova build android
```
