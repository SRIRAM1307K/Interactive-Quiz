# 🎯 Interactive Quiz Web App


This project is a simple **interactive quiz web application** built with **HTML**, **CSS**, and **JavaScript**. It consists of 3 multiple-choice questions, each with three options. Users must answer all questions before they can submit the quiz. The quiz includes logic to evaluate the score and visually indicate performance based on the following criteria:

- 🔴 **Red color**: If the score is less than 0 (theoretically invalid, but included as a safeguard)
- 🟡 **Yellow color**: If the score is less than 3 (i.e., 1 or 2 correct answers)
- 🟢 **Green color**: If the score is perfect (3 out of 3 correct)

Additional features include:

- Alert if the user tries to submit without answering any question
- Submit button is only enabled once all questions are answered
- A separate result screen shows the final score with appropriate color feedback
- Reset and Close buttons to restart the quiz

This project demonstrates basic form validation, conditional styling, and DOM manipulation using plain JavaScript.
