// Retorna el formato de visualización en función de los tamaños del dispositivo

import { create } from 'zustand';

const useScreenModel = create((set)=>({
    "model": 'null',
    setScreenModel: (model) => set({ model })
}))

const handleResize = () => {
    
    const { setScreenModel } = useScreenModel.getState();
    const width = window.outerWidth;
    const height = window.outerHeight;
    const portrait = width<height;
    const landscape = width>height;

    (width<=480 && portrait) ? setScreenModel(1) // model 1 > small portrait
      : (width>480 && portrait) ? setScreenModel(2) // model 2 > medium portrait
      : (height<=480 && landscape) ? setScreenModel(3) // model 3 > small landscape
      : (height>480 && width>480 && width<=1024 && landscape) ? setScreenModel(4) // model 4 > medium landscape
      : (height>480 && width>1024 && landscape) ? setScreenModel(5) // model 5 > big landscape
      : setScreenModel(0)
  };

window.addEventListener("resize", handleResize);
window.addEventListener("DOMContentLoaded", handleResize);

export default useScreenModel;