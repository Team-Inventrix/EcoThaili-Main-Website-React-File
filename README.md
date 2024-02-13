<p align="center">
	<img src="./public/assets/logo.png" alt="homescreen" width="370" height="auto">
  <h1 align="center">EcoThaili (Ikō thailī)</h1>
</p>

<p align="center">
Our mission is to protect our only planet, by creating eco-friendly plastic from banana crop waste.
<br>
 It's not just a bag; it's a promise to nurture our planet. Every use is a step towards a cleaner, greener future. 
 <br>
 Together, let's make a difference.
<br>
🌿#EcoThaili #BeatPlasticWithUs
</p>

## Comprehensive Guide to Setup the Project in Our Local Machine

This guide will walk you through the steps to set up the project on your local machine.

## Prerequisites
Make sure you have the following installed on your machine:
- Node.js
- npm (Node Package Manager)
- git (If you want to upload you changes through the terminal)

## Steps
0. **Pre Cloning Steps** (For new to GitHub)
   - If you are new to GitHub then, you probably don't know about GitHub, so follow these steps:
      - First Download & Install git from [git](https://git-scm.com/downloads)
      - Now to know if you hav install git correctly or not you can check this by running following command in you terminal (Command Prompt):
         ```
          git -v
        ```
        This will show something like
             ```
             git version 2.41.0.windows.3
             ```
          This means you have install git successfully else you have to uninstall the git and again re-install (Pro Tip only for windows user: If you have installed the git and you are not getting the version then add the git path to the environment variable. Here git path means the location to you computer where you have installed your git. After you get the path follow with this video to set environment variable https://www.youtube.com/watch?v=ow2jROvxyH4 )

      - Second Download &  Install Node.js from [nodejs](https://nodejs.org/en/download) (This will automatically install npm to your local machine)
      - Again we need to check if npm and node js is installed correctly or not. So to do that run the following command in you terminal:
        ```
        npm -v
        node -v
        ```
       This should also need to give you the version which looks like
         ```
         10.2.0
         ``` for npm and  ```
         v18.17.0
         ``` for node
       If you get the error then navigate where you have installed node.js file, then copy the path location, add that path to environment variable (Only for windows user.)

      - Now Download & Install VS code from https://code.visualstudio.com/download. When Installing remember to check all the boxes in which will be in "Select Additional Tasks" or view image below:
      ![VS code Installation Process Must Need to Do](https://web.njit.edu/~mjk76/teaching/cs490-sp23/tutorials/assets/week1-getting-started/vsc/additional-tasks.JPG)

      - If you do so, you will get the vsCode desktop icon, and when you right click  on the desktop or anywhere, you will get the option of Open with Code as shown below (in windows 10): <br>
      ![VS code open with option when you right click ](https://filestore.community.support.microsoft.com/api/images/e03e3480-0bfe-42ff-9971-fbb3396a5eca)
      <br> (For windows 11): You need to click on "Show more options" and you will see the options as above images <br> ![Process to open VS code in Windows 11 ](https://i.stack.imgur.com/LonDf.png)

     - Now first go to the directory where you need will be saving this project.

     - And right click on the directory slect "Open with Code" and click the shortcut key 'ctrl' + ` (control key and backtick key, this is usually below the esc key in the keyboard). Look the image below on where you can find backtick key in most of the keyboard layout<br>
     ![Backtick key location in most of the QWERTY keyboard ](https://macautomationtips.com/wp-content/uploads/2015/08/backtick-key-e1439405041467.jpg)

     - This will then open terminal within your VS code <br>
     ![Terminal in windows ](https://i.ytimg.com/vi/YeZrd_9qh0c/maxresdefault.jpg)
     
     - Now, you are ready to clone the repository

1. **Clone the Repository**: 
   - Open your terminal or command prompt. (If you are comming from step 0 you don't need to reopen terminal)

   - Navigate to the directory where you want to clone the repository.

   - Run the following command:
     ```
     git clone https://github.com/Team-Inventrix/Team-Inventrix-Main-Website-React-File.git
     ```
   Here `https://github.com/Team-Inventrix/Team-Inventrix-Main-Website-React-File.git` is the URL of the GitHub repository from where we will be cloning the project to our local machine.

2. **Install Project Dependencies**:
   - After the cloning is completed! you will get a file and you have to navigate into that project directory:
     ```
     cd team-inventrix-main-website
     ```
   - Run the following command to install project dependencies specified in `package.json`:
     ```
     npm install
     ```

3. **Install Material-UI**:
   - Material-UI is a popular React UI framework which is what we will be using in this project.
   - Run the following command to install Material-UI dependencies (If you don't install this, you will get a beautiful read screen with a bunch of errors, so make sure to install this before running this project.):
     ```
     npm install @mui/icons-material @mui/material
     ```

4. **Install React Scroll**:
   - React Scroll is a library used for smooth scrolling within the application.
   - Run the following command to install React Scroll:
     ```
     npm install react-scroll
     ```

5. **Install Image Slilder**:
   - used as slider library 
     ```
     npm install react-swipeable-views-react-18
     npm install --save react-swipeable-views-utils
     ```

6. **Run the Application**:
   - After the installation is complete, run the following command to start the development server (If the error arises at this point, then remember that there are other things to install on your local machine, so for that, either you can go through the error and try to install what it is actually wanting from you, or you can contact the developer, @Ningsang-Jabegu or @roshan770, for the error to be solved. But this is a rare case; we will be updating this file as we progress with the web development. For those who are new to web development, each time you pull from this repository, please keep an eye on this file so that you won't get distracted by the errors.):
     ```
     npm start
     ```
   - This will start the development server and open the application in your default web browser.

7. **View the Application**:
   - Once the development server has started, you can view the application by navigating to `http://localhost:3000` in your web browser.

8. **Explore the Code**:
   - You can now explore the project files and make any necessary modifications using your preferred code editor.

9. **Build for Production** (Optional & not required to do this step, but this will be automatically build by vercel itself in our case):
   - If you want to build the project for production, you can run the following command:
     ```
     npm run build
     ```
   - This will create a build folder containing optimized production-ready files.

10. **Additional info to Build** :
   - Now you can change the code, and its content for the project.
   
   - If you did run the build command and get the build folder, for your knowledge, when we push the code without running build, actually, Vercel in our case will first run the build command itself, and it will get the optimized HTML, CSS, and JS, which is what will be rendered in the final deployment.
   - The website that we see at final is not our code that we have pushed or is pushing in this repo, but actually it is the build version of our React project. I hope you guys (especially those who are beginners in front-end or web development) understand!

11. **Initial commit to the GitHub** (Begineer's Step) :
    - If you are trying to push your change for the first time then run the command:
      ```
      git remote add origin https://github.com/Team-Inventrix/Team-Inventrix-Main-Website-React-File.git
      ```
    - Since this is your first time push to this repository you need to setup your username and email, so to do that follow 
      ```
      git config --global user.name "<user-name>"
     
      git config --global user.email "<email address>"
      ```
      
add your email address here which should be enclosed in quotes. <br><br>(Pro Tips: instead of using your personal email address, you can also use the email address that is generated to you by the GitHub. You can find this in https://github.com/settings/emails and look at them 'Emails' there you will see your email id followed with '- Primary'. And just move your eye down there you will see 'Not visible in emails' bullet point you can get something like 86409265+Ningsang-Jabegu@users.noreply.github.com , you can also use this if you don't want to add your email id directly )

    - While doing this steps you will be asked to authorize the git from your browser, do so and follow the prompt as instructed in the terminal for this.

    - Now you are finally ready to push you code to the GitHub. Remember these steps if you done once, you are now set and do not need to do anything stated in the step 10. You can directly jump from step 9 to step 11 for next time

12. **Commit your change to the GitHub** :
    - Since for development, we are using dev branch so to create a new branch run the command :
      ```
      git branch -m main
      git checkout -b dev
      git status
      ```
      now you will see "On branch dev" "Your branch is up to date with 'origin/dev'"

    - And after successfully making a branch run the following command :
      ```
      git add .
      git commit -m "<nature_of_commit>: I have successfully committed my first change to this reposiitory."
      ```
      [Conventional commit guide](https://www.conventionalcommits.org/en/v1.0.0/)
      Here you need to remember that we will be following the commit convention so the text withing quotation is the comment that you will be uploading with your work. And the better way of writing convention is in the format

      ```
      <type>[optional scope]: <description on what you did in this change>
      ```

      For additional info on how other &lt;type> of convention visit https://www.conventionalcommits.org/en/v1.0.0/

    - Run the following command to pull the changes that has happened when you were doing changes (This is important step to do before pushing you changes else you will sometimes get an error) :
      ```
      git pull origin main
      ```
        If you get any error when doing so it is probably that you have done something wrong on it. (please contact other developers)
    
    - Run the following command to push your changes to the GitHub (Use this code if you are pushing for the first time else use the next code below)
       ```
       git push --set-upstream origin dev
       ```
       (Use this if your are regular contributor)

       ```
       git push origin <name_of_current_working_branch>
       ```
      After you do this you need to see something like this <br>
      <br>
     ![Terminal in windows ](https://www.c-sharpcorner.com/article/learn-git-clone-commit-sync-and-push-changes-using-visual-studio-code/Images/36.png)
     <br>
     If you got an error then search that error on what the error is saying and go discuss with other developer in [Discussion](https://github.com/orgs/Team-Inventrix/discussions/categories/q-a)

### Boom Ya 🚀, Its time to raise PR

> [!IMPORTANT]
> PR must be from branch where you have pushed your changes, to the base branch of our repository ie, main branch.

## Additional Notes
- Make sure to consult the project's documentation or README for any specific instructions or requirements.
- If you encounter any issues during setup or while running the application, refer to the project's issue tracker or seek help from the project maintainers.
