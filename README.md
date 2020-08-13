# Cookie-StandD66

Lab07 all over again?

# Lab: Salmon Cookies Pt. 2
Problem Domain
Pat’s Salmon Cookies problem domain can be found here!

Instructions
Create a new branch for today’s lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality.

Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

Replace the lists of your data for each store and build a single table of data instead. It shoudl look similar to the following:

Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.

 	6:00am	7:00am	8:00am	9:00am	10:00am	11:00am	12:00pm	1:00pm	2:00pm	3:00pm	4:00pm	5:00pm	6:00pm	7:00pm	Daily Location Total

Seattle	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
Tokyo	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
Dubai	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
Paris	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
Lima	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
Totals	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 

Each cookie stand location should have a separate render() method that creates and appends its row to the table

The header row and footer row are each created in their own stand-alone function

Stretch Goals
Continue to work on design aspects of the public-facing page.
Make a style guide, using this one as a model.
Create a second table that will help Pat manage staffing. Using the basic rubric that single Salmon Cookie Tosser can serve 20 customers per hour, and that each location should have a minimum of two Salmon Cookie Tossers on shift at all times, calculate how many Salmon Cookie Tossers are needed at each location each hour.
Research into Pat’s customer traffic has shown that the hours of 8am, 11am, and 3pm tend to have more customers than other hours, and that the hours with the least customers are 1pm and 6pm. Apply a control curve to the projected sales numbers to reflect those daily ebbs and flows. The following array represents the percentage of maximum traffic that occurs during each of the hours from 6am to 8pm, and can be used to scale the projected hourly customer traffic into more accurate values:
[0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6]

Developer Style Guide
In addition to the requirements listed above, please ensure that your project also contains the following according to our style guide:

Good use of a constructor function; style and syntax are correctly implemented
Duplicate code has been removed and DRY principles are evident
Working on a non-master branch for the day, with regular commit history. Basically, every time you get something to work, you should do a commit. But you only need to push every couple of hours or so, tops.
Resources
No additional resources are required for this lab. Utulize your demo code and

Submission Instructions
Submit the link to your GitHub repo for this project
Add a comment to this Canvas submission with answers to the following questions
How did this go, overall?
What observations or questions do you have about what you’ve learned so far?
How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?
© Code Fellows 2020

# Assignment Overview

Read this lab assignment in its entirety before beginning your lab. You may want to open it in a new tab.

Problem Domain
Pat’s Salmon Cookies problem domain can be found here!

Instructions
Continue working on the functionality of your sales.html page if you do not have it working 100% yet, including the row of totals across the bottom.

Pat has provided you 7 additional images that they would like to see on the home page of the site. These images are located in your daily class GitHub repo: class-08/lab-b/assets/.

Your public-facing index.html page should include the following:

locations with addresses,
hours open
contact information
Anything else you feel neccesary.
A link to your sales.html page
Be sure to also include a link to your index.html page on your sales.html pages as well.
Feel free to make this information up. Get creative, have fun, but remember to be professional.

Stretch Goals
Add the ability for your users to choose among multiple display or color profiles for the page. Clicking a button should allow them to choose (for instance) whether the text is dark on a light background, or the text is light on a dark background. You can also experiment with changing up the style: make a version of your display that mimics a newspaper, or an Excel spreadsheet, or Roman chiseling in stone. (But make sure the user can choose a more normal style, too!) You can also experiment with using a select input to choose the style.

Make a style guide, using this one that a team Brian was on made for Everlast as a model.

Make two additional pages:

Mock up an order form that would be public facing (store.html) so that visitors to the website can order salmon cookies and swag. That form would need to receive all of the things you’d expect on an order form: name, address, payment info, products to order, quantities, special instructions, and so on.
A second ‘private’ page (order-processing.html) that shows a list of pending orders and the individual order details. The business owner can then process the orders by clicking a button next to the order that then moves that list item to a ‘Filled Orders’ list at the bottom of the page.
Resources
The required assets for this project is located in your daily class repo on GitHub in the class-08/lab-b/assets/ directory.

Submission Instructions
Submit the link to your GitHub repo for this project
Add a comment to this Canvas submission with answers to the following questions
How did this go, overall?
What observations or questions do you have about what you’ve learned so far?
How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?
© Code Fellows 2020