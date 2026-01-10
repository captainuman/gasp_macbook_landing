

const Body = () => {
  return (
    <section className='text-white border flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center mt-10'>
            <h1 className='text-bold text-2xl'>MacBook Pro</h1>
            <img className='h-60 w-150 relative bottom-20' src="images/builtapple.png" alt="colortext" />
        </div>

        <img className='relative bottom-40 h-50 w-screen' src="images/Container.png" alt="wer" />

       <div className='relative bottom-40 w-fit flex flex-col items-center gap-3 py-5 px-10'>
         <button className='bg-blue-500 rounded-full px-3 py-1'>Buy</button>
            <p>From $1599 or $133.25/mo for 12 months</p>
       </div>
    </section>
  )
}

export default Body
