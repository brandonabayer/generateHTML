# generateHTML
A command-line application that dynamically generates a PDF profile from a GitHub username.

node index.js

User will be prompted to select their favorite color. The selected color will then be used as the PDF card background.

The generated PDF will include the provided user information:
    GitHub avatar
    Username
    User Bio
    User Github profile link
    User location via location service

As well as obtain and append the following to PDF card:
    User number of public repositories
    Followers
    GitHub Stars
    Following

Following the common templates for user stories, we can frame this challenge as follows:

AS A product manager

I WANT a developer profile generator

SO THAT I can easily prepare reports for stakeholders