import { useParams } from "react-router-dom";
import type { serviceElemType } from "../types/types";
import Services from "./Services";

interface ServicePageProps {
  data: serviceElemType[];
}

const ServicePage: React.FC<ServicePageProps> = ({ data }) => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const cusData = data.find((temp) => temp.route.endsWith(serviceId || ""));

  if (!cusData) {
    return <div className="">No Data Found 404</div>;
  }

  return (
    <>
      <h2 className="text-3xl font-bold">{cusData.title}</h2>
      <p className="text-lg mt-2">{cusData.heading}</p>

      {cusData.sections?.map((item, index) => (
        <Services key={index} item={item} />
      ))}
    </>
  );
};

export default ServicePage;
