import OtpRightImage from "../assets/verify-account-right.png"
import TechVerseLogo from "../assets/techsterLogo-Light.svg"


const OtpPage = () => {
    
    return (
        <div className="flex overflow-y-clip">
            <div className="w-full">
                <div className="py-5 px-10">
                    <img src={TechVerseLogo} alt="" />
                </div>
                <div className="flex justify-center items-center h-full">
                    <div className="flex flex-col gap-y-4 items-center w-3/4 h-3/4">
                        <h1 className="font-semibold text-4xl">Verify Account</h1>
                        <p className="text-center">To verify your account, simply enter the 6 digit code. We've sent a verification code to your email</p>
                        <form action="" className="flex flex-col gap-y-2 items-center">
                            <div className="flex gap-x-2">
                                <input type="text" name="input1" className="border-0 outline-none w-12 py-3 rounded-lg shadow text-center" maxLength={1} />
                                <input type="text" name="input2" className="border-0 outline-none w-12 py-3 rounded-lg shadow text-center" maxLength={1} />
                                <input type="text" name="input3" className="border-0 outline-none w-12 py-3 rounded-lg shadow text-center" maxLength={1} />
                                <input type="text" name="input4" className="border-0 outline-none w-12 py-3 rounded-lg shadow text-center" maxLength={1} />
                                <input type="text" name="input5" className="border-0 outline-none w-12 py-3 rounded-lg shadow text-center" maxLength={1} />
                                <input type="text" name="input6" className="border-0 outline-none w-12 py-3 rounded-lg shadow text-center" maxLength={1} />
                            </div>
                            <button type="submit" className="outline-none w-2/3 py-1 rounded-md bg-indigo-800 text-white my-2">Verify</button>
                        </form>
                        <p className="text-sm">Didn't get the code? <span className="text-indigo-800">Request again</span></p>
                    </div>
                </div>
            </div>
            <div className="h-full w-full bg-gray-50">
                <img src={OtpRightImage} alt="" className="h-full w-full" />
            </div>
        </div>
    )
}

export default OtpPage;