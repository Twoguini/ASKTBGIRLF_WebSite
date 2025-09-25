import { useState, useEffect } from "react";

type CheckListProps = {
  onChecked?: (checkedItems: Record<string, boolean>) => void;
};

export default function CheckList({ onChecked }: CheckListProps) {
const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    flores: false,
    retrato: false,
    album: false,
    caixa: false,
    surpresaFinal: false,
  });

  const handleChange = (name: string) => {
    setCheckedItems(prev => {
      const newState = { ...prev, [name]: !prev[name] };
      return newState;
    });
  };

  // avisa o pai sempre que checkedItems mudar
  useEffect(() => {
    onChecked?.(checkedItems);
  }, [checkedItems, onChecked]);

  return (
    <div className="checklistColumnContainer">
      <h1>Checklist Time!</h1>

      {Object.keys(checkedItems).map((key) => (
        <div key={key} className="checkInputContainer">
          <input
            type="checkbox"
            name={key}
            id={key}
            checked={checkedItems[key]}
            onChange={() => handleChange(key)}
          />
          <label htmlFor={key} className={checkedItems[key] ? "checkedLabel" : ""}>
            {key === "surpresaFinal" ? "Surpresa Final!" : key.charAt(0).toUpperCase() + key.slice(1)}
          </label>
        </div>
      ))}
    </div>
  );

}