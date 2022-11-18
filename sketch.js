
var marks=[40,35,45,38,40]
function average(){
  var sum= marks[0]+marks[1]+marks[2]+marks[3]+marks[4]
  var avg=sum/marks.length
  console.log(avg)
}
function setup() 
{
  createCanvas(400,400);
  average()
}

function draw() 
{
background(51);

}

