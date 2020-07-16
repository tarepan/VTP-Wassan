import { func1 } from "./func1";

console.log("this is index, hello webDev." as string);
const x1 = 11;

console.log(`${x1}, ${func1(x1)}`);

let deferredPrompt: Event | undefined;

// @ts-ignore
const addBtn: HTMLButtonElement = document.querySelector(".add-button");
addBtn.style.display = "none";
window.addEventListener("beforeinstallprompt", (e) => {
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = "block";

  addBtn.addEventListener("click", (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = "none";
    // Show the prompt
    // @ts-ignore
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    // @ts-ignore
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = undefined;
    });
  });
});
