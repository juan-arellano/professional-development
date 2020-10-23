<!DOCTYPE html>
<html>
<body>

<?php

$x = 5; // global scope
  
function test1() {
     // Will Generate Error
     echo "<p>Value of x is: $x</p>";
} 
test1();

echo "<p>Value of x is: $x</p><hr />";

function test2() {
    $y = 5; // local scope
    echo "<p>Value of y is: $y</p>";
} 
test2();

	// willl Generate Error
	echo "<p>Value of y is: $y</p>";
?>

</body>
</html>