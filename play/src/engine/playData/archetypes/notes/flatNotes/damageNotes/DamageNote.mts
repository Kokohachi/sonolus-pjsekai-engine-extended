import { options } from '~/engine/configuration/options.mjs'
import { effect } from '~/engine/playData/effect.mjs'
import { particle } from '~/engine/playData/particle.mjs'
import { skin } from '~/engine/playData/skin.mjs'
import { minSFXDistance } from '../../../constants.mjs'
import { archetypes } from '../../../index.mjs'
import { SlimNote } from '../SlimNote.mjs'

export class DamageNote extends SlimNote {
    windows = {
        perfect: {
            min: 0,
            max: 0,
        },
        great: {
            min: 0,
            max: 0,
        },
        good: {
            min: 0,
            max: 0.1,
        },
    }
    bucket = { index: -1 } as unknown as Bucket
    leniency = 0

    sprites = {
        left: skin.sprites.damageNoteLeft,
        middle: skin.sprites.damageNoteMiddle,
        right: skin.sprites.damageNoteRight,
        primaryFallback: {
            left: skin.sprites.damageNoteFallbackLeft,
            middle: skin.sprites.damageNoteFallbackMiddle,
            right: skin.sprites.damageNoteFallbackRight,
        },
        secondaryFallback: skin.sprites.damageNoteSecondaryFallback,
    }

    clips = {
        perfect: effect.clips.normalGood,
    }

    effects = {
        circular: particle.effects.damageNoteCircular,
        linear: particle.effects.damageNoteLinear,
    }

    get slotEffect() {
        return archetypes.NormalSlotEffect
    }

    get slotGlowEffect() {
        return archetypes.NormalSlotGlowEffect
    }

    shouldQuit = this.entityMemory(Boolean)

    globalPreprocess() {
        this.life.miss = -40
    }

    touch() {
        if (options.autoplay) return

        for (const touch of touches) {
            if (time.now < this.targetTime) continue
            if (!this.hitbox.contains(touch.position)) continue

            this.complete(touch)
            return
        }
    }

    updateParallel(): void {
        super.updateParallel()
        if (this.shouldQuit) {
            this.result.judgment = Judgment.Perfect
            this.result.accuracy = 0
            this.despawn = true
        }
        if (time.now > this.targetTime) {
            this.shouldQuit = true
        }
    }

    complete(touch: Touch): void {
        this.result.judgment = Judgment.Miss
        this.result.accuracy = 0

        this.playHitEffects(touch.startTime)

        this.despawn = true
    }

    playSFX() {
        effect.clips.normalGood.play(minSFXDistance)
    }
    playHitEffects(hitTime: number) {
        if (options.sfxEnabled && !options.autoplay && !options.autoSFX) this.playSFX()
        super.playHitEffects(hitTime)
    }

    get shouldScheduleSFX() {
        return false
    }

    get shouldPlaySFX() {
        return false
    }

    terminate() {
        // Noop
    }

    playSlotEffects(startTime: number) {
        const start = Math.floor(this.data.lane - this.data.size)
        const end = Math.ceil(this.data.lane + this.data.size)

        for (let i = start; i < end; i++) {
            this.slotEffect.spawn({
                startTime,
                lane: i + 0.5,
            })
        }
    }
}
