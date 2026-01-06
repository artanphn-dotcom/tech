# Deployment Guide for GitHub Pages

This knowledge portal is a static HTML, CSS, and JavaScript website, making it ideal for hosting on GitHub Pages. Follow these steps to deploy your portal:

## Prerequisites
1.  **Git Installed**: Ensure Git is installed on your local machine.
2.  **GitHub Account**: You need an active GitHub account.
3.  **GitHub Repository**: Create a new public repository on GitHub for your project.

## Deployment Steps

### 1. Initialize Git and Commit Your Project
Navigate to your project's root directory in your terminal:
```bash
cd /mnt/c/Users/ArtanV/Desktop/2026/
```
Initialize a Git repository (if you haven't already):
```bash
git init
```
Add all your project files to the staging area:
```bash
git add .
```
Commit your changes:
```bash
git commit -m "Initial commit: Set up knowledge portal"
```

### 2. Link to Your GitHub Repository
Connect your local repository to the remote repository you created on GitHub:
```bash
git remote add origin https://github.com/[YOUR_USERNAME]/[YOUR_REPOSITORY_NAME].git
```
Replace `[YOUR_USERNAME]` with your GitHub username and `[YOUR_REPOSITORY_NAME]` with the name of your repository.

### 3. Push Your Code to GitHub
Push your local changes to the `main` (or `master`) branch on GitHub:
```bash
git push -u origin main
```

### 4. Configure GitHub Pages
1.  Go to your repository on GitHub (`https://github.com/[YOUR_USERNAME]/[YOUR_REPOSITORY_NAME]`).
2.  Click on the **"Settings"** tab.
3.  In the left sidebar, click on **"Pages"**.
4.  Under the "Source" section, select the branch where your website code resides (e.g., `main` or `master`). Choose the `/ (root)` folder.
5.  Click **"Save"**.

### 5. Access Your Live Site
GitHub Pages will build and deploy your website. This process may take a few minutes. Once deployed, your knowledge portal will be accessible at:
```
https://[YOUR_USERNAME].github.io/[YOUR_REPOSITORY_NAME]/
```
Replace `[YOUR_USERNAME]` and `[YOUR_REPOSITORY_NAME]` with your actual GitHub username and repository name.

Congratulations! Your Technical Command Reference portal is now live and accessible online.