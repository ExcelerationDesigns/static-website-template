#!/bin/sh

ftp -n $TRAVIS_HOST <<END_SCRIPT
quote USER $TRAVIS_USER
quote PASS $TRAVIS_PASSWD
binary
put $TRAVIS_FILE
quit
END_SCRIPT
exit 0
