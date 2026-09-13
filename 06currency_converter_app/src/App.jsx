import { useState } from "react";
import InputBx from "./components/Inputbx";
import useCurrencyInfo from "./hooks/usecurrencyinfo";
import "./App.css";

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertAmount, setConvertAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);

    const options = Object.keys(currencyInfo || {});

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertAmount);
        setConvertAmount(amount);
    };

    const convert = () => {
        if (!currencyInfo || !currencyInfo[to]) {
            return;
        }

        setConvertAmount(amount * currencyInfo[to]);
    };

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage:
                    "url('https://tse1.mm.bing.net/th/id/OIP.qxtqeNziEK55tpCdINF1QwHaEO?r=0&rs=1&pid=ImgDetMain&o=7&rm=3')",
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        {/* FROM */}
                        <div className="w-full mb-1">
                            <InputBx
                                label="From"
                                ammount={amount}
                                currencyOptions={options}
                                onamountChange={(value) =>
                                    setAmount(value)
                                }
                                onCurrencyChange={(currency) =>
                                    setFrom(currency)
                                }
                                selectCurrency={from}
                            />
                        </div>

                        {/* SWAP */}
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                onClick={swap}
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            >
                                Swap
                            </button>
                        </div>

                        {/* TO */}
                        <div className="w-full mt-1 mb-4">
                            <InputBx
                                label="To"
                                ammount={convertAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) =>
                                    setTo(currency)
                                }
                                selectCurrency={to}
                                ammountDisable={true}
                            />
                        </div>

                        {/* CONVERT BUTTON */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                        >
                            Convert
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default App;