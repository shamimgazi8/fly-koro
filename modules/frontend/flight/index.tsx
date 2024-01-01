import Image from "next/image";
const Flight=()=>{
    return <div className="h-full w-full flex items-center justify-center">

        <Image className=" rounded-lg mt-10" height={500} width={500} src={'https://www.shutterstock.com/image-vector/blue-sky-clouds-plane-taking-600nw-1775871659.jpg'} alt="flight"/>
    </div>
}
export default Flight;