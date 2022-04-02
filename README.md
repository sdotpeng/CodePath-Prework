# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Siyuan Peng**

Time spent: **8** hours spent in total

Link to project: https://glitch.com/edit/#!/chipped-salty-calliandra

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] List anything else that you can get done to improve the app!
- [x] Count the number of mistakes user has made, and reset to 0 when game is restarted 

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
1. The first gif file shows the full process of my game from start to win. As you can see that, HTML elements have been modified including title's fontsize, color, background color, start and stop button's style (shape, color, shadow, boarder), and game button's style (shape, color, shadow, boarder). There is also a paragraph below gamebuttons that indicates the number of mistakes. An additional gamebutton has also been added. Moreover, gamebutton appearance has been changed. When the user presses the button or program "presses", gamebutton will be larger. When the user finishes all the pattern, win message shows up. Pitches of each gamebutton have been changed, reflected in sound and code (not in gif).
![](FullProcess.gif)

2. The second gif shows the mistake counter and how game is stopped when the number of mistakes is greater than 3. When user makes mistake, the mistake counter increases and updates the text below gamebuttons. When user makes three mistakes, the game is over and lost message pops up. When the users presses stop and start again, the counter returns to 0, as shown in the gif.
![](MistakeCounter.gif)

3. This gif verifies that the game is restarted to initial state when user presses stop and start at any time. As we can see, the game starts again from the first button when user presses stop and start button during the game. 
![](Restart.gif)

1. I added two more features as the final stage of my project. This gif is a good demonstration. Now, the pattern is randomized everytime when user starts the game. The game also gets speeded up sequentially, the closer the user is close to victory, the faster the buttons are played. As you can see from the gif, the first few start-stop showed different beginning pattern, and when I settled down with the last trial, as game moved forward, you can see the game speed got faster. (Note: these two features were added after the time when above three gifs were made).
![](RandomFaster.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
* For my Start and Stop button, I modified and used the style of "Button 33" from https://getcssscan.com/css-buttons-examples.
* For updating the number of mistake information, I searched about updating HTML paragraph text and learnt from https://www.tutorialkart.com/javascript/how-to-change-text-in-paragraph-using-javascript/.
* For changing the pitch sounds to "Do-Re-Mi", I referred to the frequency value here: https://www.howmusicreallyworks.com/Pages_Chapter_4/4_1.html.
* For using more choices of color supported by CSS, I referred to https://www.w3.org/wiki/CSS/Properties/color/keywords.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

Overall, the project was not tough. I had no trouble making the base by following the directions. When I tried to implement the option of showing a Game Over popup after three mistakes, as well as the added feature of counting the mistake and updating its number below all five gamebuttons, I ran into some issues.
I had trouble updating the number of mistake on the webpage when I used ``loseCounter`` variable to keep track of the number of mistake user made. The "Mistake: _" message did not update to 3 when the game ended, and I later discovered that there was no code to update the mistake number by reading the code again and following the code route. Then I added some codes to update the number when game ended, but I ran into the same issue. Therefore, I tried to debug by printing out the number of mistakes when game ended, and it was indeed three. To solve this, I put myself in the code and supposed that there was already two mistakes, and tried to follow the code path. I realized that it was because the loseGame() function was called before updating the message, so the message got reset to "Mistake: 0" as in the beginning. Therefore, I switched their position and it worked fine. This problem encouraged me to look into more edge cases. I started looking into all of the possibilities for changing the amount of mistakes, and I discovered that I had also forgotten to reset the number of mistakes to 0 when the game started. I was also undecided on whether I should reset it when the stopButton is pressed or when the startbutton is pressed. After putting myself in the shoes of a player, I noticed that when they quit the game, they might want to view the mistake number. They wouldn't be able to see this information if I reset the value when the stopButton was pushed. As a result, I decided to reset when the startButton was pressed.
The rest of optional features were simple to finish, so I had no problems.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Although having heard a lot, this was my first time that I actually used HTML to define elements structure, content, CSS to define style, and JavaScript to define the interactive process, all in one project. I was amazed that how JavaScript kinds of integrates the style and content of a website and created an interative environment for website users. Now, I could imagine to use what I learnt to create website that can show information in delightful style and that allows users to interact with. However, I am curious about the following about web development. 
    * How do I add advanced types of elements on webpage? For example, embedded pdf/image viewer, file selector, or embedded youtube window?
    * How does the webpage store and present customized data tailored for different users? Many websites are not static which only show static information. Instead, they can show different information from different users on the same website. I wonder how JavaScript retrieves data from server's database and how it parses and controls the content and style to present different information.
    * I want to know how industrial level website is designed. Do they write CSS and HTML from scratch? Is there any faster way to design advanced website like Youtube?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

First, I want to add more features to it. Specifically, I want to add the feature of "Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)" because this also gives more entertainment. I thought about using a list like structure containing multiple pitches as the value of different button. In this way, whenever a button is pressed, a list of pitches will be played. I also want to add the feature of timer. I feel like user will have more fun in playing because it increases the difficulty. I would definitely implement this feature if I have time.
Second, I want to refactor my guess function because it has some duplicate codes that may be removed after more time of inspection. For example, ``progress++;playClueSequence();`` showed up twice in some nested conditionals. From my experience in Python and Java programming, I think refactoring can be made to remove duplicate and increase readability.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/cf044122798c466c9bf0ca9197e4a19d)


## License

    Copyright Siyuan Peng

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.