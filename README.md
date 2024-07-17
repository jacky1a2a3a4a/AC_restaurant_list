# Restaurant-List (Demo)
it's a website you can search favorite restaurant and get the detail information about restaurantes, like the name, the rating, and the picture.

## Image Demonstration
![image](https://github.com/jacky1a2a3a4a/Restaurant-List_Demo/blob/53cdc60ed8d754f94aa180b7b1181351b07e151d/Restaurant%20List_img%20(1).png)
![image](https://github.com/jacky1a2a3a4a/Restaurant-List_Demo/blob/53cdc60ed8d754f94aa180b7b1181351b07e151d/Restaurant%20List_img%20(2).png)

## Features
* Click a specific restaurant to show the information on the detail page.
* Search restaurants by names or categories.

## Getting Started
### Installing
1. open your `terminal`, clone the repository:
```
$ git clone https://github.com/jacky1a2a3a4a/Restaurant-List_Demo
```
2. Move to Restaurant-List_Demo directory:
```
$ cd /Restaurant-List_Demo
```
3. Restore the dependencies: 
```
$ npm install
```

### Excuting program
1. Launch the application: 
```
$ npm run dev
```
2. Browse the URL `http://localhost:3000` on the terminal.

### Dependencies:
* Express: "^4.18.2"
* Express-handlebars: "^7.1.2"

### Includes:
* Bootstrap: 5.1.2
* Font Awesome 6.5.1

### Static files:

```
Restaurant-List_Demo
├── public/
│   ├── stylesheets/
│       └── main.css
│   └── jsons/
└──     └── restaurants.json
```

### Scripts:

```
"start": "node app.js"
"dev": "nodemon app.js"
```
## Authors
* [Alpha Camp](https://tw.alphacamp.co/) - provide project template.
* [Jacky1a2a3a4a](https://gist.github.com/jacky1a2a3a4a) - build this project with express.js based on provided project template.

