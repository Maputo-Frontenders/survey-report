"use client";

import { useEffect, useMemo } from 'react';

const RPulse =  () => {
  var rectSize: number, sonarPower: number, pulseCooldown: number, numColorRect: number, sonarSpeed: number;
  var grid: { [key: string]: number }, rayonSonar: number, centerSonarX: number, centerSonarY: number, countPulse: number;

  if (typeof window == 'undefined') {
    return;
  } 

  const canvas = document.createElement("canvas");
  canvas.classList.add("absolute", "top-0", "left-0", "right-0", "w-full", "h-full", "z-0")
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  window.onresize = resizeCanvas;
  window.addEventListener('mousedown', mousePressed);
  resizeCanvas();

  rectSize = 30;
  sonarPower=10;
  pulseCooldown = 150;
  numColorRect = 150;
  sonarSpeed = 6;

  grid = {};
  countPulse = pulseCooldown + 1;
  rayonSonar = -1;
  let frameCount = 0;
  draw();

  function draw() {
    if (ctx) {
      for (let i = 0; i <=  Math.floor(canvas.width/rectSize); i++) {
        for (let j = 0; j <=  Math.floor(canvas.height/rectSize); j++) {
          const distS = isUnderSonarRayon(i, j);
          if(
            ((distS < rayonSonar + 1 * rectSize && distS > rayonSonar - rectSize  ) || 
            (distS < rayonSonar - sonarPower * rectSize && distS > rayonSonar - sonarPower * rectSize - rectSize)
            ) && rayonSonar >= 0) {
              ctx.fillStyle = "rgba(34, 41, 126, " + map(rayonSonar, 0, pulseCooldown * sonarSpeed / 2 , 0.7, 0.1) + ")";
          } else{
            ctx.fillStyle = "rgba(6, 10, 53, " + 0.3 + ")";
          }
          if (grid[i + "," + j] != null && distS < rayonSonar && distS > rayonSonar - sonarPower * rectSize) {
            ctx.fillStyle = "hsla(" + (frameCount / 5 + grid[i + "," + j] * 15) + " , 90%, 50%, 0.2)";
          }

          var srec = map(distS - rayonSonar * 0.7, 0, canvas.width/2, rectSize, 2);
          ctx.fillRect(2 + i * rectSize + rectSize / 2, 2 + j * rectSize + rectSize / 2, srec - 2, srec - 2);
        }
      }
    }
    
    if(rayonSonar >= 0 ){
      rayonSonar += sonarSpeed;
    }
    
    if(rayonSonar > max(canvas.width * 1.4, canvas.height * 1.4)){
      rayonSonar = -1;
    }
    
    if(countPulse > pulseCooldown){
      generateGrid((canvas.width / 2) - (canvas.width / 4), canvas.height / 2, numColorRect);
    }

    countPulse++;
    frameCount++;
    requestAnimationFrame(draw);
  }

  function generateGrid(cx: number, cy: number, power: number) {
    countPulse = 0;
    rayonSonar = 0;
    centerSonarX = cx;
    centerSonarY = cy;
    grid = {};
    
    cx = constrain(Math.floor(cx / rectSize), 0,  Math.floor(canvas.width/rectSize));
    cy = constrain(Math.floor(cy / rectSize), 0,  Math.floor(canvas.height/rectSize));
  
    var x = cx;
    var y = cy;
    var previous = -1;

    grid[x + "," + y] = 1;
    
    for (let i = 0; i < power; i++) {
      var nTry = 0;
      while(nTry < 4) {
        var rand = Math.random();

        if (rand < 0.25 && previous != 0) {
          x += 1; previous = 1; nTry=4;
        } else if (rand < 0.50 && previous != 1) {
          x -= 1; previous = 0; nTry=4;
        } else if (rand < 0.75 && previous != 2) {
          y += 1; previous = 3; nTry=4;
        } else if (previous != 3) {
          y -= 1; previous = 2; nTry=4;
        }

        nTry++;
      }

      if (grid[x + "," + y] == 1) grid[x + "," + y] += 1;
      else grid[x + "," + y] = 1;
      if (x < 0 || y < 0 || x > canvas.width / rectSize || y > canvas.height / rectSize) {
        x = cx;
        y = cy;
      }
    }
  }

  function isUnderSonarRayon(i: number, j:number){
    return dist(i*rectSize,j*rectSize,centerSonarX,centerSonarY) ;
  }

  function dist(x1: number, y1: number, x2: number, y2: number) {
    var dx, dy;
    dx = x1 - x2;
    dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function map(value: number, istart: number, istop: number, ostart: number, ostop: number) {
    return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
  }

  function max(v1: number, v2: number) {
    return v1 > v2 ? v1 : v2;
  }

  function constrain(value: number, min: number, max: number) {
    if (value > max) return max;
    if (value < min) return min;
    return value;
  }

  function mousePressed(e: MouseEvent) {
    if (ctx) {
      generateGrid(e.offsetX, e.offsetY, numColorRect);
      ctx.fillStyle = "#060a35";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  } 

  function resizeCanvas() {
    canvas.width = (window.innerWidth);
    setTimeout(function() {
      canvas.height = (window.innerHeight);
    }, 0);
  };
}

const SonarGrid = () => {
  const modal = useMemo(() => RPulse(), []);
  
  useEffect(() => {
    return () => modal
  }, []);

  return null;
}

export default SonarGrid;
