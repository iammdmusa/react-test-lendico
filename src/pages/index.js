// import Head from 'next/head'
import LendicoCalculator from '../components/LendicoCalculator/index'

const Home = () => {
  return (
    <>
      <div className='wrapper'>
        <div className='content'>
          <div className='flex'>
            <div className='flex-1'>
              <LendicoCalculator />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
