# Notes Application

This is a simple, interactive note-taking application built with React. Users can create, update, and delete notes. The notes are color-coded, making it easy to categorize different types of notes. Additionally, all notes are saved in the browser's `localStorage`, ensuring persistence even after a page refresh.

## Features

- **Create Notes**: Click on the plus icon in the sidebar to create a new note. You can choose a color to categorize your note.
- **Update Notes**: Modify the text in any note, and the app will automatically save your changes.
- **Delete Notes**: Remove a note by clicking on the trash icon.
- **Persistent Notes**: Notes are stored in `localStorage`, so they persist across page reloads.
- **Dynamic Sidebar**: Toggle the color options by clicking on the plus icon, and select a color to create new notes with that color.

## File Structure

- `App.js`: The main component that controls the overall structure of the application, including note creation, deletion, and updating. It also manages `localStorage` integration to save and retrieve notes.
- `components/Note/Note.js`: The component that renders individual notes. It includes features like text updates, date formatting, and note deletion.
- `components/Notecontainer/Notecontainer.js`: This component handles the display of all notes in reverse order (newest first).
- `components/Sidebar/Sidebar.js`: A sidebar component that allows users to select a note color and add new notes.
- `styles`: Custom CSS files for each component to manage the styling and layout of the app.

## How to Run

1. Clone the repository:
    ```bash
    git clone https://github.com/jaahnvisharma0304/notes-app.git
    cd notes-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the application:
    ```bash
    npm start
    ```

4. Open the app in your browser at `http://localhost:3000`.

## Customization

You can easily customize the app to suit your needs:

- **Colors**: Modify the `color` array in `Sidebar.js` to add more colors or change existing ones.
- **Note Structure**: Edit the `defaultNote1`, `defaultNote2`, and `defaultNote3` objects in `App.js` to change the default notes.
- **Styling**: The app uses custom CSS for styling, located in the `styles` folder. Feel free to modify these styles to match your design preferences.

## Future Enhancements

- **Search Functionality**: Implement a search bar to quickly find notes based on their content.
- **Tagging System**: Add tags to notes for better categorization and filtering.
- **Reminders**: Add a feature to set reminders for specific notes.
