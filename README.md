# w02-accessible-image-slider -

> emoji toolbox  
> 🟢🟠🔴

## Requirements checklist

🟠 Implement responsive design methods to ensure the website works well on both small mobile screens and larger desktop screens (e.g., above 800px).  
🟢 Implement at least one meaningful media query so that there is a noticeable change between mobile and desktop view (an example is to change where the ‘thumbnail bar’ is positioned).  
🟢 Ensure all images have appropriate alt text attributes for accessibility.  
🟢 Correctly use event handlers to switch images based on user interactions.

### Stretch requirements

🔴 Use ‘srcset’ to specify which image will be used based on the size of the screen for optimal viewing experience.  
🟠 Add ARIA elements to improve accessibility, such as aria-label, aria-live, and other relevant attributes.  
🟢 Implement key bindings for buttons to enhance navigation, such as using arrow keys to switch between images.  
🟢 As as self-imposed challenge to improve my weak knowledge of JS, I'd like to make it reusable and dependent on only one "setup" HTML element

## Reflection

> tl;dr the eyes were bigger than the stomach

Okay goofballs let's spin y'all a tale of ultimate hubris and nefarious scope creep, 'cause ya gal's got some terrible practices and mistakes to admit to.

As noted above in the "stretch requirements" section, I wanted to take this opportunity to push myself with JavaScript, as I know my ability with it is quite limited.  
The plan was as follows - plan an image gallery that can be slotted into a container and does not specifically rely on any other page elements, the way plugins like Lightbox or Glide might, and as a bonus make it configurable enough that I could later chuck in a way to feed a JSON file in with the required parameters if I so desired, all whilst not straying from the JS-only requirement.  
Let me be clear: this was going to be a problem.

To start with I had a relatively easy time with setting up a main image container and looping through an array of objects to insert a list of thumbnails, all of which contained the require alt text. Honestly this required some planning and forethought that I did not expect, as the context-ignorant solutions I tended to come up with required the DOM already being in a specific state, and I believe I need to improve upon this by either adding more DOM awareness to each new element to be inserted or building an array of complete img elements and looping to insert 'em? idk. Adding a media query to make the mobile view take up the entire viewport was also simple, although would come back to bite me as the complexity grew. At this point I started mulling ideas on how to differentiate the mobile vs desktop views, and I came unstuck.

The wish was to have a classic Win95 styling for desktop view, complete with appropriate layout and some configurable objects to be used for the taskbar and notification tray items. I got so lost in the sauce with figuring out how to construct the start bar essentially from scratch in JS, and while I learned a good deal from this torture I acknowledge that at this point I had started to stray from the original spec fully into Playing About territory. Regardless, I treated the taskbar and notification tray items in the same way I handled the image list array: looping through, fetching the data I needed, and inserting an element into the DOM where needed. I cannot stress how significant an amount of time I spent learning to build and organise the construction of the start bar. Unnecessary headache.

For mobile view I originally had visions of making it look vaguely like the iOS image gallery or something, but that goal soon disappeared as I sunk more time into the chaos described above, so stayed with relatively vanilla behaviour for the browser, with a lightly-styled thumbnail scroller at the bottom. I wanted to make a custom scrollbar for these too, but the time it would have taken me to learn would have eaten in to the already-delayed next steps, so I chose to rely on system default behaviour.

Lastly came retrofitting the appropriate aria properties, and I could have saved myself a lot of hassle by using semantic elements right off the bat. I had to change the thumbnail slider to be a ul with li children containing the images, and the completely different structure of the mobile vs desktop necessitated some refactoring and bodgy decisions, and my JS-focused approach really got in the way here. Chrome's Lighthouse feature proved invaluable in these earlier stages to fix obvious mistakes.  
The MDN for ARIA includes the following quote:

> "No ARIA is better than bad ARIA."

I tried to keep this in mind as I rectified issues and added information to the page, so correct semantics became the focus. Even so, by the time I write this I have not fixed many problems.

I think the troubles that arose from my poor planning highlight a key issue and a significant lesson I have to take heed of:  
Ultimately as time grew on, the accessibility of the design became an afterthought - secondary to whimsical fancies and a low understanding of the actual needs of users - and for that I am disappointed in myself.

marisa 🐈‍⬛
