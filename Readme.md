# ZenZen
![ZenZen](https://github.com/Ren0503/zenzen-js-share-video/blob/master/client/src/assets/header.png)
> Sharing Video P.E.R.N Stack. Repository is divided into 2 main packages: 
- **server** This package container API for ZenZen, build with Nodejs, Express and PostgreSQL with Sequelize. Use REST API.
- **client** Is a frontend for ZenZen, build with React, Redux Toolkit and Styled Component.

## Features

1. Login/Signup
2. Upload video
3. Search video by channel name
4. Search video by title, description
5. Like/Dislike video
6. Subscribe/Unsubscribe from channels
7. Add comment
8. Edit profile (avatar, cover)
9. Liked videos
10. History

### Server

| Plugin | README |
| ------ | ------ |
| bcryptjs | [plugins/bcryptjs/README.md](https://github.com/dcodeIO/bcrypt.js/blob/master/README.md) |
| cors | [plugins/cors/README.md](https://github.com/expressjs/cors/blob/master/README.md)|
| express | [plugins/express/README.md](https://github.com/expressjs/express/blob/master/Readme.md) |
| jsonwebtoken | [plugins/jsonwebtoken/README.md](https://github.com/auth0/node-jsonwebtoken/blob/master/README.md) |
| pg | [plugins/pg/README.md](https://github.com/brianc/node-postgres/blob/master/packages/pg/README.md) |
| sequelize | [plugins/sequelize/README.md](https://github.com/sequelize/sequelize/blob/main/README.md) |
| nodemon | [plugins/nodemon/README.md](https://github.com/remy/nodemon/blob/master/README.md) |

### Client

| Plugin | README |
| ------ | ------ |
| @redux/toolkit | [plugins/@redux/toolkit/README.md](https://github.com/reduxjs/redux-toolkit) |
| axios | [plugins/axios/README.md](https://github.com/axios/axios/blob/master/README.md) |
| react | [plugins/react/README.md](https://github.com/facebook/react/blob/master/README.md) |
| react-redux | [plugins/react-redux/README.md](https://github.com/reduxjs/react-redux) |
| react-router-dom | [plugins/react-router-dom/README.md](https://github.com/ReactTraining/react-router/blob/master/README.md) |
| redux | [plugins/redux/README.md](https://github.com/reduxjs/redux)|
| styled-components | [plugins/styled-components/README.md](https://github.com/styled-components/styled-components/blob/main/README.md)|
| video.js | [plugins/video-js/README.md](https://github.com/videojs/video.js/blob/main/README.md) |

## Core Structure
    code
      ├── package.json
      │
      ├── client
      │   ├── public
      │   ├── src
      │   │   ├── assets
      │   │   ├── components
      │   │   ├── hooks
      │   │   ├── reducers
      │   │   ├── routes
      │   │   ├── screens
      │   │   ├── styles
      │   │   ├── utils
      │   │   ├── App.js
      │   │   ├── store.js
      │   │   └── index.js
      │   │
      │   └── package.json
      │
      ├── server 
      │   ├── controllers
      │   ├── middleware
      │   ├── models
      │   ├── routes
      │   ├── sequelize.js
      │   ├── server.js
      │   └── package.json
      │
      ├── .gitignore
      └── README.md


### Screenshots


|                                        Home                                        |                                        Detail                                        |                                        Search                                        |
| :--------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| ![](https://github.com/Ren0503/zenzen-js-share-video/blob/master/client/src/assets/screenshot/home.png) | ![](https://github.com/Ren0503/zenzen-js-share-video/blob/master/client/src/assets/screenshot/detail.png) | ![](https://github.com/Ren0503/zenzen-js-share-video/blob/master/client/src/assets/screenshot/search.png) |

|                                        Channel                                        |                                        Users                                        |                                        Upload                                        |
| :--------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| ![](https://github.com/Ren0503/zenzen-js-share-video/blob/master/client/src/assets/screenshot/channel.png) | ![](https://github.com/Ren0503/zenzen-js-share-video/blob/master/client/src/assets/screenshot/users.png) | ![](https://github.com/Ren0503/zenzen-js-share-video/blob/master/client/src/assets/screenshot/upload.png) |