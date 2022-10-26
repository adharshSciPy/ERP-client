import React from 'react'
import './pos.css'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useState } from 'react';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';





function Pos() {
    const handle = useFullScreenHandle();
    let fullScreen = handle.active
    console.log(fullScreen)
    const loop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]


    return (
        <div className='dashboardcontainer'>
            <FullScreen handle={handle} >
                <div className="pos-item1">
                    <div className="pos-header">
                        <h3>Point On Sale</h3>
                        <div className="pos-buttons">
                            {fullScreen ? (
                                <button onClick={handle.exit} >
                                    <FullscreenExitIcon />
                                </button>
                            ) : (
                                <button on onClick={handle.enter}>
                                    <FullscreenIcon />
                                </button>)}
                        </div>
                    </div>

                    <div className="pos-body">
                        <div className="pos-category">
                            {

                                loop.map((i, val) => {
                                    return (
                                        <div key={val} className="pos-category-cards">
                                            {i}
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </FullScreen>
        </div>

    )
}

export default Pos