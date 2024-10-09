import frame from "../assets/frame.png"
function Navbar(){
    return(
        <>
        <div className="w-[100vw] h-[10vh] flex justify-between flex-row" >
            <div className="w-[30%] flex justify-center">
                <img className="w-[100px]" src={frame} alt="" />
            </div>
            <div className="w-[70%] flex justify-center gap-10 h-[100%] items-center p-4">
                <p className="text-xl hover:cursor-pointer">home</p>
                <p className="text-xl hover:cursor-pointer">Contact</p>
                <p className="text-xl hover:cursor-pointer">About</p>
                <p className="text-xl hover:cursor-pointer">More</p>
            </div>
        </div>
        </>
    )
}
export default Navbar