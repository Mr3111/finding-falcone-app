/* eslint-disable react/jsx-key */
import {useTable, useSortBy, Row} from 'react-table';
import {BsFillArrowUpCircleFill, BsFillArrowDownCircleFill} from 'react-icons/bs';
import {FormEvent, useEffect, useState} from "react";

type EditableCellProps = {
    value: any,
    row: Row,
    column: any,
    updateMyData: any
}
const EditableCell = ({value: initialValue, row: {index}, column: {id}, updateMyData}: EditableCellProps) => {
    const [value, setValue] = useState(initialValue)

    const onChange = (e: FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onBlur = () => {
        updateMyData(index, id, value)
    }

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    return (
        <label className="input-group input-group-sm">
            <input value={value} onChange={onChange} onBlur={onBlur}
                   className="input input-bordered input-sm" />
        </label>
    )
}

const defaultColumn = {
    Cell: EditableCell,
}

type TableProps = {
    columns: any,
    data: any,
    className?: string,
    setRows: (value: any) => void
}
const Table = function ({columns, data, className, setRows}: TableProps): JSX.Element {
    const updateMyData = (rowIndex: number, columnId: string, value: any) => {
        setRows((old: Array<Row>) =>
            old.map((row, index) => {
                if (index === rowIndex) {
                    return {
                        ...old[rowIndex],
                        [columnId]: value,
                    }
                }
                return row
            })
        )
    }

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
            defaultColumn,
            // @ts-ignore
            updateMyData
        },
        useSortBy,
        // useGroupBy
    )

    return (
        <div className={`overflow-x-auto ${className}`}>
            <table className="table w-full" {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (

                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column: any) => (
                            // Add the sorting props to control sorting. For this example
                            // we can add them into the header props
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                <div className="flex">
                                    {column.render('Header')}
                                    {column.isSorted
                                        ? column.isSortedDesc
                                            ? <BsFillArrowDownCircleFill className="ml-1.5" size={15} />
                                            : <BsFillArrowUpCircleFill className="ml-1.5" size={15} />
                                        : ''}
                                    {column.canGroupBy ? (
                                        // If the column can be grouped, let's add a toggle
                                        <span {...column.getGroupByToggleProps()}>
                                            {column.isGrouped ? '🛑 ' : '👊 '}
                                        </span>
                                    ) : null}
                                </div>
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map(
                    (row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    )
                                })}
                            </tr>
                        )
                    }
                )}
                </tbody>
            </table>
        </div>
    )
}

export default Table;
