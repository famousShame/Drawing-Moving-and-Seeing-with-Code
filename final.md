## Final Project


https://editor.p5js.org/seamus.tynan/sketches/5xqWwOaB6


<iframe width="400" height="400" src="https://editor.p5js.org/seamus.tynan/embed/5xqWwOaB6"></iframe>


For my final project I wrote a generative music piece. It consists of one polysynth and two oscillators. The polysynth plays chords at random while the two oscillators, serving as the bass and lead are mapped to perlin noise to give them a "walking" feel. The visuals are made from a 3D shape drawn with a large stroke weight and change color based upon the value of the slider, which also controls frame rate. The tempo of the piece is directly controlled by the frame rate, so each time the draw function is run, the oscillators and polysynth have a chance of being triggered. The background is alo drawn with an alpha value that starts low and slowly increases as the sketch progresses. This gives the visuals a "watercolor" feel in the beginning but then transitions into more solid colors.


Some feedback I recieved was that I should implement more sliders/buttons to give the player more control over the output. This is definitely something I will think about, because I did think that the program could use more variety. Another problem I encountered that was addressed during the feedback session was that I have some memory problems in my sketch. There is something I am doing inefficiently in my program that causes it to overload at some point and stop running. I was not able to find any documentation of this happening to others with a simple search, but I will continue to look into it.
