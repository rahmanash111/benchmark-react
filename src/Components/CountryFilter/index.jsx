import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
const graphqlBaseUrl = process.env.REACT_APP_GRAPHQL_API_URL.replace('/graphql', '');

const CountryFilter = () => {
  const query = gql`
    query Continents {
      continents {
        documentId
        ContinentName
        countries {
          CountryName
          CountryFlag {
            url
          }
          Enabled
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(query);

  const countryData =
    data?.continents.map((continent) => ({
      continent: continent.ContinentName,
      countries: continent.countries.map((country) => ({
        id: country.documentId,
        country: country.CountryName,
        image: `${graphqlBaseUrl}${country.CountryFlag.url}`, // Assuming base URL for flags
        enabled: country.Enabled,
      })),
    })) || [];

  const [activeFilter, setActiveFilter] = useState(
    countryData[0]?.continent || "Africa"
  );
  const [countries, setCountries] = useState([]);

  const filterCountries = (continent) => {
    const filter = countryData.find((obj) => obj.continent === continent);
    setCountries(filter ? filter.countries : []);
  };

  useEffect(() => {
    if (countryData.length > 0) {
      setActiveFilter(countryData[0].continent);
      filterCountries(countryData[0].continent);
    }
  }, [data]);

  useEffect(() => {
    if (activeFilter) filterCountries(activeFilter);
  }, [activeFilter]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <section>
      <div className="lg:hidden md:hidden block">
        <div className="bg-background py-2 my-5 rounded-lg flex flex-row lg:flex-row md:flex-row xl:flex-row flex-wrap space-x-0 lg:space-x-5 md:space-x-5 justify-start lg:justify-between  px-5">
          <select
            name="country"
            id="country"
            className="w-full bg-transparent py-5 outline-none"
            onChange={(e) => setActiveFilter(e.target.value)}
          >
            {countryData.map((obj, index) => (
              <option key={index} value={obj.continent}>
                {obj.continent}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-10">
          {countries.map((obj, index) => (
            <button key={index} disabled={activeFilter === "Europe"}>
              <Link
                to={
                  activeFilter === "Europe"
                    ? `/countries/${activeFilter
                      .replace(/\s+/g, "-")
                      .toLowerCase()}/${obj.country
                        .replace(/\s+/g, "-")
                        .toLowerCase()}/`
                    : "javascript:void(0)"
                }
                state={{
                  continentName: activeFilter,
                  countryName: obj.country,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeInOut", duration: 0.8 }}
                  className="flex flex-row items-center justify-center gap-5 border w-[145px] lg:w-[250px] md:w-[250px] xl:w-[250px] py-2 rounded-lg cursor-pointer hover:shadow-lg"
                >
                  <div
                    className="h-[25px] w-[25px] rounded-full bg-no-repeat bg-center bg-cover border "
                    style={{
                      background: `url(${obj.image}) no-repeat center/cover`,
                    }}
                  ></div>
                  <h5 className="text-[13px]">{obj.country}</h5>
                </motion.div>
              </Link>
            </button>
          ))}
        </div>
      </div>
      <div className="hidden lg:block md:block">
        <Tabs value={activeFilter}>
          <TabsHeader>
            {countryData.map((obj, index) => (
              <Tab
                key={index}
                value={obj.continent}
                onClick={() => setActiveFilter(obj.continent)}
              >
                {obj.continent}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {countryData.map((obj, index) => (
              <TabPanel key={index} value={obj.continent}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                  {obj.countries.map((item, idx) => (
                    <Link
                      key={idx}
                      to={
                        item.enabled
                          ? `/countries/${obj.continent
                            .replace(/\s+/g, "-")
                            .toLowerCase()}/${item.country
                              .replace(/\s+/g, "-")
                              .toLowerCase()}/`
                          : "javascript:void(0)"
                      }
                      state={{
                        continentName: obj.continent,
                        countryName: item.country,
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
                  ))}
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </section>
  );
};

export default CountryFilter;
