/* For Twins: 2. Math operations:
A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you. The brick's width and height are equal, forming a square. Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume. Write a function iceBrickVolume that will accept these parameters:

radius - bottle's radius (always > 0);
bottleLength - total bottle length (always > 0);
rimLength - length from bottle top to brick (always < bottleLength);
And return volume of ice brick that magician managed to put into a bottle.

Note:
All inputs are integers. Assume no irregularities to the cuboid brick. You may assume the bottle is shaped like a cylinder. The brick cannot fit inside the rim.

All inputs are integers.

Examples:
iceBrickVolume(1, 10, 2); // => 16
iceBrickVolume(5, 30, 7); // => 1150
*/

function iceBrickVolume(radius, bottleLength, rimLength) {
    let length = bottleLength - rimLength;
    let width = radius * 2;
    
    return length * width * radius;
    
}

