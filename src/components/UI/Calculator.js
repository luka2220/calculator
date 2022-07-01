import './Calculator.css';
import InputBox from '../InputBox';
import Compute from '../ComputeButtons/Compute';

const Calculator = () => {
    return (
        <div className="calculator">
            <InputBox/>
            <Compute/>
        </div>
    );
}

export default Calculator;