# rest-countries-api-with-color-theme-switcher

### Table of Contents

- [Prerequisites](#Prerequisites)
- [Tech Stack](#Tech-Stack)
- [Interaction](#Interaction)
- [Screenshot](#Screenshot)
- [Links](#Links)
- [Getting Started](#Getting-Started)
- [Deployment](#Deployment)
- [Structure](#Structure)
- [Author](#Author)

### Prerequisites

- <img src="client/public/readme/npm.png" width="25" style="top: 8px" /> _npm: Node Package Manager for JavaScript_
- <img src="client/public/readme/vite.jpg" width="25" style="top: 8px" /> _Vite: Frontend build tool for modern web development_
- <img src="client/public/readme/js.png" width="25" style="top: 8px" /> _JavaScript: Web development language._

#

### Tech Stack

- <img src="client/public/readme/nodejs.png" width="25" style="top: 8px" /> _Node.js: JavaScript runtime environment_
- <img src="client/public/readme/expressjs.png" width="25" style="top: 8px" /> _Express: Minimalist web framework for Node.js_
- <img src="client/public/readme/MUI.png" width="25" style="top: 8px" /> _MUI: React components for Material Design UI._
- <img src="client/public/readme/mongoose.png" width="25" style="top: 8px" /> _Mongoose: MongoDB object modeling for Node.js._
- <img src="client/public/readme/reduxToolkit.png" width="25" style="top: 8px" /> _Redux Toolkit: A simplified and efficient way to manage state in Redux applications._

### Interaction

- View all countries from the backend on the homepage.
- Search for a country using an input field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Navigate to bordering countries from the detail page.
- Toggle the color scheme between light and dark mode (optional)

### Screenshot

![](./client/public/preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/DavitDvalashvili/rest-countries-api-with-color-theme-switcher)
- Live Site URL: [Add live site URL here](https://rest-countries-api-front.vercel.app/)

### Getting Started

1. First of all you need to clone app repository from github:

```
git clone https://github.com/DavitDvalashvili/rest-countries-api-with-color-theme-switcher.git
```

2. Next step requires install all the dependencies.

```
npm install
```

3. To see project in action

```
npm run dev
```

### Deployment

Before every deployment you need to create build file.

```
npm run build
```

after this you can use this file to deploy project on server.

## Structure

```
|-- api
| |-- controllers
| |-- models
| |-- routes
| |-- utils
| |-- index.js
|-- readme
|-- client
| |-- public
| |--src
| | |-- App #store.tsx
| | |-- Feature #countrySlice.tsx #themeSlice.tsx
| | |-- components
| | |-- pages #Country.tsx #Home.tsx
| | |-- app.js
| | |-- main.js
| |--index.html

```

### Author

- Github profile - [Add your name here](https://github.com/DavitDvalashvili)
- Linkedin profile - [Add your name here](https://www.linkedin.com/in/davit-dvalashvili-0421b6253)
- Email - [@your_username](davitdvalashvili1996@gmail.com)
