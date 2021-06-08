AFRAME.registerComponent('coin',{
    init : function(){
        for (var i=0;i<=100;i++){
            var id =`coin${i}`;

            var posX = Math.random() *100 -50;
            var posY = Math.random() *5 +5;
            var posZ = Math.random() *65 -50;

            const positions = {x : posX, y : posY,z : posZ};
            this.generateCoins(id,positions);
        }
    },
    generateCoins : function(){
        const coinEntity = document.querySelector('#coin');
        var coinEl = document.createElement('a-entity');

        coinEl.setAttribute('id', id);
        coinEl.setAttribute("position", position);
        coinEl.setAttribute("geometry", { primitive: "circle", radius: 1 });

        coinEl.setAttribute("animation", {
            property: "rotation",
            to: "0 360 0",
            loop: "true",
            dur: 1000,
          });
      
          coinEl.setAttribute("static-body", {
            shape: "sphere",
            sphereRadius: 2
          });
 
        treasureEntity.appendChild(coinEl);
    }
})