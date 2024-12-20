import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion'
const StarParticles = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas !== null) {


            const ctx = canvas.getContext('2d');

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const stars: { x: number, y: number, radius: number }[] = [];
            const numStars = 50;

            const createStar = () => {
                return {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5,
                };
            };

            for (let i = 0; i < numStars; i++) {
                stars.push(createStar());
            }
            const drawStars = () => {
                if (ctx === null) return;
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                stars.forEach((star) => {
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                    ctx.fillStyle = 'white';
                    ctx.fill();
                });
            };
            const animate = () => {
                drawStars();
                requestAnimationFrame(animate);
            };

            animate();

            const handleResize = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                stars.length = 0;
                for (let i = 0; i < numStars; i++) {
                    stars.push(createStar());
                }
            };

            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return (
        <motion.div
            initial={{
                opacity: 0.3,
                x: 100,
                animationDirection: 'alternate'
            }}
            animate={{
                opacity: 1,
                x: -50,
                animationDirection: 'alternate',
                transitionEnd: {
                    x: -100,
                    opacity: 0.5
                }
            }}
            transition={{
                repeat: Infinity,
                duration: 7.5,
                ease: 'linear',
                repeatType: 'loop',
            }}
            //className='stars-anim'
            style={{
                display: 'block',
                width: "100%",
                height: "100%",
                position: "fixed",
                zIndex: 2,
                top: 0,
                left: 0,
                pointerEvents: "none",
            }}
        >
            <canvas ref={canvasRef} style={{ display: 'block' }} />
        </motion.div>
    )
};

export default StarParticles;
