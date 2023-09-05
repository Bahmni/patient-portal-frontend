import { Grid, Row, Column } from "carbon-components-react";
import { ArrowLeft24 } from "@carbon/icons-react";
import React, { useState, useEffect } from "react";
import "./RecordsSection.scss";
import { useNavigate, useParams } from "react-router-dom";
import { callGet, getSingleVisit } from "../../utils/api-utils";
import RecordRenderer from "./RecordRenderer";
import { useAuthContext } from "../../hooks/useAuthContext";
import {
  formatDateToDDMMYYYY,
  parseDateStringToTime,
  formatStartDate,
  formatEndDate,
} from "../../utils/date-utils";

const RecordsSection = () => {
  let { visitUuid } = useParams();
  const navigate = useNavigate();
  const [visitDetails, setVisitDetails] = useState({});
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      if (visitUuid && user) {
        const res = await callGet(getSingleVisit(visitUuid), user.accessToken);
        if (res.status === 200) {
          setVisitDetails(res.data);
        }
      }
    };

    fetchData();
  }, [visitUuid, user]);

  const backToVisits = () => {
    navigate("/visits");
  };

  return (
    <div className="records__section__container">
      <h1 className="visit__details__heading">
        <ArrowLeft24
          style={{ cursor: "pointer" }}
          onClick={() => backToVisits()}
        />
        Visit Details
      </h1>
      <Grid className="visit__details__container">
        <Row className="visit__details__row">
          <Column>
            <p>
              <b>Start Date: </b>
              {formatDateToDDMMYYYY(visitDetails?.startDatetime)}
            </p>
            <p>Time: {parseDateStringToTime(visitDetails?.startDatetime)}</p>
          </Column>
          <Column>
            <p>
              <b>End Date: </b>
              {formatDateToDDMMYYYY(visitDetails?.stopDatetime)}
            </p>
            <p>Time: {parseDateStringToTime(visitDetails?.stopDatetime)}</p>
          </Column>
        </Row>
        <Row>
          <Column>
            <p>
              <b>Type</b>
            </p>
            <p
              style={{ width: "20%" }}
              className={visitDetails?.visitType?.name}
            >
              {visitDetails?.visitType?.name}
            </p>
          </Column>
        </Row>
      </Grid>
      <h1 className="records__details__heading">Records Details</h1>
      <div className="single__records__section">
        <RecordRenderer
          uuid={visitUuid}
          fromDate={formatStartDate(visitDetails?.startDatetime)}
          endDate={formatEndDate(visitDetails?.stopDatetime)}
        />
      </div>
    </div>
  );
};

export default RecordsSection;
