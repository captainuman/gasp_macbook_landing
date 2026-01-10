import useMacbookStore from '../../store'
import clsx from 'clsx';
import {Canvas} from '@react-three/fiber'
import { Box } from '@react-three/drei';

const View = () => {
    const {color , setColor , scale , setScale } =useMacbookStore();

  return (
    <div className='text-white relative bottom-20'>
      <h1 className='text-4xl pl-20 font-semibold py-5'>Take a closer look</h1>

      <div className=''>

        <Canvas>
            <Box position={[-1 ,1 ,0]}></Box>
        </Canvas>
      
        <h1 className='text-center'>Macbook pro {scale}" in {color}</h1>

        <div className='flex items-center justify-center gap-5 mt-5 h-20'>
            <div className='flex gap-3 bg-gray-900 rounded-full py-2 px-3'>
                <div onClick={()=>setColor('space black')} 
                className={clsx('bg-gray-900 rounded-full p-4 border')} />

                <div onClick={()=>setColor('silver')} 
                className={clsx('bg-gray-200 rounded-full p-4')} />

            </div>

            <div className='flex gap-1 bg-gray-900 rounded-full py-2 px-4 cursor-pointer'>
                <div onClick={()=>setScale(14)}
                className={clsx(scale=== 14 ? 'bg-white text-black rounded-full p-1' : 'bg-transparent text-white rounded-full p-1')} >14"</div>

                <div onClick={()=>setScale(16)}
                className={clsx(scale=== 16 ? 'bg-white text-black rounded-full p-1' : 'bg-transparent text-white rounded-full p-1')} >16"</div>
            </div>
        </div>



      </div>
    </div>
  )
}

export default View
