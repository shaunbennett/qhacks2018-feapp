# Skool

## Inspiration
Course selection sucks.

Currently at Queens University, course information each term is distributed to students through a large PDF document. This forces students to scan through over 200 pages, deciding which courses sound interesting, and then asking their friends for recommendations and opinions. This is not a fun process, Skool is designed to be a social platform to solve this.

## What it does
Skool is a service that provides university students with course information and tools to help make the time in university a little bit easier. Students can view a list of all courses and search by course name or course id. Then you can view all the details about the course - titles, descriptions, course offerings (along with professor teaching them), and course enrollment stats (are there open spots in the course?).

Beyond that, students can rate courses on different metrics (how hard the course was, would they recommend the course, was it useful?), rate professors, 

## How we built it

The app was built using React on the front-end, Firebase as a back-end, and is connected to a custom Facebook Application to allow for social logins.  Our work on the app came in stages, and fortunately our team had members with different skill-sets that allowed us to delegate tasks and work efficiently.  The first stage of the application was information gathering.  For this, we used a pdftotext software and a couple of python scripts to automate the generation of nicely-formatted json documents from the Queen’s university ‘courses of instruction’ pdf.

While this was happening, another member of the group was working on getting the development environment (both front-end and back-end) set up, and another was working on first versions of the designs.  Once this was done, we went through many iterations of design, and front-end development before time was up and we arrived at our final product.

## Challenges we ran into

A major roadblock we had to overcome was styling SVGs to be responsive. It tested our patience and we finally solved this problem in the tried-and-true way of hacking: extensive Googling. 

We also had a bit of trouble setting up the Facebook OAuth with React, and once again through extensive searches on Stack Overflow, we found solution.


## Accomplishments that we're proud of

We are proud that we have created a solution to a problem that affects hundreds of thousands of students across the continent. We are all very passionate about Skool and can personally empathize with the out-of-date course selection UX offered at our universities. We are also proud of our front-end and design of the site which we poured many hours into, transforming paper sketches into digital reality.

## What we learned

The power of friendship trumps all. 

Technologically, we exploited many resources such as Firebase and Facebook OAuth, learning a great deal by incorporating these into our web app. We also learned how to use React and Git throughout the process of creating Skool. Lastly, we found that time was a crunch and understood the importance of having a demo-able product and prioritizing a proof of concept model over being pedantic on small details. 

## What's next for Skool

Skool is designed to be easily scalable to universities across North America. It will be the one-stop spot for course planning where students will be able to view what classes their friends are taking and browse reviews specific to each section and professor. 

By having basic course and profile data on an entire student body, we expect to receive large interest and buy-in from employers and the universities themselves. Skool would partner with companies and recommend recruitment notices to students based on their class history and major. Universities would be able to gather meaningful insight into teaching performance and course enrollment trends. 
