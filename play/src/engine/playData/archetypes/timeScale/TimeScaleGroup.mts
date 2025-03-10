import { timeToScaledTime } from '../utils.mjs'

export class TimeScaleGroup extends Archetype {
    data = this.defineData({
        firstRef: { name: 'first', type: Number },
        length: { name: 'length', type: Number },
    })

    sharedMemory = this.defineSharedMemory({
        currentTime: Number,
        currentScaledTime: Number,
    })

    updateSequentialOrder = 0

    updateSequential() {
        this.sharedMemory.currentScaledTime = timeToScaledTime(time.now, this.info.index, true)
        this.sharedMemory.currentTime = time.now
    }
}
