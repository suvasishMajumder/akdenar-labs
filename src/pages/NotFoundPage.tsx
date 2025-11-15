import StylesBtn1 from "../components/StylesBtn1";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex justify-center items-center space-y-5 flex-col max-w-screen overflow-x-hidden">
      <h1 className="font-normal text-6xl sm:text-7xl text-red-500">404</h1>

      <h3 className="text-4xl sm:text-5xl font-semibold">Page Not Found</h3>

      <h5 className=" text-xl text-center sm:text-2xl font-semibold">
        Opps ! This Page Could Not Be Found
      </h5>

<StylesBtn1 />

    </div>
  );
};

export default NotFoundPage;
