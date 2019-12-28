
/*To enable the SpeechRecognition in Firefox Nightly > 72, go to about:config and 
switch the flags media.webspeech.recognition.enable and 
media.webspeech.recognition.force_enable to true.
*/

window.SpeechRecognition = window.SpeechRecognition ||window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
 recognition.interimResults= true; // allows you to get result of speech currently as you are talking

let p = document.createElement('p');
const paragraph = document.querySelector('.words');
paragraph.appendChild(p);
let x;

function check(e){

    const transcript = Array.from(e.results)
        .map(result=>result[0])
        .map(result => result.transcript).join(' ')

        p.textContent = transcript;

    if(e.results[0].isFinal == true){
    p = document.createElement('p');
    paragraph.appendChild(p)
    }
   
    
}
recognition.addEventListener('end', recognition.start)  
recognition.addEventListener('result', check)


recognition.start(); 