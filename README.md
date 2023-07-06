# ShieldChallenge

## Description

This is a simple challenge to test your skills in Angular development.

## Instructions

### All the files you'll need for this solution are already created.

`list-service`:
- `getTrivia` method returns an array with only the initial item. <b>You'll have to figure out how to retrieve the created items.</b>
- `addTrivia` its a mock method only logs on the console the added item. <b>You'll have to figure out how to add the new items.</b>


`list-component` needs :
- [ ] An implementation to retrieve the items from `list-service`.
- [ ] The items should be displayed in cards.
- [ ] The cards should have cards displayed horizontally and with a space between them.


`trivia-form` needs :
- [ ] An implementation to add new items to the list.
- [ ] It should call the method `addTrivia` from `list-service` to add the new item.
- [ ] `optional` The form may be reset after adding the new item.
- [ ] `optional` The form may have error messages if required fields are not filled.
- [ ] The form may be centralized in the page.