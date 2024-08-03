import React, { useEffect, useState } from "react";
import FormHeader from "../../../components/FormHeader";
import LanguageTab from "../../../components/LanguageTab";
import EnForm from "./EnForm";
import BnForm from "./BnForm";
import { Provider, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import store from "../../../apiCalling/store";
import useWeightEditContext from "../context/WeightEditContext";

export default function WeightEditContent() {
  const { getWeight, number, Weight, form, updateHandle } =
    useWeightEditContext();

  const { id } = useParams();
  const [language, setLanguage] = useState("english");

  useEffect(() => {
    getWeight(id);
  }, []);

  const weight = useSelector((state) => state.weight);
  const errors = useSelector((state) => state.errors);

  return (
    <div className="mx-auto 2xl:w-4/12 xl:w-5/12 lg:w-6/12 sm:w-8/12 w-full pt-0  bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-md mt-28">
      <FormHeader title="Weight Updated" />
      <LanguageTab language={language} setLanguage={setLanguage} />
      <Provider store={store}>
        {language === "english" && (
          <EnForm
            weight={weight}
            number={number}
            Weight={Weight}
            form={form}
            updateHandle={updateHandle}
            errors={errors}
          />
        )}
        {language === "bangla" && <BnForm />}
      </Provider>
    </div>
  );
}
