# BPX
PBX-static

1. Clone repository 

# Install and run SASS Compiler

2. npm install
3. npm init (enter values or just hit enter 8 times)
4. npm install node-sass
5. Go to `Package.json` and add
`"scripts": {
    "scss": "node-sass -r --watch scss -o css"
  }`
6. npm run scss

Now all CSS written in `main.scss` should be pre-compiled to `main.css`
