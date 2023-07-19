import Image from 'next/image'
import { Inter } from 'next/font/google'
import Abc from './api/pro'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>

       <div class="italic font-bold text-4xl items-center flex justify-center">USERS</div>
       <div class=" ">
        <input type='search' placeholder=' Search Name'  class=" bg-gray-700 m-5 rounded-lg hover:bg-cyan-800"></input>
        <button class="  bg-gray-700 text-white  hover:bg-blue-700  rounded-lg p-2 justify-end items-center float-right m-5">New User</button>
        <button class="bg-gray-700 text-white   hover:bg-blue-700  rounded-lg p-2 justify-end items-center float-right m-5">Voters</button>
        </div>
      <Abc></Abc>
      
    </main>
  )
}
