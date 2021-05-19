AFRAME.registerComponent('diver-rotate',{
    schema : {
        speedOfRotation : {
            type : "number",
            default : "0"
        },
        speedOfAscent : {
            type : "number",
            default : "0"
        }
    },

    init : function(){
        window.addEventListener("keydown",(e) =>{

            this.data.speedOfRotation = this.el.getAttribute("rotation");      
            this.data.speedOfAscent = this.el.getAttribute("position");

            var diverRotation = this.data.speedOfRotation;
            var diverAscent = this.data.speedOfAscent;

            if (e.key === "ArrowRight") {
                if (diverRotation.x < 10) {
                  diverRotation.x += 0.5;
                  this.el.setAttribute("rotation", diverRotation);
                }
              }

            if(e.key === "ArrowLeft"){
                if(diverRotation.x > -10){
                    diverRotation.x -= 0.5;
                    this.el.setAttribute("rotation", diverRotation)
                }
            }

            if(e.key === "ArrowUp"){
                if(diverRotation.z < 20){
                    diverRotation.z += 0.5;
                    this.el.setAttribute("rotation", diverRotation)
                }
                if(diverAscent.y < 2){
                    diverAscent.y += 0.01;
                    this.el.setAttribute("position", diverAscent)
                }
            }

            if(e.key === "ArrowDown"){
                if(diverRotation.z < -20){
                    diverRotation.z -= 0.5;
                    this.el.setAttribute("rotation", diverRotation)
                }
                if(diverAscent.y < -2){
                    diverAscent.y -= 0.01;
                    this.el.setAttribute("position", diverAscent)
                }
            }
        })
    }
})