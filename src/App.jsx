import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Menu } from "./components/Menu";
import { ScrollControls,Scroll, Html } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { useState } from "react";
import { Cursor } from "./components/Cursor";
function App() {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <>
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={2} damping={0.1}>
          <Experience menuOpened={menuOpened}/>
          <Scroll html>
            <Interface/>
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
      <h1 style={{ position: 'absolute', top: 50, left: 40, fontSize: '15px', color: 'Black' }}>ChatDB</h1>
      <Cursor/>
    </>

  );
}

export default App;
