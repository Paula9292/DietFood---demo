import {dietData} from '../json/data.js'

const meal=document.querySelectorAll('.meal');
const foodPhoto = document.querySelectorAll('.foodPhoto');
const dish=document.querySelectorAll('.dish');
const dishMenu=document.querySelectorAll('.daily-meals');
const description = document.querySelectorAll('.hero p')

//.. import data from data.js = diet data 


//DAY 1

// .... meal name
  meal[0].innerText=dietData.first_day.brekfast.meal
  meal[1].innerText=dietData.first_day.brekfastII.meal
  meal[2].innerText=dietData.first_day.lunch.meal
  meal[3].innerText=dietData.first_day.dinner.meal

// ... food picture
 foodPhoto[0].setAttribute('src', dietData.first_day.brekfast.firstOption.picture  ) // brekfast 
 foodPhoto[1].setAttribute('src', dietData.first_day.brekfast.secondOption.picture  )
 foodPhoto[2].setAttribute('src', dietData.first_day.brekfast.thirdOption.picture  )
 foodPhoto[3].setAttribute('src', dietData.first_day.brekfastII.firstOption.picture  ) // brekfast II 
 foodPhoto[4].setAttribute('src', dietData.first_day.brekfastII.secondOption.picture  )
 foodPhoto[5].setAttribute('src', dietData.first_day.brekfastII.thirdOption.picture  )
 foodPhoto[6].setAttribute('src', dietData.first_day.lunch.firstOption.picture  )  // lunch 
 foodPhoto[7].setAttribute('src', dietData.first_day.lunch.secondOption.picture  )
 foodPhoto[8].setAttribute('src', dietData.first_day.lunch.thirdOption.picture  )
 foodPhoto[9].setAttribute('src', dietData.first_day.dinner.firstOption.picture  )   // dinner 
 foodPhoto[10].setAttribute('src', dietData.first_day.dinner.secondOption.picture  )
 foodPhoto[11].setAttribute('src', dietData.first_day.dinner.thirdOption.picture  )
 
 
 //... food description 

description[0].innerText=dietData.first_day.brekfast.firstOption.dish  // brekfast
description[1].innerText=dietData.first_day.brekfast.secondOption.dish
description[2].innerText=dietData.first_day.brekfast.thirdOption.dish
description[3].innerText=dietData.first_day.brekfastII.firstOption.dish  // brekfast II 
description[4].innerText=dietData.first_day.brekfastII.secondOption.dish
description[5].innerText=dietData.first_day.brekfastII.thirdOption.dish
description[6].innerText=dietData.first_day.lunch.firstOption.dish  // lunch
description[7].innerText=dietData.first_day.lunch.secondOption.dish
description[8].innerText=dietData.first_day.lunch.thirdOption.dish
description[9].innerText=dietData.first_day.dinner.firstOption.dish   // dinner 
description[10].innerText=dietData.first_day.dinner.secondOption.dish
description[11].innerText=dietData.first_day.dinner.thirdOption.dish

 
