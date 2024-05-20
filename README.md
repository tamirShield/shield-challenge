# ShieldChallenge

## Description

This is a simple challenge to test your skills in Angular development.

### Project Overview

- This project is a simple trivia list and a form to add new items to the list.
- More features are expected to be added in the future.

### Guidelines of the project

- The architecture is already defined to use a state management to integrate the API services and the view components.
- The design defined that ever new component should be wrapped into a card containing always a title and a content.

## Instructions

#### All the files you'll need for this solution are already created.

`list-service`:

- `getTrivia` Method returns an array of trivia items.
- `saveTrivia` Method adds a new trivia item to the list.

`list-component` needs :

- [ ] An implementation to retrieve the items.
- [ ] The items should be displayed in the provided trivia component.
- [ ] The cards should be displayed horizontally, line-wrapped and with space 
 between them.


`trivia-form` needs :

- [ ] An implementation to add new items to the list.
- [ ] The form card should be centralized in the page.
- [ ] `optional` The form may be reset after adding the new item.
- [ ] `optional` The form may have error messages if required fields are not filled.


