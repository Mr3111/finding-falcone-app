import {GrCheckmark, GrPowerReset} from "react-icons/gr";
import {MdRestaurantMenu} from "react-icons/md";
import Tooltip from "@components/Tooltip";
import {resetRecipes, saveRecipes} from "~/reducers/recipeSlice";
import {useAppDispatch, useAppSelector } from "~/hooks";

const Navbar = () => {
    const isSaveDisabled = useAppSelector(({recipe}) => recipe.isSaveDisabled)
    const isResetDisabled = useAppSelector(({recipe}) => recipe.isResetDisabled)
    const dispatch = useAppDispatch()
    return (
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <MdRestaurantMenu size={25} />
                </button>
            </div>
            <div className="flex-1 px-2 mx-2">
    <span className="text-lg font-bold">
            React Table demo
          </span>
            </div>
            <div className="flex-none">
                <Tooltip text="Save changes">
                    <button disabled={isSaveDisabled} onClick={() => dispatch(saveRecipes(true))} className="btn btn-square btn-success">
                        <GrCheckmark size={20} />
                    </button>
                </Tooltip>
                <Tooltip text="Reset">
                    <button disabled={isResetDisabled} onClick={() => dispatch(resetRecipes(true))} className="ml-2 btn btn-square btn-warning">
                        <GrPowerReset size={20} />
                    </button>
                </Tooltip>
            </div>
        </div>
    );
}

export default Navbar;
