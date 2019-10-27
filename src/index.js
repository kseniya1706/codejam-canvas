"use strict"

document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){

    const getFrames = () => {
        const frames = [];

        let frame = [
                ["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
                ["FFEB3B", "FFC107","FFC107","FFEB3B"],
                ["FFEB3B", "FFC107","FFC107","FFEB3B"],
                ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]             
        ];
        
        frames.push(frame); 
        return frames;
    }

 function draw(frame, psize) {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            var ctx  = canvas.getContext('2d');
            frame.forEach((row, i) => {
                row.forEach((column, j) => {
                    ctx.fillStyle = "#" + column;
                    ctx.fillRect(i*psize, j*psize, (i+1)*psize, (j+1)*psize);
            
                })
            })
        }

    }
    
    let count = 0;
    document.getElementById('4x4').addEventListener('click', () => {

        const frames = getFrames();
        const frame = frames[count];
        let psize = 128;
        draw(frame, psize);
        count++;
    })
}