input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        `)
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(261 * 2, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        `)
})
basic.showLeds(`
    . # . # .
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    `)
music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
})
