import { ArrowRigth } from "../../../components/common";
import { mockBlog } from "../../../utils";

export const BlogSection = () => {
  return (
    <section className="bg-[#FFFFFF]">
      <div className="container mx-auto px-5 pb-10">
        <h3 className="text-[#484848] text-[20px] lg:text-[30px] font-bold mb-8 xl:mb-10 text-center line-clamp-2">
          OUR WELDING HELMET BLOG
        </h3>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-4">
          {
            mockBlog.map(blog => (
              <div className="col-span-1 mx-auto" key={blog.id}>
                <div className="border shadow-sm max-w-sm 2xl:max-w-sm">
                  <img src={blog.image} alt={blog.title} />
                  <div className="flex flex-col pb-4 px-5">
                    <span className="text-center text-[#949494] font-normal mt-5 mb-4">{blog.date}</span>
                    <h3 className="text-center font-medium mb-1 lg:h-[48px] xl:h-auto">{blog.title}</h3>
                    <p className="text-justify text-[14px] font-normal mb-5 cursor-pointer lg:line-clamp-5 xl:line-clamp-4">{blog.description}</p>
                    <span className="flex items-center justify-center text-[#d91023] font-normal">Read now <ArrowRigth/> </span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="w-full flex justify-center mt-6 xl:mt-12">
          <button className="w-full sm:max-w-sm rounded-xl px-3 py-2 mt-2 bg-[#d91023] text-[#FFFFFF] flex items-center justify-center hover:bg-red-700">
            <span className="font-normal">See more</span>
            <ArrowRigth/>
          </button>
        </div>
      </div>
    </section>
  );
};
