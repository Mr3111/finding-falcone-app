import {useQuery} from "react-query";
import {getRecipes} from "@services/tables";
import {useEffect, useState} from "react";
import {Column} from "react-table";
import {useAppDispatch, useAppSelector} from "~/hooks";
import {resetRecipes} from "~/reducers/recipeSlice";

// type Categories = "name" | "price" | "category" | "description" | "label";

type ColumnOption = Column &{
    disableSortBy?: boolean,
    disableGroupBy?: boolean,
    aggregate: string,
    Cell?: JSX.Element
}

const sortableColumns: Array<string> = ["name", "price"];
const groupableColumns: Array<string> = ["category"];
// const editableColumns: Array<string> = ["price"];

const columnAggregations: Record<string, string> = {
    name: "count",
    price: "count",
    label: "count",
    category: "count",
    description: "count",
};

// const cellRenderers: Record<string, (value: any) => JSX.Element> = {
//     price: (value: any) => <span>Hi{value}</span>,
// };

export const useRecipes = () => {
    const dispatch = useAppDispatch();
    const isResetEnabled = useAppSelector(({recipe}) => !recipe.isResetDisabled)
    const [recipesColumns, setRecipesColumns] = useState<Array<any>>([]);
    const [recipesRows, setRecipesRows] = useState<Array<any>>([]);
    const {data: recipes, isFetching, isError} = useQuery("recipes", getRecipes,
        {
            refetchOnWindowFocus: false,
        })

    const capitalize = (str: string) => {
        const words = str.split(" ");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }

        return words.join(" ");
    }

    const resetData = () => setRecipesRows(recipes);

    useEffect(()=>{
        if(!isResetEnabled){
            dispatch(resetRecipes(false))
            resetData();
        }
    }, [isResetEnabled])

    useEffect(() => {
        if (recipes) {
            const columns: Array<Column & ColumnOption> = [];
            Object.keys(recipes[0]).forEach((key: string) => {
                key.toUpperCase() !== "ID"
                && key.toUpperCase() !== "IMAGE"
                && columns.push({
                    Header: capitalize(key),
                    accessor: key,
                    disableSortBy: !sortableColumns.includes(key),
                    disableGroupBy: !groupableColumns.includes(key),
                    aggregate: columnAggregations[key],
                    // Cell: cellRenderers[key]
                })
            });
            setRecipesColumns(columns);
            setRecipesRows(recipes);
        }
    }, [recipes])

    return {recipes, recipesRows, setRecipesRows, recipesColumns, isFetching, isError, resetData};
}
