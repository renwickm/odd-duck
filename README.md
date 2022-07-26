# odd-duck

## What Do We Need?

-An Array that track pics/img's

### DOM References

- Grab HTML elements that shows the pictures of products - imgs
  -DOM manipulation to have JS render the products
- Grab our button
  -DOM manipulation to render a list of results

### Constructor - what is our Constructor? Objects to Build

- Product Object
  - Properties
    - votes - variable that tracks the amount of clicks
    - views - variable that track the amount of views
    - name
    - img of the products - path
  - Array to store our products


### Global Variables

- Total votes - 25

### Executable Code

- Random img generator - randomly generate indexes
  - selects 2 unique imgs
- Event Listeners
  - click - on the imgs - rerender new images(increase the views on the products that are rendered) - count the vote of the product that was clicked/that will lower the number of votes
  - click - "button" that will show results

## Links and References

Math.floor(math.random() * (max - min +1) + min);

1. Referenced Code 201 Demo Class 11 ('GOAT VOTE') to complete portions of the JS, but made necessarry adjustments to lab 11 in the areas that were not relatable.
2. Referenced Code 201 CSS Grid Layout class to better understand grid layout and applied it to lab 11.
