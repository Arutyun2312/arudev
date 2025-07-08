export default function BackgroundBlur() {
  return (
    <div className='pointer-events-none absolute top-10 bottom-0 inset-x-0 -z-10 overflow-hidden'>
      <div className='absolute -top-10 -left-10 h-32 w-32 animate-pulse rounded-full bg-gradient-to-r from-blue-300/20 to-cyan-300/20 blur-xl'></div>
      <div className='absolute -top-5 right-20 h-24 w-24 animate-pulse rounded-full bg-gradient-to-r from-purple-300/15 to-pink-300/15 blur-lg delay-1000'></div>
      <div className='absolute top-8 right-5 h-16 w-16 animate-pulse rounded-full bg-gradient-to-r from-pink-300/10 to-rose-300/10 blur-md delay-2000'></div>
      <div className='absolute top-12 left-1/3 h-20 w-20 animate-pulse rounded-full bg-gradient-to-r from-green-300/10 to-emerald-300/10 blur-lg delay-500'></div>
    </div>
  )
}
