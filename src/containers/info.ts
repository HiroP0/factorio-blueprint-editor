import G from '../globals'

export class InfoContainer extends PIXI.Container {

    iWidth = 32 * 18
    iHeight = 32 * 28

    constructor() {
        super()

        this.visible = false
        this.interactive = false
        this.interactiveChildren = true

        this.setPosition()
        window.addEventListener('resize', () => this.setPosition(), false)

        const background = new PIXI.Sprite(PIXI.Texture.WHITE)
        background.width = this.iWidth
        background.height = this.iHeight
        background.tint = G.colors.pannel.background
        background.alpha = 0.9
        this.addChild(background)

        const text = new PIXI.Text('KEYBINDS', {
            fill: G.colors.text.normal,
            fontFamily: G.fontFamily,
            fontWeight: '500',
            fontSize: 24
        })
        text.position.set(this.iWidth / 2, 4)
        text.anchor.set(0.5, 0)
        this.addChild(text)

        this.writeColumn([
            'While hovering over an entity',
            '',
            '',
            '',
            '',
            '',
            'In editor window',
            '',
            '',
            'Others'
        ], { x: this.iWidth / 2, y: 40 }, 0.5, true)

        this.writeColumn([
            '',
            'left click',
            'middle click',
            'right click',
            'R',
            'Q',
            '',
            'left click recipe / module',
            'right click recipe / module',
            '',
            'ctrl / cmd + Z / Y',
            ['ctrl / cmd + C / V', G.colors.text.accent],
            'shift + S',
            'shift + N',
            'shift + right / left click',
            'alt',
            'esc',
            'E',
            'F',
            'W / A / S / D',
            'click + drag in blueprint area',
            'mouse wheel',
            '[ / ]'
        ], { x: this.iWidth / 2 - 4, y: 40 }, 1)

        this.writeColumn([
            '',
            'open editor window',
            'move',
            'remove',
            'rotate',
            'pippete tool / clear cursor',
            '',
            'choose',
            'remove',
            '',
            'undo / redo changes',
            ['copy / paste BP string', G.colors.text.accent],
            'generate BP picture',
            'clear BP',
            'copy / paste recipe and modules',
            'toggle overlay',
            'close active window',
            'open inventory or close active window',
            'focuses viewport on blueprint',
            'move',
            'move',
            'zoom in / out',
            'decrease / increase tile area'
        ], { x: this.iWidth / 2 + 4, y: 40 })

        this.writeColumn([
            'You can load a blueprint from a BP string, pastebin, hastebin, gist, gitlab,',
            '    factorioprints, google docs or text webpages.',
            'Avalible url query parameters:',
            '        source=<BPSTRING_OR_URL_TO_BPSTRING>',
            '        index=<INDEX_OF_BP_IN_BOOK>',
            '        renderOnly',
            'Keybinds can be changed in the settings pannel and are saved in localStorage.',
            'I don\'t show network or parsing errors in the app yet, you can open the console',
            '    (F12) to check if something is wrong.',
            'Entities with placeable-off-grid flag will not be added to the positionGrid',
            '    (ex. landmine).'
        ], { x: 4, y: 520 })

        this.writeColumn([
            'Please leave your suggestions, ideas, new features or bug reports',
            'inside the app via the Feedback button or on Github.'
        ], { x: this.iWidth / 2, y: 750 }, 0.5, true)

        const link = new PIXI.Text('Github Source')
        link.interactive = true
        link.buttonMode = true
        link.on('click', () => window.open('https://github.com/Teoxoy/factorio-blueprint-editor', '_blank'))
        link.position.set(this.iWidth / 2, 790)
        link.style.fontSize = 16
        link.style.fill = G.colors.text.link
        link.anchor.set(0.5, 0)
        this.addChild(link)

        this.writeColumn([
            'Copyright © 2018 Tanasoaia Teodor Andrei',
            'All art assets, spritesheets and other Factorio game data used in this project',
            'belong to Wube Software Ltd and are not for redistribution.'
        ], { x: this.iWidth / 2, y: 830 }, 0.5, true, 14)
    }

    writeColumn(data: Array<string | [string, number]>, offset: IPoint, anchorX = 0, bold = false, fontSize = 16) {
        let nextY = 0
        for (const obj of data) {
            const str = obj instanceof Array ? obj[0] : obj
            const text = new PIXI.Text(str, {
                fill: obj instanceof Array ? obj[1] : G.colors.text.normal,
                fontFamily: G.fontFamily,
                fontSize,
                fontWeight: bold ? '500' : 'normal'
            })
            text.position.set(offset.x, nextY++ * 20 + offset.y)
            text.anchor.set(anchorX, 0)
            this.addChild(text)
        }
    }

    setPosition() {
        this.position.set(
            G.app.screen.width / 2 - this.iWidth / 2,
            G.app.screen.height / 2 - this.iHeight / 2
        )
    }

    toggle() {
        this.visible = !this.visible
    }
}
