import React, { useRef, useEffect } from 'react';

const Canvas = (props) => {
   const { draw, ...rest } = props;
   const canvasRef = useRef(null);

   useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      let animationFrameId;

      const html = document.documentElement;

      const frameCount = 240;
      const currentFrame = (index) =>
         `../images/solar/orbit-${index.toString()}.jpg`;

      const preloadImages = () => {
         for (let i = 1; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            console.log(img.src);
         }
      };

      const img = new Image();
      img.src = currentFrame(1);
      canvas.width = 1158;
      canvas.height = 770;
      img.onload = function () {
         context.drawImage(img, 0, 0);
      };

      const updateImage = (index) => {
         img.src = currentFrame(index);
         context.drawImage(img, 0, 0);
      };

      window.addEventListener('scroll', () => {
         const scrollTop = html.scrollTop;
         const maxScrollTop = html.scrollHeight - window.innerHeight;
         const scrollFraction = scrollTop / maxScrollTop;
         const frameIndex = Math.min(
            frameCount - 1,
            Math.ceil(scrollFraction * frameCount)
         );

         requestAnimationFrame(() => updateImage(frameIndex + 1));
      });
      let renderFrameCount = 0;
      // const render = () => {
      //    renderFrameCount++;
      //    draw(context, renderFrameCount);
      //    animationFrameId = window.requestAnimationFrame(render);
      // };
      preloadImages();
      // render();

      return () => {
         window.cancelAnimationFrame(animationFrameId);
      };
   }, [draw]);

   return <canvas ref={canvasRef} {...rest} />;
};

export default Canvas;
