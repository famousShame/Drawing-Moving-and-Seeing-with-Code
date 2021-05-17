## TidalCycles

Working with TidalCycles and Estuary has been an amazing experience. It has had me very exited to continue using it outside of this class and to get involved in the livecoding community. I have also been researching some prominant figures in the livecoding community for my senior project such as Alex McLean and Thor Magnusson. I also found a extension of TidalCycles that Thor Magnuson created, called [Threnoscope](https://github.com/thormagnusson/threnoscopeSC), which specializes in creating drones. 

This is really interesting to me, particularly since I have been researching alternative ways of controlling synthezisers (other than using a traditional keyboard). I have also found some artists that have been doing live prototyping and breadboarding with Arduino and I have been thinking about the possibilities of live coding with hardware. Live coding particularly lends itself to the way people have been participating in live music performance in this post-pandemic world.

I have included some drum patterns I have programmed in MiniTidal below:


```s "[bd, jvbass, hh:10] [hh] [hh] [bd, jvbass, 808:13*4] [cp, hh:10, sd] [hh] [hh] [hh, 808:5] [hh:10] [sd, hh] [hh, bd, jvbass] [808:13*4] [hh:10, cp, sd] [hh, bd, jvbass] [hh] [hh] " # speed "0.75"```


```s "[bd:feel] [] [hh] [hh] [bd:feel, feel:4] [] [hh] [bd:feel] [bd:feel] [] [hh:7] [casio:9, hh] [bd:feel, feel:4] [] [hh] [casio:9] "```


```slow 2 $ s "jvbass*16" # n "c1 e1 f1 a2" # up "-12" ```


```s "[feel:6] [feel] [feel:3, feel:4] [feel] [feel] [feel:6] [feel:3, feel:4] [feel:14]"```


```s "[808:4, bd] [808:4] [808:4, 808:2] [808:4] [808:4, feel:9] [808:4, 808:2] [808:4] [808:4, bd] [808:4, 808:2] [808:4] [808:4, bd] [808:4, 808:2] [808:4] [808:4, feel:9] [h808:4, 808:2] [808:4, 808:2]"```


```s "[feel, hh:10] [feel:3, hh:10] [feel*2, hh:10] [feel:3, hh:10] [hh:10] [feel:3, hh:10] [feel, hh:10] [feel:3, hh:10]"```


```stut 4 0.1 0.5 $ s "amencutup*8" # n (irand 8) # speed "0.5" # crush "16 4 2"```


```chunk 4 (# speed 2) $ stut 4 0.1 0.5 $ s "amencutup*8" # n (irand 8) # speed "1"```


```s "[bd:odx] [hh:odx] [odx:14] [hh:odx] [odx:3] [hh:odx] [ho] [hh:odx] [odx:14] [odx:3] [hh:odx] [bd:odx] [odx:3] [odx:12] [ho] [odx:12]"```


```s "[odx, odx:17] [odx:2] [odx:6] [odx:8] [odx:3] [odx:14] [odx:14] [odx] [odx] [odx:3] [odx:14] [odx:14] [odx:3] [odx:14] [odx:14] [odx:14]"```


```slow 2 $ s "[odx] [odx:4] [hc] [hc] [odx:3] [hc*2] [hc] [hh*8] [odx] [hh:8*16] [hc] [hc] [odx:3] [hc*2] [hc] [ho, hh:7]" # speed "1"```


```s "[odx] [hc] [odx, odx:3] [hc] [odx] [hc] [odx, odx:3] [hc]"```


```slow 2 $ s "[] [] [] [] [odx:3] [] [] [] [] [] [] [] [odx:3] [] [] [] "```