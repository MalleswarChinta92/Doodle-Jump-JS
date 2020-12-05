document.addEventListener('DOMContentLoaded', ()=> {
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')
    const platforms = []
    const platformCount = 5
    let doodlerBottomSpace = 100
    let doodlerLeftSpace = 100
    let gameOver = false

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

    if (!gameOver) {
        createDoodler()
        createPlatforms()
    }
})