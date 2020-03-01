function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {

    // Set sharkSpeed to half if a dolphin is present
    if (dolphin == true) {
        sharkSpeed = sharkSpeed / 2;
    }

    // Hint - sharkDistance is the distance of the shark from the pontoon
    if (pontoonDistance / youSpeed < sharkDistance / sharkSpeed) {
        return "Alive!";
    } else
        return "Shark Bait!";
}

console.log(shark(49, 161, 3, 10, false));

    // Test.assertEquals(shark(12, 50, 4, 8, true), "Alive!"); 3 6.25
    // Test.assertEquals(shark(7, 55, 4, 16, true), "Alive!"); 11 63
    // Test.assertEquals(shark(24, 0, 4, 8, true), "Shark Bait!"); 28 4

    // Kata;
    // https://www.codewars.com/kata/57e921d8b36340f1fd000059/javascript
