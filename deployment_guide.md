# GitHub Pages Deployment Guide

This project is a static site (HTML, CSS, JavaScript), so it can be deployed directly with GitHub Pages.

## Prerequisites
1. Git installed locally.
2. A GitHub account.
3. A repository created on GitHub (public or private with supported plan settings).

## 1) Initialize and Commit Locally
From the project root:

```bash
cd C:/Users/ArtanV/Desktop/DESKTOP/2026
git init
git add .
git commit -m "Initial commit"
```

## 2) Connect to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git branch -M main
git push -u origin main
```

## 3) Enable GitHub Pages
1. Open your repository on GitHub.
2. Go to **Settings** -> **Pages**.
3. Under **Build and deployment**, set:
	- **Source**: Deploy from a branch
	- **Branch**: `main`
	- **Folder**: `/ (root)`
4. Save the settings.

## 4) Verify Deployment
After GitHub finishes deployment, your site is available at:

```text
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

## Optional: Custom Domain
If you use a custom domain, configure DNS and add a `CNAME` file in the repository root.