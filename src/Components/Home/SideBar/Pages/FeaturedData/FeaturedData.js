import React from 'react'
import './FeaturedData.css'
import { ArrowUpward,ArrowDownward } from '@material-ui/icons'

function FeaturedData() {
    return (
        <div>
            <div className="container" >
                <div className="row Data">
                    <div className="col-sm-3 Data-Item">
                        <h6 className="d-block">Revenue</h6>
                        <h4 className="d-inline">$2,414</h4>
                        <div className="d-inline p-3">-11.4 <ArrowDownward className="DownArrow"/></div>
                        <h6 className="description">Compared to last month</h6>
                    </div>
                    <div className="col-sm-3 Data-Item">
                        <h6 className="d-block">Sales</h6>
                        <h4 className="d-inline">$4,414</h4>
                        <div className="d-inline p-3">-1.6 <ArrowDownward className="DownArrow"/></div>
                        <h6 className="description">Compared to last month</h6>
                    </div>
                    <div className="col-sm-3 Data-Item">
                        <h6 className="d-block">Cost</h6>
                        <h4 className="d-inline">$1,414</h4>
                        <div className="d-inline p-3">+1.4 <ArrowUpward className="UpArrow"/></div>
                        <h6 className="description">Compared to last month</h6>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FeaturedData
