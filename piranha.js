AFRAME.registerComponent('piranha',{
    init: function(){
        for(var i=1;i<=20;i++){
            const id= `piranha${i}`;

            const positionX = Math.random() * 100 + -50;
            const positionY = Math.random() * 5 + -15;
            const positionZ = Math.random() * 60 + -40;

            const position =  {x : positionX, y : positionY, z : positionZ};

            this.fish(id,position);

        }
    },

    fish : function(id,position){

        const fishModelEntity = document.querySelector("#piranhas-in-the-zone");
        var piranhasEl = document.createElement('a-entity');
        piranhasEl.setAttribute("id",id);
        piranhasEl.setAttribute("position",position);

        piranhasEl.setAttribute("rotation", { x: 0, y: 180, z: 0 });
        piranhasEl.setAttribute("scale", { x: 0.3, y: 0.3, z: 0.3 });


        piranhasEl.setAttribute("gltf-model","./assets/piranhas/Piranha.gltf");

        piranhasEl.setAttribute("animation", {
            property: "position",
            to: "100 10 -20",
            loop: "true",
            dur: 20000
          });
      
          piranhasEl.setAttribute("animation-mixer", {});


        fishModelEntity.appendChild(piranhasEl);

    }
})