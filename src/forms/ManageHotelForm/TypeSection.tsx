import { useFormContext } from "react-hook-form";
import { hotelType } from "../../config/hotel-options-config";

const TypeSection = () => {
    const { register } = useFormContext();

    return (
        <div className="">
            <h2 className="text-2xl font-bold mb-3">Type</h2>
            <div className="grid grid-cols-5 gap-2">
                {hotelType.map((type) => (
                    <label>
                        <input type="radio" value={type} {...register("type", {
                            required: "This field is required",
                        })}
                        />
                        <span>{type}</span>
                    </label>
                ))}
            </div>
        </div>
    )
}

export default TypeSection;