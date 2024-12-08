import React from "react";
import { useTexts } from "../context/Texts";

const Title =() => {
    const { t } = useTexts() || { t: {} };
    return (
        <div className="grid gap-4">
            <p className='text-[12px] text-center font-bold w-[140px] bg-custom-gradient'>{t.form.caption}</p>
            <h2 className="text-2xl font-bold mb-4">{t.form.title}</h2>
        </div>
    )
}

export default Title;
