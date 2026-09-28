# 🖼️ Image Gallery

 A simple and responsive **Image Gallery** built using **HTML5, CSS3, and JavaScript**.

 The project demonstrates the use of **CSS Grid**, responsive layouts, JavaScript click events, and a basic **lightbox image preview**.

 ## 📌 Description

 This project displays multiple images in a responsive grid layout. Users can click on any image to open a larger preview in a modal/lightbox.

 The preview can be closed using the close button, by clicking outside the image, or by pressing the `Escape` key.

 ## 🎯 Objective

 The main objectives of this project are to practice:

 - CSS Grid
- Responsive web design
- JavaScript click events
- Modal/lightbox interaction
- DOM manipulation
- Image accessibility using `alt` text

 ## ✨ Features

 - 📱 Fully responsive image grid
- 🖼️ 8 images included
- 🔍 Clickable image preview
- ❌ Close button for the preview
- ⌨️ `Escape` key support
- 🖱️ Close preview by clicking outside the image
- ✨ Hover effect on gallery images
- ♿ Alt text for every image

 ## 🛠️ Technologies Used

 - **HTML5** — Structure of the webpage
- **CSS3** — Styling, CSS Grid, animations, and responsive design
- **JavaScript** — Image preview and user interactions

 ## 📂 Project Structure

```
Image-Gallery/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

 ### `index.html`

 Contains the structure of the image gallery and the lightbox/modal.

 ### `style.css`

 Contains:

 - Gallery grid layout
- Responsive media queries
- Image hover effects
- Modal styling
- Close button styling

 ### `script.js`

 Handles:

 - Image click events
- Opening the image preview
- Closing the preview
- Escape key functionality
- Clicking outside the image to close the preview

 ## 🚀 How to Run

 1. Download or clone this repository.
2. Open the project folder.
3. Make sure these files are present:

```
index.html
style.css
script.js
```

 4. Open `index.html` in your web browser.

 No server or additional installation is required.

 ## 📱 Responsive Design

 The gallery automatically adjusts according to screen size:

 | Screen Size | Columns |
| --- | --- |
| Desktop | 4 |
| Tablet | 2 |
| Mobile | 1 |

This is achieved using CSS Grid and media queries.

 ## 🖼️ Image Preview

 When a user clicks an image:

 1. JavaScript detects the click.
2. The modal is displayed.
3. The selected image is displayed at a larger size.
4. The user can close the modal using:
   - Close (`×`) button
   - Clicking outside the image
   - `Escape` key

 ## 📚 Learning Outcomes

 After completing this project, you will have practiced:

 - Creating layouts with CSS Grid
- Making websites responsive
- Selecting HTML elements with JavaScript
- Adding event listeners
- Manipulating CSS classes with JavaScript
- Creating a basic modal/lightbox
- Improving image accessibility with `alt` attributes

 ## 🔮 Future Improvements

 Some possible improvements include:

 - Add previous/next navigation buttons
- Add image captions
- Add image categories and filtering
- Add a search feature
- Add image upload functionality
- Add keyboard navigation
- Add smooth modal animations
- Replace external images with locally stored images

 ## 📄 License

 This project is created for **learning and practice purposes**.
