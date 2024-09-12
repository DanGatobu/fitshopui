import NewsLetter from "../Components/NewsLetter"
import TitlePart from "../Components/TitlePart"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t ">
        <TitlePart title1={"ABOUT"} title2={"us"}/>

      </div>
      <div  className="my-10 flex flex-col md:flex-row gap-16">
        <img src="" className="w-full md:max-w-[450px]" alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis qui quod ad quaerat eaque adipisci animi sequi ratione quis magni. Nihil neque dicta tempore a laudantium porro, id laborum, totam perspiciatis veritatis cum voluptates corporis. Numquam fugit quibusdam impedit saepe?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam nulla placeat, inventore tenetur molestiae quod repellendus quis, veniam exercitationem recusandae atque eum quasi maxime accusamus totam saepe at cupiditate blanditiis?</p>
          <b className="text-gray-800">MISSION</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ad officiis ab officia quo veritatis neque optio voluptas recusandae. Voluptas quos soluta, eveniet eius nulla natus eaque mollitia, blanditiis cumque facilis ipsa sequi repellendus distinctio omnis quod ratione illum tempora deserunt inventore voluptates impedit dolorum possimus minus aspernatur. Repellendus aspernatur sapiente, quod provident iusto, enim eum aut laboriosam accusamus earum vero labore vitae praesentium, ratione tempora error? Ipsum necessitatibus dignissimos adipisci quo, repellat ex sequi soluta dolores. Voluptate, ipsa soluta?</p>


        </div>
      </div>
      <div className="text-xl py-4">
        <TitlePart title1={"WHY"} title2={"CHOOSE US"}/>

      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 ">
        <div className="border px-20 md:px-16 py-8 sm:py20 flex flex-col gap-5 ">
          <b>QUALITY ASUARANCE</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequuntur ut laudantium est harum sapiente velit tenetur sed beatae obcaecati blanditiis id temporibus quibusdam iusto, optio, doloribus quod. Temporibus, magnam.</p>

        </div>
        <div className="border px-20 md:px-16 py-8 sm:py20 flex flex-col gap-5 ">
          <b>CONVINIENCE</b>
          <p className="text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consequatur magni velit vero facilis provident accusamus sequi inventore quaerat unde saepe dolorem quasi laboriosam reiciendis id esse praesentium modi, sed totam vitae quisquam? Hic iste, vitae necessitatibus corrupti, architecto id similique sed voluptatum voluptatem illum saepe minus tempore quod voluptate? Iste quam fugiat qui dolore esse delectus iusto, nemo inventore fugit suscipit reiciendis dolores animi?</p>

        </div>
        <div className="border px-20 md:px-16 py-8 sm:py20 flex flex-col gap-5 ">
          <b>EXCEPTIONAL CUSTOMER SERVICE</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum optio sint totam vel cupiditate qui omnis quam dolorum illo tempore veniam assumenda quo, soluta praesentium sit quis velit error quaerat, nisi nobis. Libero ducimus ex maxime in tenetur, quisquam expedita earum sed aut animi quo?</p>

        </div>

      </div>
      <NewsLetter/>
    </div>
  )
}

export default About