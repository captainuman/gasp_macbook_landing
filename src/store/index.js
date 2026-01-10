import {create} from 'zustand'

const useMacbookStore = create((set) => ({
    color: 'silver',
    setColor: (newColor) => set({color: newColor}),

    scale : 14,
    setScale : (newScale) => set({scale : newScale}),

    reset : () => set({color : 'silver', scale : 0.08})

})) 

export default useMacbookStore