## Rapport for testing av react-koden til gruppen 22.
   
   Notes og Todo sender inn en boolean for å vise de forskjellige “Modal”-komponentene, mens Events bruker en onClick i “Modal” for å endre en boolean som angir om den skal vises eller ikke.
   
   Når vi kjører testene vi har skrevet har vi fått følgende advarsler:
   
   
   EditNoteModal, ViewNoteModal og EditTodoModal:
   Warning: Failed prop type: Invalid prop `children` supplied to `GridColumn`, expected a ReactNode.
   
   I tillegg får dere klager på at dere har komponenter inn andre komponenter som ikke er lov. For eksempel ar dere ``` <a><a>link</a></a>```, altså en link inni en link, og det er ikke bra.
   
   I tillegg var det ikke mulig å teste routingen deres med det oppsettet dere hadde med BrowserRouter, så vi endre App.js for å kunne teste routingen. Testene kjører ihvertfall med denne routingen, men det er usikkert om det funker når man kjører applikasjonen.
   
   Vi tester at alle komponentene deres rendrer det de skal rendre ved å lage snapshots. På den måten kan dere enkelt sjekke om endringer dere gjør faktisk endrer det som skal endres, eller om dere “ødelegger” noe i komponenten.
   
   Vi har også testet at når man klikker på en knapp i <Todo />, så endres staten i ```<Todo />``` og props i ```<EditTodoModal />```. Og vi tester at når onChange kalles i ```<TodoInput/>```, så endres staten i ```<TodoInput/>```.
