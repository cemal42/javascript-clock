const nameInfo = prompt("Adınız nedir?: ")
const myNameDOM = document.getElementById("myName")
const myClock = document.getElementById("myClock")
const clockStart = document.getElementById("clockStart")
const clockStop = document.getElementById("clockStop")

function showTime(){
    function writeTime () {
        const time = new Date
        const day = time.getDay()
        myClock.innerHTML = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}
        ${day==1?"Pazartesi":day==2?"Salı":day==3?"Çarşamba":day==4?"Perşembe":day==5?"Cuma":day==6?"Cumartesi":"Pazar"}
        `
    }

    let time = setInterval(() => {
        writeTime()
    }, 1000)
    
    clockStop.addEventListener("click", () => {
        clearInterval(time)
    })

    clockStart.addEventListener("click", () => {
        time = setInterval(() => {
            writeTime()
        }, 1000)
    })
}
showTime()



function writeName(firstName){
    myNameDOM.innerHTML = `${firstName}`
}
writeName(nameInfo)