import { skin } from '../../../../skin.mjs'
import { TraceNote } from './TraceNote.mjs'

export class CriticalTraceNote extends TraceNote {
    sprites = {
        left: skin.sprites.criticalTraceNoteLeft,
        middle: skin.sprites.criticalTraceNoteMiddle,
        right: skin.sprites.criticalTraceNoteRight,
        fallback: {
            left: skin.sprites.criticalNoteLeft,
            middle: skin.sprites.criticalNoteMiddle,
            right: skin.sprites.criticalNoteRight,
        },
        secondaryFallback: skin.sprites.criticalNoteFallback,
    }

    tickSprites = {
        tick: skin.sprites.criticalSlideTickNote,
        fallback: skin.sprites.criticalSlideTickNoteFallback,
    }
}
