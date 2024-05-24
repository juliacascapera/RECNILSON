function colidiu() {
    var largura = nave.width;
    var altura = nave.height;
    return (xNave + largura) > xInimigo &&
    xNave < (xInimigo + largura) &&
    (yNave + altura) > yInimigo &&
    yNave < (yInimigo + altura)
    }
    function movimentaNaveInimigo(tecla) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (tecla == "x") { // Seta para esquerda
    xNave -= 50;
    xNave = Math.max(0, xNave);
    } else if (tecla == "v") { // Seta para direita
    xNave += 50;
    xNave = Math.min(canvas.width - 160, xNave);
    } else if (tecla == "ArrowUp") { // Seta para cima
    yNave -= 50;
    yNave = Math.max(0, yNave);
    } else if (tecla == "ArrowDown") { // Seta para baixo
    yNave += 50;
    yNave = Math.min(canvas.height - nave.height, yNave);


        function movimentaNaveTeclado(tecla) {
            ctx.clearRect(x, 700-160, 160, 160);
            if (tecla == 37) { // Seta para esquerda
            x -= 50;
            x = Math.max(0, x);
            } else if (tecla == 39) { // Seta para direita
            x += 50;
            x = Math.min(canvas.width - 160, x);
            } else if (tecla == 32) { // espaço
            disparaTiro(x+80, 700-160);
            }
            ctx.drawImage(nave, x, 700-160);
            }
            function disparaTiro(col, lin) {
            if (lin > -6) {
            ctx.clearRect(col, lin, 2, 5);
            ctx.fillRect(col, lin-6, 2, 5);
            }
            setTimeout(function(){ disparaTiro(col, lin-6) }, 1);
            }


    yInimigo += 50;
    yInimigo = Math.min(canvas.height - inimigo.height, yInimigo);
    }
    ctx.drawImage(nave, xNave, yNave);
    ctx.drawImage(inimigo, xInimigo, yInimigo);
    
    if (colidiu()) {
    alert("Chocou uma com a outra!");
    }
    }