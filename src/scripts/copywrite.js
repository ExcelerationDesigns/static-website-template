/*This file is copywrited by Big Sky Internet Design, Inc.  Any use of this file
without expressed written permission of Big Sky Internet Design, Inc, is copywrite
infringement and will be prosecuted to the full extent of the law.

Copy the code between the ***** file (copywrite.js) to the root directory.
Add this code to where the CopyWrite date will go.
Enter the year the site is designed in the copywriteDate ()'s:

**********************************************************

<script language="JavaScript" SRC="copywrite.js"></script>
<script language="javascript">
<!--
document.write (copywriteDate(2001));
// -->
</script>

********************************************************/

function copywriteDate(designYear){

var currentYear = new Date().getFullYear()
var displayYear

if (designYear == currentYear) {
	displayYear = designYear
}
else {
	displayYear = (designYear + " - " + currentYear)
}
return (displayYear + " &copy Copyright")
}
// -->