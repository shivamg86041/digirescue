const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning sir");
    }

    else if(hr == 12) {
        speak("Good noon sir");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon sir");
    }

    else {
        speak("Good Evening Sir");
    }
}

window.addEventListener('load', ()=>{
    speak("Welcome to seava");
    wishMe();
    speak("How may I help you");
  
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})


function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    //speech.text = "I did not understand what you said, please try again.";

    if (message.includes('current status of disasters') || message.includes('emergencies in my area')) {
        // Implement logic to fetch and provide the current disaster status in the user's area
        const finalText = "There is no emergencies in your Area Ghaziabad";
        speech.text = finalText;
    }
    else if(message.includes('my location')) {
        window.open(`http://maps.google.com/?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "getting your location";
        speech.text = finalText;
    }
    else if(message.includes('hello' || 'hii' || 'hey' || 'kaisan ba' || 'kaise ho')) {
       
        const finalText = "hello sir, How can I assist you today";
        speech.text = finalText;
    }
    else if (message.includes('evacuation order') || message.includes('shelter information')) {
        // Implement logic to provide evacuation order or shelter information for the user's location
        const finalText = "DR shelters are used to provide private and secure places for people to live who have left or lost their usual accommodations as a result of some form of disaster.";
        speech.text = finalText;
    }

    else if (message.includes('latest weather') || message.includes('safety alerts')) {
        // Implement logic to provide the latest weather and safety alerts for the specified city/region
        const finalText = "getting the latest weather in your area. There is no safety alert in your area ghaziabad!!";
        speech.text = finalText;
    }

    else if (message.includes('road closures') || message.includes('alternative routes') || message.includes('disasters nearby')) {
        // Implement logic to provide information on road closures and alternative routes due to disasters
        const finalText = " No disaster found in your Area Ghaziabad!! so no alternative routes are required";
        speech.text = finalText;
    }

    else if (message.includes('emergency medical facility') ||message.includes('emergency medical facilities')|| 
    message.includes('first aid centers') || message.includes('first aid center')|| message.includes('nearby Hospital')|| message.includes('nearby Hospitals')|| message.includes(' Hospital')|| message.includes(' Hospitals')|| message.includes(' Hospitals near me')|| message.includes(' Hospital near me ')) {
        // Implement logic to provide information on nearby emergency medical facilities or first aid centers
        window.open(`http://maps.google.com/?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "The nearby hospital from your current location , Ghaziabad";
        speech.text = finalText;
    }

    else if (message.includes('trapped in a building') || message.includes('earthquake') || message.includes('fire in my area')) {
        // Implement logic to provide guidance on what to do if trapped in a building during an earthquake or fire
        const finalText = "If indoors DROP to the ground take COVER by getting under a sturdy table or other piece of furniture and HOLD ON until the shaking stops If there is no a table or desk near you cover your face and head with your arms and crouch in an inside corner of the buildingProtect yourself by staying under the lintel of an inner door in the corner of a room under a table or even under a bedStay away from glass windows outside doors and walls and anything that could fall (such as lighting fixtures or furniture)Stay in bed if you are there when the earthquake strikes Hold on and protect your head with a pillow unless you are under a heavy light fixture that could fall In that case move to the nearest safe placeUse a doorway for shelter only if it is in close proximity to you and if you know it is a strongly supported load-bearing doorwayStay inside until the shaking stops and it is safe to go outside Research has shown that most injuries occur when people inside buildings attempt to move to a different location inside the building or try to leaveBe aware that the electricity may go out or the sprinkler systems or fire alarms may turn onIf outdoors Do not move from where you are However move away from buildings trees streetlights and utility wires If you are in open space stay there until the shaking stops The greatest danger exists directly outside buildings at exits and alongside exterior walls Most earthquakerelated casualties result from collapsing walls flying glass and falling objects If in a moving vehicle  Stop as quickly as safety permits and stay in the vehicle Avoid stopping near or under buildings trees overpasses and utility wires Proceed cautiously once the earthquake has stopped Avoid roads bridges or ramps that might have been damaged by the earthquake  If trapped under debris  Do not light a match Do not move about or kick up dust Cover your mouth with a handkerchief or clothing Tap on a pipe or wall so rescuers can locate you Use a whistle if one is available Shout only as a last resort Shouting can cause you to inhale dangerous amounts of dust";
        speech.text = finalText;
    }

    else if (message.includes('contact information') || message.includes('emergency services')) {
        // Implement logic to provide contact information for local emergency services
        const finalText = "Emergency Services App Go to your mobile devices app store search for an official emergency services app download and install it then open to access contact info Emergency Contact Card Check with local government pick up a card and keep it in your wallet or vehicle Local Directory Assistance Dial regional directory assistance eg 411 in the US and ask for local emergency services contact info Community Resources Visit local community center library or municipal office for emergency info Local Government or Emergency Management Agency Contact them directly for uptodate contact details";
        speech.text = finalText;
    }

    else if (message.includes('emergency kit') || message.includes('supplies')) {
        // Implement logic to provide recommendations for emergency kits and supplies for the user's location
        const finalText = "In an emergency, prepare for self-sufficiency for 72 hours with essential supplies like food, water, flashlight; ensure easy access and consider separate backpacks for portability.";
        speech.text = finalText;
    }

    else if (message.includes('help my neighbour') || message.includes('community during a disaster')) {
        // Implement logic to provide suggestions on how to help neighbors or the community during a disaster
        const finalText = "If comfortable, meet neighbors before disaster discuss plan neighborhood work together after disaster until help arrives ideas discuss include identify neighbors special skills doctors nurses amateur radio consider neighbors special needs disabled elderly persons make plans temporary child care case parents cant get home list specialized equipment generators power saws etc and other resources that might help in a crisis share information batteryoperated radios and communications capabilities walkietalkies etc develop an inventory of first aid equipment supplies identify potential cooking alternatives outdoor grills propane tank supplies etc make arrangements to check on pets in the neighborhood discuss potential security and safety issues downed power lines collapsed structures gas leaks etc working together as a team after disaster strikes can significantly improve your ability to survive and help you recover more quickly";
        speech.text = finalText;
    }

    else if (message.includes('air quality conditions') || message.includes('wildfires') || message.includes('industrial accidents')) {
        // Implement logic to provide information on current air quality conditions
        window.open('https://www.google.com/search?q=air+quality+index+ghaziabad&sca_esv=566920415&rlz=1C5CHFA_enIN1025IN1025&sxsrf=AM9HkKnP99ery9nswDejBC8gCQjihTXq-A%3A1695214154472&ei=SuoKZfOwHJ2V4-EPhIazyAM&llpgabe=CgkvbS8wNmRsbTE&oq=Air+Quality+Index&gs_lp=Egxnd3Mtd2l6LXNlcnAiEUFpciBRdWFsaXR5IEluZGV4KgIIATIREAAYigUYsQMYgwEYyQMYkQIyCxAAGIoFGJIDGJECMgsQABiKBRiSAxiRAjIIEAAYigUYkQIyBxAAGIoFGEMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEjcR1CqCFjqM3ACeAGQAQCYAcUCoAGSGaoBCDAuMTQuMy4xuAEDyAEA-AEBqAIUwgIHECMY6gIYJ8ICFhAAGAMYjwEY5QIY6gIYtAIYjAPYAQHCAhYQLhgDGI8BGOUCGOoCGLQCGIwD2AEBwgINEC4YigUYxwEYrwEYJ8ICBxAjGIoFGCfCAhQQLhiKBRixAxiDARjHARjRAxiRAsICCxAAGIAEGLEDGIMBwgILEC4YgAQYsQMYgwHCAgsQABiKBRixAxiDAcICGhAuGIoFGMcBGK8BGJcFGNwEGN4EGOAE2AECwgIEECMYJ8ICDRAuGIoFGMcBGK8BGEPCAgoQABiKBRixAxhDwgIQEC4YigUYsQMYgwEY5QQYQ8ICExAuGIoFGLEDGIMBGMcBGNEDGEPCAg0QABiABBgUGIcCGLEDwgILEAAYigUYsQMYkQLCAhYQLhiABBgUGIcCGLEDGIMBGMcBGNEDwgINEC4YigUYxwEY0QMYQ8ICDRAAGIoFGLEDGIMBGEPCAhAQABiKBRixAxiDARjJAxhDwgIIEAAYgAQYkgPCAgcQABiABBgK4gMEGAAgQYgGAboGBggBEAEYC7oGBggCEAEYFA&sclient=gws-wiz-serp')
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }
    else if(message.includes('what is') || message.includes('who is') || message.includes('what are') || message.includes('which are')||message.includes(' ')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('open maps')){
        window.open(`https://www.google.com/maps${message.replace("Maps ", "")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    
    }
    else {
        
        const finalText = "Sorry I am unable to find what you are looking for! ";
        speech.text = finalText;
    }



    // Add more disaster-related query handling logic as needed

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 0.7;

    window.speechSynthesis.speak(speech);
}
