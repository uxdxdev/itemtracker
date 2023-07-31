![](./src/assets/banner.jpg)

Let your chat track your items and follow along during your runs!

## How do I use this?

- Request access for a trusted user (mod?) to update the [database](https://docs.google.com/spreadsheets/d/1_WhFuaqwixhp0ya8oOV_ECFGj1QhdQtukZq3P_VjYO8/edit?usp=sharing)
- Create a new sheet and name it something, the name will be used in the URL, e.g. if sheet name is `purplenurple` then you can see your tracker at `<domain name>/purplenurple`
- Use the Chrome browser to open the webpage, e.g. `<domain name>/purplenurple`
- In OBS use a `Window Capture` to capture the webpage
- Set items per row, then resize the browser window, and then crop the window in OBS to show only the section you need
- Open `chrome://flags/` in the browser
- Search for `Calculate window occlusion` and set to `Disabled`, this allows the webpage to keep updating in the background
- Leave webpage open in a browser window in the background so it can update automatically, don't minimise it


## Webpage

![](./src/assets/streamlabs-window-capture.PNG)

## Sheets (database)

![](./src/assets/item-tracker-sheet-database.PNG)

The webpage uses a Google Sheet as a backend

Link to Google Sheet https://docs.google.com/spreadsheets/d/1_WhFuaqwixhp0ya8oOV_ECFGj1QhdQtukZq3P_VjYO8/edit?usp=sharing

Insert any value, e.g. `x`, into the `done` column to turn that image from red to green on the webpage

To add new items to the database put in a `name` and `image` link, the webpage will automatically display the new item