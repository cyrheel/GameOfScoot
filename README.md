Nothing to show rn, prototype is comming...

Idea :

This app aim to be the best game of out manager, for as many people to participate as you want.

Technos:

- NodeJS
- ReactJS
- Styled-components
- Mocha
- Cypress

Prod:

- Hosted to https://goo.software by DigitalOcean
- DomainName by Name.com

How To Run Prod In Local:

- Clone this repo
- Start With Prod Image : "docker compose -f dockercompose.yml up -d"
- Build the image : "docker build . -f Dockerfile -t cyrheel/goo:latest"
- Publish new image : "docker push cyrheel/goo"
