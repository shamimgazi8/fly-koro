import Image from "next/image"

const AllPosts=()=>{
    return <div className=" h-full w-full flex justify-center items-center gap-10">
        <Image className=" mt-10  rounded-md " height={500} width={500} alt="all post" src={'https://www.socialchamp.io/wp-content/uploads/2021/10/Blog-Banner_Q2-2023_1125x600_40_40-how-to-post-on-multiple-social-networks-simultaneously.png'}/>
        <Image className=" mt-10  rounded-md " height={500} width={260} alt="all post" src={'https://img.freepik.com/free-vector/website-construction-background_1361-1388.jpg'}/>
    </div>
}
export default AllPosts