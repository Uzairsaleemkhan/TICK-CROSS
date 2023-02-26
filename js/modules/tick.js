const Tick=(_=>{
// data
let arr1=[];
let arr2=[];
let ourMainData=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let active=arr1



// cache the dom
const tictacEl= document.querySelector(".tictac")
const h1El=document.querySelector("h1")



    const checkTheOtherEvent=(e)=>{
        return e.target.classList.contains("tictac__item")
    }


    const getTheCurrentIndex=(e)=>{
let index=[...tictacEl.children].indexOf(e.target)
return index
    }

const checkTheIndexInActive=(currentIndex)=>{

 return active.includes(currentIndex)
}

const checkTheWinner=(ourMainData,active)=>{
    for (let arr of ourMainData) {
        if(active.includes(arr[0])&&active.includes(arr[1])&&active.includes(arr[2])){
            return true
        }
    }
    
}


const render=_=>{
    let elems=[...tictacEl.children]
    h1El.innerHTML="LET'S START"
    arr1=[];
    arr2=[];
    tictacEl.style.pointerEvents="fill"
    elems.forEach((item,index)=>{
        item.firstElementChild.style.zIndex=-1;
        item.lastElementChild.style.zIndex=-1;
        
    })
    active=arr1
}

// LISTENERS



    const listeners=_=>{


    tictacEl.addEventListener("click",function myEvent(e){
    
                 if(checkTheOtherEvent(e)){
                       let currentIndex =  getTheCurrentIndex(e)

                    if(checkTheIndexInActive(currentIndex)){
                       
                    }
                else{
                    
                    if (active===arr1) { 
                        if(Number(e.target.lastElementChild.style.zIndex)===-1){
                            active.push(currentIndex)
                            
                            //   checkTheWinner(ourMainData,active)
                            e.target.firstElementChild.style.zIndex=1
                            if( checkTheWinner(ourMainData,active)){
                                
                                arr1=[]
                                e.target.parentNode.previousElementSibling.innerHTML="TICK WINS"
                                 tictacEl.style.pointerEvents="none"
                     
          
                    }
                    active=arr2
                }
                // }
            }else{
                    if(Number(e.target.firstElementChild.style.zIndex)===-1){
                        active.push(currentIndex)
                        
                        e.target.lastElementChild.style.zIndex=1
                        
                        if( checkTheWinner(ourMainData,active)){
                            arr2=[]
                            e.target.parentNode.previousElementSibling.innerHTML="CROSS WINS"
                            tictacEl.style.pointerEvents="none"
                        
                        }
                        active=arr1
                    }
                        }
                 }


    }
        

    })
    document.querySelector(".btn").addEventListener("click",_=>render())

    }
const init=_=>{
    listeners()
    render()
}


return{
    init,
}
})();

export default Tick