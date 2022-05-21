# Mini Portfolio Website

<img src="/assets/thumbnail.png" alt="" width="500px" />

This responsive portfolio website was [originally written](https://github.com/bedimcode/responsive-mini-portfolio) in HTML/CSS/JS.

### Readability and Functional Improvements
* Refactored the original HTML file into JSX and split the code up into several React components
* Created databases for Projects and Skills items to keep the components DRY
* Implemented the light/dark theme and Projects/Skills rocker functionalities using React State Hooks rather than pure JS

### Editing for Personal Use
All images and the CV pdf are found in the ```public``` directory.

Customize icons from [this library](https://react-icons.github.io/react-icons/icons?name=ri).

***Make sure to change the following elements***:
* Browser tab icon (```/public/img/favicon.png```)
* Profile picture (```/public/img/perfil.png```; use 440x513 resolution for best results)
* Name, job title (```/src/components/Header/Header.jsx```)
* Social icons (```/src/components/Header/Social.jsx```; you can change the icons as well as the url)
* Years of work, completed projects, and satisfied customers (```/src/components/Header/Stats.jsx```)
* CV file (```/public/pdf/Gianell-Cv.pdf```)
* WhatsApp, Messenger (```/src/components/Header/CV.jsx```; you can change the icons as well as the url)
* Projects (```/src/components/Portfolio/projectDatabase.js```; the number of projects will reflow automatically)
* Skills (```/src/components/Skills/skillsDatabase.js```; the number of skills will reflow automatically)

<hr/>

## Hosting on GitHub Pages
After customizing with your personal information, you can host this page with GitHub Pages.

1. ```cd [path/to/project]```

2. ``` npm install gh-pages```
    
    This will install the ```gh-pages``` dependency using Node Package Manager and add ```"gh-pages": "^3.2.3"``` to the ```dependencies``` object in ```/src/package.json```
    
3. Add these two properties to the ```scripts``` object in ```/src/package.json```
    
    ```"predeploy": "npm run build"```
    
    ```"deploy": "gh-pages -d build"```
    
4. ```npm run build```
    
    This will build your React app and automatically create a branch called ```gh-pages``` in your Github repository.
    
5. In Github, go to Settings -> Pages -> Source and select the ```gh-pages``` branch. Your page will now be hosted at ```[repository-name].github.io```!
