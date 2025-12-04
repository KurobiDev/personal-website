const SNOWFLAKE_COUNT = 200;
const SNOWFLAKE_MAX_SIZE = 5;
const SNOWFLAKE_MAX_SPEED = 2;
const SNOWFLAKE_COLOR = '#eee';

const SNOWFLAKES = [];

const canvas = document.createElement('canvas')
canvas.id = "snow"
canvas.style.position = 'absolute';
canvas.style.pointerEvents = 'none';
canvas.style.top = '0px';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const effects = document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

const generateSnowflake = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.floor(Math.random() * SNOWFLAKE_MAX_SIZE) + 1,
    color: SNOWFLAKE_COLOR,
    speed: Math.random() * SNOWFLAKE_MAX_SPEED + 1,
    sway: Math.random() - 0.5
});

const drawSnowflake = snowflake => {
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
    ctx.fillStyle = snowflake.color;
    ctx.fill();
    ctx.closePath();
}

const updateSnowflake = snowflake => {
    snowflake.y += snowflake.speed;
    snowflake.x += snowflake.sway;
    if (snowflake.y > canvas.height) {
        Object.assign(snowflake, generateSnowflake());
    }
};

const animate = () => {
    ctx.clearRect(0,0, canvas.width, canvas.height);

    SNOWFLAKES.forEach(snowflake => {
        updateSnowflake(snowflake);
        drawSnowflake(snowflake);
    })

    requestAnimationFrame(animate);
};

for(let i = 0; i < SNOWFLAKE_COUNT; i++) {
    SNOWFLAKES.push(generateSnowflake());
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.addEventListener('scroll', () => {
    canvas.style.top = window.scrollY + 'px'
});