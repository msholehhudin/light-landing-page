import Card from "@/components/Card";
import { services } from "@/data/index";

export const Services = () => {
  return (
    <section className="text-center py-24 px-4" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="max-container mb-4 padding-container title text-center">
          Layanan
        </h1>

        <p className="desc text-[22px] leading-[30px] padding-container mb-10">
          Semua layanan kita dilakukan oleh teknisi professional yang sudah
          terlatih dan berpengalaman. <br /> Berikut adalah layanan yang kami
          tawarkan untuk menjaga AC anda tetap prima.
        </p>

        {/* <div className="flex gap-3 justify-center items-center my-4 max-container padding-container flex-col md:flex-row"> */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              price={service.price}
              phone={"6281332802534"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
