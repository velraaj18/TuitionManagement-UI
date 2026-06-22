import { Column } from "primereact/column";
import { DataTable, type DataTableValue } from "primereact/datatable";
import type { ReactNode } from "react";

export interface DynamicColumnProps<T extends DataTableValue> {
  field: keyof T;
  header: string;
  body?: (rowData: T) => ReactNode;
}

export interface DynamicDataTableProps<T extends DataTableValue> {
  columns: DynamicColumnProps<T>[];
  value: T[];
  header?: ReactNode;
  footer?: ReactNode;
}

function DynamicDataTable<T extends DataTableValue>(
  props: DynamicDataTableProps<T>,
) {
  return (
    <div>
      Dynamic Data Table
      <DataTable
        value={props.value}
        header={props.header}
        footer={props.footer}
      >
        {props.columns.map((col, i) => (
          <Column
            key={String(col.field)}
            field={String(col.field)}
            header={col.header}
            body={col.body}
          />
        ))}
      </DataTable>
    </div>
  );
}

export default DynamicDataTable;
