import NavBar from "@/components/NavBar";
import BarChart from "@/components/charts/BarChart";
import ColumnChart from "@/components/charts/ColumnChart";
import SubmitForm from "@/components/SubmitForm";
import Footer from "@/components/Footer";
import DownloadButton from "@/components/DownloadButton";
import Script from 'next/script'
import useTranslation from "next-translate/useTranslation";


export default function Home() {
  const { t, lang } = useTranslation("common");

  return (
    <>
      {<Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZSMZR3HXYD"></Script>}
      {<Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZSMZR3HXYD');
        `}
      </Script>}
      {<NavBar />}
      <main className="w-full h-full transition-all">
        <section
          id="home"
          className="relative min-h-screen w-full p-5 py-10 bg-hero bg-cover bg-fixed bg-right text-white"
        >
          <div className="relative z-20 mt-20 lg:mt-36 max-w-6xl mx-auto">
            <h1 className="text-5xl my-10 max-w-2xl w-full font-semibold lg:text-6xl text mt-14 lg:mt-2">
              {t("hero_title")}
            </h1>

            <DownloadButton />
          </div>
          <div className="absolute z-10 bg-black/80 w-full h-full top-0 left-0"></div>
        </section>

        <section
          id="about"
          className="relative w-full p-5 py-10 text-white"
        >
          <div className="relative z-20 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t("about_title")}</h2>
            <div className="w-full flex flex-wrap gap-6 justify-between">
              <div className="max-w-md flex flex-col gap-4">
                <p>{t("about_paragraph_1")}</p>
                <p>{t("about_paragraph_2")}</p>
              </div>
              <div className="max-w-md flex flex-col gap-4">
                <p>{t("about_paragraph_2")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full p-5 py-10 text-white relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-lg font-bold mb-6">{t("development")}</h2>

            <div className="flex flex-col w-full gap-20">
              <div className="flex justify-center  lg:justify-between flex-wrap gap-10">
                <div className="max-w-md flex flex-col gap-4">
                  <h3 className="text-4xl font-bold mb-6">
                    {t("most_used_lang")}
                  </h3>
                  <p>{t("most_used_lang_statistics")}</p>
                  <p>{t("most_used_markup_lang")}</p>
                </div>
                <div className="flex flex-col gap-4 max-w-xl w-full">
                  <h4 className="text-2xl font-normal mb-6">{t("most_used_languages")}</h4>
                  <ColumnChart
                    data={{
                      series: [
                        {
                          name: t("percentage_text"),
                          data: [17.67, 14.95, 14.36, 14.21, 8.8, 8.6, 4.9, 4.36, 1.83],
                        },
                      ],
                      categories: [
                        "HTML/CSS",
                        "Java",
                        "JavaScript",
                        "SQL",
                        "PHP",
                        "Python",
                        "Typescript",
                        "C#",
                        "Bash/Shell"
                      ],
                    }}
                  />
                </div>
              </div>

              <div className="flex justify-center lg:justify-between flex-wrap gap-10">
                <div className="max-w-md flex flex-col gap-4">
                  <h3 className="text-4xl font-bold mb-6">
                    {t("education_and_learning")}
                  </h3>
                  <p>{t("where_learn")}</p>
                  <p>{t("learn_methods_1")}</p>
                  <p>{t("learn_methods_2")}</p>
                </div>

                <div className="flex flex-col gap-4 max-w-xl w-full">
                  <h4 className="text-2xl font-normal mb-6">{t("education_section_subtitle")}</h4>

                  <BarChart
                    data={{
                      series: [
                        {
                          name: t("percentage_text"),
                          data: [34.89, 20.32, 9.65, 8.45, 6.47, 5.16, 5.10, 4.08, 2.88, 1.62, 0.54, 0.48],
                        },
                      ],
                      categories: [
                        "Youtube",
                        "Udemy",
                        "LinkedIn Learning",
                        "Coursera",
                        "Codeacademy",
                        "Other",
                        "Udacity",
                        "edX",
                        "Pluralsight",
                        "Explicador",
                        "Skillsoft",
                        "Kutiva"
                      ],
                    }}
                  />
                </div>
              </div>

              <div className="absolute h-72 w-full -bottom-10 left-0 backdrop-filter backdrop-blur-[2px] bg-gradient-to-b from-transparent to-primary"></div>
            </div>
          </div>
        </section>

        <section className="bg-primary">
          <SubmitForm />
        </section>
      </main>

      <Footer />
    </>
  );
}
