import React from "react";
import PropTypes from "prop-types";
import { conditionsHeaders } from "../../../utils/constants";
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "carbon-components-react";
import AdditionalNotes from "../AdditionalNotes/AdditionalNotes";
import { formatDateToDDMMYYYY } from "../../../utils/date-utils";
import { BsVirus } from "react-icons/bs";
import "./Condition.scss";

function Condition({ itemList }) {
  function filterProps(itemList) {
    const rowsArray = [];
    itemList?.map((item) => {
      const conditionObj = {
        id: item.id,
        date: formatDateToDDMMYYYY(item.recordedDate),
        condition: (
          <span>
            <BsVirus /> {item?.code?.text}
          </span>
        ),
        status: item?.clinicalStatus?.coding?.[0]?.code,
        notes: <AdditionalNotes resource={item} />,
      };
      rowsArray.push(conditionObj);
    });

    return rowsArray;
  }

  return (
    <div className="conditions__container">
      <DataTable rows={filterProps(itemList)} headers={conditionsHeaders}>
        {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableHeader
                    className="conditions__table__head"
                    key={header.key} // Add the "key" prop
                    {...getHeaderProps({ header })}
                  >
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow {...getRowProps({ row })} key={row.id}>
                  {row.cells.map((cell) => (
                    <TableCell className="conditions__table__row" key={cell.id}>
                      {cell.value}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </DataTable>
    </div>
  );
}

Condition.propTypes = {
  itemList: PropTypes.array.isRequired,
};

export default Condition;
