FullCalendar Testing Suite
====================================================

This fork for FullCalendar is dedicated to testing the exposed fullCalendar plugin.
It uses karma, PhantomJS, jasmine, jasmine-jquery, jasmine-fixture, jquery.simulate.js

To review setup of FullCalendar please refer to the fullCalendar repo.

Philosophy of this fork
-----------------------
The primary objective in this fork is to generate a complete regression test of fullCalendar. To that end the specs/fullCalendar.js file should be testing all features outlined on [fc-homepage]. 

To contribute, identify a feature, add a describe into specs/fullCalendar.js for the feature, and create nested describes to test each part of that feature. This is in line with the original authors need to have a fully tested user interface.

The philosophy I am adopting in the code itself is purely selfish.

- Ractoring will be done in fully TDD style. Failing test, code, Succeeding test.
- Any code refactoring is isolated to this branch; is purely of an academic nature; is not representative of the original authors feature requests, bug fixes, timelines or architectural preferences.
- Objects are created in functional , not pseudoClassical style.

Getting Set Up
--------------
The following components make up the testing
    
        npm install -g karma
        npm install -g jasmine-node
        npm install -g jasmine-jquery
        download jasmine fixtures into lib\jasmine-fixture\*.js 
        download jquery.simulate.js into lib\jquery-simulate\*.js  

[jasmine-jquery],[jasmin-fixture],[jquery-simulate].

to build and test, from the fullCalendar folded command line
	
        grunt dev && karma start karma.conf.IntegrationTests.js --single-run
	
More rigorous testing
-
Test configurations have been seperated into 

         karma.conf.IntegrationTests.js : will run on any rebuild of .build\out\fullCalendar.js
         karma.conf.regression.js : will run on any change to specs/fullCalendar.js against a previous version in the regression folder.
         karma.conf.UnitTests.js : will run on any change to specs/**/*.js or any change to src/**/*.js 
	
Seperating out the tests in this way allows me to do quick TDD cycles and doesn't require waiting for the regression or integration tests to complete.

My current test setup is to keep 4 consoles open

1. :>grunt dev
2. :>karma start karma.conf.IntegrationTests.js --single-run
3. :>karma start karma.conf.regression.js
4. :>karma start karma.conf.UnitTests.js

Extra testing can be done using AutoHotKey, an example .ahk file is included in the tests folder.
	
[fc-homepage]: http://arshaw.com/fullcalendar/
[jasmin-fixture]: https://github.com/searls/jasmine-fixture/
[jquery-simulate]: https://raw.github.com/jquery/jquery-ui/master/tests/jquery.simulate.js
[jasmine-jquery]: https://github.com/velesin/jasmine-jquery	