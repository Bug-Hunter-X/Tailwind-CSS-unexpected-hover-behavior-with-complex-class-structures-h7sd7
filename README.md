# Tailwind CSS Unexpected Hover Behavior

This repository demonstrates an uncommon bug in Tailwind CSS where hover effects behave unexpectedly when combined with complex class structures. Specifically, combining `group-hover` with multiple transition directives can lead to the intended hover effects not applying correctly. 

## Bug Description

The provided `bug.js` file contains a code snippet that showcases this issue.  The image within the div is supposed to transition smoothly to 75% opacity on hover, but this effect fails due to conflicts in Tailwind's class directives. 

## Solution

The solution in `bugSolution.js` provides a corrected version which ensures that the hover effects work as expected. This involves reorganizing classes, ensuring proper specificity and using more appropriate transition directives. 

This issue highlights the importance of carefully considering the interplay of different Tailwind CSS directives, particularly when dealing with nested elements and complex animations.

## How to reproduce
1. Clone this repository.
2. Open `bug.html` in your web browser. 
3. Observe that the hover effect on the image does not work as intended.
4. Open `bugSolution.html` for comparison and see the fixed version.