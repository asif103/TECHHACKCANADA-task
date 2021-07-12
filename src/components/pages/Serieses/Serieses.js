import React, { useContext } from 'react'
import { Row } from 'react-bootstrap';
import { SeriesContext } from '../../../App';
import Series from '../../Series/Series';
import './Serieses.css'

function Serieses() {
    const [serieses] = useContext(SeriesContext);
    serieses.sort(
        (a, b) =>  a["title"].localeCompare(b["title"])
      );
    return (
        <div className="body">
            <div className="container py-5">
                <h2 className="text-center p-5 shadow my-5 border">All Series</h2>
                <Row className="g-4" xs={1} md={3} lg={4}>
                    {
                        serieses.slice(0,20).map((series, index)=> <Series series={series} key={index}></Series>)
                    }
                </Row>
            </div>
        </div>
    )
}

export default Serieses
