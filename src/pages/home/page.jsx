const Home = () => {
  return (
      <div className="relative w-full h-full">
        <div className="border-b">
          <img className="w-full" src="/src/assets/sale/banner.png" alt="banner" />
        </div>

        <div className="flex item-center justify-center pt-5">
          <div className="pb-2">
            <h2 className="text-3xl font-helvetica-medium uppercase
              after:content-[''] 
              after:absolute 
              after:left-1/2 
              after:bottom-0 
              after:-translate-x-1/2 
              after:h-[1px] 
              after:w-[9.5%] 
              after:bg-black">best seller</h2>
          </div>
        </div>
      </div>
  )
}

export default Home;