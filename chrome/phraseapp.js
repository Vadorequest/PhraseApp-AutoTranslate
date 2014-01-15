// Name of the pck.
PHRASE_APP_PCK = 'PhraseApp';

// Create our own pck to avoid gobals that could interfere with the website. 
window[PHRASE_APP_PCK] = {};

// Create shortcut.
holdsport = window[PHRASE_APP_PCK];

// True will display debug messages.
holdsport.DEBUG = false;

holdsport.dev = function(callback){
	if(holdsport.DEBUG && callback){
		callback();
	}

	return holdsport.DEBUG;
}

// Auto running once DOM loaded.
$(function(){
	var consoleDev = function(content){
		holdsport.dev(function(){
			console.log(content);
		});
	}

	consoleDev("PhraseApp AutoTranslate processing");
	
	var translationSuggested = $('.translation-suggest');

	consoleDev("There are "+translationSuggested.length+" translations detected to to!");
	if(translationSuggested.length > 0){
		// We are running in a page where we can autoload suggested translations.
		for(var i in translationSuggested){
			// If the object is clickable, just click on it!
			if(translationSuggested[i].click){
				translationSuggested[i].click();
				consoleDev("Starting auto translate phrase "+i);
			}
		}
	}
});