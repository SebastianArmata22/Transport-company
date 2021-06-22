import React, { useEffect, useState } from 'react'

const TimeTable = () => {

    return (
      <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
                Grafik
            </h6>
        </div>
        <div className="card-body">
          <span>Lipiec</span>
          <table>
            <thead>
              <tr>
                <th>Pn</th>
                <th>Wt</th>
                <th>Śr</th>
                <th>Cz</th>
                <th>Pt</th>
                <th>Sb</th>
                <th>Nd</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default TimeTable
