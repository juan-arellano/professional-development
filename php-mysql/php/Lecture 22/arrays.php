<!DOCTYPE html>
<html>
<body>

<?php

$colors = array("Blue", "Green", "Red"); 
echo "My Favorite Colors are: " . $colors[0] . ", " . $colors[1] . " and " . $colors[2] . "<hr />";

echo count($colors) . "<hr />";

$arrlength = count($colors);

for($x = 0; $x < $arrlength; $x++) {
    echo $colors[$x] . "<br />";

}

echo "<hr />";

$tscore = array("John"=>"60", "Bill"=>"80", "Dan"=>"75");
echo "Bill scored " . $tscore['Bill'] . " /100.";

echo "<hr />";

foreach($tscore as $x => $score) {
    echo "Key=" . $x . ", Score=" . $score;
    echo "<br>";
}

?>

</body>
</html>