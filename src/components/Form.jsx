import {useState} from "react"
import Buttons from "./Buttons"
import Poster from "./Poster"
function Form(){
    const [name,setName]=useState("")
    const [text,setText]=useState("")
    const [email,setEmail]=useState("")
    function handleSubmit(event){
        event.preventDefault();
        setName(event.target[0].value)
        setEmail(event.target[1].value)
        setText(event.target[2].value)
    }
    console.log("name of the student = ",name," email = ",email," text = ",text)
    
    return(
        <>
        <div class="w-[100vw]   flex justify-center gap-3 items-center  ">
            <div className="w-[40%] ml-4">
            <div className="w-[100%] flex flex-col   ">
            
            <Buttons/>
            
            <div className="w-[100%] flex justify-center">
            <form action="" onSubmit={handleSubmit}>
            <div class="relative mt-5 ">
                <label class="absolute -top-3  bg-white px-1 text-xl text-black">Name</label>
                <input type="text"  class="w-[60%] border-2 border-black rounded-md p-2 focus:outline-none " />
            </div>
            <div class="relative w-full mt-5 ">
                <label class="absolute -top-3  bg-white px-1 text-xl text-black">Email</label>
                <input type="text" class="w-[60%] h-[] border-2 border-black rounded-md p-2 focus:outline-none " />
            </div>
            <div class="relative w-full mt-5">
                <label class="absolute -top-3  bg-white px-1 text-xl text-black">Email</label>
                <textarea type="text" cols={70} rows={5} class="w-[60%] border-2 border-black rounded-md p-2 focus:outline-none " />
            </div>
            <div className="w-[100%] flex "> 
                <button className="bg-black text-white p-2 mt-4 w-[30%] rounded-md ">Submit</button>
            </div>
            </form>
            </div>
            </div>
            </div>
            <div className="w-[50%]">
                <Poster/>
            </div>
        </div>

        </>
    )
}
export default Form