<template>
    <div>
        <canvas id="coderain" style="background: #111"></canvas>
    </div>
</template>

<script>
  
export default {
  name: 'CodeRain',
  data() {
    return{
      
    }

  },
  computed: {
    
  },
  mounted() {
    this.loadPage();
  },
  methods: {
    loadPage(){
        var coderain = document.getElementById("coderain");
        var context = coderain.getContext("2d");
        var W = window.innerWidth;
        var H = window.innerHeight;
        coderain.width = W;
        coderain.height = H;
        var fontSize = 18;
        var colunms = Math.floor(W / fontSize);
        var drops = [];
        for(var i = 0;i < colunms;i++){
            drops.push(0);
        }

        var str = "01";

        function draw() {
            context.fillStyle = "rgba(0,0,0,0.05)";
            context.fillRect(0,0,W,H);

            context.font = "1000 " + fontSize + "px 微软雅黑";
            context.fillStyle = randColor();

            for(var i = 0;i < colunms;i++){
                var index = Math.floor(Math.random() * str.length);
                var x = i * fontSize;
                var y = drops[i] * fontSize;
                context.fillText(str[index],x,y);

                if(y >= coderain.height && Math.random() > 0.99) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };
        function randColor() {
            var r = Math.floor(Math.random() *256);
            var g = Math.floor(Math.random() *256);
            var b = Math.floor(Math.random() *256);
            return "rgb(" + r + "," + g + "," + b + ")";
        }

        draw();
        setInterval(draw,30);
    }
  },
  
}
</script>

<style>
  #coderain{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
}
  
</style>
