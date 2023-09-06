import React, { useEffect, useState } from "react";
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Link,
} from "carbon-components-react";
import "./VisitSection.scss";
import { callGet, getPatientVisits } from "../../utils/api-utils";
import { visitHeadersDesktop } from "../../utils/constants";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { formatDateToDDMMYYYY } from "../../utils/date-utils";
import { useAuthContext } from "../../hooks/useAuthContext";

const VisitSection = () => {
  const [visitList, setVisitList] = useState([]);

  const { user } = useAuthContext();

  const navigate = useNavigate();

  function navigateRecord(visitUuid) {
    navigate(`/records/${visitUuid}`);
  }

  useEffect(() => {
    const fetchData = async () => {
      if (user?.accessToken) {
        const res = await callGet(getPatientVisits(), user.accessToken);
        if (res.status === 200) {
          setVisitList(res?.data?.visitList);
        }
      }
    };

    fetchData();
  }, []);

  function filterProps(visitList) {
    return visitList.map((visit) => {
      return {
        id: visit.uuid,
        startdate: formatDateToDDMMYYYY(visit.startDatetime),
        enddate: formatDateToDDMMYYYY(visit.stopDatetime),
        type: (
          <p key={visit.uuid} className={visit.visitType.name}>
            {visit.visitType.name}
          </p>
        ),
        view: (
          <Link key={visit.uuid} onClick={() => navigateRecord(visit.uuid)}>
            <span className="view__more__link">
              View <FaArrowRight />
            </span>
          </Link>
        ),
      };
    });
  }

  return (
    <div className="visit__page">
      <h1 className="visit__page__header">
        👋Welcome {user ? user.name : "Back"}
      </h1>
      <div className="visits__section">
        {visitList?.length > 0 && (
          <>
            <div className="table__container">
              <p>Here is a list of your visits : </p>
              <DataTable
                rows={filterProps(visitList)}
                headers={visitHeadersDesktop}
              >
                {({
                  rows,
                  headers,
                  getTableProps,
                  getHeaderProps,
                  getRowProps,
                }) => (
                  <Table {...getTableProps()}>
                    <TableHead>
                      <TableRow>
                        {headers.map((header) => (
                          <TableHeader
                            key={header.id}
                            className="visits__table__head"
                            {...getHeaderProps({ header })}
                          >
                            {header.header}
                          </TableHeader>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.id} {...getRowProps({ row })}>
                          {row.cells.map((cell) => (
                            <TableCell key={cell.id}>{cell.value}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </DataTable>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VisitSection;
