let container2 = document.getElementsByClassName("container-2")[0];

//input box
let textarea = document.createElement('textarea');
textarea.setAttribute('class', 'class-textarea');
textarea.classList.add('gradient-background');
textarea.setAttribute('type', 'text');
textarea.setAttribute('placeholder', 'Injecting malware....');
container2.insertBefore(textarea, container2.firstChild);



//submit button 
let submit = document.createElement('button');
container2.insertAdjacentElement('beforeend', submit);
submit.innerHTML = "<a href='submit.html' target='_main'>RETRIEVE</a>"
submit.type = 'submit';
submit.classList.add('class-done-button');

//simulate typing
let arrayToDisplay = [
    'ATTEMPTING TO BYPASS FIREWALL SECURITY...',
    'EXTRACTING SENSITIVE INFORMATION...',
    'SYSTEM BREACHED, ACCESS GRANTED...',
    'SUCESS...10%',
    'UPLOADING MALICIOUS SOFTWARE...',
    'IDENTIFYING NETWORK VULNERABILITIES...',
    'SUCESS...17%',
    'DEACTIVATING ANTI-VIRUS PROGRAMS...',
    'PERFORMING REMOTE COMMAND EXECUTION...',
    'ANALYZING USER PASSWORD DATABASE...',
    'SUCESS...25%',
    'COMPROMISING SYSTEM INTEGRITY...',
    'DISABLING SYSTEM BACKUPS...',
    'INFILTRATING ADMINISTRATOR PRIVILEGES...',
    'SUCESS...38%',
    'REDIRECTING NETWORK TRAFFIC...',
    'INITIATING DENIAL OF SERVICE ATTACK...',
    'SUCESS...43%',
    'INSTALLING BACKDOOR ACCESS POINTS...',
    'ERASING DIGITAL FOOTPRINTS...',
    'INITIATING SYSTEM REBOOT SEQUENCE...',
    'SUCESS...50%',
    'CRACKING ENCRYPTION KEYS...',
    'EXPLOITING SOFTWARE VULNERABILITIES...',
    'SUCESS...59%',
    'SPOOFING IP ADDRESS...',
    'LAUNCHING PHISHING CAMPAIGN...',
    'SUCESS...64%',
    'INTERCEPTING COMMUNICATIONS...',
    'PLANTING TROJAN HORSES...',
    'SUCESS...72%',
    'EXECUTING SQL INJECTION ATTACK...',
    'ENGAGING IN SOCIAL ENGINEERING...',
    'INITIATING DATA EXFILTRATION...',
    'SUCESS...77%',
    'IMPERSONATING LEGITIMATE USERS...',
    'SUCESS...85%',
    'OVERWHELMING NETWORK INFRASTRUCTURE...',
    'SIDESTEPPING INTRUSION DETECTION SYSTEMS...',
    'BYPASSING BIOMETRIC AUTHENTICATION...',
    'SUCESS...89%',
    'INSERTING RANSOMWARE PAYLOAD...',
    'ERASING DIGITAL EVIDENCE...', 'INITIATING CYBER WARFARE PROTOCOLS...',
    'SUCESS...92%',
    'INFILTRATING TOP-SECRET DATABASES...',
    'SUCESS...94%',
    'EXPLODING DIGITAL DEFENSE PERIMETERS...',
    'OBLITERATING SYSTEM SECURITY PROTOCOLS...',
    'SUCESS...95%',
    'UNLEASHING DIGITAL CHAOS UPON NETWORKS...',
    'SUCESS...96%',
    'ENGAGING IN ADVANCED PERSISTENT THREAT...',
    'DESTROYING DIGITAL FORTIFICATIONS...',
    'SUCESS...97%',
    'EXECUTING HIGHLY SOPHISTICATED ATTACK VECTORS...',
    'SUCESS...98%',
    'OVERLOADING SERVER INFRASTRUCTURES...',
    'SEEDING CHAOS INTO DIGITAL ECOSYSTEMS...',
    'SUCESS...99%',
    'ERADICATING DATA INTEGRITY...',
    'SUCESS...99.50%',
    'SUBVERTING GLOBAL CYBER DEFENSE NETWORKS...',
    'INITIATING CASCADING SYSTEM FAILURES...',
    'SUCESS...99.90%',
    'DISMANTLING NETWORK DEFENSE GRID...',
    'SUCESS...99.99%',
    'PLUNGING DIGITAL LANDSCAPE INTO DARKNESS...',
    'SUCESS...100%'
]
// *********************TYPESENTENCE*************************//
async function typeSentence(j) {
    //get the element
    let textarea = document.getElementsByClassName('class-textarea')[0];

    //reset i to 0 at each recursive call
    let i = 0;

    //playsound for each sentences that display
    let body = document.body;
    playSound('images/typingSound.mp3');


    //set interval to display one sentence 
    let intervalId = setInterval(() => {

        //one alphabet at a time
        if (i < arrayToDisplay[j].length) {
            textarea.value += arrayToDisplay[j].charAt(i);
            i++;
        }

        //increase j to move to next sentence
        else {
            if (j < arrayToDisplay.length - 1) {
                j++;
                //clearInterval clears the previously active intervals
                //However, it doesn't halt the execution of the subsequent code outside of the setInterval 
                clearInterval(intervalId);

                //setTimeout is used to Display the sentence for exactly for 1 sec before being vanished
                setTimeout(() => {
                    textarea.value = "";
                    //recursive call to typeSentence to Display all the sentences 
                    typeSentence(j);
                }, 1000)
            }
            else {
                //clear the last active interval
                clearInterval(intervalId);
            }
        }
    }, 10)
}
// *********************TYPESENTENCE*************************//

const playSound = (sound) => {
    let audio = new Audio(sound);
    audio.volume = 0.1;
    audio.play();
}
const simulateTyping = async () => {
    typeSentence(0);
}
simulateTyping();

const GenerateBinarySequence = async () => {
    let intervalId1 = setInterval(() => {
        for (let x = 1; x <= 10; x++) {
            let newSpan = document.getElementById(`id-span${x}`);
            let num = "";
            for (let i = 0; i < 25; i++) {
                num += Math.floor(Math.random() * 2);
            }
            newSpan.innerHTML = num; // Assigning num to the innerHTML of the span
        }
    }, 100);
    setTimeout(() => {
        clearInterval(intervalId1);
    }, 1000 * 60 * 5);
}
GenerateBinarySequence();





