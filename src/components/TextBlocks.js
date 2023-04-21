import React from 'react'
import "./TextBlocks.css"

function TextBlocks() {
  return (
    <div className='text-block-container'>
    <div className="text-block">
      <h1>
        TEXT
      </h1>
    </div>
    <div className="text-block">
    <h1>
        Placeholder Text
      </h1>
      <p>
        The similarity in fractal dimension of retinal vessels and DLA clusters led Fereydoon Family and
colleagues to conclude tentatively that at the very least this might reflect the central importance of
diffusion in both growth processes. Mark Gottlieb of Arizona State University has attempted to go
further by concocting a simple model that takes into account some of the specific biological processes
known to control vascular growth. He modelled the host tissue as a checkerboard lattice of cells,
interlaced with a system of blood vessels. To mimic the growth of the host tissue, he allowed the size of
the whole checkerboard array to increase. After each growth step, the distance of each cell from a blood
vessel is determined, and if this distance is too great then the cell becomes ischemic and a new vessel is
added, reaching from the nearest existing vessel to the centre of the ischemic cell. If two vessels are
equally distant from an ischemic cell, they both sprout new vessels, which meet end to end in the
ischemic cell. Finally, existing vessels grow wider as the host tissue expands, so that older vessels
become broader than new vessels.
      </p>
    </div>
    </div>
    
  )
}

export default TextBlocks