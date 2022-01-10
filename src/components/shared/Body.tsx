import Paper from "@components/Paper";
import Table from "@components/Table";
import { useRecipes } from "@hooks/recipes";
// import {useAppSelector} from "~/hooks";

const Body = function () {
    // const isSaveEnabled = useAppSelector(({recipe}) => !recipe.isSaveDisabled)
    const {recipesRows, setRecipesRows, recipesColumns} = useRecipes();

    return <div className="flex-grow">
        <Paper>
             <Table className="ml-1" columns={recipesColumns} data={recipesRows} setRows={setRecipesRows} />
        </Paper>
    </div>
}

export default Body;
