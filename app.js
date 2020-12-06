document.addEventListener('DOMContentLoaded', ()=> {
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')
    const platforms = []
    const platformCount = 5
    let doodlerBottomSpace = 100
    let doodlerLeftSpace = 100
    let isGameOver = false
    let upTimerId, downTimerId

    class Platform {
        constructor(left, bottom) {
            this.left = left
            this.bottom = bottom
            const visual = document.createElement('div')
            visual.classList.add('platform')
            visual.style.left = left + "px"
            visual.style.bottom = bottom + "px"
            this.visual = visual
            grid.appendChild(visual)
        }
    }

    const createDoodler = () => {
        doodler.classList.add('doodler')
        grid.appendChild(doodler)
        doodlerLeftSpace = platforms[0].left
        doodler.style.left = doodlerLeftSpace + "px"
        doodler.style.bottom = doodlerBottomSpace + "px"
    }

    const createPlatforms = () => {
        for (let i = 0; i < platformCount; i++) {
            const left = Math.round(315 * Math.random(400-85))
            const platform = new Platform(left, 100 + i * 120)
            platforms.push(platform)
        }
    }

    const movePlatforms = () => {
        platforms.forEach(platform=> {
            platform.bottom -= 4;
            const visual = platform.visual
            visual.style.bottom = platform.bottom + "px"
            if (platform.bottom < 10) {
                platforms.shift()
                visual.classList.remove('platform')
                const left = Math.round(315 * Math.random(400-85))
                const newPlatform = new Platform(left, 600)
                platforms.push(newPlatform)
            }
        })
    }

    const jump = () => {
        clearInterval(downTimerId)
        upTimerId = setInterval(()=> {
            doodlerBottomSpace += 20
            doodler.style.bottom = doodlerBottomSpace + "px"
            if (doodlerBottomSpace > 350) {
                fall()
            }
        }, 100)
    }

    const fall = () => {
        clearInterval(upTimerId)
        downTimerId = setInterval(()=> {
            doodlerBottomSpace -= 20
            doodler.style.bottom = doodlerBottomSpace + "px"
            if (doodlerBottomSpace <= 0) {
                gameOver()
            }
        }, 100)
    }

    const gameOver = () => {
        isGameOver = true
        clearInterval(downTimerId)
        clearInterval(upTimerId)
    }

    if (!isGameOver) {
        createPlatforms()
        createDoodler()
        setInterval(movePlatforms, 100)
        jump()
    }
})