import {
    And,
    bool,
    Divide,
    EntityMemory,
    Equal,
    Greater,
    GreaterOr,
    If,
    InputAccuracy,
    InputBucket,
    InputBucketValue,
    InputJudgment,
    InputOffset,
    Multiply,
    Not,
    NotEqual,
    Or,
    ParticleEffect,
    Script,
    Subtract,
    Time,
    TouchDX,
    TouchDY,
    TouchEnded,
    TouchT,
    TouchVR,
    TouchX,
    TouchY,
} from 'sonolus.js'
import { options } from '../../configuration/options'
import { buckets } from '../buckets'
import { arrowRedSprite, getArrowLayout } from './common/arrow-sprite'
import { Layer, minFlickVR, windows } from './common/constants'
import {
    playNoteEffect,
    playNoteLaneEffect,
    playSlotEffect,
} from './common/effect'
import {
    applyMirrorDirections,
    checkNoteTimeInEarlyWindow,
    checkTouchXInNoteHitbox,
    initializeNoteSimLine,
    InputState,
    noteBottom,
    NoteData,
    noteInputState,
    noteScale,
    noteSpawnTime,
    noteTop,
    noteZ,
    preprocessNote,
    updateNoteY,
} from './common/note'
import {
    calculateNoteLayout,
    getNoteLayout,
    noteFizzySprite,
} from './common/note-sprite'
import { playFlickJudgmentSFX } from './common/sfx'
import {
    checkDirection,
    checkTouchXInHitbox,
    checkTouchYInHitbox,
} from './common/touch'

export function fuzzyFlick(): Script {
    const bucket = buckets.fuzzyFlickIndex
    const window = windows.slideEndFlick.normal
    const noteSprite = noteFizzySprite
    const arrowSprite = arrowRedSprite

    const noteLayout = getNoteLayout(EntityMemory.to(0))
    const arrowLayout = getArrowLayout(EntityMemory.to(8))
    const arrowZ = EntityMemory.to<number>(17)

    const preprocess = [
        preprocessNote(bucket, window.good.late, 0.75, Layer.NoteBody),
        applyMirrorDirections(NoteData.direction),
        calculateNoteLayout(NoteData.center, NoteData.width, noteLayout),
        arrowSprite.calculateLayout(
            NoteData.center,
            NoteData.width,
            NoteData.direction,
            arrowLayout
        ),
        arrowZ.set(Subtract(Layer.NoteArrow, Divide(NoteData.time, 1000))),
    ]

    const spawnOrder = noteSpawnTime

    const shouldSpawn = GreaterOr(Time, noteSpawnTime)

    const initialize = initializeNoteSimLine()

    const touch = Or(
        options.isAutoplay,
        And(
            Not(bool(noteInputState)),
            checkNoteTimeInEarlyWindow(window.good.early),
            GreaterOr(TouchVR, minFlickVR),
            checkTouchYInHitbox(Subtract(TouchY, TouchDY)),
            If(
                checkNoteTimeInEarlyWindow(0),
                checkTouchXInNoteHitbox(Subtract(TouchX, TouchDX)),
                And(
                    checkTouchXInHitbox(
                        NoteData.headSharedMemory.slideHitboxL,
                        NoteData.headSharedMemory.slideHitboxR,
                        Subtract(TouchX, TouchDX)
                    ),
                    Or(
                        TouchEnded,
                        Not(checkTouchYInHitbox()),
                        Not(
                            checkTouchXInHitbox(
                                NoteData.headSharedMemory.slideHitboxL,
                                NoteData.headSharedMemory.slideHitboxR
                            )
                        )
                    )
                )
            ),
            onComplete()
        )
    )

    const updateParallel = Or(
        And(options.isAutoplay, GreaterOr(Time, NoteData.time)),
        Equal(noteInputState, InputState.Terminated),
        Greater(Subtract(Time, NoteData.time, InputOffset), window.good.late),
        [
            updateNoteY(),

            noteSprite.draw(noteScale, noteBottom, noteTop, noteLayout, noteZ),
            arrowSprite.draw(noteScale, arrowLayout, arrowZ),
        ]
    )

    const terminate = And(options.isAutoplay, playVisualEffects())

    return {
        preprocess: {
            code: preprocess,
        },
        spawnOrder: {
            code: spawnOrder,
        },
        shouldSpawn: {
            code: shouldSpawn,
        },
        initialize: {
            code: initialize,
        },
        touch: {
            code: touch,
        },
        updateParallel: {
            code: updateParallel,
        },
        terminate: {
            code: terminate,
        },
    }

    function onComplete() {
        return [
            noteInputState.set(InputState.Terminated),

            InputJudgment.set(
                window.judge(Subtract(TouchT, InputOffset), NoteData.time)
            ),
            InputAccuracy.set(Subtract(TouchT, InputOffset, NoteData.time)),
            Or(
                NotEqual(InputJudgment, 1),
                checkDirection(TouchDX, TouchDY, NoteData.direction),
                [InputJudgment.set(2), InputAccuracy.set(window.perfect.late)]
            ),
            InputBucket.set(bucket),
            InputBucketValue.set(Multiply(InputAccuracy, 1000)),

            playVisualEffects(),

            playFlickJudgmentSFX(),
        ]
    }

    function playVisualEffects() {
        return [
            playNoteLaneEffect(),
            playNoteEffect(
                ParticleEffect.NoteCircularTapRed,
                ParticleEffect.NoteLinearTapRed,
                ParticleEffect.NoteLinearAlternativeRed,
                'flick'
            ),
            playSlotEffect(1),
        ]
    }
}
