import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"

export type ColumnProps = {
    field : string,
    header : string,
}

export type DynamicDataTableProps = {
    columns : ColumnProps[],
    value : any[],
    header : any[],
    footer : any[],
}

const DynamicDataTable = (props : DynamicDataTableProps) => {
    return(
        <div>
            Dynamic Data Table
            <DataTable value={props.value} header={props.header} footer={props.footer}>
                {
                    props.columns.map((col, i) => (
                        <Column key={col.field} header={col.field} field={col.field}/>
                    ))
                }
            </DataTable>
        </div>
    )
} 

export default DynamicDataTable