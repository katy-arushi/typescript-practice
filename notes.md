### What is TypeScript?
- extension to JS, which is dynamically typed
- most popular statically typed extension to JS
- JS only works for small - medium size applications before safety is compromised
- TS catches errors at transpile time in the editor or console, not at runtime
  - less errors, and they are seen earlier
- difficult to maintain and scale JS code without entities or custom data types
- superset of JS, an extension
- TS transpiles to JS
  - can't be executed in the browser
  - transpiles to ES3 which is super stable/safe
- helps you plan your app's architecture in terms of data types

### tsconfig.json
- rootDir has TS files
- outDir for outputted JS files
- then run `tsc -w` in terminal

### Basic types and variables
- can only change vars to same type

### Explicit is always better than implicit
```ts
const getFullName = (name: string, surname: string): string => {
	return name + ' ' + surname;
};
```
- here, we define the type of the arguments and the return value
- don't rely on TS to determine the type of the return value of the function based on what the function does, as this can easily be changed
  
### Interfaces
- TS can read objects and implicitly determine the type of our objects
- interfaces are special entities in TS that help us create objects with properties
  
```ts
interface User {
	name: string;
	age?: number;
	getMessage(): string;
}
```
- code style is to capitalize the name of interface - `User`
- Here, age is `age?` to signify that the age property is not mandatory when creating a User object
- most difficult part of TS is planning architecture in entities and how they communicate with each other
- interfaces give autocomplete so you can see all possible properties
  - only properties specified in interface
- can also make classes in TS
  - you should name interfaces slightly differently than classes to avoid name collision
  - you can name the class `User` and the interface either `IUser` or `UserInterface`

### Types and Unions
`let pageNumber: string | number = '1';`
- here, pageNumber can be of type string or number
- union is used to combine data types
  - also used to check for null
`let errorMessage: string | null = null;`
`let user: UserInterface | null = null;`
- beware of union-ing too many types - then you're not really getting any of the type safety from TS that is the entire point of using TS.


### Type Aliases
- create new type, unique entity
- `type PopularTag = string;`
- convention is to use CamelCase
- for when you are using a type across your whole app and not using interfaces
- can also combine type aliases and unions
- `type MaybePopularTag = PopularTag | null;`
- `const dragonsTag: PopularTag[] = 'dragon';`