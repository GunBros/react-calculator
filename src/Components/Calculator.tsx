import { useState } from "react"
import { isNumeric } from "../Utils/Numeric";
import DigitBoard from "./DigitBoard"
import ModifierButton from "./ModifierButton"
import OperationBoard from "./OperationBoard";
import Total from "./Total"

function Calculator() {
  const [expression, setExpression] = useState("0");


  const canAddDigit = () => {
    const lastIndex = expression.length - 1;
    
    if (lastIndex <= 1) {
      return true;
    }

    // 숫자가 입력됐을 때 마지막 3글자가 숫자인지 판별
    for (let i = 0; i < 3; i++) {
      if (lastIndex - i >= 0 && !isNumeric(expression[lastIndex - i])) {
        return true;
      }
    }

    return false;
  }

  const setDigit = (number: string) => {
    if (!canAddDigit()) {
      alert("숫자는 3자리까지만 입력 가능합니다!");
      return;
    }

    setExpression((prev) => (prev === "0" ? number : prev + number));
  }

  return (
    <div className="calculator">
      <Total total={expression} />
      <DigitBoard
        setDigit={setDigit}
      />
      <ModifierButton />
      <OperationBoard />
    </div>
  )
}

export default Calculator;