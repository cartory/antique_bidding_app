# Antique Bidding App
Antique Bidding App - Frontend, build with `javascript` `react`. You can see the backend side [here](https://github.com/cartory/antique-bidding-back.git)

## Entity Relationship Diagram 
![EDR-VPP](https://media.discordapp.net/attachments/810375634042748948/907357095815446528/Screen_Shot_2021-11-08_at_15.53.05.png)
## Getting Started
For running backend you to create a `.env` file for enviroments variables and set your DB
by default is with `mysql`

### Download source code

```bash
git clone https://github.com/cartory/antique_bidding_app.git
```
### Install Dependencies
```bash
npm install
```

### Run Project
The project runs by default on port 3000
```bash
npm start
```
## Pages
### LoginPage 
build with `firebase` Auth and `sessionStorage`

![loginPage](https://media.discordapp.net/attachments/810375634042748948/907370161126928464/Screen_Shot_2021-11-08_at_16.44.55.png?width=1674&height=1046)

### Home Page
build with `query` params and `debouncer` for slider filter for fetching from backend
![HomePage](https://media.discordapp.net/attachments/810375634042748948/907370887207075840/Screen_Shot_2021-11-08_at_16.47.49.png?width=1663&height=1047)

### Detail Page
build with `socket.io-client` for listening changes
![DetailPage](https://cdn.discordapp.com/attachments/810375634042748948/907371512674271282/Screen_Shot_2021-11-08_at_16.50.15.png)

### Settings Page
build with maximumBidAmount with `One-to-One` relationship with user
![SettingsPage](https://cdn.discordapp.com/attachments/810375634042748948/907371984973885440/Screen_Shot_2021-11-08_at_16.52.14.png)

## Author
* **cartory** - *Pedro Caricari* - [cartory](https://github.com/cartory)
