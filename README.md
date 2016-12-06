# Gulp Front End Build System

##### Install dependencies
 - [NodeJS](https://nodejs.org/en/)
 - `npm install`

### Usage
- clone repository: `git clone https://github.com/wickdninja/Gulp-Build-System.git`    
- `cd ` into project directory
- execute `gulp` to execute a single build of JS and Less assets
- execute `gulp watch` to execute a single build and watch assets for changes and trigger another build

### Tasks
- clean     ***(cleans dist directory)***     
`gulp clean`
- less         ***(compiles less files into css, concatenates & minifies css files into dis/all.min.css)***     
`gulp less`
- scripts      ***(concatenates & minifies js files into dis/all.min.js)***     
`gulp scripts`
- default ***(runs clean, less & scripts)***    
`gulp`
- watch less ***(runs clean, less & watches for less changes)***    
`gulp watch:less`
- watch js  ***(runs clean, js & watches for js changes)***    
`gulp watch:js`
- watch   ***(runs clean, less, js & watches for js & less changes)***    
`gulp watch`

