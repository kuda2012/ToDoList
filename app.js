const removeListItem = document.querySelectorAll('ul')
const formElement = document.getElementById("enterData")
const input = document.querySelector('#box')
const theUL = document.querySelector(".unordered")
var list = []
var reload;








for (let btn of removeListItem){
   btn.addEventListener('click', function(e){
   
      if(e.target.tagName.toLowerCase() === "span"){

        
         e.target.innerHTML = e.target.innerText.strike()
        

         
         load = Array.from(theUL.children)

         for( i = 0; i < load.length; i++ ){


            list[i] = [load[i].innerHTML]    
            localStorage.setItem("array", JSON.stringify(list))
         
            
         }
        return
       

      }

      if (e.target.tagName.toLowerCase() === "button"){
         list.length = 0
  
      e.target.parentElement.remove()

    

      }
      

   


      load = Array.from(theUL.children)

      for( i = 0; i < load.length; i++ ){
            
        
         list[i] = [load[i].innerHTML]    
       

         
      }
      
      localStorage.setItem("array", JSON.stringify(list))
      

    
     
})

}








formElement.addEventListener('submit', function(evt){

   evt.preventDefault()
   

   const newListItem = document.createElement('li')
   const deleteBtn = document.createElement('button')

   newListItem.innerHTML = (`<span>${input.value}</span>`).concat('  ')
   input.value = ''
   theUL.append(newListItem)
 

   deleteBtn.innerText = "Delete"
   newListItem.append(deleteBtn)

   load = Array.from(theUL.children)


   for( i = 0; i < load.length ; i++ ){


   list[i] = [load[i].innerHTML]    


   
}
 
localStorage.setItem("array", JSON.stringify(list))
   
})




    (function auto(){
     
      
      var x = []

      var load = []
   
    
      var y = []

      x = JSON.parse(localStorage.getItem("array"))
     
     
      for( let i = 0; i < x.length  ; i++){

         y = []

         y[i] = document.createElement('li')

         theUL.append(y[i])

      }




     for( let i = 0; i < x.length; i++){
     theUL.children[i].innerHTML = x[i]
   


   }


     }

    ())

  

   
     
   