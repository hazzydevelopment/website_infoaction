# website_infoaction
# 🌐 Website Info Lookup Action  Enter a website URL and get domain information: owner, registrar, country, and registration date.  ## 🚀 Usage  ```yaml name: Website Lookup on: [push]  jobs:   website-info:     runs-on: ubuntu-latest     steps:      - uses: actions/checkout@v3  - uses: YOUR_USERNAME/website-info-action@v1  with: url: "example.com"
