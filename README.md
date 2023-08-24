# Cookhouse 😃

This __cooking website__ was initially made with the concept of allowing users to save and create their favorite recipes in a personal list.<br> 
I started the project with using basic __HTML, CSS, and JavaScript__.<br> 
However, I completely restructured the architecture to incorporate a __login and registration system using the [Express framework](https://expressjs.com/de/)__.

<br />

## Acceptance Criteria

Users should be able to:

- Successfully register an account and log in
- Create their own recipes and store them to the personal list
- Remove recipes from their list
- Use the edamam API to search for recipes, thereby gaining inspiration
- Log out of their account

<br />

## Instructions

After cloning the project, use following command to get the server started:

```
npm run devStart
```
You can access the website via __localhost:3000__


### Screenshot:
The user will be automatically redirected to create an account and login:

![image](https://github.com/adriianoo/cookhouse/assets/84389909/70b705f6-789e-45d1-b3cf-480fa8482b88)

After registration, a user's information is stored in an array including their ID, name, email, and a hashed password.<br>
(A database is planned in the future for more security)

![image](https://github.com/adriianoo/cookhouse/assets/84389909/71c00643-37ff-4e8e-aa61-03d9d7dbc4f6)

<br />

## Website Overview

![image](https://github.com/adriianoo/cookhouse/assets/84389909/29a9ac29-48ed-4d05-acb1-9001166630a2)


<br />

Clicking on __Recipes__ located at the upper right-hand corner will lead you to _yourList.ejs_, where your recipes will be displayed in the list.
<br />Design modifications in upcoming commits :)

<br />

![image](https://github.com/adriianoo/cookhouse/assets/84389909/070b0e08-ffb3-44f1-868c-535ed6b54b15)


<br />

With a click on __Create Recipe__, the user can create a recipe by passing the _name_ and _ingredients_ below, followed by clicking on __Add__.

<br />

![image](https://github.com/adriianoo/cookhouse/assets/84389909/04b61f7a-8a08-469c-87e0-f1f68bd07a12)


<br />

Below is a preview of the potential appearance of the _recipe-search_ in the future.<br>
Currently not-functional due to changes in the project architecture<br>
(Screenshot from previous commits)

<br />

![image](https://github.com/adriianoo/recipes-website/assets/84389909/b48f1278-c7f4-4a6b-b07e-8624a75644f7)

<br />

# Bugs 🪲
- Every user should see there own recipe list. Currently all users see the same list
- API search not working after revamped project architecture

# Future improvements ⚙️
- Database instead of array
- Design adjustments
