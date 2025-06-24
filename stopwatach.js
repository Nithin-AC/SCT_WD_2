let obj=document.querySelector("#start");
let obj1=document.querySelector("#reset");
let obj2=document.querySelector("#stop");
let obj3=document.querySelector(".timer")
let obj4=document.querySelector("body")
let timerId;
let formattime=(sec,min,hours)=>{
    let second= sec%60;
    // let hour=hours%12;
    let minute=min%60;

    obj3.innerHTML =
  `<h1>${String(hours).padStart(2,"0")}:` +
  `${String(minute).padStart(2,"0")}:` +
  `${String(second).padStart(2,"0")}</h1>`;

}
let count=0;
let count1=0;
let count2=0;
let flag=0;
let flag2=0;
let flag3=0;
obj.addEventListener("click",()=>{
    if (flag) return; 
    flag  = 1;                      
    flag2 = 0;                     
    flag3 = 0; 
    function tick() {
  if (flag2 || flag3) {
    clearTimeout(timerId);
    flag = 0;
    return;
  }

  count++;
  if (count === 60)  
    {
         count = 0;
          count1++;
     }
  if (count1 === 60) 
    { count1 = 0;
         count2++;
     }

  formattime(count, count1, count2);
  timerId = setTimeout(tick, 1000);
}
tick(); 

}
)
obj2.addEventListener("click",()=>{
    flag2=1;
    flag=0;
    flag3=0;
    formattime(count, count1, count2);

})
obj1.addEventListener('click',()=>
{
    flag3=1;
    flag=0;
    flag2=0;
    count=0;
    count1=0;
    count2=0;
    formattime(0, 0, 0);
})





let lapBtn = document.querySelector('#lap');

// Create and append laps container below timer
let lapsContainer = document.createElement('div');
lapsContainer.style.color = 'whitesmoke';
lapsContainer.style.marginTop = '2rem';

lapsContainer.style.fontFamily = 'monospace';
lapsContainer.style.fontSize = '1rem';

lapsContainer.style.display='flex';
lapsContainer.style.justifyContent='center';





let laps = [];

lapBtn.addEventListener('click', () => {
    // Check if stopwatch is running using your flags
    if (flag === 1 && flag2 === 0 && flag3 === 0) {
        console.log("hello");
        let currentSeconds = count2 * 3600 + count1 * 60 + count;
        let lastLap = laps.length > 0 ? laps[laps.length - 1] : 0;
        let lapTime = currentSeconds - lastLap;
        laps.push(currentSeconds);

        
        let min = Math.floor(lapTime / 60);
        let sec = lapTime % 60;
        let lapTimeFormatted = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}&nbsp`;

      
        lapsContainer.innerHTML += `\n<h3>Lap ${laps.length}: ${lapTimeFormatted}</h3>`;
        console.log("hello2");
        obj4.prepend(lapsContainer);

    }
});
