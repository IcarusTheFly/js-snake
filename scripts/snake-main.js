/*
    window.onload = function() {
        canvas = document.getElementById("snakeCanvas");
        canvasContext = canvas.getContext("2d");
        document.addEventListener("keydown", keyPress);
        setInterval(flow, 1000 / 10);
    };
    xSpeed = 0;
    ySpeed = 0;
    px = 10;
    py = 10;
    tail = 3;
    gridSize = 20;
    tc = 30;
    ax = 15;
    ay = 15;
    trail = [];
    function flow() {
        px += xSpeed;
        py += ySpeed;
        if (px < 0) {
            px = tc - 1;
        }
        if (px > tc - 1) {
            px = 0;
        }
        if (py < 0) {
            py = tc - 1;
        }
        if (py > tc-1) {
            py = 0;
        }
        canvasContext.fillStyle = "dimgray";
        canvasContext.fillRect(0, 0, canvas.width, canvas.height);
        canvasContext.fillStyle = "greenyellow";
        for (var i = 0; i < trail.length; i++) {
            canvasContext.fillRect(trail[ i ].x * gridSize, trail[ i ].y * gridSize, gridSize - 2, gridSize - 2);
            if (trail[ i ].x === px && trail[ i ].y === py) {
                tail = 5;
            }
        }
        trail.push({ x: px, y: py });
        while (trail.length > tail) {
            trail.shift();
        }
        if (ax === px && ay === py) {
            tail++;
            ax = Math.floor(Math.random()*tc);
            ay = Math.floor(Math.random()*tc);
        }
        canvasContext.fillStyle = "turquoise";
        canvasContext.fillRect(ax * gridSize, ay * gridSize, gridSize - 2, gridSize - 2);
    }
    function keyPress(evt) {
        switch(evt.keyCode) {
            case 37:
                xSpeed = -1;
                ySpeed = 0;
                break;
            case 38:
                xSpeed = 0;
                ySpeed = -1;
                break;
            case 39:
                xSpeed = 1;
                ySpeed = 0;
                break;
            case 40:
                xSpeed = 0;
                ySpeed = 1;
                break;
        }
    }
*/
