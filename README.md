# TechSubxBD Download Site

Static customer download website for GitHub Pages.

## Publish on GitHub Pages

1. Create a GitHub repository.
2. Upload everything inside this `download-site` folder to the repository root.
3. Go to repository Settings > Pages.
4. Select Deploy from branch, then choose `main` and `/root`.
5. Save. Your download website will be live in a few minutes.

The main download button points to:

`downloads/TechSubxBD-latest-extension.zip`

This ZIP contains one top-level folder:

`TechSubxBD/`

Customers should extract it and select that folder in Chrome's Load unpacked screen.

Normal websites cannot download a real folder directly. ZIP is required for one-click extension downloads.

Support WhatsApp:

`+8801322230857`

## Add your setup YouTube video

Open `app.js` and paste your video link here:

```js
var SETUP_VIDEO_URL = "https://youtu.be/6RCPkmp0UOw?si=HKR7bdouha5u7_Ds";
```

Customers will then see the setup video directly on the website.
