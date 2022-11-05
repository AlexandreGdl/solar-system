# Solar System
Solar System is a React-Native App displaying data about our solar-system created using Expo.

I am using Expo here because I do not intend in doing native code & I have a short amount of time to do this application, so in my opinion Expo is very suitable for this case. To be more precise I started a TypeScript Blank Project using the Expo CLI.

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
- React-Native Navigation (cf: https://link.to.rn.navigation)

## Development Approach
I used atomic design to structure my components, separating theme into 3 categories :

` Atom | Molecules | Organisms `

Doing so it feel easier to integrate, the code is more maintainable & it also help with testing.

cf: https://link.to.atomic.design

## Testing
Jest
```
In order to test this application I will use Jest and run GitHub Action at every PR done on the project (Simulating I am working with other people)
```

ESLint
```
This project use ESLint to provide homogenous code through the whole project, not-depending on who write the code. Same as Jest, every PR is checked running ESLint command line
```

## Context
Technical Test for `Big Boss Studio`

## Known issue
- Refresh controller not displaying on first fetch
- The planet fetched if not present in store is not added in the store

## Author
Alexandre GUINDEUIL 📍 Barcelone