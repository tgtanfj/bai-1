import Image from 'next/image'

const Section3Page = () => {
  return (
    <div className='w-full h-[611px] relative mt-[-40px] '>
      <Image src="/background.png" alt='background' layout='fill' objectFit='contain'/>
      <p className='text-right uppercase font-[700] text-[56px] w-[492px] h-[112px] leading-[55px] text-white absolute top-[240px] right-[130px] '>more than just a coffee shop</p>
    </div>
  )
}

export default Section3Page