import { Box, Modal } from "@mui/material";
import React, { createElement, useEffect } from "react";
import Image from "next/image";
import { MagnifyingGlass } from 'phosphor-react'

interface CountryModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function CountryModal({
  visible,
  setVisible,
}: CountryModalProps) {
  const handleClose = () => {
    setVisible(false);
  };

  const [countries, setCountries] = React.useState<{ name: { common: string } }[]>();
  const [countriesRef, setCountriesRef] = React.useState<any>();
  const [search, setSearch] = React.useState("");

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 600,
    overflow: "scroll",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

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
    const optionElement = document.getElementById('country') as HTMLOptionElement
    optionElement.innerText = name
    optionElement.value = name
    optionElement.selected = true
    setVisible(false)
  }

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesRef(data);
        setCountries(data)
      });
  }, []);

  return (
    <div>
      <Modal
        open={visible}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="max-h-[20rem]">
            <div className="flex items-center gap-10">
              <MagnifyingGlass className="w-6 h-6"/>
              <input
                className="h-10 w-full p-5 outline-none  border-b-2 border-gray-500"
                type="text"
                placeholder="Pesquise o seu pais"
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
              <div className="grid grid-cols-2 gap-5 h-full">
                
                {countries?.map((country: any, index: number) => [
                  <button 
                    key={index} 
                    className="flex items-center gap-5"
                    onClick={() => selectCountry(country.name.common)}
                    >
                    <div>
                      <Image
                        src={country.flags.svg}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                    <div>
                      <p className="text-left">{country.name.common}</p>
                    </div>
                  </button>,
                ])}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
