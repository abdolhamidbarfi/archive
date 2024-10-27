import { memo } from "react";

const MemoHeavyCal: React.FC<{test: () => void}> = () => {

    const heavyCalculation = () => {
        let total = 0;
        for (let i = 0; i < 300000000; i++) {  // تعداد تکرار زیاد برای زمان‌بر کردن محاسبه
            total += Math.sqrt(i);
        }
        return total;
    };

    heavyCalculation()
    return (
        <h2>This componets have heavy Calculation</h2>
    )
}


export default memo(MemoHeavyCal)
export { MemoHeavyCal }
