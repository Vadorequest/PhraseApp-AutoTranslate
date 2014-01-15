PhraseApp-AutoTranslate
=======================

This Chrome plugin will automatically generate the machine translation in the https://phraseapp.com/ website when it's available.

To install it
=============
* **Open Chrome browser** (Or other based Chromium browser such as Chromium, Dragon, etc.)
* Go to the [extensions](chrome://extensions/) or using the interface (settings => extensions)
* Enable ***Developer mode*** to authorize access to custom scripts. (Not coming from Chrome Web Store)
* Drag and drop the ***"PhraseApp AutoTranslate.crx"*** located in the main directory to the chrome extensions page.
* Accept the installation and refresh your PhraseApp web page.

Dev & Debug
===========
* You have access to the .pem file, so you can [update the script](http://developer.chrome.com/extensions/packaging.html)
* You can enable the DEBUG mode in the script to see the messages into the console.
* You can create an official Chrome Extension, I don't see the interest because it's basically a plugin for our team, but if you want to share it, go ahead. Just tell me! (Issues)


Design
======
* I didn't want to auto replace the text in the textarea for many reasons, some text could be already filled in there and it would be more difficult to know which one we really updated by ourself and not by the auto translation. 

_Have fun._
