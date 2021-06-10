AFRAME.registerComponent('game',{
    startTimer : function(duration,timerEl) {
        var minutes;
        var seconds;


        setInterval(()=>{
            if(duration >= 0) {
                minutes = parseInt(duration/60);
                seconds = parseInt(duration%60);

                if (minutes<10){
                    minutes = "0" +seconds;
                }

                if (seconds<10){
                    seconds = "0" +seconds;
                }

                timerEl.setAttribute("text",{
                    value : minutes + ":" + seconds
                });

                duration -= 1;
            }
        },1000)
    }
})