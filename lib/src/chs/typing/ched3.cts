export type Chs3 = {
    $id: string
    version: Version
    title: string
    artistName: string
    notesDesignerName: string
    score: Score
    exportArgs: ExportArgs
}

export type ExportArgs = {
    $id: string
    'Ched.Plugins.SusExportPlugin': string
}

export type Score = {
    $id: string
    ticksPerBeat: number
    notes: Notes
    events: Events
}

export type Events = {
    $id: string
    bpmChangeEvents: BPMChangeEvent[]
    timeSignatureChangeEvents: TimeSignatureChangeEvent[]
    highSpeedChangeEvents: HighSpeedChangeEvent[]
}

export type BPMChangeEvent = {
    $id: string
    bpm: number
    tick: number
}

export type HighSpeedChangeEvent = {
    $id: string
    speedRatio: number
    tick: number
}

export type TimeSignatureChangeEvent = {
    $id: string
    numerator: number
    denominatorExponent: number
    tick: number
}

export type Notes = {
    $id: string
    taps: ExTap[]
    exTaps: ExTap[]
    holds: unknown[]
    slides: Slide[]
    flicks: ExTap[]
    damages: ExTap[]
    airs: Air[]
    airActions: unknown[]
}

export type Air = {
    $id: string
    parentNote: ParentNote
    verticalDirection: 0 | 1
    horizontalDirection: 0 | 1 | 2
}

export type ParentNote = {
    $ref: string
}

export type ExTap = {
    $id: string
    tick: number
    laneIndex: number
    width: number
}

export type Slide = {
    $id: string
    startWidth: number
    startLaneIndex: number
    stepNotes: StepNote[]
    startTick: number
}

export type StepNote = {
    $id: string
    laneIndexOffset: number
    widthChange: number
    tickOffset: number
    isVisible: boolean
    parentNote: ParentNote
}

export type Version = {
    $id: string
    Major: 3
    Minor: number
    Build: number
    Revision: number
    MajorRevision: number
    MinorRevision: number
}
export type SusExportPlugin = {
    playLevel: null
    playDificulty: number
    extendedDifficulty: null
    songId: null
    soundFileName: null
    soundOffset: number
    jacketFilePath: null
    hasPaddingBar: boolean
    additionalData: null
}
