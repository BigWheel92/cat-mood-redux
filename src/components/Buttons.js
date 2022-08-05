import React, { Component } from "react";
import { changeMood } from "../actions/index";

import {store} from "../store"

const MOODS=["sad", 
"shocked", 
"happy",
"blissful",
"lovestruck",
"excited",
"ko"]

class Buttons extends Component {

  render() {
    const handleMoodChange=(e)=>
    {
        const mood=e.target.dataset.mood; 
        store.dispatch(changeMood(mood)) ;
    }

    return(
        <section >
            {MOODS.map((mood)=><button className="button" onClick={handleMoodChange} data-mood={mood}>{mood}</button>)}
        </section>

        )
  }
}

export {Buttons};
