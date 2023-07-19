import React, {useState, useEffect} from "react"
import Image from 'next/image'

const Abc = ()=>{
	const [dataStore, setDataStore] = useState(null)
	
	const getData = () =>{
		return fetch("https://random-data-api.com/api/users/random_user?size=20").then((completeResponse)=>
			completeResponse.json()
		)
	}

	const setData= ()=>{
		getData().then((data)=>{
			setDataStore(data)
		})
	}

	useEffect(()=>{
		setData()
	}, [])
	
	return <div class="grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 mx-2 sm:mx-5 lg:mx-32 mt-16">
		

		{dataStore?.map(({id, first_name, last_name, address, avatar})=>{
			return <div key={id} class="flex bg-slate-50 m-3 h-60 rounded-2xl space-x-2py-5 px-5 hover:bg-white hover:scale-110 
        hover:border-2 hover:cursor-pointer hover:shadow-lg border-slate-300 ">

        <div class="relative h-32 w-32">
        <div className=" relative w-20 h-20 rounded-full  "><Image src={avatar} layout='fit' fill></Image></div>
        

        </div>
        <div class="">
        <h1 class="text-xl font bold">{first_name + " " + last_name}</h1>
          <h1 class="text-base font-semibold">{address.city + " " + address.country}</h1>


          <div class="flex flex-wrap space-x-1 mt-2 "> 
          <div class="rounded-3xl text-blue-500 shadow-sm items-center py-1 px-2 border-2">explore</div>
          <div class="rounded-3xl text-blue-500 shadow-sm items-center py-1 px-2 border-2">income</div>

          </div>
        </div>

        </div>


		})}
	</div>
};

export default Abc;