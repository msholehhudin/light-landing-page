import Card from "@/components/Card";

export const Services = () => {
  return (
    <section className="text-center">
      <h1 className="max-container padding-container title text-center">
        Layanan
      </h1>

      <p className="desc text-[22px] leading-[30px] padding-container">
        Semua layanan kita dilakukan dengan teknisi professional yang sudah
        terlatih.
      </p>

      <div className="flex gap-3 justify-center items-center my-4 max-container padding-container flex-col md:flex-row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};
