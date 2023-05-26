import { Box, Modal } from "@mui/material";
import React, { useEffect } from "react";
import Image from "next/image";

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

  const [countries, setCountries] = React.useState<any>();
  const [search, setSearch] = React.useState("");

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    overflow: "scroll",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      const filtered = countries.filter((elements: any) => {
        const name = elements.name.common;
        if (name.toLowerCase().includes(search.toLowerCase())) {
          return elements;
        }
      });
      setCountries(filtered);
      console.log(filtered);
    }
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
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
              <span>icon</span>
              <input
                className="h-10 w-full p-5 outline-none  border-b-2 border-gray-500"
                type="text"
                placeholder="Pesquise o seu pais "
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div>
              <div>
                <span>Resultado</span>
              </div>
              <div className="grid grid-cols-2 gap-5">
                {countries?.map((country: any, index: number) => [
                  <button key={index} className="flex items-center gap-5 ">
                    <div>
                      <Image
                        src={country.flags.svg}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                    <div>
                      <p>{country.name.common}</p>
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
