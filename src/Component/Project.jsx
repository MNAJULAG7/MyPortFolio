import React from 'react'
import { FaDiamond } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
function Project() {
 
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-bl from-black to-blue-700">
    
         <div className="flex-1 flex flex-col items-center px-10">
              
                   <div className=' w-10/12 border-2 mt-20 p-10 justify-center-safe flex flex-col rounded-3xl  shadow-lg shadow-black'>
                  <h1 className='font-bold text-white text-3xl underline pb-3'>Event Application System</h1>
                  <p  className='flex items-center gap-3 text-2xl text-gray-300 font-medium'>
                    Developed a scalable Event Booking Application using Spring Boot and Microservices Architecture. 
                    Implemented Eureka Server, API Gateway, and Config Server for service discovery and centralized 
                    configuration. Used Apache Kafka for asynchronous communication and Feign Client for inter-service
                    communication. Integrated MySQL for data persistence and Docker for containerization and 
                    deployment. Built RESTful APIs for event management, booking, and payment services.
                  </p>
                  <div className="mt-auto flex gap-4 pt-4">
                    <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">Springboot</span>
                    <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">Kafka</span>
                    <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">Microservice</span>
                    <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">Config-server</span>
                      <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">Docker</span>
                    <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">MySQL</span>
                    
                </div>

                  </div>
                  


                  <div className=' w-10/12 border-2 mt-20 p-10 justify-center-safe flex flex-col rounded-3xl  shadow-lg shadow-black'>
                  <h1 className='font-bold text-white text-3xl underline pb-3'>Authentication System</h1>
                  <p className='flex items-center gap-3 text-2xl text-gray-300 font-medium'>
                    Developed an Authentication System with secure user registration and login functionalities.
                    Implemented JWT-based authentication and role-based authorization using Spring Boot 
                    and Spring Security. Integrated MySQL for storing user credentials and authentication 
                    data securely. Built RESTful APIs for user management and session handling.
                    </p>
                  <div className="mt-auto flex gap-4 pt-4">
                    <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">Springboot</span>
                    <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">JWT</span>
                    <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">React</span>
                    <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">MySQL</span>
                </div>
                </div>


                <div className=' w-10/12 border-2 mt-20 p-10 justify-center-safe flex flex-col rounded-3xl shadow-lg shadow-black'>
                  <h1 className='font-bold text-white text-3xl underline pb-3'>E-Commerce Application</h1>
                  <p className='flex items-center gap-3 text-2xl text-gray-300 font-medium'>
                    Developed a full-stack E-Commerce Application with features like product management,
                    user authentication, cart, and order processing. Built backend services using Spring Boot and 
                    REST APIs with MySQL for database management. Implemented secure login and role-based access
                    control for users and admins. Designed responsive frontend interfaces and integrated backend 
                    APIs for seamless user experience. Used Git and GitHub for version control and project management.
                    </p>
                  
                  <div className="mt-auto flex gap-4 pt-4">
                    <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">Springboot</span>
                    <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">JWT</span>
                    <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">React</span>
                    <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">MySQL</span>
                </div>
                </div>

                  <div className=' w-10/12 border-2 mt-20 p-10 justify-center-safe flex flex-col rounded-3xl shadow-lg shadow-black'>
                  <h1 className='font-bold text-white text-3xl underline pb-3'>Blog Application</h1>
                  <p className='flex items-center gap-3 text-2xl text-gray-300 font-medium'>
                    Developed a Blog Application with features like user authentication, blog creation, editing, commenting,
                    and post management. Built RESTful APIs using Spring Boot and integrated MySQL for
                      data storage and retrieval. Implemented secure login and role-based access control using Spring Security.
                    </p>
                  <div className="mt-auto flex gap-4 pt-4">
                    <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">Springboot</span>
                    <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">JWT</span>
                    <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">MySQL</span>
                </div>
                </div>

                <div className=' w-10/12 border-2 mt-20 p-10 justify-center-safe flex flex-col rounded-3xl shadow-lg shadow-black mb-12'>
                  <h1 className='font-bold text-white text-3xl underline pb-3'>Expense Tracker</h1>
                  <p className='flex items-center gap-3 text-2xl text-gray-300 font-medium'>
                    Developed a full-stack Expense Tracker application using Spring Boot, React.js, 
                    and MySQL to manage income and expense transactions. Implemented CRUD operations,
                    category-based expense tracking, and monthly summary features. Connected React 
                    frontend with backend REST APIs for seamless data management and user interaction.
                  </p>

                  <div className="mt-auto flex gap-4 pt-4">
                    <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">Springboot</span>
                    <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">React</span>
                    <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">MySQL</span>
                </div>
           </div>

         </div>
 <footer className="bg-gray-700 text-white flex flex-col items-center justify-center p-4  w-full h-1/12 ">
      <div className='flex gap-2'>
       < FaWhatsapp className='size-6' /> 
       <a  href="https://wa.me/916379765840"   target="_blank"  className="text-white">
       +91 6379765840 </a>
    
     </div>
      <div className='flex gap-2'>
       <IoMailOutline className='size-6'/>
       <a  href="mailto:manjuladhana11@gmail.com"  className="hover:text-cyan-300 ">
       manjuladhana11@gmail.com</a>
      </div>
    </footer>
     
     
    </div>
  )
}

export default Project