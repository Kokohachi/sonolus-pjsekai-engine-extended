import { SkinSpriteName } from 'sonolus-core'

export const skin = defineSkin({
    sprites: {
        cover: SkinSpriteName.StageCover,

        lane: SkinSpriteName.Lane,
        judgmentLine: SkinSpriteName.JudgmentLine,
        stageLeftBorder: SkinSpriteName.StageLeftBorder,
        stageRightBorder: SkinSpriteName.StageRightBorder,

        sekaiStage: 'Sekai Stage',

        simLine: SkinSpriteName.SimultaneousConnectionNeutral,

        normalNoteLeft: 'Sekai Note Cyan Left',
        normalNoteMiddle: 'Sekai Note Cyan Middle',
        normalNoteRight: 'Sekai Note Cyan Right',
        normalNoteFallback: SkinSpriteName.NoteHeadCyan,

        slideNoteLeft: 'Sekai Note Green Left',
        slideNoteMiddle: 'Sekai Note Green Middle',
        slideNoteRight: 'Sekai Note Green Right',
        slideNoteFallback: SkinSpriteName.NoteHeadGreen,
        slideNoteEndFallback: SkinSpriteName.NoteTailGreen,

        flickNoteLeft: 'Sekai Note Red Left',
        flickNoteMiddle: 'Sekai Note Red Middle',
        flickNoteRight: 'Sekai Note Red Right',
        flickNoteFallback: SkinSpriteName.NoteHeadRed,
        flickNoteEndFallback: SkinSpriteName.NoteTailRed,

        criticalNoteLeft: 'Sekai Note Yellow Left',
        criticalNoteMiddle: 'Sekai Note Yellow Middle',
        criticalNoteRight: 'Sekai Note Yellow Right',
        criticalNoteFallback: SkinSpriteName.NoteHeadYellow,
        criticalNoteEndFallback: SkinSpriteName.NoteTailYellow,

        normalSlideTickNote: 'Sekai Diamond Green',
        normalSlideTickNoteFallback: SkinSpriteName.NoteTickGreen,

        criticalSlideTickNote: 'Sekai Diamond Yellow',
        criticalSlideTickNoteFallback: SkinSpriteName.NoteTickYellow,

        normalSlideConnectorNormal: 'Sekai Slide Connection',
        normalSlideConnectorActive: 'Sekai Slide Connection Active',
        normalSlideConnectorFallback: SkinSpriteName.NoteConnectionGreenSeamless,

        criticalSlideConnectorNormal: 'Sekai Critical Slide Connection',
        criticalSlideConnectorActive: 'Sekai Critical Slide Connection Active',
        criticalSlideConnectorFallback: SkinSpriteName.NoteConnectionYellowSeamless,

        normalSlotGlow: 'Sekai Slot Glow Cyan',
        slideSlotGlow: 'Sekai Slot Glow Green',
        flickSlotGlow: 'Sekai Slot Glow Red',
        criticalSlotGlow: 'Sekai Slot Glow Yellow',

        normalSlot: 'Sekai Slot Cyan',
        slideSlot: 'Sekai Slot Green',
        flickSlot: 'Sekai Slot Red',
        criticalSlot: 'Sekai Slot Yellow',

        flickArrowUp1: 'Sekai Flick Arrow Up 1',
        flickArrowUp2: 'Sekai Flick Arrow Up 2',
        flickArrowUp3: 'Sekai Flick Arrow Up 3',
        flickArrowUp4: 'Sekai Flick Arrow Up 4',
        flickArrowUp5: 'Sekai Flick Arrow Up 5',
        flickArrowUp6: 'Sekai Flick Arrow Up 6',
        flickArrowLeft1: 'Sekai Flick Arrow Left 1',
        flickArrowLeft2: 'Sekai Flick Arrow Left 2',
        flickArrowLeft3: 'Sekai Flick Arrow Left 3',
        flickArrowLeft4: 'Sekai Flick Arrow Left 4',
        flickArrowLeft5: 'Sekai Flick Arrow Left 5',
        flickArrowLeft6: 'Sekai Flick Arrow Left 6',
        flickArrowFallback: SkinSpriteName.DirectionalMarkerRed,

        criticalArrowUp1: 'Sekai Critical Flick Arrow Up 1',
        criticalArrowUp2: 'Sekai Critical Flick Arrow Up 2',
        criticalArrowUp3: 'Sekai Critical Flick Arrow Up 3',
        criticalArrowUp4: 'Sekai Critical Flick Arrow Up 4',
        criticalArrowUp5: 'Sekai Critical Flick Arrow Up 5',
        criticalArrowUp6: 'Sekai Critical Flick Arrow Up 6',
        criticalArrowLeft1: 'Sekai Critical Flick Arrow Left 1',
        criticalArrowLeft2: 'Sekai Critical Flick Arrow Left 2',
        criticalArrowLeft3: 'Sekai Critical Flick Arrow Left 3',
        criticalArrowLeft4: 'Sekai Critical Flick Arrow Left 4',
        criticalArrowLeft5: 'Sekai Critical Flick Arrow Left 5',
        criticalArrowLeft6: 'Sekai Critical Flick Arrow Left 6',
        criticalArrowFallback: SkinSpriteName.DirectionalMarkerYellow,

        // Extended

        normalTraceNoteLeft: 'Sekai+ Slim Note Gray Left',
        normalTraceNoteMiddle: 'Sekai+ Slim Note Gray Middle',
        normalTraceNoteRight: 'Sekai+ Slim Note Gray Right',
        normalTraceNoteFallbackLeft: 'Sekai Note Neutral Left',
        normalTraceNoteFallbackMiddle: 'Sekai Note Neutral Middle',
        normalTraceNoteFallbackRight: 'Sekai Note Neutral Right',
        normalTraceNoteSecondaryFallback: SkinSpriteName.NoteHeadNeutral,
        normalTraceNoteTickNote: 'Sekai Diamond Neutral',
        normalTraceNoteTickNoteFallback: SkinSpriteName.NoteTickNeutral,

        criticalTraceNoteLeft: 'Sekai+ Slim Note Yellow Left',
        criticalTraceNoteMiddle: 'Sekai+ Slim Note Yellow Middle',
        criticalTraceNoteRight: 'Sekai+ Slim Note Yellow Right',
        criticalTraceNoteFallback: SkinSpriteName.NoteHeadYellow,

        traceFlickNoteLeft: 'Sekai+ Slim Note Red Left',
        traceFlickNoteMiddle: 'Sekai+ Slim Note Red Middle',
        traceFlickNoteRight: 'Sekai+ Slim Note Red Right',

        normalTraceSlotGlow: 'Sekai+ Slot Glow Neutral',
        normalTraceSlot: 'Sekai+ Slot Neutral',

        damageNoteLeft: 'Sekai+ Slim Note Purple Left',
        damageNoteMiddle: 'Sekai+ Slim Note Purple Middle',
        damageNoteRight: 'Sekai+ Slim Note Purple Right',
        damageNoteFallbackLeft: 'Sekai Note Purple Left',
        damageNoteFallbackMiddle: 'Sekai Note Purple Middle',
        damageNoteFallbackRight: 'Sekai Note Purple Right',
        damageNoteSecondaryFallback: SkinSpriteName.NoteHeadPurple,
        damageSlotGlow: 'Sekai+ Slot Glow Purple',
        damageSlot: 'Sekai+ Slot Purple',

        backgroundDim: 'Sekai+ Black Background',
    },
})

export const layer = {
    cover: 1000,

    slotGlowEffect: 200,

    note: {
        arrow: 102,
        tick: 101,
        body: 100,
        slide: 99,
        connector: 98,
    },

    simLine: 90,

    slotEffect: 50,

    judgmentLine: 1,
    stage: 0,
}

export const getZ = (layer: number, time: number, lane: number) =>
    layer - time / 1000 - lane / 100000
