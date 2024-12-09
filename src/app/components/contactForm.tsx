'use client'
import React, { useState } from "react";
import Select from './select';
import { useTexts } from '../context/Texts';
import Image from "next/image";
import Title from "./title";
import { useMobile } from "../context/Mobile";
import { options } from "../utils";
import { useRouter } from "next/navigation";
import FamilyImg from "../icons/FamilyImg";


const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ id: "", phone: "" });
  const [errors, setErrors] = useState<{ id?: string; phone?: string }>({});
  const router = useRouter();
  const { t } = useTexts() || { t: {} };
  const { isMobile } = useMobile() || { isMobile: false };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, type: value }));
  };

  const validateField = (name: string, value: string) => {
    let error = "";
    if (name === "id" && value.length !== 8) {
      error = "Debe tener exactamente 8 caracteres.";
    }
    if (name === "phone" && value.length !== 9) {
      error = "El número debe tener exactamente 9 dígitos.";
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
    return error === "";
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (errors.id === '' && errors.phone === '') {
      validateField("id", formData.id);
      validateField("phone", formData.phone);

      router.push("/planes");

      alert("Formulario enviado correctamente.");
      console.log("Datos enviados:", formData);
    } else {
      console.log("Errores en el formulario:", errors);
    }
  };


  return (
    <div className="mx-auto divide-y sm:divide-y-0 flex flex-col sm:flex-row gap-6 md:gap-20 lg:gap-32">
      <div className="flex justify-center items-center gap-4">
        {isMobile && (<Title />)}
        {/* <FamilyImg
          width={isMobile ? 136 : 480}
          height={isMobile ? 160 : 560}
        /> */}
        <Image
          src={'/family.svg'}
          alt="family"
          width={isMobile ? 136 : 480}
          height={isMobile ? 160 : 560}
          priority
        />
      </div>
      <form onSubmit={handleSubmit} className='pt-6 lg:w-[352px]'>
        {!isMobile && (<Title />)}
        <h3 className='mb-4 text-sm'>{t.form?.subtitle}</h3>
        <div className="mb-4 grid grid-cols-2 border border-gray-300 rounded-lg divide-x">
          <Select options={options} onChange={handleSelectChange}></Select>
          <input
            className='w-full p-2 rounded-r-lg focus:outline-none focus:ring focus:border-purple-400'
            type="number"
            id="id"
            name="id"
            placeholder='N. de identificacion'
            value={formData.id}
            onChange={handleChange}
          />
        </div>
        {errors.id && <p className="text-red-500 text-xs">{errors.id}</p>}
        <div className="mb-4">
          <input
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-purple-400"
            type="number"
            id="phone"
            name="phone"
            placeholder='Celular'
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
        <div className="flex flex-col gap-3">
          <div className='flex gap-2'>
            <input type='checkbox' id="privacy" />
            <p className="text-gray-600 text-xs">{t.form.privacy}</p>
          </div>
          <div className='flex gap-2'>
            <input type='checkbox' id="trades" />
            <p className="text-gray-600 text-xs">{t.form.trades}</p>
          </div>
          <a href="#" className=" underline text-xs">{t.form.terms}</a>
        </div>
        <button
          className={"my-12 w-full p-2 bg-black text-white rounded-lg focus:outline-none focus:ring focus:border-purple-400 "}
          type="submit"
          disabled={(errors.id === '' && errors.phone === '') ? false : true}
        >
          {t.form.submit}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
