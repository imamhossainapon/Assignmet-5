let cardSection =document.getElementById('card-section')

document.getElementById('donation').addEventListener('click',function () {

    


    let f = colorButton('donation')
    let z = colorButton2('moha')

    

    cardSection.classList.remove('hidden')
    history_secton.classList.add('hidden')
    
   
   

    
})


// card1


let money_history =document.getElementById('money_history')
  
let my_modal = document.getElementById('my_modal_4')

let card1_input =document.getElementById('card1-input')
let card_BDT  = document.getElementById('card-BDT')

let amar_taka =document.getElementById('amar_taka').innerText

document.getElementById('Donate_Now').addEventListener('click',function () {


let card_BDT_money = card_BDT.innerText
let card_BDT_money1 =parseFloat(card_BDT_money )
let card1_input1 = card1_input.value
let card1_input_value = parseFloat(card1_input1)

let amar_taka1 =parseFloat(amar_taka)

let new_donate = card_BDT_money1  + card1_input_value

let amar_taka2 = amar_taka1 -  new_donate


  
    if( !isNaN (card1_input_value) &&  card1_input_value >=1  && card1_input_value <= amar_taka1 &&  amar_taka1 >=  new_donate ){
    
     


      document.getElementById('card-BDT').innerText = new_donate

      document.getElementById('amar_taka').innerText = amar_taka2 
    
      my_modal.showModal()
    card1_input.value =''
    let div =document.createElement('div')
    div.innerHTML=`
<div class="py-3 px-4 bg-[#FFFFFF] shadow-lg rounded-lg mb-4 ">
       <h1 class="lg:font-bold font-medium text-sm lg:text-xl mb-4" > ${card1_input_value}  Taka is Donated for famine-2024 at Feni, Bangladesh </h1>
         <p class="text[1px	Inside
         #1111111A] text-xs ">Date :  ${currentDate}</p>
     </div>
    
    `
    money_history.appendChild(div)
     
   

   
    
      return
    }
   
    else{ 
        alert('invalid donation amount ')
    
    }
    
})
  

// card 2


let card1_input2 =document.getElementById('card1-input2')
let card_balance  = document.getElementById('card-BDT2')


document.getElementById('Donate_Now2').addEventListener('click',function () {

let card_BDT_money = card_balance.innerText
let card_BDT_money1 =parseFloat(card_BDT_money )

let card1_input1 = card1_input2.value
let card1_input_value = parseFloat(card1_input1)

let amar_taka1 =parseFloat(amar_taka)

let new_donate = card_BDT_money1  + card1_input_value

let amar_taka2 = amar_taka1 -  new_donate


  
    if( !isNaN (card1_input_value) &&  card1_input_value >=1  && card1_input_value <= amar_taka1 &&  amar_taka1 >=  new_donate ){
    
     


      document.getElementById('card-BDT2').innerText = new_donate

      document.getElementById('amar_taka').innerText = amar_taka2 
    
      my_modal.showModal()
        card1_input2.value =''

        let div =document.createElement('div')
        div.innerHTML=`
    <div class="py-3 px-4 bg-[#FFFFFF] shadow-lg rounded-lg mb-4 ">
           <h1 class="lg:font-bold font-medium text-sm lg:text-xl mb-4" > ${card1_input_value} Taka is Donated for Flood Relief in Feni,Bangladesh </h1>
             <p class="text[1px	Inside#1111111A] text-xs ">Date : ${currentDate}</p>
         </div>
        
        `
        money_history.appendChild(div)

      return
    }
   
    else{ 
        alert('your code is invalid')
    
    }
    
})


// card 3

let card1_input3 =document.getElementById('card1-input3')
let card_balance3 = document.getElementById('card-BDT3')

let currentDate = new Date()


document.getElementById('Donate_Now3').addEventListener('click',function () {

let card_BDT_money = card_balance3.innerText
let card_BDT_money1 =parseFloat(card_BDT_money )

let card1_input1 = card1_input3.value
let card1_input_value = parseFloat(card1_input1)

let amar_taka1 =parseFloat(amar_taka)

let new_donate = card_BDT_money1  + card1_input_value

let amar_taka2 = amar_taka1 -  new_donate



  
    if( !isNaN (card1_input_value) &&  card1_input_value >=1   && card1_input_value <= amar_taka1 &&  amar_taka1 >=  new_donate ){
    
     


      document.getElementById('card-BDT3').innerText = new_donate

      document.getElementById('amar_taka').innerText = amar_taka2 


    


  
    
      my_modal.showModal()
        card1_input3.value =''
        let div =document.createElement('div')
        div.innerHTML=`
    <div class="py-3 px-4 bg-[#FFFFFF] shadow-lg rounded-lg mb-4 ">
           <h1 class="lg:font-bold font-medium text-sm lg:text-xl mb-4" > ${card1_input_value}  Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh </h1>
             <p class="text[1px	Inside 
             #1111111A] text-xs ">Date: ${currentDate} </p>
         </div>
        
        `
        money_history.appendChild(div)

        
      return
    }
   
    else{ 
        alert('your code is invalid')
    
    }
    
})


// card 3 done


// modal hide


// 




        


let history_secton = document.getElementById('history-secton')

document.getElementById('moha').addEventListener('click',function(){

    let f = colorButton('moha')
    let E = colorButton2('donation')

    history_secton.classList.remove('hidden')
    cardSection.classList.add('hidden')
 

   

})
