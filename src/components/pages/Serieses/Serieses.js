import React, { useContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { SeriesContext } from '../../../App';
import Series from '../../Series/Series';

function Serieses() {
    const [serieses, setSerieses] = useContext(SeriesContext);
    serieses.sort(
        (a, b) =>  a["title"].localeCompare(b["title"])
      );
    return (
        <div className="container">
            <h2 className="text-center bg-light p-5 shadow my-5">All Series</h2>
            <Row className="g-4" xs={1} md={3} lg={4}>
                {
                    serieses.slice(0,20).map((series, index)=> <Series series={series} key={index}></Series>)
                }
            </Row>
        </div>
    )
}

export default Serieses
