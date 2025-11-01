export default function BackgroundBlur() {
  return (
    <div className='absolute top-0 left-0 -z-20 h-screen w-screen overflow-clip'>
      <div className='ripple' />
      <div className='ripple' />
      <div className='ripple' />
    </div>
  )
}
