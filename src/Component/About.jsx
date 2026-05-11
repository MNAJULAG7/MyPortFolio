import React from 'react'

function About() {
  return (
    <div className = "h-screen bg-linear-to-bl  to-blue-700 from-black flex flex-col  justify-center items-center">
      <div className=' w-10/12 border-2 mt-20 p-10 justify-center-safe flex flex-col rounded-3xl  shadow-lg shadow-black gap-5'>
          <p className='text-white font-semibold text-[20px]'>Hi! I’m a passionate Technical Trainer and aspiring Software Developer who enjoys both learning and teaching technology.</p>

          <p className='text-white font-semibold text-[20px] '> I started my journey with Java, building a strong foundation in Object-Oriented Programming and problem-solving. 
              Over time, I moved beyond just learning — I began training and mentoring students, helping them understand programming concepts in a clear and practical way.</p>

          <div>
          <h3 className='text-amber-200 font-bold text-[26px] '>🎓 As a Technical Trainer, I:</h3>
          <p className='text-white font-semibold text-[20px] '>🔸   Teach core programming concepts in Java and other technologies</p>
          <p className='text-white font-semibold text-[20px] '>🔸   Simplify complex topics for better understanding</p>
          <p className='text-white font-semibold text-[20px] '>🔸   Guide students in problem-solving and coding practices</p>
          </div>
          
          <div>
          <h3 className='text-amber-200 font-bold text-[26px] '>💻 Alongside teaching, I actively build my own skills by working on:</h3>
          <p className='text-white font-semibold text-[20px] '>🔸   Full-stack development using Spring Boot, React.js, and Tailwind CSS</p>
          <p className='text-white font-semibold text-[20px] '>🔸   Writing clean, efficient, and scalable code</p>
          <p className='text-white font-semibold text-[20px] '>🔸   I believe the best way to grow is to learn, build, and teach — because teaching strengthens understanding and creates real impact.</p>

          </div>
        
          <div> 
          <h3 className='text-amber-200 font-semibold text-[26px] '>🌱 Current Role:</h3>
          <p className='text-white font-semibold text-[20px] '>🔸   Technical Trainer — empowering students while continuously improving my own skills.</p>
          </div>

          <div>
          <h3 className='text-cyan-300 font-semibold text-[26px] '>🎯 Future Goal:</h3>
          <p className='text-white font-semibold text-[20px] '>🔸   To become a highly skilled software developer who builds impactful applications and continues to inspire others through teaching.</p>
  
          </div>
      </div>
    </div>
  )
}

export default About