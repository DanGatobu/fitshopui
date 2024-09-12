import TitlePart from "../Components/TitlePart"

const Contact = () => {
  return (
    <div>

      <div className="text-center text-2xl pt-10 border-t ">
        <TitlePart title1={'CONTACT'} title2={"US"}/>

      </div>
      <div className=" my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src="" className="w-full  md:max-w-[480px]" alt="" />
        <div className=" flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store </p>
          <p className="text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing. <br />Lorem ipsum dolor sit amet. </p>
          <p className="text-gray-600">(+254) 759 678 765 <br />Email:danbuilder@gmail.com</p>
          <p className="font-semibold text-xl text-gray-600">Careers At GDG</p>
          <p  className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          <button className="border px-8 text-sm font-medium py-4 hover:bg-black hover:text-white transition-all duration-500 ">Explore Jobs</button>
          

        </div>

      </div>

    </div>
  )
}

export default Contact