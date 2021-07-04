  // var name = prompt('what is your name ?')
  // alert('welcome '+ name)
  // var answer1 = prompt ('do you love cakes ? ')
  // if (answer1 =="yes")
  // {
  //   alert ('Nice!')
  // }
  // else if(answer1 =="no")
  // {
  //   alert ("you'll gonna love it after this article :P")
  // }
  // else 
  // {
  //   alert('have fun')
  // }
// document.body.style.backgroundColor = "pink";

var stars = prompt ("how many stars you will rate us ?")
function rate(stars){
  while (stars < 0 || stars>5 )
  {
    var stars = prompt ("can you put a positive number beween 0 and 5?")
  }
  for(var i=0 ; i<stars;i++)
  {
    document.write("<img src= 'https://pngimg.com/uploads/star/star_PNG1597.png' alt='star'id='star-img'>")
  }

}
rate(stars)