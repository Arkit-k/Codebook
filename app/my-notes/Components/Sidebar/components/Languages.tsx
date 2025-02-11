import { getLanguageIcon } from "@/utils/localData/Languages";
import { useGlobalContext } from "@/Context/ContextApi";
export function Languages() {
  const {
    codeLanguageCounterObject: { codeLanguageCounter },
  } = useGlobalContext();

  // ========================================================

  return (
    <div className="mt-12 text-sm">
      {codeLanguageCounter.length > 0 && (
        <>
          <div className="font-bold text-stone-500">Languages</div>
          <div className="mt-5 ml-2 text-stone-500 flex flex-col gap-4">
            {codeLanguageCounter.map((language, index) => (
              <div className="flex justify-between" key={index}>
                <div className="flex gap-2 items-center">
                  {getLanguageIcon(capitalizeFirstChar(language.language))}
                  <span className="capitalize">{language.language}</span>
                </div>
                <span>{language.count}</span>
              </div>
            ))}

            {/* <div className="flex justify-between">
              <div className="flex gap-1 items-center">
                <IoLogoJavascript size={15} /> Javascript
              </div>
              <span className="font-bold">3</span>
            </div> */}
          </div>
        </>
      )}
    </div>
  );
}
function capitalizeFirstChar(str: string) {
  if (!str) return str;
  const s = str[0].toUpperCase() + str.slice(1, str.length);
  return s;
}
