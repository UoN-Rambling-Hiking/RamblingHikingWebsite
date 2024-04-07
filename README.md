# Rambling & Hiking Website
![Github Actions](https://img.shields.io/github/actions/workflow/status/UoN-Rambling-Hiking/RamblingHikingWebsite/hugo.yml?branch=master&style=for-the-badge) ![GitHub pull requests](https://img.shields.io/github/issues-pr/UoN-Rambling-Hiking/RamblingHikingWebsite?style=for-the-badge) ![Github Issues](https://img.shields.io/github/issues/UoN-Rambling-Hiking/RamblingHikingWebsite?style=for-the-badge)

The current website for the University of Nottingham Rambling and Hiking Club.

This is a downstream from the [original source](https://github.com/dan-lee76/ramsoc).

## How it's made
The website core dependencies are:
 * [Hugo](https://gohugo.io)
 * [Cloudflare Pages](https://pages.cloudflare.com/)

## Deployment
Cloudflare Pages automatically redeploy the website at 22:00 Wednesday-Saturday and 19:00 on Sundays.

## Contributing
Contributions are welcome for both updating our Calendar and improving the website.

## Run locally
1. Clone the repository `git clone https://github.com/UoN-Rambling-Hiking/RamblingHikingWebsite.git`
2. Install hugo [this guide may help](https://gohugo.io/getting-started/quick-start/#step-1-install-hugo)
3. Start development server `hugo server -F --disableFastRender` because there are some annoying things that can happen during dev if run with just `hugo server`
