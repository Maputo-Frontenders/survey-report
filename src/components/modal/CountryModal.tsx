import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MagnifyingGlass, X } from 'phosphor-react'

interface CountryModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CountryModal = ({ visible, setVisible }: CountryModalProps) => {
  const [countries, setCountries] = useState<{ name: { common: string } }[]>();
  const [countriesRef, setCountriesRef] = useState<any>();
  const [search, setSearch] = useState("");

  const handleKeyDown = (event: { key: string }) => {
    const filtered = countriesRef.filter((elements: any) => {
      const name = elements.name.official;
      if (name.toLowerCase().includes(search.toLowerCase())) {
        return elements;
      }
    });
    setCountries(filtered);
    console.log(filtered);
  };

  const selectCountry = (name: string) => {
    const optionElement = document.getElementById('country') as HTMLOptionElement;
    optionElement.innerText = name;
    optionElement.value = name;
    optionElement.selected = true;
    setVisible(false);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesRef(data);
        setCountries(data);
      });
  }, []);

  return (
    <div 
      className={`fixed z-50 p-5 ${ visible ? "bg-black/80 flex justify-center items-center bottom-0 left-0 w-full h-full" : "hidden" }`}
    >
      <div className="max-w-xl w-full h-[530px] lg:h-96 bg-white rounded p-2 relative z-[500]" tabIndex={1}>
        <X size={28} onClick={ () => { setVisible(false); } } className="ml-auto cursor-pointer" />
        <div className="flex gap-2 border border-black rounded p-1 mt-1">
          <MagnifyingGlass size={32} weight="bold" />
          <input 
            placeholder="Escreva o nome do pais" 
            type="text" 
            className="w-full outline-none" 
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="h-full mt-8">
          { !(countries?.length! > 0) && (
            <div className="flex w-full justify-center items-center">
              Nenhum país Encontrado
            </div>
          )}

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 h-[400px] lg:h-[250px] overflow-y-scroll">
            {
              countries?.map((country: any, index: number) => {
                return (
                  <div 
                    key={index} 
                    className="h-fit flex items-center gap-5 cursor-pointer"
                    onClick={() => selectCountry(country.name.common)}
                  >
                    <div>
                      <Image
                        src={country.flags.svg}
                        alt=""
                        width={25}
                        height={25}
                      />
                    </div>
                    <div>
                      <p className="text-left">{country.name.common}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryModal;