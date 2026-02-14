# Bumble-Studio
Pattern of Thought Website

The website for Pattern of Thought is a website where it allows players to learn more information about people
with OCD (Obsessive-compulsive disorder); such as explaining what OCD is like and allows players to dive into 
the immersive experiences that is prepared for them. 
In the website, it also showcases a leaderboard, showing which players finishes top 5 in both their own exoeriences and overall game. Additionally, it also showcases your own personal timer for the respective
experiences.
There is also an about us that showcases the team members that are involved in this project and made sure that
this game is possible with their help.

Data Types: 
Explain the choice of data types for each key node and their relevance to functionality. 
Data types that are recorded:
  - Email (Used for user authentication and identification, linking players to their account) 
  - Username
  - Achievements
  - Scene entry ( Time they took for each scene)

Data Structure: 
Elaborate on the design considerations, scalability, and how the structure supports 
real-time and large-scale usage. 

- Players
  - Information 
    - Achievements
      - Badges_SceneName
        - Description
        - Scene Name
        - Title
    -Email
    -Scene Entry
      -Scenename
        -Best Time
    -Username


    

Application Data Flow: 
Describe how data is processed, stored, and retrieved within the application. 

Badges - When player has one the specific gameplay in a set amount of requirements 
such as doing it all under 3 miniutes, the achievement will then be issued to them, it is stored into the firebase.
It will be stored as the Scene name that they gotten the achievement. The achievement holds the scene that
they got it at, the name of the achievement called (E.g Fastest Park Cleaner, Completed the Park scene in under 3 min).

Scene entry - Scene which the player entered is shown, along with the best time being recorded of the player completing the scene.



Design Process 
The website was designed to be visually appealing, responsive, and user-friendly. Each page 
was developed with a clear purpose and smooth navigation in mind:
  • Login Page: 
      o Users can log in with email and password. 
      o Validation ensures empty or invalid fields are flagged. 
      o Linked to Firebase Authentication. 
  • Sign Up Page: 
      o Users can create a new account with a username, email, and password. 
      o Form validation is implemented to prevent incomplete submissions. 
      o Integrated with Firebase Authentication to store user credentials. 
  • About Us Page: 
      o Introduces the Team mission, goal, value, and team members. 
      o Engaging layout with hero banners and storytelling.
  • Leaderboard Page: 
      o Shows top scene completers with rankings, usernames, scenes, and time. 
      o Includes filter buttons to display results by scene type. 
      o Fully responsive table for desktop and mobile devices.
  • Home Page: 
      o Displays information about OCD.  
      o Clean, minimalist layout with monochrome backgrounds for visual appeal. 
      o Call-to-action buttons guide users to product pages or leaderboard.

  Features 
  • User Authentication: Login and Sign Up with Firebase. 
  • Badges: View badges obtained from hitting the requirment while in game.
  • Leaderboard: Live scene rankings with filtering options. 
  • Responsive Design: Fully functional across desktop, tablet, and mobile devices. 
  • Navigation: Collapsible hamburger menu for easy navigation on mobile. 


Github web - (https://github.com/ar4lym/Bumble-Studio)
Github unity - (https://github.com/ar4lym/IP2.2)

Technologies Used 
• Framework: Bootstrap 5 
• Database & Authentication: Firebase Realtime Database & Authentication 
• Charts & Visualization: Chart.js

System Requirments
- Database & Authentication: Firebase (Authentication & Realtime Database)
- Game Engine: Unity (XR / VR System)