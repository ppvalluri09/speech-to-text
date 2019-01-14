function setup() {
  // put setup code here
  noCanvas();
  let lang = navigator.language || 'en-US';
  let speechRec = new p5.SpeechRec(lang, gotSpeech);

  
  function voiceReady(){
	  
  }
  let cont = true;
  let interim = false;
  speechRec.start(cont, interim);

  function gotSpeech(){
	  
    if (speechRec.resultValue){
      createP('User: ' + speechRec.resultString);

    }
  }
}



