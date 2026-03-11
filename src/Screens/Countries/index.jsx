import React, { useEffect, useState } from "react";
import BannerSection from "../../Components/Banner";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const Country = () => {
  const countryData = [
    {
      continent: "Africa",
      countries: [
        {
          country: "Nigeria",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/ng.svg",
        },
        {
          country: "South Africa",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/za.svg",
        },
        {
          country: "Egypt",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/eg.svg",
        },
        {
          country: "Kenya",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/ke.svg",
        },
        {
          country: "Ethiopia",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/et.svg",
        },
      ],
    },
    {
      continent: "Antarctica",
      countries: [
        {
          country: "Antarctica",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/aq.svg",
        },
      ],
    },
    {
      continent: "Asia",
      countries: [
        {
          country: "China",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/cn.svg",
        },
        {
          country: "India",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/in.svg",
        },
        {
          country: "Japan",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/jp.svg",
        },
        {
          country: "South Korea",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/kr.svg",
        },
        {
          country: "Indonesia",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/id.svg",
        },
      ],
    },
    {
      continent: "Europe",
      countries: [
        {
          country: "France",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/fr.svg",
        },
        {
          country: "Finland",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/fi.svg",
        },
        {
          country: "Germany",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/de.svg",
        },
        {
          country: "Italy",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/it.svg",
        },
        {
          country: "Ireland",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/ie.svg",
        },
        {
          country: "United Kingdom",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/gb.svg",
        },
        {
          country: "Switzerland",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/ch.svg",
        },
        {
          country: "Spain",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/es.svg",
        },
      ],
    },
    {
      continent: "North America",
      countries: [
        {
          country: "Canada",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/ca.svg",
        },
        {
          country: "United States",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/us.svg",
        },
        {
          country: "Mexico",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/mx.svg",
        },
        {
          country: "Cuba",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/cu.svg",
        },
        {
          country: "Panama",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/pa.svg",
        },
      ],
    },
    {
      continent: "Oceania",
      countries: [
        {
          country: "Australia",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/au.svg",
        },
        {
          country: "New Zealand",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/nz.svg",
        },
        {
          country: "Fiji",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/fj.svg",
        },
        {
          country: "Papua New Guinea",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/pg.svg",
        },
        {
          country: "Samoa",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/ws.svg",
        },
      ],
    },
    {
      continent: "South America",
      countries: [
        {
          country: "Brazil",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/br.svg",
        },
        {
          country: "Argentina",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/ar.svg",
        },
        {
          country: "Colombia",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/co.svg",
        },
        {
          country: "Chile",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/cl.svg",
        },
        {
          country: "Peru",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/pe.svg",
        },
      ],
    },
  ];
  // const [activeFilter, setActiveFilter] = useState(countryData[0].continent);
  // const [Countries, setCountries] = useState([]);

  // const filterContries = (continent) => {
  //   const filter = countryData.find((obj) => obj.continent === continent);
  //   return filter ? setCountries(filter.countries) : setCountries([]);
  // };

  // useEffect(() => {
  //   filterContries(activeFilter);
  // }, [activeFilter]);

  const [activeFilter, setActiveFilter] = useState(countryData[0].continent); // Default to the first continent
  const [Countries, setCountries] = useState(countryData[0].countries); // Set the initial countries list

  // Filter countries based on the selected continent
  const filterCountries = (continent) => {
    const filter = countryData.find((obj) => obj.continent === continent);
    setCountries(filter ? filter.countries : []); // Set the filtered countries or empty array if none found
  };

  useEffect(() => {
    filterCountries(activeFilter); // Automatically filter when the activeFilter changes
  }, [activeFilter]);





  return (
    <>
      <Helmet>
        <title>Countries</title>
      </Helmet>
      <BannerSection title={"Country"} />
      <section className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-[90%] h-full font-Jakarta flex flex-col space-y-8">
        <div className="flex flex-row flex-wrap items-center justify-between">
            <motion.h2
              initial={{ opacity: 0, translateY: 150 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="lg:text-left xl:text-left md:text-left text-4xl md:text-5xl  leading-snug font-semibold"
              style={{ lineHeight: 1.3 }}
            >
              Discover Your Perfect
              <br />
              <span className="text-text"> Study Abroad Destination</span>
            </motion.h2>
            <p className="w-full md:w-full lg:w-[40%] text-[20px] text-text">
            Unlock global opportunities with Benchmark Education. Let us guide you to the perfect study destination for a brighter future.
            </p>
          </div>



<Tabs value={activeFilter}>
      <TabsHeader>
        {countryData.map((obj,index) => (
          <Tab key={index} value={obj.continent}>
            {obj.continent}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {countryData.map((obj,index) => (
          <TabPanel key={index} value={obj.continent}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10">
           {
            obj.countries.map((item,index)=>(
              <Link
              to={`/countries/${obj.continent
                .replace(/\s+/g, "-")
                .toLowerCase()}/${item.country
                .replace(/\s+/g, "-")
                .toLowerCase()}/`}
              state={{
                continentName: `${obj.continent}`,
                countryName: `${item.country}`,
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
                className="flex flex-row items-center justify-center space-x-5 border w-[150px] lg:w-[250px] md:w-[250px] xl:w-[250px] py-2 rounded-lg cursor-pointer hover:shadow-lg"
              >
                <div
                  className="h-[50px] w-[50px] rounded-full bg-no-repeat bg-center bg-cover border"
                  style={{
                    background: `url(${item.image}) no-repeat center/cover`,
                  }}
                ></div>
                <h5>{item.country}</h5>
              </motion.div>
            </Link>
            ))
           }
           </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>



        </div>
      </section>
    </>
  );
};

export default Country;
