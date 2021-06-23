# Offer1 Interview Exercise

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) to give you a quick starting place for the exercise. You can use the provided code or use a different framework/language for the front-end. You will need to provide all code for the back-end using which ever framework/language you are most comfortable with.


## Exercise Description

Image that you have been hired to create a new Real Estate application to help consumers purchase a home. Your new company is up against the a tight timeline and needs to deliver a minimum viable product (mvp) ASAP! In order to compete in the market place your MVP should provide the following core functionality:

- View/browse all available homes 
- Filter homes by City, Price, Number of Bedrooms
- Show detailed view for a selected home


## Solution Details

Create a detailed web app that solves for the following:

- modularity
- appropriate handling of flow/navigation
- appropirate handling of data/state

A sample [data set](./src/homes.json) representing properties has been included to help get you started on what a data model and API call would likely return for the list of active properties. Your solution should include frontend and backend code that solves for the above requirements. 


## Submitting the Exercise

1. Ensure that the scripts needed to run your solution/app are all working and documented. They must all run successfully.

2. Please make sure the repo is public. If you prefer to keep your repo private, then ensure you have granted read access to [tonyhernandez](https://github.com/tonyhernandez).

3. Completed the Google Form [here](https://forms.gle/We7VGi73apbECGKL6) once you are done with the code. Once submitted do not make any further changes to the code!


## :gear: Config:

Clone project and in the project directories, you can run this command for each folders (client and server):

### 'yarn install'

- make sure that adds proxy in package.json in client folder.\
  ` "proxy": "http://localhost:5000/"`
- run command at the root folder:\
 `make` or `cd server && yarn run dev`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- GraphQL Playground:\
  Open [http://localhost:5000/api](http://localhost:5000/api)