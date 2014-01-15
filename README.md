PhraseApp-AutoTranslate
=======================

This Chrome plugin will automatically generate the machine translation in the https://phraseapp.com/ website when it's available.

Google Web Store
================
[Available on the Store](https://chrome.google.com/webstore/detail/phraseapp-autotranslate/kjgaiikfgafcdjmlkmoohobgdbfbigao?utm_source=chrome-ntp-icon)

To install it
=============
* Download the [***"PhraseApp AutoTranslate.crx"***](https://github.com/Vadorequest/PhraseApp-AutoTranslate/archive/master.zip) file. _You don't need other files._
* **Open Chrome browser** (Or other based Chromium browser such as Chromium, Dragon, etc.)
* Go to the [extensions](chrome://extensions/) or using the interface (settings => extensions)
* Enable ***Developer mode*** to authorize access to custom scripts. (Not coming from Chrome Web Store)
* Drag and drop the ***"PhraseApp AutoTranslate.crx"*** located in the main directory to the chrome extensions page.
* Accept the installation and refresh your PhraseApp web page.

Dev & Debug
===========
* You have access to the .pem file, so you can [update the script](http://developer.chrome.com/extensions/packaging.html)
* You can enable the DEBUG mode in the script to see the messages into the console.


Design
======
* I didn't want to auto replace the text in the textarea for many reasons, some text could be already filled in there and it would be more difficult to know which one we really updated by ourself and not by the auto translation. 

_Have fun._
