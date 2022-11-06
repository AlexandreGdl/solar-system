# Solar System
Solar System is a React-Native App displaying data about our solar-system created using Expo.

I am using Expo here because I do not intend in doing native code & I have a short amount of time to do this application, so in my opinion Expo is very suitable for this case. To be more precise I started a TypeScript Blank Project using the Expo CLI.

Project require a .env file

## Env
- API_URL=https://api.le-systeme-solaire.net/rest (Current API we are using)

## Run
Dev
```
$ yarn ios | android
```

Test
```
$ yarn test
```

## Third party
- Solar API : https://api.le-systeme-solaire.net

## Notable Stacks
- Styled-Components (cf: https://styled.components.com)
- Redux-Sage (cf: https://redux.saga.com)
- Expo (cf: https://expo.io)
- React-Native Navigation (cf: https://reactnavigation.org/)

## Development Approach
I used atomic design to structure my components, separating theme into 3 categories :

` Atom | Molecules | Organisms `

Doing so it feel easier to integrate, the code is more maintainable & it also help with testing.

cf: https://bradfrost.com/blog/post/atomic-web-design/

## Testing
Jest
```
In order to test this application I will use Jest and run GitHub Action at every PR done on the project (Simulating I am working with other people)

I added Jest at the end because I had no Idea what to really test since I am not a big fan of the snapshot test. But I did find out what to test and how to do that. Also I tested one component as Exemple, not every component but test are setup and just wanting for other file to test.
```

ESLint
```
This project use ESLint to provide homogenous code through the whole project, not-depending on who write the code. Same as Jest, every PR is checked running ESLint command line
```

## Context
Technical Test for `Big Boss Studio`

## Known issue
- Refresh controller not displaying on first fetch on iOS
- The planet fetched if not present in store is not added to the store, don't know if that should be the case or not

## Author
Alexandre GUINDEUIL 📍 Angers