const Home = () => {
  return (
    <div className="w-full h-[89vh] flex justify-center items-center bg-home-img absolute -z-10 object-contain">
      <div className="max-width px-5 py-10 text-center">
       

        <div class="relative inline-flex  group mt-[400px]">
          <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <a
            href="https://speech-to-textconvertor.netlify.app/"
            title="Get quote now"
            class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Let's Get Started!
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
// bg-[url('https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2Fcontent%2Fcover_image_file%2Fcover_image%2F1297818%2Fregular_1708x683_cover-designing-a-vui-93e1e3efe4e9489fdfeed319cbb38f4c.png')]